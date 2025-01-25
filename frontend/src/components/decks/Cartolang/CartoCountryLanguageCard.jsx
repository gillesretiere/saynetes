import React, { useEffect, useState, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Chart from './Chart';
import { formHelperTextClasses } from '@mui/material';

const CartoCountryLanguageCard = ({ card }) => {
    let { language_name_fr, language_name_native, language_uid, popularity_as_float, } = card;

    const handleClick = (event) => {
        console.log(event.currentTarget);
        console.log(event.target.id);
        return;
    }

    return (
        <>
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
                        <Chart data={popularity_as_float}></Chart>
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