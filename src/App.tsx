/** @jsxImportSource @emotion/react */
import { Global } from '@emotion/react';
import styles from 'App.styles';
import { Layout } from 'modules';
import { FirebaseProvider } from 'modules/firebase/components/FirebaseProvider';
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
            <Route index element={<Home />} />
            <Route path="/carselect" element={<CarSelect />} />
            <Route path="/configurator" element={<Configurator />} />
            <Route path="/configurator/exterior" element={<Exterior />} />
            <Route path="/configurator/interior" element={<Interior />} />
            <Route path="/configurator/summary" element={<Summary />} />
          </Route>
        </Routes>
      </FirebaseProvider>
    </BrowserRouter>
  );
}

export default App;
