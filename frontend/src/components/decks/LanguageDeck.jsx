import React from 'react';
import LanguageDeckCard from './LanguageDeckCard';
import classes from './Deck.module.css';

const LanguageDeck = ({ deck }) => {
  return (
    <>
      <div className={`${classes.card__list}`}>
        {deck && deck.map(
          (el) => {
            return (<LanguageDeckCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>
  )
}

export default LanguageDeck