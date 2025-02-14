import React, { useState, useEffect, useContext, } from 'react';
import DeckContext from '../../../store/DeckContext';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';
import { Link, } from "react-router-dom";
import SmallButton from '../../UI/SmallButton.jsx';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import LanguageSmallMapCard from './LanguageSmallMapCard';
import ReadMore from '../../UI/Media/ReadMore.jsx';



const useStyles = makeStyles(theme => ({
    rightIcon: {
        marginLeft: theme.spacing(1)
    }
}));

export const CartoCountryLanguageCardWithMap = ({ language, langDeck, callbackModal, }) => {
    let ctx = useContext(DeckContext);
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const closeButtonClickHandler = () => {
        callbackModal();
    }
    useEffect(
        () => {
            console.log(langDeck);
        }, [langDeck]
    );

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <>
            {/* Carte largeur selon la taille du media */}
            <Card sx={{
                width: {
                    xs: 250, // 100%
                    sm: 500,
                    md: 640,
                },
                /*
                backgroundColor: {
                    xs: "#FF0000",
                    sm: "#FFFF00",
                    md: "#00FF00",
                    lg: "#00FFFF",
                    xl: "#0000FF",
                }
                    */
            }}>
                <CardActionArea sx={{ flexGrow: 1, }}>
                    <CardContent>

                        {/* Box Grid 1 ou 2 colonnes selon la taille du media */}
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(5, 1fr)',
                                gap: 1,
                                gridTemplateRows: 'auto',
                                gridTemplateAreas: {
                                    xs:
                                        `
                                "map map map map map"
                                "Bloc1 Bloc1 Bloc1 Bloc1 Bloc1"
                                "Bloc2 Bloc2 Bloc2 Bloc2 Bloc2"
                                "flag flag flag flag flag"
                                "action action action action action"
                                `,
                                    sm:
                                        `
                                "map map map map map"
                                "Bloc1 Bloc2 Bloc2 Bloc2 Bloc2"
                                "flag flag flag flag flag"
                                "action action action action action"
                                `,
                                },
                            }}
                        >
                            <Box className={`mx-1 px-1`} sx={{ gridArea: 'Bloc1', }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    p: 1,
                                    alignItems: 'center',
                                }}>
                                    <Typography variant="h5" sx={{
                                        color: 'text.secondary'
                                    }}>
                                        {langDeck && langDeck.language_name_fr && langDeck.language_name_fr}
                                    </Typography>
                                </Box>

                            </Box>
                            {/* carte */}
                            <Box className={`mx-0 px-0`} sx={{ gridArea: 'map', }}>
                                {/* si la langue n'est pas répertoriée: on affiche une carte neutre (xxx) */}
                                {langDeck ?
                                    (<LanguageSmallMapCard language={langDeck}></LanguageSmallMapCard>) :
                                    (<></>)
                                }
                            </Box>
                            <Box className={`mx-1 px-1`} sx={{ gridArea: 'Bloc2', }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexWrap: 'nowrap',
                                    p: 1,
                                    alignItems: 'center',
                                }}>
                                    {langDeck && langDeck.language_summary ? (
                                        <ReadMore text={langDeck.language_summary} style={{ fontSize: 'small', borderTop: '1px solid white' }} />
                                    ) : (
                                        <Typography>
                                            &nbsp;
                                        </Typography>
                                    )}
                                </Box>
                            </Box>
                            {/* 
                            */
                            }
                            <Box className={`mx-1 px-1 my-4`} sx={{ gridArea: 'flag', }}>
                                {/*
                                <Grid container spacing={1} columns={3}>
                                {langDeck && langDeck.language_countries &&
                                    langDeck.language_countries.sort(
                                        (a, b) => (a.popularity_as_float > b.popularity_as_float
                                            || Number(a.speakers) > Number(b.speakers) ? -1 : 1)).map(
                                                (el) => {
                                                    return (
                                                        <>
                                                            <CartoCountryLanguageCardPopularityByCountry countries={el} />
                                                        </>
                                                    )
                                                }
                                            )

                                }
                            </Grid>
                                 }
                                {
                                    langDeck && langDeck.language_countries &&
                                    <SimpleBarChart dataset={langDeck.language_countries}  w={400} h={400}/>
                                */}
                            </Box>
                            <Box className={`mx-1 px-1`} sx={{ gridArea: 'action', }}>
                                <CardActions sx={{ flexGrow: 1, }}>
                                    {
                                        langDeck && langDeck.language_uid &&
                                        <Link to={{ pathname: `/carto_language_page/${langDeck.language_uid}` }}>
                                            <SmallButton label={`Voir page : ${langDeck.language_name_fr}`} />
                                        </Link>
                                    }

                                    <div onClick={closeButtonClickHandler} >
                                        <SmallButton label="Fermer" />
                                    </div>
                                </CardActions>
                            </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>

            </Card>

        </>
    )
}
