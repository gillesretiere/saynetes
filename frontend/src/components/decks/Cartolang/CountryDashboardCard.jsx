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

    const drawerWidth = 240;
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
            <Box>
                <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="home"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {
                                    xs: "block",
                                    /* md: "none", hidden if device >= md */
                                }
                            }}
                        >
                            <HomeIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Cartolang
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    sx={{
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { boxSizing: 'border-box' },
                    }}
                >
                    <Toolbar />
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            {deck && deck.map(
                                (el, index) => {
                                    return (
                                        <span key={el.country_name_fr} id={index} onClick={handleClick}>

                                            <ListItem key={`${el.country_name_fr}`} disablePadding>
                                                <ListItemButton>
                                                    <ListItemIcon>
                                                        <img src={el.country_national_flag} className='pr-1 max-w-[32px] md:max-w-[32px] object-cover' />
                                                    </ListItemIcon>
                                                    <ListItemText primary={`${el.country_name_fr}`} />
                                                </ListItemButton>
                                            </ListItem>
                                        </span>

                                    )
                                }
                            )}
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
                <Box
                    className='min-h-screen'
                    sx={{
                        display: 'grid',
                        flexGrow: 1,
                        gridTemplateColumns: 'repeat(5, 1fr)',
                        gap: 1,
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        gridTemplateRows: 'auto',
                        gridTemplateAreas: {
                            xs:
                                `
                    ". . . . cflag"
                    ". . . . cname"
                    ". . . . fact1"
                    ". . . . fact2"
                    ". . . . fact3"
                    ". . . . fact4"
                    ". . . . lfreq"
                    ". . . . cwmap"
                    ". . . . ratio"
                    `,
                            lg:
                                `
                    ". cflag cname cname cname"
                    ". fact1 fact1 cwmap cwmap"
                    ". . . fact2 fact2"
                    ". fact3 fact3 fact4 fact4"
                    ". lfreq lfreq lfreq lfreq"
                    ". ratio ratio ratio ratio"
                    `,
                        },
                    }}>

                    <Box className={`mt-20 p-4`} sx={{ gridArea: 'cflag', }}>
                        <img src={card.country_national_flag} className='pr-1 w-64 max-w-[80px] md:max-w-[180px] object-fit' />
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'cwmap',}}>
                        <div className="card-item" sx={{ height: '50vh' }}>
                            <CountryMapCard sx={{ height: '100%' }} country={card} setUpdatedCountry={setUpdatedCountry}></CountryMapCard>
                        </div>
                    </Box>
                    <Box className={`mt-20 mx-0 p-4`} sx={{ gridArea: 'cname', }}>
                        <Typography className={`font-articulat_cf font-bold text:2xl md:text-4xl xl:text-6xl leading-none tracking-tight`}>
                            {card.country_name_fr}
                        </Typography>
                        <Typography className={`font-articulat_cf font-thin text:2xl md:text-4xl xl:text-6xl leading-none tracking-tight`}>
                            {card.country_name_en}
                        </Typography>
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'fact1', }}>
                        <Typography className={`font-ff_nexus_mix font-normal`}>
                            <Paper className={`mx-0 p-4`} elevation={3}>
                                {card.country_summary}
                            </Paper>
                        </Typography>
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'fact2', }}>
                        <Typography className={`font-ff_nexus_mix font-normal`}>
                            <Paper className={`mx-0 p-4`} elevation={3}>
                                {card.country_languages_summary}
                            </Paper>
                        </Typography>
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'fact3', }}>
                        <Typography className={`font-ff_nexus_mix font-normal`}>
                            <Paper className={`mx-0 p-4`} elevation={3}>
                                {card.wfb_facts.Land_boundaries.border_countries}
                            </Paper>
                        </Typography>
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'fact4', }}>
                        <Typography className={`font-ff_nexus_mix font-normal`}>
                            <Paper className={`mx-0 p-4`} elevation={3}>
                                {card.wfb_facts.Country_name.etymology}
                            </Paper>
                        </Typography>
                    </Box>
                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'lfreq', }}>
                        <Typography className={`font-ff_nexus_mix font-normal`}>
                            <Paper className={`mx-0 p-4`} elevation={3}>
                                {card.wfb_facts.Country_name.etymology}
                            </Paper>
                        </Typography>
                    </Box>

                    <Box className={`mx-0 p-4`} sx={{ gridArea: 'ratio', }}>
                        <Typography className={`font-ff_nexus_mix font-normal`}>
                            <Paper className={`mx-0 p-4`} elevation={3}>
                                {card.wfb_facts.Country_name.etymology}
                            </Paper>
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default CountryDashboardCard