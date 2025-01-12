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
//import { hmrt_logo_squared } from '../assets/img/index.js';

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

const HomePage = () => {

    const [item, setItem] = useState({
        decks:[]
    });

    const ctx = useContext (UserContext);
    return (
        <>
            <Layout>
                <Grid container maxWidth="1" spacing={2} columns={{ xs: 4, sm: 4, md: 8 }} size="grow" alignItems="center" >
                    <Grid display="flex" justifyContent="center" alignItems="center" size={4} sx={{bgcolor:'text.primary'}}>

                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography className={`font-artifex_cf mb-3 ${classes.welcome}`}>
                                Les Sayn&egrave;tes
                            </Typography>
                            <Link to={{ pathname: `/language_page/` }}>
                                <CustomButton label="Démarrer" />
                            </Link>
                        </Grid>

                    </Grid>
                </Grid>
            </Layout>


        </>
    )
}

export default HomePage