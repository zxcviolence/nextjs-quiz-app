"use client";
import React from "react";
import { quiz } from "../data.js";

const page = () => {
  const [activeQuestion, setActiveQuestion] = React.useState(0);
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = React.useState(null);
  const [showResult, setShowResult] = React.useState(false);
  const [result, setResult] = React.useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  const handleAnswerSelected = (answer, index) => {
    setChecked(true);
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <div>
        <h2>
          Вопросы: {activeQuestion + 1}
          <span>/{questions.length}</span>
        </h2>
      </div>
      <div>
        {!showResult ? (
          <div className="quiz-container">
            <h3>{questions[activeQuestion].question}</h3>
            {answers.map((answer, index) => (
              <li
                key={index}
                onClick={() => handleAnswerSelected(answer, index)}
                className={
                  selectedAnswerIndex === index ? "li-selected" : "li-hover"
                }
              >
                <span>{answer}</span>
              </li>
            ))}
            {checked ? (
              <button onClick={handleNextQuestion} className="btn">
                {activeQuestion === question.length - 1
                  ? "Закончить"
                  : "Следующий"}
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                disabled
                className="btn-disabled"
              >
                {activeQuestion === question.length - 1
                  ? "Закончить"
                  : "Следующий"}
              </button>
            )}
          </div>
        ) : (
          <div className="quiz-container">
            <h3>Результат {(result.score / 25) * 100}%</h3>
            <p>
              Всего вопросов: <span>{questions.length}</span>
            </p>
            <p>
              Всего очков: <span>{result.score}</span>
            </p>
            <p>
              Правильных ответов: <span>{result.correctAnswers}</span>
            </p>
            <p>
              Неверных ответов: <span>{result.wrongAnswers}</span>
            </p>
            <button onClick={() => handleReset()}>Заново</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
