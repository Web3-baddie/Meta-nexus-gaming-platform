import React from 'react';
import './PlayPage.css';

const PlayPage = () => {
  return (
    <div>
      <h1>Welcome to the Play Section</h1>
      <div className="game-grid">
        {/* Add games or game cards here */}
        <div className="game-card">Game 1</div>
        <div className="game-card">Game 2</div>
        <div className="game-card">Game 3</div>
      </div>
    </div>
  );
};

export default PlayPage;
