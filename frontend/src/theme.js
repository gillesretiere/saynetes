import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    cssVariables: true, // Génère les variables CSS MUI automatiquement
    palette: {
        primary: {
            main: 'rgb(244, 67, 54)', // Valeur par défaut
        },
        // On lie les couleurs MUI aux variables CSS de index.css
        orange: {
            main: 'rgb(var(--color-orange))',
        },
        secondary: {
            main: 'rgb(var(--color-secondary))',
        },
    },
    typography: {
        fontFamily: 'articulat-cf, sans-serif',
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    color: 'rgb(var(--color-primary))',
                }
            }
        }
    }
});

export default theme;