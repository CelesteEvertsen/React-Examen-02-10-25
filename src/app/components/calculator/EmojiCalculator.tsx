"use client"
import { EmojiEnviromentChoices } from "../../data/ClimateCalculatorArray";
import { useState } from "react";
import style from "./EmojiCalculator.module.css";

export default function EmojiCalculator() {
  const [value, setValue] = useState<number[]>([]);
  function handleClick(value: number) {
    setValue((prev) => [...prev, value]);
    console.log(value);
  }
  const valueDisplay = value.join(" + ");
  const total = value.reduce((total, value) => total + value, 0);

  function handleRemove() {
    setValue([]);
    console.log(value);
  }
  function handleEsc() {
    setValue((prev) => prev.slice(0, -1));
    console.log(value);
  }

  return (
    <div className={style.calculator}>
      <h2 className={style.headline}>Klimakalkulator</h2>
      <label title="number" htmlFor="number"></label>
      <input
        className={style.input}
        name="number"
        id="number"
        type="text"
        readOnly
        value={valueDisplay}
      />
      <div className={style.buttonGrid}>
        {EmojiEnviromentChoices.map(({ id, emoji, description, value }) => (
          <button
            type="button"
            key={id}
            className={style.btn}
            onClick={() => handleClick(value)}
          >
            <span className={style.emoji}>{emoji}</span>
            <span className={style.description}>{description}</span>
          </button>
        ))}
      </div>
      <div className={style.deleteContainer}>
        <button className={style.btn} onClick={() => handleRemove()}>
          {" "}
          Start på nytt
        </button>
        <button className={style.btn} onClick={() => handleEsc()}>
          {" "}
          Esc
        </button>
      </div>

      <div className={style.resultBox}>
        <p>Totalt utslippspoeng:</p>
        <h3 className={style.total}>{total}</h3>
      </div>
    </div>
  );
}
