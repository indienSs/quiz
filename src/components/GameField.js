import React, { useState } from "react";

function GameField({ question, answers, correctAnswer }) {
  const [amountAnswers, setAmountAnswers] = useState(0);
  const [indexAnswer, setIndexAnswer] = useState(-1);
  const [color, setColor] = useState({});

  const correctColor = {
    backgroundColor: "#94D7A2",
    border: "none",
  };

  const incorrectColor = {
    backgroundColor: "#F8BCBC",
    border: "none",
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <ul className="variants">
        {answers.map((answer, index) => (
          <li
            key={answer}
            onClick={() => {
              setIndexAnswer(index);
              setColor(
                answer === correctAnswer ? correctColor : incorrectColor
              );
            }}
            style={index === indexAnswer ? color : {}}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GameField;
