import style from "./klimakalkulator.module.css";
import CalculatorMain from "../components/calculator/CalculatorMain";
import Link from "next/link";
export default function Kalkulator() {
  return (
    <main className={style.main}>
      <header>
        <Link href="/">
          <h1 className={style.headline}>Kalkulator</h1>
        </Link>
      </header>
      <CalculatorMain />
    </main>
  );
}
