
import Button from "../components/UI/Button";
import CustomButton from "../components/UI/CustomButton.jsx";
import { saynetes_section_page } from "../assets/img";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import classes from "./sections.module.css";
import { projects } from "../assets/localData/data.js";

import TitlebarImageList from "../components/UI/Media/TitlebarImageList.jsx";

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
        ...mq_xs && { variant: "h6", width: "100%" },
        ...mq_sm && { variant: "h4" },
        ...mq_md && { variant: "h2", },
        ...mq_lg && { variant: "h1", width: "80%", maxWidth: '75vw', display: 'flex', alignItems: "center", justifyContent: "center", },
        ...mq_xl && { variant: "h1", width: "80%", maxWidth: '70vw', display: 'flex', alignItems: "center", justifyContent: "center", },
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
                    <Box className={`mx-4 p-4`} sx={{ gridArea: 'banner', height: '30vh', }}>
                        <Typography className={`font-articulat_cf font-normal leading-none tracking-tight text-nowrap my-1 ${classes.landing_page_title}`}
                            sx={{ typography: { xs: "h6", sm: "h4", md: "h4", lg: "h4", xl: "h4", }, ...dynamicStyles }}>
                            {filteredProject.full_description.series}
                        </Typography>
                        <Typography className={`font-articulat_cf leading-none tracking-tight text-4xl sm:text-7xl font-bold text-slate-700 text-nowrap ${classes.landing_page_title}`}
                            sx={{ typography: { xs: "h5", sm: "h4", md: "h3", lg: "h2", xl: "h1", }, ...dynamicStyles }}>
                            {filteredProject.full_description.title}
                        </Typography>
                        <Typography className={`font-articulat_cf leading-none tracking-tight text-2xl sm:text-3xl text-primary-light-orange font-bold my-2 mb-5 ${classes.landing_page_title}`}
                            sx={{ typography: { xs: "h5", sm: "h4", md: "h3", lg: "h2", xl: "h1", }, ...dynamicStyles }}>
                            {filteredProject.full_description.sub_title} {filteredProject.full_description.sub_title_2}
                        </Typography>
                        <Link to={{ pathname: `/language_page/` }}>
                            <CustomButton fullWidth='false' label={filteredProject.full_description.button_text} className={`${classes.landing_page_button}`} />
                        </Link>
                    </Box>
                    <Box sx={{ gridArea: 'image', }}>
                        <img
                            srcSet={`${saynetes_section_page}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${saynetes_section_page}?w=248&fit=crop&auto=format`}
                            alt={filteredProject.full_description.title}
                            loading="lazy" />
                    </Box>
                </Box>
            </section>
            <TitlebarImageList />
        </>

    );
};

export default SaynetesSection;