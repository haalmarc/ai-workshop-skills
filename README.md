# AI Skills Workshop Starter

Appen er enkel blogg om matplasser i Oslo.

Den fungerer, men har tydelige forbedringsmuligheter innen UI, UX, accessibility, struktur og komponentdeling. Målet er å ha noe konkret å jobbe på med AI-assisterte workflows.

## Konsept

Appen består av:

- en enkel hero-seksjon
- liste med blogginnlegg
- filtering og søk
- en liten sidekolonne med workshop-spor

Prosjektet er bevisst laget med:

- stor `App.tsx`
- enkel state management
- litt repetisjon
- uferdige empty states
- svakere mobile detaljer
- noen accessibility-mangler
- TODO/FIXME-kommentarer som inviterer til utforsking

## Kom i gang

Forutsetter Node.js installert lokalt, helst Node 20+.

Velg én måte å få Node på:

### `mise`

```bash
mise use node@20
```

### `nvm`

```bash
nvm install 20
nvm use 20
```

Når Node er på plass, start prosjektet:

```bash
pnpm install
pnpm dev
```

For produksjonsbuild:

```bash
pnpm build
```

## Oppgave-forslag

Bruk prosjektet som en lekeplass for AI-assistert iterasjon.

Ta gjerne utgangspunkt i skills fra [Matt Pocock](https://github.com/mattpocock/skills/tree/main). Les hva en skill er godt for, så test ut om du merker forskjell.

Typiske oppgaver:

1. Bruk `prototype` til å redesigne matbloggen.
2. Bruk `grill-me` for å utfordre komponentarkitekturen.
3. Refactor innleggslisten og bryt opp monster-komponenten.
4. Forbedre accessibility i navigasjon, inputs og interaktive elementer.
5. Lag bedre empty states og loading states.
6. Forbedre mobil-layouten.
7. Gjør styling mer konsistent uten å over-engineere.
8. Lag dark mode.
9. Introduser en ny feature, for eksempel best ratet, kartvisning eller kommentarer.
10. Test [playwright-skill](https://playwright.dev/agent-cli/skills) for å lage tester eller automatisk sjekk om ny funksjonalitet fungerer.
