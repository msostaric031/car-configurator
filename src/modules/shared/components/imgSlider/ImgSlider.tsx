/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { SliderImages } from './const';
import styles from './ImgSlider.styles';
import { ImgSliderItem } from './ImgSliderItem';

export const ImgSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);
  return (
    <div css={styles.slider__container}>
      <div css={styles.img__container}>
        {SliderImages.map(({ id, img }) => {
          return <ImgSliderItem id={id} img={img} key={id} />;
        })}

        {/* {SliderImages.map(({ id, img }, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
              <ImgSliderItem id={id} img={img} key={id} />
            )}
          </div>
        );
      })} */}
      </div>
      <div>
        <button onClick={prevSlide}>{'<'}</button>
        <button onClick={nextSlide}>{'>'}</button>
      </div>
    </div>
  );
};
