import React, { useContext, useState, useEffect, } from 'react';
import LayoutCartolang from '../../UI/LayoutCartolang.jsx';
import { useParams } from "react-router-dom"

import { useSearchParams } from 'react-router-dom';
import { langdeck_countries } from '../../../assets/data/index.js';
import CountryDashboardCard from './CountryDashboardCard.jsx';
import AppBarCartolang from '../../UI/Navigation/AppBarCartolang.jsx';
import CountryCard from './CountryCard.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import classes from './card.module.css';
import DeckContext from '../../../store/DeckContext';


export const CountryDashboard = () => {
    let { id } = useParams()

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [country, setCountry] = useState([]);
    const [uid, setUid] = useState('')

    const [searchParams] = useSearchParams();
    const r = searchParams.get("r");
    const vkCountry = [];
    const index = 0;

    const callBackFunction = (index) => {
        setSelectedCountry(country[index]);
        console.log(index);
    };

    const callBackFunctionMapEvent = (updatedCountry) => {
        setUid(updatedCountry);
        id = updatedCountry;
        setSelectedCountry (id);
        console.log(selectedCountry);
        console.log(updatedCountry);
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

    const ctx = useContext(DeckContext);
    if (!selectedCountry) {
        const arr = [];
        {
            vkCountry && vkCountry.sort((a, b) => a.country_name_en > b.country_name_en ? 1 : -1).map(
                (el, index,) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.country_name_fr;
                    item["enabled"] = true;
                    item["url"] = `/country_page/${el.country_uid}?r=${el.country_uid}`;
                    item["country_national_flag"] = el.country_national_flag;
                    arr.push(item);
                }
            )
        }
        ctx.current_deck.navlinks = arr;
    }

    // console.log(vkCountry);

    return (
        <>
            <LayoutCartolang callBackFunction={callBackFunction}>
                {
                    country && selectedCountry &&
                    <>
                        {/* <AppBarCartolang callBackFunction={callBackFunction} /> */}
                        <CountryDashboardCard
                            deck={vkCountry}
                            card={selectedCountry}
                            callBackFunction={callBackFunction}
                            callBackFunctionMapEvent={callBackFunctionMapEvent}>
                        </CountryDashboardCard>
                    </>
                }
            </LayoutCartolang>
        </>
    )
}
