import style from "./verstingene.module.css"
import EmissionMain from "../components/charts/EmissionMain"
import Link from "next/link"
export default function Verstingene(){
return(
    <main>
    <header>
        <Link href="/">
        <h1 className={style.headline}>Verstingene</h1>
        </Link>
    </header>
    <EmissionMain/>
    </main>
)
}