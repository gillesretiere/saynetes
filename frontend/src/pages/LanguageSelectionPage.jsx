import React, { useState, useEffect, useContext, } from 'react';
import LanguageDeck from '../components/decks/LanguageDeck';
import Layout from '../components/UI/Layout';
import { json_data } from '../assets/data/index.js';

import { UserContext } from '../store/user_context.jsx';
import { useStepContext } from '@mui/material';

const LanguageSelectionPage = () => {

    const [languages, setLanguages] = useState([]);

    const ctx = useContext (UserContext);
    console.log (ctx)
;
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