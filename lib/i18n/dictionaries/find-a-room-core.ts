import type { LanguageDictionaries } from "../types";

const DE = {
  // HeroSection
  "Find a room that fits where you are going, when you need it, and how you live.":
    "Finden Sie ein Zimmer, das zu Ihrem Ziel, Ihrem Zeitplan und Ihrer Lebensweise passt.",
  "Search current room listings by location, move-in date, monthly budget, room type, household fit, accessibility, study, work, healthcare, or international-move needs.":
    "Durchsuchen Sie aktuelle Zimmerangebote nach Ort, Einzugsdatum, Monatsbudget, Zimmertyp, Haushaltspassung, Barrierefreiheit, Studium, Beruf, Gesundheitswesen oder internationalen Umzugsbedürfnissen.",
  "Where are you moving?": "Wohin ziehen Sie um?",
  "City, neighborhood, university": "Stadt, Stadtviertel, Universität",
  "Date or flexible": "Datum oder flexibel",
  "Monthly budget": "Monatsbudget",
  "Min – Max": "Min. – Max.",
  "Flexible dates": "Flexible Termine",
  "Accessible home features": "Barrierefreie Ausstattung",
  "Institution or employer": "Institution oder Arbeitgeber",
  "Bright private room with plants, ready to search and book":
    "Helles Privatzimmer mit Pflanzen, bereit zur Suche und Buchung",

  // AccountabilitySection
  "How Discovery Stays Accountable": "Wie die Suche nachvollziehbar bleibt",
  "Availability truth, authority, price clarity, and safe next steps":
    "Verfügbarkeitswahrheit, Berechtigung, Preisklarheit und sichere nächste Schritte",
  "We explain what Zoiko Rooms checks, what remains the provider's responsibility, what you must still confirm, and how to report or correct information.":
    "Wir erklären, was Zoiko Rooms prüft, was in der Verantwortung des Anbieters bleibt, was Sie noch bestätigen müssen und wie Sie Informationen melden oder korrigieren können.",
  "A calm, well-lit living room representing an accountable rental process":
    "Ein ruhiges, gut beleuchtetes Wohnzimmer als Sinnbild für einen nachvollziehbaren Vermietungsprozess",

  // AudienceRowsSection
  "Find rooms around universities, campuses and term timelines":
    "Zimmer rund um Universitäten, Campusse und Semesterzeiten finden",
  "Search by institution, term dates and budget, with guarantor and deposit needs explained clearly. Zoiko Rooms does not imply university endorsement unless formally authorized.":
    "Suchen Sie nach Institution, Semesterterminen und Budget, mit klar erklärten Bürgschafts- und Kautionsanforderungen. Zoiko Rooms impliziert keine universitäre Billigung, sofern nicht formell autorisiert.",
  "Explore University Rooms": "Zimmer für Studierende entdecken",
  "Search around workplaces, hospitals, placements and rotations":
    "Suche rund um Arbeitsplätze, Kliniken, Einsätze und Rotationen",
  "Shift-aware timing, commute context and flexible-stay signals, without requesting diagnosis, treatment or unrelated employment details.":
    "Schichtbewusste Zeitplanung, Pendelkontext und flexible Aufenthaltssignale, ohne Diagnose-, Behandlungs- oder unzusammenhängende Beschäftigungsdetails abzufragen.",
  "Explore Work & Healthcare Rooms": "Zimmer für Beruf & Gesundheitswesen entdecken",
  "Plan a cross-border room search with less uncertainty":
    "Grenzüberschreitende Zimmersuche mit weniger Unsicherheit planen",
  "Original-currency pricing, timing, documents, payments, arrival and support guidance. Zoiko Rooms does not provide immigration, tax or legal advice.":
    "Preisangaben in Originalwährung, Zeitplanung, Dokumente, Zahlungen, Ankunft und Unterstützungshinweise. Zoiko Rooms bietet keine Einwanderungs-, Steuer- oder Rechtsberatung.",
  "Explore International Moves": "Internationale Umzüge entdecken",

  // FaqSection
  "Frequently Asked Questions": "Häufig gestellte Fragen",
  "Find a Room FAQ": "FAQ: Zimmer finden",
  "How do I find a room on Zoiko Rooms?": "Wie finde ich ein Zimmer auf Zoiko Rooms?",
  "Enter a location, move-in date or flexible timing, and monthly budget, then refine by room type, stay length, household, accessibility, university, work, healthcare, or international-move needs.":
    "Geben Sie Ort, Einzugsdatum oder flexible Zeitplanung und Monatsbudget ein und verfeinern Sie dann nach Zimmertyp, Aufenthaltsdauer, Haushalt, Barrierefreiheit, Universität, Beruf, Gesundheitswesen oder internationalen Umzugsbedürfnissen.",
  "Does available mean the room is definitely available?":
    "Bedeutet „verfügbar“, dass das Zimmer definitiv verfügbar ist?",
  "Available means the listing's status was confirmed as of its last-checked date. Confirm current availability with the provider before you commit, since status can change between checks.":
    "„Verfügbar“ bedeutet, dass der Status der Anzeige zum letzten Prüfdatum bestätigt wurde. Bestätigen Sie die aktuelle Verfügbarkeit beim Anbieter, bevor Sie sich verpflichten, da sich der Status zwischen Prüfungen ändern kann.",
  "What does verified mean?": "Was bedeutet „verifiziert“?",
  "Each detail carries the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked, rather than a single blanket badge.":
    "Jedes Detail trägt den zugrunde liegenden Nachweis – vom Anbieter angegeben, durch Dokument verifiziert oder physisch geprüft –, sodass Sie immer wissen, wie eine Angabe geprüft wurde, statt eines einzigen pauschalen Abzeichens.",
  "How much will a room cost?": "Wie viel kostet ein Zimmer?",
  "Listings show monthly rent alongside disclosed deposit, fees, and bills where the provider has itemized them, so you can compare total cost rather than rent alone.":
    "Anzeigen zeigen die Monatsmiete zusammen mit offengelegter Kaution, Gebühren und Nebenkosten, sofern der Anbieter diese aufgeschlüsselt hat, damit Sie die Gesamtkosten statt nur die Miete vergleichen können.",
  "Can I find rooms near a university or hospital?": "Kann ich Zimmer in der Nähe einer Universität oder eines Krankenhauses finden?",
  "Yes. University Rooms and Work & Healthcare Rooms let you search around institutions, term timelines, workplaces, and rotations without requesting unrelated personal details.":
    "Ja. Mit „Zimmer für Studierende“ und „Zimmer für Beruf & Gesundheitswesen“ können Sie rund um Institutionen, Semesterzeiten, Arbeitsplätze und Rotationen suchen, ohne unzusammenhängende persönliche Daten abzufragen.",
  "Can Zoiko Rooms guarantee a safe room?": "Kann Zoiko Rooms ein sicheres Zimmer garantieren?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "Nein. Verifizierung verringert Unsicherheit, garantiert aber keine Sicherheit, Rechtmäßigkeit, Eignung, keinen Zustand der Immobilie oder künftiges Verhalten. Nutzen Sie die Melde-, Blockier- und Support-Funktionen, wenn sich etwas falsch anfühlt.",
  "Can I search before moving internationally?": "Kann ich vor einem internationalen Umzug bereits suchen?",
  "Yes. International Moves supports original-currency pricing, timing, documents, payments, arrival, and support guidance, though Zoiko Rooms does not provide immigration, tax, or legal advice.":
    "Ja. „Internationale Umzüge“ unterstützt Preisangaben in Originalwährung, Zeitplanung, Dokumente, Zahlungen, Ankunft und Unterstützungshinweise, wobei Zoiko Rooms keine Einwanderungs-, Steuer- oder Rechtsberatung bietet.",
  "Ready to continue?": "Bereit weiterzumachen?",
  "Search available rooms, save a search, or list a room through the appropriate provider pathway.":
    "Verfügbare Zimmer durchsuchen, eine Suche speichern oder ein Zimmer über den passenden Anbieterweg anbieten.",
  "Get Help": "Hilfe erhalten",

  // FeaturedModulesSection
  "Featured Search Modules": "Vorgestellte Suchmodule",
  "Explore by destination, life situation, and move timing":
    "Nach Zielort, Lebenssituation und Umzugszeitpunkt entdecken",
  "Use real inventory-backed destinations. Coverage gaps are explained rather than hidden.":
    "Nutzen Sie durch reales Angebot gestützte Zielorte. Abdeckungslücken werden erklärt, nicht verborgen.",
  "Search, filter, compare, save, and continue.": "Suchen, filtern, vergleichen, speichern und fortfahren.",
  "Explore Rooms by City": "Zimmer nach Stadt entdecken",
  "Explore city context, cost patterns, transport, and availability.":
    "Stadtkontext, Kostenmuster, Verkehrsanbindung und Verfügbarkeit entdecken.",
  "Find rooms around institutions and term timelines.": "Zimmer rund um Institutionen und Semesterzeiten finden.",
  "Work & Healthcare": "Beruf & Gesundheitswesen",
  "Search around workplaces, hospitals, placements, and rotations.":
    "Suche rund um Arbeitsplätze, Kliniken, Einsätze und Rotationen.",
  "Explore Work & Healthcare": "Beruf & Gesundheitswesen entdecken",
  "Plan documents, timing, payments, support, and arrival.":
    "Dokumente, Zeitplanung, Zahlungen, Unterstützung und Ankunft planen.",

  // RoomHighlightsSection
  "Current Room Highlights": "Aktuelle Zimmer-Highlights",
  "Useful inventory patterns, not paid ranking": "Nützliche Bestandsmuster, kein bezahltes Ranking",
  "Search all rooms": "Alle Zimmer durchsuchen",
  "Private room near downtown": "Privatzimmer nahe der Innenstadt",
  "$1,200/month + disclosed bills": "1.200 $/Monat + ausgewiesene Nebenkosten",
  "Available · checked today": "Verfügbar · heute geprüft",
  "Furnished room near university": "Möbliertes Zimmer nahe der Universität",
  "$980/month; deposit shown": "980 $/Monat; Kaution ausgewiesen",
  "Availability to confirm": "Verfügbarkeit zu bestätigen",
  "Accessible room near hospital": "Barrierefreies Zimmer nahe dem Krankenhaus",
  "$1,350/month; fees itemized": "1.350 $/Monat; Gebühren aufgeschlüsselt",
  "Provider authority confirmed": "Anbieterberechtigung bestätigt",

  // RoomsByCitySection (find-a-room)
  "Explore rooms and practical renting context, city by city":
    "Zimmer und praktischen Vermietungskontext Stadt für Stadt entdecken",
  "Only cities with current, sufficient inventory or genuinely useful guidance are shown — no thin or empty city pages.":
    "Es werden nur Städte mit aktuellem, ausreichendem Angebot oder wirklich nützlichen Hinweisen angezeigt – keine dünnen oder leeren Stadtseiten.",
  "Active inventory · reviewed 12 Jul 2026": "Aktives Angebot · geprüft am 12. Juli 2026",
  "Active inventory · reviewed 8 Jul 2026": "Aktives Angebot · geprüft am 8. Juli 2026",
  "Announced · launching Sep 2026": "Angekündigt · Start im September 2026",

  // SearchAssuranceSection
  "Search Assurance": "Suchsicherheit",
  "What you can check before you commit": "Was Sie vor einer Zusage prüfen können",
  "Availability status and last checked": "Verfügbarkeitsstatus und letzte Prüfung",
  "Provider authority and verification scope": "Anbieterberechtigung und Verifizierungsumfang",
  "Monthly rent, deposit, fees, and bills": "Monatsmiete, Kaution, Gebühren und Nebenkosten",
  "Report, block, support, and safe-viewing guidance": "Hinweise zu Melden, Blockieren, Support und sicherer Besichtigung",
  "Truth Strip": "Statusleiste",
  "Know what is confirmed — and what still needs checking": "Wissen, was bestätigt ist – und was noch geprüft werden muss",
  "Status labels distinguish the following states across every listing:":
    "Statusbezeichnungen unterscheiden die folgenden Zustände bei jeder Anzeige:",
  Available: "Verfügbar",
  Reserved: "Reserviert",
  "Application in progress": "Bewerbung läuft",
  Unavailable: "Nicht verfügbar",
  Paused: "Pausiert",
  "Status disputed": "Status umstritten",
  Removed: "Entfernt",
  "Evidence expired": "Nachweis abgelaufen",

  // SeekerGuidanceSection
  "Seeker Guidance": "Hinweise für Zimmersuchende",
  "Compare, view, apply and safely": "Vergleichen, ansehen, bewerben und sicher bleiben",
  "Define needs": "Bedürfnisse festlegen",
  "Location, dates, budget, stay length, room type, household fit, and accessibility.":
    "Ort, Termine, Budget, Aufenthaltsdauer, Zimmertyp, Haushaltspassung und Barrierefreiheit.",
  "Review status": "Status prüfen",
  "Availability freshness, provider type, authority scope, room evidence, and costs.":
    "Aktualität der Verfügbarkeit, Anbietertyp, Berechtigungsumfang, Zimmernachweise und Kosten.",
  Compare: "Vergleichen",
  "Total cost, commute, room facts, accessibility, agreement terms, and safety — not price alone.":
    "Gesamtkosten, Pendelweg, Zimmerdetails, Barrierefreiheit, Vertragsbedingungen und Sicherheit – nicht nur der Preis.",
  "Communicate safely": "Sicher kommunizieren",
  "Keep a clear record; use report, block, and support controls.":
    "Führen Sie klare Aufzeichnungen; nutzen Sie Melde-, Blockier- und Support-Funktionen.",
  "A cozy living room where a room seeker reviews listings":
    "Ein gemütliches Wohnzimmer, in dem eine zimmersuchende Person Anzeigen prüft",

  // search-rooms: quickFilters / budget / stay length / sort
  Furnished: "Möbliert",
  "Bills Included": "Nebenkosten inklusive",
  "Step-free access": "Stufenloser Zugang",
  "Live-in provider": "Vermieter mit Eigennutzung",
  "0.5 mi to transit": "0,5 Meilen bis zum Nahverkehr",
  "Any budget": "Beliebiges Budget",
  "$600 – $1,000": "600 $ – 1.000 $",
  "$800 – $1,400": "800 $ – 1.400 $",
  "$1,000 – $1,600": "1.000 $ – 1.600 $",
  "$1,400 – $2,000": "1.400 $ – 2.000 $",
  "Any stay length": "Beliebige Aufenthaltsdauer",
  "1–3 months": "1–3 Monate",
  "3–6 months": "3–6 Monate",
  "6–12 months": "6–12 Monate",
  "12+ months": "12+ Monate",
  "Sort: Recommended": "Sortieren: Empfohlen",
  "Sort: Price, low to high": "Sortieren: Preis, aufsteigend",
  "Sort: Price, high to low": "Sortieren: Preis, absteigend",

  // search-rooms: room data (titles, facts, priceNotes, statusLabels, evidenceLabels)
  "Furnished private room near Green Line": "Möbliertes Privatzimmer nahe der Green Line",
  "Private room, step-free home": "Privatzimmer, stufenloses Zuhause",
  "Room near university shuttle": "Zimmer nahe dem Universitäts-Shuttle",
  "Bright loft room near Riverside": "Helles Loftzimmer nahe Riverside",
  "Harbor-view room, step-free access": "Zimmer mit Hafenblick, stufenloser Zugang",
  "Quiet street room, live-in provider": "Zimmer in ruhiger Straße, Vermieter mit Eigennutzung",
  "Midtown room with private entrance": "Zimmer in Stadtmitte mit eigenem Eingang",
  "Shared house room, east side": "Zimmer in Wohngemeinschaft, Ostseite",
  "Room near campus north, step-free": "Zimmer nahe Campus Nord, stufenlos",
  "Private room · Furnished · 0.4 mi to transit": "Privatzimmer · Möbliert · 0,4 Meilen bis zum Nahverkehr",
  "Private room · Furnished · 0.6 mi to transit": "Privatzimmer · Möbliert · 0,6 Meilen bis zum Nahverkehr",
  "Private room · Furnished · 0.2 mi to transit": "Privatzimmer · Möbliert · 0,2 Meilen bis zum Nahverkehr",
  "Private room · Unfurnished · 0.9 mi to transit": "Privatzimmer · Unmöbliert · 0,9 Meilen bis zum Nahverkehr",
  "Private room · Furnished · 0.3 mi to transit": "Privatzimmer · Möbliert · 0,3 Meilen bis zum Nahverkehr",
  "Private room · Furnished · 0.7 mi to transit": "Privatzimmer · Möbliert · 0,7 Meilen bis zum Nahverkehr",
  "Private room · Furnished · 0.5 mi to transit": "Privatzimmer · Möbliert · 0,5 Meilen bis zum Nahverkehr",
  "$45 estimated utilities": "45 $ geschätzte Nebenkosten",
  "bills included": "Nebenkosten inklusive",
  "$980 deposit": "980 $ Kaution",
  "$60 estimated utilities": "60 $ geschätzte Nebenkosten",
  "$30 estimated utilities": "30 $ geschätzte Nebenkosten",
  "$40 estimated utilities": "40 $ geschätzte Nebenkosten",
  "$35 estimated utilities": "35 $ geschätzte Nebenkosten",
  "Available · confirmed today": "Verfügbar · heute bestätigt",
  "Availability to confirm · last checked 4 days ago": "Verfügbarkeit zu bestätigen · zuletzt vor 4 Tagen geprüft",
  "Availability to confirm · last checked 2 days ago": "Verfügbarkeit zu bestätigen · zuletzt vor 2 Tagen geprüft",
  "Availability to confirm · last checked 1 day ago": "Verfügbarkeit zu bestätigen · zuletzt vor 1 Tag geprüft",
  "Live-in provider authority confirmed": "Berechtigung des Vermieters mit Eigennutzung bestätigt",
  "Landlord identity confirmed; ownership evidence reviewed": "Identität des Vermieters bestätigt; Eigentumsnachweis geprüft",
  "Authorized agent · instruction valid through Dec 2026": "Bevollmächtigter Vertreter · Auftrag gültig bis Dezember 2026",
  "Document verified · ownership evidence reviewed": "Dokument verifiziert · Eigentumsnachweis geprüft",
  "Provider declared · not yet inspected": "Vom Anbieter angegeben · noch nicht geprüft",
  "Landlord identity confirmed": "Identität des Vermieters bestätigt",

  // FilterChipsRow / ResultsToolbar / RoomCard / SearchFiltersBar / SearchRoomsView / SupportCallouts
  "Search saved": "Suche gespeichert",
  "Save Search": "Suche speichern",
  "Alert created": "Benachrichtigung erstellt",
  "Create Alert": "Benachrichtigung erstellen",
  "Link copied": "Link kopiert",
  "Share Search": "Suche teilen",
  "Map view · illustrative pin placement, not geolocated": "Kartenansicht · illustrative Markierung, nicht geolokalisiert",
  "room matches": "Zimmer entspricht",
  "rooms match": "Zimmer entsprechen",
  "this search": "dieser Suche",
  Filters: "Filter",
  "Accessible features": "Barrierefreie Ausstattung",
  List: "Liste",
  Map: "Karte",
  Split: "Geteilt",
  "View room": "Zimmer ansehen",
  Saved: "Gespeichert",
  Save: "Speichern",
  Comparing: "Wird verglichen",
  Location: "Ort",
  "City, neighborhood, or building": "Stadt, Stadtviertel oder Gebäude",
  "Monthly Budget": "Monatsbudget",
  "Stay Length": "Aufenthaltsdauer",
  "Update Search": "Suche aktualisieren",
  "No rooms match this search yet. Try removing a filter or widening your budget or stay length.":
    "Diese Suche ergibt noch keine Treffer. Entfernen Sie einen Filter oder erweitern Sie Budget oder Aufenthaltsdauer.",
  "Not finding the right room?": "Kein passendes Zimmer gefunden?",
  "Change dates, area, budget, stay length, or optional preferences. Keep essential accessibility and safety requirements.":
    "Ändern Sie Termine, Gebiet, Budget, Aufenthaltsdauer oder optionale Präferenzen. Behalten Sie wesentliche Barrierefreiheits- und Sicherheitsanforderungen bei.",
  "Edit Search": "Suche bearbeiten",
  "View Nearby Areas": "Nahegelegene Gebiete ansehen",
  "Understand status before inquiry or application": "Status vor Anfrage oder Bewerbung verstehen",
  "Availability, provider identity, provider authority, room evidence, price completeness, payment route, and organization relationship are separate. Report any mismatch or pressure to pay.":
    "Verfügbarkeit, Anbieteridentität, Anbieterberechtigung, Zimmernachweise, Preisvollständigkeit, Zahlungsweg und Organisationsbeziehung sind voneinander getrennt. Melden Sie jede Abweichung oder Zahlungsdruck.",
  "Get Support": "Support erhalten",
};

