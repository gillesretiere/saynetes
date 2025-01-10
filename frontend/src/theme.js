import { red } from '@mui/material/colors';
import { createTheme, alpha, getContrastRatio } from '@mui/material/styles';

/* A custom theme for this app
https://mui.com/material-ui/customization/color/
https://m2.material.io/design/color/the-color-system.html#color-theme-creation
https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors

*/

const violetBase = '#7F00FF';
const violetMain = alpha(violetBase, 0.7);

const greyBase = '#0D0D0D';
const greyMain = alpha(greyBase, 0.7);

const orangeBase = '#F44336';
const orangeMain = alpha(orangeBase, 0.9);


const theme = createTheme({
    colorSchemes: {
        dark: true,
    },
    palette: {
        mode:'light',
        primary: {
            /* f44336 */
            main: '#f44336',
            light: '#ef9a9a',
            dark: '#c62828',
            contrastText: '#fff',
        },
        secondary: {
            /* 00D2E9 */
            main: '#00D2E9',
            light: '#abecf5',
            dark: '#00aecb',
            contrastText: '#00626a',
        },
        analogous: {
            main: '#f4a236',
            light: '#fdf2e1',
            dark: '#ed8720',
            contrastText: '#d65116',
        },
        error: {
            main: red.A400,
        },
        triadic: {
            main: '#e7f436',
            light: '#fdfee8',
            dark: '#b6b21d',
            complementary: '#36f443',
        },

        white: {
            main: '#ffffff',
            contrastText: '#111',
        },

        dark: {
            main: '#404040',
        },

        lightgrey: {
            main: alpha(greyBase, 0.3),
            light: alpha(greyBase, 0.5),
            dark: alpha(greyBase, 0.9),
            contrastText: getContrastRatio(greyMain, '#fff') > 4.5 ? '#fff' : '#111',
        },

        grey: {
            main: greyMain,
            light: alpha(greyBase, 0.5),
            dark: alpha(greyBase, 0.9),
            contrastText: getContrastRatio(greyMain, '#fff') > 4.5 ? '#fff' : '#111',
        },

        violet: {
            main: violetMain,
            light: alpha(violetBase, 0.5),
            dark: alpha(violetBase, 0.9),
            contrastText: getContrastRatio(violetMain, '#fff') > 4.5 ? '#fff' : '#111',
        },


        orange: {
            main: orangeMain,
            light: alpha(orangeBase, 0.5),
            dark: alpha(orangeBase, 0.9),
            contrastText: getContrastRatio(orangeMain, '#fff') > 4.5 ? '#fff' : '#111',
        },

        blue_primary: {
            main: '#96C2DB',
        },
        blue_secondary: {
            main: '#E5EDF1',
        },
        blue_tertiary: {
            main: '#6d9ab3',
        },
    },

    typography: {
        primary: {
            fontFamily: 'articulat-cf',
            fontWeigthLigth: 400,
            fontWeigthRegular: 500,
            fontWeigthMedium: 600,
            fontWeigthBold: 700,
        },
        secondary: {
            fontFamily: 'artifex-cf',
            fontWeigthLigth: 400,
            fontWeigthRegular: 500,
            fontWeigthMedium: 600,
            fontWeigthBold: 700,
        },
    },

    /*
        https://stackoverflow.com/questions/39138380/how-to-apply-different-color-in-appbar-title-material-ui
    */

    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    /* backgroundColor: "white",*/
                    color: "#f44336",
                }
            }
        }
    },
    cssVariables: true,

});

export default theme;