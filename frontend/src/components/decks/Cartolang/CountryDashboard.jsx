import React, { useContext, useState, useEffect, } from 'react';
import Layout from '../../UI/Layout.jsx';
import { useSearchParams } from 'react-router-dom';
import { langdeck_countries } from '../../../assets/data/index.js';
import CountryDashboardCard from './CountryDashboardCard.jsx';
import CountryCard from './CountryCard.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import classes from './card.module.css';

export const CountryDashboard = () => {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [country, setCountry] = useState([]);
    const [searchParams] = useSearchParams();
    const r = searchParams.get("r");
    const vkCountry = [];
    const index=0;

    const callBackFunction = (index) => {
        console.log(country[index]);
        setSelectedCountry(country[index]);
    };

    for (var i = 0; i < langdeck_countries.length; i++) {
        if (langdeck_countries[i].region_uid === r) {
            vkCountry.push(langdeck_countries[i]);
        }
    }
    useEffect(() => {
        setCountry(vkCountry);
        setSelectedCountry(vkCountry[index])
    }, []);

    return (
        <>
            {
                country && selectedCountry && 
            <CountryDashboardCard deck={vkCountry} card={selectedCountry} callBackFunction={callBackFunction} ></CountryDashboardCard>

            }
        </>
    )
}
