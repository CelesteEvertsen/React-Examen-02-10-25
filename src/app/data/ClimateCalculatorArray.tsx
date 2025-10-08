interface Answers{
    text:string;
    value:number;
}
 interface Questions{
id: number;
text:string;
options: Answers[]
}

export const questions: Questions[]=[
    
  {
    id: 1,
    text: "Hvor ofte tar du fly?",
    options: [
      { text: "Aldri", value: 0 },
      { text: "1-2 ganger i året", value: 5 },
      { text: "Flere ganger i året", value: 10 },
    ],
  },
  {
    id: 2,
    text: "Hva slags transportmiddel bruker du mest i hverdagen?",
    options: [
      { text: "Sykkel/gange", value: 0 },
      { text: "Kollektivt", value: 3 },
      { text: "Bil", value: 7 },
    ],
  },
  {
    id: 3,
    text: "Hvor ofte spiser du kjøtt?",
    options: [
      { text: "Aldri/svært sjelden", value: 0 },
      { text: "Noen ganger i uken", value: 4 },
      { text: "Daglig", value: 8 },
    ],
  },
  {
    id: 4,
    text: "Hva slags strømforbruk har du hjemme?",
    options: [
      { text: "100 % fornybar (sol, vind, vann)", value: 0 },
      { text: "Blandet energikilde", value: 4 },
      { text: "Ikke-fornybar (kull, olje, gass)", value: 8 },
    ],
  },
  {
    id: 5,
    text: "Hvordan varmer du opp boligen din?",
    options: [
      { text: "Varmepumpe / fjernvarme / ved", value: 2 },
      { text: "Elektriske ovner", value: 4 },
      { text: "Olje / gass / fossilt brensel", value: 8 },
    ],
  },
  {
    id: 6,
    text: "Hvor mye matsvinn har du per uke?",
    options: [
      { text: "Nesten ingenting", value: 0 },
      { text: "En liten pose", value: 3 },
      { text: "Flere poser", value: 6 },
    ],
  },
  {
    id: 7,
    text: "Hvordan handler du klær?",
    options: [
      { text: "Brukt / bytte / sjelden nytt", value: 1 },
      { text: "Noen ganger i året", value: 3 },
      { text: "Ofte, fast fashion", value: 7 },
    ],
  },
  {
    id: 8,
    text: "Hva slags mat kjøper du mest?",
    options: [
      { text: "Kortreist / økologisk", value: 1 },
      { text: "Blandet, noe importert", value: 4 },
      { text: "Mest importert og prosessert", value: 7 },
    ],
  },
  {
    id: 9,
    text: "Hvordan kildesorterer du?",
    options: [
      { text: "Alltid og nøye", value: 0 },
      { text: "Av og til", value: 3 },
      { text: "Sjeldent/aldri", value: 6 },
    ],
  },
  {
    id: 10,
    text: "Hvor ofte kjøper du elektronikk (mobil, PC, TV osv.)?",
    options: [
      { text: "Kun når noe er ødelagt (sjelden)", value: 1 },
      { text: "Hvert 2.-3. år", value: 4 },
      { text: "Årlig eller oftere", value: 7 },
    ],
  },
]