const FR = {
  // HeroSection
  "Find a room that fits where you are going, when you need it, and how you live.":
    "Trouvez une chambre adaptée à votre destination, à votre échéance et à votre mode de vie.",
  "Search current room listings by location, move-in date, monthly budget, room type, household fit, accessibility, study, work, healthcare, or international-move needs.":
    "Recherchez des annonces de chambres actuelles par lieu, date d'emménagement, budget mensuel, type de chambre, adéquation au foyer, accessibilité, études, travail, santé ou besoins de déménagement international.",
  "Where are you moving?": "Où déménagez-vous ?",
  "City, neighborhood, university": "Ville, quartier, université",
  "Date or flexible": "Date ou flexible",
  "Monthly budget": "Budget mensuel",
  "Min – Max": "Min – Max",
  "Flexible dates": "Dates flexibles",
  "Accessible home features": "Équipements accessibles",
  "Institution or employer": "Institution ou employeur",
  "Bright private room with plants, ready to search and book":
    "Chambre privée lumineuse avec plantes, prête à rechercher et réserver",

  // AccountabilitySection
  "How Discovery Stays Accountable": "Comment la recherche reste responsable",
  "Availability truth, authority, price clarity, and safe next steps":
    "Exactitude de la disponibilité, autorité, clarté des prix et étapes sûres",
  "We explain what Zoiko Rooms checks, what remains the provider's responsibility, what you must still confirm, and how to report or correct information.":
    "Nous expliquons ce que Zoiko Rooms vérifie, ce qui reste de la responsabilité du bailleur, ce que vous devez encore confirmer, et comment signaler ou corriger une information.",
  "A calm, well-lit living room representing an accountable rental process":
    "Un salon calme et bien éclairé représentant un processus de location responsable",

  // AudienceRowsSection
  "Find rooms around universities, campuses and term timelines":
    "Trouver des chambres près des universités, campus et calendriers de semestre",
  "Search by institution, term dates and budget, with guarantor and deposit needs explained clearly. Zoiko Rooms does not imply university endorsement unless formally authorized.":
    "Recherchez par institution, dates de semestre et budget, avec des besoins de garant et de dépôt clairement expliqués. Zoiko Rooms n'implique aucun soutien universitaire sauf autorisation formelle.",
  "Explore University Rooms": "Découvrir les chambres étudiantes",
  "Search around workplaces, hospitals, placements and rotations":
    "Recherche autour des lieux de travail, hôpitaux, stages et rotations",
  "Shift-aware timing, commute context and flexible-stay signals, without requesting diagnosis, treatment or unrelated employment details.":
    "Horaires adaptés aux équipes, contexte de trajet et signaux de séjour flexible, sans demander de diagnostic, traitement ou détails d'emploi non pertinents.",
  "Explore Work & Healthcare Rooms": "Découvrir les chambres pour le travail et la santé",
  "Plan a cross-border room search with less uncertainty":
    "Planifier une recherche de chambre transfrontalière avec moins d'incertitude",
  "Original-currency pricing, timing, documents, payments, arrival and support guidance. Zoiko Rooms does not provide immigration, tax or legal advice.":
    "Tarification en devise d'origine, calendrier, documents, paiements, arrivée et conseils d'accompagnement. Zoiko Rooms ne fournit pas de conseils en immigration, fiscalité ou droit.",
  "Explore International Moves": "Découvrir les déménagements internationaux",

  // FaqSection
  "Frequently Asked Questions": "Questions fréquentes",
  "Find a Room FAQ": "FAQ Trouver une chambre",
  "How do I find a room on Zoiko Rooms?": "Comment trouver une chambre sur Zoiko Rooms ?",
  "Enter a location, move-in date or flexible timing, and monthly budget, then refine by room type, stay length, household, accessibility, university, work, healthcare, or international-move needs.":
    "Indiquez un lieu, une date d'emménagement ou un calendrier flexible, et un budget mensuel, puis affinez par type de chambre, durée de séjour, foyer, accessibilité, université, travail, santé ou besoins de déménagement international.",
  "Does available mean the room is definitely available?":
    "« Disponible » signifie-t-il que la chambre l'est vraiment ?",
  "Available means the listing's status was confirmed as of its last-checked date. Confirm current availability with the provider before you commit, since status can change between checks.":
    "« Disponible » signifie que le statut de l'annonce a été confirmé à sa dernière date de vérification. Confirmez la disponibilité actuelle auprès du bailleur avant de vous engager, car le statut peut changer entre deux vérifications.",
  "What does verified mean?": "Que signifie « vérifié » ?",
  "Each detail carries the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked, rather than a single blanket badge.":
    "Chaque détail porte la preuve qui le sous-tend — déclaré par le bailleur, vérifié par document ou inspecté physiquement — afin que vous sachiez toujours comment une affirmation a été vérifiée, plutôt qu'un simple badge générique.",
  "How much will a room cost?": "Combien coûtera une chambre ?",
  "Listings show monthly rent alongside disclosed deposit, fees, and bills where the provider has itemized them, so you can compare total cost rather than rent alone.":
    "Les annonces affichent le loyer mensuel ainsi que le dépôt, les frais et les charges divulgués lorsque le bailleur les a détaillés, afin que vous puissiez comparer le coût total plutôt que le seul loyer.",
  "Can I find rooms near a university or hospital?": "Puis-je trouver des chambres près d'une université ou d'un hôpital ?",
  "Yes. University Rooms and Work & Healthcare Rooms let you search around institutions, term timelines, workplaces, and rotations without requesting unrelated personal details.":
    "Oui. Les chambres étudiantes et les chambres pour le travail et la santé permettent de rechercher autour des institutions, calendriers de semestre, lieux de travail et rotations, sans demander de détails personnels non pertinents.",
  "Can Zoiko Rooms guarantee a safe room?": "Zoiko Rooms peut-il garantir une chambre sûre ?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "Non. La vérification réduit l'incertitude mais ne garantit ni la sécurité, ni la légalité, ni l'adéquation, ni l'état du bien, ni un comportement futur. Utilisez les fonctions de signalement, de blocage et de support si quelque chose semble anormal.",
  "Can I search before moving internationally?": "Puis-je rechercher avant un déménagement international ?",
  "Yes. International Moves supports original-currency pricing, timing, documents, payments, arrival, and support guidance, though Zoiko Rooms does not provide immigration, tax, or legal advice.":
    "Oui. « Déménagements internationaux » propose une tarification en devise d'origine, un calendrier, des documents, des paiements, des conseils d'arrivée et de soutien, bien que Zoiko Rooms ne fournisse pas de conseils en immigration, fiscalité ou droit.",
  "Ready to continue?": "Prêt à continuer ?",
  "Search available rooms, save a search, or list a room through the appropriate provider pathway.":
    "Recherchez des chambres disponibles, enregistrez une recherche, ou publiez une chambre via le parcours bailleur approprié.",
  "Get Help": "Obtenir de l'aide",

  // FeaturedModulesSection
  "Featured Search Modules": "Modules de recherche à la une",
  "Explore by destination, life situation, and move timing":
    "Explorer par destination, situation de vie et calendrier de déménagement",
  "Use real inventory-backed destinations. Coverage gaps are explained rather than hidden.":
    "Utilisez des destinations adossées à un inventaire réel. Les lacunes de couverture sont expliquées, pas dissimulées.",
  "Search, filter, compare, save, and continue.": "Rechercher, filtrer, comparer, enregistrer et continuer.",
  "Explore Rooms by City": "Découvrir les chambres par ville",
  "Explore city context, cost patterns, transport, and availability.":
    "Découvrir le contexte de la ville, les tendances de coûts, les transports et la disponibilité.",
  "Find rooms around institutions and term timelines.": "Trouver des chambres près des institutions et des calendriers de semestre.",
  "Work & Healthcare": "Travail & Santé",
  "Search around workplaces, hospitals, placements, and rotations.":
    "Rechercher autour des lieux de travail, hôpitaux, stages et rotations.",
  "Explore Work & Healthcare": "Découvrir Travail & Santé",
  "Plan documents, timing, payments, support, and arrival.":
    "Planifier documents, calendrier, paiements, soutien et arrivée.",

  // RoomHighlightsSection
  "Current Room Highlights": "Chambres à la une actuellement",
  "Useful inventory patterns, not paid ranking": "Tendances utiles de l'inventaire, pas un classement payant",
  "Search all rooms": "Rechercher toutes les chambres",
  "Private room near downtown": "Chambre privée près du centre-ville",
  "$1,200/month + disclosed bills": "1 200 $/mois + charges divulguées",
  "Available · checked today": "Disponible · vérifié aujourd'hui",
  "Furnished room near university": "Chambre meublée près de l'université",
  "$980/month; deposit shown": "980 $/mois ; dépôt indiqué",
  "Availability to confirm": "Disponibilité à confirmer",
  "Accessible room near hospital": "Chambre accessible près de l'hôpital",
  "$1,350/month; fees itemized": "1 350 $/mois ; frais détaillés",
  "Provider authority confirmed": "Autorité du bailleur confirmée",

  // RoomsByCitySection (find-a-room)
  "Explore rooms and practical renting context, city by city":
    "Découvrir les chambres et le contexte pratique de location, ville par ville",
  "Only cities with current, sufficient inventory or genuinely useful guidance are shown — no thin or empty city pages.":
    "Seules les villes disposant d'un inventaire actuel suffisant ou d'informations réellement utiles sont affichées — pas de pages de ville vides ou incomplètes.",
  "Active inventory · reviewed 12 Jul 2026": "Inventaire actif · vérifié le 12 juillet 2026",
  "Active inventory · reviewed 8 Jul 2026": "Inventaire actif · vérifié le 8 juillet 2026",
  "Announced · launching Sep 2026": "Annoncé · lancement en septembre 2026",

  // SearchAssuranceSection
  "Search Assurance": "Garanties de recherche",
  "What you can check before you commit": "Ce que vous pouvez vérifier avant de vous engager",
  "Availability status and last checked": "Statut de disponibilité et dernière vérification",
  "Provider authority and verification scope": "Autorité du bailleur et portée de la vérification",
  "Monthly rent, deposit, fees, and bills": "Loyer mensuel, dépôt, frais et charges",
  "Report, block, support, and safe-viewing guidance": "Conseils de signalement, blocage, support et visite en sécurité",
  "Truth Strip": "Bandeau de vérité",
  "Know what is confirmed — and what still needs checking": "Savoir ce qui est confirmé — et ce qui reste à vérifier",
  "Status labels distinguish the following states across every listing:":
    "Les libellés de statut distinguent les états suivants pour chaque annonce :",
  Available: "Disponible",
  Reserved: "Réservé",
  "Application in progress": "Candidature en cours",
  Unavailable: "Non disponible",
  Paused: "En pause",
  "Status disputed": "Statut contesté",
  Removed: "Supprimé",
  "Evidence expired": "Preuve expirée",

  // SeekerGuidanceSection
  "Seeker Guidance": "Conseils pour les chercheurs",
  "Compare, view, apply and safely": "Comparer, visiter, postuler en toute sécurité",
  "Define needs": "Définir ses besoins",
  "Location, dates, budget, stay length, room type, household fit, and accessibility.":
    "Lieu, dates, budget, durée de séjour, type de chambre, adéquation au foyer et accessibilité.",
  "Review status": "Vérifier le statut",
  "Availability freshness, provider type, authority scope, room evidence, and costs.":
    "Actualité de la disponibilité, type de bailleur, portée de l'autorité, preuves de la chambre et coûts.",
  Compare: "Comparer",
  "Total cost, commute, room facts, accessibility, agreement terms, and safety — not price alone.":
    "Coût total, trajet, caractéristiques de la chambre, accessibilité, conditions du contrat et sécurité — pas seulement le prix.",
  "Communicate safely": "Communiquer en sécurité",
  "Keep a clear record; use report, block, and support controls.":
    "Conservez un historique clair ; utilisez les fonctions de signalement, de blocage et de support.",
  "A cozy living room where a room seeker reviews listings":
    "Un salon chaleureux où une personne en recherche de chambre consulte des annonces",

  // search-rooms: quickFilters / budget / stay length / sort
  Furnished: "Meublée",
  "Bills Included": "Charges comprises",
  "Step-free access": "Accès sans marche",
  "Live-in provider": "Bailleur résident",
  "0.5 mi to transit": "0,5 mi des transports",
  "Any budget": "Tout budget",
  "$600 – $1,000": "600 $ – 1 000 $",
  "$800 – $1,400": "800 $ – 1 400 $",
  "$1,000 – $1,600": "1 000 $ – 1 600 $",
  "$1,400 – $2,000": "1 400 $ – 2 000 $",
  "Any stay length": "Toute durée de séjour",
  "1–3 months": "1 à 3 mois",
  "3–6 months": "3 à 6 mois",
  "6–12 months": "6 à 12 mois",
  "12+ months": "12 mois et plus",
  "Sort: Recommended": "Trier : Recommandé",
  "Sort: Price, low to high": "Trier : Prix croissant",
  "Sort: Price, high to low": "Trier : Prix décroissant",

  // search-rooms: room data
  "Furnished private room near Green Line": "Chambre privée meublée près de la Green Line",
  "Private room, step-free home": "Chambre privée, logement sans marche",
  "Room near university shuttle": "Chambre près de la navette universitaire",
  "Bright loft room near Riverside": "Chambre loft lumineuse près de Riverside",
  "Harbor-view room, step-free access": "Chambre avec vue sur le port, accès sans marche",
  "Quiet street room, live-in provider": "Chambre dans une rue calme, bailleur résident",
  "Midtown room with private entrance": "Chambre en centre-ville avec entrée privée",
  "Shared house room, east side": "Chambre en colocation, côté est",
  "Room near campus north, step-free": "Chambre près du campus nord, sans marche",
  "Private room · Furnished · 0.4 mi to transit": "Chambre privée · Meublée · 0,4 mi des transports",
  "Private room · Furnished · 0.6 mi to transit": "Chambre privée · Meublée · 0,6 mi des transports",
  "Private room · Furnished · 0.2 mi to transit": "Chambre privée · Meublée · 0,2 mi des transports",
  "Private room · Unfurnished · 0.9 mi to transit": "Chambre privée · Non meublée · 0,9 mi des transports",
  "Private room · Furnished · 0.3 mi to transit": "Chambre privée · Meublée · 0,3 mi des transports",
  "Private room · Furnished · 0.7 mi to transit": "Chambre privée · Meublée · 0,7 mi des transports",
  "Private room · Furnished · 0.5 mi to transit": "Chambre privée · Meublée · 0,5 mi des transports",
  "$45 estimated utilities": "45 $ de charges estimées",
  "bills included": "charges comprises",
  "$980 deposit": "980 $ de dépôt",
  "$60 estimated utilities": "60 $ de charges estimées",
  "$30 estimated utilities": "30 $ de charges estimées",
  "$40 estimated utilities": "40 $ de charges estimées",
  "$35 estimated utilities": "35 $ de charges estimées",
  "Available · confirmed today": "Disponible · confirmé aujourd'hui",
  "Availability to confirm · last checked 4 days ago": "Disponibilité à confirmer · vérifié il y a 4 jours",
  "Availability to confirm · last checked 2 days ago": "Disponibilité à confirmer · vérifié il y a 2 jours",
  "Availability to confirm · last checked 1 day ago": "Disponibilité à confirmer · vérifié il y a 1 jour",
  "Live-in provider authority confirmed": "Autorité du bailleur résident confirmée",
  "Landlord identity confirmed; ownership evidence reviewed": "Identité du bailleur confirmée ; preuve de propriété vérifiée",
  "Authorized agent · instruction valid through Dec 2026": "Agent autorisé · mandat valide jusqu'en décembre 2026",
  "Document verified · ownership evidence reviewed": "Document vérifié · preuve de propriété vérifiée",
  "Provider declared · not yet inspected": "Déclaré par le bailleur · pas encore inspecté",
  "Landlord identity confirmed": "Identité du bailleur confirmée",

  // FilterChipsRow / ResultsToolbar / RoomCard / SearchFiltersBar / SearchRoomsView / SupportCallouts
  "Search saved": "Recherche enregistrée",
  "Save Search": "Enregistrer la recherche",
  "Alert created": "Alerte créée",
  "Create Alert": "Créer une alerte",
  "Link copied": "Lien copié",
  "Share Search": "Partager la recherche",
  "Map view · illustrative pin placement, not geolocated": "Vue carte · placement des repères illustratif, non géolocalisé",
  "room matches": "chambre correspond",
  "rooms match": "chambres correspondent",
  "this search": "à cette recherche",
  Filters: "Filtres",
  "Accessible features": "Équipements accessibles",
  List: "Liste",
  Map: "Carte",
  Split: "Partagé",
  "View room": "Voir la chambre",
  Saved: "Enregistrée",
  Save: "Enregistrer",
  Comparing: "En comparaison",
  Location: "Lieu",
  "City, neighborhood, or building": "Ville, quartier ou immeuble",
  "Monthly Budget": "Budget mensuel",
  "Stay Length": "Durée de séjour",
  "Update Search": "Mettre à jour la recherche",
  "No rooms match this search yet. Try removing a filter or widening your budget or stay length.":
    "Aucune chambre ne correspond encore à cette recherche. Essayez de retirer un filtre ou d'élargir votre budget ou votre durée de séjour.",
  "Not finding the right room?": "Vous ne trouvez pas la bonne chambre ?",
  "Change dates, area, budget, stay length, or optional preferences. Keep essential accessibility and safety requirements.":
    "Modifiez les dates, la zone, le budget, la durée de séjour ou les préférences facultatives. Conservez les exigences essentielles d'accessibilité et de sécurité.",
  "Edit Search": "Modifier la recherche",
  "View Nearby Areas": "Voir les zones à proximité",
  "Understand status before inquiry or application": "Comprendre le statut avant toute demande ou candidature",
  "Availability, provider identity, provider authority, room evidence, price completeness, payment route, and organization relationship are separate. Report any mismatch or pressure to pay.":
    "Disponibilité, identité du bailleur, autorité du bailleur, preuves de la chambre, exhaustivité du prix, voie de paiement et relation avec l'organisation sont distinctes. Signalez toute incohérence ou pression de paiement.",
  "Get Support": "Obtenir du support",
};

