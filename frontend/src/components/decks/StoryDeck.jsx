import React, { useState, useEffect, useContext, } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeckContext from "../../store/DeckContext";
import StoryCard from '../UI/MUI/Card/StoryCard';
import classes from "./Deck.module.css";
import {
  choose_saynete,
} from "../../assets/img/index.js";

const StoryDeck = ({ deck, language }) => {

  const ctx = useContext(DeckContext);
  const arr = [];
  {
    deck && deck.sort((a, b) => a.story_order > b.story_order ? 1 : -1).map(
      (el) => {
        let item = {};
        item["label"] = el.story_translation;
        item["enabled"] = el.story_order === "1" ? true : false;
        item["url"] = `/dialog_page/${el.story_language}?s=${el.story_translation_id}`;
        arr.push(item);
      }
    )
  }
  ctx.current_deck.navlinks = arr;

  return (
    <>
      <Box sx={{ position: 'relative', }}>
        <img src={choose_saynete} width="100%" className='w-full max-h-90 xl:max-h-[420px] object-cover' />
        <Typography
          sx={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
          className={`font-articulat_cf text-xl md:text-3xl xl:text-5xl font-bold text-white leading-none tracking-wide uppercase text-nowrap`}
        >Choisissez une saynète
        </Typography>

        {language && language === "rus" ? (
          <Typography
            sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}
            className={`font-articulat_cf text-xl md:text-3xl xl:text-5xl font-bold text-secondary-light leading-none tracking-wide uppercase text-nowrap`}
          >
            Выберите сцену
          </Typography>
        ) : (
          language==="rom" ? (
            <Typography
            sx={{ position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }}
            className={`font-articulat_cf text-xl md:text-3xl xl:text-5xl font-bold text-secondary-light leading-none tracking-wide uppercase text-nowrap`}
          >Alegeți o scenă
          </Typography>
          ) : (
            <></>
          )

        )}

      </Box>
      <div className={`${classes.card__list}`}>
        {deck && deck.sort((a, b) => a.story_order > b.story_order ? 1 : -1).map(
          (el) => {
            return (<StoryCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>

  )
}

export default StoryDeck