import React from 'react';
import { useNavigate } from 'react-router-dom'; // To handle navigation
import './ReviewerPage.css';  // Correct path if necessary

// Assuming these are the correct paths for your images
import reviewer1 from '../../assets/images/reviewer1.jpg';
import reviewer2 from '../../assets/images/reviewer2.jpg';
import reviewer3 from '../../assets/images/reviewer3.jpg';

const ReviewerPage = () => {
  const navigate = useNavigate();  // Hook for navigation

  const reviewers = [
    {
      id: 1,
      image: reviewer1,
      description: 'Expert in Web Development and Security.',
    },
    {
      id: 2,
      image: reviewer2,
      description: 'AI and Machine Learning Specialist.',
    },
    {
      id: 3,
      image: reviewer3,
      description: 'Blockchain Expert and Software Engineer.',
    },
  ];

  const handleClose = () => {
    navigate('/');  // Navigates back to the home page
  };

  return (
    <div className="reviewer-container">
      {reviewers.map((reviewer) => (
        <div key={reviewer.id} className="reviewer-card">
          <h2>Reviewer Details</h2>
          <img
            src={reviewer.image}
            alt={`Reviewer ${reviewer.id}`}
            className="reviewer-image"
          />
          <p>{reviewer.description}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      ))}
    </div>
  );
};

export default ReviewerPage;
