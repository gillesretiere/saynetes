import React from 'react';
import { Link } from "react-router-dom";
import CustomButton from '../components/UI/CustomButton';
import classes from "./Pages.module.css";
import Demo from '../components/Demo';

import Layout from '../components/UI/Layout';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});

const HomePage = () => {
    return (
        <>
            <Layout>
                <Link to={{ pathname: `/language_page/` }}>
                    <CustomButton label="Languages" />
                </Link>
                <Link to={{ pathname: `/landing_page/` }}>
                    <CustomButton label="HMRT" />
                </Link>
            </Layout>

        </>
    )
}

export default HomePage