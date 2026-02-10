import React, { useEffect, useState, } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import AudioPlayer from '../../Media/AudioPlayer';
import AudioPlayerWaveAnimation from '../../Media/AudioPlayerWaveAnimation.jsx';
import KeywordPlayer from '../../Media/KeywordPlayer';
import { base_server_url, } from "../../../../assets/localData/data.js";
import { sound_wave } from '../../../../assets/img/index.js';
import LanguageSelector from '../../Media/LanguageSelector.jsx';
import classes from "../../Media/AudioPlayer.module.css";
import { short_languages } from '../../../../assets/data/index.js';


export default function DialogCard({ card, lang, }) {
    let { story_order,
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

    // tour de passe-pase pour changer l'url des illustrations et corriger un bug (jpg/png)
    phrase_illustration = base_server_url + "assets/img/saynetes/" + phrase_illustration.split('\\').pop().split('/').pop().replace("jpg", "png");
    phrase_audio_url = base_server_url + "assets/audio/ai/" + story_language + "/" + phrase_audio_url.split('\\').pop().split('/').pop();
    phrase_audio_url_fr = base_server_url + "assets/audio/ai/fre/" + phrase_audio_url_fr.split('\\').pop().split('/').pop();

    const [french, setFrench] = useState(true);
    const [currentLang, setCurrentLang] = useState('fre');
    const [foreignLang, setForeignLang] = useState(lang);
    const [isChanging, setIsChanging] = useState('false');
    const [direction, setDirection] = useState('ltr');
    const [wordDeck, setWordDeck] = useState([
        {
            phrase: '',
            phrase_html_rec_id: '',
            phrase_html_kw: '',
            phrase_words_rec_id: '',
            phrase_words: '',
        }
    ]);
    const [audioWave, setAudioWave] = useState(false);

    useEffect(() => {
        const vkUrl = phrase_audio.split('/');
        const updateWordDeck = [
            {
                phrase: phrase,
                phrase_html_rec_id: phrase_html_rec_id,
                phrase_html_kw: phrase_html_kw,
                phrase_words_rec_id: phrase_words_rec_id,
                phrase_words: words,
                language : lang,
            }
        ];
        setWordDeck(updateWordDeck);

    }, [card, lang,]);

    const callbackAudio = (isPlaying) => {
        setAudioWave(isPlaying);
        // setAudioWave(false);
    }

    const changeLanguage = (vlang) => {
        setCurrentLang(vlang);
        setIsChanging(true);
        if (vlang === 'fre') {
            setFrench(true);
        } else {
            setFrench(false);
            if (vlang === "ams") {
                setDirection('rtl');
            }
        }
    }
    return (
        <Card className="bg-card-bg text-primary-main shadow-custom-card border border-gray-200/50 dark:border-white/5 rounded-2xl transition-all duration-300" sx={{ maxWidth: 345, margin: 'auto' }}>
            <CardMedia
                sx={{ minHeight: 340 }}
                image={phrase_illustration}
                title={story_name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className="flex justify-center font-frutiger font-light text-lg">
                    {phrase_position}
                </Typography>
                <LanguageSelector currentLang={currentLang} onChange={changeLanguage} />
                <Typography variant="body2" className="font-frutiger font-normal text-long-content text-xl">
                    {french ? <>
                        <KeywordPlayer wordDeck={wordDeck} language={french}></KeywordPlayer>
                    </> : <>
                        <div dir={direction}>
                            {phrase_translation}
                        </div>
                    </>}
                </Typography>
                <div className="m-5">
                    <AudioPlayerWaveAnimation media_url={french ? phrase_audio_url_fr : phrase_audio_url} language={french ? 'fr' : foreignLang} callbackAudio={callbackAudio}></AudioPlayerWaveAnimation>
                </div>
                {audioWave ?
                    <div className={`${classes['wave-bar']} flex items-center justify-center pt-5 gap-[3px] h-[30px] ${!audioWave ? 'opacity-0' : 'opacity-100'}`}>
                        {[...Array(13)].map((_, i) => (
                            <span
                                key={i}
                                className={`${classes['wave-bar']} bg-primary-main w-[3px] rounded-full ${classes['animate-wave']}`}
                                style={{
                                    animationDelay: `${i * 0.1}s`,
                                    height: '30%' // Hauteur initiale
                                }}
                            ></span>
                        ))}
                    </div> : <></>}
            </CardContent>


        </Card>
    );
}