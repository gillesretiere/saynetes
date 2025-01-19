import React from 'react'
import SmallButton from '../components/UI/SmallButton';
import { Link, } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { man_blue_bg, hmrt_icon, } from '../assets/img/index.js';


const PorfolioMainSection = ({ dynamicStylesTitle, dynamicStylesSubTitle }) => {
  return (
    <>
      <section id="main">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            gridTemplateRows: 'auto',
            gridTemplateAreas: {
              xs:
                `
                "header header header ."
                "leftlink . . rightlink"
                "image image image image"
                `,
              md:
                `
                "header header header ."
                "leftlink . . rightlink"
                "image image image image"
                `,
            },
          }}
        >

          <Box className={`mx-0 p-4`} sx={{ gridArea: 'header', height: '30vh' }}>
            <Box sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              p: 1,
              m: 1,
              bgcolor: 'background.paper',
              maxWidth: 300,
              borderRadius: 1,
              alignItems: 'center',
            }}>
              <img src={hmrt_icon} className='mr-4'></img>
              <Typography className={`font-articulat_cf leading-none tracking-tight font-semibold lg:text-2xl text-slate-800`}>
                  Hammer &amp; Marteau
                </Typography>
            </Box>

            <div className={`xs:break-normal`}>
              <Typography className={`font-articulat_cf font-normal leading-none tracking-tight break-keep`}
                sx={{ ...dynamicStylesTitle }}>
                Design + créativité
              </Typography>
            </div>
            <Typography className={`font-articulat_cf font-normal leading-none tracking-tight`}
              sx={{ ...dynamicStylesSubTitle }}>
              Mise en valeur de vos contenus numériques
            </Typography>
          </Box>
          <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'leftlink', display: 'flex', justifyContent: 'flex-start', height: '5vh' }}>
            <a href='#proj'>
              <SmallButton label="Visite guidée" />
            </a>
          </Box>
          <Box className={`mx-0 mt-3 px-4`} sx={{ gridArea: 'rightlink', display: 'flex', justifyContent: 'flex-end' }}>
            <Link to={{ pathname: `/saynetes_page/` }}>
              <SmallButton label="Saynètes" />
            </Link>
          </Box>
          <Box sx={{ gridArea: 'image', }}>
            <img src={man_blue_bg} width="100%" className='h-full max-h-90 xl:max-h-[640px] object-cover' />
          </Box>
        </Box>
      </section>

    </>
  )
}

export default PorfolioMainSection