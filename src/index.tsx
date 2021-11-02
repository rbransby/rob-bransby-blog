import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "fontsource-cascadia-code";
import { createTheme } from '@mui/material';
import { ThemeProvider, typography } from '@mui/system';

const theme = createTheme({
  palette:{
    primary:
    {
      main:'#A0E5FF',
      light:'#E2E2AC',
      dark:'#4499CE',
      contrastText:'#C586C0'
    },
    background: {
      paper: '#120024'
    },
    text: {
      primary:'#A0E5FF',
      secondary:'#D69B75'
    }    
  },
  typography: {
    fontFamily: '"Cascadia Code", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif'    
  },
  
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
