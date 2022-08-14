/** @jsxImportSource @emotion/react */
import { getDownloadURL, ref } from 'firebase/storage';
import React from 'react';

import styles from './ImgSliderItem.styles';
import { SliderImageProps } from './types';

export const ImgSliderItem: React.FC<SliderImageProps> = ({ id, img }) => {
  getDownloadURL(ref(img)).then((url) => {
    const imgPoint = document.getElementById(id);
    imgPoint?.setAttribute('src', url);
  });
  return (
    <div>
      <img src="" alt="Car picture" id={id} css={styles.slider__img}></img>
    </div>
  );
};
