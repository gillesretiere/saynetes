import React, { useEffect, useState, useContext, } from 'react';

import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';


export const CartoCountryLanguageCardPopularityByCountry = ({ countries }) => {
    let { popularity_as_float, country_name_fr, country_iso3, national_flag, speakers, official, } = countries;
    const [country, setCountry] = useState(null);
    return (
        <>
            <Card sx={{ width:150, margin: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CardContent>
                        <Typography gutterBottom variant="caption" component="div">
                            {country_name_fr}
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </>
    )
}
