import Link from "next/link"
import style from "./DesktopMenu.module.css"
export default function DesktopMenu(){
return(
    <nav>
          <div className={style.nav}>
          <ul className={style.navList }>
         <Link href="/">
            <li className={style.listItem}>Hjem</li>
          </Link>
          <Link href="/verstingene">
            <li className={style.listItem}>Verstingene</li>
          </Link>
          <Link href="/klimakalkulator">
            <li className={style.listItem}>Klima kalkulator</li>{" "}
          </Link>
          </ul>
          </div>
    </nav>
)
}