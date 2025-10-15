destruction: 
https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
https://www.w3schools.com/react/react_props_destructuring.asp

Iconer brukt er fra: https://react-icons.github.io/react-icons/

Navigasjon: delte det inn i Desktop og mobile/tablet. syntes det var lettere å holde styr på.

Emisson: https://www.worldometers.info/co2-emissions/co2-emissions-per-capita/

Bilder:https://unsplash.com/

Props: https://scrimba.com/ https://react.dev/learn/passing-props-to-a-component  og GA

Confetti: npm install react-confetti.. lærte dette på scrimba.com tenke det var gøy å ha med

hvordan gjøre strings fra localstorage om til Numbers igjen. da det blir lagret som string og det gikk ikke å bruke parsint: 

kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

string til number:
https://www.freecodecamp.org/news/how-to-convert-a-string-to-a-number-in-javascript/
string til boolen: https://www.freecodecamp.org/news/javascript-string-to-boolean/




# TypeScript:
Implemetrer typscript, her bruker jeg det vi har lært på GS og hovret over det jeg fikk rød strek under, der viste VS-code/Typscript hva de forventer og det hjalp meg å løse enkelte bugs.

interface Props{ 
  Emoji: {
  id: number;
  emoji: string;
  description: string;
  value: number;
}[]}
Denne type setup(kun eksempel) bruker jeg i filer som bruker props, dette er en represantasjon av at det forventes å få inn en liste med Objecter. Data som kommer utenfra filen. I dette prosjektet blir det hentet i MAPPEN data

## Layout.tsx
Har ikke endret på dette, lot den være som den var når jeg installerte next med react, slik at jeg kunne beholde font og andre deler av CSS.

### Mappe struktur:
- Grunnen til at mappe navnene ikke har alle Norske navn, er da vi har blitt lært at oppgave alltid skal være på engelsk. Med untakk av strings.
Jeg valgte å ha noen av mappa navne på norsk da til påvirker URL navnt, samt at det ga også mening å ha de pånorsk slik at man får ett hvis inntrykk på hvilken del av oppgaven er hvor.

### Componenter: 
Her er det delt inn i undermapper for en fin fordelig i de ulike delene av del oppgaven.



# Header og footer 
to separate komponeter som kalles på inne i layout.tsx(globalt) slik at de alltid er synlige uansett om man lager ny side eller ikke.
De ligger løst i component-mappen da jeg ikke kom på en god mappe å kunne legge de inn i.


## navigasjon
I navigasjon mappen finner man logikken for mobil og nettbrett inne i MobileandTabletMenu.tsx. Her bruker jeg state for å lage en toggle funksjonalitet, den jobber sammen med CSS, slik at om noe er True eller false, vi navigasjonen være åpen eller ikke.
I css styres dette av .toogle{display:none} linje 11-13 i ./MobileAndTabletMenu.module.css

Jeg har også installert Iconer brukt er fra: https://react-icons.github.io/react-icons/, her bruker jeg  RxEyeOpen og RxEyeClosed for å gi en litt gøy effekt som åpner og lukker øyne.
npm i react-icons

<Link/> legges inn i en liste i navigasjonen, slik at det er mulig å klikke seg til seksjon for verstingene og kalkulator.

I DesktopMenu.tsx er navigasjonen for desktop satt i en <nav> og videre strukturert som en liste der <LINK/> omslutter lister. her skal det også være mulig forbrukeren å kunne navigerer til de ulike delene av nettsiden.

<MobileAndTabletMenu/> og  <DesktopMenu/> komponentene kalles på inne i Header.tsx, der CSS styrer i hvilken skjerm størrelse de skal være synlige. Header.tsx komponentet brukes i layout.tsx som ligger i rootmappen/app.

## homePage
Baktanke på navne er at det er komponentet som er synlig i selve hovedsiden. "Under the fold". her finner vi komponentet ClimateSection.
# ClimateSection.
Arrayet som benyttes i denne løsningen finner sted inne i data mappen, under navnet ClimateSectionArray.tsx
Her bruker jeg map() med destruction for å kunne kutte ned på koden noe. synes også det er lettere å lese koden når jeg bruker destruction.
Her har jeg også brukt props, for å definerer hvordan jeg ønsker at arrayet skal bli strukturert. 
Jeg kaller kun på komponentet med props engang inne i app/page.tsx 
Basert på min forstålese på det som står i https://react.dev/learn/passing-props-to-a-component, kan props være mye mer detaljert en slik jeg har gjort det. Men jeg syntes at det hadde blitt en veldig lang kode om jeg skulle ha definert det med samme metode slik som react. 
Mitt intrykk var at da måtte jeg kalle på komponetet 10x og legge inn bildene manuelt. Syntes det ga mer mening for meg å kunne lage en props, der jeg kaller på arrayet inne i app/page.tsx.

Om dette er den beste måten, det tror jeg ikke, men det er sånn jeg fikk det til å gi mening for meg. håper det gir mening for deg.

