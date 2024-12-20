import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from "./Card.module.css";

export default function LanguageCard({ card }) {
    const { language, lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon, lang_alpha2, } = card;
    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <div className={`${classes.card}`}>
            <CardMedia 
                component="img"
                sx={{ display: 'flex', marginLeft: "auto",  
                    marginRight: "auto", maxWidth: 150, borderRadius:'9999px',
                    width:'5rem', height:'5rem',
                    boxShadow: 3}}
                    
                image={lang_flag_icon}
                title={lang_name_fr}
            />
            </div>

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {lang_name_fr}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {lang_name_native}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}