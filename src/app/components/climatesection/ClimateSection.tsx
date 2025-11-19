import style from "./ClimateSection.module.css";
import ClimateCard from "./ClimateCard";

interface props {
  climateSection: {
    title: string;
    image: string;
    text: string;
    theme: string;
    id: number;
  }[];
}

export default function ClimateSection({ climateSection }: props) {
  const climateArray = climateSection.map((item) => {
    return (
      /*      <section className={style.content} key={id}>
        <h2>{title}</h2>
        <Image src={image} alt={text} width={400} height={250} />
        <div className={style.text}>
          <p>{text}</p>
        </div>
        <Link className={style.linkBtn} href={`climatetheme/${theme}`}>
          Ler mer
        </Link>
      </section> */
      <ClimateCard
        key={item.id}
        title={item.title}
        image={item.image}
        text={item.text}
        theme={item.theme}
        id={item.id}
      />
    );
  });
  return <div className={style.climaBox}>{climateArray}</div>;
}
