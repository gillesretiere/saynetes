import React, { useContext, } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import DialogDeck from '../components/decks/DialogDeck';
import { json_data } from '../assets/data/index.js';


const DialogPage = () => {

    const [searchParams] = useSearchParams();
    const s = searchParams.get("s");
    const l = s.slice(- 3);

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
            dialog.push(stories[i]);
        }
    }

    return (
        <>
            <Layout>
                <DialogDeck deck={dialog[0].phrases}></DialogDeck>
            </Layout>
        </>
    )
}

export default DialogPage