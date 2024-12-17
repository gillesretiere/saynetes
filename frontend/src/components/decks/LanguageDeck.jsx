import React from 'react'

const LanguageDeck = ({deck}) => {
  const { language, lang_name_fr, lang_name_en, lang_name_native, lang_flag_icon, lang_alpha2, } = deck;
  return (
    <div>{lang_name_native}</div>
  )
}

export default LanguageDeck