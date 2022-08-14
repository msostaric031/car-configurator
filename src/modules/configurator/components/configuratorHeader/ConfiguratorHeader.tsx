/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ConfiguratorHeader.styles';

export const ConfiguratorHeader: React.FC = () => {
  return (
    <header css={styles.container}>
      <Link to="/carselect">
        <a>{'<'}</a>
      </Link>

      <div css={styles.header__nav}>
        <Link to="/configurator/exterior">
          <a>Edit configuration</a>
        </Link>

        <a css={styles.delete__config}>Delete</a>
      </div>
    </header>
  );
};
