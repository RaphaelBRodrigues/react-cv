import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from '@Styles/theme';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
