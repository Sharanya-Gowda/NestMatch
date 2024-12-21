import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router's navigation hook
import './Home.css';

import bangaloreIcon from '../../assets/images/Bangalore.png';
import b1 from '../../assets/images/B1.jpg';
import C1 from '../../assets/images/C1.jpg';
import D1 from '../../assets/images/D1.jpg';
import P1 from '../../assets/images/P1.jpg';
import M1 from '../../assets/images/M1.jpg';
import N1 from '../../assets/images/N1.jpg';
import H1 from '../../assets/images/H1.jpg';
import CO1 from '../../assets/images/C01.jpg';

import chennaiIcon from '../../assets/images/Chennai.png';
import delhiIcon from '../../assets/images/Delhi.png';
import puneIcon from '../../assets/images/Pune.png';
import mumbaiIcon from '../../assets/images/Mumbai.png';
import hyderabadIcon from '../../assets/images/Hyderabad.png';
import noidaIcon from '../../assets/images/Noida.png';
import coimbatoreIcon from '../../assets/images/Coimbatore.png';

import logo from '../../assets/images/logo.jpg';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path); // Navigate to the given path
  };

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <header className="welcome-text">
        <h1>Welcome to NestMatch</h1>
        <p>Your perfect match for PG accommodations. Discover safe, affordable, and comfortable PGs today!</p>
      </header>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-text">
          <h1>Your Stay. <span className="highlight">Your Way.</span></h1>
          <p>Make your own food or take a subscription</p>
          <div className="search-bar">
            <input type="text" placeholder="Find a PG near your place of Work/Study" />
            <button>Near Me</button>
          </div>
        </div>
        <img src={logo} alt="Hero Image" className="hero-image logo" />
      </header>

      {/* City Selection Section */}
      <section className="city-selection">
        <h2>Select Your City</h2>
        <div className="city-cards">
          {/* Bangalore City Card */}
          <div className="city-card active" onClick={() => handleNavigate('/bangalore')}>
            <img src={b1} alt="Bangalore" />
            <img className="second-img" src={bangaloreIcon} alt="Bangalore" />
            <p>Bangalore</p>
          </div>
          {/* Chennai City Card */}
          <div className="city-card" onClick={() => handleNavigate('/chennai')}>
            <img src={C1} alt="Chennai" />
            <img className="second-img" src={chennaiIcon} alt="Chennai" />
            <p>Chennai</p>
          </div>
          {/* Pune City Card */}
          <div className="city-card" onClick={() => handleNavigate('/delhi')}>
            <img src={D1} alt="Delhi" />
            <img className="second-img" src={delhiIcon} alt="Delhi" />
            <p>Delhi</p>
          </div>
          {/* Pune City Card */}
          <div className="city-card" onClick={() => handleNavigate('/pune')}>
            <img src={P1} alt="Pune" />
            <img className="second-img" src={puneIcon} alt="Pune" />
            <p>Pune</p>
          </div>
          {/* Mumbai City Card */}
          <div className="city-card" onClick={() => handleNavigate('/mumbai')}>
            <img src={M1} alt="Mumbai" />
            <img className="second-img" src={mumbaiIcon} alt="Mumbai" />
            <p>Mumbai</p>
          </div>
          {/* Hyderabad City Card */}
          <div className="city-card" onClick={() => handleNavigate('/hyderabad')}>
            <img src={H1} alt="Hyderabad" />
            <img className="second-img" src={hyderabadIcon} alt="Hyderabad" />
            <p>Hyderabad</p>
          </div>
          {/* Noida City Card */}
          <div className="city-card" onClick={() => handleNavigate('/noida')}>
            <img src={N1} alt="Noida" />
            <img className="second-img" src={noidaIcon} alt="Noida" />
            <p>Noida</p>
          </div>
          {/* Coimbatore City Card */}
          <div className="city-card" onClick={() => handleNavigate('/coimbatore')}>
            <img src={CO1} alt="Coimbatore" />
            <img className="second-img" src={coimbatoreIcon} alt="Coimbatore" />
            <p>Coimbatore</p>
          </div>
          
          
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <i className="fas fa-bed feature-icon" aria-label="Comfortable Rooms"></i>
          <h3>Comfortable Rooms</h3>
          <p>Stay in PGs that are well-equipped with all your essentials for a comfortable stay.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-map-marker-alt feature-icon" aria-label="Prime Locations"></i>
          <h3>Prime Locations</h3>
          <p>Find PGs located in the heart of the city, close to transport, colleges, and more!</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-dollar-sign feature-icon" aria-label="Affordable Prices"></i>
          <h3>Affordable Prices</h3>
          <p>Choose from a wide range of PGs that suit your budget without compromising on quality.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-star feature-icon" aria-label="Reviews"></i>
          <h3>Reviews</h3>
          <p>See reviews from real customers to make an informed decision.</p>
          <button className="view-button" onClick={() => handleNavigate('/reviewer')}>View</button>
        </div>

        {/* How It Works Section */}
        <div className="feature-card how-it-works-card">
          <h3>How It Works</h3>
          <div className="how-it-works-content">
            <div className="how-it-works-step">
              <div className="step-icon">🔍</div>
              <p>Search for PGs based on your location and preferences.</p>
            </div>
            <div className="how-it-works-step">
              <div className="step-icon">🔧</div>
              <p>Filter results by price, amenities, and reviews.</p>
            </div>
            <div className="how-it-works-step">
              <div className="step-icon">💳</div>
              <p>Book your perfect PG securely through our platform.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="feature-card">
          <h3>What Our Users Say</h3>
          <div className="testimonial-card">
            <p>"The platform made finding a PG so easy and convenient! Highly recommend it to everyone."</p>
            <span>- Riya Sharma</span>
          </div>
          <div className="testimonial-card">
            <p>"Great experience! The filters and reviews helped me pick the perfect PG for my needs."</p>
            <span>- Akash Mehta</span>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <button className="cta-button" onClick={() => handleNavigate('/find-pg')}>Find PGs Near You</button>
      </section>

      {/* Contact Us Section */}
      <section className="contact-us-section">
        <h2>Contact Us</h2>
        <p>Have questions? Reach out to us at:</p>
        <ul>
          <li>Email: support@nestmatch.com</li>
          <li>Phone: +91-9876543210</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
