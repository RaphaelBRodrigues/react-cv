import React from 'react';
import * as S from './styled';
import { IHeader } from './interfaces';
import Linkedin from '@Assets/icons/linkedin';
import Github from '@Assets/icons/github';
import Logo from '@Components/Logo';
import styles from '@Styles/global.module.css';

const Header: React.FC<IHeader> = () => {
  return (
    <S.Header>
      <S.LogoWrapper>
        <a>
          <Logo />
        </a>
      </S.LogoWrapper>
      <S.LinksList>
        <S.LinkItem>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/raphael-b-rodrigues-08b02889/"
            title="Linkedin icon"
          >
            <Linkedin className={styles.headericon} />
          </a>
        </S.LinkItem>
        <S.LinkItem>
          <a
            target="_blank"
            href="https://github.com/raphaelbrodrigues"
            title="Github icon"
          >
            <Github className={styles.headericon} />
          </a>
        </S.LinkItem>
      </S.LinksList>
    </S.Header>
  );
};

export default Header;
