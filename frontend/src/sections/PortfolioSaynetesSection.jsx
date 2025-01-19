import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { saynetes_sections, } from "../assets/localData/data.js";


const PortfolioSaynetesSection = ({dynamicStylesTitle}) => {
    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    return (
        <>
            <section id="sayn" className='min-h-screen max-container'>
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
                                    ". comp comp comp"
                                    "clip clip clip clip"
                            `,
                            md:
                                `
                                    "titr titr titr titr"
                                    "llnk . . ."
                                    ". desc comp comp"
                                    ". clip clip clip"
                            `,
                            lg:
                                `
                            "titr titr titr titr"
                            "llnk . . ."
                            ". desc comp comp"
                            ". . clip clip"
                            `,
                        },

                    }}
                >
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'titr', height: '30vh', }}>
                        <Typography
                            sx={{ ...dynamicStylesTitle }}
                            className={`font-articulat_cf font-thin`}>
                            Les Saynètes
                        </Typography>
                    </Box>
                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'llnk', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <a href="#cartolang">
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>

                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
                            Description du projet
                        </Typography>
                        <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                            Un projet éducatif et thérapeutique multilingue.
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                            Les saynètes sont de petites histoires mettant en scène des personnages. Elles ont pour objectif de sensibiliser sur des thèmes comme le diabète, l'alimentation et la pratique d'exercices physiques, à l'usage des non francophones.
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
                                sx={{width:'100%', height:'auto', }}
                            />
                        </Card>
                    </Box>
                </Box>
            </section>

        </>
    )
}

export default PortfolioSaynetesSection