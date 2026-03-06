import React, { useState, useEffect, useContext, } from 'react';
import LanguageDeck from '../components/decks/LanguageDeck.jsx';
import GoTopOfPage from './GoTopOfPage.jsx';
import Layout from '../components/UI/Layout.jsx';
import { json_data } from '../assets/data/index.js';

import { UserContext } from '../store/user_context.jsx';
import DeckContext from '../store/DeckContext.jsx';

import Navbar from './Navbar.jsx';

const LanguagePage = () => {

    const [languages, setLanguages] = useState([]);

    const ctx = useContext(UserContext);
    const deckContext = useContext(DeckContext);

    useEffect(() => {
        const loadData = () => JSON.parse(JSON.stringify(json_data));
        setLanguages(loadData);

    }, []);

    useEffect(() => {
        updateNavlinks(languages.filter(a => a.lang_id != "fre"));
    }, [languages]);

    const updateNavlinks = (languages) => {
        const arr = [];
        {
            languages && languages.map(
                (el, index) => {
                    let item = {};
                    item["id"] = index;
                    item["label"] = el.lang_name_native + ' | ' + el.lang_name_fr;
                    item["url"] = `/theme_page/${el.language}?l=${el.language}`;
                    item["active"] = el.lang_is_available;
                    arr.push(item);
                }
            )
        }
        deckContext.current_deck.navlinks = arr;

    }

    return (
        <>
            <Layout>
                <Navbar context={deckContext} />
                <GoTopOfPage />
                {/* EXCLUSION du français */}
                <LanguageDeck languages={languages.filter(a => a.lang_id != "fre")} />
            </Layout>

            {/*
            <Layout>
                <GoTopOfPage />
                <LanguagePageNew />
                <LanguageDeck deck={languages} />
            </Layout>
                */}
        </>
    )
}

export default LanguagePage