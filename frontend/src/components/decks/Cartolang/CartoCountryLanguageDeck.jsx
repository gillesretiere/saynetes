import React from 'react';
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

const CartoCountryLanguageDeck = withStyles(styles)(({ classes, justify, deck }) => (
    <div className={classes.root}>
        <Grid container spacing={4} justifyContent={justify}>
            {deck && deck.map(
                (el) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                            <div className={classes.card}>
                                <CartoCountryLanguageCard
                                    className={classes.card} card={el} alignItems={justify}>
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