import { useState } from "react";
import style from "./MobileAndTabletMenu.module.css";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Link from "next/link";

export default function MobileAndTabletMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenuOpen():void {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  }
  function toggleMenuClose():void {
    setOpenMenu(false);
    console.log(openMenu);
  }
  return (
    <nav>
      <div
        className={`${style.ToggleMenuIcon} ${openMenu ? style.toggle : ""}`}
        onClick={() => toggleMenuOpen()}
      >
        <RxEyeClosed />
      </div>
      <div
        className={`${style.ToggleMenuIcon} ${!openMenu ? style.toggle : ""} `}
        onClick={() => toggleMenuClose()}
      >
        <RxEyeOpen />
      </div>
      <div
        className={`${style.NavigationMenu} ${
          openMenu ? style.MenuIsOpen : ""
        }`}
      >
        <ul onClick={() => toggleMenuClose()}>
          <Link href="/">
            <li>Hjem</li>
          </Link>
          <Link href="/verstingene">
            <li>Verstingene</li>
          </Link>
          <Link href="/klimakalkulator">
            <li>Klima kalkulator</li>{" "}
          </Link>
        </ul>
      </div>
    </nav>
  );
}
