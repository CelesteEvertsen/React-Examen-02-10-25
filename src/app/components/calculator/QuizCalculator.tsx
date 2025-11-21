"use client";
import React, { useEffect, useState } from "react";
import style from "./QuizCalculator.module.css";
import Link from "next/link";
import { useQuizStore } from "@/app/store/useQuizStore"; // Husk riktig filsti

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
  // 1. Hent state og funksjoner fra Zustand
  const { 
    currentIndex, 
    finished, 
    score, 
    answerQuestion, 
    goBack, 
    finishQuiz 
  } = useQuizStore();

  // 2. Next.js Hydrering-fix (Viktig for LocalStorage)
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Hvis ikke montert enda, ikke vis noe (hindrer feilmeldinger)
  if (!isMounted) return null;

  // Hjelpevariabel for nåværende spørsmål
  const currentQuestion = Questions[currentIndex];

  return (
    <>
      <div className={style.containerQuestions}>
        {!finished && <h1 className={style.headline}>Tørr du å ta quizen?</h1>}
        
        {!finished ? (
          <div className={style.questions}>
            <h2>Ditt klima utslipp: {score}kg</h2>
            <h2>
              {currentIndex + 1}/{Questions.length}
            </h2>
            
            {/* Sjekk at currentQuestion eksisterer før vi prøver å vise den */}
            {currentQuestion && (
                <>
                <p>{currentQuestion.text}</p>
                {currentQuestion.options.map((options, index) => (
                  <button
                    className={style.quizBtn}
                    type="button"
                    key={index}
                    onClick={() => 
                      // Her kaller vi Zustand-funksjonen med nødvendig info
                      answerQuestion(currentQuestion.id, options.value, Questions.length)
                    }
                  >
                    {options.text}
                  </button>
                ))}
                </>
            )}

            <button
              className={style.btn}
              type="button"
              onClick={goBack} // Bruker goBack fra store
            >
              Tilbake
            </button>

            {currentIndex + 1 < Questions.length ? (
              <button
                className={style.btn}
                type="button"
                // Frem-knappen sender verdien 0 (påvirker ikke score, men går videre)
                onClick={() => answerQuestion(currentQuestion.id, 0, Questions.length)}
              >
                Frem
              </button>
            ) : (
              <button
                className={style.btnDone}
                type="button"
                onClick={finishQuiz} // Bruker finishQuiz fra store
              >
                Ferdig?
              </button>
            )}
          </div>
        ) : (
          <div>
            <h1 className={style.headline}>Gå til resultater</h1>
            <Link href="/quizresultat">
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