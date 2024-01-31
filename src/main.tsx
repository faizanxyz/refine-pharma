
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
  <ThemeProvider theme={theme}>
     <CssBaseline /> 
    <App />
  </ThemeProvider>,
  </QueryClientProvider>,
  document.getElementById('root')
);
