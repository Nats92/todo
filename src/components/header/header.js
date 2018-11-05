import React from 'react';

import './header.css';

const Header = ( {toDo, done} ) => {
  return (
    <header className="main-header">
      <h1 className="header-title">ToDo List</h1>
      <p className="status-panel">{toDo} more to do, {done} done</p>
    </header>
  );
};

export default Header;