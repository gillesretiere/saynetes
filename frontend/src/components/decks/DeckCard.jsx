import React from 'react';
import MediaCard from "../UI/MUI/Card/MediaCard.jsx";
import classes from "./Deck.module.css";

const DeckCard = ({card}) => {
  return (
    <>
      <div>
        <MediaCard card={card}></MediaCard>
      </div>
    </>
  )
}

export default DeckCard