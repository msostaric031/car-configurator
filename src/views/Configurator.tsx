import { ImgSlider } from 'modules';
import React from 'react';
import { Outlet } from 'react-router';

export const Configurator: React.FC = () => {
  return (
    <div>
      Configurator
      <ImgSlider />
      <Outlet />
    </div>
  );
};
