import { ImgSlider } from 'modules';
import React from 'react';
import { Outlet } from 'react-router';

export const Configurator: React.FC = () => {
  return (
    <div>
      <h1>Configurator</h1>
      <ImgSlider />
      <Outlet />
    </div>
  );
};
