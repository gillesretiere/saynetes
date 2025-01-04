import React, { useState, useEffect, useContext, } from 'react';
import DeckContext from "../../../store/DeckContext";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import classes from "./card.module.css";

export default function CountryCard({ card }) {
    const {
        country_uid,
        country_name_en,
        country_iso2,
        country_name_fr,
        country_name_native,
        country_national_flag,  
        country_openstreetmap_xy,
        country_summary,
        country_languages,
        country_mapicon,
    } = card;

    let deckContext = useContext(DeckContext);

    const handleClick = () => {
        deckContext.current_deck.cartolang_deck = card;
    };

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <Link onClick={handleClick} to={`/country_languages_page/${country_iso2}?alpha2=${country_iso2}`}>
                <div className={`${classes.card}`}>
                    <CardMedia
                        component="img"
                        sx={{
                            display: 'flex', marginLeft: "auto",
                            marginRight: "auto", maxWidth: 150, borderRadius: '9999px',
                            width: '5rem', height: '5rem',
                            boxShadow: 3
                        }}

                        image={country_national_flag}
                        title={country_national_flag}
                    />
                </div>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {country_name_fr}
                </Typography>
                <Typography variant="subtitle1">
                    {country_name_native}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={handleClick} size="small" variant="button" href={`/country_languages_page/${country_iso2}?alpha2=${country_iso2}`}>Choisir</Button>
            </CardActions>
        </Card>
    );
}