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
  const [showMore, setShowMore] = useState(true);
  const [direction, setDirection] = useState('ltr');


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

  return (
    <>
      <Card className="shadow-md shadow-[#000000]" sx={{ maxWidth: 315, margin: 'auto' }}>
        <CardActionArea sx={{ flexGrow: 1, width: 290 }}>

          <CardContent sx={{ maxWidth: 290, margin: 'auto' }}>
            <Typography className='font-frutiger bg-[#e7f436] dark:text-slate-800 p-1' gutterBottom variant="h5" component="div">
              {french ? word :
                <div dir={direction}>
                  {word_translation}
                </div>
              }
            </Typography>
            {showMore ?
              <>
                <Typography className='font-frutiger' gutterBottom variant="p" component="div">
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
          <CardActions sx={{ flexGrow: 1, }}>
            <IconButton aria-label="play/pause" sx={{ margin: 'auto' }}>
              <AudioPlayer media_url={french ? word_audio_url_fr : word_audio_url} language={french ? 'fr' : 'tr'}></AudioPlayer>
            </IconButton>
          </CardActions>


          <CardActions sx={{ flexGrow: 1, width: 290 }}>
            {showMore ? <>
              <Button size="extrasmall" onClick={() => showMoreClickHandler()} sx={{ color: 'text.secondary' }}><CheckOutlinedIcon /></Button>
            </> : <>
              <Button size="extrasmall" onClick={() => showMoreClickHandler()} sx={{ color: 'text.secondary' }}><LiveHelpOutlinedIcon /></Button>
            </>}
            <Button size="extrasmall" onClick={() => closeButtonClickHandler()} sx={{ color: 'text.secondary' }}><CloseIcon /></Button>
            <Button size="extrasmall" onClick={() => languageToggler('FR')} sx={{ color: 'text.secondary' }}>fre</Button>
            <Button size="extrasmall" onClick={() => languageToggler(word_language)} sx={{ color: 'text.secondary' }}>{word_language}</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}