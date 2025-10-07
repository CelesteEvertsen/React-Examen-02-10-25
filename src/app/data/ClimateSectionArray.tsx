
type Theme ={
  section1: string,
  section2:string,
  section3:string,
}
type ClimateActions = {
  id: number;
  theme: string;
  title: string;
  text: string;
  image: string;
  link: string;
  content: Theme;
};
 const ClimateSectionArray: ClimateActions[] = [
  {
    id: 1,
    theme: "Redusere-plastbruk",
    title: "Redusere Plastbruk",
    text: "Kutt ned på engangsplast og bruk gjenbrukbare alternativer i hverdagen.",
    image: "/nick-fewings--2lJGRIY5P0-unsplash.jpg",
    link: "",
    content:{
    section1:"For å redusere plastforbruket kan du velge gjenbrukbare alternativer som tøyposer, vannflasker og kaffekopper, lage mer mat fra bunnen av, velge produkter med lite eller ingen plastemballasje, og bruke gjenbrukbare beholdere til oppbevaring. Du kan også bidra ved å unngå engangsplast som bestikk og ta vare på klær av naturmaterialer for å redusere mikroplastutslipp. ",
    section2:"Ta med egne gjenbrukbare poser: Ha alltid et tøynett eller en sekk lett tilgjengelig for handling og andre ærender. ",
    section3:"Drikk fra egen kopp: Bruk en gjenbrukbar kaffekopp og vannflaske i stedet for engangsflasker og kopper. ",
    }
    },
  {
    id: 2,
    theme: "kollektivtransport",
    title: "Bruke Kollektivtransport",
    text: "Velg buss, tog eller sykkel fremfor bil for å redusere utslipp.",
    image: "/joel-de-vriend-qZ6if8WXl7E-unsplash.jpg",
    link: "",
    content:{
      section1:"Kollektivtransport er bra for miljøet fordi det reduserer klimagassutslipp, forurensning og støy ved å erstatte mange biler med færre, mer effektive kjøretøy. Det frigjør også plass i byene ved å redusere behovet for parkering, samt bidrar til mindre trafikkork og en tryggere trafikksituasjon for alle.  ",
    section2:"Lavere utslipp: Én buss eller tog erstatter mange biler, noe som fører til betydelig lavere utslipp av klimagasser som CO2 og lokal forurensning som NOx per passasjer. ",
    section3:"Redusert støy: Bildekk er en stor kilde til støy, og ved å velge kollektivtransport minskes mengden støy i byene, noe som gir et roligere bomiljø. ",
    } },
  {
  id: 3,
  theme: "Energisparing",
  title: "Energisparing Hjemme",
  text: "Slå av lys og apparater når de ikke brukes, og vurder energieffektive løsninger.",
  image: "/engin-akyurt-in6ssAIw-Uo-unsplash.jpg",
  link: "",
  content:{
    section1: "Energiforbruk i hjemmet står for en stor del av klimagassutslippene. Oppvarming, elektriske apparater og belysning kan ofte bruke mer energi enn vi tror.",
    section2: "Du kan spare energi ved å bruke LED-pærer, slå av lys når du forlater et rom, senke innetemperaturen noen grader, bruke sparedusj og velge energieffektive hvitevarer.",
    section3: "Fordelene er lavere strømregning, lengre levetid på apparater og et mindre klimaavtrykk.",
  },
},
{
  id: 4,
  theme: "matsvinn",
  title: "Kutte Matsvinn",
  text: "Planlegg måltider, oppbevar mat riktig og bruk restemat kreativt.",
  image: "/lorin-both-MZwB9k-MKxE-unsplash.jpg",
  link: "",
  content:{
    section1: "Matsvinn er en av de største kildene til unødvendige utslipp. Når mat kastes, sløses vann, jord og energi som ble brukt i produksjonen.",
    section2: "Planlegg måltider, oppbevar maten riktig, frys ned rester, og bruk alt du har i kjøleskapet før du handler nytt.",
    section3: "Resultatet er mindre avfall, reduserte kostnader og et viktig bidrag til å redusere globale klimagassutslipp.",
  },
},
{
  id: 5,
  theme: "fornybarenergi",
  title: "Bruke Fornybar Energi",
  text: "Installer solcellepanel eller velg strømavtaler som er fornybare.",
  image: "/andrey-andreyev-dh8ONmfQyQQ-unsplash.jpg",
  link: "",
  content:{
    section1: "Fornybar energi som sol, vind og vannkraft er bærekraftige alternativer til fossile energikilder.",
    section2: "Du kan installere solcellepaneler hjemme, eller velge en strømleverandør som tilbyr 100% fornybar energi.",
    section3: "Fordelene er renere energi, mindre CO₂-utslipp og en investering i framtidens energisystem.",
  },
},
{
  id: 6,
  theme: "gronnteknologi",
  title: "Støtte Grønn Teknologi",
  text: "Invester i bedrifter og produkter som satser på bærekraft.",
  image: "/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
  link: "",
  content:{
    section1: "Grønn teknologi bidrar til å utvikle løsninger som gjør hverdagen mer bærekraftig, fra transport til energibruk.",
    section2: "Du kan støtte dette ved å kjøpe miljøvennlige produkter, bruke klimavennlige apper og investere i selskaper med grønne løsninger.",
    section3: "Ved å velge grønn teknologi bidrar du til å drive utviklingen framover og skape etterspørsel etter bærekraftige løsninger.",
  },
},
{
  id: 7,
  theme: "BeplantningOgSkogvern",
  title: "Beplantning og skogvern",
  text: "Plant trær og støtt prosjekter som bevarer skog og natur.",
  image: "/andrew-coelho-aL7SA1ASVdQ-unsplash.jpg",
  link: "",
  content:{
    section1: "Skoger binder store mengder karbon og er avgjørende for å bremse global oppvarming. Avskoging er en stor trussel.",
    section2: "Du kan bidra ved å plante trær i hagen, støtte organisasjoner som verner regnskogen, eller delta i lokale skogplantingsprosjekter.",
    section3: "Fordelene er bedre luftkvalitet, sterkere biologisk mangfold og en direkte innsats mot klimakrisen.",
  },
},
{
  id: 8,
  theme: "transport",
  title: "Kutte Flyreiser",
  text: "Velg tog eller buss på kortere reiser, og reis mindre med fly.",
  image: "/fotis-FBqmfeqN3Lw-unsplash.jpg",
  link: "",
  content:{
    section1: "Flyreiser har svært høye CO₂-utslipp per passasjer sammenlignet med andre transportmidler.",
    section2: "Bruk tog eller buss til innenlandsreiser, vurder videomøter fremfor jobbreiser, og reis sjeldnere med fly.",
    section3: "Ved å redusere flyreiser senker du ditt personlige klimaavtrykk betydelig, og bidrar til grønnere transportvalg.",
  },
},
{
  id: 9,
  theme: "gjenbruk",
  title: "Gjenbruk og Resirkulering",
  text: "Gi klær, møbler og elektronikk nytt liv gjennom gjenbruk og resirkulering.",
  image: "/ocg-saving-the-ocean-xch7jXAaqqo-unsplash.jpg",
  link: "",
  content:{
    section1: "Produksjon av nye varer krever ressurser og energi, mens gjenbruk forlenger levetiden til det vi allerede har.",
    section2: "Lever klær og møbler til gjenbruk, reparer ødelagte ting, og sorter avfall slik at materialer kan resirkuleres.",
    section3: "Fordelene er mindre avfall, lavere forbruk og en sirkulær økonomi som sparer både penger og miljø.",
  },
},
{
  id: 10,
  theme: "kosthold",
  title: "Spise Mer Plantebasert",
  text: "Bytt ut kjøttretter med plantebaserte alternativer for lavere CO₂-avtrykk.",
  image: "/alexandr-podvalny-WOxddhzhC1w-unsplash.jpg",
  link: "",
  content:{
    section1: "Kjøttproduksjon står for store utslipp av klimagasser, særlig storfe på grunn av metan og arealbruk.",
    section2: "Prøv å innføre kjøttfrie dager, lag plantebaserte retter med belgfrukter, nøtter og grønnsaker, og velg alternativer til melk og kjøtt.",
    section3: "Fordelene er lavere klimafotavtrykk, bedre helse og et mer variert kosthold.",
  },
},

];
export default ClimateSectionArray