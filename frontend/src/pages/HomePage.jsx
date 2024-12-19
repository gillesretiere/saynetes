import React from 'react';
import { Link } from "react-router-dom";
import CustomButton from '../components/UI/CustomButton';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Layout from '../components/UI/Layout';
import classes from "./Pages.module.css";
// import Demo from '../components/Demo';
import { hmrt_logo_squared } from '../assets/img/index.js';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
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
    return (
        <>
            <Layout>
                <Grid container maxWidth="1" spacing={2} columns={{ xs: 8, sm: 8, md: 16 }} size="grow" alignItems="center">
                    <Grid minHeight='100%' size={8}>
                        <Grid display="flex" justifyContent="center" size="grow">
                            <img className={`flex pt-12 w-full max-w-md mb-3 p-1 ${classes.landing_page}`} src={hmrt_logo_squared} loading="lazy"></img>
                        </Grid>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                            <Typography className={`font-artifex_cf mb-3 ${classes.welcome}`}>
                                Welcome
                            </Typography>
                            <Link to={{ pathname: `/language_page/` }}>
                                <CustomButton label="Languages" />
                            </Link>
                            <Link to={{ pathname: `/landing_page/` }}>
                                <CustomButton label="HMRT" />
                            </Link>
                        </Grid>

                    </Grid>
                </Grid>
            </Layout>


        </>
    )
}

export default HomePage