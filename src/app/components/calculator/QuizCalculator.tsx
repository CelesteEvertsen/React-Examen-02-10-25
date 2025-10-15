"use client";
import React from "react";
import { useState, useEffect } from "react";
import style from "./QuizCalculator.module.css";
import Link from "next/link";

interface Answers {
  text: string;
  value: number;
}
interface Props {
  Questions: {
    id: number;
    text: string;
    options: Answers[];
    average: number;
  }[];
}

export default function QuizCalculator({ Questions }: Props) {
  const [currentIndex, setCurrentIndex] =
    useState(0); /*Holder styr på nåværene spm */
  const [finished, setFinished] =
    useState(
      false
    ); /*her man gått gjennom hele arrayet, alstå om quizen er ferdig*/
  const [score, setScore] =
    useState(0); /*holde styr på verdiene til hver svar alternativ */
  const [switchedAnswer, setSwitchedAnswer] = useState<{
    [id: number]: number;
  }>(
    {}
  ); /*holde styr på verdien til spm ved hjelp av id, slik at brukeren kan endre på spm */

  useEffect(() => {
    localStorage.setItem("score", score.toString());
    localStorage.setItem("index", currentIndex.toString());
    localStorage.setItem("finished", finished.toString());
  }, [score, currentIndex, finished]);

  function handleAnswer(value: number) {
    const currentQuestion = Questions[currentIndex]; /*henter når værende spm*/
    const previusValue =
      switchedAnswer[currentQuestion.id] ||
      0; /* Om brukeren har svar, brukes den verdien, hvis ikke brukes 0*/

    const updatedAnswers = {
      ...switchedAnswer,
      [currentQuestion.id]: value,
    }; /*lager ett nytt object med nye de nye valgene basert på den aktueller ID */

    const newScore =
      score -
      previusValue +
      value; /* bruker verdien som blir hentet i previus og regner ut nytt poeng */

    setSwitchedAnswer(
      updatedAnswers
    ); /*oppdaterer state baser på det nye objectet */
    setScore(newScore); /*oppdaterer state baser på det den nye score*/

    if (currentIndex + 1 < Questions.length) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handleBack(value: number) {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function handelfinishedQuiz() {
    setFinished(true);
  }
  return (
    <>
      <div className={style.containerQuestions}>
        {!finished && <h1 className={style.headline}>Tørr du å ta quizen?</h1>}
        {!finished ? (
          <div className={style.questions}>
            <h2>Ditt klima utslipp:{score}kg</h2>
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
            {currentIndex + 1 < Questions.length ? (
              <button
                className={style.btn}
                type="button"
                onClick={() => handleAnswer(0)}
              >
                Frem
              </button>
            ) : (
              <button
                className={style.btnDone}
                type="button"
                onClick={() => handelfinishedQuiz()}
              >
                Ferdig?
              </button>
            )}
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
