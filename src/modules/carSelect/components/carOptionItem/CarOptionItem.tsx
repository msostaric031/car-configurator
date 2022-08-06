/** @jsxImportSource @emotion/react */
import { getDownloadURL, ref } from 'firebase/storage';
import { CarOptionProps } from 'modules/carSelect/types';
import React from 'react';
import styles from './CarOptionItem.styles';

export const CarOptionItem: React.FC<CarOptionProps> = ({
  id,
  img,
  year,
  carName,
}) => {
  getDownloadURL(ref(img)).then((url) => {
    const imgPoint = document.getElementById(id);
    imgPoint?.setAttribute('src', url);
  });
  return (
    <div css={styles.container}>
      <img src="" alt="Car picture" id={id} css={styles.option__img} />
      <p>{year}</p>
      <h1>{carName}</h1>
      <button css={styles.config__btn}>Configure now</button>
    </div>
  );
};
