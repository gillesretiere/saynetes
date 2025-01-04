import React from 'react';
import CountryLanguageCard from './CountryLanguageCard';
import classes from './card.module.css';

const CountryLanguageDeck = ({ card }) => {
    return (
        <>
            <div className={`${classes.card__list}`}>
                <CountryLanguageCard card={card} />
            </div>
        </>
    )
}

export default CountryLanguageDeck