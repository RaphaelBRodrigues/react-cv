import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '@Containers/Footer';
import Header from '@Containers/Header';
import Home from '@Pages/Home/components/MainContent';
import styles from '@Styles/global.module.css';
import * as S from './styled';
import Loading from '@Containers/Loading';
import { IUiState } from '@Store/ducks/ui/interfaces';
import { ApplicationStore } from '@Store/interface';

function App() {
  const { globalLoading } = useSelector<ApplicationStore, IUiState>(
    (state) => state.ui,
  );
  return (
    <div className={styles.App}>
      <Header />
      <S.ContentWrapper>
        {globalLoading ? <Loading /> : <Home />}
      </S.ContentWrapper>
      <Footer />
    </div>
  );
}

export default App;
