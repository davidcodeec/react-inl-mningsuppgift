import React from 'react'
import '../../Header/Header.css';

const MainMenu = () => {
  return (
    <div className="main-menu">
    <nav>
      <a className="active" href="index.html">Home</a>
      <a href="services.html">Services</a>
      <a href="news.html">News</a>
      <a href="contact.html">Contacts</a>
    </nav>

  </div>
  )
}

export default MainMenu