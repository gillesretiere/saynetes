import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';

import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { saynetes_sections, } from "../assets/localData/data.js";
import { cartolang_ru, } from '../assets/img/index.js';



const PorfolioCartolangSection = ({ dynamicStylesTitle }) => {
  const mq_xs = useMediaQuery('(min-width:0px)');
  const mq_sm = useMediaQuery('(min-width:600px)');
  const mq_md = useMediaQuery('(min-width:900px)');
  const mq_lg = useMediaQuery('(min-width:1200px)');
  const mq_xl = useMediaQuery('(min-width:1536px)');
  return (
    <>
      <section id="cartolang" className='min-h-screen max-container'>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: {
              xs:
                `
                                    "titr titr titr titr"
                                    "llnk . . rlnk"
                                    "imag imag imag imag"
                                    ". desc desc desc"
                                    ". comp comp comp"
                            `,
              sm:
                `
                                    "titr titr titr titr"
                                    "llnk . . rlnk"
                                    "imag imag desc desc"
                                    "imag imag comp comp"
                            `,
              lg:
                `
                            "titr titr titr titr"
                            "llnk . . rlnk"
                            "imag desc comp comp"
                            `,
            },

          }}
        >
          <Box className={`mx-0 p-4`} sx={{ gridArea: 'titr', height: '30vh', }}>
            <Typography
              sx={{ ...dynamicStylesTitle }}
              className={`font-articulat_cf font-thin`}>
              Cartolang
            </Typography>
          </Box>
          <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'llnk', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
            <a href="#cardsyst">
              <SmallButton label="Visite guidée" />
            </a>
          </Box>
          <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rlnk', display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={{ pathname: `cartolang` }}>
              <SmallButton label="Découvrir Cartolang" />
            </Link>
          </Box>
          <Box className={`bg-slate-100`} sx={{ gridArea: 'imag', width: '100%', display: 'flex', justifyContent: "center" }}>
            <img src={cartolang_ru} className='h-full max-h-64 xl:max-h-[360px] object-cover ' />
          </Box>
          <Box className={`mx-10 p-4`} sx={{ gridArea: 'desc', }}>
            <Typography className={`font-articulat_cf text-lg md:text-xl xl:text-2xl font-thin text-primary-orange leading-none tracking-wide uppercase text-nowrap`}>
              Description du projet
            </Typography>
            <Typography className={`font-articulat_cf text-xl md:text2-xl xl:text-4xl font-black leading-tight tracking-normal`}>
              Explorer les langues parlées dans chaque pays
            </Typography>
          </Box>
          <Box className={`mx-10 p-4`} sx={{ gridArea: 'comp', }}>
            <Typography component="div" className={`font-articulat_cf text-sm md:text-lg xl:text-2xl font-normal leading-none tracking-normal`}>
              <Typography variant="body1" className='py-2'>
                Cartolang est une application qui permet sélectionner des pays et de connaitre quelles lagues sont parlées, avec le pourcentage de représentation.
              </Typography>
              <Typography variant="body1" className='py-2'>
                L'application est riche en informations géograhique, historique, culturelle et linguistique.
              </Typography>
              <Typography variant="body1" className='py-2'>
                Cette application permet ainsi d'identifier la langue parlée par un interlocuteur non francophone.
              </Typography>
            </Typography>
          </Box>
        </Box>
      </section>

    </>
  )
}

export default PorfolioCartolangSection