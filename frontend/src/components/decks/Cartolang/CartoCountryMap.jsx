import React, { useState, } from 'react';

import CountryMapCard from './CountryMapCard.jsx';
import { Box } from '@mui/material';



const CartoCountryMap = ({ deck, callBackFunction, }) => {

    const setUpdatedCountry = (updatedCountry) => {
        {/*
            on récupère le code alpha2 et on le remonte
        */}
        callBackFunction(updatedCountry._dataItem._settings.id);
    }

    return (
        <>
            <Box>
                <CountryMapCard sx={{ height: '400px' }} country={deck} setUpdatedCountry={setUpdatedCountry}></CountryMapCard>
            </Box>
        </>
    )
}

export default CartoCountryMap