import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import classes from "./card.module.css";

export const CircularChart = (props) => {
    return (
        <>
            <Box position={'relative'}>
            <CircularProgress
                    variant='determinate'
                    {...props}
                    color='success'
                    sx={{ position: 'absolute', left: 0 }}
                    thickness={5}
                />
                <CircularProgress
                    variant='determinate'
                    value={100}
                    sx={theme => ({ color: theme.palette.grey[300] })}
                    thickness={4}
                />

            </Box>
        </>

    )
}
