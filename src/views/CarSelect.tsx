/** @jsxImportSource @emotion/react */
import { CarOptions } from 'modules';
import React from 'react';
import styles from './styles/CarSelect.styles';

export const CarSelect: React.FC = () => {
  return (
    <div css={styles.container}>
      <CarOptions />
    </div>
  );
};
