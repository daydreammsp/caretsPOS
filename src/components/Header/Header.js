import React from 'react';
import MainMenu from '../MainMenu/MainMenu'
const Header = ({ title }) => (
  <div className="instructions">
    <div>
      <h1 className="lead">Caret^S</h1>
      <MainMenu/>
    </div>
  </div>
);

export default Header;
