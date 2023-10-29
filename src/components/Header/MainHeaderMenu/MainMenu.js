import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../../Header/Header.css';

const MainMenu = () => {
  return (
    <div className="main-menu">
      <nav>
        <Link className="active" to="/">Home</Link>
        <Link to="/services">Services</Link>
        <Link to="/news">News</Link>
        <Link to="/contacts">Contacts</Link>
      </nav>
    </div>
  );
}

export default MainMenu;
