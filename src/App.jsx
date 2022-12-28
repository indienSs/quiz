import React, { useEffect, useState } from "react";
import GameField from "./components/GameField";
import StartGame from "./components/StartGame";
import data from "./data.json";

function App() {
  const [isStarted, setIsStarted] = useState(false);
  const [quizData, setQuizData] = useState([]);

  useEffect(() => {
    setQuizData(
      data.results.map((result) => {
        const quizElement = {
          question: result.question,
          answers: result.incorrect_answers,
          correctAnswer: result.correct_answer,
        };
        quizElement.answers.push(result.correct_answer);
        return quizElement;
      })
    );
  }, []);

  return (
    <div className="app">
      {!isStarted && (
        <StartGame handleClick={() => setIsStarted((prev) => !prev)} />
      )}
      {isStarted && <GameField questions={quizData} />}
    </div>
  );
}

export default App;