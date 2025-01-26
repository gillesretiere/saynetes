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
import CartoCountryLanguageCardPopperMap from './CartoCountryLanguageCardPopperMap';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function CartoCountryLanguageCardPopper({ language, langDeck, callbackModal, }) {



  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const closeButtonClickHandler = () => {
    callbackModal();
  }

  console.log (langDeck);

  return (
    <>
      <Card sx={{ maxWidth: 315, margin: 'auto' }}>
        <CardActionArea sx={{ flexGrow: 1, width: 290 }}>
          <CardContent sx={{ maxWidth: 290, margin: 'auto' }}>
            <CartoCountryLanguageCardPopperMap langDeck={langDeck}></CartoCountryLanguageCardPopperMap>
            <Typography gutterBottom variant="h5" component="div">
              {langDeck && langDeck.language_name_fr &&
                langDeck.language_name_fr
              }
            </Typography>
            <Typography gutterBottom variant="body2" component="div">
              {langDeck && langDeck.language_desc &&
                langDeck.language_desc
              }
            </Typography>
          </CardContent>
          <CardActions sx={{ flexGrow: 1, width: 290 }}>
            <Button size="extrasmall" onClick={closeButtonClickHandler} sx={{ color: 'text.secondary' }}>Fermer</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}
