import React, { useState, useEffect, } from 'react';
import SubThemeDeck from './SubThemeDeck';

const ThemeDeck = ({ deck, language }) => {
    console.log(deck);


    return (
        <>
            <SubThemeDeck deck={deck[0].lessons} language={language}></SubThemeDeck>
        </>
    )
}

export default ThemeDeck