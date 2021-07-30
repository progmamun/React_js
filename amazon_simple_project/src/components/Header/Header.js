import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;