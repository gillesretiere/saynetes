import React, { useState, useEffect, useContext, } from 'react';
import RegionDeck from '../components/decks/Cartolang/RegionDeck.jsx';
import Layout from '../components/UI/Layout.jsx';
import GoTopOfPage from './GoTopOfPage.jsx';
import { CartoSearchPage } from '../components/decks/Cartolang/CartoSearchPage.jsx';
import { langdeck_regions, langdeck_countries, langdeck_languages, } from '../assets/data/index.js';
import { UserContext } from '../store/user_context.jsx';


const CartolangPage = () => {

  const [regions, setRegions] = useState([]);
  const [countries, setCountries] = useState([]);
  const [languages, setLanguages] = useState([]);
  const ctx = useContext(UserContext);

  useEffect(() => {
    const loadRegions = () => JSON.parse(JSON.stringify(langdeck_regions));
    setRegions(loadRegions);
    const loadCountries = () => JSON.parse(JSON.stringify(langdeck_countries));
    setCountries(loadCountries);
    const loadLanguages = () => JSON.parse(JSON.stringify(langdeck_languages));
    setLanguages(loadLanguages);
  }, []);

  return (
    <>
      <Layout>
        <GoTopOfPage />
        {countries && languages &&
          <CartoSearchPage regions={regions} countries={countries} languages={languages} />
        }
        {/* <RegionDeck deck={regions} /> */}
      </Layout>
    </>
  )
}

export default CartolangPage