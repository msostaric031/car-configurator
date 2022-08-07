import { getDownloadURL, ref } from 'firebase/storage';
import React from 'react';
import { SliderImages } from './const';
import styles from './ImgSlider.styles';
import { SliderImageProps } from './types';

export const ImgSlider: React.FC<SliderImageProps> = ({ id, img }) => {
  getDownloadURL(ref(img)).then((url) => {
    const imgPoint = document.getElementById(id);
    imgPoint?.setAttribute('src', url);
  });
  return (
    <div>
      {SliderImages.map(({ id }) => {
        return <img src="" alt="" key={id} css={styles.slider__img}></img>;
      })}
    </div>
  );
};
