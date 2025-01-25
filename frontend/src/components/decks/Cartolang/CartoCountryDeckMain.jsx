import React from 'react'
import SmallButton from '../../UI/SmallButton.jsx';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Link, } from "react-router-dom";

export const CartoCountryDeckMain = ( {deck} ) => {

  const {
    country_name_fr,
    country_name_native,
    country_national_flag,
    country_summary,
    country_languages,
    country_iso2,
    wfb_facts, } = deck;

  return (
    <>
      <section id="carto_main">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: 0,
            gridTemplateRows: 'auto',
            gridTemplateAreas: {
              xs:
                `
                "cy_name_fr cy_name_fr cy_name_fr . ."
                "cy_name_na cy_name_na cy_name_na . ."
                "cy_flag . . . ."
                "cy_caption1 . cy_summary cy_summary cy_summary"
                ". . . . cy_button1"
                "cy_blocA1 cy_blocA2 cy_blocA3 cy_blocA4 cy_blocA5"
                `,
              md:
                `
                "cy_name_fr cy_name_fr cy_flag . ."
                "cy_name_na cy_name_na cy_flag . ."
                "cy_caption1 . cy_summary cy_summary cy_summary"
                ". . . . cy_button1"
                "cy_blocA1 cy_blocA2 cy_blocA3 cy_blocA4 cy_blocA5"
                `,
            },
          }}
        >
          <Box className={`mx-1 px-4`} sx={{ gridArea: 'cy_name_fr', }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              bgcolor: 'background.paper',
              alignItems: 'center',
            }}>
              <Typography variant="h2" className={`font-articulat_cf leading-none tracking-tight font-semibold`}>
                {country_name_fr}
              </Typography>
            </Box>
          </Box>
          <Box className={`mx-1 px-4 mb-5`} sx={{ gridArea: 'cy_name_na', }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              bgcolor: 'background.paper',
              maxWidth: 300,
              borderRadius: 1,
              alignItems: 'center',
            }}>
              <Typography variant="h3" className={`font-articulat_cf leading-none tracking-tight font-semibold text-slate-500`}>
                {country_name_native}
              </Typography>
            </Box>
          </Box>
          <Box className={`mx-1 p-4 mb-5`} sx={{ gridArea: 'cy_flag', }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              bgcolor: 'background.paper',
              maxWidth: 300,
              borderRadius: 1,
              alignItems: 'center',
            }}>
              <img src={country_national_flag} className='h-full max-h-90 xl:max-h-[640px] object-cover' />
            </Box>
          </Box>
          <Box className={`mx-0 p-4 mb-5`} sx={{ gridArea: 'cy_caption1', }}>
            <Box sx={{ p: 1, m: 1, }}>
              <Typography variant="caption" className='text-slate-500'>
                Résumé
              </Typography>
            </Box>
          </Box>
          <Box className={`mx-0 p-4`} sx={{ gridArea: 'cy_summary', }}>
            <Box sx={{
              display: 'flex',
              p: 1,
              bgcolor: 'background.paper',
              alignItems: 'top',
            }}>
              <Typography variant="h5" sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "8",
                WebkitBoxOrient: "vertical",
              }}>
                {country_summary}
              </Typography>
            </Box>
          </Box>
          <Box className={`mx-0 px-6`} sx={{ gridArea: 'cy_button1', display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={{ pathname: `/saynetes_page/` }}>
              <SmallButton label="Read more" />
            </Link>
          </Box>
          <Box className={`ml-2 px-2`}
            sx={{ width: '100%', height: 300, gridArea: 'cy_blocA1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Nom officiel
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="h4">
                {country_iso2}
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="body2">
                {wfb_facts.Country_name.conventional_long_form}
              </Typography>
            </Box>
          </Box>
          <Box className={`ml-2 px-2`}
            sx={{ width: '100%', gridArea: 'cy_blocA2', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Capitale
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="h4">
                {wfb_facts.Capital.name}
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="body2">
                {wfb_facts.Capital.etymology}
              </Typography>
            </Box>
          </Box>
          <Box className={`ml-2 px-2`}
            sx={{ width: '100%', gridArea: 'cy_blocA3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Nationalité / Ethnies
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="h4">
                {wfb_facts.Nationality.adjective}
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="body2">
                {wfb_facts.Ethnic_groups}
              </Typography>
            </Box>
          </Box>
          <Box className={`ml-2 px-2`}
            sx={{ width: '100%', gridArea: 'cy_blocA4', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Population
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="h4">
                {wfb_facts.Population}
              </Typography>
            </Box>
          </Box>
          <Box className={`mr-2 px-2`} sx={{ width: '100%', gridArea: 'cy_blocA5', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderRight: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Superficie
              </Typography>
            </Box>
            <Box className='px-4'>
              <Typography variant="h4">
                {wfb_facts.Area.total}
              </Typography>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  )
}
