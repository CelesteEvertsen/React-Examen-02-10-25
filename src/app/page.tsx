import ClimateSection from "./components/climatesection/ClimateSection";
import ClimateSectionArray from "./data/ClimateSectionArray";
import styles from "./page.module.css";

export default function Home() {
  if(!ClimateSectionArray){
    return(
       <p>
        Data laster/mangler, du kan fortsette med bruk og kast i mellomtiden
      </p>
    )
  }
  return (
       <>
    <main className={styles.main}>
      <div className={styles.AboveTheFold}>
        <section className={styles.section}>
          <h1>Protect Our Planet</h1>
          <p>
            Climate change isnt tomorrows problem its ours today. Together,
            we can build a sustainable future.
          </p>
        </section>
      </div>
      <div className={styles.ClimaSection}>
       <ClimateSection
       climateSection={ClimateSectionArray}/>
      
        </div>
    </main>
    
    </>
  );
}
