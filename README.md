# Mitt svar på case fra Amedia

Jeg har forsøkt å lage en forside for en nettavis. Oppsettet som brukes i form av Amedia komponenter var litt for avansert for meg å forstå på kort tid, så jeg har valgt å utføre oppgaven tradisjonelt direkte i JS, og pretty straight forward hacked up HTML. Jeg skrev dette direkte i `renderPreview` i filen `preview.view.js`, og forstår at det ikke er riktig practice, men det ble sånn denne gangen.

## Start av prosjekt

PS! Du må ha Node versjon 18 for å kjøre applikasjonen.

- Installer avhengigheter med `npm install` og kjør opp serveren med `npm run dev-start`

## Hva prosjektet gjør

Enkel presentasjon av saker hentet fra dette API-et: https://services.api.no/api/acpcomposer/v1.1/search/content/?publicationDomain=www.ba.no&sort=lastPublishedDate&types=story

Bildet og tittel hentes ut, samt lenke til artikkelen.