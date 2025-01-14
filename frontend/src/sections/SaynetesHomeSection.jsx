import React from 'react';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SmallButton from '../components/UI/SmallButton.jsx';
import { projects, } from "../assets/localData/data.js";

const SaynetesHomeSection = ({ dynamicStylesTitle, dynamicStylesSubTitle, dynamicStylesSubSection, callbackModal }) => {
    const handleClick = () => {
        callbackModal();
    };
    return (
        <>
            <section id="main" className='min-h-screen max-container'>
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 1,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `"header header header ."
                            "leftlink . . rightlink"
                            "image image image image"
                            `,
                            md:
                                `"header header header ."
                            "leftlink . . rightlink"
                            "image image image image"
                            `,
                        },
                    }}
                >
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'header', height: '30vh' }}>
                        <div className={`xs:break-normal`}>
                            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                                sx={{ ...dynamicStylesTitle }}>
                                {projects[0].full_description.series}
                            </Typography>
                        </div>
                        <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                            sx={{ ...dynamicStylesSubTitle }}>
                            {projects[0].full_description.title}
                        </Typography>
                        <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                            sx={{ ...dynamicStylesSubSection }}>
                            {projects[0].full_description.sub_title}
                        </Typography>
                    </Box>

                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'leftlink', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
                        <a href='#sayndesc'>
                            <SmallButton label="Visite guidée" />
                        </a>
                    </Box>
                    <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-end' }}>
                        <Link onClick={handleClick} to={{ pathname: `/language_page/` }}>
                            <SmallButton label={projects[0].full_description.button_text} />
                        </Link>
                    </Box>
                    <Box sx={{ gridArea: 'image', }}>
                        <img src={projects[0].full_description.illustration} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                    </Box>
                </Box>
            </section>
        </>
    )

}

export default SaynetesHomeSection