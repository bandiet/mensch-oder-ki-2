/* ------------------------------------------------------------
   Mensch oder KI? — alle Texte, Abläufe und Zahlen.
   Gesprochene Zeilen: `tts` ist exakt der Text, der bei
   ElevenLabs (eleven_v3) eingesprochen wurde; die Untertitel
   entstehen daraus, indem die [Regieanweisungen] wegfallen.
   Wer eine Zeile ändert, muss die Aufnahme neu erzeugen
   (gleicher Dateiname in assets/stem/).
   ------------------------------------------------------------ */
window.CONTENT = {
  titel: 'Mensch oder KI?',
  untertitel: 'Die Vishing- & Deepfake-Challenge',
  marke: 'Cyber Crime Time',

  start: {
    titel: 'Mensch oder KI?',
    knopf: 'Challenge starten',
    kern: 'Sechs Anrufe, sechs Entscheidungen: Sprichst du mit einem echten Menschen – oder mit einer KI, die dich hereinlegen will?',
    fakten: ['6 Anrufe in 2 Levels', 'Mit Ton – am besten mit Kopfhörern', 'Jeder Fake, der dich täuscht, füllt die Kasse des Hackers']
  },

  /* Intro ohne Stimme: eine Deepfake-Werkbank bei der Arbeit, dann Stille, dann klingelt es. */
  intro: {
    kopf: 'deepfake-kit · bereit',
    beats: [
      { art: 'audio', gross: '3 Sekunden Audio.', klein: 'Mehr braucht es nicht.', ergebnis: 'Stimme geklont' },
      { art: 'foto', gross: '1 Foto.', klein: 'Mehr braucht es nicht.', ergebnis: 'Gesicht animiert' },
      { art: 'frage', gross: 'Echt oder Fake?', klein: 'Hören kannst du den Unterschied nicht mehr.' },
      { art: 'du', gross: 'Du entscheidest.', klein: 'Sechs Anrufe. Hör genau hin. Hak nach.' },
      { art: 'ring', gross: 'Gleich klingelt dein Telefon.' }
    ],
    foto: 'assets/intro-gesicht.jpg',
    skip: 'Überspringen'
  },

  hud: {
    titel: 'Cyber Crime Awareness · Mensch oder KI?',
    level: 'Level',
    anruf: 'Anruf',
    beute: 'Hacker-Beute',
    untertitel: 'Untertitel',
    ton: 'Ton'
  },

  telefon: {
    eingehend: 'Eingehender Anruf',
    eingehendVideo: 'Eingehender Videoanruf',
    annehmen: 'Annehmen',
    ablehnen: 'Ablehnen',
    ablehnenTipp: 'Heute gehst du ran – auflegen kannst du jederzeit.',
    auflegen: 'Auflegen',
    duSagst: 'Du sagst …',
    beendet: 'Anruf beendet',
    verbindungWeg: 'Verbindung unterbrochen',
    instabil: 'Instabile Verbindung',
    schwach: 'Schwache Verbindung',
    kameraAus: 'Kamera aus',
    lage: 'Lage',
    weiterhoeren: 'Nochmal hören'
  },

  urteil: {
    frage: 'Mensch oder KI?',
    sub: 'Was steckt hinter diesem Anruf?',
    echt: { titel: 'ECHT', text: 'Ein Mensch mit echtem Anliegen' },
    fake: { titel: 'FAKE', text: 'KI-Betrug – auflegen & prüfen' }
  },

  feedback: {
    entlarvt: { stempel: 'Entlarvt', titel: 'Fake erkannt!' },
    getaeuscht: { stempel: 'Getäuscht', titel: 'Reingelegt!' },
    echtErkannt: { stempel: 'Echt', titel: 'Richtig – der Anruf war echt.' },
    fehlalarm: { stempel: 'Fehlalarm', titel: 'Der Anruf war echt.' },
    zuSpaet: { stempel: 'Zu spät', titel: 'Richtig erkannt – aber zu spät.' },
    fehlalarmSub: 'Kein Schaden: Lieber einmal zu viel geprüft als einmal zu wenig. Aber hier sprach vieles für einen echten Anruf.',
    aufgelegtFake: 'Du hast früh aufgelegt – bei einem Fake genau richtig. Auflegen ist immer erlaubt.',
    aufgelegtEcht: 'Du hast früh aufgelegt. Bei einem echten Anruf kein Drama: Du kannst über die bekannte Nummer zurückrufen.',
    kern: 'Das Entscheidende',
    signaleFake: 'Warnsignale',
    signaleEcht: 'Was für echt sprach',
    antippen: 'antippen für Details',
    zuege: 'Deine Züge',
    tipp: 'Das schützt dich',
    weiter: 'Nächster Anruf',
    zurAuswertung: 'Zur Auswertung',
    zurLevelAuswertung: 'Zur Level-Auswertung',
    beute: 'Hacker-Beute',
    beuteNull: 'leer ausgegangen',
    kasse: 'In der Kasse:',
  },


  /* ---------------- die sechs Anrufe (Reihenfolge = Spielreihenfolge; Level siehe unten) ---------------- */
  anrufe: [
    {
      id: 'c1',
      echt: false,
      kanal: 'whatsapp',           // WhatsApp-Audioanruf auf dem Handy
      geraet: 'phone',
      stimme: 'aTTiK3YzK3dXETpuDE2h', // Ben
      klang: 'messenger',           // leichte Telefonfärbung
      atmo: null,                   // auffällig still
      klingel: 'messenger',
      zeit: 'Samstag, 23:14',
      storyTitel: 'Jonas? Von dieser Nummer?',
      lage: 'Dein Bruder Jonas ist in Italien im Urlaub, sein Instagram ist voller Strandvideos. Kurz vor Mitternacht: ein WhatsApp-Anruf von einer unbekannten Nummer.',
      anrufer: { name: '+39 351 448 2097', zeile: 'WhatsApp-Audio · Italien', initialen: '?', farbe: '#5B6B8C' },
      start: { id: 'c1_0', tts: '[panicked] Hey, ich bin’s, Jonas! Bitte leg nicht auf! Mein Handy ist weg, ich ruf von ’nem fremden Handy an… [breathing heavily] Ich hatte ’nen Unfall mit dem Roller. Mir ist nichts passiert, aber das Auto von dem Mann ist total kaputt. Die Polizei ist hier und sagt, ich muss sofort achthundert Euro Kaution zahlen, sonst nehmen die mich mit. Kannst du mir das schicken? Bitte, jetzt gleich! [pause]' },
      runden: [
        [
          { text: 'Oh nein! Wohin soll ich das Geld schicken?', wert: 'riskant', kommentar: 'Du warst sofort bereit zu zahlen – genau darauf setzt der Schockanruf.',
            antwort: { id: 'c1_1a', tts: '[relieved] Danke, danke! Der Polizist hier gibt mir gleich ’ne Kontonummer. Mach bitte ’ne Echtzeitüberweisung, dann ist das Geld sofort da. Aber beeil dich, die werden hier echt ungeduldig! [pause]' } },
          { text: 'Moment. Wie hieß Omas Katze?', wert: 'gut', kommentar: 'Starke Kontrollfrage: Er konnte sie nicht beantworten und hat nur mehr Druck gemacht.',
            antwort: { id: 'c1_1b', tts: '[frustrated] Was?! Ich steh hier mit der Polizei und du willst ein Quiz machen?! [sighs] Keine Ahnung, ich bin total durch… Bitte, ich brauch das Geld jetzt, nicht in ’ner Stunde! [pause]' } }
        ],
        [
          { text: 'Okay. Schick mir die Kontodaten.', wert: 'riskant', kommentar: 'Fast geschafft – für den Betrüger. Und „Sag Mama nichts“ sollte dich isolieren.',
            antwort: { id: 'c1_2a', tts: '[relieved] Danke! Ich schick dir alles per WhatsApp. Und… bitte sag Mama nichts, okay? Die flippt sonst total aus. Ich meld mich! [pause]' } },
          { text: 'Ich leg auf und ruf dich auf deiner normalen Nummer an.', wert: 'gut', kommentar: 'Genau richtig: Rückruf über die bekannte Nummer. Der Anrufer wollte das um jeden Preis verhindern.',
            antwort: { id: 'c1_2b', tts: '[panicked] Nein, nein, nicht auflegen! Mein Handy ist doch weg, da erreichst du mich nicht! Bitte, die nehmen mich sonst mit… [pause]' } }
        ]
      ],
      signale: [
        { art: 'rot', titel: 'Unbekannte Nummer, „Handy weg“', text: 'Der klassische Einstieg beim Schockanruf: So erklärt der Betrüger, warum er nicht von Jonas’ Nummer anruft.' },
        { art: 'rot', titel: 'Angst und extremer Zeitdruck', text: '„Jetzt gleich“, „sonst nehmen die mich mit“ – Panik soll verhindern, dass du nachdenkst.' },
        { art: 'rot', titel: 'Geld per Echtzeitüberweisung', text: 'Keine Polizei der Welt kassiert Kaution per Überweisung an ein Konto, das dir am Telefon genannt wird. Echtzeitüberweisungen lassen sich kaum zurückholen.' },
        { art: 'rot', titel: 'Weicht der Kontrollfrage aus', text: 'Statt zu antworten, macht er mehr Druck. Echte Angehörige kennen Omas Katze.', wenn: 'c1_1b' },
        { art: 'rot', titel: '„Sag Mama nichts“', text: 'Geheimhaltung isoliert dich – niemand soll dir raten, erst einmal nachzuprüfen.', wenn: 'c1_2a' },
        { art: 'rot', titel: 'Kein Rückruf erlaubt', text: 'Wer wirklich in Not ist, hat nichts gegen einen Rückruf über einen bekannten Weg – oder über seine Freunde vor Ort.', wenn: 'c1_2b' },
        { art: 'info', titel: 'Die Stimme klang echt', text: 'Jonas’ Strandvideos liefern genug Material für einen Stimmklon. Auch die verdächtige Stille im Hintergrund – angeblich mitten im Unfallchaos – ist nur ein schwacher Hinweis. Verlass dich nicht auf dein Ohr.' }
      ],
      kern: 'Unbekannte Nummer, Panik, Geld sofort – und ein Rückruf ist „nicht möglich“. Das ist das Muster des Schockanrufs, egal wie echt die Stimme klingt.',
      tipp: 'Auflegen. Jonas über seine bekannte Nummer anrufen – oder jemanden, der bei ihm ist. Vereinbart in der Familie ein Codewort für echte Notfälle.',
      hacker: { reingelegt: '800 € für ein paar Sekunden Instagram-Audio. Lohnt sich!', erwischt: 'Mist. Die Stimme war doch perfekt …' },
      beute: 800,
      beuteText: '800 € Kaution'
    },

    {
      id: 'c3',
      echt: false,
      kanal: 'teams',
      geraet: 'teams',
      extern: true,
      stimme: 'qVRpsZJDV29g1CIPzssm', // Sebastian
      klang: 'teams',
      atmo: 'helpdesk',
      klingel: 'teams',
      zeit: 'Montag, 9:40',
      storyTitel: 'Was ist mit meinem Postfach los?',
      lage: 'Seit 9 Uhr fluten Hunderte Spam-Mails dein Postfach. Du kommst kaum hinterher. Da klingelt Teams: der „IT-Helpdesk“.',
      anrufer: { name: 'IT-Helpdesk Support', zeile: 'it-helpdesk-support.onmicrosoft.com', initialen: 'IT', farbe: '#4A55C9', badge: 'Extern' },
      start: { id: 'c3_0', tts: 'Hallo, hier ist Marcel vom IT-Helpdesk. Wir sehen gerade, dass Ihr Postfach mit Spam regelrecht bombardiert wird – haben Sie sicher schon gemerkt. Das ist ein laufender Angriff, da sind mehrere Kollegen betroffen. Ich würde das gern sofort für Sie filtern, bevor da was Schlimmeres reinrutscht. Haben Sie zwei Minuten? [pause]' },
      runden: [
        [
          { text: 'Ja, bitte! Was muss ich tun?', wert: 'riskant', kommentar: 'Verständlich nach der Spam-Flut – genau dieses Gefühl nutzt der Angreifer aus.',
            antwort: { id: 'c3_1a', tts: 'Super. Drücken Sie bitte einmal die Windows-Taste und tippen Sie „Remotehilfe“ ein. Ich gebe Ihnen gleich einen Code, dann schalte ich mich kurz auf Ihren Rechner. Dauert keine fünf Minuten. [pause]' } },
          { text: 'Gibt’s dazu ein Ticket? Ich hab nichts gemeldet.', wert: 'gut', kommentar: 'Sehr gut: Ohne Ticket, ohne deine Meldung – warum ruft die IT dann extern an?',
            antwort: { id: 'c3_1b', tts: '[chuckles] Nein, ein Ticket gibt’s dafür noch nicht – wir sind ja proaktiv dran, das läuft gerade alles parallel. Ehrlich gesagt: Je länger wir warten, desto größer das Risiko. Ich brauche nur kurz Zugriff über die Remotehilfe, dann ist das erledigt. [pause]' } }
        ],
        [
          { text: 'Okay, ich öffne die Remotehilfe.', wert: 'riskant', kommentar: 'Damit hätte er deinen Bildschirm – und über dich Zugang zum Firmennetz.',
            antwort: { id: 'c3_2a', tts: 'Perfekt. Der Code lautet: sieben, vier, eins, neun, zwei, acht. Geben Sie den ein und klicken Sie auf „Zulassen“… Sehr gut. Ich übernehme ab hier. [pause]' } },
          { text: 'Ich rufe lieber selbst bei der IT-Hotline an.', wert: 'gut', kommentar: 'Genau richtig: Kontakt über den bekannten Kanal. Und prompt kam noch mehr Druck.',
            antwort: { id: 'c3_2b', tts: '[sighs] Die Hotline ist gerade komplett überlastet, genau wegen dieses Angriffs – da warten Sie ewig. Wenn Ihr Konto in der Zwischenzeit gesperrt wird, kann ich auch nichts mehr machen… Na gut. Ihre Entscheidung. [pause]' } }
        ]
      ],
      signale: [
        { art: 'rot', titel: '„Extern“ im Teams-Anruf', text: 'Deine IT ruft aus dem eigenen Unternehmen an – nicht von einem fremden Konto wie „…onmicrosoft.com“.' },
        { art: 'rot', titel: 'Verdächtig gutes Timing', text: 'Die Spam-Flut war kein Zufall: Angreifer lösen sie selbst aus, um danach als „Retter“ anzurufen. Diese Masche läuft 2026 gezielt gegen Unternehmen.' },
        { art: 'rot', titel: 'Fernzugriff über die Remotehilfe', text: 'Wer auf deinen Bildschirm darf, sieht und steuert alles – Passwörter, Daten, Netzwerk. In echten Fällen lag zwischen so einem Anruf und verschlüsselten Servern weniger als ein Tag.' },
        { art: 'rot', titel: 'Kein Ticket, aber Druck', text: '„Je länger wir warten …“, „Hotline überlastet“, „Konto gesperrt“ – Zeitdruck statt Prozess.', wenn: 'c3_1b' },
        { art: 'rot', titel: 'Rückruf wird schlechtgeredet', text: 'Echter Support hat kein Problem damit, dass du die offizielle Hotline wählst.', wenn: 'c3_2b' },
        { art: 'info', titel: 'Keine Warnung heißt nichts', text: 'Seit 2026 warnt Teams bei manchen verdächtigen Erstanrufen von außen. Fehlt die Warnung, ist der Anruf trotzdem nicht geprüft – achte selbst auf „Extern“.' },
        { art: 'info', titel: 'Freundlich, kompetent, geduldig', text: 'KI-Sprachagenten führen solche Gespräche heute automatisiert – tausendfach parallel und ohne genervt zu klingen.' }
      ],
      kern: 'Deine IT ruft nicht von außen an, um dir ungefragt Fernzugriff abzuschwatzen – erst recht nicht direkt nach einer Spam-Flut, die sie angeblich „filtern“ will.',
      tipp: 'Fernzugriff nur, wenn DU ein Ticket eröffnet hast und der Kontakt über den bekannten IT-Kanal läuft. Im Zweifel: auflegen und die IT über die Nummer im Intranet anrufen.',
      hacker: { reingelegt: 'Danke für den Zugang! Morgen früh ist euer Netzwerk verschlüsselt.', erwischt: 'Hm. Nach 300 Spam-Mails ist sonst jeder dankbar für Hilfe …' },
      beute: 250000,
      beuteText: '250.000 € Lösegeld',
      schadenBei: 'c3_2a',
      schadenText: 'Über die Remotehilfe war er schon auf deinem Rechner, bevor du aufgelegt hast. Fernzugriff lässt sich nicht zurücknehmen.'
    },

    {
      id: 'c2',
      echt: true,
      kanal: 'telefon',
      geraet: 'phone',
      stimme: 'C4QktxZ39Uccr2xNdFHg', // Johanna
      klang: 'telefon',              // schmalbandig wie eine echte Telefonleitung
      atmo: 'callcenter',
      klingel: 'telefon',
      zeit: 'Montag, 19:12',
      storyTitel: 'Ist das wirklich die Bank?',
      lage: 'Mittags hat der Automat deine Karte geschluckt. Du hast die Bank angerufen und um Rückruf gebeten. Gestern warnte sie noch vor falschen Bankmitarbeitern. Jetzt: eine fremde Nummer.',
      anrufer: { name: '+49 69 2471 5583', zeile: 'Festnetz · Frankfurt am Main', initialen: '?', farbe: '#4F5B78' },
      start: { id: 'c2_0', tts: 'Guten Tag, hier ist Sabine Krüger von der Nordlicht Bank, Kartenservice. Sie hatten heute Mittag bei uns angerufen, weil der Automat Ihre Karte eingezogen hat, und um einen Rückruf gebeten. Passt es gerade kurz? [pause]' },
      runden: [
        [
          { text: 'Ja, passt. Ist die neue Karte schon unterwegs?', wert: 'neutral', kommentar: 'Völlig in Ordnung – du hattest den Rückruf ja selbst angefordert.',
            antwort: { id: 'c2_1a', tts: 'Ja, die Ersatzkarte ist heute rausgegangen. Sie sollte in drei bis fünf Werktagen bei Ihnen sein, die PIN kommt wie immer separat per Post. Ihre alte Karte ist gesperrt, da kann also nichts passieren. [pause]' } },
          { text: 'Woher weiß ich, dass Sie wirklich von der Bank sind?', wert: 'gut', kommentar: 'Gute Frage! Und die Antwort war vorbildlich: Sie hat dir selbst den Rückruf über die offizielle Nummer angeboten.',
            antwort: { id: 'c2_1b', tts: '[warmly] Gute Frage – genau richtig, dass Sie das fragen! Sie können gern auflegen und uns über die Nummer auf der Rückseite Ihrer Karte oder auf unserer Website zurückrufen. Kurz zur Info: Ihre Ersatzkarte ist heute rausgegangen, und die alte ist gesperrt. [pause]' } }
        ],
        [
          { text: 'Muss ich zur Freischaltung noch etwas bestätigen – PIN oder TAN?', wert: 'gut', kommentar: 'Kluger Test: Ein Betrüger hätte jetzt „Ja, kurz durchgeben“ gesagt. Sie hat sofort abgewinkt.',
            antwort: { id: 'c2_2a', tts: '[surprised] Nein, auf keinen Fall! PIN und TAN fragen wir niemals ab – weder am Telefon noch per Mail. Wenn das jemals jemand von Ihnen will, legen Sie bitte sofort auf. Ansonsten: Einen schönen Tag noch! [pause]' } },
          { text: 'Super, danke. Dann warte ich auf die Post.', wert: 'neutral', kommentar: 'Passt. Es gab nichts, was du hättest preisgeben müssen.',
            antwort: { id: 'c2_2b', tts: 'Sehr gerne. Und falls die Karte bis nächste Woche nicht da ist, melden Sie sich einfach über die Hotline. Einen schönen Tag noch! [pause]' } }
        ]
      ],
      signale: [
        { art: 'gruen', titel: 'Du hast den Rückruf angefordert', text: 'Anlass und Zeitpunkt passen genau zu dem, was du selbst ausgelöst hast.' },
        { art: 'gruen', titel: 'Sie verlangt nichts', text: 'Keine PIN, keine TAN, keine Freigabe in der App, kein Geld. Sie gibt nur Informationen.' },
        { art: 'gruen', titel: 'Rückruf ausdrücklich erwünscht', text: 'Sie bietet von sich aus an, dass du über die offizielle Nummer zurückrufst.', wenn: 'c2_1b' },
        { art: 'gruen', titel: 'PIN und TAN tabu', text: 'Auf deine Frage kam sofort: niemals am Telefon. Ein Betrüger hätte zugegriffen.', wenn: 'c2_2a' },
        { art: 'gruen', titel: 'Kein Druck', text: 'Ruhiger Ton, keine Drohung, kein „sofort“. Die Geräusche im Hintergrund passen zum Kartenservice.' },
        { art: 'info', titel: 'Fremde Nummer, alte Warnung', text: 'Callcenter rufen oft von Sammelnummern an, und Warnungen kommen ständig. Beides beweist nichts – weder für noch gegen den Anruf. Umgekehrt lässt sich auch eine bekannte Nummer fälschen (Call-ID-Spoofing).' }
      ],
      kern: 'Du hast den Rückruf selbst angefordert – und sie wollte nichts von dir. Eine fremde Nummer allein macht noch keinen Fake.',
      tipp: 'Echte Bankmitarbeitende fragen nie nach PIN, TAN oder Freigaben in der App. Im Zweifel: auflegen und die Nummer von der Kartenrückseite wählen.',
      hacker: { echt: 'Gähn. Das war wirklich nur die Bank.', fehlalarm: 'Hehe – jetzt traust du nicht mal mehr deiner Bank. Misstrauen macht müde …' },
      beute: 0
    },

    {
      id: 'c4',
      echt: true,
      kanal: 'teams',
      geraet: 'teams',
      extern: false,
      stimme: 'NE7AIW5DoJ7lUosXV2KR', // Ela
      klang: 'teams',
      atmo: 'homeoffice',
      klingel: 'teams',
      zeit: 'Mittwoch, 17:05',
      storyTitel: 'Lena braucht die Folie – jetzt noch?',
      lage: 'Morgen präsentiert euer Team die Quartalszahlen. Lena aus dem Vertrieb macht laut Weekly die Folien fertig. Kurz nach fünf klingelt Teams.',
      anrufer: { name: 'Lena Hofmann', zeile: 'Vertrieb · Verfügbar', initialen: 'LH', farbe: '#C2477E' },
      start: { id: 'c4_0', tts: 'Hey! [laughs] Sorry, dass ich so spät noch störe. Du, ich sitz grad an der Präsentation für morgen und finde die Folie mit den Kundenzahlen nicht mehr. Hast du die noch? Die war, glaub ich, in deiner Version vom Montag. [pause]' },
      runden: [
        [
          { text: 'Klar, ich schick sie dir gleich.', wert: 'neutral', kommentar: 'In Ordnung – die Bitte ist alltäglich und passt zum Weekly.',
            antwort: { id: 'c4_1a', tts: 'Oh, super, danke! Leg sie am besten einfach in unseren Team-Ordner, dann haben alle die aktuelle Version. Ich guck dann gleich rein. [pause]' } },
          { text: 'Wofür genau brauchst du die? Das sind ja interne Zahlen.', wert: 'gut', kommentar: 'Gute Gewohnheit. Und die Antwort passte: konkret, entspannt, mit Bezug aufs Weekly.',
            antwort: { id: 'c4_1b', tts: '[laughs] Ja klar, gute Frage! Für die Präsentation morgen beim Vorstand – die Folie zum dritten Quartal, die wir im Weekly besprochen haben. Leg sie einfach in unseren Team-Ordner, da kommen alle dran. [pause]' } }
        ],
        [
          { text: 'Ich ruf dich gleich zurück, ich muss kurz was checken.', wert: 'gut', kommentar: 'Prüfen ist nie falsch – und Lena hatte damit überhaupt kein Problem.',
            antwort: { id: 'c4_2a', tts: 'Klar, kein Stress! Ich bin noch ’ne Stunde online. Bis gleich! [pause]' } },
          { text: 'Mach ich. Soll ich noch was anpassen?', wert: 'neutral', kommentar: 'Passt. Die Datei landet im Team-Ordner, nicht bei einer fremden Adresse.',
            antwort: { id: 'c4_2b', tts: 'Nee, alles gut, den Rest mach ich. Danke dir, du rettest mir echt den Abend! [laughs] Bis morgen! [pause]' } }
        ]
      ],
      signale: [
        { art: 'gruen', titel: 'Interner Kontakt', text: 'Kein „Extern“-Hinweis, bekannter Name, bekanntes Profil im Firmen-Teams.' },
        { art: 'gruen', titel: 'Der Anlass passt', text: 'Ihr habt im Weekly darüber gesprochen, die Präsentation ist morgen.' },
        { art: 'gruen', titel: 'Der normale Weg', text: 'Sie will die Datei im gemeinsamen Team-Ordner – nicht an eine private Mailadresse.' },
        { art: 'gruen', titel: 'Kein Druck, keine Geheimnisse', text: 'Nachfragen und Rückruf sind für sie völlig okay.', wenn: 'c4_2a' },
        { art: 'gruen', titel: 'Kein Druck, keine Geheimnisse', text: 'Keine Eile, kein „sag niemandem was“. Sie geht entspannt auf dich ein.', wennNicht: 'c4_2a' },
        { art: 'info', titel: 'Lachen ist kein Beweis', text: 'Auch KI-Stimmen lachen und sagen „äh“. Entscheidend ist, dass die Bitte plausibel und harmlos ist.' }
      ],
      kern: 'Interner Kontakt, bekannter Anlass, der normale Weg über den Team-Ordner – und Nachfragen waren kein Problem.',
      tipp: 'Auch bei Kolleginnen und Kollegen gilt: Wird es ungewöhnlich – Geld, Passwörter, vertrauliche Daten an fremde Adressen –, dann prüfen. Hier war es das nicht.',
      hacker: { echt: 'Langweilig. Das war wirklich nur Lena.', fehlalarm: 'Jetzt misstraust du schon deiner eigenen Kollegin. Genau das will ich.' },
      beute: 0
    },

    {
      id: 'c5',
      echt: false,
      kanal: 'video',
      geraet: 'video',
      stimme: '1iF3vHdwHKuVKSPDK23Z', // Louisa
      klang: 'messenger',
      atmo: null,
      klingel: 'messenger',
      zeit: 'Donnerstag, 16:52',
      storyTitel: 'Die Chefin persönlich – per Video?',
      lage: 'Du vertrittst deine Teamleitung und darfst Zahlungen freigeben. Die Chefin, Dr. Katrin Albers, kennst du aus Townhall-Videos. Jetzt: ein WhatsApp-Videoanruf mit ihrem Foto – von einer fremden Nummer.',
      anrufer: { name: 'Katrin Albers', zeile: 'WhatsApp-Video · +49 157 3308 1146', initialen: 'KA', farbe: '#8A6A3C', foto: 'assets/video/albers-profil.jpg' },
      // Kamera erst aus (Profilbild); vor Runde kameraAn (0-basiert) geht sie an – ab da gibt es echte Lip-Sync-Clips
      video: { poster: 'assets/video/albers-poster.jpg', idle: 'assets/video/c5_idle.mp4', clips: ['c5_2a', 'c5_2b'], kameraAn: 1 },
      start: { id: 'c5_0', tts: 'Hallo! Gut, dass ich Sie erreiche. Katrin Albers hier. Ich sitze gerade in Zürich zwischen zwei Terminen, deshalb rufe ich vom privaten Handy an. Es geht um etwas sehr Vertrauliches: Wir stehen kurz vor einer Übernahme. Das darf noch niemand wissen, wirklich niemand. Ich brauche heute noch eine Anzahlung von achtundvierzigtausendfünfhundert Euro an die Kanzlei. Können Sie das für mich anstoßen? [pause]' },
      runden: [
        [
          { text: 'Natürlich. Wohin soll das Geld gehen?', wert: 'riskant', kommentar: 'Autorität plus Zeitdruck – und du warst sofort dabei. Genau so lief es 2024 bei Arup: 25 Millionen Dollar nach einer Deepfake-Videokonferenz.',
            antwort: { id: 'c5_1a', tts: 'Wunderbar, ich wusste, dass ich mich auf Sie verlassen kann. Die Kanzlei schickt Ihnen gleich die Kontodaten per Mail. Bitte als Eilüberweisung, heute noch – und nicht über die normale Freigabe, sonst ist es morgen im ganzen Haus rum. [pause]' } },
          { text: 'Ich rufe Sie kurz auf Ihrer Büronummer zurück.', wert: 'gut', kommentar: 'Der wichtigste Zug überhaupt. Sie hat ihn abgeblockt: „Dafür ist jetzt wirklich keine Zeit.“',
            antwort: { id: 'c5_1b', tts: '[impatient] Dafür ist jetzt wirklich keine Zeit, ich gehe gleich in den nächsten Termin. Die Kanzlei schickt Ihnen gleich die Kontodaten. Bitte heute noch, und bitte diskret. [pause]' } }
        ],
        [
          { text: 'In Ordnung, ich kümmere mich darum.', wert: 'riskant', kommentar: '48.500 € – vorbei an Freigabe und Vier-Augen-Prinzip.',
            antwort: { id: 'c5_2a', tts: 'Danke. Ich verlasse mich auf Sie. Und denken Sie dran: Kein Wort zu niemandem. Bis dann. [pause]' } },
          { text: 'Bevor ich das mache: Halten Sie bitte kurz die Hand vor Ihr Gesicht?', wert: 'gut', kommentar: 'Mutig! Statt den Test zu machen, brach sie das Gespräch ab. Verlass dich aber nicht auf solche Tests: Gute Deepfakes bestehen sie immer öfter.',
            antwort: { id: 'c5_2b', tts: '[annoyed] Wie bitte? Was soll das denn jetzt? Ich habe wirklich keine Zeit für so etwas… Die Verbindung hier ist furchtbar, ich… [pause]', glitch: true } }
        ]
      ],
      signale: [
        { art: 'rot', titel: 'Unbekannte Nummer, bekanntes Gesicht', text: 'Ein Profilfoto kann jeder hochladen. Und Townhall-Videos liefern genug Material für Gesicht und Stimme.' },
        { art: 'rot', titel: 'Geheimhaltung', text: '„Das darf niemand wissen“, „nicht über die normale Freigabe“ – damit soll niemand gegenprüfen.' },
        { art: 'rot', titel: 'Zeitdruck und Autorität', text: 'Die Chefin persönlich, „heute noch“, „Eilüberweisung“. Wer widerspricht da schon?' },
        { art: 'rot', titel: 'Rückruf abgeblockt', text: 'Ein Rückruf über die Büronummer dauert eine Minute. Wer ihn mit Zeitdruck abblockt, will genau diese Prüfung verhindern.', wenn: 'c5_1b' },
        { art: 'rot', titel: 'Abbruch beim Hand-Test', text: 'Statt die Hand zu heben, wurde sie ungehalten – und plötzlich war die Verbindung weg. Ein Abbruch genau in diesem Moment ist verdächtig, auch wenn gute Deepfakes solche Tests inzwischen oft bestehen.', wenn: 'c5_2b' },
        { art: 'info', titel: 'Das Video ist echt KI', text: 'Das Gesicht im Video gibt es nicht: ein KI-Foto, animiert mit einer KI-Stimme. So einfach geht das heute.' }
      ],
      kern: 'Geheim, eilig, am Prozess vorbei – und der Rückruf wird abgeblockt. Auch ein bekanntes Gesicht im Video beweist nichts.',
      tipp: 'Zahlungen laufen nie am Prozess vorbei – egal, wer anruft. Auflegen, über die bekannte Nummer zurückrufen, Vier-Augen-Prinzip einhalten.',
      hacker: { reingelegt: '48.500 €. Und ich hab nicht mal ein echtes Gesicht gebraucht.', erwischt: 'Ein Foto, zehn Sekunden Townhall-Video – und trotzdem durchschaut. Respekt.' },
      beute: 48500,
      beuteText: '48.500 € Anzahlung'
    },

    {
      // Echtzeit-Deepfake im Bewerbungsgespräch (Muster: FBI-Warnung 2022, Pindrop 2024/25, KnowBe4 2024).
      // Der Kandidat sagt nichts Verbotenes – der Betrug ist seine Identität.
      id: 'c6',
      echt: false,
      kanal: 'teams',
      geraet: 'teams',
      extern: true,
      stimme: 'qVRpsZJDV29g1CIPzssm', // Sebastian
      klang: 'teams',
      atmo: null,
      klingel: 'teams',
      zeit: 'Montag, 10:00',
      storyTitel: 'Der perfekte Kandidat',
      lage: 'Remote-Stelle in deinem Team: Senior Cloud Engineer. Der Lebenslauf ist top. HR ist kurzfristig verhindert – das erste Video-Interview führst du allein.',
      anrufer: { name: 'Daniel Kessler', zeile: 'Bewerbungsgespräch · Senior Cloud Engineer', initialen: 'DK', farbe: '#3C6A8A', foto: 'assets/video/kessler-profil.jpg' },
      posteingang: [
        ['Miriam Baum (HR)', 'Bin krank – kannst du das Interview mit D. Kessler allein führen?'],
        ['Kalender', 'Bewerbungsgespräch D. Kessler · heute 10:00'],
        ['Daniel Kessler', 'Re: Bewerbung Senior Cloud Engineer – Lebenslauf anbei']
      ],
      // versatz: Das Bild läuft dem Ton konstant hinterher (typisch für Echtzeit-Deepfakes)
      video: { poster: 'assets/video/kessler-poster.jpg', idle: 'assets/video/c6_idle.mp4', clips: ['c6_0', 'c6_1a', 'c6_1b', 'c6_2a', 'c6_2b'], versatz: 0.2 },
      start: { id: 'c6_0', tts: '[friendly] Hallo! Hören Sie mich gut? … Super. Schön, dass das so kurzfristig geklappt hat. Ich bin Daniel Kessler. Ich bringe acht Jahre Erfahrung mit Cloud-Infrastruktur mit, zuletzt als Lead Engineer bei einem Logistik-Start-up in Hamburg. Und remote passt für mich perfekt. [pause]' },
      runden: [
        [
          { text: 'Klingt gut. Erzählen Sie mal von Ihrem letzten Projekt.', wert: 'neutral', kommentar: 'Eine normale Frage – aber die Antwort klang wie aus dem Prospekt: Zahlen, Schlagworte, „sofort verfügbar“.',
            antwort: { id: 'c6_1a', tts: 'Sehr gern. Wir haben die komplette Plattform auf Kubernetes migriert, die Kosten um vierzig Prozent gesenkt und die Ausfallzeiten praktisch auf null gebracht. Ich arbeite gern eigenverantwortlich … und ich wäre übrigens sofort verfügbar. [pause]' } },
          { text: 'Sie sind in Hamburg? Dann kommen Sie zum zweiten Gespräch doch einfach bei uns vorbei.', wert: 'gut', kommentar: 'Stark: ein Treffen vor Ort. Genau das wollte er vermeiden.',
            antwort: { id: 'c6_1b', tts: '[hesitates] Hm … das wird schwierig, ich bin die nächsten Wochen beruflich viel unterwegs. Aber remote klappt bei mir immer super, das haben meine letzten Teams auch so gemacht. [pause]' } }
        ],
        [
          { text: 'Passt. Ich sage HR, dass wir Ihnen ein Angebot machen.', wert: 'riskant', kommentar: 'Ein Angebot nach zehn Minuten Video, ohne Identitätsprüfung – und prompt kam die Bitte mit dem Laptop.',
            antwort: { id: 'c6_2a', tts: '[happy] Super, vielen Dank! Ach, eine Kleinigkeit noch: Könnten Sie den Firmenlaptop an eine andere Adresse schicken? Ich bin gerade mitten im Umzug. [pause]' } },
          { text: 'Eine Bitte noch: Drehen Sie kurz den Kopf zur Seite – ganz ins Profil?', wert: 'gut', kommentar: 'Genau der Test, an dem Echtzeit-Deepfakes oft scheitern – und plötzlich war die Kamera aus.',
            antwort: { id: 'c6_2b', tts: '[laughs] Ins Profil? Ähm … Moment, mein Bild hängt gerade ein bisschen. Ich mache die Kamera kurz aus, dann ist die Verbindung stabiler. [pause]', kameraAus: true } }
        ]
      ],
      signale: [
        { art: 'rot', titel: 'Ton und Mund nie ganz synchron', text: 'Die Lippen liefen der Stimme die ganze Zeit ein Stück hinterher – nicht ab und zu wie bei schlechtem WLAN, sondern konstant. Genau daran fiel 2024 ein Deepfake-Bewerber bei der Sicherheitsfirma Pindrop auf.' },
        { art: 'rot', titel: 'Kein Treffen vor Ort', text: 'Persönlich vorbeikommen? Lieber nicht. Wer nur im Video existiert, kann jedes Gesicht tragen.', wenn: 'c6_1b' },
        { art: 'rot', titel: 'Laptop an eine andere Adresse', text: 'Ein bekanntes Muster: Firmenlaptops landen bei Helfern, die sie für Täter im Ausland fernsteuerbar machen („Laptop-Farmen“).', wenn: 'c6_2a' },
        { art: 'rot', titel: 'Profil-Test? Kamera aus.', text: 'Seitlich gerät ein live ausgetauschtes Gesicht oft ins Rutschen – also ging die Kamera aus. Ein schlechtes Bild allein beweist nichts. Ausweichen genau in diesem Moment ist ein Warnsignal.', wenn: 'c6_2b' },
        { art: 'info', titel: 'Weichgezeichneter Hintergrund', text: 'In Teams völlig normal – und praktisch für Deepfakes: Die Unschärfe verdeckt die Kanten, an denen ein ausgetauschtes Gesicht ausfranst.' },
        { art: 'info', titel: 'Live-Deepfakes sind Alltag', text: 'Gesicht und Stimme lassen sich heute live austauschen – mit frei verfügbaren Tools, in gut einer Stunde eingerichtet. Das Ziel hier: kein Geld, sondern ein Job mit Zugang zu euren Systemen.' }
      ],
      kern: 'Ton und Mund nie ganz synchron, nur remote, ein Lebenslauf wie bestellt: Dieser Deepfake will nicht dein Geld – sondern einen Job und damit Zugang zu euren Systemen.',
      tipp: 'Bei Remote-Bewerbungen entscheidet der Prozess: Identität über HR prüfen – Ausweis, Video-Ident oder ein Treffen vor Ort. Kamera-Tests helfen, beweisen aber nichts.',
      hacker: { reingelegt: 'Eingestellt! Ab Montag sitze ich in euren Systemen – mit einem Gesicht, das es nicht gibt.', erwischt: 'Durchschaut. Dabei war mein Gesicht diesmal sogar live.' },
      beute: 9800,
      beuteText: 'Erstes Gehalt + Firmenlaptop'
    }
  ],

  /* ---------------- Levels ----------------
     anzahl = so viele Anrufe aus der Liste oben, der Reihe nach. */
  levels: [
    { anzahl: 4, art: 'audio', kicker: 'Audioanrufe – hör genau hin.', info: 'Nur Ton' },
    { anzahl: 2, art: 'video', kicker: 'Videoanrufe – schau genau hin.', info: 'Mit Bild' }
  ],
  levelIntro: {
    kicker: 'Level {n} von {gesamt}',
    titel: 'Bereit für Level {n}?',
    anrufe: 'Anrufe',
    los: 'Los geht’s'
  },
  levelEnde: {
    kicker: 'Level {n} von {gesamt} · Auswertung',
    perfekt: 'Perfekt! Kein Fake kam durch.',
    gut: 'Level {n} geschafft!',
    knapp: 'Da geht noch mehr.',
    richtig: '{richtig} von {gesamt} richtig erkannt',
    beute: 'Hacker-Beute in diesem Level',
    beuteNull: 'Der Hacker ging leer aus.',
    details: 'Deine Anrufe',
    warFake: 'KI-Fake',
    warEcht: 'Echt',
    zumTipp: 'Weiter zum Sicherheitstipp',
    naechstesLevel: 'Weiter zu Level {n}',
    zumErgebnis: 'Zur Auswertung'
  },

  /* ---------------- Sicherheitstipp nach Level 1 ---------------- */
  pause: {
    kicker: 'Sicherheitstipp',
    titel: 'Und wenn du dir nicht sicher bist?',
    szene: 'Dein Telefon klingelt. Die Stimme klingt genau wie deine Chefin. Sie bittet dich um etwas Ungewöhnliches – und es eilt. Irgendetwas fühlt sich komisch an.',
    frage: 'Was tust du?',
    optionen: [
      { icon: 'frage', farbe: '#9B7BFF', text: 'Ich stelle eine Kontrollfrage, die nur sie beantworten kann.', wert: 'halb',
        titel: 'Guter Instinkt – aber nur die halbe Miete.',
        erklaerung: 'Eine Kontrollfrage kann einen Fake entlarven: 2024 stoppten Manager bei Ferrari einen Deepfake ihres CEO, weil der Anrufer nicht wusste, welches Buch der Chef kürzlich empfohlen hatte. Aber vieles steht im Netz – und manche Fragen lassen sich erraten. Am sichersten ist der Rückruf.' },
      { icon: 'kamera', farbe: '#2BB8E8', text: 'Ich bitte um einen Videoanruf – dann sehe ich, ob sie es wirklich ist.', wert: 'falsch',
        titel: 'Leider nein.',
        erklaerung: 'Auch Gesichter lassen sich live fälschen. 2024 überwies ein Mitarbeiter des Ingenieurbüros Arup 25 Millionen Dollar – nach einer Videokonferenz, in der alle anderen Teilnehmenden Deepfakes waren.' },
      { icon: 'rueckruf', farbe: '#FFC24D', text: 'Ich lege auf und rufe sie über die Nummer an, die ich kenne.', wert: 'voll',
        titel: 'Genau richtig!',
        erklaerung: 'Der Rückruf über einen bekannten Weg ist der stärkste Schutz – gegen jede noch so gute Stimme und jedes noch so echte Gesicht. Echte Kolleginnen und Kollegen verstehen das.' },
      { icon: 'display', farbe: '#FF8A5B', text: 'Ich rufe die Nummer zurück, die im Display stand.', wert: 'falsch',
        titel: 'Vorsicht!',
        erklaerung: 'Die angezeigte Nummer lässt sich fälschen (Call-ID-Spoofing) – und eine echte Rückrufnummer kann trotzdem dem Betrüger gehören. Nutze nur Nummern, die du selbst kennst: Adressbuch, Intranet, Website, Kartenrückseite.' }
    ],
    regel: {
      titel: 'Die Rückruf-Regel',
      punkte: [
        { icon: 'phone-off', titel: 'Auflegen ist nicht unhöflich', text: 'Bei ungewöhnlichen Bitten darfst du das Gespräch jederzeit beenden.' },
        { icon: 'phone-out', titel: 'Selbst zurückrufen', text: 'Über eine Nummer, die DU kennst – nicht die im Display und nicht die aus dem Gespräch.' },
        { icon: 'key', titel: 'Codewort vereinbaren', text: 'In der Familie und im Team – für Notfälle und ungewöhnliche Anweisungen.' }
      ]
    },
    knopf: 'Weiter zu Level 2'
  },

  /* ---------------- Auswertung ---------------- */
  auswertung: {
    titel: 'Auswertung',
    raenge: [
      { ab: 6, titel: 'Deepfake-Detektiv:in', text: 'Sechs von sechs. Dich legt so schnell keine KI rein.' },
      { ab: 5, titel: 'Scharfes Gehör', text: 'Fast perfekt. Ein Anruf hat dich erwischt – schau dir an, welcher.' },
      { ab: 4, titel: 'Wachsam – mit Lücken', text: 'Du bist auf dem richtigen Weg. Achte noch mehr auf das Muster hinter den Anrufen.' },
      { ab: 0, titel: 'Leichte Beute', text: 'Die KI hatte heute leichtes Spiel. Aber jetzt kennst du ihre Tricks.' }
    ],
    richtig: 'richtig erkannt',
    beuteNull: 'Der Hacker geht leer aus.',
    beuteVoll: 'hat der Hacker heute erbeutet.',
    hackerGut: 'Ganz ehrlich? Mit dir macht das keinen Spaß.',
    hackerMittel: 'Nicht schlecht. Aber einmal hab ich dich.',
    hackerSchlecht: 'Danke für die Spende! Bis zum nächsten Anruf …',
    akte: 'Deine Anrufe',
    regelnTitel: 'Deine 4 Regeln gegen Vishing & Deepfakes',
    regeln: [
      { titel: 'Stimme und Gesicht sind kein Beweis', text: 'Ein paar Sekunden Audio oder ein Foto reichen für einen überzeugenden Klon.' },
      { titel: 'Erkenne das Muster', text: 'Zeitdruck + Geheimhaltung + ungewöhnliche Bitte: Geld, Codes, Zugangsdaten, Fernzugriff.' },
      { titel: 'Hak nach', text: 'Kontrollfrage, Ticketnummer, normaler Prozess. Betrüger weichen aus und machen Druck – echte Anrufer nicht.' },
      { titel: 'Auflegen & zurückrufen', text: 'Über eine Nummer, die du kennst. Und vereinbart ein Codewort – privat und im Team.' }
    ],
    nachgehakt: 'mal nachgehakt',
    nochmal: 'Nochmal spielen',
    kleingedruckt: 'Alle Stimmen, Bilder und Videos in dieser Challenge wurden mit KI erzeugt – auch die der echten Anrufer.',
    quellen: 'Hintergrund: Lagebilder von Polizei und Verbraucherzentralen zu KI-Schockanrufen, Sicherheitsberichte zu Teams-Vishing (2026), Warnungen von FBI und Sicherheitsfirmen zu Deepfake-Bewerbern (2022–2025) sowie die bekannten Fälle Arup (2024) und Ferrari (2024).'
  }
};
