import axios from "axios";
import React, { useEffect, useState } from "react";

import GameField from "./components/GameField";
import StartGame from "./components/StartGame";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);
  const [countAnswers, setCountAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const counter = () => {
    setCountAnswers((prev) => ++prev);
  };

  const zeroCounter = () => {
    setCountAnswers(0);
  };

  const correctCounter = () => {
    setCorrectAnswers((prev) => ++prev);
  };

  useEffect(() => {
    axios
      .get(
        "https://opentdb.com/api.php?amount=5&category=23&difficulty=easy&type=multiple"
      )
      .then((res) => {
        setQuizData(
          res.data.results.map((result) => {
            const quizElement = {
              question: result.question,
              answers: result.incorrect_answers,
              correctAnswer: result.correct_answer,
            };
            quizElement.answers.push(result.correct_answer);
            quizElement.answers.sort(() => Math.random() - 0.5);
            return quizElement;
          })
        );
      });
  }, []);

  return (
    <div className="app">
      {!isStarted && <StartGame handleClick={() => setIsStarted(true)} />}
      {isStarted && (
        <GameField
          questions={quizData}
          counter={counter}
          countAnswers={countAnswers}
          zeroCounter={zeroCounter}
          correctCounter={correctCounter}
          correctAnswers={correctAnswers}
        />
      )}
    </div>
  );
}

export default App;
