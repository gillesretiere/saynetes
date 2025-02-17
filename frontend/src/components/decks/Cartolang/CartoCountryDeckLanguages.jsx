import React, { useEffect, useState, useContext, } from 'react';
import DeckContext from '../../../store/DeckContext.jsx';
import SmallButton from '../../UI/SmallButton.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, } from "react-router-dom";
import CartoCountryLanguageDeck from './CartoCountryLanguageDeck.jsx';
import { langdeck_languages } from '../../../assets/data/index.js';
import ReadMore from '../../UI/Media/ReadMore.jsx';


const CartoCountryDeckLanguages = ({ deck }) => {

    let ctx = useContext(DeckContext);
    const {
        country_name_fr,
        country_name_native,
        country_national_flag,
        country_summary,
        country_languages,
        country_iso2,
        country_wfb_languages_fr,
        wfb_facts, } = deck;

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        // on récupère le corpus langues
        const loadData = () => JSON.parse(JSON.stringify(langdeck_languages));
        setLanguages(loadData);
        ctx.current_deck.language_deck = languages;
    }, []);

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
                "cy_goto2 . . . ."
                `,
                            md:
                                `
                "cy_capt1 . cy_languages cy_languages ."
                "cy_lang cy_lang cy_lang cy_lang cy_lang"
                "cy_goto2 . . . ."
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
                            {country_wfb_languages_fr &&
                                <ReadMore text={country_wfb_languages_fr} style={{ fontSize: 'x-large', borderTop: '1px solid white' }} />
                            }
                        </Box>
                    </Box>
                    <Box className={`mx-1 px-4`} sx={{ gridArea: 'cy_lang', }}>
                        <Box sx={{ display: 'flex', width: "100%", gap: 2 }}>
                            <CartoCountryLanguageDeck deck={country_languages} langDeck={languages} />
                        </Box>
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'cy_goto2', }}>
                        <a href='#carto_main'>
                            <SmallButton label="Retour niveau supérieur" />
                        </a>
                    </Box>

                </Box>
            </section>
        </>
    )
}

export default CartoCountryDeckLanguages