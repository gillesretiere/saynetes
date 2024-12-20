import React, { useState, useEffect, } from 'react';
import LanguageDeck from '../components/decks/LanguageDeck';
import Layout from '../components/UI/Layout';
import { json_data } from '../assets/data/index.js';


const LanguageSelectionPage = () => {

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);
    }, []);

    return (
        <>
            <Layout>
                <LanguageDeck deck={languages} />
            </Layout>
        </>
    )
}

export default LanguageSelectionPage