/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SavedConfigurations.styles';
import { getDownloadURL, getStorage, ref } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { config } from 'config';

initializeApp(config.firebaseConfig);

const storage = getStorage();

const imgRef = ref(
  storage,
  'gs://car-configurator-117c8.appspot.com/assets/audiRS5/front left-2.png',
);

export const SavedConfigurations: React.FC = () => {
  getDownloadURL(ref(imgRef)).then((url) => {
    const imgPoint = document.getElementById('carImg');
    imgPoint?.setAttribute('src', url);
  });
  console.log(imgRef);
  return (
    <div css={styles.container}>
      <div css={styles.container__header}>
        <span>View saved configurations</span>
        <Link to="/carselect">
          <button css={styles.config__btn}>Configure a car</button>
        </Link>
      </div>
      <div css={styles.configurations__container}>
        <div css={styles.img}>
          <img
            src=""
            alt="Empty container img"
            id="carImg"
            css={styles.car__img}
          />
        </div>

        <p>
          You haven't configured any cars yet.
          <Link to="/carselect">You may choose to configure some now.</Link>
        </p>
      </div>
    </div>
  );
};
