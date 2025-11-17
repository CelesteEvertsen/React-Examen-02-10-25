import MobileAndTabletMenu from "./navigation/MobileAndTabletMenu";
import DesktopMenu from "./navigation/DesktopMenu";
import style from "./Header.module.css"
export default function Header() {
  const menuLinks =[
    { href: "/", label: "Hjem" },
  { href: "/verstingene", label: "Verstingene" },
  { href: "/klimakalkulator", label: "Klima kalkulator" },
  { href: "/ny-side", label: "En Ny Side" },
  ]
  return (
    <header className={style.header}>
      <nav>
        <div className={style.MobileAndTablerMenu}>
          <MobileAndTabletMenu links={menuLinks}/>
        </div>
        <div className={style.DesktopMenu}>
          <DesktopMenu links={menuLinks}/>
        </div>
      </nav>
    </header>
  );
}
