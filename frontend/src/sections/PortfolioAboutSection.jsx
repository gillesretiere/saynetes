import React from 'react'
import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { man_blue_bg, } from '../assets/img/index.js';

const PortfolioAboutSection = ( {dynamicStylesTitle} ) => {
    return (
        <section id="apro" className='min-h-screen max-container'>
            <Box className={`mx-0 p-4`}>
                <div className={`xs:break-normal`}>
                    <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                        sx={{ ...dynamicStylesTitle }}>
                        A propos
                    </Typography>
                </div>
            </Box>
        </section>
    )
}

export default PortfolioAboutSection