import React, { useState, useEffect, useContext, } from 'react';

import { useNavigate } from 'react-router-dom';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Layout from '../components/UI/Layout';
import ProjectImageList from "../components/UI/Media/ProjectImageList.jsx";

import { man_blue_bg, langdeck_projects_saynetes_smart_1, } from '../assets/img/index.js';
import { projects, home_sections, saynetes_sections, } from "../assets/localData/data.js";
import { json_data } from '../assets/data/index.js';
import DeckContext from "../store/DeckContext";

import { useTheme } from '@mui/material';

import {
    ProjectSection,
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

    const handleClick = () => {
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
                <section id="main">
                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 1,
                            gridTemplateRows: 'auto',
                            gridTemplateAreas: {
                                xs:
                                    `"header header header ."
                            "leftlink . . rightlink"
                            "image image image image"
                            `,
                                md:
                                    `"header header header ."
                            "leftlink . . rightlink"
                            "image image image image"
                            `,
                            },
                        }}
                    >
                        <Box className={`mx-0 p-4`} sx={{ gridArea: 'header', height: '30vh' }}>
                            <div className={`xs:break-normal`}>
                                <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                                    sx={{ ...dynamicStylesTitle }}>
                                    Design + créativité
                                </Typography>
                            </div>
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                                sx={{ ...dynamicStylesSubTitle }}>
                                Mise en valeur de vos contenus numériques
                            </Typography>
                        </Box>
                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'leftlink', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                            <Link to={{ pathname: `/saynetes_page/` }}>
                                <SmallButton label="Visite guidée" />
                            </Link>
                        </Box>
                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link onClick={handleClick} to={{ pathname: `/language_page/` }}>
                                <SmallButton label="Saynètes" />
                            </Link>
                        </Box>
                        <Box sx={{ gridArea: 'image', }}>
                            <img src={man_blue_bg} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                        </Box>
                    </Box>
                </section>
                <section id="proj" className='min-h-screen max-container'>
                    <Box
                        className={`mb-60`}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 1,
                            gridTemplateRows: 'auto',
                            gridTemplateAreas: {
                                xs:
                                    `
                                    "pf1 pf1 pf1 pf1"
                                    "pf2 pf2 pf2 pf2"
                            `,
                                md:
                                    `
                                    "pf1 pf1 pf1 pf1"
                                    "pf2 pf2 pf2 pf2"
                            `,
                            },
                        }}
                    >
                        <Box className={`mx-10 p-4 h-60 sm:h-72 xl:h-96`} sx={{ gridArea: 'pf1', height: '30vh', }}>
                            <Typography className={`font-articulat_cf text-xl md:text-xl xl:text-2xl font-thin`}>
                                Portfolio
                            </Typography>
                        </Box>
                        <Box className={`mx-0 p-4 bg-slate-gray`} sx={{ gridArea: 'pf2', height: '60vh', }}>
                            <Box className="mx-10">
                                <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                                    sx={{ ...dynamicStylesSubTitle }}>
                                    Langdeck
                                </Typography>
                                <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                                    sx={{ ...dynamicStylesSubSection }}>
                                    Applications numériques pour communiquer sur diverses thématiques, à l'attention des professionnels de santé et des non francophones.
                                </Typography>
                                {/*
                            <Box className={minMediaSize ? `mx-0 mt-6 px-0` : `mx-0 px-0`} sx={{ gridArea: 'carousel', }}>
                                <ProjectImageList projects={projects} minMediaSize={minMediaSize} callBack={callBack} />
                            </Box>
                            */}
                            </Box>

                        </Box>
                    </Box>
                </section>

                <section id="sayn" className='min-h-screen max-container'>
                    <Box
                        className={`mb-60`}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 1,
                            gridTemplateRows: 'auto',
                            gridTemplateAreas: {
                                xs:
                                    `
                                    "titr titr titr titr"
                                    "imag imag desc desc"
                                    "imag imag comp comp"
                                    "clip clip clip clip"
                            `,
                                xl:
                                    `
                                    "titr titr titr titr"
                                    "imag desc comp comp"
                                    "imag desc clip clip"
                            `,
                            },
                        }}
                    >
                        <Box className={`mx-10 p-4 h-60 sm:h-72 xl:h-96`} sx={{ gridArea: 'titr', height: '30vh', }}>
                            <Typography className={`font-articulat_cf text-2xl md:text-4xl xl:text-6xl font-thin`}>
                                Les Saynètes
                            </Typography>
                        </Box>
                        <Box className={`mx-10 p-4`} sx={{ gridArea: 'imag', }}>
                            <img src={langdeck_projects_saynetes_smart_1} width="auto" className='max-h-[540px] object-cover' />
                        </Box>
                        <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                            <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase`}>
                                Description du projet
                            </Typography>
                            <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}
                                sx={{ ...dynamicStylesSubSection }}>
                                Un projet éducatif et thérapeutique multilingue.
                            </Typography>
                        </Box>
                        <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                            <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}
                                sx={{ ...dynamicStylesSubSection }}>
                                Les saynètes sont de petites histoires mettant en scène des personnages. Elles ont pour objectif de sensibiliser sur des thèmes comme le diabète, l'alimentation et la pratique d'exercices physiques, à l'usage des non francophones.
                            </Typography>
                        </Box>
                        <Box className={`mx-20 my-10 p-4`} sx={{ gridArea: 'clip', }}>
                            <Card
                                sx={{
                                    display: 'flex', marginLeft: "auto",
                                    marginRight: "auto",
                                    boxShadow: 3
                                }}>

                                <CardMedia
                                    component="video"
                                    image={saynetes_sections[saynetes_sections.findIndex(p => p.id == "hist")].illustration}
                                    title="Les Saynètes"
                                    type='video/mp4'
                                    controls
                                />
                            </Card>
                        </Box>
                    </Box>
                </section>

                {
                    /*
                    projects && projects.map((item) => (
                        <ProjectSection project={item} dynamicStylesSubTitle={dynamicStylesSubTitle} dynamicStylesSubSection={dynamicStylesSubSection} minMediaSize={minMediaSize} />
                    ))
                        */
                }
                <section id="apro" className='min-h-screen max-container'>
                    <Box className={`mx-0 p-4`}>
                        <div className={`xs:break-normal`}>
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                                sx={{ ...dynamicStylesTitle }}>
                                A propos
                            </Typography>
                        </div>
                    </Box>
                </section>
            </Layout >
        </main>
    )
}

export default Home