const ES = {
  // HeroSection
  "Find a room that fits where you are going, when you need it, and how you live.":
    "Encuentra una habitación acorde a tu destino, tu momento y tu forma de vida.",
  "Search current room listings by location, move-in date, monthly budget, room type, household fit, accessibility, study, work, healthcare, or international-move needs.":
    "Busca anuncios de habitaciones actuales por ubicación, fecha de mudanza, presupuesto mensual, tipo de habitación, adecuación al hogar, accesibilidad, estudios, trabajo, salud o necesidades de mudanza internacional.",
  "Where are you moving?": "¿A dónde te mudas?",
  "City, neighborhood, university": "Ciudad, barrio, universidad",
  "Date or flexible": "Fecha o flexible",
  "Monthly budget": "Presupuesto mensual",
  "Min – Max": "Mín. – Máx.",
  "Flexible dates": "Fechas flexibles",
  "Accessible home features": "Características accesibles del hogar",
  "Institution or employer": "Institución o empleador",
  "Bright private room with plants, ready to search and book":
    "Habitación privada luminosa con plantas, lista para buscar y reservar",

  // AccountabilitySection
  "How Discovery Stays Accountable": "Cómo la búsqueda se mantiene responsable",
  "Availability truth, authority, price clarity, and safe next steps":
    "Veracidad de la disponibilidad, autoridad, claridad de precios y próximos pasos seguros",
  "We explain what Zoiko Rooms checks, what remains the provider's responsibility, what you must still confirm, and how to report or correct information.":
    "Explicamos qué verifica Zoiko Rooms, qué sigue siendo responsabilidad del proveedor, qué debes confirmar todavía y cómo reportar o corregir información.",
  "A calm, well-lit living room representing an accountable rental process":
    "Una sala de estar tranquila y bien iluminada que representa un proceso de alquiler responsable",

  // AudienceRowsSection
  "Find rooms around universities, campuses and term timelines":
    "Encuentra habitaciones cerca de universidades, campus y calendarios académicos",
  "Search by institution, term dates and budget, with guarantor and deposit needs explained clearly. Zoiko Rooms does not imply university endorsement unless formally authorized.":
    "Busca por institución, fechas académicas y presupuesto, con las necesidades de aval y depósito explicadas con claridad. Zoiko Rooms no implica el respaldo de la universidad salvo autorización formal.",
  "Explore University Rooms": "Explorar habitaciones para estudiantes",
  "Search around workplaces, hospitals, placements and rotations":
    "Busca cerca de lugares de trabajo, hospitales, prácticas y rotaciones",
  "Shift-aware timing, commute context and flexible-stay signals, without requesting diagnosis, treatment or unrelated employment details.":
    "Horarios adaptados a turnos, contexto de desplazamiento y señales de estancia flexible, sin solicitar diagnóstico, tratamiento ni detalles laborales no relacionados.",
  "Explore Work & Healthcare Rooms": "Explorar habitaciones para trabajo y salud",
  "Plan a cross-border room search with less uncertainty":
    "Planifica una búsqueda de habitación transfronteriza con menos incertidumbre",
  "Original-currency pricing, timing, documents, payments, arrival and support guidance. Zoiko Rooms does not provide immigration, tax or legal advice.":
    "Precios en moneda de origen, calendario, documentos, pagos, orientación de llegada y soporte. Zoiko Rooms no ofrece asesoramiento de inmigración, fiscal ni legal.",
  "Explore International Moves": "Explorar mudanzas internacionales",

  // FaqSection
  "Frequently Asked Questions": "Preguntas frecuentes",
  "Find a Room FAQ": "Preguntas frecuentes: Buscar habitación",
  "How do I find a room on Zoiko Rooms?": "¿Cómo encuentro una habitación en Zoiko Rooms?",
  "Enter a location, move-in date or flexible timing, and monthly budget, then refine by room type, stay length, household, accessibility, university, work, healthcare, or international-move needs.":
    "Introduce una ubicación, fecha de mudanza o disponibilidad flexible y presupuesto mensual, luego perfecciona por tipo de habitación, duración de estancia, hogar, accesibilidad, universidad, trabajo, salud o necesidades de mudanza internacional.",
  "Does available mean the room is definitely available?":
    "¿«Disponible» significa que la habitación definitivamente lo está?",
  "Available means the listing's status was confirmed as of its last-checked date. Confirm current availability with the provider before you commit, since status can change between checks.":
    "«Disponible» significa que el estado del anuncio se confirmó en su última fecha de verificación. Confirma la disponibilidad actual con el proveedor antes de comprometerte, ya que el estado puede cambiar entre verificaciones.",
  "What does verified mean?": "¿Qué significa «verificado»?",
  "Each detail carries the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked, rather than a single blanket badge.":
    "Cada detalle lleva la evidencia que lo respalda —declarado por el proveedor, verificado por documento o inspeccionado físicamente—, para que siempre sepas cómo se comprobó una afirmación, en lugar de una única insignia genérica.",
  "How much will a room cost?": "¿Cuánto costará una habitación?",
  "Listings show monthly rent alongside disclosed deposit, fees, and bills where the provider has itemized them, so you can compare total cost rather than rent alone.":
    "Los anuncios muestran el alquiler mensual junto con el depósito, las tarifas y los servicios divulgados cuando el proveedor los ha detallado, para que puedas comparar el costo total en lugar de solo el alquiler.",
  "Can I find rooms near a university or hospital?": "¿Puedo encontrar habitaciones cerca de una universidad u hospital?",
  "Yes. University Rooms and Work & Healthcare Rooms let you search around institutions, term timelines, workplaces, and rotations without requesting unrelated personal details.":
    "Sí. Habitaciones para estudiantes y Habitaciones para trabajo y salud te permiten buscar cerca de instituciones, calendarios académicos, lugares de trabajo y rotaciones sin solicitar datos personales no relacionados.",
  "Can Zoiko Rooms guarantee a safe room?": "¿Puede Zoiko Rooms garantizar una habitación segura?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "No. La verificación reduce la incertidumbre, pero no garantiza seguridad, legalidad, idoneidad, estado de la propiedad ni conducta futura. Usa las funciones de reportar, bloquear y soporte si algo no parece correcto.",
  "Can I search before moving internationally?": "¿Puedo buscar antes de mudarme internacionalmente?",
  "Yes. International Moves supports original-currency pricing, timing, documents, payments, arrival, and support guidance, though Zoiko Rooms does not provide immigration, tax, or legal advice.":
    "Sí. Mudanzas internacionales ofrece precios en moneda de origen, calendario, documentos, pagos, orientación de llegada y soporte, aunque Zoiko Rooms no ofrece asesoramiento de inmigración, fiscal ni legal.",
  "Ready to continue?": "¿Listo para continuar?",
  "Search available rooms, save a search, or list a room through the appropriate provider pathway.":
    "Busca habitaciones disponibles, guarda una búsqueda o publica una habitación a través de la vía de proveedor adecuada.",
  "Get Help": "Obtener ayuda",

  // FeaturedModulesSection
  "Featured Search Modules": "Módulos de búsqueda destacados",
  "Explore by destination, life situation, and move timing":
    "Explorar por destino, situación de vida y momento de la mudanza",
  "Use real inventory-backed destinations. Coverage gaps are explained rather than hidden.":
    "Usa destinos respaldados por inventario real. Las brechas de cobertura se explican, no se ocultan.",
  "Search, filter, compare, save, and continue.": "Buscar, filtrar, comparar, guardar y continuar.",
  "Explore Rooms by City": "Explorar habitaciones por ciudad",
  "Explore city context, cost patterns, transport, and availability.":
    "Explorar el contexto de la ciudad, patrones de costos, transporte y disponibilidad.",
  "Find rooms around institutions and term timelines.": "Encontrar habitaciones cerca de instituciones y calendarios académicos.",
  "Work & Healthcare": "Trabajo y salud",
  "Search around workplaces, hospitals, placements, and rotations.":
    "Buscar cerca de lugares de trabajo, hospitales, prácticas y rotaciones.",
  "Explore Work & Healthcare": "Explorar Trabajo y salud",
  "Plan documents, timing, payments, support, and arrival.":
    "Planificar documentos, calendario, pagos, soporte y llegada.",

  // RoomHighlightsSection
  "Current Room Highlights": "Habitaciones destacadas actuales",
  "Useful inventory patterns, not paid ranking": "Patrones útiles del inventario, no un ranking pagado",
  "Search all rooms": "Buscar todas las habitaciones",
  "Private room near downtown": "Habitación privada cerca del centro",
  "$1,200/month + disclosed bills": "1200 $/mes + servicios divulgados",
  "Available · checked today": "Disponible · verificado hoy",
  "Furnished room near university": "Habitación amueblada cerca de la universidad",
  "$980/month; deposit shown": "980 $/mes; depósito indicado",
  "Availability to confirm": "Disponibilidad por confirmar",
  "Accessible room near hospital": "Habitación accesible cerca del hospital",
  "$1,350/month; fees itemized": "1350 $/mes; tarifas detalladas",
  "Provider authority confirmed": "Autoridad del proveedor confirmada",

  // RoomsByCitySection (find-a-room)
  "Explore rooms and practical renting context, city by city":
    "Explora habitaciones y contexto práctico de alquiler, ciudad por ciudad",
  "Only cities with current, sufficient inventory or genuinely useful guidance are shown — no thin or empty city pages.":
    "Solo se muestran ciudades con inventario actual suficiente o información realmente útil, sin páginas de ciudad vacías o pobres.",
  "Active inventory · reviewed 12 Jul 2026": "Inventario activo · revisado el 12 de julio de 2026",
  "Active inventory · reviewed 8 Jul 2026": "Inventario activo · revisado el 8 de julio de 2026",
  "Announced · launching Sep 2026": "Anunciado · lanzamiento en septiembre de 2026",

  // SearchAssuranceSection
  "Search Assurance": "Garantía de búsqueda",
  "What you can check before you commit": "Qué puedes verificar antes de comprometerte",
  "Availability status and last checked": "Estado de disponibilidad y última verificación",
  "Provider authority and verification scope": "Autoridad del proveedor y alcance de la verificación",
  "Monthly rent, deposit, fees, and bills": "Alquiler mensual, depósito, tarifas y servicios",
  "Report, block, support, and safe-viewing guidance": "Orientación para reportar, bloquear, soporte y visitas seguras",
  "Truth Strip": "Franja de veracidad",
  "Know what is confirmed — and what still needs checking": "Saber qué está confirmado — y qué falta por verificar",
  "Status labels distinguish the following states across every listing:":
    "Las etiquetas de estado distinguen los siguientes estados en cada anuncio:",
  Available: "Disponible",
  Reserved: "Reservado",
  "Application in progress": "Solicitud en curso",
  Unavailable: "No disponible",
  Paused: "Pausado",
  "Status disputed": "Estado en disputa",
  Removed: "Eliminado",
  "Evidence expired": "Evidencia caducada",

  // SeekerGuidanceSection
  "Seeker Guidance": "Orientación para quien busca",
  "Compare, view, apply and safely": "Comparar, ver, postular y hacerlo con seguridad",
  "Define needs": "Definir necesidades",
  "Location, dates, budget, stay length, room type, household fit, and accessibility.":
    "Ubicación, fechas, presupuesto, duración de estancia, tipo de habitación, adecuación al hogar y accesibilidad.",
  "Review status": "Revisar el estado",
  "Availability freshness, provider type, authority scope, room evidence, and costs.":
    "Actualidad de la disponibilidad, tipo de proveedor, alcance de la autoridad, evidencia de la habitación y costos.",
  Compare: "Comparar",
  "Total cost, commute, room facts, accessibility, agreement terms, and safety — not price alone.":
    "Costo total, desplazamiento, datos de la habitación, accesibilidad, condiciones del acuerdo y seguridad, no solo el precio.",
  "Communicate safely": "Comunicarse con seguridad",
  "Keep a clear record; use report, block, and support controls.":
    "Mantén un registro claro; usa las funciones de reportar, bloquear y soporte.",
  "A cozy living room where a room seeker reviews listings":
    "Una sala de estar acogedora donde una persona en búsqueda revisa anuncios",

  // search-rooms: quickFilters / budget / stay length / sort
  Furnished: "Amueblada",
  "Bills Included": "Servicios incluidos",
  "Step-free access": "Acceso sin escalones",
  "Live-in provider": "Proveedor residente",
  "0.5 mi to transit": "A 0,5 millas del transporte",
  "Any budget": "Cualquier presupuesto",
  "$600 – $1,000": "600 $ – 1000 $",
  "$800 – $1,400": "800 $ – 1400 $",
  "$1,000 – $1,600": "1000 $ – 1600 $",
  "$1,400 – $2,000": "1400 $ – 2000 $",
  "Any stay length": "Cualquier duración de estancia",
  "1–3 months": "1–3 meses",
  "3–6 months": "3–6 meses",
  "6–12 months": "6–12 meses",
  "12+ months": "12+ meses",
  "Sort: Recommended": "Ordenar: Recomendado",
  "Sort: Price, low to high": "Ordenar: Precio, de menor a mayor",
  "Sort: Price, high to low": "Ordenar: Precio, de mayor a menor",

  // search-rooms: room data
  "Furnished private room near Green Line": "Habitación privada amueblada cerca de Green Line",
  "Private room, step-free home": "Habitación privada, vivienda sin escalones",
  "Room near university shuttle": "Habitación cerca del transporte universitario",
  "Bright loft room near Riverside": "Loft luminoso cerca de Riverside",
  "Harbor-view room, step-free access": "Habitación con vista al puerto, acceso sin escalones",
  "Quiet street room, live-in provider": "Habitación en calle tranquila, proveedor residente",
  "Midtown room with private entrance": "Habitación céntrica con entrada privada",
  "Shared house room, east side": "Habitación en casa compartida, lado este",
  "Room near campus north, step-free": "Habitación cerca del campus norte, sin escalones",
  "Private room · Furnished · 0.4 mi to transit": "Habitación privada · Amueblada · a 0,4 millas del transporte",
  "Private room · Furnished · 0.6 mi to transit": "Habitación privada · Amueblada · a 0,6 millas del transporte",
  "Private room · Furnished · 0.2 mi to transit": "Habitación privada · Amueblada · a 0,2 millas del transporte",
  "Private room · Unfurnished · 0.9 mi to transit": "Habitación privada · Sin amueblar · a 0,9 millas del transporte",
  "Private room · Furnished · 0.3 mi to transit": "Habitación privada · Amueblada · a 0,3 millas del transporte",
  "Private room · Furnished · 0.7 mi to transit": "Habitación privada · Amueblada · a 0,7 millas del transporte",
  "Private room · Furnished · 0.5 mi to transit": "Habitación privada · Amueblada · a 0,5 millas del transporte",
  "$45 estimated utilities": "45 $ de servicios estimados",
  "bills included": "servicios incluidos",
  "$980 deposit": "980 $ de depósito",
  "$60 estimated utilities": "60 $ de servicios estimados",
  "$30 estimated utilities": "30 $ de servicios estimados",
  "$40 estimated utilities": "40 $ de servicios estimados",
  "$35 estimated utilities": "35 $ de servicios estimados",
  "Available · confirmed today": "Disponible · confirmado hoy",
  "Availability to confirm · last checked 4 days ago": "Disponibilidad por confirmar · verificado hace 4 días",
  "Availability to confirm · last checked 2 days ago": "Disponibilidad por confirmar · verificado hace 2 días",
  "Availability to confirm · last checked 1 day ago": "Disponibilidad por confirmar · verificado hace 1 día",
  "Live-in provider authority confirmed": "Autoridad del proveedor residente confirmada",
  "Landlord identity confirmed; ownership evidence reviewed": "Identidad del propietario confirmada; evidencia de propiedad revisada",
  "Authorized agent · instruction valid through Dec 2026": "Agente autorizado · mandato vigente hasta diciembre de 2026",
  "Document verified · ownership evidence reviewed": "Documento verificado · evidencia de propiedad revisada",
  "Provider declared · not yet inspected": "Declarado por el proveedor · aún no inspeccionado",
  "Landlord identity confirmed": "Identidad del propietario confirmada",

  // FilterChipsRow / ResultsToolbar / RoomCard / SearchFiltersBar / SearchRoomsView / SupportCallouts
  "Search saved": "Búsqueda guardada",
  "Save Search": "Guardar búsqueda",
  "Alert created": "Alerta creada",
  "Create Alert": "Crear alerta",
  "Link copied": "Enlace copiado",
  "Share Search": "Compartir búsqueda",
  "Map view · illustrative pin placement, not geolocated": "Vista de mapa · ubicación de pines ilustrativa, no geolocalizada",
  "room matches": "habitación coincide",
  "rooms match": "habitaciones coinciden",
  "this search": "con esta búsqueda",
  Filters: "Filtros",
  "Accessible features": "Características accesibles",
  List: "Lista",
  Map: "Mapa",
  Split: "Dividido",
  "View room": "Ver habitación",
  Saved: "Guardada",
  Save: "Guardar",
  Comparing: "Comparando",
  Location: "Ubicación",
  "City, neighborhood, or building": "Ciudad, barrio o edificio",
  "Monthly Budget": "Presupuesto mensual",
  "Stay Length": "Duración de la estancia",
  "Update Search": "Actualizar búsqueda",
  "No rooms match this search yet. Try removing a filter or widening your budget or stay length.":
    "Todavía ninguna habitación coincide con esta búsqueda. Intenta quitar un filtro o ampliar tu presupuesto o duración de estancia.",
  "Not finding the right room?": "¿No encuentras la habitación adecuada?",
  "Change dates, area, budget, stay length, or optional preferences. Keep essential accessibility and safety requirements.":
    "Cambia fechas, zona, presupuesto, duración de estancia o preferencias opcionales. Conserva los requisitos esenciales de accesibilidad y seguridad.",
  "Edit Search": "Editar búsqueda",
  "View Nearby Areas": "Ver zonas cercanas",
  "Understand status before inquiry or application": "Comprende el estado antes de consultar o postular",
  "Availability, provider identity, provider authority, room evidence, price completeness, payment route, and organization relationship are separate. Report any mismatch or pressure to pay.":
    "Disponibilidad, identidad del proveedor, autoridad del proveedor, evidencia de la habitación, integridad del precio, vía de pago y relación con la organización son aspectos independientes. Reporta cualquier discrepancia o presión de pago.",
  "Get Support": "Obtener soporte",
};

