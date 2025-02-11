import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CircularProgressChart } from './CircularProgressChart';

import { withStyles } from '@material-ui/core/styles';


export const CartoLanguageCountryCard = ({ card, langdeck }) => {
    const { country_uid, country_name_native, country_name_fr, popularity_as_float, } = card;
    const handleClick = (event) => {
        return;
    }

    return (
        <>
            <Card sx={{ maxWidth: 345, margin: 'auto' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {country_name_fr}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" className='text-slate-500'>
                            {country_name_native}
                        </Typography>
                    </CardContent>
                    <CardContent>
                        <CircularProgressChart value={popularity_as_float * 100} size="4rem" />
                    </CardContent>
                </Box>
                <CardActions>
                    <Button id={country_uid} size="small" onClick={handleClick} sx={{ color: 'text.secondary' }}>Voir plus</Button>
                </CardActions>
            </Card>
        </>
    )
}
