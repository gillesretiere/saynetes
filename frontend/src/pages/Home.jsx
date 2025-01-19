import React, { useState, useEffect, useContext, } from 'react';

import { useNavigate } from 'react-router-dom';

import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Layout from '../components/UI/Layout';

import { projects, home_sections, saynetes_sections, } from "../assets/localData/data.js";
import { json_data } from '../assets/data/index.js';
import DeckContext from "../store/DeckContext";

import { useTheme } from '@mui/material';

import {
    PorfolioMainSection, PortfolioSection, PortfolioSolutionsSection, PortfolioSaynetesSection, PortfolioCartolangSection, PortfolioDialangoSection, PortfolioAboutSection,
} from "../sections";



const Home = () => {
    const { palette } = useTheme();
    const { typography } = useTheme();
    const navigate = useNavigate();

    const [languages, setLanguages] = useState([]);

    const deckContext = useContext(DeckContext);

    const initNavlinks = (data) => {
        const arr = [];
        {
            data && data.map(
                (el, index) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.label;
                    item["url"] = el.href;
                    item["enabled"] = true;
                    arr.push(item);
                }
            )
        }
        deckContext.current_deck.navlinks = arr;
    };

    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);
        initNavlinks(home_sections);
    }, []);

    const updateNavlinks = (languages) => {
        const arr = [];
        {
            languages && languages.map(
                (el, index) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.lang_name_native;
                    item["enabled"] = el.lang_is_available;
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
                <PorfolioMainSection
                    dynamicStylesTitle={dynamicStylesTitle}
                    dynamicStylesSubTitle={dynamicStylesSubTitle}
                />
                <PortfolioSection />
                <PortfolioSolutionsSection dynamicStylesTitle={dynamicStylesSubTitle} />
                <PortfolioCartolangSection dynamicStylesTitle={dynamicStylesSubTitle} />
                <PortfolioDialangoSection></PortfolioDialangoSection>
                <PortfolioAboutSection dynamicStylesTitle={dynamicStylesSubTitle} />
                {
                    /*
                    projects && projects.map((item) => (
                        <ProjectSection project={item} dynamicStylesSubTitle={dynamicStylesSubTitle} dynamicStylesSubSection={dynamicStylesSubSection} minMediaSize={minMediaSize} />
                    ))
                        */
                }

            </Layout >
        </main>
    )
}

export default Home