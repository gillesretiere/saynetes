import React from 'react';
import DialogCard from '../UI/MUI/Card/DialogCard';
import classes from './Deck.module.css';

const DialogDeck = ({deck}) => {
    console.log (deck);
  return (
    <>
      <div className={`${classes.card__list}`}>
        {deck && deck.map(
          (el) => {
            return (<DialogCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>
  )
}

export default DialogDeck