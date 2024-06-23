import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) {
        header.classList.add("scroll-header");
      } else {
        header.classList.remove("scroll-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className='nav__logo'>AJAY PAUL SHINE</a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-home-alt nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-file nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualification" onClick={() => setActiveNav('#qualification')} className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-briefcase-alt-2 nav__icon"></i>Qualification
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? "nav__link active-link" : "nav__link"}>
                <i className="bx bx-image nav__icon"></i>Projects
              </a>
            </li>
          </ul>
          <i className='bx bx-x nav__close' onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="bx bx-category"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
