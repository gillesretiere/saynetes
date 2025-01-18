import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { base_server_url, } from "../../../../assets/localData/data.js";

import classes from "./Card.module.css";

export default function LanguageCard({ card }) {
    const { language, lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon, lang_alpha2, lang_is_available, } = card;

    const drapeau = base_server_url + "assets/img/flags/" + lang_flag_icon.split('\\').pop().split('/').pop();

    return (
        <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
            <Link to={lang_is_available ? `/theme_page/${language}?l=${language}` : null} >
                <div className={`${classes.card}`}>
                    <CardMedia
                        component="img"
                        sx={{
                            display: 'flex', marginLeft: "auto",
                            marginRight: "auto", maxWidth: 150, borderRadius: '9999px',
                            width: '5rem', height: '5rem',
                            boxShadow: 3
                        }}

                        image={drapeau}
                        title={lang_name_fr}
                    />
                </div>
            </Link>
            <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={12} className="h-32">
                            <Typography gutterBottom variant="h5" className='font-articulat_cf text-md font-semibold leading-none tracking-tight'>
                                {lang_name_native}
                            </Typography>
                            <Typography variant="h6" className='font-articulat_cf text-md font-light leading-none tracking-tight'>
                                {lang_name_fr}
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>

            </CardContent>
            <CardActions disableSpacing sx={{ mt: "auto", justifyContent: "space-between", }}>
                {
                    lang_is_available ? (
                        <>
                            <Link to={`/theme_page/${language}?l=${language}`}>
                                <Button size="small" variant="button">Choisir</Button>
                            </Link>
                            <Chip label="disponible" size="small" className='mr-2 font-articulat_cf text-xs leading-none tracking-tight bg-primary-green' />
                        </>
                    ) : (
                        <>
                            <Button size="small" variant="button" disabled={true}>Choisir</Button>
                            <Chip label="prochainement" size="small" className='mr-2 font-articulat_cf text-xs leading-none tracking-tight bg-primary-orange' />
                        </>
                    )
                }
            </CardActions>



        </Card>
    );
}