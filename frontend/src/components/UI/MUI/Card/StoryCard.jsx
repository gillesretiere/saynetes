import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

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
        story_translation_id, } = card;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={story_illustration}
                title={story_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {story_translation}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {story_name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}