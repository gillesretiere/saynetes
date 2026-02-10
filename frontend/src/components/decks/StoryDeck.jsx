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
      {/* Header avec gradient natif Tailwind */}
      <header className="relative w-full h-52 flex items-center justify-center overflow-hidden bg-main-bg border-b border-primary-orange/10">

        {/* Couche de gradient statique */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-main/20 via-primary-orange/10 to-main-bg"></div>

        {/* Titre */}
        <h1 className="relative z-10 text-3xl md:text-4xl font-primary font-bold text-primary-orange drop-shadow-sm">
        </h1>
      </header>
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