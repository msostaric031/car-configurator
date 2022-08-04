/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SavedConfigurations.styles';

export const SavedConfigurations: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.container__header}>
        <span>View saved configurations</span>
        <Link to="/carselect">
          <button css={styles.config__btn}>Configure a car</button>
        </Link>
      </div>
      <div css={styles.configurations__container}>
        <div css={styles.img}></div>
        <p>
          You haven't configured any cars yet.
          <Link to="/carselect">You may choose to configure some now.</Link>
        </p>
      </div>
    </div>
  );
};
