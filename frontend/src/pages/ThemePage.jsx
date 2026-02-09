import React, { useState, useEffect, useContext, } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import { json_data } from '../assets/data/index.js';
import ThemeDeck from '../components/decks/ThemeDeck.jsx';
import DeckContext from "../store/DeckContext";


const ThemePage = () => {
    const ctx = useContext(DeckContext);
    const [searchParams] = useSearchParams();
    const l = searchParams.get("l");
    const filtered = [];
    for (var i = 0; i < json_data.length; i++) {
        if (json_data[i].language === l) {
            filtered.push(json_data[i]);
            // on stocke dans le contexte le nom natif de la langue
            ctx.current_language=json_data[i].lang_name_native;
            localStorage.setItem("current_foreign_language", json_data[i].lang_name_native)
        }
    }
    return (
        <>
            <Layout>
                <ThemeDeck deck={filtered[0].themes} language={l}></ThemeDeck>
            </Layout>
        </>
    )
}

export default ThemePage