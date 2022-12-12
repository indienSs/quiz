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
  /**
   * достать из даты вопрос и отобразить в игровом поле через пропс
   * то же самое проделать с массивом ответов
   */
  console.log(quizData);

  const quizQuestions = () => {
    quizData.map(element => <GameField question={element.question} answers={element.answers[0]} />)
  }

  return (
    <div className="app">
      <div className="window">
        {!isStarted && (
          <StartGame handleClick={() => setIsStarted((prev) => !prev)} />
        )}
        {isStarted && {quizQuestions}}
      </div>
    </div>
  );
}

export default App;
