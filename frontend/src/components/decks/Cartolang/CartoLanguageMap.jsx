import React from 'react'
import { Box } from '@mui/material';
import LanguageMapCard from './LanguageMapCard';

const CartoLanguageMap = ( {langdeck} ) => {
  return (
    <Box sx={{ marginTop:"-2rem"}}>
         <LanguageMapCard language={langdeck}></LanguageMapCard>
    </Box>
  )
}

export default CartoLanguageMap;