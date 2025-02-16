import React, { useContext, useState, useEffect, } from 'react';

import { Route, Link, Routes, useParams } from 'react-router-dom';
import Layout from '../../UI/Layout';
import DeckContext from '../../../store/DeckContext';
import { langdeck_countries } from '../../../assets/data/index.js';
import { CartoCountryDeck } from './CartoCountryDeck.jsx';
import CartoCountryMap from './CartoCountryMap.jsx';




const SearchCountryPage = () => {

    const ctx = useContext(DeckContext);

    const params = useParams();
    const [countries, setCountries] = useState([]);
    // le pays qui va être sélectionné en aval par une fonction callback
    const [selectedCountry, setSelectedCountry] = useState(null);

    const getCountryIndexByUid = (uid) => {
        let idx = 0;
        if (! countries) { return null };
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].country_iso2 === uid) {
                idx = i;
                ctx.current_deck.cartolang_deck = countries[i];
                setSelectedCountry(countries[i]);
            }
        }
        return countries[idx];
    };

    useEffect(() => {
        setCountries(ctx.current_deck.countries);
    }, [ctx.current_deck.countries]);

    useEffect(() => {
        getCountryIndexByUid(params.id);
    }, [countries]);


    // fonct° callback qui récupère le pays sélectionné via la barre de menu
    const callBackFunction = () => {
        return;
    };

    // fonct° callback qui récupère le pays sélectionné via la carte interactive
    const callBackFunctionMap = (alpha2) => {
        for (var i = 0; i < langdeck_countries.length; i++) {
            if (langdeck_countries[i].country_iso2 === alpha2) {
                setSelectedCountry(langdeck_countries[i]);
                ctx.current_deck.cartolang_deck = langdeck_countries[i];
            }
        }
    };

    return (
        <>
            <Layout>
                {selectedCountry &&
                    <>
                        <CartoCountryMap
                            deck={selectedCountry}
                            callBackFunction={callBackFunctionMap}>
                        </CartoCountryMap>

                        <CartoCountryDeck
                            deck={selectedCountry}
                            callBackFunction={callBackFunctionMap} />
                    </>
                }
                {/* else null => navigate somewhere... */}
            </Layout>

        </>
    )
}

export default SearchCountryPage