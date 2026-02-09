import React, { useContext, } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import DialogDeck from '../components/decks/DialogDeck';
import { json_data } from '../assets/data/index.js';
import DeckContext from "../store/DeckContext";


const DialogPage = () => {

    const [searchParams] = useSearchParams();
    const s = searchParams.get("s");
    const l = s.slice(- 3);

    const ctx = useContext(DeckContext);
    
    const filtered = [];
    for (var i = 0; i < json_data.length; i++) {
        if (json_data[i].language === l) {
            filtered.push(json_data[i]);
        }
    }
    const stories = filtered[0].themes[0].lessons[0].stories;
    const dialog = [];
    for (var i = 0; i < stories.length; i++) {
        if (stories[i].story_translation_id === s) {
            stories[i].current_language = ctx.current_language;
            dialog.push(stories[i]);
        }
    }
    return (
        <>
            <Layout>
                <DialogDeck deck={dialog[0].phrases} lang={dialog[0].current_language}></DialogDeck>
            </Layout>
        </>
    )
}

export default DialogPage