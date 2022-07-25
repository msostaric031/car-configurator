import React from 'react';
import { Link } from 'react-router-dom';
import './Dropdown.css';

export const Dropdown: React.FC = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">--------</button>
        <div className="dropdown-content">
          <Link to="/">
            <a href="#">My saved configurations</a>
          </Link>
          <a href="#">Logout</a>
        </div>
      </div>
    </div>
  );
};
