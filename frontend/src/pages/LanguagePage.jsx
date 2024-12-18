import React, { useState, useEffect, } from 'react';
import LanguageDeck from '../components/decks/LanguageDeck';
import Layout from '../components/UI/Layout';

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
            <Layout>
                <LanguageDeck deck={languages} />
            </Layout>
        </>
    )
}

export default LanguagePage