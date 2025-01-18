import React, { useState, useEffect, } from 'react';
import StoryDeck from './StoryDeck';

const SubThemeDeck = ({ deck, language }) => {
    return (
        <>
            <StoryDeck deck={deck[0].stories} language={language}></StoryDeck>
        </>
    )
}

export default SubThemeDeck