import React, { useState, useEffect, useContext, } from 'react';
import { Box } from '@mui/material';

import LayoutCartolang from '../../UI/Layout';
import CartoLanguageDeck from "./CartoLanguageDeck";
import CartoLanguageMap from './CartoLanguageMap';
import LanguageMapCard from './LanguageMapCard';
import DeckContext from '../../../store/DeckContext';

const CartoLanguagePage = ({ uid }) => {

  let ctx = useContext(DeckContext);
  console.log(ctx.current_deck);

  return (
    <>
      <LayoutCartolang>
        <CartoLanguageMap langdeck={ctx.current_deck.language_deck[0]} />
        <CartoLanguageDeck langdeck={ctx.current_deck.language_deck[0]} />
      </LayoutCartolang>
    </>

  )
}

export default CartoLanguagePage