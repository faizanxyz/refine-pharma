import { createTheme, Theme } from '@mui/material/styles';


const theme: Theme = createTheme({
  typography: {
    fontFamily: 'OpenSans',
    fontSize: 16,
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem',
    },
  },
  components: {
    MuiCssBaseline: {
      
    },
  },
});

export default theme;
