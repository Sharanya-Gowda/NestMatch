import React from 'react';
import { useNavigate } from 'react-router-dom';  // Use useNavigate
import './Home.css';

const Home = () => {
  const navigate = useNavigate();  // Use navigate instead of history

  const handleViewClick = () => {
    // Navigate to the Reviewer Page when the "View" button is clicked
    navigate('/reviewer');
  };

  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to NestMatch</h1>
        <p>Your perfect match for PG accommodations. Discover safe, affordable, and comfortable PGs today!</p>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <i className="fas fa-bed feature-icon"></i>
          <h3>Comfortable Rooms</h3>
          <p>Stay in PGs that are well-equipped with all your essentials for a comfortable stay.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-map-marker-alt feature-icon"></i>
          <h3>Prime Locations</h3>
          <p>Find PGs located in the heart of the city, close to transport, colleges, and more!</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-dollar-sign feature-icon"></i>
          <h3>Affordable Prices</h3>
          <p>Choose from a wide range of PGs that suit your budget without compromising on quality.</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-dollar-sign feature-icon"></i>
          <h3>Reviews</h3>
          <p>Choose from a wide range of PGs that suit your budget without compromising on quality.</p>
          <button onClick={handleViewClick}>View</button>
        </div>
      </div>

      

      <div className="cta-section">
        <button className="cta-button">Find PGs Near You</button>
      </div>
    </div>
  );
};

export default Home;
