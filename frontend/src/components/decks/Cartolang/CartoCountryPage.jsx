import React, { useContext, useState, useEffect, } from 'react';
import LayoutCartolang from '../../UI/LayoutCartolang.jsx';
import { CartoCountryDeck } from './CartoCountryDeck.jsx';
import CountryMapCard from './CountryMapCard.jsx';
import CartoCountryMap from './CartoCountryMap.jsx';
import { useParams } from "react-router-dom"
import { useSearchParams } from 'react-router-dom';
import { langdeck_countries } from '../../../assets/data/index.js';
import { TravelExploreIcon, } from '../../../assets/img/index.js';
import DeckContext from '../../../store/DeckContext';


const CartoCountryPage = () => {
    const params = useParams();

    const ctx = useContext(DeckContext);
    // la liste des pays pour la sélection
    const [countries, setCountries] = useState([]);
    // le pays qui va être sélectionné en aval par une fonction callback
    const [selectedCountry, setSelectedCountry] = useState(null);

    // fonct° callback qui récupère le pays sélectionné via la barre de menu
    const callBackFunction = (index) => {
        setSelectedCountry(countries[index-1]);
        ctx.current_deck.cartolang_deck = countries[index-1];
        // callBackFunctionMap(countries[index]["country_iso2"]);
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

    // on récupère le paramètre r 'code région alpha3' dans l'url
    const [searchParams] = useSearchParams();
    const r = searchParams.get("r");
    // on récupère dans un vecteur les pays de la région choisie
    const vkCountry = [];
    for (var i = 0; i < langdeck_countries.length; i++) {
        if (langdeck_countries[i].region_uid === r) {
            vkCountry.push(langdeck_countries[i]);
        }
    }
    console.log(params.id);
    useEffect(() => {
        setCountries(vkCountry);
    }, []);
    /*
        la 1ère fois :
        on itère et on peuple le vecteur 'navlinks' 
        qui contient les options de sélection affichées dans la barre de menu
        On ajoute un lien pour revenir au niveau sup.
    */
    if (!selectedCountry) {
        const arr = [];
        let item = {};
        item["id"] = "-1";
        item["label"] = "Retour";
        item["enabled"] = true;
        item["url"] = `/cartolang`;
        item["country_national_flag"] = TravelExploreIcon;
        arr.push(item);

        {
            vkCountry && vkCountry.sort((a, b) => a.country_name_en > b.country_name_en ? 1 : -1).map(
                (el, index,) => {
                    let item = {};
                    item["key"] = index;
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

    return (
        <>
            <LayoutCartolang callBackFunction={callBackFunction}>

                {/* si un pays est sélectionné, on affiche le deck de ce pays */}
                {countries && selectedCountry &&
                    <>
                        <CartoCountryMap deck={selectedCountry} callBackFunction={callBackFunctionMap}></CartoCountryMap>
                        <CartoCountryDeck
                            deck={selectedCountry}
                            callBackFunction={callBackFunctionMap} />
                    </>
                }

            </LayoutCartolang>
        </>
    )
}

export default CartoCountryPage