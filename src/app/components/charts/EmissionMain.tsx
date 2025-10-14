"use client";
import style from "./EmissonMain.module.css";
import { HighEmission, LowEmission } from "@/app/data/EmissionArray";
import { useState } from "react";
import TableEmission from "./TableEmission";
import ChartEmission from "./ChartEmission";

export default function EmissionMain() {
  const [showinfo, setShowinfo] = useState<"table" | "chart">("table");

  if (!HighEmission || !LowEmission) {
    return (
      <p>
        Data laster/mangler, du kan fortsette med bruk og kast i mellomtiden
      </p>
    );
  }
  return (
    <>
      <section className={style.navigationBtn}>
        <h1>De 20 landene med høyest CO2-utslipp per person</h1>
        <div className={style.btnContainer}>
          <button type="button" onClick={() => setShowinfo("table")}>
            Vis Tabell
          </button>
          <button type="button" onClick={() => setShowinfo("chart")}>
            Vis Graf
          </button>
        </div>
      </section>
      <section>
        {showinfo === "table" ? (
          <TableEmission
            HighEmission={HighEmission}
            LowEmission={LowEmission}
          />
        ) : (
          <ChartEmission
            HighEmission={HighEmission}
            LowEmission={LowEmission}
          />
        )}
      </section>
    </>
  );
}
