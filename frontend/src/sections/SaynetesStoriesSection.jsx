import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { saynetes_sections, } from "../assets/localData/data.js";


const SaynetesStoriesSection = () => {
    return (
        <>

            <section id="hist" className='min-h-screen max-container'>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 2,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                                    "hist hist hist ."
                                    "imag imag imag imag"
                            `,
                            md:
                                `
                                    "hist hist . ."
                                    ". imag imag ."
                            `,
                        },
                    }}
                >
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'hist', height: '30vh' }}>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-bold`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "hist")].content[0].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "hist")].content[1].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "hist")].content[2].text}
                        </Typography>
                        <Typography className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal`}>
                            {saynetes_sections[saynetes_sections.findIndex(p => p.id == "hist")].content[3].text}
                        </Typography>
                    </Box>
                    <Box className={`mb-5 p-4`} sx={{ gridArea: 'imag', }}>
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
                            />
                        </Card>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default SaynetesStoriesSection
