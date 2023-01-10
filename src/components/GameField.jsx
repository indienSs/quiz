import React from "react";

import Question from "./Question";
import FinishGame from "./FinishGame";

function GameField({
  questions,
  counter,
  countAnswers,
  zeroCounter,
  correctCounter,
  correctAnswers,
}) {
  return (
    <div className="window">
      {countAnswers < 5 ? (
        questions.map((element) => (
          <Question
            question={element.question}
            answers={element.answers}
            correctAnswer={element.correctAnswer}
            key={element.question}
            counter={counter}
            correctCounter={correctCounter}
          />
        ))
      ) : (
        <FinishGame zeroCounter={zeroCounter} correctAnswers={correctAnswers} />
      )}
    </div>
  );
}

export default GameField;
