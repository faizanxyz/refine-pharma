
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './Theme/theme';


ReactDOM.render(
  <ThemeProvider theme={theme}>
     <CssBaseline /> 
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
