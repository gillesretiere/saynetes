import React, { useState, useEffect, useContext, } from 'react';
import DeckContext from '../../../store/DeckContext';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import LanguageMapCard from './LanguageMapCard';

const useStyles = makeStyles(theme => ({
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function CartoCountryLanguageCardPopper({ language, langDeck, callbackModal, }) {
  console.log(language);

  let ctx = useContext(DeckContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const closeButtonClickHandler = () => {
    callbackModal();
  }
  useEffect(
    () => {
      console.log(langDeck);
    }, [langDeck]
  );
  return (
    <>
      <Card sx={{ maxWidth: 315, margin: 'auto' }}>
        <CardActionArea sx={{ flexGrow: 1, width: 290 }}>
          <CardContent sx={{ maxWidth: 290, margin: 'auto' }}>
            {langDeck && langDeck.language_countries ? (
              <>
                <LanguageMapCard language={langDeck}></LanguageMapCard>
                <Typography variant="h5" sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "8",
                  WebkitBoxOrient: "vertical",
                }}>
                  {language}
                </Typography>
                <Typography variant="h5" sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "8",
                  WebkitBoxOrient: "vertical",
                }}>
                  Popularité
                </Typography>
              </>
            ) : (
              <Typography>
                Pas d'infos
              </Typography>
            )}

            {langDeck && langDeck.language_desc ? (
              <>
                <Typography variant="body2" sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "8",
                  WebkitBoxOrient: "vertical",
                }}>
                  {langDeck.language_desc}
                </Typography>
              </>
            ) : (
              <Typography>
                Pas d'infos
              </Typography>
            )}
          </CardContent>
          <CardActions sx={{ flexGrow: 1, width: 290 }}>
            <Button size="extrasmall" onClick={closeButtonClickHandler} sx={{ color: 'text.secondary' }}>Fermer</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}
