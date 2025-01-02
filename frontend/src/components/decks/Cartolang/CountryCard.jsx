import * as React from 'react';
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
        country_name_fr, 
        country_name_native, 
        country_national_flag, 
        country_openstreetmap_xy,
        country_summary,
        country_languages,
        country_mapicon,
     } = card;
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <Link to={`/country_page/${country_uid}?r=${country_uid}`}>
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
                <Button size="small" variant="button" href={`/country_page/${country_uid}?r=${country_uid}`}>Choisir</Button>
            </CardActions>
        </Card>
    );
}