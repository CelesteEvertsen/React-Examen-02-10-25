import React from "react";
import {
  CartesianGrid,
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  AreaChart,
  Tooltip,
  Area,
} from "recharts";
import style from "./ChartEmission.module.css";

interface emissionData {
    country: string;
    emission: number;
    population: number;
    oneYearChange: number;
  }[];

interface chartEmissionProps {
  lowEmission:emissionData []
  highEmission:emissionData []

  }[];
/*EmissionData er riktig måte å lage typer på, slik det vises i TableEmission er feil, spesielt fordi du bruker samme navn Props Props. 
Husk også at props skrives med småbokstaver */
export default function ChartEmission({ highEmission, lowEmission }: chartEmissionProps) {
  return (
    <main>
     <h2 className={style.headline}>CO2 <strong>Høyt</strong> utslipp per person/Land (tonn)</h2>
      <div className={style.highE}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={200} data={highEmission}>
            <CartesianGrid stroke="#eee" strokeDasharray={"5 5"} />
            <XAxis dataKey="country" />
            <Line
            yAxisId="left"
              type="monotone"
              dataKey="emission"
              stroke="#8884d8"
              name="CO2"
            />
            <Line
              type="monotone"
              dataKey="population"
              stroke="#0d00ffff"
              name="Befolkning"
            />
            <Line
              type="monotone"
              dataKey="oneYearChange"
              stroke="#ff0000ff"
              name="Ett års endring"
            />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <h2 className={style.headline}>CO2 <strong>Lavt</strong> utslipp per person/Land (tonn)</h2>
      <div className={style.lowE}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={lowEmission}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="country" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="emission"
              stackId="1"
              stroke="#0d00fdff"
              fill="#0d00fdff"
            />
            <Area
              type="monotone"
              dataKey="population"
              stackId="1"
              stroke="#4af18aff"
              fill="#4af18aff"
            />
            <Area
              type="monotone"
              dataKey="oneYearChange"
              stackId="1"
              stroke="#ff009dff"
              fill="#ff009dff"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
/* kilde: https://recharts.org/en-US */
