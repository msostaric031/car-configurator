/** @jsxImportSource @emotion/react */

import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'shared';
import {
  CarSelect,
  Configurator,
  Exterior,
  Home,
  Interior,
  Summary,
} from 'views';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
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