const PT = {
  // HeroSection
  "Find a room that fits where you are going, when you need it, and how you live.":
    "Encontre um quarto que se ajuste ao seu destino, ao seu momento e ao seu estilo de vida.",
  "Search current room listings by location, move-in date, monthly budget, room type, household fit, accessibility, study, work, healthcare, or international-move needs.":
    "Pesquise anúncios de quartos atuais por localização, data de mudança, orçamento mensal, tipo de quarto, adequação ao lar, acessibilidade, estudos, trabalho, saúde ou necessidades de mudança internacional.",
  "Where are you moving?": "Para onde está se mudando?",
  "City, neighborhood, university": "Cidade, bairro, universidade",
  "Date or flexible": "Data ou flexível",
  "Monthly budget": "Orçamento mensal",
  "Min – Max": "Mín. – Máx.",
  "Flexible dates": "Datas flexíveis",
  "Accessible home features": "Características acessíveis do lar",
  "Institution or employer": "Instituição ou empregador",
  "Bright private room with plants, ready to search and book":
    "Quarto privado iluminado com plantas, pronto para pesquisar e reservar",

  // AccountabilitySection
  "How Discovery Stays Accountable": "Como a busca permanece responsável",
  "Availability truth, authority, price clarity, and safe next steps":
    "Veracidade da disponibilidade, autoridade, clareza de preços e próximos passos seguros",
  "We explain what Zoiko Rooms checks, what remains the provider's responsibility, what you must still confirm, and how to report or correct information.":
    "Explicamos o que a Zoiko Rooms verifica, o que permanece sob responsabilidade do fornecedor, o que ainda precisa de confirmação e como reportar ou corrigir informações.",
  "A calm, well-lit living room representing an accountable rental process":
    "Uma sala de estar tranquila e bem iluminada representando um processo de aluguer responsável",

  // AudienceRowsSection
  "Find rooms around universities, campuses and term timelines":
    "Encontre quartos perto de universidades, campus e calendários académicos",
  "Search by institution, term dates and budget, with guarantor and deposit needs explained clearly. Zoiko Rooms does not imply university endorsement unless formally authorized.":
    "Pesquise por instituição, datas académicas e orçamento, com as necessidades de fiador e depósito claramente explicadas. A Zoiko Rooms não implica apoio universitário, salvo autorização formal.",
  "Explore University Rooms": "Explorar quartos para estudantes",
  "Search around workplaces, hospitals, placements and rotations":
    "Pesquise perto de locais de trabalho, hospitais, estágios e rotações",
  "Shift-aware timing, commute context and flexible-stay signals, without requesting diagnosis, treatment or unrelated employment details.":
    "Horários adaptados a turnos, contexto de deslocação e sinais de estadia flexível, sem solicitar diagnóstico, tratamento ou detalhes de emprego não relacionados.",
  "Explore Work & Healthcare Rooms": "Explorar quartos para trabalho e saúde",
  "Plan a cross-border room search with less uncertainty":
    "Planeie uma pesquisa de quarto transfronteiriça com menos incerteza",
  "Original-currency pricing, timing, documents, payments, arrival and support guidance. Zoiko Rooms does not provide immigration, tax or legal advice.":
    "Preços na moeda de origem, calendário, documentos, pagamentos, orientação de chegada e apoio. A Zoiko Rooms não presta aconselhamento de imigração, fiscal ou jurídico.",
  "Explore International Moves": "Explorar mudanças internacionais",

  // FaqSection
  "Frequently Asked Questions": "Perguntas frequentes",
  "Find a Room FAQ": "FAQ: Encontrar um quarto",
  "How do I find a room on Zoiko Rooms?": "Como encontro um quarto na Zoiko Rooms?",
  "Enter a location, move-in date or flexible timing, and monthly budget, then refine by room type, stay length, household, accessibility, university, work, healthcare, or international-move needs.":
    "Indique uma localização, data de mudança ou calendário flexível, e orçamento mensal, depois refine por tipo de quarto, duração da estadia, lar, acessibilidade, universidade, trabalho, saúde ou necessidades de mudança internacional.",
  "Does available mean the room is definitely available?":
    "«Disponível» significa que o quarto está mesmo disponível?",
  "Available means the listing's status was confirmed as of its last-checked date. Confirm current availability with the provider before you commit, since status can change between checks.":
    "«Disponível» significa que o estado do anúncio foi confirmado na sua última data de verificação. Confirme a disponibilidade atual com o fornecedor antes de se comprometer, pois o estado pode mudar entre verificações.",
  "What does verified mean?": "O que significa «verificado»?",
  "Each detail carries the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked, rather than a single blanket badge.":
    "Cada detalhe traz a evidência que o sustenta — declarado pelo fornecedor, verificado por documento ou inspecionado fisicamente —, para que saiba sempre como uma afirmação foi verificada, em vez de um único selo genérico.",
  "How much will a room cost?": "Quanto custará um quarto?",
  "Listings show monthly rent alongside disclosed deposit, fees, and bills where the provider has itemized them, so you can compare total cost rather than rent alone.":
    "Os anúncios mostram a renda mensal juntamente com o depósito, taxas e contas divulgados quando o fornecedor os discriminou, para que possa comparar o custo total em vez de apenas a renda.",
  "Can I find rooms near a university or hospital?": "Posso encontrar quartos perto de uma universidade ou hospital?",
  "Yes. University Rooms and Work & Healthcare Rooms let you search around institutions, term timelines, workplaces, and rotations without requesting unrelated personal details.":
    "Sim. Quartos para estudantes e Quartos para trabalho e saúde permitem pesquisar perto de instituições, calendários académicos, locais de trabalho e rotações sem solicitar dados pessoais não relacionados.",
  "Can Zoiko Rooms guarantee a safe room?": "A Zoiko Rooms pode garantir um quarto seguro?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "Não. A verificação reduz a incerteza, mas não garante segurança, legalidade, adequação, estado do imóvel ou conduta futura. Use as funções de reportar, bloquear e suporte se algo parecer errado.",
  "Can I search before moving internationally?": "Posso pesquisar antes de uma mudança internacional?",
  "Yes. International Moves supports original-currency pricing, timing, documents, payments, arrival, and support guidance, though Zoiko Rooms does not provide immigration, tax, or legal advice.":
    "Sim. Mudanças internacionais oferece preços na moeda de origem, calendário, documentos, pagamentos, orientação de chegada e apoio, embora a Zoiko Rooms não preste aconselhamento de imigração, fiscal ou jurídico.",
  "Ready to continue?": "Pronto para continuar?",
  "Search available rooms, save a search, or list a room through the appropriate provider pathway.":
    "Pesquise quartos disponíveis, guarde uma pesquisa ou anuncie um quarto através do percurso de fornecedor adequado.",
  "Get Help": "Obter ajuda",

  // FeaturedModulesSection
  "Featured Search Modules": "Módulos de pesquisa em destaque",
  "Explore by destination, life situation, and move timing":
    "Explore por destino, situação de vida e momento da mudança",
  "Use real inventory-backed destinations. Coverage gaps are explained rather than hidden.":
    "Use destinos apoiados em inventário real. As lacunas de cobertura são explicadas, não escondidas.",
  "Search, filter, compare, save, and continue.": "Pesquisar, filtrar, comparar, guardar e continuar.",
  "Explore Rooms by City": "Explorar quartos por cidade",
  "Explore city context, cost patterns, transport, and availability.":
    "Explorar o contexto da cidade, padrões de custo, transporte e disponibilidade.",
  "Find rooms around institutions and term timelines.": "Encontrar quartos perto de instituições e calendários académicos.",
  "Work & Healthcare": "Trabalho e saúde",
  "Search around workplaces, hospitals, placements, and rotations.":
    "Pesquisar perto de locais de trabalho, hospitais, estágios e rotações.",
  "Explore Work & Healthcare": "Explorar Trabalho e saúde",
  "Plan documents, timing, payments, support, and arrival.":
    "Planear documentos, calendário, pagamentos, apoio e chegada.",

  // RoomHighlightsSection
  "Current Room Highlights": "Quartos em destaque atuais",
  "Useful inventory patterns, not paid ranking": "Padrões úteis do inventário, não uma classificação paga",
  "Search all rooms": "Pesquisar todos os quartos",
  "Private room near downtown": "Quarto privado perto do centro",
  "$1,200/month + disclosed bills": "1200 $/mês + contas divulgadas",
  "Available · checked today": "Disponível · verificado hoje",
  "Furnished room near university": "Quarto mobilado perto da universidade",
  "$980/month; deposit shown": "980 $/mês; depósito indicado",
  "Availability to confirm": "Disponibilidade a confirmar",
  "Accessible room near hospital": "Quarto acessível perto do hospital",
  "$1,350/month; fees itemized": "1350 $/mês; taxas discriminadas",
  "Provider authority confirmed": "Autoridade do fornecedor confirmada",

  // RoomsByCitySection (find-a-room)
  "Explore rooms and practical renting context, city by city":
    "Explore quartos e o contexto prático de arrendamento, cidade a cidade",
  "Only cities with current, sufficient inventory or genuinely useful guidance are shown — no thin or empty city pages.":
    "Só são apresentadas cidades com inventário atual suficiente ou orientação genuinamente útil — sem páginas de cidade vazias ou fracas.",
  "Active inventory · reviewed 12 Jul 2026": "Inventário ativo · revisto a 12 de julho de 2026",
  "Active inventory · reviewed 8 Jul 2026": "Inventário ativo · revisto a 8 de julho de 2026",
  "Announced · launching Sep 2026": "Anunciado · lançamento em setembro de 2026",

  // SearchAssuranceSection
  "Search Assurance": "Garantia de pesquisa",
  "What you can check before you commit": "O que pode verificar antes de se comprometer",
  "Availability status and last checked": "Estado de disponibilidade e última verificação",
  "Provider authority and verification scope": "Autoridade do fornecedor e âmbito de verificação",
  "Monthly rent, deposit, fees, and bills": "Renda mensal, depósito, taxas e contas",
  "Report, block, support, and safe-viewing guidance": "Orientação para reportar, bloquear, suporte e visitas seguras",
  "Truth Strip": "Faixa de veracidade",
  "Know what is confirmed — and what still needs checking": "Saiba o que está confirmado — e o que ainda precisa de verificação",
  "Status labels distinguish the following states across every listing:":
    "As etiquetas de estado distinguem os seguintes estados em cada anúncio:",
  Available: "Disponível",
  Reserved: "Reservado",
  "Application in progress": "Candidatura em curso",
  Unavailable: "Indisponível",
  Paused: "Em pausa",
  "Status disputed": "Estado contestado",
  Removed: "Removido",
  "Evidence expired": "Evidência expirada",

  // SeekerGuidanceSection
  "Seeker Guidance": "Orientação para quem procura",
  "Compare, view, apply and safely": "Comparar, ver, candidatar-se e com segurança",
  "Define needs": "Definir necessidades",
  "Location, dates, budget, stay length, room type, household fit, and accessibility.":
    "Localização, datas, orçamento, duração da estadia, tipo de quarto, adequação ao lar e acessibilidade.",
  "Review status": "Rever o estado",
  "Availability freshness, provider type, authority scope, room evidence, and costs.":
    "Atualidade da disponibilidade, tipo de fornecedor, âmbito de autoridade, evidências do quarto e custos.",
  Compare: "Comparar",
  "Total cost, commute, room facts, accessibility, agreement terms, and safety — not price alone.":
    "Custo total, deslocação, dados do quarto, acessibilidade, condições do acordo e segurança — não apenas o preço.",
  "Communicate safely": "Comunicar com segurança",
  "Keep a clear record; use report, block, and support controls.":
    "Mantenha um registo claro; use as funções de reportar, bloquear e suporte.",
  "A cozy living room where a room seeker reviews listings":
    "Uma sala de estar aconchegante onde uma pessoa em busca de quarto analisa anúncios",

  // search-rooms: quickFilters / budget / stay length / sort
  Furnished: "Mobilado",
  "Bills Included": "Contas incluídas",
  "Step-free access": "Acesso sem degraus",
  "Live-in provider": "Fornecedor residente",
  "0.5 mi to transit": "A 0,5 milhas do transporte",
  "Any budget": "Qualquer orçamento",
  "$600 – $1,000": "600 $ – 1000 $",
  "$800 – $1,400": "800 $ – 1400 $",
  "$1,000 – $1,600": "1000 $ – 1600 $",
  "$1,400 – $2,000": "1400 $ – 2000 $",
  "Any stay length": "Qualquer duração de estadia",
  "1–3 months": "1–3 meses",
  "3–6 months": "3–6 meses",
  "6–12 months": "6–12 meses",
  "12+ months": "12+ meses",
  "Sort: Recommended": "Ordenar: Recomendado",
  "Sort: Price, low to high": "Ordenar: Preço, crescente",
  "Sort: Price, high to low": "Ordenar: Preço, decrescente",

  // search-rooms: room data
  "Furnished private room near Green Line": "Quarto privado mobilado perto da Green Line",
  "Private room, step-free home": "Quarto privado, casa sem degraus",
  "Room near university shuttle": "Quarto perto do transporte universitário",
  "Bright loft room near Riverside": "Loft luminoso perto de Riverside",
  "Harbor-view room, step-free access": "Quarto com vista para o porto, acesso sem degraus",
  "Quiet street room, live-in provider": "Quarto em rua sossegada, fornecedor residente",
  "Midtown room with private entrance": "Quarto central com entrada privada",
  "Shared house room, east side": "Quarto em casa partilhada, lado este",
  "Room near campus north, step-free": "Quarto perto do campus norte, sem degraus",
  "Private room · Furnished · 0.4 mi to transit": "Quarto privado · Mobilado · a 0,4 milhas do transporte",
  "Private room · Furnished · 0.6 mi to transit": "Quarto privado · Mobilado · a 0,6 milhas do transporte",
  "Private room · Furnished · 0.2 mi to transit": "Quarto privado · Mobilado · a 0,2 milhas do transporte",
  "Private room · Unfurnished · 0.9 mi to transit": "Quarto privado · Não mobilado · a 0,9 milhas do transporte",
  "Private room · Furnished · 0.3 mi to transit": "Quarto privado · Mobilado · a 0,3 milhas do transporte",
  "Private room · Furnished · 0.7 mi to transit": "Quarto privado · Mobilado · a 0,7 milhas do transporte",
  "Private room · Furnished · 0.5 mi to transit": "Quarto privado · Mobilado · a 0,5 milhas do transporte",
  "$45 estimated utilities": "45 $ de contas estimadas",
  "bills included": "contas incluídas",
  "$980 deposit": "980 $ de depósito",
  "$60 estimated utilities": "60 $ de contas estimadas",
  "$30 estimated utilities": "30 $ de contas estimadas",
  "$40 estimated utilities": "40 $ de contas estimadas",
  "$35 estimated utilities": "35 $ de contas estimadas",
  "Available · confirmed today": "Disponível · confirmado hoje",
  "Availability to confirm · last checked 4 days ago": "Disponibilidade a confirmar · verificado há 4 dias",
  "Availability to confirm · last checked 2 days ago": "Disponibilidade a confirmar · verificado há 2 dias",
  "Availability to confirm · last checked 1 day ago": "Disponibilidade a confirmar · verificado há 1 dia",
  "Live-in provider authority confirmed": "Autoridade do fornecedor residente confirmada",
  "Landlord identity confirmed; ownership evidence reviewed": "Identidade do senhorio confirmada; evidência de propriedade revista",
  "Authorized agent · instruction valid through Dec 2026": "Agente autorizado · mandato válido até dezembro de 2026",
  "Document verified · ownership evidence reviewed": "Documento verificado · evidência de propriedade revista",
  "Provider declared · not yet inspected": "Declarado pelo fornecedor · ainda não inspecionado",
  "Landlord identity confirmed": "Identidade do senhorio confirmada",

  // FilterChipsRow / ResultsToolbar / RoomCard / SearchFiltersBar / SearchRoomsView / SupportCallouts
  "Search saved": "Pesquisa guardada",
  "Save Search": "Guardar pesquisa",
  "Alert created": "Alerta criado",
  "Create Alert": "Criar alerta",
  "Link copied": "Link copiado",
  "Share Search": "Partilhar pesquisa",
  "Map view · illustrative pin placement, not geolocated": "Vista de mapa · colocação de marcadores ilustrativa, não geolocalizada",
  "room matches": "quarto corresponde",
  "rooms match": "quartos correspondem",
  "this search": "a esta pesquisa",
  Filters: "Filtros",
  "Accessible features": "Características acessíveis",
  List: "Lista",
  Map: "Mapa",
  Split: "Dividido",
  "View room": "Ver quarto",
  Saved: "Guardado",
  Save: "Guardar",
  Comparing: "A comparar",
  Location: "Localização",
  "City, neighborhood, or building": "Cidade, bairro ou edifício",
  "Monthly Budget": "Orçamento mensal",
  "Stay Length": "Duração da estadia",
  "Update Search": "Atualizar pesquisa",
  "No rooms match this search yet. Try removing a filter or widening your budget or stay length.":
    "Ainda nenhum quarto corresponde a esta pesquisa. Tente remover um filtro ou alargar o orçamento ou a duração da estadia.",
  "Not finding the right room?": "Não está a encontrar o quarto certo?",
  "Change dates, area, budget, stay length, or optional preferences. Keep essential accessibility and safety requirements.":
    "Altere datas, área, orçamento, duração da estadia ou preferências opcionais. Mantenha os requisitos essenciais de acessibilidade e segurança.",
  "Edit Search": "Editar pesquisa",
  "View Nearby Areas": "Ver áreas próximas",
  "Understand status before inquiry or application": "Compreenda o estado antes de contactar ou candidatar-se",
  "Availability, provider identity, provider authority, room evidence, price completeness, payment route, and organization relationship are separate. Report any mismatch or pressure to pay.":
    "Disponibilidade, identidade do fornecedor, autoridade do fornecedor, evidência do quarto, integralidade do preço, via de pagamento e relação com a organização são aspetos distintos. Reporte qualquer incoerência ou pressão de pagamento.",
  "Get Support": "Obter suporte",
};

export const findARoomCoreDictionary: LanguageDictionaries = { DE, FR, ES, PT };
