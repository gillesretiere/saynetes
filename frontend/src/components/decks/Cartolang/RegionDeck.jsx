import React from 'react';
import classes from '../Deck.module.css';
import RegionCard from './RegionCard';

const RegionDeck = ({ deck }) => {
  console.log(deck);
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