import { createTheme } from '@material-ui/core/styles';

const fontFamily = '"Bw Nista Geometric DEMO", "Helvetica", "Arial", sans-serif';

const theme = createTheme({
    palette: {
        primary: {
            light: '#616161',
            main: '#212121',
            dark: '#171717',
            contrastText: '#FFFFFF',
        },
    },
    typography: {
        fontFamily,
        htmlFontSize: 16,
        fontSize: 14,
    },
});

export default theme;
