import React, { useState, useEffect, } from 'react';
import Typography from '@mui/material/Typography';
import LanguageSelector from '../UI/Media/LanguageSelector.jsx';
import KeywordPlayer from '../UI/Media/KeywordPlayer';
import AudioPlayerWaveAnimation from '../UI/Media/AudioPlayerWaveAnimation.jsx';
import classes from "../UI/Media/AudioPlayer.module.css";


const SingleCardCarousel = ({ card, index, lang, }) => {
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
                language: lang,
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
        console.log(vlang);
        if (vlang === 'fre') {
            setFrench(true);
        } else {
            setFrench(false);
            if (vlang === "عربي") {
                setDirection('rtl');
            }
        }
    }

    return (
        <>
            <div key={index} className="w-full h-full flex-shrink-0 flex flex-col">
                {/* Image : on réduit sa part à 40% de la carte pour laisser de la place au texte */}
                <div className="h-[60%] w-full overflow-hidden bg-gray-50">
                    <img src={card.phrase_illustration} className="w-full h-full object-cover" alt="" />
                </div>

                {/* Texte et Audio : 60% de la carte */}
                <div className="h-[60%] px-6 flex flex-col justify-between items-center text-center">
                    <LanguageSelector currentLang={currentLang} onChange={changeLanguage} />

                    <div className="overflow-y-auto space-y-2">
                        <Typography variant="body2" className="font-frutiger font-normal text-long-content text-sm md:text-xl">
                            {french ? <>
                                <KeywordPlayer wordDeck={wordDeck} language={french}></KeywordPlayer>
                            </> : <>
                                <div dir={direction} className={direction === 'ltr' ? 'flex justify-left text-center' : 'flex justify-right text-right'}>
                                    {phrase_translation}
                                </div>
                            </>}
                        </Typography>
                    </div>
                    {audioWave ?
                        <div className={`${classes['wave-bar']} flex items-center justify-center pt-1 gap-[3px] h-[30px] ${!audioWave ? 'opacity-0' : 'opacity-100'}`}>
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
                        </div> :
                        <>
                            <div className='flex pt-1 h-[20px]'></div>
                        </>
                    }
                    <div className='p-6'>
                        <AudioPlayerWaveAnimation media_url={french ? phrase_audio_url_fr : phrase_audio_url} language={french ? 'fr' : foreignLang} callbackAudio={callbackAudio}></AudioPlayerWaveAnimation>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCardCarousel