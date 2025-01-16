import React, { useState, useEffect, useContext, } from 'react';

import { useNavigate } from 'react-router-dom';
import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    projects,
    saynetes_sections,
} from "../assets/localData/data.js";
import {
    SaynetesHomeSection,
    SaynetesDescriptionSection,
    SaynetesCardSystemSection,
    SaynetesAboutSection,
} from '../sections/index.js';
import { useTheme } from '@mui/material';
import DeckContext from "../store/DeckContext";
import { json_data } from '../assets/data/index.js';

import Layout from '../components/UI/Layout';

const SaynetesPage = () => {

    const navigate = useNavigate();

    const [languages, setLanguages] = useState([]);

    let deckContext = useContext(DeckContext);

    const initNavlinks = (data) => {
        const arr = [];
        {
            let item = {};
            item["label"] = "Home Page";
            item["url"] = "#main";
            item["enabled"] = true;
            arr.push(item);
            data && data.map(
                (el) => {
                    let item = {};
                    item["label"] = el.label;
                    item["url"] = el.href;
                    item["enabled"] = true;
                    arr.push(item);
                }
            )
            item = {};
            item["label"] = "Vers les saynètes";
            item["url"] = "/language_page/";
            item["enabled"] = true;
            arr.push(item);
        }
        deckContext.current_deck.navlinks = arr;
    };

    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);
        initNavlinks(saynetes_sections);
    }, []);

    const updateNavlinks = (languages) => {
        const arr = [];
        {
            languages && languages.map(
                (el, index) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.lang_name_native;
                    item["url"] = `/theme_page/${el.language}?l=${el.language}`;
                    arr.push(item);
                }
            )
        }
        deckContext.current_deck.navlinks = arr;
    }

    const callbackModal = () => {
        updateNavlinks(languages);
        deckContext.deck = languages;
        deckContext.current_deck.language_deck = languages;
    };

    const callBack = (href) => {
        navigate(href);
        /* After replacing the url, manually calling navigate(0) will refresh the page automatically!
            This will work in a situation like navigate from /same_path/foo to /same_path/bar. 
            https://stackoverflow.com/questions/68825965/react-router-v6-usenavigate-doesnt-navigate-if-replacing-last-element-in-path
        */
        navigate(0);
    };

    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');

    const dynamicStylesTitle = {
        ...mq_xs && { typography: "h4", variant: "h4", height: 70, bgcolor: "none", },
        ...mq_sm && { typography: "h4", variant: "h4", height: 50, bgcolor: "none", },
        ...mq_md && { typography: "h3", variant: "h3", height: 50, bgcolor: "none", },
        ...mq_lg && { typography: "h2", variant: "h2", height: 75, bgcolor: "none", },
        ...mq_xl && { typography: "h1", variant: "h1", height: 100, bgcolor: "none", },
    }
    const dynamicStylesSubTitle = {
        ...mq_xs && { typography: "h6", variant: "h6", height: 50, bgcolor: "none", },
        ...mq_sm && { typography: "h5", variant: "h5", height: 50, bgcolor: "none", },
        ...mq_md && { typography: "h4", variant: "h4", height: 50, bgcolor: "none", },
        ...mq_lg && { typography: "h3", variant: "h3", height: 75, bgcolor: "none", },
        ...mq_xl && { typography: "h2", variant: "h2", height: 100, bgcolor: "none", },
    }
    const dynamicStylesSubSection = {
        ...mq_xs && { typography: "body2", variant: "body2", height: 50, bgcolor: "none", },
        ...mq_sm && { typography: "body1", variant: "body1", height: 50, bgcolor: "none", },
        ...mq_md && { typography: "h6", variant: "h6", height: 50, bgcolor: "none", },
        ...mq_lg && { typography: "h5", variant: "h5", height: 75, bgcolor: "none", },
        ...mq_xl && { typography: "h4", variant: "h4", height: 100, bgcolor: "none", },
    }

    const minMediaSize = useMediaQuery('(max-width:600px)');


    return (
        <main>
            <Layout>
                <SaynetesHomeSection
                    dynamicStylesTitle={dynamicStylesTitle}
                    dynamicStylesSubTitle={dynamicStylesSubTitle}
                    dynamicStylesSubSection={dynamicStylesSubSection}
                    callbackModal={callbackModal} />
                <SaynetesDescriptionSection dynamicStylesTitle={dynamicStylesSubTitle}/>
                <SaynetesCardSystemSection dynamicStylesTitle={dynamicStylesSubSection}/>
                <SaynetesAboutSection dynamicStylesTitle={dynamicStylesSubSection}/>
            </Layout >
        </main>

    )
}

export default SaynetesPage