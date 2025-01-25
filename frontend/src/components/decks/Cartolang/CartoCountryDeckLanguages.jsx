import React from 'react';
import SmallButton from '../../UI/SmallButton.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, } from "react-router-dom";
import CartoCountryLanguageDeck from './CartoCountryLanguageDeck.jsx';


const CartoCountryDeckLanguages = ( {deck} ) => {
    const {
        country_name_fr,
        country_name_native,
        country_national_flag,
        country_summary,
        country_languages,
        country_iso2,
        wfb_facts, } = deck;

    return (
        <>
            <section id="carto_lang">
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: 0,
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                "cy_capt1 . cy_languages cy_languages cy_languages"
                "cy_lang cy_lang cy_lang cy_lang cy_lang"
                `,
                            md:
                                `
                "cy_capt1 . cy_languages cy_languages cy_languages"
                "cy_lang cy_lang cy_lang cy_lang cy_lang"
                `,
                        },
                    }}
                >
                    <Box className={`mx-0 p-4 mb-5`} sx={{ gridArea: 'cy_capt1', }}>
                        <Box sx={{ p: 1, m: 1, }}>
                            <Typography variant="caption" className='text-slate-500'>
                                Langues
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={`mx-0 p-4 mb-5`} sx={{ gridArea: 'cy_languages', }}>
                        <Box sx={{ p: 1, m: 1, }}>
                            <Typography variant="body1" className='text-slate-800'>
                                {wfb_facts.Languages}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={`mx-1 px-4`} sx={{ gridArea: 'cy_lang', }}>
                        <Box sx={{ display: 'flex', width: "100%", gap: 2 }}>
                            <CartoCountryLanguageDeck deck={country_languages}>

                            </CartoCountryLanguageDeck>
                        </Box>
                    </Box>
                </Box>
            </section>
        </>
    )
}

export default CartoCountryDeckLanguages