import React, { useState, useEffect, useContext, } from 'react';

import { useNavigate } from 'react-router-dom';
import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import ProjectImageList from "../components/UI/Media/ProjectImageList.jsx";
import { langdeck_projects_saynetes_wide, } from '../assets/img/index.js';
import { projects, saynetes_sections, } from "../assets/localData/data.js";
import { SaynetesMainSection, SaynetesLanguagesSection, SaynetesStoriesSection, } from '../sections/index.js';
import { useTheme } from '@mui/material';
import DeckContext from "../store/DeckContext";
import { json_data } from '../assets/data/index.js';

import Layout from '../components/UI/Layout';

const SaynetesPage = () => {
    const { palette } = useTheme();
    const { typography } = useTheme();
    const navigate = useNavigate();

    const [languages, setLanguages] = useState([]);

    let deckContext = useContext(DeckContext);

    const initNavlinks = (data) => {
        const arr = [];
        {
            data && data.map(
                (el) => {
                    let item = {};
                    item["label"] = el.label;
                    item["url"] = el.href;
                    arr.push(item);
                }
            )
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
        <Layout>
            <main className='relative'>
                <section id="main" className='min-h-screen max-container'>
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
                                    {projects[0].full_description.series}
                                </Typography>
                            </div>
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                                sx={{ ...dynamicStylesSubTitle }}>
                                {projects[0].full_description.title}
                            </Typography>
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                                sx={{ ...dynamicStylesSubSection }}>
                                {projects[0].full_description.sub_title}
                            </Typography>
                        </Box>

                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'leftlink', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                            <a href='#desc'>
                                <SmallButton label="Visite guidée" />
                            </a>
                        </Box>
                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link onClick={handleClick} to={{ pathname: `/language_page/` }}>
                                <SmallButton label={projects[0].full_description.button_text} />
                            </Link>
                        </Box>
                        <Box sx={{ gridArea: 'image', }}>
                            <img src={projects[0].full_description.illustration} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                        </Box>
                    </Box>
                </section>
                {/*
                MAIN SECTION
                */}
                <SaynetesMainSection updateNavlinks={updateNavlinks}/>

                <SaynetesLanguagesSection updateNavlinks={updateNavlinks}/>

                <SaynetesStoriesSection />

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
            </main>
        </Layout >
    )
}

export default SaynetesPage