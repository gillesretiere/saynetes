import React, { useContext, useEffect, useState, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import { base_server_url, } from "../../../../assets/localData/data.js";

import { Link } from 'react-router-dom';
import { UserContext } from '../../../../store/user_context.jsx';

export default function StoryCard({ card }) {

    const { story_order,
        story_name,
        story_translation,
        story_illustration,
        story_desc,
        story_desc_translation,
        story_synopsis,
        story_synopsis_translation,
        story_language,
        story_translation_id,
        phrases } = card;

    // tour de passe-pase pour changer l'url des illustrations
    let card_img = base_server_url + "assets/img/saynetes/" + story_illustration.split('\\').pop().split('/').pop();
    card_img = base_server_url + "assets/img/saynetes/jpg/" + card_img.split('/').pop().split('.').shift() + ".jpg";
    
    const ctx = useContext(UserContext);

    const [direction, setDirection] = useState('ltr');

    const linkHandler = (event) => {
        ctx.decks = phrases;
    };

    useEffect(() => {
        if (story_language === "ams") {
            setDirection('rtl');
        }
    }, card);

    return (
        <Card 
            className={`bg-card-bg text-primary-main shadow-custom-card border border-gray-200/50 dark:border-white/5 rounded-2xl transition-all duration-300`}
            sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            maxWidth: 345
        }}>
            {story_order === "1" ? (
                <Link to={`/dialog_page/${story_language}?s=${story_translation_id}`}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={card_img}
                        title={story_name}
                    />
                </Link>
            ) : (
                <CardMedia
                    sx={{ height: 140 }}
                    image={card_img}
                    title={story_name}
                />
            )}

            <CardContent>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid size={12} className="h-32">
                            <div dir={direction}>
                                <Typography gutterBottom variant="h5" className='font-frutiger text-md font-normal leading-none tracking-tight'>
                                    {story_translation}
                                </Typography>
                            </div>
                            <Typography variant="h6" className='text-body-text font-frutiger text-md font-light leading-none tracking-tight'>
                                {story_name}
                            </Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="h5" className='font-frutiger text-lg font-semibold leading-none tracking-tight'>
                                {story_order}
                            </Typography>
                        </Grid>
                        <Grid size={8}>
                            <div dir={direction}>
                                <Typography variant="body2" className='text-body-text font-frutiger text-lg font-normal leading-none tracking-tight'>
                                    {story_desc_translation}
                                </Typography>
                            </div>
                        </Grid>
                        <Grid size={4}>
                            &nbsp;
                        </Grid>
                        <Grid size={8}>
                            <Typography variant="body1" className='text-body-text font-frutiger text-xs leading-none tracking-tight'>
                                {story_desc}
                            </Typography>
                        </Grid>
                        {/*
                        <Grid size={4}>
                            &nbsp;
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" className='text-xs leading-none tracking-tight'>
                                {story_synopsis_translation}
                            </Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="body2" className='text-xs leading-none tracking-tight'>
                                {story_synopsis}
                            </Typography>
                        </Grid>                        
                        */}
                    </Grid>
                </Box>
            </CardContent>

            <CardActions disableSpacing sx={{ mt: "auto", justifyContent: "space-between", }}>
                {
                    ctx.matrix.indexOf(story_translation_id) >= 0 ? (
                        <>
                            <Link to={`/dialog_page/${story_language}?s=${story_translation_id}`}>
                                <Button size="small" variant="outlined" className='text-primary-main'>Choisir</Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Button size="small" variant="outlined" disabled={true}>Choisir</Button>
                            <Chip label="prochainement" size="small" className='mr-2 font-articulat_cf text-primary-main text-xs leading-none tracking-tight' />
                        </>
                    )
                }

            </CardActions>
        </Card>
    );
}