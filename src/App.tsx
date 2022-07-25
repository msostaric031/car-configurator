/** @jsxImportSource @emotion/react */
import { Route, Routes } from 'react-router';
import { Layout } from 'shared';
import { Home } from 'views';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
