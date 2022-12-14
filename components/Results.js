import React, { Component } from 'react';

const Results = ({score, playAgain}) => (
  <div className = "score-board">
    <div className = "score">Your score is {score} of 5!</div>
    <button className="playBtn" onClick={playAgain}>Play Again!</button>
    </div>
);

export default Results;