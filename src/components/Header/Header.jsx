import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const loginButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle Login dropdown menu
  const toggleLoginMenu = () => setIsLoginMenuOpen(!isLoginMenuOpen);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('mode', 'light');
    }
  };

  // Toggle Hamburger Menu
  const toggleHamburgerMenu = () => setIsHamburgerOpen(!isHamburgerOpen);

  // Close menus when clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        loginButtonRef.current &&
        !loginButtonRef.current.contains(e.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsLoginMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Load dark mode preference from localStorage on component mount
  useEffect(() => {
    if (localStorage.getItem('mode') === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <header className={`headerWrapper ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logoWrapper">
        <h1 className="logoText">NestMatch</h1>
      </div>

      <nav className={`navWrapper ${isHamburgerOpen ? 'active' : ''}`}>
        <ul className="navList">
          <li className="navItem">
            <Link to="/" className="navLink">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink">
              About
            </Link>
          </li>
          <li className="navItem loginDropdown">
            <button
              className="navLink"
              onClick={toggleLoginMenu}
              ref={loginButtonRef}
              aria-expanded={isLoginMenuOpen}
              aria-label="Toggle login menu"
            >
              Login
            </button>
            {isLoginMenuOpen && (
              <div className="dropdownMenu" ref={dropdownRef}>
                <Link to="/login/PGOwnerLogin" className="dropdownItem">
                  PG Owner
                </Link>
                <Link to="/login/PGSearcherLogin" className="dropdownItem">
                  PG Searcher
                </Link>
              </div>
            )}
          </li>
          <li className="navItem">
            <div className="toggleWrapper">
              <button
                className="toggleButton"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
              >
                <i
                  className={`fas ${
                    isDarkMode ? 'fa-sun' : 'fa-moon'
                  } toggleIcon`}
                ></i>
              </button>
            </div>
          </li>
        </ul>
      </nav>

      <button
        className="hamburger"
        onClick={toggleHamburgerMenu}
        aria-expanded={isHamburgerOpen}
        aria-label="Toggle navigation menu"
      >
        &#9776; {/* Hamburger icon */}
      </button>
    </header>
  );
};

export default Header;
