import React, { useContext, } from 'react';
import DeckContext from "../../store/DeckContext";
import { UserContext } from "../../store/user_context";
import StoryCard from './StoryCard.jsx';
import SectionDivider from './SectionDivider.jsx';

const StoryDeck = ({ deck, language }) => {

  // deck = deck.slice(0, 3);
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mt-6">
        {deck && deck.sort((a, b) => a.story_order > b.story_order ? 1 : -1).map(
          (el) => {
            return (
              <StoryCard key={el._id} card={el} />
            )
          }
        )}
      </div>
    </>

  )
}

export default StoryDeck