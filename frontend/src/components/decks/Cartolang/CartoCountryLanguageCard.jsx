import React, { useEffect, useState, useContext, } from 'react';
import DeckContext from '../../../store/DeckContext';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popper from "@mui/material/Popper";
import { CartoCountryLanguageCardWithMap } from './CartoCountryLanguageCardWithMap';
import { CircularProgressChart } from './CircularProgressChart';

import Chart from './Chart';
import { formHelperTextClasses } from '@mui/material';

const CartoCountryLanguageCard = ({ card, langDeck, }) => {
    let { language_name_fr, language_name_native, language_uid, popularity_as_float, } = card;
    let ctx = useContext(DeckContext);
    const [currentLanguage, setCurrentLanguage] = useState([]);

    useEffect(() => {
        let query = langDeck.filter(
            e => e.language_uid === language_uid);
        setCurrentLanguage(query);
    }, [langDeck]);

    const [language, setLanguage] = useState(null);
    const [arrowRef, setArrowRef] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);

    const callbackModal = () => {
        setLanguage(null);
        setAnchorEl(null);
    }

    const handleClick = (event) => {
        setLanguage(event.target.id);
        const query = langDeck.filter(
            e => e.language_uid === event.target.id);
        ctx.current_deck.language_deck = query;
        setCurrentLanguage(query);
        setArrowRef(event.currentTarget);
        setAnchorEl(anchorEl ? null : event.currentTarget);
        return;
    }
    const openPopup = Boolean(anchorEl);
    const id = openPopup ? "simple-popper" : undefined;


    return (
        <>
            <div>

                <Popper id={id}
                    open={openPopup}
                    anchorEl={anchorEl}
                    placement="right-end"
                    disablePortal={false}
                    modifiers={[
                        {
                            name: 'arrow',
                            enabled: true,
                            options: {
                                element: arrowRef,
                            }
                        }
                    ]}
                >
                    {currentLanguage &&
                        <>
                            <CartoCountryLanguageCardWithMap
                                language={language}
                                langDeck={currentLanguage[0]}
                                callbackModal={callbackModal}>

                            </CartoCountryLanguageCardWithMap>
                        </>
                    }

                </Popper>
            </div>

            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                {
                    /*
                <CardMedia
                sx={{ minHeight: 340 }}
                image={phrase_illustration}
                title={story_name}
            />
            */
                }
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {language_name_fr}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" className='text-slate-500'>
                            {language_name_native}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <CircularProgressChart value={popularity_as_float*100} size="5rem"/>
                    </CardContent>
                </Box>
                <CardActions>
                    <Button id={language_uid} size="small" onClick={handleClick} sx={{ color: 'text.secondary' }}>Voir plus</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CartoCountryLanguageCard