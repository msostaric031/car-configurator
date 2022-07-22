/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import styles from 'App.styles';
import React from 'react';
import { Home } from 'views';

function App() {
  return (
    <div>
      <Home />
      <Global styles={styles.global} />
    </div>
  );
}

export default App;
