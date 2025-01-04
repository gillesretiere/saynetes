import React, { useState, useEffect, useContext, } from 'react';

import DeckContext from "../../store/DeckContext";
import StoryCard from '../UI/MUI/Card/StoryCard';
import classes from "./Deck.module.css";

const StoryDeck = ({ deck, language }) => {

  const ctx = useContext (DeckContext);
  const arr = [];
  {
      deck && deck.map(
          (el) => {
              let item = {};
              item["label"] = el.story_translation;
              item["url"] = `/dialog_page/${el.story_language}?s=${el.story_translation_id}`;
              arr.push(item);
          }
      )
  }
  ctx.current_deck.navlinks = arr;

  return (
    <>
      <div className={`${classes.card__list}`}>
        {deck && deck.map(
          (el) => {
            return (<StoryCard key={el._id} card={el} />)
          }
        )}
      </div>
    </>

  )
}

export default StoryDeck