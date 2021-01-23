import React from 'react';
import { Provider } from 'react-redux';
import Header from './containers/Header';
import { Home } from '@Pages';
import store from './store';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Home />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
