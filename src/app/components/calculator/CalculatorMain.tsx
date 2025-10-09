"use client";
import ClimateCalculatorSection from "@/app/components/calculator/QuizCalculator";
import { useState } from "react";
import EmojiCalculator from "./EmojiCalculator";
import style from "./CalculatorMain.module.css"


export default function CalculatorMain() {
  const [displayCalculator, setDisplayCalculator] = useState<
    "emojiCalculator" | "quizCalculator"
  >("quizCalculator");
  return (
    <>
    <div className={style.navigationBtn}>
      <section className={style.btnContainer}>
        <button
          type="button"
          onClick={() => setDisplayCalculator("quizCalculator")}
        >
          Quiz
        </button>
        <button
          type="button"
          onClick={() => setDisplayCalculator("emojiCalculator")}
        >
          Kalkulator
        </button>
      </section>
      </div>
      <section>
        {displayCalculator === "quizCalculator" ? (
          <ClimateCalculatorSection />
        ) : (
          <EmojiCalculator />
        )}
      </section>
    </>
  );
}
