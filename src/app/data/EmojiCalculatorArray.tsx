interface Emoji {
  id: number;
  emoji: string;
  description: string;
  value: number;
}

export const EmojiEnviromentChoices: Emoji[] = [
  { id: 1, emoji: "🚗", description: "Bil", value: 10 },
  { id: 2, emoji: "🚋", description: "Trikk", value: 5 },
  { id: 3, emoji: "🚲", description: "Sykkel", value: 2 },
  { id: 4, emoji: "🚶‍♀️", description: "Gå", value: 1 },
  { id: 5, emoji: "🗑️", description: "Bruk og kast", value: 8 },
  { id: 6, emoji: "♻️", description: "Resirkulering", value: 2 },
  { id: 7, emoji: "🌱", description: "Plantebasert Kosthold", value: 1 },
  { id: 8, emoji: "🌍", description: "klimabevist", value: 0 },
  { id: 9, emoji: "💡", description: "Lavt Energibruk)", value: 4 },
  { id: 10, emoji: "🍽️", description: "Spiser hva som helst", value: 6 },
  {
    id: 11,
    emoji: "🚨",
    description: "Global oppvarming finnes ikke",
    value: 100,
  },
];