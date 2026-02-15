import React, { useContext, } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../components/UI/Layout';
import SayneteNavbar from '../components/decks/SayneteNavbar.jsx';
import DialogDeck from '../components/decks/DialogDeck';
import SayneteCardCarousel from '../components/decks/SayneteCardCarousel.jsx';
import { json_data } from '../assets/data/index.js';
import DeckContext from "../store/DeckContext";
import { base_server_url, } from "../assets/localData/data.js";



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
    let cards = dialog[0].phrases;
    cards.forEach((card) => {
        card.phrase_illustration = base_server_url + "assets/img/saynetes/jpg/" + card.phrase_illustration.split('\\').pop().split('/').pop().split('.').shift() + ".jpg";
        // phrase_illustration = base_server_url + "assets/img/saynetes/jpg/" + card_img.split('/').pop().split('.').shift() + ".jpg";
        card.phrase_audio_url = base_server_url + "assets/audio/ai/" + card.story_language + "/" + card.phrase_audio_url.split('\\').pop().split('/').pop();
        card.phrase_audio_url_fr = base_server_url + "assets/audio/ai/fre/" + card.phrase_audio_url_fr.split('\\').pop().split('/').pop();
    });

    return (
        <>
            <SayneteCardCarousel cards={cards} lang={dialog[0].current_language} />
            {/* <DialogDeck deck={dialog[0].phrases} lang={dialog[0].current_language}></DialogDeck> */}
        </>
    )
}

export default DialogPage