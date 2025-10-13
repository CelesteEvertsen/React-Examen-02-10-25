import style from "./verstingene.module.css"
import EmissionMain from "../components/charts/EmissionMain"

export default function Verstingene(){
return(
    <main>
    <header>
        <h1 className={style.headline}>Verstingene</h1>
    </header>
    <EmissionMain/>
    </main>
)
}