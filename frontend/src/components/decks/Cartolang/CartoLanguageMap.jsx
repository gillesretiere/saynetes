import React from 'react'
import { Box } from '@mui/material';
import LanguageMapCard from './LanguageMapCard';

const CartoLanguageMap = ( {langdeck} ) => {
  return (
    <Box sx={{ marginTop:"0px" }}>
         <LanguageMapCard  sx={{ height: '400px' }} language={langdeck}></LanguageMapCard>
    </Box>
  )
}

export default CartoLanguageMap;