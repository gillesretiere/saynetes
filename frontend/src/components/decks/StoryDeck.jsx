import React, { useState, useEffect, useContext, } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeckContext from "../../store/DeckContext";
import StoryCard from '../UI/MUI/Card/StoryCard';
import classes from "./Deck.module.css";
import {
  choose_saynete, choose_language,
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
      </Box>
            <Typography
              sx={{ marginLeft: '1rem', marginTop: '1rem', }}
              className={`font-articulat_cf text-xl xl:text-2xl font-semibold text-primary-orange leading-none tracking-wide text-nowrap text-left`}
            >Choisissez une saynète
            </Typography>
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