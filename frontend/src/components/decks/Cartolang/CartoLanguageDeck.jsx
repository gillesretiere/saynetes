import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import SimpleBarChart from './SimpleBarChart';
import Grid from '@material-ui/core/Grid';
import ReadMore from '../../UI/Media/ReadMore';
import { CartoLanguageCountryCard } from './CartoLanguageCountryCard';

import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  card: {
    margin: 'auto',
  }
});

const CartoLanguageDeck = ({ langdeck }) => {
  return (
    <>
      {langdeck ? (

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
            ". . lg_barchrt lg_barchrt lg_barchrt"
            "lg_rndchrt lg_rndchrt lg_rndchrt lg_rndchrt lg_rndchrt"
            `,
              md:
                `
            "lg_name_fr lg_name_fr lg_barchrt lg_barchrt ."
            "lg_name_fr lg_name_fr lg_barchrt lg_barchrt ."
            "lg_rndchrt lg_rndchrt lg_rndchrt lg_rndchrt lg_rndchrt"
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
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              alignItems: 'center',
            }}>
              <Typography variant="h3" className={`font-articulat_cf leading-none tracking-tight font-semibold text-slate-500`}>
                {langdeck.language_name_native}
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              alignItems: 'center',
            }}>
              {langdeck.language_summary &&
                <ReadMore text={langdeck.language_summary} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
          </Box>
          <Box className={`mx-1 px-1 my-4 mb-20`} sx={{ gridArea: 'lg_barchrt', }}>
            {/*
              langdeck && langdeck.language_countries &&
              <SimpleBarChart dataset={langdeck.language_countries} w={800} h={400} />
            */}
          </Box>

          <Box className={`mx-1 px-1 my-4 mt-20 pt-6`} sx={{ gridArea: 'lg_rndchrt', border: 1, borderLeft: 0, borderBottom: 0, borderRight: 0, borderColor: 'grey.400', }}>
            <Grid container spacing={4}>
              {langdeck.language_countries && langdeck.language_countries.sort((a, b) => (a.popularity_as_float > b.popularity_as_float ? -1 : 1))
                .map(
                  (el, index) => {
                    return (
                      <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
                        <CartoLanguageCountryCard card={el} langdeck={langdeck} />
                      </Grid>
                    )
                  }
                )}
            </Grid>

          </Box>
        </Box>
      ) : (
        <></>
      )}


    </>
  )
}

export default CartoLanguageDeck