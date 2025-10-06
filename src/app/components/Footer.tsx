import Link from "next/link";
import style from "./Footer.module.css"
import { ImEvil } from "react-icons/im";
import { FaCalculator } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <section className={style.section}>
        <Link className={style.nav} href="/verstingene">
          <ImEvil className={style.fa} />
          <h2>Verstingene</h2>
        </Link>

        <Link className={style.nav} href="/klimakalkulator">
          <FaCalculator className={style.fa} />
          <h2>Klimakalkulator</h2>
        </Link>
      </section>
    </footer>
  );
}
