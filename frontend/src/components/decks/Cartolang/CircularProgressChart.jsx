import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export const CircularProgressChart = (props) => {
    return (
        <>
            <Box sx={{ position: 'relative', display: 'inline-flex' }}>

                { /* https://stackoverflow.com/questions/71753127/how-can-i-customize-the-mui-circularprogress-bar  */ }
                <CircularProgress
                    variant="determinate"
                    value={100}
                    size={props.size}
                    thickness={4}
                    sx={{
                        color: '#e0e0e0', // Light gray color for uncompleted (remaining) portion
                        position: 'absolute',
                    }}
                />
                <CircularProgress variant="determinate"
                    sx={(theme) => ({
                        color: theme.palette.orange,
                        ...theme.applyStyles('dark', {
                            color: theme.palette.grey[800],
                        }),
                    })}
                    {...props} />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        variant="caption"
                        component="div"
                    >
                        {`${Math.round(props.value)}%`}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
