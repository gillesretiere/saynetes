import React, { useContext, useEffect, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { UserContext } from '../../../../store/user_context';


export default function DialogCard({ card }) {
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
        phrase,
        phrase_translation,
        phrase_audio_url,
        phrase_illustration,
        phrase_position,
      } = card;


    const ctx = useContext (UserContext);
    console.log (card);

    const linkHandler = (event) => {
        console.log(card);
};


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={phrase_illustration}
                title={story_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {phrase_position}
                </Typography> 
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {phrase_translation}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" href={`/dialog_page/${story_language}?s=${story_translation_id}`}>Share</Button>
                <Button size="small" onClick={linkHandler}>Learn More</Button>
            </CardActions>
        </Card>
    );
}