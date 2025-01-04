import React, { useState, useEffect, useContext, } from 'react';
import DeckContext from "../../../store/DeckContext";
import CountryLanguageDeck from './CountryLanguageDeck.jsx';

import { useSearchParams } from 'react-router-dom';

import Layout from '../../UI/Layout.jsx';
import classes from './card.module.css';

const CountryLanguagesPage = () => {
  let deckContext = useContext(DeckContext);
  const card = deckContext.current_deck.cartolang_deck;
  console.log(deckContext);

  const [searchParams] = useSearchParams();

  return (
    <>
      <Layout>
        <CountryLanguageDeck card={card} />
      </Layout>
    </>
  )
}

export default CountryLanguagesPage