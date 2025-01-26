import React from 'react';
import LanguageMapComponent from './LanguageMapComponent';

const CartoCountryLanguageCardPopperMap = ({ langDeck }) => {
    const { language_countries } = langDeck;
    return (
        <>
            <LanguageMapComponent language={langDeck}></LanguageMapComponent>
        </>
    )
}

export default CartoCountryLanguageCardPopperMap