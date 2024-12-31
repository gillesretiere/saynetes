import React from 'react';
import SmallButton from '../components/UI/SmallButton';
import { Link } from "react-router-dom";

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Layout from '../components/UI/Layout';
import classes from "./Pages.module.css";
import ProjectCard from '../components/UI/MUI/Card/ProjectCard.jsx';
import ProjectImageList from "../components/UI/Media/ProjectImageList.jsx";

import { homepage, langdeck_projects_cartolang_smart, langdeck_projects_dialango_smart, langdeck_projects_saynetes_wide, man_blue_bg, } from '../assets/img/index.js';
import { projects } from "../assets/localData/data.js";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const Home = () => {

    console.log(projects);

    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');

    const dynamicStylesListItem = {
        ...mq_xs && { variant: "h6", height: 250, },
        ...mq_sm && { variant: "h4", height: 400, },
        ...mq_md && { variant: "h2", height: 350, },
        ...mq_lg && { variant: "h1", height: 350, },
        ...mq_xl && { variant: "h1", height: 450, },
    }
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

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <main>
            <Layout>
                <section>
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
                <section>
                    <Box
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
                        <Box className={`mx-0 px-4`} sx={{ gridArea: 'pf2',}}>
                            <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                                sx={{ ...dynamicStylesSubTitle }}>
                                Langdeck
                            </Typography>
                            <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                                sx={{ ...dynamicStylesSubSection }}>
                                Applications numériques pour communiquer sur diverses thématiques, à l'attention des professionnels de santé et des non francophones.
                            </Typography>
                            <Box className={matches ? `mx-0 mt-6 px-0` : `mx-0 px-0`} sx={{ gridArea: 'carousel', }}>
                                <p>Carousel</p>
                                <ProjectImageList projects={projects} matches={matches} />
                            </Box>
                        </Box>

                    </Box>
                </section>
                <section>
                    <Box className={`m-4`} sx={{ gridArea: 'project1', }}>
                        {/* <ProjectImageList projects={projects} matches={matches} dynamicStylesList={dynamicStylesList}/> */}
                        <ImageList cols={1.3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center", ...dynamicStylesListItem }} >
                            <ImageListItem key="project1" cols={matches ? 2 : 1} >
                                <img
                                    srcSet={`${langdeck_projects_saynetes_wide}?w=248&fit=crop&auto=format&dpr=2 1x`}
                                    src={`${langdeck_projects_saynetes_wide}?w=248&fit=crop&auto=format`}
                                    alt="{item.project}"
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title="{item.project}"
                                    subtitle="{item.desc}"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about `}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </ImageList>
                    </Box>
                </section>
                <section>
                    <Box className={`m-4`} sx={{ gridArea: 'project2', }}>
                        {/* <ProjectImageList projects={projects} matches={matches} dynamicStylesList={dynamicStylesList}/> */}
                        <ImageList cols={1.3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center", ...dynamicStylesListItem }} >
                            <ImageListItem key="project2" cols={matches ? 2 : 1} variant="masonry" >
                                <img
                                    srcSet={`${langdeck_projects_cartolang_smart}?w=248&fit=crop&auto=format&dpr=2 1x`}
                                    src={`${langdeck_projects_cartolang_smart}?w=248&fit=crop&auto=format`}
                                    alt="{item.project}"
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title="{item.project}"
                                    subtitle="{item.desc}"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about `}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </ImageList>
                    </Box>
                </section>
                <section>
                    <Box className={`m-4`} sx={{ gridArea: 'project3', }}>
                        {/* <ProjectImageList projects={projects} matches={matches} dynamicStylesList={dynamicStylesList}/> */}
                        <ImageList cols={1.3} sx={{ display: 'flex', alignItems: "center", justifyContent: "center", ...dynamicStylesListItem }} >
                            <ImageListItem key="project3" cols={matches ? 2 : 1} variant="masonry" >
                                <img
                                    srcSet={`${langdeck_projects_dialango_smart}?w=248&fit=crop&auto=format&dpr=2 1x`}
                                    src={`${langdeck_projects_dialango_smart}?w=248&fit=crop&auto=format`}
                                    alt="{item.project}"
                                    loading="lazy"
                                />
                                <ImageListItemBar
                                    title="{item.project}"
                                    subtitle="{item.desc}"
                                    actionIcon={
                                        <IconButton
                                            sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                            aria-label={`info about `}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                />
                            </ImageListItem>
                        </ImageList>
                    </Box>
                </section>
            </Layout >
        </main>
    )
}

export default Home