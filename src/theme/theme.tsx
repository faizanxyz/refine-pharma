import { createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Inter', 
    fontSize: 13, 
    h1: {
      fontSize: '2.5rem', 
    },
    h2: {
      fontSize: '2rem',
    },
    h3: {
      fontSize: '1.75rem', 
    },
    h4: {
      fontSize: '18px',
    },
    h5:{
      fontSize:'14px'
    }
    
  },
  components: {
    
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Inter'), local('Inter-Regular'), url(/fonts/Inter-Regular.ttf) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

export default theme;