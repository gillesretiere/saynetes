import React from 'react'

export const CartoCountryDeckLanguages = ({ country_languages }) => {
    return (
        <>
            {
                country_languages &&
                country_languages.map(
                    (el) => {
                        return (
                            <>
                                {el.language_uid}
                            </>)

                    })
            }
        </>
    )
}
