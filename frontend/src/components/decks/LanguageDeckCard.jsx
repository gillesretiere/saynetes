import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import classes from './Deck.module.css';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const LanguageDeckCard = ({ card }) => {

    const { language, lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon, lang_alpha2, } = card;

    return (
        <>
            <div className={`${classes.card__container}`}>

                <Card sx={{ minWidth: 345, maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                            {lang_alpha2}
                        </Typography>
                        <Typography variant="h5" component="div">
                            {lang_name_native}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>{lang_name_en}</Typography>
                        <Typography variant="body2">
                            {lang_name_fr}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={lang_flag_icon}
                        alt="Flag Icon"
                    />
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}

export default LanguageDeckCard