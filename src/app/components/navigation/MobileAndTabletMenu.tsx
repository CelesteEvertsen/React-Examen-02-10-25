"use client"
import { useState } from "react";
import style from "./MobileAndTabletMenu.module.css";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";
import Link from "next/link";

/* Målet her er å lage en gjennbrukbar navigasjon */
/* 1. Lage/definere interface for lenke-objektet */
interface NavLink{
  href: string;
  label:string;
}
/* 2. definere props-type for komponenten */
interface MobileAndTabletMenuProps{
  links:NavLink[]; // Array av navlink-objekter
}

export default function MobileAndTabletMenu({links}: MobileAndTabletMenuProps) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function toggleMenuOpen():void {
    setOpenMenu(!openMenu);
  }
  function toggleMenuClose():void {
    setOpenMenu(false);
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
          {links.map((link)=>(
            <Link href={link.href} key={link.href}>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
