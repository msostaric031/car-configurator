import React from 'react';
import { Outlet } from 'react-router';
import { Header } from '../header';

export const Layout: React.FC = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
