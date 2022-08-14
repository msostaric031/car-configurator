/** @jsxImportSource @emotion/react */
import { CarList } from 'modules/carSelect/const';
import React from 'react';
import { CarOptionItem } from '../carOptionItem';
import styles from './CarOptions.styles';

export const CarOptions: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.container__header}>
        <h2>Configure a car</h2>
        <p>Pick your favourite model and start configuring</p>
      </div>
      <div css={styles.options__wrapper}>
        {CarList.map(({ img, year, carName, id }) => {
          return (
            <CarOptionItem
              id={id}
              key={carName}
              img={img}
              year={year}
              carName={carName}
            />
          );
        })}
      </div>
    </div>
  );
};
