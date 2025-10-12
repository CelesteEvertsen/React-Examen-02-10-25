"use client";
import React from "react";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { questions } from "@/app/data/ClimateCalculatorArray";
import style from "./QuizCalculator.module.css";
import Image from "next/image";

export default function QuizCalculator() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const SavedScore = localStorage.getItem("score");
    const SavedIndex = localStorage.getItem("index");
    const SavedFinished = localStorage.getItem("finished");

    if (SavedScore) setScore(Number(SavedScore));
    if (SavedIndex) setCurrentIndex(Number(SavedIndex));
    if (SavedFinished) setFinished(SavedFinished === "true");
  }, []);

  useEffect(() => {
    localStorage.setItem("score", score.toString());
    localStorage.setItem("index", currentIndex.toString());
    localStorage.setItem("finished", finished.toString());
  }, [score, currentIndex, finished]);

  const handleAnswer = (value: number) => {
    setScore(score + value);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setFinished(true);
    }
  };

  const handleBack = (value: number) => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  function handelRestart() {
    setCurrentIndex((prev) => 0);
    setFinished(false);
    setScore(0);
  }
  function handelScore() {
    if (score <= 10) {
      return (
        <div>
          <Confetti width={width} height={height} />
          <Image
            src="/ExcitedLetsGoGIFbyTheVibeisRight.gif"
            width={200}
            height={150}
            alt="gif"
          />
          <p>Du er ett eksempel for menneskeheten</p>
        </div>
      );
    } else if (score > 10 && score < 20) {
      return (
        <div>
          <Image
            src="/SoundsGoodGIFbyLeroyPatterson.gif"
            width={200}
            height={150}
            alt="gif"
          />
          <p>Det kunne hvert hverre</p>
        </div>
      );
    } else if (score > 20 && score < 50) {
      return (
        <div>
          <Image
            src="/WillSmithReaction.gif"
            width={200}
            height={150}
            alt="gif"
          />
          <p>Du beveger deg inn i rød sone</p>
        </div>
      );
    } else {
      return (
        <div>
          <Confetti colors={["black", "black"]} width={width} height={height} />
          <Image
            src="/BruceWillisWtfGIF.gif"
            width={200}
            height={150}
            alt="gif"
          />
          <p>Har ikke ord, svart konfetti på deg</p>
        </div>
      );
    }
  }

  return (
    <>
      <div className={style.containerQuestions}>
        <h1 className={style.headline}>Tørr du å ta quizen?</h1>
        {!finished ? (
          <div className={style.questions}>
            <h2>
              Ditt klima utslipp:{score}kg CO2 vs gjennomsnittet: 100kg CO2
            </h2>
            <h2>
              {currentIndex + 1}/{questions.length}
            </h2>
            <p>{questions[currentIndex].text}</p>
            {questions[currentIndex].options.map((options, index) => (
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
          <div className={style.result}>
            <h2>Resultater</h2>
            <h3>Ditt klimautslipp: {score}</h3>
            {handelScore()}
            <button
              className={style.quizBtn}
              type="button"
              onClick={() => handelRestart()}
            >
              Start på nytt
            </button>
          </div>
        )}
      </div>
    </>
  );
}

/* https://classic.yarnpkg.com/en/package/react-confetti  måtte installerer npm install react-use */
