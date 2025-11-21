"use client";
import { useState, useEffect } from "react"; // Vi trenger useEffect kun for hydrering-fixen
import Confetti from "react-confetti";
import Image from "next/image";
import style from "./QuizCalculator.module.css";
import { useWindowSize } from "react-use";
import Link from "next/link";
import { useQuizStore } from "@/app/store/useQuizStore"; // Pass på at stien er rett

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

export default function QuizResults({ Questions }: Props) {
  // 1. Hent data og funksjoner fra Zustand
  const { score, restartQuiz } = useQuizStore();
  
  // 2. Next.js Hydrering-fix (Sørger for at vi kun viser resultatet på klienten)
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { width, height } = useWindowSize();
  const totalAverage = Questions.reduce((total, a) => total + a.average, 0);

  // Du trenger ikke lenger handelRestart-funksjonen som sletter localStorage manuelt,
  // vi bruker bare restartQuiz() fra storen direkte i knappen.

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
          <p>Du er et eksempel for menneskeheten</p>
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
          <p>Det kunne vært verre</p>
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

  // Hvis komponenten ikke er "montert" i nettleseren ennå, returner null (forhindrer bugs)
  if (!isMounted) return null;

  return (
    <section className={style.containerQuestions}>
      <h2>
        Ditt klima utslipp: {score}kg CO2 vs gjennomsnittet: {totalAverage} CO2
      </h2>
      <div className={style.result}>
        <h2>Resultater</h2>
        <h3>Ditt klimautslipp: {score}</h3>
        
        {handelScore()}
        
        <Link href="/klimakalkulator">
          <button
            className={style.quizBtn}
            type="button"
            onClick={restartQuiz} 
          >
            Start på nytt
          </button>
        </Link>
      </div>
    </section>
  );
}