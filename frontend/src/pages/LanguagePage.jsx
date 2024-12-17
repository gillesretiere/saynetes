import React, { useState, useEffect, useContext, } from 'react';
import LanguageDeck from '../components/decks/LanguageDeck';


const LanguagePage = () => {
    const BASE_URL = "https://hammer-marteau.com:8000/saynetes"; /*'https://hammer-marteau.com:8000/saynetes/';*/
    const [languages, setLanguages] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch(`${BASE_URL}/`)
            .then(response => response.json())
            .then(json => {
                setLanguages(json)
                setIsPending(false)
            })
            .catch(error => {
                console.log(error);
            });
    }, [languages]);

    return (
        <>
            {languages && languages.map(
                (el) => {
                    return (<LanguageDeck key={el._id} deck={el} />)
                }
            )}
        </>
    )
}

export default LanguagePage