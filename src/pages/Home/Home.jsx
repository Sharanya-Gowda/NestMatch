import React from 'react';
import { useNavigate } from 'react-router-dom'; // React Router's navigation hook
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-container">
      {/* Welcome Section */}
      <header className="welcome-text">
        <h1>Welcome to NestMatch</h1>
        <p>Your perfect match for PG accommodations. Discover safe, affordable, and comfortable PGs today!</p>
      </header>

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
      </section>

      {/* New Section: How It Works */}
      <section className="how-it-works-section">
        <h2>How It Works</h2>
        <ol>
          <li>Search for PGs based on your location and preferences.</li>
          <li>Filter results by price, amenities, and reviews.</li>
          <li>Book your perfect PG securely through our platform.</li>
        </ol>
      </section>

      {/* New Section: Testimonials */}
      <div className="testimonial-section">
        <h2>What Our Users Say</h2>
        <div className="testimonial-card">
          <p>"The platform made finding a PG so easy and convenient! Highly recommend it to everyone."</p>
          <span>- Riya Sharma</span>
        </div>
        <div className="testimonial-card">
          <p>"Great experience! The filters and reviews helped me pick the perfect PG for my needs."</p>
          <span>- Akash Mehta</span>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <button className="cta-button" onClick={() => handleNavigate('/find-pg')}>Find PGs Near You</button>
      </section>

      {/* New Section: Contact Us */}
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
