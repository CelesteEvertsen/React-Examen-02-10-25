"use client"
import MobileAndTabletMenu from "./components/navigation/MobileAndTabletMenu"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       <MobileAndTabletMenu/>
      </main>
      <footer className={styles.footer}>
      
      </footer>
    </div>
  );
}
