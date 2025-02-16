import React, { useState, useContext, useEffect, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import DeckContext from '../../../store/DeckContext';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import SmallButton from '../../UI/SmallButton';
import Button from '@mui/material/Button';
import { worldmap, hmrt_icon, home_video, } from '../../../assets/img/index.js';
import classes from "./card.module.css";




export const CartoSearchPage = ({ regions, countries, languages, }) => {

    const navigate = useNavigate();
    const [searchMode, setSearchMode] = React.useState('country');
    const [options, setOptions] = useState([]);
    const [vkCtry, setVkCtry] = useState([]);
    const [vkLang, setVkLang] = useState([]);
    const [toPage, setToPage] = useState ('search_country_page');

    const [searchValue, setSearchValue] = useState('');
    const [uid, setUid] = useState('');

    const ctx = useContext(DeckContext);

    const background = {
        backgroundImage: `url(${worldmap})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
    };

    // Liste des options (soit Pays soit Langues)
    useEffect(() => {
        const vk = [];
        {
            countries && countries.sort((a, b) => a.country_name_fr > b.country_name_fr ? 1 : -1).map(
                (el, index,) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.country_name_fr;
                    item["country_uid"] = el.country_uid;
                    item["label_en"] = el.country_name_en;
                    vk.push(item);
                }
            )
        }
        ctx.current_deck.countries = countries;
        setVkCtry(vk);
        setOptions(vk);
    }, [countries]);


    // Liste des options (soit Pays soit Langues)
    useEffect(() => {
        const vk = [];
        {
            languages && languages.sort((a, b) => a.language_name_fr > b.language_name_fr ? 1 : -1).map(
                (el, index,) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.language_name_fr;
                    item["language_uid"] = el.language_uid;
                    item["label_en"] = el.language_name_en;
                    vk.push(item);
                }
            )
        }
        ctx.current_deck.languages = languages;
        setVkLang(vk);
    }, [languages]);


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
        if (searchMode == "country") {
            for (var i = 0; i < countries.length; i++) {
                    if (countries[i].country_name_fr === value) {
                    idx = i;
                    setUid(countries[i].country_iso2);
                    setToPage ('search_country_page');
                }
            }
        } else {
            for (var i = 0; i < languages.length; i++) {
                if (languages[i].language_name_fr === value) {
                    idx = i;
                    setUid(languages[i].language_uid);
                    ctx.current_deck.language_deck = []
                    ctx.current_deck.language_deck[0] = languages[i];
                    setToPage ('carto_language_page');
                }
            }
        }

    };


    const handleRadioChange = (event) => {
        setSearchMode(event.target.value);
        if (event.target.value === 'country') {
            setOptions(vkCtry);
        } else {
            setOptions(vkLang);
        }
    };

    return (
        <>
                <video src={home_video} autoPlay loop playsinline muted></video>

            <main className={`${classes.video_background} mt-0`}>
                <section id="search" className='min-h-screen max-container' sx={{ display: 'flex', alignItems: 'center', }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh', }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', }}>
                            <Typography
                                sx={{ display: 'flex', justifyContent: 'center', }}
                                className={`font-articulat_cf leading-none tracking-tight font-black lg:text-4xl text-slate-700 mb-10`}>
                                langdeck
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'row', }} className="items-center">
                                <Autocomplete
                                    className='bg-white'
                                    id="combo-box-demo"
                                    options={options.map((option) => option.label)}
                                    sx={{ width: 600 }}
                                    renderInput={(params) => <TextField {...params} label="Votre recherche" />}
                                    onChange={handleChange}
                                />
                                <Link to={`/${toPage}/${uid}`}>
                                    <Button className="ml-4" variant="contained" size="large" sx={{ display: 'flex', }}>
                                        Valider
                                    </Button>
                                </Link>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', }} className="p-4">
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={searchMode}
                                        onChange={handleRadioChange}
                                    >
                                        <FormControlLabel value="country" control={<Radio />} label="Pays" />
                                        <FormControlLabel value="language" control={<Radio />} label="Langue" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                </section>
            </main>
        </>
    )
}
