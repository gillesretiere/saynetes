import React, { useState, useEffect, useContext, } from 'react';
import RegionDeck from '../components/decks/Cartolang/RegionDeck.jsx';
import Layout from '../components/UI/Layout.jsx';
import GoTopOfPage from './GoTopOfPage.jsx';
import { langdeck_regions } from '../assets/data/index.js';
import { UserContext } from '../store/user_context.jsx';


const CartolangPage = () => {

  const [regions, setRegions] = useState([]);
  const ctx = useContext(UserContext);

  useEffect(() => {
    const loadData = () => JSON.parse(JSON.stringify(langdeck_regions));
    setRegions(loadData);
  }, []);

  return (
    <>
      <Layout>
        <GoTopOfPage />
        <RegionDeck deck={regions} />
      </Layout>
    </>
  )
}

export default CartolangPage