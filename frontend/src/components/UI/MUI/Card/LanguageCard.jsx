import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import classes from "./Card.module.css";

export default function LanguageCard({ card }) {
    const { language, lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon, lang_alpha2, } = card;
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <Link to={`/theme_page/${language}?l=${language}`}>
                <div className={`${classes.card}`}>
                    <CardMedia
                        component="img"
                        sx={{
                            display: 'flex', marginLeft: "auto",
                            marginRight: "auto", maxWidth: 150, borderRadius: '9999px',
                            width: '5rem', height: '5rem',
                            boxShadow: 3
                        }}

                        image={lang_flag_icon}
                        title={lang_name_fr}
                    />
                </div>
            </Link>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {lang_name_native}
                </Typography>
                <Typography variant="subtitle1">
                    {lang_name_fr}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="button" href={`/theme_page/${language}?l=${language}`}>Choisir</Button>
            </CardActions>
        </Card>
    );
}