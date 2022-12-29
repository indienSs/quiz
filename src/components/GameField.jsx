import React from "react";
import Question from "./Question";

function GameField({ questions }) {
  return (
    <div className="window">
      {questions.map((element) => (
        <Question
          question={element.question}
          answers={element.answers}
          correctAnswer={element.correctAnswer}
          key={element.question}
        />
      ))}
    </div>
  );
}

export default GameField;
