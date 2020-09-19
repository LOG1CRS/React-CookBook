import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43a047',
      // main: '#7a0000',
    },
    secondary: {
      main: '#fff',
    },
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif',
    h1: {
      fontFamily: 'Rubik, sans-serif',
    },
    h2: {
      fontFamily: 'Heebo, sans-serif',
    },
    h3: {
      fontFamily: 'Kanit, sans-serif',
    },
    body1: {
      fontFamily: 'Nunito Sans, sans-serif',
    },
    button: {
      fontFamily: 'Rubik, sans-serif',
    },
  },
});

export default theme;
