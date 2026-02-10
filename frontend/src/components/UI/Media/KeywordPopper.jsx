import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import Grid from '@material-ui/core/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseIcon from '@mui/icons-material/Close';
import AudioPlayer from './AudioPlayer';
import AudioPlayerWaveAnimation from './AudioPlayerWaveAnimation.jsx';
import LanguageSelector from './LanguageSelector.jsx';
import css from "./AudioPlayer.module.css";


import { base_server_url, } from "../../../assets/localData/data.js";

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function KeywordPopper({ keyword, language, callbackModal }) {
  let { word, word_translation, word_language, word_audio_url_fr, word_audio_url, word_notes, word_notes_translation, } = keyword;

  // tour de passe-pase pour changer l'url des audios
  word_audio_url = base_server_url + "assets/audio/ai/" + word_language + "/" + word_audio_url.split('\\').pop().split('/').pop();
  word_audio_url_fr = base_server_url + "assets/audio/ai/fre/" + word_audio_url_fr.split('\\').pop().split('/').pop();


  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [french, setFrench] = useState(language);
  const [currentLang, setCurrentLang] = useState('fre');
  const [isChanging, setIsChanging] = useState('false');

  const [showMore, setShowMore] = useState(true);
  const [direction, setDirection] = useState('ltr');
  const [audioWave, setAudioWave] = useState(false);


  const languageToggler = (val) => {
    if (val === "FR") {
      setFrench(true);
    } else {
      setFrench(false);
      if (val === "ams") {
        setDirection('rtl');
      }
    }
  }

  const closeButtonClickHandler = () => {
    callbackModal();
  }

  const showMoreClickHandler = (event) => {
    setShowMore(!showMore);
  };

  const callbackAudio = (isPlaying) => {
    // setAudioWave(isPlaying);
    setAudioWave(isPlaying);
  }

  const changeLanguage = (vlang) => {
    setCurrentLang(vlang);
    setIsChanging(true);
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
      <Card className={`bg-card-bg text-primary-main shadow-custom-card border border-gray-200/50 dark:border-white/5 rounded-2xl transition-all duration-300`} sx={{ maxWidth: 315, margin: 'auto' }}>
        <CardActionArea sx={{ flexGrow: 1, width: 290 }}>
          <div className={`flex items-center place-content-end`}>
            <Button size="extrasmall" onClick={() => closeButtonClickHandler()} ><CloseIcon /></Button>
          </div>
          <CardContent sx={{ maxWidth: 290, margin: 'auto' }}>
            <Typography className='font-frutiger p-1' gutterBottom variant="h5" component="div">
              {french ? word :
                <div dir={direction}>
                  {word_translation}
                </div>
              }
            </Typography>
            {showMore ?
              <>
                <Typography className='text-body-text font-frutiger' gutterBottom variant="p" component="div">
                  {french ?
                    word_notes :
                    <div dir={direction}>
                      {word_notes_translation}
                    </div>
                  }
                </Typography>
              </> : <></>
            }

          </CardContent>
          <div className={`flex items-center justify-center`}>
            <AudioPlayerWaveAnimation media_url={french ? word_audio_url_fr : word_audio_url} language={french ? 'fr' : 'tr'} callbackAudio={callbackAudio}></AudioPlayerWaveAnimation>
          </div>
          {audioWave ?
            <div className={`${css['wave-bar']} flex items-center justify-center gap-[3px] h-[30px] ${!audioWave ? 'opacity-0' : 'opacity-100'}`}>
              {[...Array(13)].map((_, i) => (
                <span
                  key={i}
                  className={`${css['wave-bar']} bg-primary-main w-[3px] rounded-full ${css['animate-wave']}`}
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    height: '30%' // Hauteur initiale
                  }}
                ></span>
              ))}
            </div> : <></>}
          <LanguageSelector currentLang={currentLang} onChange={changeLanguage} />


        </CardActionArea>
      </Card>
    </>
  );
}