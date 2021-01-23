import React from 'react';
import * as S from './styled';
import ReactIcon from '@Assets/icons/react';
import styles from '@Styles/global.module.css';

const Logo = () => {
  return (
    <S.Icon>
      <span>R</span>
      <ReactIcon className={`${styles.infiniteRotate}`} fill={'#fff'} />
      <span>R</span>
    </S.Icon>
  );
};

export default Logo;
