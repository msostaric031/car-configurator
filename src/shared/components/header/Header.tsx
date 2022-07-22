/** @jsxImportSource @emotion/react */
import React from 'react';
import { Dropdown } from '../dropdown';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <header css={styles.header}>
      <h1 css={styles.header__span}>P</h1>
      <div css={styles.header__right}>
        <button css={styles.header__btn}>Configure a car</button>
        <Dropdown />
      </div>
    </header>
  );
};
