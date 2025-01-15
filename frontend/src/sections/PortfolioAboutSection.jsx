import React from 'react'
import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { hmrt_icon, man_blue_bg, } from '../assets/img/index.js';

const PortfolioAboutSection = ({ dynamicStylesTitle }) => {
    return (
        <section id="apro" className='min-h-screen max-container'>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: {
                        xs:
                            `
                            "titr titr titr titr titr titr"
                            "llnk . . . . ."
                            "imag imag imag imag imag imag"
                            "logo logo logo ctct ctct ctct"
                            "desc desc desc comp comp comp"
                            `,
                        lg:
                            `
                            "titr titr titr titr titr titr"
                            "llnk . . . . ."
                            "imag imag imag imag imag imag"
                            ". logo logo ctct ctct ."
                            ". desc desc comp comp ."
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
                <Box className={`mx-10 p-4`} sx={{ gridArea: 'imag', }}>
                    <img src={man_blue_bg} className='mr-4'></img>
                </Box>
                <Box className={`mx-10 p-4`} sx={{ gridArea: 'logo', }}>
                    <img src={hmrt_icon} className='mr-4'></img>
                </Box>
                <Box className={`mx-10 p-4`} sx={{ gridArea: 'ctct', }}>
                    <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
                        Contact
                    </Typography>
                    <Typography className={`font-articulat_cf text-sm md:text-md xl:text-lg font-thin leading-none tracking-wide`}>
                        email
                    </Typography>
                    <Typography className={`font-articulat_cf text-sm md:text-md xl:text-lg font-thin leading-none tracking-wide`}>
                    www
                    </Typography>
                </Box>

                <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                    <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
                        Le projet
                    </Typography>
                    <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                        Un partenariat pour un projet collaboratif
                    </Typography>
                </Box>

                <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                    <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                        Contribuer à lever les barrières de la langue et les incompréhensions culturelles.
                        Par la réalisation d'outils numériques qui aident à la communication entre professionnels et non francophones.
                        Les saynètes permettent d'aborder des thèmes de santé et de société avec une approche particulière.
                    </Typography>
                </Box>
            </Box>

        </section>
    )
}

export default PortfolioAboutSection