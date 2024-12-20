import React, { useState, useEffect, } from 'react';
import ThemeDeck from './ThemeDeck';

const FilteredDeck = ({ deck, language }) => {

    return (
        <>
        {
           <ThemeDeck deck={deck[0].themes} language={language}></ThemeDeck>
        }
            
        </>
    )
}

export default FilteredDeck