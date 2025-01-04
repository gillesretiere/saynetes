import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import classes from "./card.module.css";

const CountryLanguageCard = ({ card }) => {
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

    return (
        <>
            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
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
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {country_name_fr}
                    </Typography>
                    <Typography variant="subtitle1">
                        {country_name_native}
                    </Typography>
                </CardContent>
                {
                    country_languages && country_languages.map((el) => {
                        return (<>
                            <Typography className="p-4" variant="subtitle1">
                                {el.language_name_native}
                            </Typography></>)
                    })
                }
                <CardActions>
                    <Button size="small" variant="button" href={`/country_languages_page/${country_iso2}?r=${country_iso2}`}>Choisir</Button>
                </CardActions>
            </Card>
        </>
    )
}

export default CountryLanguageCard