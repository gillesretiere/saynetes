import React, { useState, useEffect, useContext, } from 'react';

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
      <div>
        <img src={choose_saynete} width="100%" className='w-full max-h-90 xl:max-h-[420px] object-cover' />
      </div>
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