import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { man_blue_bg, hmrt_icon, } from '../../assets/img/index.js';

const Footer = () => {
  return (
    <>
      <Box sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        p: 1,
        m: 1,
        bgcolor: 'background.paper',
        maxHeight: 100,
        alignItems: 'center',
      }}>
        <img src={hmrt_icon} className='mr-4 w-4'></img>
        <Typography className={`font-articulat_cf leading-none tracking-tight font-semibold text-xs text-slate-500`}>
          Conception du site et graphisme &copy; Hammer &amp; Marteau 2025
        </Typography>
      </Box>
    </>
  )
}

export default Footer