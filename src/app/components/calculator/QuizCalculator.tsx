"use client";
import React from "react";
import { useState, useEffect } from "react";
import style from "./QuizCalculator.module.css";
import Link from "next/link";

interface Answers {
  text: string;
  value: number;
}
interface Props{
  Questions: {
  id: number;
  text: string;
  options: Answers[];
  average:number;
}[]}

export default function QuizCalculator({Questions}:Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [switchedAnswer, setSwitchedAnswer] = useState<{[key:number]:number}>({})

  useEffect(() => {
    localStorage.setItem("score", score.toString());
    localStorage.setItem("index", currentIndex.toString());
    localStorage.setItem("finished", finished.toString());
  }, [score, currentIndex, finished]);

  function handleAnswer(value: number) {
    const currentQuestion = Questions[currentIndex];
    const previusValue = switchedAnswer[currentQuestion.id] || 0;

    const updatedAnswers = {
      ...switchedAnswer,[currentQuestion.id]:value,
    }
    const newScore = score - previusValue + value;

    setSwitchedAnswer(updatedAnswers);
    setScore(newScore);


   if( currentIndex +1 < Questions.length){
    setCurrentIndex(currentIndex + 1);
   }else{
    setFinished(true);
   }
  }

  function handleBack(value: number) {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <>
      <div className={style.containerQuestions}>
       {!finished && <h1 className={style.headline}>Tørr du å ta quizen?</h1>}
        {!finished ? (
          <div className={style.questions}>
            <h2>
              Ditt klima utslipp:{score}kg
            </h2>
            <h2>
              {currentIndex + 1}/{Questions.length}
            </h2>
            <p>{Questions[currentIndex].text}</p>
            {Questions[currentIndex].options.map((options, index) => (
              <button
                className={style.quizBtn}
                type="button"
                key={index}
                onClick={() => handleAnswer(options.value)}
              >
                {options.text}
              </button>
            ))}
            <button
              className={style.btn}
              type="button"
              onClick={() => handleBack(-1)}
            >
              Tilbake
            </button>
            <button
              className={style.btn}
              type="button"
              onClick={() => handleAnswer(0)}
            >
              Frem
            </button>
          </div>
        ) : (
          <div>
          <h1 className={style.headline}>Gå til resultater</h1>
          <Link href="/quizresults">
            <button type="button" className={style.btn}>
              Se resultatene
            </button>
          </Link>
          </div>
        )}
      </div>
    </>
  );
}
/* https://classic.yarnpkg.com/en/package/react-confetti  måtte installerer npm install react-use */
