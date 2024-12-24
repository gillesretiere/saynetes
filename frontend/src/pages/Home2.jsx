import React, { useContext, useState, useEffect, } from 'react';
import { Link } from "react-router-dom";
import CustomButton from '../components/UI/CustomButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Layout from '../components/UI/Layout';
import classes from "./Pages.module.css";
// import Demo from '../components/Demo';
import { hmrt_logo_squared } from '../assets/img/index.js';

import { UserContext } from '../store/user_context.jsx';

const styles = theme => ({
    root: {
        backgroundColor: 'blue',
        // Match [md, md + 1)
        //       [md, lg)
        //       [900px, 1200px)
        [theme.breakpoints.only('md')]: {
            backgroundColor: 'red',
        },
    },
});

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const Home2 = () => {

    const [item, setItem] = useState({
        decks: []
    });

    const ctx = useContext(UserContext);
    return (
        <>
            <Layout>
                <Grid container maxWidth="1" spacing={2} columns={{ xs: 4, sm: 4, md: 4 }} size="grow" alignItems="center" >
                    <Grid display="flex" size={3} flexDirection="column" justifyContent="left" alignItems="left" className={`mx-5 pr-10`}>
                        <Typography className={`font-articulat_cf`} variant="h1">
                            Design et créativité pour mettre en valeur vos contenus dans vos projets numériques
                        </Typography>
                    </Grid>
                    <Grid display="flex" size={3} flexDirection="column" justifyContent="left" alignItems="left" className={`mx-5 pr-10`}>
                        <Typography className={`font-articulat_cf`} variant={{lg:"h2", md:"h1"}}>
                            Design et créativité pour mettre en valeur vos contenus dans vos projets numériques
                        </Typography>
                    </Grid>
                    <Grid display="flex" size={1}></Grid>
                    <Grid display="flex" size={4} flexDirection="column" justifyContent="left" alignItems="left" className={`mx-5 pr-10`}>
                        <Link to={{ pathname: `/language_page/` }}>
                            <CustomButton label="Visite guidée" />
                        </Link>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size={4}>
                        <Box sx={{ maxWidth: 345 }}>
                            <img className={`flex`} src={hmrt_logo_squared} loading="lazy"></img>
                        </Box >
                    </Grid>
                    <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ margin: 'auto' }}>
                        <Typography className={`font-artifex_cf`} fontSize={{
                            lg: 30,
                            md: 20,
                            sm: 15,
                            xs: 10
                        }}>
                            Les Sayn&egrave;tes
                        </Typography>
                        <Link to={{ pathname: `/language_page/` }}>
                            <CustomButton label="Démarrer" />
                        </Link>
                    </Grid>

                </Grid>
            </Layout>


        </>
    )
}

export default Home2