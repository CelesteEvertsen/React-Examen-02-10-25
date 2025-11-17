import Link from "next/link";
import style from "./DesktopMenu.module.css";
import { NavLink } from "@/app/data/NavLink";

interface DesktopMenuProps {
  links: NavLink[];
}

export default function DesktopMenu({ links }: DesktopMenuProps) {
  return (
    <nav>
      <div className={style.nav}>
        <ul className={style.navList}>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <li>{link.label}</li>
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}
