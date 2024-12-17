import React from 'react';
import { Link } from "react-router-dom";
import CustomButton from '../components/UI/CustomButton';
import HomeAppBar from '../components/UI/Navigation/HomeAppBar';
import classes from "./Pages.module.css";
import Demo from '../components/Demo';

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
            <Demo>

            </Demo>
            <HomeAppBar />
                <div className={`${classes.bg}`}>
                    <h1>Home Page</h1>
                    <Link to={{ pathname: `/language_page/` }}>
                    <CustomButton label="Go"/>
                    </Link>
                </div>
        </>
    )
}

export default HomePage