Første utfordring møtte jeg på, når jeg skulle lage dynamisk routing. Her syntes jeg det var rat at første tanken som kom i hode mitt var at jeg skulle lage 10 paga.tsx..  Inne på GA var det en enkel og forklarene video på hvordan dette skulle gjøre. Å da gikk det veldig greit.
Her må man også bruke props for å kunne sende informasjon videre til neste komponent. 
Bruker tamplate litterals der jeg legger inne href={`climatetheme/${theme}`} for å navigere til ny side og at informasjonen i arrayet skal vises der.
# climatetheme/[theme]
[theme] er det som gjør det dynamisk, slik at når brukeren klikker på en section at riktig informasjon blir vist basert på theme. Dette sendes params som er next sin måte å bruke dynamisk rounting.
Dispay av infor er kun bilde og section som blir presenater i ny side.


## charts
Her ligger  komponenter for table og chart, som kalles på inne i EmissionMain ved bruk av props
# TableEmission.tsx
Her brukte jeg tables for å sette opp tabellen, slik vi tidligere har lært i HTML.
Største buggen for meg her var whitspace, her fikke jeg klage av NEXT at det var whitespace mellom  <th> taggen, koden funket, med det var en klage som komme noen ganger.
Dette ble fikset ved å fjerne space. fra: <th> Country</th> til <th>Country</th>
# ChartEmission.tsx
Hentet inspirasjon og informasjon om hvordan lage chart fra  kilde: https://recharts.org/en-US  Har ikke så mye å si her, var veldig rett frem etter å ha lest litt i dokumentasjonen til reCgart.
trengte ikke mye CSS da  <ResponsiveContainer/> gjør det responsivt.

# EmissionMain
Bruker state for å gi funksjonalitet til  knapper, slik at det er mulig for brukeren å navigerer mellom table og chart. 
useState <"table" | "chart">("table") denne snutte sørger for at siden starter i tables.

Hva gjør komponnetet?
Viser tabel og graf for høyCo2 utslipp

## calculator
finner du filene CalculatorMain.tsx, QuizResults.tsx, QuizCalculator.tsx og EmojiCalculator.tsx 
# CalculatorMain
I CalculatorMain.tsx er hvor QuizCalculator og EmojiCalculator blir displayet, de kalles også på inne her ved hjelp av knapper som bruker state for å toggle mellom emjiCalculator og quizCalculator. Samme funksjonalitet som i charts.
Her blir kalt med props.

# EmojiCalculator (TILLEGS FUNKJSONALITET)
Dette er en interaktiv kalkulator med emojis, der hver emoji har en verdi. Tenkte det var en morsom  tilleggsfunksjonalitet. Emoji representerer klimavalg brukeren tar, for hvert valg plusser den sammen brukeren valg.
I state const [value, setValue] = useState<number[]>([]); lagres tallene som brukeren trykker på. handleClik sørger for å legge til de nye tallet i value ved click.
const valueDisplay = value.join(" + ") er kun for å få en visuel representasjon av at det blir plusset sammen.
Selve utregningen blir gjort med .reduce() --> const total = value.reduce((total, value) => total + value, 0)
handleRemove gjør det mulig å eliminerer ALT og handleEsc gir muigheten til å kun fjerne det siste elementet fra arrayt. dette ved bruke av .slice(0,-1)

hva gjør komponente?
skal illustrer en kalkulator, der brukern kan regne seg frem til en totalt verdi.

# QuizCalculator
Ønsker å starte med utfordringe her, da det var denne delen av oppgaven som var mest krevende for meg. 
Jeg lagrer brukeren valg i localstorage, grunnen til det er da jeg ikke følte meg helt trykk på zustand enda. Første bug jeg møtte på var at jeg ikke hadde localStorage i en useEffect.
Dette førte til en evig loop og siden krasjet, fra mine Javascript erfaring så har ikke det skjedd før. Men  her i react hvergang state blir oppdater, så kjører hele komponente på nytt.
Vi lærte at useEffect kun trigges når det skjer nye endringer, så det som er trygt inne i Effect ikke havnrer i en loop. 
Måten jeg debugget det på var å fjerne lagring i localStorage, for det var etter jeg la det til at siden stoppa. 
Prøvde meg frem med useEffect også fjernet det buggen. 

Utfordring to
Når brukeren endret svar, la den til poeng på det som allerene var valgt. Valgte brukeren et svar med verdig 5 og ønsket å bytte svar til en med verdi 10, ble det lagt til 5+10.
Dette for meg var en teit bug som ga  dårlig bruker opplevelse. 
satt litt fast med denne, da jeg ikke helt kom frem til om jeg måtte sammenlige value med value. eller id med id, men svar alternativene har ikke id, så jeg ble velig forvirret
Om jeg klarer å finne nå værende spm sin ID 

Hva gjør komponetet?
Formålet med kmponentet er å gi brukeren mulighet til å svare på klimarelaterte spørsmål, der hvert svarsalternativ har en verdi, denne verdigen legges sammen og vil gi brukeren til totalt verdi på slutten av quizen. Dette vil sammenlignes med en gjennomsnitverdi.
Det skal være mulgi forbrukren å kunne hoppeover, byttesvar og/eller går tilbake til tidligere spm.
Resultatne som samles i denne quizen vises så i QuizResults.tsx
Informajsonen lagres i localstorage.



# QuizResults
Her henter jeg det som er lagret i localstorage og konverterer det tilbake til number og boolean, sli at typescript er fornøyd.
kilde: /* kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
    https://www.freecodecamp.org/news/javascript-string-to-boolean/*/
    her vises totalt poeng fra QuizCalculator komponentet, og sammenligner det med avrage fra samme array.

    handleRstart, nullstiller Sate og fjerne fra localStorage








