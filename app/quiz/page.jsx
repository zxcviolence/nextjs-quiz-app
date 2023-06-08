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

  return (
    <div className="container">
      <h1>Quiz page</h1>
      <div>
        <h2>
          Вопросы: 1<span>/5</span>
        </h2>
      </div>
    </div>
  );
};

export default page;
