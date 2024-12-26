
import Button from "../components/UI/Button";
import { saynetes_section_page } from "../assets/img";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import classes from "./sections.module.css";
import { projects } from "../assets/localData/data.js";

/* Affichage d'accueil (Home On Display) */
const SaynetesSection = () => {

    const filteredProject = projects.filter(p =>
        p.project === "Les Saynètes"
    )[0];

    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    const dynamicStyles = {
        ...mq_xs && { variant: "h6" },
        ...mq_sm && { variant: "h4" },
        ...mq_md && { variant: "h2", },
        ...mq_lg && { variant: "h1", maxWidth: '75vw', display: 'flex', alignItems: "center", justifyContent: "center", bgcolor: "lightgreen" },
        ...mq_xl && { variant: "h1", maxWidth: '70vw', display: 'flex', alignItems: "center", justifyContent: "center", bgcolor: "lightgreen" },
    }

    return (
        <>
            <section>
                <Box
                    m="auto"
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: 1,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                                "banner banner banner banner"
                                "image image image image"
                            `,
                            md:
                                `
                                "banner banner image image"
                            `,
                        },
                        ...dynamicStyles,
                    }}>
                    <Box className={`mx-4 p-4`} sx={{ gridArea: 'banner', height: '25vh', }}>
                        <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
                            sx={{ typography: { xs: "h5", sm: "h4", md: "h3", lg: "h2", mq_xl: "h1", }, ...dynamicStyles }}>
                            {filteredProject.full_description.series}
                        </Typography>
                    </Box>
                    <Box sx={{ gridArea: 'image', }}>
                        <img src={saynetes_section_page} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
                    </Box>
                </Box>
            </section>
            <section
                id="home"
                className="flex xl:flex-row lg:flex-row md:flex-col flex-col min-h-screen gap-1 mt-10 max-container"
            >
                <div className="relative xl:w-2/5 flex flex-col items-start max-xl:padding-x pt-5">
                    <div className={`text-2xl sm:text-3xl text-primary-light-orange mt-10 xl:mt-0 font-artifex_cf`}>
                        {filteredProject.full_description.series}
                    </div>
                    <div className={`text-4xl sm:text-7xl font-bold text-slate-700 tracking-tight ${classes.landing_page_title}`}>
                        {filteredProject.full_description.title}
                    </div>
                    <div className={`text-2xl sm:text-3xl text-primary-light-orange tracking-tight leading-none relative z-10 xl:pr-10 pl-1 max-sm:p-0 font-bold my-2 ${classes.landing_page_title}`}>
                        {filteredProject.full_description.sub_title}<br />
                        {filteredProject.full_description.sub_title_2}

                    </div>

                    <p className={`text-gray-900 text-md mt-1 mb-5 tracking-wider leading-5 sm:max-w-sm ${classes.landing_page_title}`}>
                        {filteredProject.full_description.description}
                    </p>
                    <Link to={{ pathname: `/language_page/` }}>
                        <Button label={filteredProject.full_description.button_text} textColor="text-white" backgroundColor="bg-primary-light-orange" borderColor="bg-primary-light-orange" className={`${classes.landing_page_button}`} />
                    </Link>
                </div>

                <div className="relative flex-1 flex justify-center items-center xl:min-h-screen lg:min-h-screen bg-primary bg-cover bg-center">
                    <img
                        src={saynetes_section_page}
                        alt="saynete collection"
                        height={700}
                        width={800}
                        className="object-contain relative z-10"
                    />
                </div>

            </section>
        </>

    );
};

export default SaynetesSection;