import React, { useContext, useEffect, useState, } from 'react';
import LanguageCard from '../UI/MUI/Card/LanguageCard';
import classes from './Deck.module.css';
import DeckContext from "../../store/DeckContext";


const LanguageDeck = ({ deck }) => {
  const ctx = useContext(DeckContext);
  const arr = [];
  {
    deck && deck.sort((a,b) => a.lang_is_available > b.lang_is_available ? -1 : 1).map(
      (el, index, ) => {
        let item = {};
        item["id"] = index;
        item["label"] = el.lang_name_native;
        item["enabled"] = el.lang_is_available;
        item["url"] = `/theme_page/${el.language}?l=${el.language}`;
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
            return (<LanguageCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>
  )
}

export default LanguageDeck