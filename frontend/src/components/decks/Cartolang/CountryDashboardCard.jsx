import React, { useContext, useState, useEffect, } from 'react';
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

const CountryDashboardCard = ({ deck, card, callBackFunction, }) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);
    const [country, setCountry] = useState([])
    const [CountryName, setCountryName] = useState('')
    const [isPending, setIsPending] = useState(true)
    const [page, setPage] = useState(1)
    const [uid, setUid] = useState('')
    const [data, setdata] = useState();

    const setUpdatedCountry = (updatedCountry) => {
        callBackFunction(updatedCountry);
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
                    `,
                    },
                }}>
                <Box className={`mx-0 p-0`} sx={{ gridArea: 'cwmap', }}>
                    <div className="card-item" sx={{ height: '50vh' }}>
                        <CountryMapCard sx={{ height: '100%' }} country={card} setUpdatedCountry={setUpdatedCountry}></CountryMapCard>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default CountryDashboardCard