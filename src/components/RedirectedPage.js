import React from 'react';
import './RedirectedPage.css'; // Link the CSS file

const RedirectedPage = () => {
  // Log to check if the component renders
  console.log("RedirectedPage component rendered");

  return (
    <div className="redirected-page">
      {/* Top navigation bar */}
      <div className="top-nav">
        <div className="logo">Swagbucks</div>
        <div className="nav-links">
          <a href="#">Answer</a>
          <a href="/play">Play</a>
          <a href="#">Shop</a>
          <a href="#">Discover</a>
          <a href="#">More</a>
        </div>
        <div className="nav-right">
          <input type="text" placeholder="Search & earn" />
          <div className="user-info">
            <span>Earn 30 SB</span>
            <span>34 SB</span>
          </div>
        </div>
      </div>

      {/* Sidebar and main content */}
      <div className="content-container">
        <div className="sidebar">
          <ul>
            <li><a href="#">Discover Home</a></li>
            <li><a href="#">All Offers</a></li>
            <li><a href="#">Take the Tour</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Sign Ups</a></li>
            <li><a href="#">Free Offers</a></li>
          </ul>
        </div>

        {/* Main content with offers */}
        <div className="main-content">
          <h2>Discover Special Offers and Earn</h2>
          <div className="offers-grid">
            <div className="offer-card">
              <img src="https://via.placeholder.com/150" alt="Offer 1" />
              <h3>King of Avalon</h3>
              <p>Earn up to 7210 SB</p>
            </div>
            <div className="offer-card">
              <img src="https://via.placeholder.com/150" alt="Offer 2" />
              <h3>Survivor Island</h3>
              <p>Earn up to 220 SB</p>
            </div>
            <div className="offer-card">
              <img src="https://via.placeholder.com/150" alt="Offer 3" />
              <h3>Slots Rush - Android Only</h3>
              <p>Earn 800 SB</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectedPage;
