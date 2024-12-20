import React from 'react';
import DeckCard from './DeckCard';
import StoryCard from '../UI/MUI/Card/StoryCard';
import classes from "./Deck.module.css";

const StoryDeck = ({ deck, language }) => {
  console.log(deck);
  console.log(language);
  return (
    <>
      <div className={`${classes.card__list}`}>
        {deck && deck.map(
          (el) => {
            return (<StoryCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>

  )
}

export default StoryDeck