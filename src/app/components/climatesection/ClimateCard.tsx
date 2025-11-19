import style from "./ClimateSection.module.css";
import Link from "next/link";
import Image from "next/image";

interface climateCardProps {
  title: string;
  image: string;
  text: string;
  theme: string;
  id: number;
}

export default function ClimateCard({
  title,
  image,
  text,
  theme,
  id,
}: climateCardProps) {
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
}
