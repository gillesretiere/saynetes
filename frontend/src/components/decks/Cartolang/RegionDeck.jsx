import React, { useContext, } from 'react';

import classes from '../Deck.module.css';
import RegionCard from './RegionCard';
import DeckContext from '../../../store/DeckContext';


const RegionDeck = ({ deck }) => {
  // console.log(deck);
  const ctx = useContext(DeckContext);

  const arr = [];
  {
    deck && deck.sort((a,b) => a.region_alpha2 > b.region_alpha2 ? 1 : -1).map(
      (el, index, ) => {
        let item = {};
        item["id"] = index;
        item["label"] = el.region_name_fr;
        item["enabled"] = true;
        item["url"] = `/country_page/${el.region_uid}?r=${el.region_uid}`;
        arr.push(item);
      }
    )
  }
  ctx.current_deck.navlinks = arr;

  return (
    <>
      <div className={`${classes.card__list}`}>
        {deck && deck.map(
          (el) => {
            return (<RegionCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>
  )
}

export default RegionDeck