/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import styles from 'App.styles';
import { AuthRoute, FirebaseProvider, Layout } from 'modules';
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

function App() {
  return (
    <BrowserRouter>
      <FirebaseProvider>
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
            <Route
              path="/configurator"
              element={
                <AuthRoute>
                  <Configurator />
                </AuthRoute>
              }
            />
            <Route
              path="/configurator/exterior"
              element={
                <AuthRoute>
                  <Exterior />
                </AuthRoute>
              }
            />
            <Route
              path="/configurator/interior"
              element={
                <AuthRoute>
                  <Interior />
                </AuthRoute>
              }
            />
            <Route
              path="/configurator/summary"
              element={
                <AuthRoute>
                  <Summary />
                </AuthRoute>
              }
            />
          </Route>
        </Routes>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
