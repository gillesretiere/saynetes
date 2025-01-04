import React, { useState, useEffect, useContext, } from 'react';
import LanguageDeck from '../components/decks/LanguageDeck.jsx';
import GoTopOfPage from './GoTopOfPage.jsx';
import Layout from '../components/UI/Layout.jsx';
import { json_data } from '../assets/data/index.js';

import { UserContext } from '../store/user_context.jsx';


const LanguagePage = () => {

    const [languages, setLanguages] = useState([]);

    const ctx = useContext(UserContext);
    
    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);
    }, []);

    return (
        <>
            <Layout>
                <GoTopOfPage />
                <LanguageDeck deck={languages} />
            </Layout>
        </>
    )
}

export default LanguagePage