import React from 'react'
import { useParams } from "react-router-dom";

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import CountryMapCard from './CountryMapCard.jsx';

export const CartoCountryDeck = ({ deck, callBackFunction, }) => {
    let { id } = useParams();

    console.log(deck);

    const handleClick = (event) => {
        callBackFunction(event.currentTarget.id);
    };

    const setUpdatedCountry = (updatedCountry) => {
        {/*
            on récupère le code alpha2 et on le remonte
        */}
        id = updatedCountry._dataItem._settings.id;
        callBackFunction(id);
    }

    return (
        <>

            <Box>
                <Typography>
                    {deck.country_name_native}
                </Typography>
            </Box>
        </>
    )
}
