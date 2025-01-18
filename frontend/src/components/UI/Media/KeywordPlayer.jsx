import React, { useState, useEffect, } from "react";
import Popper from "@mui/material/Popper";
import KeywordPopper from "./KeywordPopper";

import classes from "./KeywordPlayer.module.css";


const KeywordPlayer = ({ wordDeck, language }) => {

    const [wordsId, setWordsId] = useState('');
    const [words, setWords] = useState('');
    const [phraseKeywordID, setPhraseKeywordID] = useState('');
    const [phraseKeywordText, setPhraseKeywordText] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const [wordElement, setWordElement] = useState(null);
    const [arrowRef, setArrowRef] = useState(null);
    const [french, setFrench] = useState (language);

    const callbackModal = () => {
        setAnchorEl(null);
     }

    const get_kw_by_rec_id = ({ elem }) => {
        let idx = phraseKeywordID.indexOf(elem);
        if (idx) {
            return phraseKeywordText[idx];
        } else {
            return;
        }
    };

    useEffect(() => {
        setWordsId(wordDeck[0].phrase_words_rec_id);
        setWords(wordDeck[0].phrase_words);
        setPhraseKeywordID(wordDeck[0].phrase_html_rec_id.split("<kw>"));
        setPhraseKeywordText(wordDeck[0].phrase_html_kw.split("<kw>"));
    }, [wordDeck]);

    const handleClick = (event) => {
        setArrowRef(event.currentTarget);
        const obj = words.find((o) => o.word_rec_id === event.target.id);
        setWordElement(obj);
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popper" : undefined;

    return (
        <>
            <div>
                <Popper id={id}
                    open={open}
                    anchorEl={anchorEl}
                    placement="bottom"
                    disablePortal={false}
                    modifiers={[
                        {
                            name: 'arrow',
                            enabled: true,
                            options: {
                                element: arrowRef,
                            }
                        }
                    ]}
                >
                    <KeywordPopper keyword={wordElement} language={french} callbackModal={callbackModal} />
                </Popper>
            </div>
            <div>
                {phraseKeywordID &&
                    phraseKeywordID.map((elem) =>
                        wordsId.indexOf(elem) !== -1 && elem.length > 1 ? (
                            <span key={elem} id={elem} onClick={handleClick}>
                                <mark className={classes.marked__item} id={elem}>{get_kw_by_rec_id({ elem })}</mark>
                            </span>
                        ) : (
                            <span key={elem}>{elem}</span>
                        )
                    )}
            </div>
        </>

    )
}

export default KeywordPlayer