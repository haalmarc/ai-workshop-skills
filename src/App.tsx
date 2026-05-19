import { useMemo, useState } from "react";

type Innlegg = {
  id: number;
  tittel: string;
  sted: string;
  bydel: string;
  kategori: string;
  prisnivaa: "Billig" | "Middels" | "Litt dyrt";
  rating: number;
  ingress: string;
  tekst: string;
  publisert: string;
};

const innlegg: Innlegg[] = [
  {
    id: 1,
    tittel: "Beste nudler på Grønland?",
    sted: "Koie Ramen",
    bydel: "Grønland",
    kategori: "Asiatisk",
    prisnivaa: "Middels",
    rating: 4.6,
    ingress: "Et lite sted med raske nudler, høy lyd og veldig trygg smak.",
    tekst:
      "Perfekt på en kald dag, men lokalet er litt trangt. TODO: Legg til bilder eller galleri per innlegg.",
    publisert: "14. mai 2026",
  },
  {
    id: 2,
    tittel: "Pizza på løkka uten å betale altfor mye",
    sted: "Lillo Pizza",
    bydel: "Grunerlokka",
    kategori: "Pizza",
    prisnivaa: "Billig",
    rating: 4.2,
    ingress: "En enkel favoritt for kvelder der man vil ha noe ukomplisert.",
    tekst:
      "Bra bunn, litt tilfeldig service. FIXME: Rating vises bare som tall og burde kanskje være stjerner.",
    publisert: "11. mai 2026",
  },
  {
    id: 3,
    tittel: "Kaffe og sandwich ved Youngstorget",
    sted: "Fuglen Mini",
    bydel: "Sentrum",
    kategori: "Kafe",
    prisnivaa: "Litt dyrt",
    rating: 4.8,
    ingress:
      "Mer kafe enn lunsjsted, men fint hvis du vil jobbe litt samtidig.",
    tekst:
      "Rolig stemning og pen servering. TODO: Kanskje filtrere pa best ratet senere.",
    publisert: "8. mai 2026",
  },
  {
    id: 4,
    tittel: "Taco i sentrum som faktisk er verdt turen",
    sted: "Torggata Taqueria",
    bydel: "Sentrum",
    kategori: "Mexicansk",
    prisnivaa: "Middels",
    rating: 4.4,
    ingress: "Litt rotete lokale, men maten kommer fort og smaker mye.",
    tekst:
      "Et godt eksempel pa et sted man vil anbefale, men kanskje ikke bruke som designreferanse.",
    publisert: "4. mai 2026",
  },
  {
    id: 5,
    tittel: "Bakst og kaffe pa Majorstua",
    sted: "Godt Brot",
    bydel: "Majorstua",
    kategori: "Bakst",
    prisnivaa: "Middels",
    rating: 4.1,
    ingress:
      "Bra for en rolig start pa dagen, mindre bra hvis du er veldig sulten.",
    tekst:
      "Kunne hatt bedre informasjon om allergener. FIXME: Appen mangler tydelige kategorietiketter.",
    publisert: "1. mai 2026",
  },
];

const bydeler = ["Alle", "Grønland", "Grunerlokka", "Sentrum", "Majorstua"];

function App() {
  const [sok, setSok] = useState("");
  const [valgtBydel, setValgtBydel] = useState("Alle");

  const filtrerteInnlegg = useMemo(() => {
    return innlegg.filter((post) => {
      const matcherSok =
        sok.trim().length === 0 ||
        post.tittel.toLowerCase().includes(sok.toLowerCase()) ||
        post.sted.toLowerCase().includes(sok.toLowerCase()) ||
        post.kategori.toLowerCase().includes(sok.toLowerCase());

      const matcherBydel = valgtBydel === "Alle" || post.bydel === valgtBydel;

      return matcherSok && matcherBydel;
    });
  }, [sok, valgtBydel]);

  const toppvalg = [...innlegg].sort((a, b) => b.rating - a.rating)[0];

  return (
    <div className="blog-shell">
      <header className="blog-hero">
        <p className="eyebrow">Matblogg for workshop</p>
        <h1>Oslo spiser</h1>
        <p className="hero-copy">
          En enkel blogg om matplasser i Oslo. Koden fungerer, men den er med
          vilje ikke helt ferdig.
        </p>

        <div className="hero-grid">
          <div className="card featured-card">
            <p className="panel-label">Ukens anbefaling</p>
            <h2>{toppvalg.sted}</h2>
            <p>
              {toppvalg.bydel} · {toppvalg.kategori} · {toppvalg.rating} / 5
            </p>
            <p className="task-notes">{toppvalg.ingress}</p>
          </div>

          <div className="card notes-card">
            <p className="panel-label">Mulige oppgaver</p>
            <ul className="activity-list">
              <li>Legg til seksjon for best ratet</li>
              <li>Forbedre tomtilstander og søk</li>
              <li>Gjør kortene mer konsekvente</li>
              <li>Forbedre tilgjengelighet og semantikk</li>
            </ul>
          </div>
        </div>
      </header>

      <section className="toolbar card">
        <div className="toolbar-group search-group">
          <p className="panel-label">Søk</p>
          <input
            value={sok}
            onChange={(event) => setSok(event.target.value)}
            placeholder="Søk etter sted, kategori eller innlegg"
          />
        </div>

        <div className="toolbar-group">
          <p className="panel-label">Bydel</p>
          <select
            value={valgtBydel}
            onChange={(event) => setValgtBydel(event.target.value)}
          >
            {bydeler.map((bydel) => (
              <option key={bydel} value={bydel}>
                {bydel}
              </option>
            ))}
          </select>
        </div>
      </section>

      <main className="blog-layout">
        <section className="posts-column">
          {filtrerteInnlegg.map((post) => (
            <article className="card post-card" key={post.id}>
              <div className="task-meta-row">
                <span className="pill pill-neutral">{post.kategori}</span>
                <span className="muted-text">{post.publisert}</span>
              </div>
              <h2>{post.tittel}</h2>
              <p className="muted-text">
                {post.sted} · {post.bydel} · {post.prisnivaa} · {post.rating} /
                5
              </p>
              <p>{post.ingress}</p>
              <p className="task-notes">{post.tekst}</p>
            </article>
          ))}

          {filtrerteInnlegg.length === 0 && (
            <div className="empty-hint">
              <strong>Ingen innlegg matcher.</strong>
              <p>TODO: Lag en bedre tomtilstand med forslag til neste steg.</p>
            </div>
          )}
        </section>

        <aside className="card side-card">
          <p className="panel-label">Om prosjektet</p>
          <h2>Bevisst litt rotete</h2>
          <p className="task-notes">
            Denne appen er laget for AI-assistert iterasjon. Et godt
            utgangspunkt for redesign, refaktorering og diskusjon.
          </p>
          <ul className="activity-list">
            <li>TODO: Del opp App-komponenten</li>
            <li>FIXME: Filter og søk kunne hatt bedre labels</li>
            <li>TODO: Legg til best ratet-seksjon</li>
            <li>FIXME: Mobilvisningen er fortsatt litt svak</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default App;
