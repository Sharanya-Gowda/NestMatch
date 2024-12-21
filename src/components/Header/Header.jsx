import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Add state for dark mode
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); // Add state for hamburger menu
  const loginButtonRef = useRef(null);
  const dropdownRef = useRef(null);

  // Toggle Login dropdown menu
  const toggleLoginMenu = () => setIsLoginMenuOpen(!isLoginMenuOpen);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('mode', 'dark'); // Save mode preference to localStorage
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.removeItem('mode'); // Remove mode preference from localStorage
    }
  };

  // Toggle Hamburger Menu
  const toggleHamburgerMenu = () => setIsHamburgerOpen(!isHamburgerOpen);

  // Close login menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginButtonRef.current && !loginButtonRef.current.contains(e.target) &&
          dropdownRef.current && !dropdownRef.current.contains(e.target)) {
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
            <Link to="/" className="navLink">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/about" className="navLink">About</Link>
          </li>
          <li className="navItem loginDropdown">
            <button
              className="navLink"
              onClick={toggleLoginMenu}
              ref={loginButtonRef}
            >
              Login
            </button>
            {isLoginMenuOpen && (
              <div className="dropdownMenu" ref={dropdownRef}>
                <Link to="/login/PGOwnerLogin" className="dropdownItem">PG Owner</Link>
                <Link to="/login/PGSearcherLogin" className="dropdownItem">PG Searcher</Link>
              </div>
            )}
          </li>
          <li className="navItem">
            <button
              className={`modeToggleButton ${isDarkMode ? 'dark-mode' : ''}`}
              onClick={toggleDarkMode}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </li>
        </ul>
      </nav>

      <button className="hamburger" onClick={toggleHamburgerMenu}>
        &#9776; {/* Hamburger icon (3 horizontal lines) */}
      </button>
    </header>
  );
};

export default Header;
