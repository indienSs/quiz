import React from "react";

function GameField({question, answers}) {
  return (
    <div className="question">
      <h3>{question}</h3>
      <div className="variants">
        {answers}
      </div>
    </div>
  );
}

export default GameField;
