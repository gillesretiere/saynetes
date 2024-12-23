import React, { useContext, useEffect, useState, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AudioPlayer from '../../Media/AudioPlayer';
import KeywordPlayer from '../../Media/KeywordPlayer';
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
        phrase_audio,
        phrase_audio_url,
        phrase_audio_url_fr,
        phrase_illustration,
        phrase_position,
        phrase_html_rec_id,
        phrase_html_kw,
        phrase_words_rec_id,
        words,
    } = card;

    const [french, setFrench] = useState(true);

    const [wordDeck, setWordDeck] = useState([
        {
          phrase: '',
          phrase_html_rec_id: '',
          phrase_html_kw: '',
          phrase_words_rec_id: '',
          phrase_words: '',
        }
      ]);

      useEffect(() => {
        const vkUrl = phrase_audio.split('/');
        const updateWordDeck = [
          {
            phrase: phrase,
            phrase_html_rec_id: phrase_html_rec_id,
            phrase_html_kw: phrase_html_kw,
            phrase_words_rec_id: phrase_words_rec_id,
            phrase_words: words,
    
          }
        ];
        setWordDeck(updateWordDeck);
    
      }, [card]);

    const languageToggler = (val) => {
        // console.log(val);
        if (val === "FR") {
            setFrench(true);
        } else {
            setFrench(false);
        }
    }


    return (
        <Card sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
                sx={{ minHeight: 340 }}
                image={phrase_illustration}
                title={story_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {phrase_position}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {french ? <>
                        <KeywordPlayer wordDeck={wordDeck} language={french}></KeywordPlayer>
                    </> : <>
                        {phrase_translation}
                    </>}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => languageToggler('FR')}>fre</Button>
                <Button size="small" onClick={() => languageToggler('TR')} >{story_language}</Button>
                <IconButton aria-label="play/pause">
                    <AudioPlayer media_url={french ? phrase_audio_url_fr : phrase_audio_url} language={french ? 'fr' : 'tr'}></AudioPlayer>
                </IconButton>
            </CardActions>
        </Card>
    );
}