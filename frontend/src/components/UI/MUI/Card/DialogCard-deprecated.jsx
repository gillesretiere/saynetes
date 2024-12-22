import React, { useContext, useEffect, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import useMediaQuery from '@mui/material/useMediaQuery';
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


    const ctx = useContext(UserContext);
    console.log(card);

    const linkHandler = (event) => {
        console.log(card);

    };
    const mq_xs = useMediaQuery('(min-width:0px)');
    const mq_sm = useMediaQuery('(min-width:600px)');
    const mq_md = useMediaQuery('(min-width:900px)');
    const mq_lg = useMediaQuery('(min-width:1200px)');
    const mq_xl = useMediaQuery('(min-width:1536px)');
    const dynamicStyles = {
        ...mq_xs && { width: 1, maxHeight: 245, border: 1, borderColor: 'yellow', objectFit: "contain" },
        ...mq_sm && { width: 1, maxHeight: 345, border: 1, borderColor: 'green', objectFit: "contain" },
        ...mq_md && { width: 345, height: 345, border: 1, borderColor: 'blue', objectFit: "contain" },
        ...mq_lg && { width: 345, height: 345, border: 1, borderColor: 'purple', objectFit: "contain" },
        ...mq_xl && { width: 345, height: 345, border: 1, borderColor: 'red', objectFit: "contain" },
    }


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ minHeight: 240 }}
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
                <IconButton aria-label="play/pause">
                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
            </CardActions>
        </Card>
    );
}