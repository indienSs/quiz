import React from "react";

function FinishGame({ correctAnswers }) {
  return (
    <div className="question">
      <h1 className="description">{`You have answered on ${correctAnswers} / 5 questions`}</h1>
      <a href="/">
        <button>Start new Game</button>
      </a>
    </div>
  );
}

export default FinishGame;
