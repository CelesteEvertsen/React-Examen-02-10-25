import style from "./ClimateSection.module.css";
import ClimateSectionArray from "../../data/ClimateSectionArray";
import Link from "next/link";
import Image from "next/image";

export default function ClimateSection() {
  const climateArray = ClimateSectionArray.map((action) => {
    return (
      <section className={style.content} key={action.id}>
        <h2>{action.title}</h2>
        <Image src={action.image} alt={action.text} width={400} height={250} />
        <div className={style.text}>
          <p>{action.text}</p>
        </div>
        <Link className={style.linkBtn} href={`/climate/${action.theme}`}>
          Ler mer
        </Link>
      </section>
    );
  });
  return <div className={style.climaBox}>{climateArray}</div>;
}
