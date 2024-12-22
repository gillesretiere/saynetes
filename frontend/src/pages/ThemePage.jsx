import React, { useState, useEffect, } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import { json_data } from '../assets/data/index.js';
import ThemeDeck from '../components/decks/ThemeDeck.jsx';

const ThemePage = () => {

    const [searchParams] = useSearchParams();
    const l = searchParams.get("l");
    const filtered = [];
    for (var i = 0; i < json_data.length; i++) {
        if (json_data[i].language === l) {
            filtered.push(json_data[i]);
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