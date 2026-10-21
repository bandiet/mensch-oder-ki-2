# Mensch oder KI? 2.0 — Vishing- & Deepfake-Challenge im Serienformat (CCT)

Nieuw product naast het prototype `../MenschOderKI` (dat blijft ter vergelijking staan). Zelfde gesprekken, stemmen en video's, maar in het format van de **Phishing Challenge 2.0** (`Phishing Challenge 2.0/PhishingChallengeOpus`): zelfde kleuren, systeemlettertype, pilknoppen, kaarten, HUD, sterrenvlucht op de start, level-start ("Bereit für Level X?"), level-auswertung met halve-cirkelmeter en een eindscherm in dezelfde stijl. Geen jokers en geen streaks: de enige score is de **buit van de hacker** (hoe minder, hoe beter).

## Verloop

Start (titel, golf Mensch→Maschine, vliegende symbolen) → intro (deepfake-werkbank, ongewijzigd) → **Level 1: 4 audiogesprekken** (c1, c3, c2, c4) → level-auswertung → sicherheitstipp ("Und wenn du dir nicht sicher bist?") → **Level 2: videogesprekken** (c5 CEO via WhatsApp-video, c6 Teams-sollicitant) → level-auswertung → eindauswertung.

Gesprekscherm: links het toestel (telefoon of Teams), rechtsboven de situatie, daaronder de live-ondertitels, de antwoorden en het oordeel (ECHT mint / FAKE koraal, zoals de antwoordknoppen in de serie). Feedback als kaart over alles heen.

## Starten

`python3 serve.py 8812` (launch-config `menschoderki2`). Testsprongen: `#intro`, `#l1`, `#l2`, `#anruf1` … `#anruf6`, `#e1`, `#e2`, `#pause`, `#ende`.

## Bestanden

| Bestand | Inhoud |
|---|---|
| `js/content.js` | alle teksten; `anrufe` in speelvolgorde, `levels` (aantal gesprekken per level), `levelIntro`, `levelEnde`, `pause` (sicherheitstipp) |
| `js/app.js` | verloop: start, intro, levels, gesprekken, oordeel, feedback, level-auswertung, eindscherm |
| `js/klang.js` | Web Audio (muziek, stemmen door de lijnfilters, beltonen, synth-geluiden) |
| `js/feier.js` | confetti (overgenomen uit de Phishing Challenge) |
| `css/style.css` | serielook bovenaan; telefoon/Teams/video/ondertitels/feedback uit het prototype, met de serie-kleuren |
| `tools/bouw-artifact.py` | bouwt `dist/artifact` en `dist/site` (Cloudflare-worker `mensch-oder-ki-2`) |

Een nieuw videogesprek voor level 2 kan als extra item in `anrufe` (vóór c5) met `levels[1].anzahl` + 1.
