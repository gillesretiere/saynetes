import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { saynetes_sections, } from "../assets/localData/data.js";
import { saynetes_fleurs, } from '../assets/img/index.js';



const SaynetesDescriptionSection = ( {dynamicStylesTitle} ) => {
    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    return (
        <>
            <section id="sayndesc" className='min-h-screen max-container'>
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
                                    "imag imag imag imag"
                                    ". desc desc desc"
                                    ". comp comp comp"
                            `,
                            sm:
                                `
                                    "titr titr titr titr"
                                    "llnk . . ."
                                    "imag imag desc desc"
                                    "imag imag comp comp"
                            `,
                            lg:
                                `
                            "titr titr titr titr"
                            "llnk . . ."
                            "imag desc comp comp"
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
                        <a href="#cardsyst">
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>
                    <Box sx={{gridArea: 'imag', width:'100%', }}>
                        <img src= {saynetes_fleurs} width="100%" className='h-full max-h-64 xl:max-h-[360px] object-cover'/>
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
                </Box>
            </section>

        </>
    )
}

export default SaynetesDescriptionSection