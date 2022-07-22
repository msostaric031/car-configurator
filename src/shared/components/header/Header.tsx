/** @jsxImportSource @emotion/react */
import React from 'react';
import styles from './Header.styles';

export const Header: React.FC = () => {
  return (
    <header css={styles.header}>
      <span>P</span>
      <button>Configure a car</button>
    </header>
  );
};
