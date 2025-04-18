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



const SaynetesDescriptionSection = ({ dynamicStylesTitle }) => {
    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    return (
        <>
            <section id="sayndesc" className='max-container'>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 1,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                                    "imag imag imag imag"
                                    "desc desc desc desc"
                            `,
                            sm:
                                `
                                    "imag imag desc desc"
                                    "imag imag desc desc"
                            `,
                        },

                    }}
                >
                    <Box className={`my-10 px-4`} sx={{ gridArea: 'imag', width: '100%', }}>
                        <img src={saynetes_fleurs} width="100%" className='h-full max-h-64 xl:max-h-[360px] object-cover' />
                    </Box>
                    <Box className={`my-10 mx-4 px-4`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
                            Les saynètes c'est quoi ?
                        </Typography>
                        <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                            Un projet d’éducation thérapeutique multilingue
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                            Les saynètes sont de petites histoires mettant en scène des personnages. Elles ont pour objectif de sensibiliser sur des thèmes comme le diabète, l'alimentation et la pratique d'exercices physiques, à l'usage des patients non francophones et de leur entourage.
                        </Typography>
                    </Box>
                </Box>
            </section>

        </>
    )
}

export default SaynetesDescriptionSection