import MobileAndTabletMenu from "./navigation/MobileAndTabletMenu";
import DesktopMenu from "./navigation/DesktopMenu";
import style from "./Header.module.css"
export default function Header() {
  return (
    <header className={style.header}>
      <nav>
        <div className={style.MobileAndTablerMenu}>
          <MobileAndTabletMenu />
        </div>
        <div className={style.DesktopMenu}>
          <DesktopMenu/>
        </div>
      </nav>
    </header>
  );
}
