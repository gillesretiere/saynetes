import React from 'react';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SmallButton from '../components/UI/SmallButton.jsx';
import { saynetes_sections, } from "../assets/localData/data.js";


export const SaynetesMainSection = ({ updateNavlinks }) => {

    const handleClick = () => {
        updateNavlinks();
    }

    return (
        <>

            <section id="desc" className='min-h-screen max-container'>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        gap: 2,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                                    "desc desc desc . . ."
                                    "text text text text . ."
                                    "butt . . . . ."
                                    "imag imag imag imag imag imag"
                            `,
                            md:
                                `
                                    "desc desc desc . . ."
                                    "butt . . . . ."
                                    "imag imag imag text text ."
                                    "imag imag imag text text ."
                                    ". . . . . ."
                            `,
                        },
                    }}
                >
                    <Box className={`mx-10 p-4 h-60 sm:h-72 xl:h-96`} sx={{ gridArea: 'desc', }}>
                        <Typography className={`font-articulat_cf text-2xl md:text-4xl xl:text-6xl font-thin`}>
                            Les Saynètes
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'imag', }}>
                        <img src={saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].illustration} width="100%" className='object-cover' />
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'text', }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-xl font-normal my-4`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[0].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-xl font-normal my-4`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[1].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-xl font-normal my-4`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[2].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-xl font-normal my-4`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[3].text}
                        </Typography>
                    </Box>
                    <Box className={`mx-10 p-4`} sx={{ gridArea: 'butt', display: 'flex', justifyContent: 'flex-start' }}>
                        <Link onClick={handleClick} to={{ pathname: `/language_page/` }}>
                            <SmallButton label="Vers les saynètes" />
                        </Link>
                    </Box>
                </Box>
            </section>
        </>
    )
}
