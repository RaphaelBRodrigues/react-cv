import React from 'react';
import { Provider } from 'react-redux';
import Footer from '@Containers/Footer';
import Header from '@Containers/Header';
import Home from '@Pages/Home/components/MainContent';
import store from './store';
import { ThemeProvider } from 'styled-components';
import theme from '@Styles/theme';
import styles from '@Styles/global.module.css';
import * as S from './styled';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div className={styles.App}>
          <Header />
          <S.ContentWrapper>
            <Home />
          </S.ContentWrapper>
          <Footer />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
