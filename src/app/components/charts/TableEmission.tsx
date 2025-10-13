"use client";
import style from "./TableEmission.module.css";

interface Props {
  HighEmission: {
    country: string;
    emission: number;
    population: number;
    oneYearChange: number;
  }[];
}
interface Props {
  LowEmission: {
    country: string;
    emission: number;
    population: number;
    oneYearChange: number;
  }[];
}
export default function TableEmission({ HighEmission, LowEmission }: Props) {
  return (
    <main className={style.main}>
      <div>
        <h2 className={style.headline}>
          Tabell Over 20 Land med Høyest utslipp
        </h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Emission</th>
              <th>Population</th>
              <th>Ett års endring</th>
            </tr>
          </thead>
          <tbody>
            {HighEmission.map(
              ({ country, emission, population, oneYearChange }) => (
                <tr key={country}>
                  <td>{country}</td>
                  <td>{emission}</td>
                  <td>{population}</td>
                  <td>{oneYearChange}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div>
        <h2 className={style.headline}>
          Tabell Over 20 Land med <strong> LAVEST</strong>utslipp
        </h2>
        <table className={style.table}>
          <thead>
            <tr>
              <th>Country</th>
              <th>Emission</th>
              <th>Population</th>
              <th>Ett års endring</th>
            </tr>
          </thead>
          <tbody>
            {LowEmission.map(
              ({ country, emission, population, oneYearChange }) => (
                <tr key={country}>
                  <td>{country}</td>
                  <td>{emission}tonn</td>
                  <td>{population}</td>
                  <td>{oneYearChange}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
