import React from 'react'

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { saynetes_sections, } from "../assets/localData/data.js";
import PartenairesImageList from '../components/UI/Media/PartenairesImageList.jsx';

export const SaynetesAboutSection = ({ dynamicStylesTitle }) => {
    return (
        <>
            <section id="about" className='min-h-screen max-container'>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 1,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                                    "titr titr titr titr"
                                    "llnk . . ."
                                    ". desc desc desc"
                                    ". part part part"
                                    ". comp comp comp"
                                    "clip clip clip clip"
                                    "cred cred cred cred"
                            `,
                            lg:
                                `
                            "titr titr titr titr"
                            "llnk . . ."
                            "clip clip desc desc"
                            "clip clip part part"
                            "clip clip comp comp"
                            ". . cred cred"
                            `,
                        },

                    }}
                >
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'titr', height: '30vh', }}>
                        <Typography
                            sx={{ ...dynamicStylesTitle }}
                            className={`font-articulat_cf font-thin`}>
                            &Agrave; propos
                        </Typography>
                    </Box>
                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'llnk', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <a href="#main">
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>

                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
                            Le projet
                        </Typography>
                        <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                            Un partenariat pour un projet collaboratif
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'part', height: 140, }}>
                        <PartenairesImageList />
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                            Contribuer à lever les barrières de la langue et les incompréhensions culturelles.
                            Par la réalisation d'outils numériques qui aident à la communication entre professionnels et non francophones.
                            Les saynètes permettent d'aborder des thèmes de santé et de société avec une approche particulière.
                        </Typography>
                    </Box>
                    <Box className={`sm:mx-20 sm:mb-10 p-4`} sx={{ gridArea: 'clip', }}>
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
                                sx={{ width: '100%', height: 'auto', }}
                            />
                        </Card>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'cred', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
                            Crédits
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-md xl:text-xl font-black leading-tight tracking-normal`}>
                        Texte en français : Véronique Guernier, Hélène Guibert (DAC44), Françoise Oheix, Hélène Lambert, 
                        Colette Le Pollotec (ASAMLA) 
Traductions et voix des audios:  Nune Dzhalalyan (russe, ASAMLA), Paula Negoi&#355;a, Annamaria Locse (roumain, ASAMLA)
Conception du site et illustrations : Gilles Retière
                        </Typography>
                    </Box>
                </Box>
            </section>
        </>
    )
}
