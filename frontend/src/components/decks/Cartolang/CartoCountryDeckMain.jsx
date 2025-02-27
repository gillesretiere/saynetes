import React, { useState, useEffect, useContext, } from "react";
import DeckContext from "../../../store/DeckContext";
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import ReadMore from '../../UI/Media/ReadMore';
import SmallButton from '../../UI/SmallButton';

export const CartoCountryDeckMain = ({ deck }) => {

  let ctx = useContext(DeckContext);

  const {
    country_name_fr,
    country_name_native,
    country_wfb_name_native,
    country_wfb_name_native_fr,
    country_wfb_capital_name_fr,
    country_wfb_capital_etymology_fr,
    country_wfb_nationality_adjective_fr,
    country_wfb_ethnic_groups_fr,
    country_wfb_religions_fr,
    country_wfb_economic_overview_fr,
    country_wfb_location_fr,
    country_national_flag,
    country_summary,
    country_languages,
    country_iso2,
    wfb_facts, } = deck;

    const [hdefCountryFlag, setFdefCountryFlag] = useState('');

    useEffect(
      () => {
        const s = country_national_flag.split('/').pop();
        setFdefCountryFlag (ctx.public_urls.vps_prod_https + "assets/img/flags/hdef/" + s);
      }, [country_national_flag]
    )


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
                "cy_goto1 . . . ."
                "cy_blocA1 cy_blocA2 cy_blocA3 cy_blocA4 cy_blocA5"
                `,
              md:
                `
                "cy_name_fr cy_name_fr cy_flag . ."
                "cy_name_na cy_name_na cy_flag . ."
                "cy_caption1 . cy_summary cy_summary cy_summary"
                "cy_goto1 . . . ."
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
              <img src={hdefCountryFlag} className='w-48 object-cover shadow-lg' />
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
              flexDirection: 'column',
              p: 1,
              bgcolor: 'background.paper',
              alignItems: 'top',
            }}>
              {country_summary &&
                <ReadMore text={country_summary} style={{ fontSize: 'x-large', borderTop: '1px solid white' }} />
              }
            </Box>
          </Box>



          <Box className={`mx-0 p-4`} sx={{ gridArea: 'cy_goto1', }}>
            <a href='#carto_lang'>
              <SmallButton label="Langues parlées" />
            </a>
          </Box>



          <Box className={`ml-2 px-2`}
            sx={{ width: '100%', height: 300, gridArea: 'cy_blocA1', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Nom officiel
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_name_native_fr &&
                <ReadMore text={country_wfb_name_native_fr} style={{ fontSize: 'x-large', borderTop: '1px solid white' }} />
              }
            </Box>
            <Box className='px-4'>
              {country_wfb_name_native &&
                <ReadMore text={country_wfb_name_native} style={{ fontSize: 'large', }} />
              }
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
              {country_wfb_capital_name_fr &&
                <ReadMore text={country_wfb_capital_name_fr} style={{ fontSize: 'large', borderTop: '1px solid white' }} />
              }
            </Box>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Etymologie
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_capital_etymology_fr &&
                <ReadMore text={country_wfb_capital_etymology_fr} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
          </Box>
          <Box className={`ml-2 px-2`}
            sx={{ width: '100%', gridArea: 'cy_blocA3', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Adjectif
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_nationality_adjective_fr &&
                <ReadMore text={country_wfb_nationality_adjective_fr} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Ethnies
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_ethnic_groups_fr &&
                <ReadMore text={country_wfb_ethnic_groups_fr} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Religions
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_religions_fr &&
                <ReadMore text={country_wfb_religions_fr} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
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
              {wfb_facts.Population &&
                <ReadMore text={wfb_facts.Population} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Superficie
              </Typography>
            </Box>
            <Box className='px-4'>
              {wfb_facts.Area.total &&
                <ReadMore text={wfb_facts.Area.total} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Localisation
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_location_fr &&
                <ReadMore text={country_wfb_location_fr} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
          </Box>
          <Box className={`mr-2 px-2`} sx={{ width: '100%', gridArea: 'cy_blocA5', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', border: 1, borderLeft: 0, borderBottom: 0, borderRight: 0, borderColor: 'grey.500', }}>
            <Box className='px-4'>
              <Typography variant="caption" className='text-slate-500'>
                Economie
              </Typography>
            </Box>
            <Box className='px-4'>
              {country_wfb_economic_overview_fr &&
                <ReadMore text={country_wfb_economic_overview_fr} style={{ fontSize: 'medium', borderTop: '1px solid white' }} />
              }
            </Box>
          </Box>
        </Box>
      </section>
    </>
  )
}
