import React from 'react';
import { Outlet } from 'react-router';

export const Configurator: React.FC = () => {
  return (
    <div>
      Configurator
      <Outlet />
    </div>
  );
};
