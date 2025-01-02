import React, { useContext, } from 'react';
import { useSearchParams } from 'react-router-dom';
import { langdeck_countries } from '../../../assets/data/index.js';
import CountryCard from './CountryCard.jsx';


const CountryPage = () => {

    const [searchParams] = useSearchParams();
    const r = searchParams.get("r");
    const filtered = [];
    for (var i = 0; i < langdeck_countries.length; i++) {
        if (langdeck_countries[i].region_uid === r) {
            filtered.push(langdeck_countries[i]);
        }
    }
    return (
        <>
            <div>
                {filtered && filtered.map(
                    (el) => {
                        return (<CountryCard key={el._id} card={el} />)
                    }
                )}
            </div>
        </>
    )
}

export default CountryPage