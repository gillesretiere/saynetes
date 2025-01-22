import React, { useContext, useState, useEffect, } from 'react';
import { useParams } from "react-router-dom"

import Layout from '../../UI/Layout.jsx';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import IconButton from "@mui/material/IconButton";
import Paper from '@mui/material/Paper';

import CountryMapCard from './CountryMapCard.jsx';

import { Box } from '@mui/material';
import classes from './card.module.css';

const CountryDashboardCard = ({ deck, card, callBackFunction, callBackFunctionMapEvent, }) => {
    let { id } = useParams()

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [country, setCountry] = useState([])
    const [CountryName, setCountryName] = useState('')
    const [isPending, setIsPending] = useState(true)
    const [page, setPage] = useState(1)
    const [uid, setUid] = useState('')
    const [data, setdata] = useState();

    const setUpdatedCountry = (updatedCountry) => {
        {/*
        setUid(updatedCountry);
        id = updatedCountry;
        console.log(updatedCountry);
        */}
        callBackFunctionMapEvent(updatedCountry);
    }

    const handleClick = (event) => {
        callBackFunction(event.currentTarget.id);
    };

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    return (
        <>
            <Box
                className='min-h-screen'
                sx={{
                    display: 'grid',
                    flexGrow: 1,
                    gridTemplateColumns: 'repeat(6, 1fr)',
                    gap: 1,
                    width: 1,
                    gridTemplateRows: 'auto',
                    gridTemplateAreas: {
                        xs:
                            `
                    "cwmap cwmap cwmap cwmap cwmap cwmap"
                    "ctynf ctynf . . . ."
                    "ctynn ctynn . . . ."
                    `,
                    },
                }}>
                <Box className={`mx-0 p-0`} sx={{ gridArea: 'cwmap',  }}>
                    <div>
                        <CountryMapCard sx={{ height: '400px' }} country={card} setUpdatedCountry={setUpdatedCountry}></CountryMapCard>
                    </div>
                </Box>
                <Box className={`mx-4 p-0`} sx={{ gridArea: 'ctynf',  }}>
                    <Typography gutterBottom variant="h5" className='font-articulat_cf text-4xl font-semibold leading-none tracking-tight'>
                        {card.country_name_fr}
                    </Typography>
                </Box>
                <Box className={`mx-4 p-0`} sx={{ gridArea: 'ctynn', }}>
                    <Typography gutterBottom variant="h5" className='font-articulat_cf text-4xl font-semibold leading-none tracking-tight'>
                        {card.country_name_native}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default CountryDashboardCard