import React, { useContext, } from 'react';
import LanguageCard from '../UI/MUI/Card/LanguageCard';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import classes from './Deck.module.css';
import DeckContext from "../../store/DeckContext";
import {
  choose_language,
  allthepeople,
} from "../../assets/img/index.js";


const LanguageDeck = ({ deck }) => {
  const ctx = useContext(DeckContext);
  const arr = [];
  {
    deck && deck.sort((a, b) => a.lang_is_available > b.lang_is_available ? -1 : 1).map(
      (el, index,) => {
        let item = {};
        item["id"] = index;
        item["label"] = el.lang_name_native;
        item["enabled"] = el.lang_is_available;
        item["url"] = `/theme_page/${el.language}?l=${el.language}`;
        arr.push(item);
      }
    )
  }
  ctx.current_deck.navlinks = arr;

  return (
    <>
      <Box sx={{ position: 'relative', }}>
        <img src={choose_language} width="100%" className='w-full max-h-90 xl:max-h-[420px] object-cover' />

        {/*
                <Typography
          sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={`font-articulat_cf text-xl md:text-3xl xl:text-5xl font-bold text-white leading-none tracking-wide uppercase text-nowrap`}
        >Choisissez une langue
        </Typography>
                <Typography
          sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={`font-articulat_cf text-xl md:text-3xl xl:text-5xl font-bold text-secondary-main leading-none tracking-wide uppercase text-nowrap`}
        >Выберите язык
        </Typography>
        <Typography
          sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={`font-articulat_cf text-xl md:text-3xl xl:text-5xl font-bold text-secondary-light leading-none tracking-wide uppercase text-nowrap`}
        >Alegeți limba dvs
        </Typography>
        */}

      </Box>
      <Typography
        sx={{ marginLeft: '1rem', marginTop: '1rem', }}
        className={`font-articulat_cf text-xl xl:text-2xl font-semibold text-primary-orange leading-none tracking-wide text-nowrap text-left`}
      >Choisissez une langue
      </Typography>
      <div className={`${classes.card__list}`}>

        {deck && deck.map(
          (el) => {
            return (<LanguageCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>
  )
}

export default LanguageDeck