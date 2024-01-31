
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
<<<<<<< Updated upstream

=======
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Stashed changes

ReactDOM.render(
  <ThemeProvider theme={theme}>
     <CssBaseline /> 
   <BrowserRouter >
    <App />
</BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);
