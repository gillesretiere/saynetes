import React from 'react'
import { useNavigate } from 'react-router-dom';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {pf_lng_br,} from "../assets/img/index";

const PortfolioSection = () => {
    const navigate = useNavigate();

    return (
        <>
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
                                    "titr titr titr titr"
                                    "imag imag imag imag"
                                    "llnk . . ."
                                    ". desc desc desc"
                                    ". comp comp comp"
                                    "clip clip clip clip"
                            `,
                            md:
                                `
                                    "titr titr titr titr"
                                    "imag imag imag imag"
                                    "llnk . . ."
                                    ". desc comp comp"
                                    ". clip clip clip"
                            `,
                            lg:
                                `
                            "titr titr titr titr"
                            "imag imag imag imag"
                            "llnk . . ."
                            ". desc comp comp"
                            ". . clip clip"
                            `,
                        },
                    }}
                >
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'titr', height: '5vh', }}>
                        <Typography className={`font-articulat_cf text-xl md:text-xl xl:text-2xl font-thin`}>
                            Portfolio
                        </Typography>
                    </Box>
                    <Box sx={{gridArea: 'imag', width:'100%', }}>
                        <img src= {pf_lng_br} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover'/>
                    </Box>
                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'llnk', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <a href="/#solu">
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase`}>
                            Objectifs
                        </Typography>
                        <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                            Aider à communiquer malgré les barrières de la langue 
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                            Contribuer à lever les barrières de la langue et les incompréhensions culturelles.
                            Par la réalisation d'outils numériques qui aident à la communication entre professionnels et non francophones.
                        </Typography>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default PortfolioSection