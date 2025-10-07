import style from "./ClimateSection.module.css";
import ClimateSectionArray from "../../data/ClimateSectionArray";
import Link from "next/link";
import Image from "next/image";

export default function ClimateSection() {
  const climateArray = ClimateSectionArray.map(({title, image, text, theme, id}) => {
    
    return (
      <section className={style.content} key={id}>
        <h2>{title}</h2>
        <Image src={image} alt={text} width={400} height={250} />
        <div className={style.text}>
          <p>{text}</p>
        </div>
        <Link className={style.linkBtn} href={`climatetheme/${theme}`}>
          Ler mer
        </Link>
      </section>
    );
  });
  return <div className={style.climaBox}>{climateArray}</div>;
}
