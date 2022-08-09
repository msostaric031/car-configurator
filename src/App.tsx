/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import styles from 'App.styles';
import { config } from 'config';
import { initializeApp } from 'firebase/app';
import { AuthRoute, Layout } from 'modules';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import {
  CarSelect,
  Configurator,
  Exterior,
  Home,
  Interior,
  Login,
  Register,
  Summary,
} from 'views';

initializeApp(config.firebaseConfig);

function App() {
  return (
    <BrowserRouter>
      <Global styles={styles.background} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route path="/carselect" element={<CarSelect />} />
          <Route path="/configurator" element={<Configurator />}>
            <Route path="exterior" element={<Exterior />} />
            <Route path="interior" element={<Interior />} />
            <Route path="summary" element={<Summary />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
