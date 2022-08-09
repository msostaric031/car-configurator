/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from '../dropdown';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <header css={styles.header}>
      <Link to="/" css={styles.header__link}>
        <a css={styles.header__logo}>P</a>
      </Link>
      <div css={styles.header__right}>
        <Link to="/carselect">
          <button css={styles.header__btn}>Configure a car</button>
        </Link>

        <Dropdown />
      </div>
    </header>
  );
};
