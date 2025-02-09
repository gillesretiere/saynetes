import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const CartoLanguageDeck = ({ langdeck }) => {
  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: 0,
          gridTemplateRows: 'auto',
          gridTemplateAreas: {
            xs:
              `
                    "lg_name_fr lg_name_fr . . ."
                    "lg_name_na lg_name_na . . ."
                    `,
            md:
              `
                    "lg_name_fr lg_name_fr . . ."
                    "lg_name_na lg_name_na . . ."
                    `,
          },
        }}
      >

        <Box className={`mx-1 px-4`} sx={{ gridArea: 'lg_name_fr', }}>
          <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              alignItems: 'center',
            }}>
            <Typography variant="h2" className={`font-articulat_cf leading-none tracking-tight font-semibold`}>
              {langdeck.language_name_fr}
            </Typography>
          </Box>
        </Box>
        <Box className={`mx-1 px-4 mb-5`} sx={{ gridArea: 'lg_name_na', }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              maxWidth: 300,
              borderRadius: 1,
              alignItems: 'center',
            }}>
              <Typography variant="h3" className={`font-articulat_cf leading-none tracking-tight font-semibold text-slate-500`}>
                {langdeck.language_name_native}
              </Typography>
            </Box>
          </Box>
      </Box>

    </>
  )
}

export default CartoLanguageDeck