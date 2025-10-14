import ClimateSectionArray from "@/app/data/ClimateSectionArray";
import style from "./ClimateTheme.module.css";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { theme: string };
}

export default function ClimateTheme({ params }: Props) {
  const { theme } = params;
  const action = ClimateSectionArray.find((item) => item.theme === theme);

  if (!action) {
    return (
      <p>Fant ikke noe klimatiltak, du kan fortsette med bruk og kast 🥳 </p>
    );
  }
  const { title, image, text, content } = action;

  return (
    <main className={style.main}>
      <div className={style.contentBox}>
        <Link href="/">
          {" "}
          <h1>{title}</h1>
        </Link>
        <Image
          className={style.img}
          src={image}
          alt={text}
          width={600}
          height={350}
        />
        <section className={style.text}>
          <p>{content.section1}</p>
          <p>{content.section2}</p>
          <p>{content.section3}</p>
        </section>
        <Link className={style.backHome} href="/">
          Tilbake hjem
        </Link>
      </div>
    </main>
  );
}
/* https://nextjs.org/docs/app/api-reference/functions/use-params og GA */
/* Prøvde å bruke useParams slik som  next forklarer i dokumentasjonen, men så at Glør bruke bare params...  klarte ikke helt å finne ut av hvorfor useParams ikke funket. Men når glør sin fjernet feilmelding sp gikk jeg bare for den */
