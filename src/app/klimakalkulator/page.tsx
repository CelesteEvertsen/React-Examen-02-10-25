import style from "./klimakalkulator.module.css";
import CalculatorMain from "../components/calculator/CalculatorMain";
export default function Kalkulator() {
  return (
    <main className={style.main}>
      <header>
        <h1 className={style.headline}>Kalkulator</h1>
      </header>
      <CalculatorMain />
    </main>
  );
}
