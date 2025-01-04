import React from 'react';
import { useNavigate } from 'react-router-dom';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Layout from '../components/UI/Layout';
import ProjectImageList from "../components/UI/Media/ProjectImageList.jsx";

import { man_blue_bg, } from '../assets/img/index.js';
import { projects } from "../assets/localData/data.js";
import { useTheme } from '@mui/material';

import {
    ProjectSection,
} from "../sections";


const Home = () => {
    const { palette } = useTheme();
    const { typography } = useTheme();
    const navigate = useNavigate();

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
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                                sx={{ ...dynamicStylesTitle }}>
                                <p className={`xs:break-normal`}>Design et créativité</p>
                            </Typography>
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                                sx={{ ...dynamicStylesSubTitle }}>
                                Mise en valeur de vos contenus numériques
                            </Typography>
                        </Box>

                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'leftlink', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                            <Link to={{ pathname: `/language_page/` }}>
                                <SmallButton label="Visite guidée" />
                            </Link>
                        </Box>
                        <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-end' }}>
                            <Link to={{ pathname: `/language_page/` }}>
                                <SmallButton label="à propos" />
                            </Link>
                        </Box>
                        <Box sx={{ gridArea: 'image', }}>
                            <img src={man_blue_bg} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                        </Box>
                    </Box>
                </section>
                <section id="portfolio">
                    <Box
                        className={`mb-60`}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: 1,
                            gridTemplateRows: 'auto',
                            gridTemplateAreas: {
                                xs:
                                    `"pf1 pf1 pf1 pf1"
                                    "pf2 pf2 pf2 pf2"
                                    "carousel carousel carousel carousel"
                            `,
                                md:
                                    `"pf1 pf2 pf2 pf2"
                                    ". carousel carousel carousel"
                            `,
                            },
                        }}
                    >
                        <Box className={`mx-0 px-4`} sx={{ gridArea: 'pf1', }}>
                            <Typography className={`font-articulat_cf font-normal`}
                                sx={{ typography: { xs: "h6", }, }}>
                                Portfolio
                            </Typography>
                        </Box>
                        <Box className={`mx-0 px-4`} sx={{ gridArea: 'pf2', }}>
                            <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                                sx={{ ...dynamicStylesSubTitle }}>
                                Langdeck
                            </Typography>
                            <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                                sx={{ ...dynamicStylesSubSection }}>
                                Applications numériques pour communiquer sur diverses thématiques, à l'attention des professionnels de santé et des non francophones.
                            </Typography>
                            <Box className={minMediaSize ? `mx-0 mt-6 px-0` : `mx-0 px-0`} sx={{ gridArea: 'carousel', }}>
                                <ProjectImageList projects={projects} minMediaSize={minMediaSize} callBack={callBack} />
                            </Box>
                        </Box>

                    </Box>
                </section>

                {
                    projects && projects.map((item) => (
                        <ProjectSection project={item} dynamicStylesSubTitle={dynamicStylesSubTitle} dynamicStylesSubSection={dynamicStylesSubSection} minMediaSize={minMediaSize}/>
                    ))
                }

            </Layout >
        </main>
    )
}

export default Home