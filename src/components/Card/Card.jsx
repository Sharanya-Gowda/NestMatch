import React from 'react';
import './Card.css';

const Card = ({ title, description }) => (
  <div className="card">
    <h2 className="card-title">"Spacious PG for Rent"</h2>
    <p className="card-description">"This PG offers a spacious room with all modern amenities, located in a prime location."
</p>
  </div>
);

export default Card;
