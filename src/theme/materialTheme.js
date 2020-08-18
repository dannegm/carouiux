import { createMuiTheme } from '@material-ui/core/styles';

const fontFamily =
  '"Bw Nista Geometric DEMO", "Roboto", "Helvetica", "Arial", sans-serif';

const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },

    primary: {
      light: '#646464',
      main: '#202020',
      dark: '#000000',
      contrastText: '#FFFFFF',
    },
    secondary: {
      light: '#F8F7F5',
      main: '#D6D1CD',
      dark: '#B6B0AC',
      contrastText: '#202020',
    },

    error: {
      light: '#E47373',
      main: '#B25235',
      dark: '#D23030',
      contrastText: '#FFFFFF',
    },
    warning: {
      light: '#FFB74D',
      main: '#F58D00',
      dark: '#F57D02',
      contrastText: '#202020',
    },
    info: {
      light: '#E9E5E2',
      main: '#D6D1CD',
      dark: '#B6B0AC',
      contrastText: '#202020',
    },
    success: {
      light: '#DAFA50',
      main: '#DAFA50',
      dark: '#769000',
      contrastText: '#202020',
    },

    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#d5d5d5',
      A200: '#aaaaaa',
      A400: '#303030',
      A700: '#616161',
      grayLighter: '#F7F7F7',
    },

    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    action: {
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      focus: 'rgba(0, 0, 0, 0.12)',
      disable: 'rgba(0,0,0,0.20)',
      light: 'rgba(32,32,32,1)',
      lighten: 'rgba(32,32,32,0.5)',
      background: 'rgba(32,32,32,.10)',
    },
    content: {
      lightWhite: '#FAFBFF',
      dark: '#04070D',
      border: '#D8D6D4',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    textField: {
      light: '#ced4da',
      paper: '#80bdff',
      border: '#D8D6D4',
    },
    card: {
      light: 'rgba(0,0,0,0.2)',
      main: '#ededed',
      lightWhite: '#e5e5e5',
    },
  },
  typography: {
    fontFamily,
    htmlFontSize: 16,
    fontSize: 14,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,

    h1: {
      fontFamily,
      fontWeight: 700,
      fontSize: '5rem',
    },
    h2: {
      fontFamily,
      fontWeight: 200,
      fontSize: '3.75rem',
    },
    h3: {
      fontFamily,
      fontWeight: 400,
      fontSize: '3rem',
    },
    h4: {
      fontFamily,
      fontWeight: 400,
      fontSize: '2.125rem',
    },
    h5: {
      fontFamily,
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h6: {
      fontFamily,
      fontWeight: 600,
      fontSize: '1.25rem',
    },

    subtitle1: {
      fontFamily,
      fontWeight: 400,
      fontSize: '1rem',
    },
    subtitle2: {
      fontFamily,
      fontWeight: 600,
      fontSize: '0.875rem',
    },
    body1: {
      fontFamily,
      fontWeight: 400,
      fontSize: '1rem',
    },
    body2: {
      fontFamily,
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    button: {
      fontFamily,
      fontWeight: 400,
      fontSize: '0.875rem',
    },
    caption: {
      fontFamily,
      fontWeight: 400,
      fontSize: '0.75rem',
    },
    overline: {
      fontFamily,
      fontWeight: 400,
      fontSize: '0.625rem',
    },
  },
});

export default theme;
