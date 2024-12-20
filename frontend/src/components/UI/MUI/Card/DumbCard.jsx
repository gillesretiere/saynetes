import React from 'react'

const DumbCard = ( {card} ) => {
    const {language,} = card;
  return (
    <div>{language}</div>
  )
}

export default DumbCard