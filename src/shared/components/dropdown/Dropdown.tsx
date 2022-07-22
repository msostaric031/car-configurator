import React from 'react';
import './Dropdown.css';

export const Dropdown: React.FC = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">--------</button>
        <div className="dropdown-content">
          <a href="#">My saved configurations</a>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};
