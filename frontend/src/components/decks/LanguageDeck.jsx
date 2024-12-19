import React from 'react';
import LanguageDeckCard from './LanguageDeckCard';
import LanguageCard from '../UI/MUI/Card/LanguageCard';
import classes from './Deck.module.css';

const LanguageDeck = ({ deck }) => {
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