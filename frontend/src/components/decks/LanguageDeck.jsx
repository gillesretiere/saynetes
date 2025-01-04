import React, { useContext, useEffect, useState, } from 'react';
import LanguageCard from '../UI/MUI/Card/LanguageCard';
import classes from './Deck.module.css';
import DeckContext from "../../store/DeckContext";


const LanguageDeck = ({ deck }) => {
  let deckContext = useContext(DeckContext);

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