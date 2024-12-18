import React from 'react';
import DeckCard from './DeckCard';
import classes from "./Deck.module.css";

const Deck = ({ deck }) => {
    return (
        <>
            <div className={`${classes.card__list}`}>
                {deck && deck.map(
                    (el) => {
                        return (<DeckCard key={el._id} card={el} />)
                    }
                )}
            </div>
        </>
    )
}

export default Deck