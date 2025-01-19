import React from 'react';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { langdeck_projects_cartolang_smart, } from "../assets/img/index";
import TitlebarImageList from '../components/UI/Media/TitlebarImageList';

const PortfolioSolutionsSection = ({ dynamicStylesTitle, }) => {
    return (
        <>
            <section id="solu" className='min-h-screen max-container'>
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
                            Portfolio
                        </Typography>
                    </Box>
                    <Box sx={{ gridArea: 'imag', width: '100%', height: 450, }}>
                        {/* <img src={langdeck_projects_cartolang_smart} className='max-h-70 xl:max-h-[540px] object-cover' /> */}
                        <TitlebarImageList />
                    </Box>
                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'llnk', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <a href="/#cartolang">
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase`}>
                            Solutions
                        </Typography>
                        <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
                            Une suite d'applications pour aider à communiquer
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
                            Langdeck est une suite d'applications autonomes qui aident à la communication entre professionnels et non francophones.
                        </Typography>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default PortfolioSolutionsSection