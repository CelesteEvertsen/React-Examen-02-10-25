import ClimateSection from "./components/HomePage/ClimateSection";
import styles from "./page.module.css";

export default function Home() {
  return (
       <>
    <main className={styles.main}>
      <div className={styles.AboveTheFold}>
        <section className={styles.section}>
          <h1>Protect Our Planet</h1>
          <p>
            Climate change isn’t tomorrow’s problem—it’s ours today. Together,
            we can build a sustainable future.
          </p>
        </section>
      </div>
      <div className={styles.ClimaSection}>
       <ClimateSection/>
        </div>
    </main>
    
    </>
  );
}
