import React from "react";

function GameField({ question, answers }) {
  return (
    <div className="question">
      <h3>{question}</h3>
      <ul className="variants">
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameField;
