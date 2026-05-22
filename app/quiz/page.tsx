"use client";

import { useState } from "react";
import { questions } from "../data/questions";
import { QuizResults } from "../components/QuizResults";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number>(4);
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestionIndex > 9) return <QuizResults />;

  console.log("selectedAnswer[i]: ", selectedAnswerIndex);
  console.log("currentQuestion: ", currentQuestionIndex);

  return (
    <>
      <h1>Fråga {currentQuestionIndex + 1}/10</h1>
      <h2>{currentQuestion.question}</h2>

      {currentQuestion.options.map((option, index) => {
        const isSelected = selectedAnswerIndex === index;
        const isCorrect = index === currentQuestion.correctAnswerIndex;
        const hasAnswered = selectedAnswerIndex < 4;

        return (
          <button
            key={index}
            onClick={() => {
              setSelectedAnswerIndex(index);
            }}
            className={`border border-slate-600 rounded-2xl p-3 ${
              hasAnswered && isCorrect
                ? "bg-emerald-600"
                : hasAnswered && isSelected
                  ? "bg-red-600"
                  : "bg-transparent"
            }`}
          >
            {option}
          </button>
        );
      })}
      {selectedAnswerIndex < 4 && (
        <button
          onClick={() => {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedAnswerIndex(4);
          }}
        >
          Nästa fråga
        </button>
      )}
    </>
  );
};

export default Quiz;
