import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const ProjectSection = ({ project, dynamicStylesSubTitle, dynamicStylesSubSection, minMediaSize, }) => {
    console.log(project);
    return (
        <>
            <section id={project.section}>
                <Box
                    className={`pt-10 pb-60 space-b-12 px-1 ${project.bg_color}`}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4,1fr)',
                        gap: 1,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas:
                        {
                            xs: `
                            "title title title title"
                            "description description description description"
                            "image image image image"
                            `,
                            md: `
                            "title description description description"
                            ". image image image"
                            `,
                        },
                    }}>
                    <Box className={`mx-0 px-4`} sx={{ gridArea: 'title' }}>
                        <Typography className={`font-articulat_cf font-normal`}
                            sx={{ typography: { xs: "h6", }, }}>
                            {project.project}
                        </Typography>
                    </Box>
                    <Box className={`mx-0 px-4 mb-12`} sx={{ gridArea: 'description', }}>
                        <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                            sx={{ ...dynamicStylesSubTitle }}>
                            {project.full_description.series}
                        </Typography>
                        <Typography className={`font-articulat_cf font-normal leading-tight tracking-normal`}
                            sx={{ ...dynamicStylesSubSection }}>
                            {project.full_description.resume}
                        </Typography>
                    </Box>
                    <Box className={minMediaSize ? `mx-2 mt-6` : `mx-0 mt-5 px-4`} sx={{ gridArea: 'image', }}>
                        <img src={project.image} className='pr-4 max-w-[320px] md:max-w-[640px] object-cover' />
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default ProjectSection