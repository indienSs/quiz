import React, { useState } from "react";

const Question = ({ question, answers, correctAnswer }) => {
  const [indexAnswer, setIndexAnswer] = useState(0);
  const [color, setColor] = useState({});
  const [chosen, setChosen] = useState(false);

  const correctColor = {
    backgroundColor: "#94D7A2",
    border: "none",
  };

  const incorrectColor = {
    backgroundColor: "#F8BCBC",
    border: "none",
  };

  const onClickAnswer = (answer, index) => {
    if (!chosen) {
      setIndexAnswer(index);
      setColor(answer === correctAnswer ? correctColor : incorrectColor);
      setChosen(true);
    }
  };

  return (
    <div className="question">
      <h3>{question}</h3>
      <ul className="variants">
        {answers.map((answer, index) => (
          <li
            key={answer}
            onClick={() => onClickAnswer(answer, index)}
            style={index === indexAnswer ? color : {}}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
