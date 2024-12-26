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

import { homepage, saynetes_project, langdeck_project, man_blue_bg, } from '../assets/img/index.js';
import { projects } from "../assets/localData/data.js";



const Home = () => {

    console.log(projects);

    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    const dynamicStyles = {
        ...mq_xs && { variant: "h6" },
        ...mq_sm && { variant: "h4" },
        ...mq_md && { variant: "h2", },
        ...mq_lg && { variant: "h1", },
        ...mq_xl && { variant: "h1", },
    }

    return (
        <>
            <Layout>
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
                            "about1 about2 about2 about2"
                            "project1 project1 project1 project1"
                            "project2 project2 project2 project2"
                            "project3 project3 project3 project3"
                            `,
                            md:
                                `"header header header ."
                            "leftlink . . rightlink"
                            "image image image image"
                            "about1 about2 about2 about2"
                            "project1 project2 project3 ."
                            `,
                        },
                    }}
                >
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'header', height: '25vh' }}>
                        <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                            sx={{ typography: { xs: "h5", sm: "h4", md: "h3", lg: "h2", mq_xl: "h1", }, ...dynamicStyles }}>
                            Design et créativité pour la mise en valeur de vos contenus numériques
                        </Typography>
                    </Box>

                    <Box className={`mx-0 px-4`} sx={{ gridArea: 'leftlink', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <Link to={{ pathname: `/language_page/` }}>
                            <SmallButton label="Visite guidée" />
                        </Link>
                    </Box>
                    <Box className={`mx-0 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-end' }}>
                        <Link to={{ pathname: `/language_page/` }}>
                            <SmallButton label="à propos" />
                        </Link>
                    </Box>
                    <Box sx={{ gridArea: 'image', }}>
                        <img src={man_blue_bg} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                    </Box>
                    <Box className={`mx-0 px-4`} sx={{ gridArea: 'about1', }}>
                        <Typography className={`font-articulat_cf font-normal`}
                            sx={{ typography: { xs: "h6", }, ...dynamicStyles }}>
                            Portfolio
                        </Typography>
                    </Box>
                    <Box className={`mx-0 px-4`} sx={{ gridArea: 'about2', height: '25vh', }}>
                        <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                            sx={{ typography: { xs: "body2", sm: "h5", md: "h5", lg: "h4", mq_xl: "h2", }, ...dynamicStyles }}>
                            Applications numériques pour communiquer sur diverses thématiques, à l'attention des professionnels de santé et des non francophones.
                        </Typography>
                    </Box>
                    {projects && projects.map(
                        (el) => {
                            return (
                                <>
                                    <Box className='m-4' sx={{ gridArea: el.item, }}>
                                        <ProjectCard project={el}></ProjectCard>
                                    </Box></>
                            )
                        }
                    )}
            </Box>
        </Layout >
        </>
    )
}

export default Home