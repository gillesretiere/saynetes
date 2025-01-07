import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { saynetes_sections, } from "../assets/localData/data.js";


export const SaynetesMainSection = () => {
    return (
        <>

            <section id="desc" className='min-h-screen max-container'>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 2,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                                    "desc desc desc ."
                                    "imag imag imag imag"
                            `,
                            md:
                                `
                                    "desc desc . ."
                                    "imag imag . ."
                            `,
                        },
                    }}
                >
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'desc', height: '50vh' }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-bold`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[0].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[1].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[2].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].content[3].text}
                        </Typography>
                    </Box>
                    <Box sx={{ gridArea: 'imag', height: '50vh',}}>
                        <img src={saynetes_sections[saynetes_sections.findIndex(p => p.id == "desc")].illustration} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                    </Box>
                </Box>
            </section>
        </>
    )
}
