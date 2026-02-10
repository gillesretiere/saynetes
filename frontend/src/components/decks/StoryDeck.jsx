import React, { useState, useEffect, useContext, } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import DeckContext from "../../store/DeckContext";
import { UserContext } from "../../store/user_context";

import StoryCard from '../UI/MUI/Card/StoryCard';
import classes from "./Deck.module.css";
import {
  choose_saynete, choose_language,
} from "../../assets/img/index.js";

const StoryDeck = ({ deck, language }) => {

  const ctx = useContext(DeckContext);
  const userctx = useContext(UserContext);
  const arr = [];
  {
    deck && deck.sort((a, b) => a.story_order > b.story_order ? 1 : -1).map(
      (el) => {
        let item = {};
        item["label"] = el.story_translation;
        /*
        BUG !! la story doit être dispo selon la présence dans la matrice de userContext
        REMOVE => item["enabled"] = el.story_order === "1" ? true : false;
        REPLACE BY => userctx.matrix.indexOf(el.story_translation_id) > -1
        */
        item["enabled"] = userctx.matrix.indexOf(el.story_translation_id) > -1;
        item["url"] = `/dialog_page/${el.story_language}?s=${el.story_translation_id}`;
        arr.push(item);
      }
    )
  }
  ctx.current_deck.navlinks = arr;

  return (
    <>
      <header className="header-minimalist">
        <div className="minimalist-shapes"></div>
        <div className="flex items-center justify-center h-full relative z-10">
          <h1 className="text-3xl font-bold text-primary-orange">
            Choisissez une saynète
          </h1>
        </div>
      </header>
      <Typography
        sx={{ marginLeft: '1rem', marginTop: '1rem', }}
        className={`font-articulat_cf text-xl xl:text-2xl font-semibold text-primary-main leading-none tracking-wide text-nowrap text-left`}
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