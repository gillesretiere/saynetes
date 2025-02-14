import React, { useEffect, useState, useContext, } from 'react';
import DeckContext from '../../../store/DeckContext';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CartoCountryLanguageCard from './CartoCountryLanguageCard';

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    card: {
        margin: 'auto',
    }
});


const CartoCountryLanguageDeck = withStyles(styles)(({ classes, justify, deck, langDeck, }) => (

    <div className={classes.root}>
        <Grid container spacing={4} justifyContent={justify}>
            {deck && deck.sort ( (a,b) => (a.popularity_as_float > b.popularity_as_float ? -1 : 1))
            .map(
                (el) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <div className={classes.card}>
                                <CartoCountryLanguageCard
                                    className={classes.card} card={el} langDeck={langDeck} alignItems={justify}>
                                </CartoCountryLanguageCard>
                            </div>
                        </Grid>
                    )
                }
            )}
        </Grid>
        
    </div>
));

export default CartoCountryLanguageDeck;