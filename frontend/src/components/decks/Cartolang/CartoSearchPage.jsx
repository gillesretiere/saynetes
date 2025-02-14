import React, { useState, useContext, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import DeckContext from '../../../store/DeckContext';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import SmallButton from '../../UI/SmallButton';

export const CartoSearchPage = ({ regions, countries, languages, }) => {

    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState('');
    const [uid, setUid] = useState('');

    const ctx = useContext(DeckContext);

    const vkCty = [];
    {
        countries && countries.sort((a, b) => a.country_name_fr > b.country_name_fr ? 1 : -1).map(
            (el, index,) => {
                let item = {};
                item["id"] = index;
                item["label"] = el.country_name_fr;
                item["country_uid"] = el.country_uid;
                item["label_en"] = el.country_name_en;
                vkCty.push(item);
            }
        )
    }
    ctx.current_deck.countries = countries;

    const arr = [];
    {
        regions && regions.sort((a, b) => a.region_alpha2 > b.region_alpha2 ? 1 : -1).map(
            (el, index,) => {
                let item = {};
                item["id"] = index;
                item["label"] = el.region_name_fr;
                item["enabled"] = true;
                item["url"] = `/country_page/${el.region_uid}?r=${el.region_uid}`;
                arr.push(item);
            }
        )
    }
    ctx.current_deck.navlinks = arr;


    const handleChange = (event, value) => {
        setSearchValue(value);
        let idx = 0;
        for (var i = 0; i < countries.length; i++) {
            if (countries[i].country_name_fr === value) {
                idx = i;
                setUid(countries[i].country_iso2);
            }
        }
    };

    return (
        <>
            <main>
                <section id="search" className='min-h-screen max-container'>
                    <Box className="m-4 p-7">
                        <Autocomplete
                            id="combo-box-demo"
                            options={vkCty.map((option) => option.label)}
                            sx={{ width: 600 }}
                            renderInput={(params) => <TextField {...params} label="Votre recherche" />}
                            onChange={handleChange}
                        />
                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-start' }}>
                            <Link to={`/search_country_page/${uid}`}>
                                <SmallButton label="GO" />
                            </Link>
                        </Box>
                    </Box>
                </section>
            </main>
        </>
    )
}
