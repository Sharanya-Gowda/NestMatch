import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="aboutWrapper">
      <section className="aboutSection">
        <h2 className="aboutTitle">How We're Tackling the Problem</h2>
        <p className="aboutText">
          NestMatch is designed to solve the key challenges faced by users when searching for accommodations, roommates, and nearby essentials. Here's how we address each problem:
        </p>
        <ul className="solutionList">
          <li className="solutionItem">
            <strong>Difficult PG Search:</strong> Our customizable PG search filters help users find accommodations based on budget, amenities, food preferences, and proximity to transportation.
          </li>
          <li className="solutionItem">
            <strong>Roommate Compatibility Issues:</strong> Using an AI-powered matching system, we pair users with roommates who share similar lifestyles, cleanliness habits, and social preferences.
          </li>
          <li className="solutionItem">
            <strong>Lack of Hostel Availability Info:</strong> We provide real-time updates on hostel vacancies for various institutes with alerts for availability.
          </li>
          <li className="solutionItem">
            <strong>Limited Access to Nearby Essentials:</strong> The platform features an interactive map showing nearby grocery stores, medical services, gyms, and recreational spots.
          </li>
          <li className="solutionItem">
            <strong>Fragmented Booking Process:</strong> NestMatch simplifies the booking process by allowing users to book PGs and verify roommates directly through the app.
          </li>
          <li className="solutionItem">
            <strong>Rent Management Issues:</strong> Our rent tracking system helps tenants and landlords keep track of rent payments and due dates.
          </li>
          <li className="solutionItem">
            <strong>Absence of Legal Support:</strong> We provide customizable digital rent agreements with legal assistance in case of disputes.
          </li>
          <li className="solutionItem">
            <strong>Community Isolation:</strong> The platform fosters community engagement by offering forums and event notifications to meet new people.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default About;
