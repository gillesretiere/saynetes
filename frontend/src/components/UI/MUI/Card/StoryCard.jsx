import React, { useContext, useEffect, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { base_server_url, } from "../../../../assets/localData/data.js";

import { Link } from 'react-router-dom';
import { UserContext } from '../../../../store/user_context';


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
    const card_img = base_server_url + "assets/img/saynetes/" + story_illustration.split('\\').pop().split('/').pop();


    const ctx = useContext(UserContext);

    const linkHandler = (event) => {
        ctx.decks = phrases;
    };

    return (
        <Card sx={{
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
                            <Typography gutterBottom variant="h5" className='font-articulat_cf text-md font-semibold leading-none tracking-tight'>
                                {story_translation}
                            </Typography>
                            <Typography variant="h6" className='font-articulat_cf text-md font-light leading-none tracking-tight'>
                                {story_name}
                            </Typography>
                        </Grid>
                        <Grid size={4}>
                            <Typography variant="h5" className='font-articulat_cf text-md font-light text-primary-orange leading-none tracking-tight'>
                                {story_order}
                            </Typography>
                        </Grid>
                        <Grid size={8}>
                            <Typography variant="body2" className='font-articulat_cf text-md font-semibold leading-none tracking-tight'>
                                {story_desc_translation}
                            </Typography>
                        </Grid>
                        <Grid size={4}>
                            &nbsp;
                        </Grid>
                        <Grid size={8}>
                            <Typography variant="body1" className='font-articulat_cf text-xs leading-none tracking-tight'>
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
                    story_order === "1" ? (
                        <>
                            <Link to={`/dialog_page/${story_language}?s=${story_translation_id}`}>
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