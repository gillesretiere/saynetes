import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { man_blue_bg, hmrt_icon, logo_600x600_NB_SVG, } from '../../assets/img/index.js';

const Footer = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        p: 1,
        m: 1,
        maxHeight: 100,
        alignItems: 'center',
      }}>
        <img src={logo_600x600_NB_SVG} className='mr-4 w-12'></img>
        <Typography className={`font-articulat_cf leading-none tracking-tight font-semibold text-xs text-slate-500`}>
          <a href="https://www.hammer-marteau.com/" target="_blank">Conception du site et graphisme &copy; Hammer &amp; Marteau 2026</a>
        </Typography>
      </Box>
    </>
  )
}

export default Footer