"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "next/image";
import style from "./QuizCalculator.module.css";
import { useWindowSize } from "react-use";
import Link from "next/link";



export default function QuizResults() {
  const [score, setScore] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [finished, setFinished] = useState<boolean>(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const SavedScore = localStorage.getItem("score");
    const SavedIndex = localStorage.getItem("index");
    const SavedFinished = localStorage.getItem("finished");

    if (SavedScore) setScore(Number(SavedScore));
    if (SavedIndex) setCurrentIndex(Number(SavedIndex));
    if (SavedFinished) setFinished(Boolean(SavedFinished));
  });

  function handelRestart() {
    setCurrentIndex(0);
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
    <section className={style.containerQuestions}>
      <h2>Ditt klima utslipp:{score}kg CO2 vs gjennomsnittet: 100kg CO2</h2>
      <div className={style.result}>
        <h2>Resultater</h2>
        <h3>Ditt klimautslipp: {score}</h3>
        {handelScore()}
        <Link href="/klimakalkulator">
          <button
            className={style.quizBtn}
            type="button"
            onClick={() => handelRestart()}
          >
            Start på nytt
          </button>
        </Link>
      </div>
    </section>
  );
}
