import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import App from './components/App/App';

import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: '', // auto-gen from main if blank
      main: '#2E7D32',
      // dark: '', // auto-gen from main if blank
      // contrastText: '#fff',
    },
    secondary: {
      // light: '#598e89', // auto-gen from main if blank
      main: '#FB8C00',
      // dark: '#99d5cf', // auto-gen from main if blank
      // contrastText: '#000',
    },
    success: {
      // light: '#598e89', // auto-gen from main if blank
      main: '#29B6F6',
      // dark: '#99d5cf', // auto-gen from main if blank
      // contrastText: '#000',
    },
    info: {
      // light: '#598e89', // auto-gen from main if blank
      main: '#80cbc4',
      // dark: '#99d5cf', // auto-gen from main if blank
      // contrastText: '#000',
    },
    warning: {
      // light: '#598e89', // auto-gen from main if blank
      main: '#F4511E',
      // dark: '#99d5cf', // auto-gen from main if blank
      // contrastText: '#000',
    },
    error: {
      // light: '#598e89', // auto-gen from main if blank
      main: '#E53935',
      // dark: '#99d5cf', // auto-gen from main if blank
      // contrastText: '#000',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('react-root'),
);
