import React from 'react';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { langdeck_projects_cartolang_smart, } from "../assets/img/index";
import CardSystemImageList from '../components/UI/Media/CardSystemImageList';

const SaynetesCardSystemSection = ( {dynamicStylesTitle} ) => {
    return (
        <>
            <section id="cardsyst" className='min-h-screen max-container'>
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
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'titr', height: '10vh', }}>
                        <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                            sx={{ ...dynamicStylesTitle }}>
                            Les Saynètes
                        </Typography>
                    </Box>
                    <Box sx={{ gridArea: 'imag', width: '100%', height: 350, }}>
                        {/* <img src={langdeck_projects_cartolang_smart} className='max-h-70 xl:max-h-[540px] object-cover' /> */}
                        <CardSystemImageList />
                    </Box>
                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'llnk', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <a href="#about">
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase`}>
                            Le principe
                        </Typography>
                        <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                            Un éventail de cartes pour naviguer
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                            Un système de cartes au spectre plus ou moins large permet d'aller du global (la langue) au détail (mot de vocabulaire).
                            On choisit d'abord une langue, puis une histoire dans cette langue.
                            Ensuite, les dialogues s'affichent sous forme de cartes avec texte et audio.
                            Les mots de vocabulaire à retenir sont surlignés et complétés par une mini-carte d'explications.
                        </Typography>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default SaynetesCardSystemSection