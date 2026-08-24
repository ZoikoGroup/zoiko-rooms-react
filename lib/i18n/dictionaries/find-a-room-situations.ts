import type { LanguageDictionaries } from "../types";

// ---------------------------------------------------------------------------
// international-moves
// ---------------------------------------------------------------------------

const DE_INTERNATIONAL_MOVES: Record<string, string> = {
  "International Moves": "Internationale Umzüge",
  "Search for a room across borders with clearer timing, costs, documents, and support.":
    "Zimmer über Landesgrenzen hinweg suchen — mit klarerem Zeitplan, klaren Kosten, Dokumenten und Unterstützung.",
  "Choose a destination, expected arrival, stay length, and monthly budget in the listing currency. Refine by furnished status, university, workplace, healthcare location, organization referral, accessibility, guarantor alternatives, and remote-viewing needs.":
    "Wählen Sie Zielort, voraussichtliche Ankunft, Aufenthaltsdauer und Monatsbudget in der Angebotswährung. Verfeinern Sie nach Möblierung, Universität, Arbeitsplatz, medizinischer Einrichtung, Empfehlung durch eine Organisation, Barrierefreiheit, Bürgschaftsalternativen und Bedarf an Fernbesichtigung.",
  Destination: "Zielort",
  "City, institution, or work": "Stadt, Institution oder Arbeitsplatz",
  Arrival: "Ankunft",
  "Date or flexible": "Datum oder flexibel",
  Budget: "Budget",
  "In listing currency": "In der Angebotswährung",
  "A furnished room set up for remote work, ready to search and book internationally":
    "Ein möbliertes Zimmer, eingerichtet für Remote-Arbeit, bereit für internationale Suche und Buchung",
  "Flexible arrival": "Flexible Ankunft",
  Furnished: "Möbliert",
  "Remote viewing": "Fernbesichtigung",
  Accessibility: "Barrierefreiheit",
  "Organization referral": "Empfehlung durch Organisation",

  "Move-Planning Pathways": "Wege der Umzugsplanung",
  "Four things to get right before you commit": "Vier Dinge, die vor einer Zusage stimmen müssen",
  "Search Before Arrival": "Vor der Ankunft suchen",
  "Destination, expected arrival, budget, stay, furnishing, and remote-viewing needs.":
    "Zielort, voraussichtliche Ankunft, Budget, Aufenthaltsdauer, Möblierung und Bedarf an Fernbesichtigung.",
  "Understand Costs": "Kosten verstehen",
  "Original currency stays visible — rent, deposit, required fees, bills, and known upfront total.":
    "Die ursprüngliche Währung bleibt sichtbar – Miete, Kaution, erforderliche Gebühren, Nebenkosten und bekannter Gesamtbetrag im Voraus.",
  "Prepare Documents": "Dokumente vorbereiten",
  "What may be requested, why, by whom, when, and how it's protected.":
    "Was angefordert werden kann, warum, von wem, wann und wie es geschützt wird.",
  "Move Safely": "Sicher umziehen",
  "Provider authority, room evidence, agreement, payment route, support, and arrival plan.":
    "Berechtigung des Anbieters, Zimmernachweis, Vertrag, Zahlungsweg, Unterstützung und Ankunftsplan.",

  "Destination Pathways": "Zielort-Übersicht",
  "Only destinations with current inventory or substantial guidance":
    "Nur Zielorte mit aktuellem Angebot oder umfassender Orientierung",
  "Independent and organization-referred inventory": "Unabhängiges und über Organisationen vermitteltes Angebot",
  "University and employer referral pathways": "Vermittlungswege über Universität und Arbeitgeber",
  "Independent marketplace coverage": "Abdeckung im unabhängigen Marktplatz",
  "Reviewed Jul 2026": "Geprüft im Juli 2026",
  "Explore Rooms": "Zimmer entdecken",
  "Save alert": "Suchauftrag speichern",

  "Provider Authority and Remote Evaluation": "Anbieterberechtigung und Fernbewertung",
  "Confirm who is offering the room, and why they may do so": "Bestätigen Sie, wer das Zimmer anbietet und warum",
  "A provider walking a room seeker through a remote video viewing":
    "Ein Anbieter führt eine zimmersuchende Person per Video durch eine Fernbesichtigung",
  "Provider identity does not prove ownership, agency, sublet authority, room condition, or lawful tenancy.":
    "Die Identität des Anbieters belegt weder Eigentum, Vertretungsbefugnis, Untervermietungsberechtigung, Zimmerzustand noch rechtmäßiges Mietverhältnis.",
  "Live or recorded viewings show date, participants, method, and limitations — never a hidden recording.":
    "Live- oder aufgezeichnete Besichtigungen zeigen Datum, Teilnehmende, Methode und Einschränkungen – niemals eine versteckte Aufnahme.",
  "You can ask about room dimensions, locks, windows, common areas, bathroom, kitchen, access, and defects during a remote viewing.":
    "Bei einer Fernbesichtigung können Sie nach Zimmermaßen, Schlössern, Fenstern, Gemeinschaftsbereichen, Bad, Küche, Zugang und Mängeln fragen.",
  "Report any reused, misleading, edited, or inconsistent media.":
    "Melden Sie jegliches wiederverwendete, irreführende, bearbeitete oder widersprüchliche Bildmaterial.",
  "Remote evidence is not a guarantee": "Fernnachweise sind keine Garantie",
  "A video call, recorded tour, Room Passport, identity check, document, or organization referral can reduce uncertainty. None alone proves current condition, legal right to let, suitability, personal safety, or move success.":
    "Ein Videoanruf, eine aufgezeichnete Besichtigung, ein Room Passport, eine Identitätsprüfung, ein Dokument oder eine Organisationsempfehlung können Unsicherheit verringern. Keines davon allein belegt den aktuellen Zustand, das rechtmäßige Vermietungsrecht, die Eignung, die persönliche Sicherheit oder den Erfolg des Umzugs.",

  "Availability and Timing": "Verfügbarkeit und Zeitplan",
  "Arrival is a range, not a promise": "Ankunft ist ein Zeitrahmen, kein Versprechen",
  State: "Status",
  Meaning: "Bedeutung",
  "Available for stated arrival": "Verfügbar für angegebene Ankunft",
  "Provider confirmed availability for the selected date/range within the freshness threshold":
    "Anbieter hat die Verfügbarkeit für das gewählte Datum/den gewählten Zeitraum innerhalb der Aktualitätsgrenze bestätigt",
  "Flexible arrival possible": "Flexible Ankunft möglich",
  "Provider indicated an approved flexibility window": "Anbieter hat ein genehmigtes Flexibilitätsfenster angegeben",
  "Partial date match": "Teilweise Terminübereinstimmung",
  "Room covers only part of the requested stay": "Zimmer deckt nur einen Teil des gewünschten Aufenthalts ab",
  "Availability to confirm": "Verfügbarkeit zu bestätigen",
  "No sufficiently recent confirmation for the selected arrival":
    "Keine ausreichend aktuelle Bestätigung für die gewählte Ankunft",
  "Arrival date changed": "Ankunftsdatum geändert",
  "Seeker updated timing after inquiry — recheck availability, price, and agreement":
    "Suchende Person hat den Zeitplan nach der Anfrage geändert – Verfügbarkeit, Preis und Vertrag erneut prüfen",
  "Travel/entry uncertain": "Reise/Einreise ungewiss",
  "Arrival depends on an external condition — use flexible dates, no visa or entry assumption":
    "Ankunft hängt von einer externen Bedingung ab – flexible Termine verwenden, keine Annahme zu Visum oder Einreise",
  "No travel or entry prediction": "Keine Reise- oder Einreiseprognose",
  "Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start. We use your declared dates and clear uncertainty states instead.":
    "Zoiko Rooms sagt Grenzeinreise, Visumserteilung, Flugankunft, Immatrikulation oder Arbeitsbeginn weder voraus noch garantiert es diese. Stattdessen verwenden wir Ihre angegebenen Termine und klare Unsicherheitsstatus.",

  "Costs and Currency": "Kosten und Währung",
  "The original price stays visible from search to payment": "Der ursprüngliche Preis bleibt von der Suche bis zur Zahlung sichtbar",
  Item: "Position",
  "Illustrative Display": "Beispielhafte Anzeige",
  "Monthly rent": "Monatsmiete",
  "$1,250/month": "1.250 $/Monat",
  Deposit: "Kaution",
  "$1,250 due after agreement signing": "1.250 $ fällig nach Vertragsunterzeichnung",
  "Required fees": "Erforderliche Gebühren",
  "$75 identity/document processing fee, if lawful and approved":
    "75 $ Bearbeitungsgebühr für Identität/Dokumente, sofern rechtmäßig und genehmigt",
  Bills: "Nebenkosten",
  "$110/month estimated for electricity, water, and internet":
    "geschätzt 110 $/Monat für Strom, Wasser und Internet",
  "Known upfront total": "Bekannter Gesamtbetrag im Voraus",
  "$2,575 before travel, excluding variable bills and optional services":
    "2.575 $ vor Abreise, ohne variable Nebenkosten und optionale Leistungen",
  "Currency truth rule": "Grundsatz der Währungswahrheit",
  "This generic learning block uses USD because the document locale is en-US. A real listing keeps its explicit original currency —":
    "Dieser allgemeine Beispielabschnitt verwendet USD, da das Dokumentgebietsschema en-US ist. Ein echtes Angebot behält seine ausdrückliche Ursprungswährung bei —",
  "— Zoiko Rooms never converts or replaces an amount unless you intentionally request a separate indicative view.":
    "— Zoiko Rooms rechnet einen Betrag niemals um oder ersetzt ihn, es sei denn, Sie fordern ausdrücklich eine separate Richtwertansicht an.",

  "Current Rooms": "Aktuelle Zimmer",
  "Arrival fit, original currency, authority, and remote evidence":
    "Passende Ankunft, Ursprungswährung, Berechtigung und Fernnachweise",
  "Furnished private room near Midtown, NYC": "Möbliertes Einzelzimmer nahe Midtown, NYC",
  "Available Aug 20–Sep 10 arrival": "Verfügbar für Ankunft 20. Aug.–10. Sep.",
  "Room near university, Toronto": "Zimmer nahe der Universität, Toronto",
  "Furnished room, East London": "Möbliertes Zimmer, East London",

  "Documents and Privacy": "Dokumente und Datenschutz",
  "Share only what's needed, with the right party, at the right time":
    "Teilen Sie nur, was nötig ist, mit der richtigen Partei zur richtigen Zeit",
  "Identity evidence": "Identitätsnachweis",
  "Confirms applicant/provider identity where necessary. Minimum fields, secure collection, no public upload.":
    "Bestätigt bei Bedarf die Identität von Antragsteller/Anbieter. Minimale Angaben, sichere Erfassung, kein öffentliches Hochladen.",
  "Study evidence": "Studiennachweis",
  "Confirms current program eligibility where required. Student ID is never exposed publicly.":
    "Bestätigt bei Bedarf die aktuelle Programmzulassung. Der Studierendenausweis wird niemals öffentlich sichtbar.",
  "Employment / assignment evidence": "Beschäftigungs-/Entsendenachweis",
  "Confirms income or organization program eligibility using the minimum necessary evidence.":
    "Bestätigt Einkommen oder Programmzulassung der Organisation mit den minimal erforderlichen Nachweisen.",
  "Guarantor evidence": "Bürgschaftsnachweis",
  "Assessed under stated criteria, with alternatives offered where available.":
    "Wird nach festgelegten Kriterien bewertet; Alternativen werden angeboten, sofern verfügbar.",
  "Right-to-rent / local eligibility": "Vermietungsrecht / lokale Zulassung",
  "Named jurisdiction and source; Zoiko Rooms does not reach its own legal conclusion.":
    "Benannter Rechtsraum und benannte Quelle; Zoiko Rooms trifft keine eigene rechtliche Bewertung.",
  "Payment information": "Zahlungsinformationen",
  "Handled through the approved payment provider — never requested in messages.":
    "Wird über den genehmigten Zahlungsanbieter abgewickelt – niemals in Nachrichten angefordert.",
  "Every request answers: who requests it, why it's needed, whether it's required, who can access it, how long it's retained, and how you can correct or challenge it.":
    "Jede Anfrage beantwortet: wer sie stellt, warum sie nötig ist, ob sie verpflichtend ist, wer Zugriff hat, wie lange sie aufbewahrt wird und wie Sie sie korrigieren oder anfechten können.",

  "Organization Pathways": "Organisations-Übersicht",
  "Referral, distribution, and management are separate relationships":
    "Empfehlung, Vertrieb und Verwaltung sind getrennte Beziehungen",
  "Independent marketplace": "Unabhängiger Marktplatz",
  "No documented organization referral or management relationship — no logo or implied support.":
    "Keine dokumentierte Empfehlung oder Verwaltungsbeziehung durch eine Organisation – kein Logo oder impliziertes Sponsoring.",
  "Organization-referred": "Von Organisation empfohlen",
  "You arrived through a current authorized referral. Program name shown only when authorized.":
    "Sie sind über eine aktuelle, autorisierte Empfehlung hierhergekommen. Der Programmname wird nur bei Autorisierung angezeigt.",
  "Organization-distributed": "Von Organisation vertrieben",
  "An organization distributes an independently provided room. Distribution does not equal ownership or guarantee.":
    "Eine Organisation vertreibt ein unabhängig angebotenes Zimmer. Vertrieb bedeutet weder Eigentum noch Garantie.",
  "Organization-managed": "Von Organisation verwaltet",
  "An organization or appointed operator manages the accommodation within a documented scope.":
    "Eine Organisation oder ein beauftragter Betreiber verwaltet die Unterkunft im dokumentierten Umfang.",
  "Allowance / subsidy eligible": "Anspruch auf Zuschuss/Beihilfe",
  "A current program may contribute to costs, with eligibility, amount, and expiry shown.":
    "Ein aktuelles Programm kann sich an den Kosten beteiligen; Berechtigung, Betrag und Ablauf werden angezeigt.",
  "Relocation-provider supported": "Unterstützt durch Relocation-Anbieter",
  "An authorized relocation provider supports a defined part of the move — not a broader guarantee.":
    "Ein autorisierter Relocation-Anbieter unterstützt einen festgelegten Teil des Umzugs – keine weitergehende Garantie.",
  Government: "Behörden",

  "Payments and Scam Prevention": "Zahlungen und Betrugsprävention",
  "Don't let urgency replace authority and a receipt": "Lassen Sie Dringlichkeit nicht Berechtigung und Beleg ersetzen",
  "Warning Sign": "Warnsignal",
  "Required Action": "Erforderliche Maßnahme",
  "Gift card, cryptocurrency, or unrelated payee": "Geschenkkarte, Kryptowährung oder fachfremder Zahlungsempfänger",
  "Warn, block where policy applies, and offer report/support":
    "Warnen, wo Richtlinien gelten blockieren und Melde-/Unterstützungsmöglichkeit anbieten",
  "Urgency or secrecy": "Dringlichkeit oder Geheimhaltung",
  "Pause payment; reconfirm authority, agreement, refund, and payee":
    "Zahlung pausieren; Berechtigung, Vertrag, Rückerstattung und Zahlungsempfänger erneut bestätigen",
  "New payee or bank details after agreement": "Neuer Zahlungsempfänger oder neue Bankdaten nach Vertragsabschluss",
  "Require independent reconfirmation through an approved channel":
    "Unabhängige erneute Bestätigung über einen genehmigten Kanal verlangen",
  "Payment before viewing/evidence/authority": "Zahlung vor Besichtigung/Nachweis/Berechtigung",
  "Show an explicit risk warning and a safer sequence": "Deutliche Risikowarnung und sichereren Ablauf anzeigen",
  "Provider cannot provide a receipt or agreement": "Anbieter kann keinen Beleg oder Vertrag vorlegen",
  "Do not continue payment — report or get support": "Zahlung nicht fortsetzen – melden oder Unterstützung anfordern",
  "Report a Concern": "Anliegen melden",

  "Arrival Checklist": "Ankunfts-Checkliste",
  "Plan the handoff before you travel": "Planen Sie die Übergabe vor Ihrer Abreise",
  "Before application": "Vor der Bewerbung",
  "Confirm availability/arrival fit, total original-currency costs, provider authority, room evidence, and organization relationship.":
    "Bestätigen Sie Verfügbarkeit/Ankunftspassung, Gesamtkosten in Ursprungswährung, Anbieterberechtigung, Zimmernachweis und Organisationsbeziehung.",
  "Before agreement": "Vor Vertragsabschluss",
  "Confirm parties, address/room, term, arrival window, rent, deposit, fees, bills, and cancellation/refund.":
    "Bestätigen Sie Vertragsparteien, Adresse/Zimmer, Laufzeit, Ankunftsfenster, Miete, Kaution, Gebühren, Nebenkosten sowie Kündigung/Rückerstattung.",
  "Before payment": "Vor der Zahlung",
  "Confirm payee, method, currency, fees, receipt, and refund — and that authority/agreement details match.":
    "Bestätigen Sie Zahlungsempfänger, Methode, Währung, Gebühren, Beleg und Rückerstattung – und dass Berechtigungs-/Vertragsangaben übereinstimmen.",
  "Before travel": "Vor der Abreise",
  "Keep your agreement and payment record; confirm current room status, key collection, contact, and time zone.":
    "Bewahren Sie Vertrag und Zahlungsnachweis auf; bestätigen Sie aktuellen Zimmerstatus, Schlüsselübergabe, Kontakt und Zeitzone.",
  "At handoff": "Bei der Übergabe",
  "Confirm provider/agent, room/address, keys/access, inventory, material condition, and utilities.":
    "Bestätigen Sie Anbieter/Vermittler, Zimmer/Adresse, Schlüssel/Zugang, Inventar, Zustand und Nebenkosten.",

  "Before You Continue": "Bevor Sie fortfahren",
  "Know what's confirmed, what's flexible, and what still needs local confirmation":
    "Wissen Sie, was bestätigt, was flexibel und was noch lokal zu bestätigen ist",
  "Availability and arrival-date status": "Verfügbarkeit und Status des Ankunftsdatums",
  "Original listing currency remains visible": "Ursprüngliche Angebotswährung bleibt sichtbar",
  "Provider identity and authority are separate": "Identität und Berechtigung des Anbieters sind getrennt",
  "Document purpose, recipient, access, and retention": "Zweck, Empfänger, Zugriff und Aufbewahrung von Dokumenten",
  "Payment route, refund, and charge timing": "Zahlungsweg, Rückerstattung und Zeitpunkt der Belastung",
  "No housing, visa, legal, or safety guarantee": "Keine Garantie für Wohnraum, Visum, Rechtslage oder Sicherheit",
  Reserved: "Reserviert",
  Unavailable: "Nicht verfügbar",
  "Status disputed": "Status strittig",

  "Frequently Asked Questions": "Häufig gestellte Fragen",
  "International Moves FAQ": "FAQ zu internationalen Umzügen",
  "Can I find a room before moving to another country?": "Kann ich ein Zimmer finden, bevor ich in ein anderes Land ziehe?",
  "Yes for supported destinations and current listings. Use destination, expected arrival, monthly budget, stay length, furnishing, accessibility, and organization context; availability still requires confirmation.":
    "Ja, für unterstützte Zielorte und aktuelle Angebote. Nutzen Sie Zielort, voraussichtliche Ankunft, Monatsbudget, Aufenthaltsdauer, Möblierung, Barrierefreiheit und Organisationszusammenhang; die Verfügbarkeit muss dennoch bestätigt werden.",
  "Which currency will I see?": "Welche Währung wird mir angezeigt?",
  "The listing's original currency — the one the provider set — stays visible from search through payment. Zoiko Rooms never converts or replaces that amount unless you intentionally request a separate indicative view.":
    "Die ursprüngliche Währung des Angebots – die vom Anbieter festgelegte – bleibt von der Suche bis zur Zahlung sichtbar. Zoiko Rooms rechnet diesen Betrag niemals um oder ersetzt ihn, es sei denn, Sie fordern ausdrücklich eine separate Richtwertansicht an.",
  "What documents might I need?": "Welche Dokumente könnte ich benötigen?",
  "Depending on the listing and pathway: identity evidence, study or employment/assignment evidence, guarantor evidence, and right-to-rent or local eligibility evidence. Each request explains why it's needed and how it's protected.":
    "Je nach Angebot und Weg: Identitätsnachweis, Studien- oder Beschäftigungs-/Entsendenachweis, Bürgschaftsnachweis sowie Nachweis des Vermietungsrechts oder der lokalen Zulassung. Jede Anfrage erklärt, warum sie nötig ist und wie sie geschützt wird.",
  "Does Zoiko Rooms guarantee a visa or right to rent?": "Garantiert Zoiko Rooms ein Visum oder ein Vermietungsrecht?",
  "No. Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start, and does not reach its own legal conclusion on right-to-rent eligibility.":
    "Nein. Zoiko Rooms sagt Grenzeinreise, Visumserteilung, Flugankunft, Immatrikulation oder Arbeitsbeginn weder voraus noch garantiert es diese und trifft keine eigene rechtliche Bewertung zum Vermietungsrecht.",
  "How can I check a room remotely?": "Wie kann ich ein Zimmer aus der Ferne prüfen?",
  "Request a live or recorded video viewing that shows the date, participants, and method. You can ask about dimensions, locks, windows, common areas, and defects — and report any reused or inconsistent media.":
    "Fordern Sie eine Live- oder aufgezeichnete Videobesichtigung an, die Datum, Teilnehmende und Methode zeigt. Sie können nach Maßen, Schlössern, Fenstern, Gemeinschaftsbereichen und Mängeln fragen – und wiederverwendetes oder widersprüchliches Bildmaterial melden.",
  "Is an organization-referred room guaranteed?": "Ist ein von einer Organisation empfohlenes Zimmer garantiert?",
  "No. Referral, distribution, and management are separate relationships. An organization-referred or organization-distributed room does not imply ownership, management, or a broader guarantee from that organization.":
    "Nein. Empfehlung, Vertrieb und Verwaltung sind getrennte Beziehungen. Ein von einer Organisation empfohlenes oder vertriebenes Zimmer impliziert weder Eigentum, Verwaltung noch eine weitergehende Garantie dieser Organisation.",
  "When should I pay a deposit?": "Wann sollte ich eine Kaution zahlen?",
  "Only after you've confirmed provider authority, the agreement, and the payee through the approved payment route. Urgency or a request to pay before viewing evidence or authority is a warning sign.":
    "Erst nachdem Sie Anbieterberechtigung, Vertrag und Zahlungsempfänger über den genehmigten Zahlungsweg bestätigt haben. Dringlichkeit oder eine Zahlungsaufforderung vor Prüfung von Nachweis oder Berechtigung ist ein Warnsignal.",
  "What happens if my arrival date changes?": "Was passiert, wenn sich mein Ankunftsdatum ändert?",
  "Recheck availability, price, and the agreement as soon as your dates change — a changed arrival date can affect stated availability, total cost, and cancellation or refund terms.":
    "Prüfen Sie Verfügbarkeit, Preis und Vertrag erneut, sobald sich Ihre Termine ändern – ein geändertes Ankunftsdatum kann die angegebene Verfügbarkeit, die Gesamtkosten sowie Kündigungs- oder Rückerstattungsbedingungen beeinflussen.",

  "Continue with the destination and dates you know now": "Machen Sie weiter mit dem Zielort und den Terminen, die Sie bereits kennen",
  "Search current rooms, save an alert, or get help choosing the right path.":
    "Durchsuchen Sie aktuelle Zimmer, speichern Sie einen Suchauftrag oder lassen Sie sich bei der Wahl des richtigen Wegs helfen.",
  "Get Help": "Hilfe erhalten",
};

const FR_INTERNATIONAL_MOVES: Record<string, string> = {
  "International Moves": "Déménagements internationaux",
  "Search for a room across borders with clearer timing, costs, documents, and support.":
    "Recherchez une chambre au-delà des frontières, avec des délais, des coûts, des documents et une assistance plus clairs.",
  "Choose a destination, expected arrival, stay length, and monthly budget in the listing currency. Refine by furnished status, university, workplace, healthcare location, organization referral, accessibility, guarantor alternatives, and remote-viewing needs.":
    "Choisissez une destination, une date d'arrivée prévue, une durée de séjour et un budget mensuel dans la devise de l'annonce. Affinez selon l'ameublement, l'université, le lieu de travail, l'établissement de santé, la recommandation d'une organisation, l'accessibilité, les alternatives de garant et les besoins de visite à distance.",
  Destination: "Destination",
  "City, institution, or work": "Ville, établissement ou emploi",
  Arrival: "Arrivée",
  "Date or flexible": "Date ou flexible",
  Budget: "Budget",
  "In listing currency": "Dans la devise de l'annonce",
  "A furnished room set up for remote work, ready to search and book internationally":
    "Une chambre meublée aménagée pour le télétravail, prête à être recherchée et réservée à l'international",
  "Flexible arrival": "Arrivée flexible",
  Furnished: "Meublé",
  "Remote viewing": "Visite à distance",
  Accessibility: "Accessibilité",
  "Organization referral": "Recommandation d'une organisation",

  "Move-Planning Pathways": "Parcours de planification du déménagement",
  "Four things to get right before you commit": "Quatre points à valider avant de vous engager",
  "Search Before Arrival": "Rechercher avant l'arrivée",
  "Destination, expected arrival, budget, stay, furnishing, and remote-viewing needs.":
    "Destination, arrivée prévue, budget, durée de séjour, ameublement et besoins de visite à distance.",
  "Understand Costs": "Comprendre les coûts",
  "Original currency stays visible — rent, deposit, required fees, bills, and known upfront total.":
    "La devise d'origine reste visible — loyer, dépôt, frais obligatoires, charges et montant total connu à l'avance.",
  "Prepare Documents": "Préparer les documents",
  "What may be requested, why, by whom, when, and how it's protected.":
    "Ce qui peut être demandé, pourquoi, par qui, quand et comment cela est protégé.",
  "Move Safely": "Déménager en toute sécurité",
  "Provider authority, room evidence, agreement, payment route, support, and arrival plan.":
    "Autorité du bailleur, preuves relatives à la chambre, contrat, mode de paiement, assistance et plan d'arrivée.",

  "Destination Pathways": "Destinations proposées",
  "Only destinations with current inventory or substantial guidance":
    "Uniquement des destinations avec une offre actuelle ou des informations complètes",
  "Independent and organization-referred inventory": "Offre indépendante et recommandée par des organisations",
  "University and employer referral pathways": "Parcours de recommandation via universités et employeurs",
  "Independent marketplace coverage": "Couverture du marché indépendant",
  "Reviewed Jul 2026": "Vérifié en juillet 2026",
  "Explore Rooms": "Explorer les chambres",
  "Save alert": "Enregistrer une alerte",

  "Provider Authority and Remote Evaluation": "Autorité du bailleur et évaluation à distance",
  "Confirm who is offering the room, and why they may do so": "Vérifiez qui propose la chambre, et à quel titre",
  "A provider walking a room seeker through a remote video viewing":
    "Un bailleur faisant visiter une chambre à distance par vidéo à un candidat locataire",
  "Provider identity does not prove ownership, agency, sublet authority, room condition, or lawful tenancy.":
    "L'identité du bailleur ne prouve ni la propriété, ni le mandat, ni l'autorité de sous-location, ni l'état de la chambre, ni la légalité de la location.",
  "Live or recorded viewings show date, participants, method, and limitations — never a hidden recording.":
    "Les visites en direct ou enregistrées indiquent la date, les participants, la méthode et les limites — jamais un enregistrement dissimulé.",
  "You can ask about room dimensions, locks, windows, common areas, bathroom, kitchen, access, and defects during a remote viewing.":
    "Lors d'une visite à distance, vous pouvez demander les dimensions de la chambre, les serrures, les fenêtres, les espaces communs, la salle de bain, la cuisine, l'accès et les défauts éventuels.",
  "Report any reused, misleading, edited, or inconsistent media.":
    "Signalez tout contenu réutilisé, trompeur, modifié ou incohérent.",
  "Remote evidence is not a guarantee": "Une preuve à distance n'est pas une garantie",
  "A video call, recorded tour, Room Passport, identity check, document, or organization referral can reduce uncertainty. None alone proves current condition, legal right to let, suitability, personal safety, or move success.":
    "Un appel vidéo, une visite enregistrée, un Room Passport, une vérification d'identité, un document ou une recommandation d'organisation peuvent réduire l'incertitude. Aucun d'entre eux, à lui seul, ne prouve l'état actuel, le droit légal de louer, l'adéquation, la sécurité personnelle ou la réussite du déménagement.",

  "Availability and Timing": "Disponibilité et calendrier",
  "Arrival is a range, not a promise": "L'arrivée est une fourchette, pas une promesse",
  State: "État",
  Meaning: "Signification",
  "Available for stated arrival": "Disponible pour l'arrivée indiquée",
  "Provider confirmed availability for the selected date/range within the freshness threshold":
    "Le bailleur a confirmé la disponibilité pour la date/période sélectionnée, dans le délai de fraîcheur requis",
  "Flexible arrival possible": "Arrivée flexible possible",
  "Provider indicated an approved flexibility window": "Le bailleur a indiqué une fenêtre de flexibilité approuvée",
  "Partial date match": "Correspondance partielle des dates",
  "Room covers only part of the requested stay": "La chambre ne couvre qu'une partie du séjour demandé",
  "Availability to confirm": "Disponibilité à confirmer",
  "No sufficiently recent confirmation for the selected arrival":
    "Aucune confirmation suffisamment récente pour l'arrivée sélectionnée",
  "Arrival date changed": "Date d'arrivée modifiée",
  "Seeker updated timing after inquiry — recheck availability, price, and agreement":
    "Le candidat a modifié le calendrier après sa demande — revérifiez la disponibilité, le prix et le contrat",
  "Travel/entry uncertain": "Voyage/entrée incertain(e)",
  "Arrival depends on an external condition — use flexible dates, no visa or entry assumption":
    "L'arrivée dépend d'une condition externe — utilisez des dates flexibles, sans présumer du visa ou de l'entrée",
  "No travel or entry prediction": "Aucune prévision de voyage ou d'entrée",
  "Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start. We use your declared dates and clear uncertainty states instead.":
    "Zoiko Rooms ne présume ni ne garantit le passage de la frontière, l'obtention du visa, l'arrivée du vol, l'inscription ou la prise de poste. Nous utilisons à la place les dates que vous avez déclarées et des indicateurs d'incertitude clairs.",

  "Costs and Currency": "Coûts et devise",
  "The original price stays visible from search to payment": "Le prix d'origine reste visible de la recherche au paiement",
  Item: "Poste",
  "Illustrative Display": "Affichage illustratif",
  "Monthly rent": "Loyer mensuel",
  "$1,250/month": "1 250 $/mois",
  Deposit: "Dépôt de garantie",
  "$1,250 due after agreement signing": "1 250 $ dus après la signature du contrat",
  "Required fees": "Frais obligatoires",
  "$75 identity/document processing fee, if lawful and approved":
    "75 $ de frais de traitement d'identité/documents, si légal et approuvé",
  Bills: "Charges",
  "$110/month estimated for electricity, water, and internet":
    "110 $/mois estimés pour l'électricité, l'eau et internet",
  "Known upfront total": "Montant total connu à l'avance",
  "$2,575 before travel, excluding variable bills and optional services":
    "2 575 $ avant le départ, hors charges variables et services optionnels",
  "Currency truth rule": "Règle de fidélité à la devise",
  "This generic learning block uses USD because the document locale is en-US. A real listing keeps its explicit original currency —":
    "Ce bloc pédagogique générique utilise l'USD car le document est en anglais américain. Une annonce réelle conserve sa devise d'origine explicite —",
  "— Zoiko Rooms never converts or replaces an amount unless you intentionally request a separate indicative view.":
    "— Zoiko Rooms ne convertit ni ne remplace jamais un montant, sauf si vous demandez délibérément un affichage indicatif distinct.",

  "Current Rooms": "Chambres actuelles",
  "Arrival fit, original currency, authority, and remote evidence":
    "Adéquation d'arrivée, devise d'origine, autorité et preuves à distance",
  "Furnished private room near Midtown, NYC": "Chambre privée meublée près de Midtown, New York",
  "Available Aug 20–Sep 10 arrival": "Disponible pour une arrivée du 20 août au 10 sept.",
  "Room near university, Toronto": "Chambre près de l'université, Toronto",
  "Furnished room, East London": "Chambre meublée, East London",

  "Documents and Privacy": "Documents et confidentialité",
  "Share only what's needed, with the right party, at the right time":
    "Ne partagez que le nécessaire, avec la bonne partie, au bon moment",
  "Identity evidence": "Preuve d'identité",
  "Confirms applicant/provider identity where necessary. Minimum fields, secure collection, no public upload.":
    "Confirme l'identité du candidat/bailleur lorsque nécessaire. Champs minimaux, collecte sécurisée, aucun téléchargement public.",
  "Study evidence": "Preuve d'études",
  "Confirms current program eligibility where required. Student ID is never exposed publicly.":
    "Confirme l'éligibilité au programme en cours lorsque requis. La carte d'étudiant n'est jamais exposée publiquement.",
  "Employment / assignment evidence": "Preuve d'emploi / d'affectation",
  "Confirms income or organization program eligibility using the minimum necessary evidence.":
    "Confirme le revenu ou l'éligibilité au programme de l'organisation avec le minimum de preuves nécessaires.",
  "Guarantor evidence": "Preuve de garant",
  "Assessed under stated criteria, with alternatives offered where available.":
    "Évaluée selon des critères définis, avec des alternatives proposées lorsque disponibles.",
  "Right-to-rent / local eligibility": "Droit de louer / éligibilité locale",
  "Named jurisdiction and source; Zoiko Rooms does not reach its own legal conclusion.":
    "Juridiction et source nommées ; Zoiko Rooms ne formule pas sa propre conclusion juridique.",
  "Payment information": "Informations de paiement",
  "Handled through the approved payment provider — never requested in messages.":
    "Traitées via le prestataire de paiement approuvé — jamais demandées dans les messages.",
  "Every request answers: who requests it, why it's needed, whether it's required, who can access it, how long it's retained, and how you can correct or challenge it.":
    "Chaque demande précise : qui la formule, pourquoi elle est nécessaire, si elle est obligatoire, qui peut y accéder, combien de temps elle est conservée, et comment vous pouvez la corriger ou la contester.",

  "Organization Pathways": "Parcours par organisation",
  "Referral, distribution, and management are separate relationships":
    "Recommandation, distribution et gestion sont des relations distinctes",
  "Independent marketplace": "Marché indépendant",
  "No documented organization referral or management relationship — no logo or implied support.":
    "Aucune recommandation ou relation de gestion documentée avec une organisation — pas de logo ni de soutien implicite.",
  "Organization-referred": "Recommandé par une organisation",
  "You arrived through a current authorized referral. Program name shown only when authorized.":
    "Vous êtes arrivé via une recommandation actuelle et autorisée. Le nom du programme n'apparaît que si autorisé.",
  "Organization-distributed": "Distribué par une organisation",
  "An organization distributes an independently provided room. Distribution does not equal ownership or guarantee.":
    "Une organisation distribue une chambre proposée de manière indépendante. La distribution n'équivaut ni à la propriété ni à une garantie.",
  "Organization-managed": "Géré par une organisation",
  "An organization or appointed operator manages the accommodation within a documented scope.":
    "Une organisation ou un exploitant désigné gère le logement dans un cadre documenté.",
  "Allowance / subsidy eligible": "Éligible à une allocation / subvention",
  "A current program may contribute to costs, with eligibility, amount, and expiry shown.":
    "Un programme en cours peut contribuer aux coûts ; l'éligibilité, le montant et l'échéance sont indiqués.",
  "Relocation-provider supported": "Soutenu par un prestataire de relocation",
  "An authorized relocation provider supports a defined part of the move — not a broader guarantee.":
    "Un prestataire de relocation autorisé soutient une partie définie du déménagement — sans garantie plus large.",
  Government: "Administrations",

  "Payments and Scam Prevention": "Paiements et prévention des fraudes",
  "Don't let urgency replace authority and a receipt": "Ne laissez pas l'urgence remplacer l'autorité et un reçu",
  "Warning Sign": "Signal d'alerte",
  "Required Action": "Action requise",
  "Gift card, cryptocurrency, or unrelated payee": "Carte-cadeau, cryptomonnaie ou bénéficiaire sans lien",
  "Warn, block where policy applies, and offer report/support":
    "Avertir, bloquer si la politique l'exige, et proposer un signalement/une assistance",
  "Urgency or secrecy": "Urgence ou secret",
  "Pause payment; reconfirm authority, agreement, refund, and payee":
    "Suspendre le paiement ; reconfirmer l'autorité, le contrat, le remboursement et le bénéficiaire",
  "New payee or bank details after agreement": "Nouveau bénéficiaire ou coordonnées bancaires après le contrat",
  "Require independent reconfirmation through an approved channel":
    "Exiger une reconfirmation indépendante via un canal approuvé",
  "Payment before viewing/evidence/authority": "Paiement avant visite/preuve/autorité",
  "Show an explicit risk warning and a safer sequence": "Afficher un avertissement de risque explicite et une séquence plus sûre",
  "Provider cannot provide a receipt or agreement": "Le bailleur ne peut fournir ni reçu ni contrat",
  "Do not continue payment — report or get support": "Ne poursuivez pas le paiement — signalez ou obtenez de l'aide",
  "Report a Concern": "Signaler un problème",

  "Arrival Checklist": "Liste de vérification à l'arrivée",
  "Plan the handoff before you travel": "Planifiez la remise des clés avant votre départ",
  "Before application": "Avant la candidature",
  "Confirm availability/arrival fit, total original-currency costs, provider authority, room evidence, and organization relationship.":
    "Vérifiez la disponibilité/adéquation d'arrivée, le coût total dans la devise d'origine, l'autorité du bailleur, les preuves relatives à la chambre et la relation avec l'organisation.",
  "Before agreement": "Avant le contrat",
  "Confirm parties, address/room, term, arrival window, rent, deposit, fees, bills, and cancellation/refund.":
    "Vérifiez les parties, l'adresse/la chambre, la durée, la fenêtre d'arrivée, le loyer, le dépôt, les frais, les charges et les conditions d'annulation/remboursement.",
  "Before payment": "Avant le paiement",
  "Confirm payee, method, currency, fees, receipt, and refund — and that authority/agreement details match.":
    "Vérifiez le bénéficiaire, le mode, la devise, les frais, le reçu et le remboursement — et que les détails d'autorité/de contrat concordent.",
  "Before travel": "Avant le départ",
  "Keep your agreement and payment record; confirm current room status, key collection, contact, and time zone.":
    "Conservez votre contrat et votre justificatif de paiement ; vérifiez le statut actuel de la chambre, la remise des clés, le contact et le fuseau horaire.",
  "At handoff": "Lors de la remise",
  "Confirm provider/agent, room/address, keys/access, inventory, material condition, and utilities.":
    "Vérifiez le bailleur/l'agent, la chambre/l'adresse, les clés/l'accès, l'inventaire, l'état matériel et les charges.",

  "Before You Continue": "Avant de continuer",
  "Know what's confirmed, what's flexible, and what still needs local confirmation":
    "Sachez ce qui est confirmé, ce qui est flexible, et ce qui nécessite encore une confirmation locale",
  "Availability and arrival-date status": "Disponibilité et statut de la date d'arrivée",
  "Original listing currency remains visible": "La devise d'origine de l'annonce reste visible",
  "Provider identity and authority are separate": "Identité et autorité du bailleur sont distinctes",
  "Document purpose, recipient, access, and retention": "Objet, destinataire, accès et conservation des documents",
  "Payment route, refund, and charge timing": "Mode de paiement, remboursement et calendrier de débit",
  "No housing, visa, legal, or safety guarantee": "Aucune garantie de logement, de visa, juridique ou de sécurité",
  Reserved: "Réservé",
  Unavailable: "Indisponible",
  "Status disputed": "Statut contesté",

  "Frequently Asked Questions": "Questions fréquentes",
  "International Moves FAQ": "FAQ déménagements internationaux",
  "Can I find a room before moving to another country?": "Puis-je trouver une chambre avant de déménager dans un autre pays ?",
  "Yes for supported destinations and current listings. Use destination, expected arrival, monthly budget, stay length, furnishing, accessibility, and organization context; availability still requires confirmation.":
    "Oui, pour les destinations prises en charge et les annonces actuelles. Utilisez la destination, l'arrivée prévue, le budget mensuel, la durée du séjour, l'ameublement, l'accessibilité et le contexte organisationnel ; la disponibilité doit toujours être confirmée.",
  "Which currency will I see?": "Quelle devise vais-je voir ?",
  "The listing's original currency — the one the provider set — stays visible from search through payment. Zoiko Rooms never converts or replaces that amount unless you intentionally request a separate indicative view.":
    "La devise d'origine de l'annonce — celle fixée par le bailleur — reste visible de la recherche jusqu'au paiement. Zoiko Rooms ne convertit ni ne remplace jamais ce montant, sauf si vous demandez délibérément un affichage indicatif distinct.",
  "What documents might I need?": "De quels documents pourrais-je avoir besoin ?",
  "Depending on the listing and pathway: identity evidence, study or employment/assignment evidence, guarantor evidence, and right-to-rent or local eligibility evidence. Each request explains why it's needed and how it's protected.":
    "Selon l'annonce et le parcours : preuve d'identité, preuve d'études ou d'emploi/affectation, preuve de garant, et preuve de droit de louer ou d'éligibilité locale. Chaque demande explique pourquoi elle est nécessaire et comment elle est protégée.",
  "Does Zoiko Rooms guarantee a visa or right to rent?": "Zoiko Rooms garantit-il un visa ou un droit de louer ?",
  "No. Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start, and does not reach its own legal conclusion on right-to-rent eligibility.":
    "Non. Zoiko Rooms ne présume ni ne garantit le passage de la frontière, l'obtention du visa, l'arrivée du vol, l'inscription ou la prise de poste, et ne formule pas sa propre conclusion juridique sur l'éligibilité au droit de louer.",
  "How can I check a room remotely?": "Comment puis-je vérifier une chambre à distance ?",
  "Request a live or recorded video viewing that shows the date, participants, and method. You can ask about dimensions, locks, windows, common areas, and defects — and report any reused or inconsistent media.":
    "Demandez une visite vidéo en direct ou enregistrée indiquant la date, les participants et la méthode. Vous pouvez demander les dimensions, les serrures, les fenêtres, les espaces communs et les défauts — et signaler tout contenu réutilisé ou incohérent.",
  "Is an organization-referred room guaranteed?": "Une chambre recommandée par une organisation est-elle garantie ?",
  "No. Referral, distribution, and management are separate relationships. An organization-referred or organization-distributed room does not imply ownership, management, or a broader guarantee from that organization.":
    "Non. Recommandation, distribution et gestion sont des relations distinctes. Une chambre recommandée ou distribuée par une organisation n'implique ni propriété, ni gestion, ni garantie plus large de la part de cette organisation.",
  "When should I pay a deposit?": "Quand dois-je verser un dépôt de garantie ?",
  "Only after you've confirmed provider authority, the agreement, and the payee through the approved payment route. Urgency or a request to pay before viewing evidence or authority is a warning sign.":
    "Uniquement après avoir vérifié l'autorité du bailleur, le contrat et le bénéficiaire via le mode de paiement approuvé. Une urgence ou une demande de paiement avant de consulter les preuves ou l'autorité est un signal d'alerte.",
  "What happens if my arrival date changes?": "Que se passe-t-il si ma date d'arrivée change ?",
  "Recheck availability, price, and the agreement as soon as your dates change — a changed arrival date can affect stated availability, total cost, and cancellation or refund terms.":
    "Revérifiez la disponibilité, le prix et le contrat dès que vos dates changent — une date d'arrivée modifiée peut affecter la disponibilité annoncée, le coût total et les conditions d'annulation ou de remboursement.",

  "Continue with the destination and dates you know now": "Poursuivez avec la destination et les dates que vous connaissez déjà",
  "Search current rooms, save an alert, or get help choosing the right path.":
    "Recherchez des chambres actuelles, enregistrez une alerte, ou obtenez de l'aide pour choisir le bon parcours.",
  "Get Help": "Obtenir de l'aide",
};

const ES_INTERNATIONAL_MOVES: Record<string, string> = {
  "International Moves": "Traslados internacionales",
  "Search for a room across borders with clearer timing, costs, documents, and support.":
    "Busca una habitación más allá de las fronteras, con plazos, costos, documentos y asistencia más claros.",
  "Choose a destination, expected arrival, stay length, and monthly budget in the listing currency. Refine by furnished status, university, workplace, healthcare location, organization referral, accessibility, guarantor alternatives, and remote-viewing needs.":
    "Elige un destino, la llegada prevista, la duración de la estancia y el presupuesto mensual en la moneda del anuncio. Filtra por amueblado, universidad, lugar de trabajo, centro de salud, referencia de una organización, accesibilidad, alternativas de aval y necesidades de visita remota.",
  Destination: "Destino",
  "City, institution, or work": "Ciudad, institución o trabajo",
  Arrival: "Llegada",
  "Date or flexible": "Fecha o flexible",
  Budget: "Presupuesto",
  "In listing currency": "En la moneda del anuncio",
  "A furnished room set up for remote work, ready to search and book internationally":
    "Una habitación amueblada preparada para el teletrabajo, lista para buscar y reservar a nivel internacional",
  "Flexible arrival": "Llegada flexible",
  Furnished: "Amueblado",
  "Remote viewing": "Visita remota",
  Accessibility: "Accesibilidad",
  "Organization referral": "Referencia de una organización",

  "Move-Planning Pathways": "Opciones para planificar tu traslado",
  "Four things to get right before you commit": "Cuatro aspectos que confirmar antes de comprometerte",
  "Search Before Arrival": "Buscar antes de llegar",
  "Destination, expected arrival, budget, stay, furnishing, and remote-viewing needs.":
    "Destino, llegada prevista, presupuesto, duración de la estancia, amueblado y necesidades de visita remota.",
  "Understand Costs": "Entender los costos",
  "Original currency stays visible — rent, deposit, required fees, bills, and known upfront total.":
    "La moneda original permanece visible: alquiler, depósito, tarifas obligatorias, servicios y el total inicial conocido.",
  "Prepare Documents": "Preparar documentos",
  "What may be requested, why, by whom, when, and how it's protected.":
    "Qué puede solicitarse, por qué, por quién, cuándo y cómo se protege.",
  "Move Safely": "Trasladarte con seguridad",
  "Provider authority, room evidence, agreement, payment route, support, and arrival plan.":
    "Autoridad del anfitrión, evidencia de la habitación, contrato, vía de pago, asistencia y plan de llegada.",

  "Destination Pathways": "Destinos disponibles",
  "Only destinations with current inventory or substantial guidance":
    "Solo destinos con inventario actual u orientación sustancial",
  "Independent and organization-referred inventory": "Inventario independiente y referido por organizaciones",
  "University and employer referral pathways": "Vías de referencia de universidades y empleadores",
  "Independent marketplace coverage": "Cobertura del mercado independiente",
  "Reviewed Jul 2026": "Revisado en julio de 2026",
  "Explore Rooms": "Explorar habitaciones",
  "Save alert": "Guardar alerta",

  "Provider Authority and Remote Evaluation": "Autoridad del anfitrión y evaluación remota",
  "Confirm who is offering the room, and why they may do so": "Confirma quién ofrece la habitación y con qué autoridad",
  "A provider walking a room seeker through a remote video viewing":
    "Un anfitrión mostrando una habitación a un solicitante mediante una videollamada",
  "Provider identity does not prove ownership, agency, sublet authority, room condition, or lawful tenancy.":
    "La identidad del anfitrión no demuestra propiedad, representación, autoridad para subarrendar, estado de la habitación ni arrendamiento legal.",
  "Live or recorded viewings show date, participants, method, and limitations — never a hidden recording.":
    "Las visitas en vivo o grabadas muestran la fecha, los participantes, el método y las limitaciones, nunca una grabación oculta.",
  "You can ask about room dimensions, locks, windows, common areas, bathroom, kitchen, access, and defects during a remote viewing.":
    "Durante una visita remota puedes preguntar sobre las dimensiones de la habitación, cerraduras, ventanas, zonas comunes, baño, cocina, acceso y desperfectos.",
  "Report any reused, misleading, edited, or inconsistent media.":
    "Reporta cualquier contenido reutilizado, engañoso, editado o inconsistente.",
  "Remote evidence is not a guarantee": "La evidencia remota no es una garantía",
  "A video call, recorded tour, Room Passport, identity check, document, or organization referral can reduce uncertainty. None alone proves current condition, legal right to let, suitability, personal safety, or move success.":
    "Una videollamada, un recorrido grabado, un Room Passport, una verificación de identidad, un documento o una referencia de una organización pueden reducir la incertidumbre. Ninguno por sí solo demuestra el estado actual, el derecho legal a alquilar, la idoneidad, la seguridad personal ni el éxito del traslado.",

  "Availability and Timing": "Disponibilidad y tiempos",
  "Arrival is a range, not a promise": "La llegada es un rango, no una promesa",
  State: "Estado",
  Meaning: "Significado",
  "Available for stated arrival": "Disponible para la llegada indicada",
  "Provider confirmed availability for the selected date/range within the freshness threshold":
    "El anfitrión confirmó la disponibilidad para la fecha/rango seleccionado dentro del límite de vigencia",
  "Flexible arrival possible": "Llegada flexible posible",
  "Provider indicated an approved flexibility window": "El anfitrión indicó una ventana de flexibilidad aprobada",
  "Partial date match": "Coincidencia parcial de fechas",
  "Room covers only part of the requested stay": "La habitación cubre solo parte de la estancia solicitada",
  "Availability to confirm": "Disponibilidad por confirmar",
  "No sufficiently recent confirmation for the selected arrival":
    "No hay una confirmación suficientemente reciente para la llegada seleccionada",
  "Arrival date changed": "Fecha de llegada modificada",
  "Seeker updated timing after inquiry — recheck availability, price, and agreement":
    "El solicitante cambió las fechas tras la consulta; vuelve a verificar disponibilidad, precio y contrato",
  "Travel/entry uncertain": "Viaje/entrada incierto",
  "Arrival depends on an external condition — use flexible dates, no visa or entry assumption":
    "La llegada depende de una condición externa; usa fechas flexibles, sin presuponer visado ni entrada",
  "No travel or entry prediction": "Sin predicción de viaje o entrada",
  "Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start. We use your declared dates and clear uncertainty states instead.":
    "Zoiko Rooms no infiere ni garantiza el ingreso fronterizo, la aprobación de visado, la llegada del vuelo, la matriculación ni el inicio laboral. En su lugar, usamos las fechas que declaraste y estados de incertidumbre claros.",

  "Costs and Currency": "Costos y moneda",
  "The original price stays visible from search to payment": "El precio original permanece visible desde la búsqueda hasta el pago",
  Item: "Concepto",
  "Illustrative Display": "Visualización ilustrativa",
  "Monthly rent": "Alquiler mensual",
  "$1,250/month": "1250 $/mes",
  Deposit: "Depósito de garantía",
  "$1,250 due after agreement signing": "1250 $ debidos tras la firma del contrato",
  "Required fees": "Tarifas obligatorias",
  "$75 identity/document processing fee, if lawful and approved":
    "75 $ de tarifa de procesamiento de identidad/documentos, si es legal y está aprobada",
  Bills: "Servicios",
  "$110/month estimated for electricity, water, and internet":
    "110 $/mes estimados para electricidad, agua e internet",
  "Known upfront total": "Total inicial conocido",
  "$2,575 before travel, excluding variable bills and optional services":
    "2575 $ antes del viaje, sin incluir servicios variables ni servicios opcionales",
  "Currency truth rule": "Regla de fidelidad de la moneda",
  "This generic learning block uses USD because the document locale is en-US. A real listing keeps its explicit original currency —":
    "Este bloque genérico de ejemplo usa USD porque el idioma del documento es inglés estadounidense. Un anuncio real conserva su moneda original explícita —",
  "— Zoiko Rooms never converts or replaces an amount unless you intentionally request a separate indicative view.":
    "— Zoiko Rooms nunca convierte ni reemplaza un importe, salvo que solicites deliberadamente una vista indicativa independiente.",

  "Current Rooms": "Habitaciones actuales",
  "Arrival fit, original currency, authority, and remote evidence":
    "Adecuación de llegada, moneda original, autoridad y evidencia remota",
  "Furnished private room near Midtown, NYC": "Habitación privada amueblada cerca de Midtown, Nueva York",
  "Available Aug 20–Sep 10 arrival": "Disponible para llegada del 20 de ago. al 10 de sept.",
  "Room near university, Toronto": "Habitación cerca de la universidad, Toronto",
  "Furnished room, East London": "Habitación amueblada, este de Londres",

  "Documents and Privacy": "Documentos y privacidad",
  "Share only what's needed, with the right party, at the right time":
    "Comparte solo lo necesario, con la parte correcta y en el momento adecuado",
  "Identity evidence": "Evidencia de identidad",
  "Confirms applicant/provider identity where necessary. Minimum fields, secure collection, no public upload.":
    "Confirma la identidad del solicitante/anfitrión cuando es necesario. Campos mínimos, recopilación segura, sin publicación pública.",
  "Study evidence": "Evidencia de estudios",
  "Confirms current program eligibility where required. Student ID is never exposed publicly.":
    "Confirma la elegibilidad del programa actual cuando se requiere. El carné de estudiante nunca se expone públicamente.",
  "Employment / assignment evidence": "Evidencia de empleo / asignación",
  "Confirms income or organization program eligibility using the minimum necessary evidence.":
    "Confirma ingresos o elegibilidad del programa de la organización con la evidencia mínima necesaria.",
  "Guarantor evidence": "Evidencia de aval",
  "Assessed under stated criteria, with alternatives offered where available.":
    "Evaluada según criterios establecidos, con alternativas ofrecidas cuando estén disponibles.",
  "Right-to-rent / local eligibility": "Derecho a alquilar / elegibilidad local",
  "Named jurisdiction and source; Zoiko Rooms does not reach its own legal conclusion.":
    "Jurisdicción y fuente especificadas; Zoiko Rooms no emite su propia conclusión legal.",
  "Payment information": "Información de pago",
  "Handled through the approved payment provider — never requested in messages.":
    "Se gestiona a través del proveedor de pagos aprobado; nunca se solicita por mensaje.",
  "Every request answers: who requests it, why it's needed, whether it's required, who can access it, how long it's retained, and how you can correct or challenge it.":
    "Cada solicitud responde: quién la pide, por qué es necesaria, si es obligatoria, quién puede acceder a ella, cuánto tiempo se conserva y cómo puedes corregirla o impugnarla.",

  "Organization Pathways": "Vías por organización",
  "Referral, distribution, and management are separate relationships":
    "Referencia, distribución y gestión son relaciones distintas",
  "Independent marketplace": "Mercado independiente",
  "No documented organization referral or management relationship — no logo or implied support.":
    "Sin referencia documentada ni relación de gestión con una organización; sin logotipo ni respaldo implícito.",
  "Organization-referred": "Referido por una organización",
  "You arrived through a current authorized referral. Program name shown only when authorized.":
    "Llegaste a través de una referencia actual y autorizada. El nombre del programa solo se muestra si está autorizado.",
  "Organization-distributed": "Distribuido por una organización",
  "An organization distributes an independently provided room. Distribution does not equal ownership or guarantee.":
    "Una organización distribuye una habitación ofrecida de forma independiente. La distribución no equivale a propiedad ni a garantía.",
  "Organization-managed": "Gestionado por una organización",
  "An organization or appointed operator manages the accommodation within a documented scope.":
    "Una organización o un operador designado gestiona el alojamiento dentro de un alcance documentado.",
  "Allowance / subsidy eligible": "Con derecho a ayuda / subsidio",
  "A current program may contribute to costs, with eligibility, amount, and expiry shown.":
    "Un programa vigente puede contribuir a los costos, mostrando elegibilidad, importe y vencimiento.",
  "Relocation-provider supported": "Con apoyo de un proveedor de reubicación",
  "An authorized relocation provider supports a defined part of the move — not a broader guarantee.":
    "Un proveedor de reubicación autorizado respalda una parte definida del traslado, sin garantía más amplia.",
  Government: "Gobierno",

  "Payments and Scam Prevention": "Pagos y prevención de fraudes",
  "Don't let urgency replace authority and a receipt": "No dejes que la urgencia sustituya a la autoridad y a un recibo",
  "Warning Sign": "Señal de alerta",
  "Required Action": "Acción requerida",
  "Gift card, cryptocurrency, or unrelated payee": "Tarjeta de regalo, criptomoneda o beneficiario sin relación",
  "Warn, block where policy applies, and offer report/support":
    "Advertir, bloquear cuando la política lo exija, y ofrecer reporte/asistencia",
  "Urgency or secrecy": "Urgencia o secretismo",
  "Pause payment; reconfirm authority, agreement, refund, and payee":
    "Pausar el pago; reconfirmar autoridad, contrato, reembolso y beneficiario",
  "New payee or bank details after agreement": "Nuevo beneficiario o datos bancarios tras el contrato",
  "Require independent reconfirmation through an approved channel":
    "Exigir una reconfirmación independiente a través de un canal aprobado",
  "Payment before viewing/evidence/authority": "Pago antes de la visita/evidencia/autoridad",
  "Show an explicit risk warning and a safer sequence": "Mostrar una advertencia de riesgo explícita y una secuencia más segura",
  "Provider cannot provide a receipt or agreement": "El anfitrión no puede proporcionar recibo ni contrato",
  "Do not continue payment — report or get support": "No continúes con el pago: reporta o busca ayuda",
  "Report a Concern": "Reportar un problema",

  "Arrival Checklist": "Lista de verificación para la llegada",
  "Plan the handoff before you travel": "Planifica la entrega antes de viajar",
  "Before application": "Antes de la solicitud",
  "Confirm availability/arrival fit, total original-currency costs, provider authority, room evidence, and organization relationship.":
    "Confirma la disponibilidad/adecuación de llegada, el costo total en la moneda original, la autoridad del anfitrión, la evidencia de la habitación y la relación con la organización.",
  "Before agreement": "Antes del contrato",
  "Confirm parties, address/room, term, arrival window, rent, deposit, fees, bills, and cancellation/refund.":
    "Confirma las partes, dirección/habitación, plazo, ventana de llegada, alquiler, depósito, tarifas, servicios y condiciones de cancelación/reembolso.",
  "Before payment": "Antes del pago",
  "Confirm payee, method, currency, fees, receipt, and refund — and that authority/agreement details match.":
    "Confirma el beneficiario, el método, la moneda, las tarifas, el recibo y el reembolso, y que los datos de autoridad/contrato coincidan.",
  "Before travel": "Antes de viajar",
  "Keep your agreement and payment record; confirm current room status, key collection, contact, and time zone.":
    "Conserva tu contrato y comprobante de pago; confirma el estado actual de la habitación, la entrega de llaves, el contacto y la zona horaria.",
  "At handoff": "En la entrega",
  "Confirm provider/agent, room/address, keys/access, inventory, material condition, and utilities.":
    "Confirma al anfitrión/agente, habitación/dirección, llaves/acceso, inventario, estado material y servicios.",

  "Before You Continue": "Antes de continuar",
  "Know what's confirmed, what's flexible, and what still needs local confirmation":
    "Conoce qué está confirmado, qué es flexible y qué aún requiere confirmación local",
  "Availability and arrival-date status": "Estado de disponibilidad y fecha de llegada",
  "Original listing currency remains visible": "La moneda original del anuncio permanece visible",
  "Provider identity and authority are separate": "La identidad y la autoridad del anfitrión son independientes",
  "Document purpose, recipient, access, and retention": "Propósito, destinatario, acceso y conservación de documentos",
  "Payment route, refund, and charge timing": "Vía de pago, reembolso y momento del cargo",
  "No housing, visa, legal, or safety guarantee": "Sin garantía de vivienda, visado, legal o de seguridad",
  Reserved: "Reservado",
  Unavailable: "No disponible",
  "Status disputed": "Estado en disputa",

  "Frequently Asked Questions": "Preguntas frecuentes",
  "International Moves FAQ": "Preguntas frecuentes sobre traslados internacionales",
  "Can I find a room before moving to another country?": "¿Puedo encontrar una habitación antes de mudarme a otro país?",
  "Yes for supported destinations and current listings. Use destination, expected arrival, monthly budget, stay length, furnishing, accessibility, and organization context; availability still requires confirmation.":
    "Sí, para destinos compatibles y anuncios actuales. Usa destino, llegada prevista, presupuesto mensual, duración de la estancia, amueblado, accesibilidad y contexto organizacional; la disponibilidad aún requiere confirmación.",
  "Which currency will I see?": "¿Qué moneda voy a ver?",
  "The listing's original currency — the one the provider set — stays visible from search through payment. Zoiko Rooms never converts or replaces that amount unless you intentionally request a separate indicative view.":
    "La moneda original del anuncio, la que estableció el anfitrión, permanece visible desde la búsqueda hasta el pago. Zoiko Rooms nunca convierte ni reemplaza ese importe, salvo que solicites deliberadamente una vista indicativa independiente.",
  "What documents might I need?": "¿Qué documentos podría necesitar?",
  "Depending on the listing and pathway: identity evidence, study or employment/assignment evidence, guarantor evidence, and right-to-rent or local eligibility evidence. Each request explains why it's needed and how it's protected.":
    "Según el anuncio y la vía: evidencia de identidad, evidencia de estudios o empleo/asignación, evidencia de aval y evidencia de derecho a alquilar o elegibilidad local. Cada solicitud explica por qué es necesaria y cómo se protege.",
  "Does Zoiko Rooms guarantee a visa or right to rent?": "¿Zoiko Rooms garantiza un visado o el derecho a alquilar?",
  "No. Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start, and does not reach its own legal conclusion on right-to-rent eligibility.":
    "No. Zoiko Rooms no infiere ni garantiza el ingreso fronterizo, la aprobación de visado, la llegada del vuelo, la matriculación o el inicio laboral, ni emite su propia conclusión legal sobre la elegibilidad para el derecho a alquilar.",
  "How can I check a room remotely?": "¿Cómo puedo verificar una habitación de forma remota?",
  "Request a live or recorded video viewing that shows the date, participants, and method. You can ask about dimensions, locks, windows, common areas, and defects — and report any reused or inconsistent media.":
    "Solicita una visita en video en vivo o grabada que muestre la fecha, los participantes y el método. Puedes preguntar sobre dimensiones, cerraduras, ventanas, zonas comunes y desperfectos, y reportar contenido reutilizado o inconsistente.",
  "Is an organization-referred room guaranteed?": "¿Está garantizada una habitación referida por una organización?",
  "No. Referral, distribution, and management are separate relationships. An organization-referred or organization-distributed room does not imply ownership, management, or a broader guarantee from that organization.":
    "No. Referencia, distribución y gestión son relaciones distintas. Una habitación referida o distribuida por una organización no implica propiedad, gestión ni una garantía más amplia por parte de esa organización.",
  "When should I pay a deposit?": "¿Cuándo debo pagar un depósito?",
  "Only after you've confirmed provider authority, the agreement, and the payee through the approved payment route. Urgency or a request to pay before viewing evidence or authority is a warning sign.":
    "Solo después de confirmar la autoridad del anfitrión, el contrato y el beneficiario a través de la vía de pago aprobada. La urgencia o una solicitud de pago antes de revisar evidencia o autoridad es una señal de alerta.",
  "What happens if my arrival date changes?": "¿Qué ocurre si cambia mi fecha de llegada?",
  "Recheck availability, price, and the agreement as soon as your dates change — a changed arrival date can affect stated availability, total cost, and cancellation or refund terms.":
    "Vuelve a verificar disponibilidad, precio y contrato en cuanto cambien tus fechas; una fecha de llegada modificada puede afectar la disponibilidad indicada, el costo total y las condiciones de cancelación o reembolso.",

  "Continue with the destination and dates you know now": "Continúa con el destino y las fechas que ya conoces",
  "Search current rooms, save an alert, or get help choosing the right path.":
    "Busca habitaciones actuales, guarda una alerta u obtén ayuda para elegir el camino adecuado.",
  "Get Help": "Obtener ayuda",
};

const PT_INTERNATIONAL_MOVES: Record<string, string> = {
  "International Moves": "Mudanças internacionais",
  "Search for a room across borders with clearer timing, costs, documents, and support.":
    "Procure um quarto além-fronteiras, com prazos, custos, documentos e apoio mais claros.",
  "Choose a destination, expected arrival, stay length, and monthly budget in the listing currency. Refine by furnished status, university, workplace, healthcare location, organization referral, accessibility, guarantor alternatives, and remote-viewing needs.":
    "Escolha um destino, a chegada prevista, a duração da estadia e o orçamento mensal na moeda do anúncio. Refine por mobília, universidade, local de trabalho, unidade de saúde, indicação de uma organização, acessibilidade, alternativas de fiador e necessidades de visita remota.",
  Destination: "Destino",
  "City, institution, or work": "Cidade, instituição ou trabalho",
  Arrival: "Chegada",
  "Date or flexible": "Data ou flexível",
  Budget: "Orçamento",
  "In listing currency": "Na moeda do anúncio",
  "A furnished room set up for remote work, ready to search and book internationally":
    "Um quarto mobilado preparado para trabalho remoto, pronto para pesquisar e reservar internacionalmente",
  "Flexible arrival": "Chegada flexível",
  Furnished: "Mobilado",
  "Remote viewing": "Visita remota",
  Accessibility: "Acessibilidade",
  "Organization referral": "Indicação de organização",

  "Move-Planning Pathways": "Caminhos para planear a mudança",
  "Four things to get right before you commit": "Quatro pontos a acertar antes de se comprometer",
  "Search Before Arrival": "Pesquisar antes de chegar",
  "Destination, expected arrival, budget, stay, furnishing, and remote-viewing needs.":
    "Destino, chegada prevista, orçamento, duração da estadia, mobília e necessidades de visita remota.",
  "Understand Costs": "Compreender os custos",
  "Original currency stays visible — rent, deposit, required fees, bills, and known upfront total.":
    "A moeda original permanece visível — renda, caução, taxas obrigatórias, despesas e o total inicial conhecido.",
  "Prepare Documents": "Preparar documentos",
  "What may be requested, why, by whom, when, and how it's protected.":
    "O que pode ser solicitado, porquê, por quem, quando e como é protegido.",
  "Move Safely": "Mudar-se com segurança",
  "Provider authority, room evidence, agreement, payment route, support, and arrival plan.":
    "Autoridade do anfitrião, evidências do quarto, contrato, via de pagamento, apoio e plano de chegada.",

  "Destination Pathways": "Destinos disponíveis",
  "Only destinations with current inventory or substantial guidance":
    "Apenas destinos com inventário atual ou orientação substancial",
  "Independent and organization-referred inventory": "Inventário independente e indicado por organizações",
  "University and employer referral pathways": "Vias de indicação por universidades e empregadores",
  "Independent marketplace coverage": "Cobertura do mercado independente",
  "Reviewed Jul 2026": "Revisto em julho de 2026",
  "Explore Rooms": "Explorar quartos",
  "Save alert": "Guardar alerta",

  "Provider Authority and Remote Evaluation": "Autoridade do anfitrião e avaliação remota",
  "Confirm who is offering the room, and why they may do so": "Confirme quem oferece o quarto e com que autoridade",
  "A provider walking a room seeker through a remote video viewing":
    "Um anfitrião a mostrar um quarto a um candidato através de uma videochamada",
  "Provider identity does not prove ownership, agency, sublet authority, room condition, or lawful tenancy.":
    "A identidade do anfitrião não comprova propriedade, representação, autoridade para sublocar, estado do quarto ou arrendamento legal.",
  "Live or recorded viewings show date, participants, method, and limitations — never a hidden recording.":
    "As visitas ao vivo ou gravadas mostram data, participantes, método e limitações — nunca uma gravação oculta.",
  "You can ask about room dimensions, locks, windows, common areas, bathroom, kitchen, access, and defects during a remote viewing.":
    "Durante uma visita remota, pode perguntar sobre dimensões do quarto, fechaduras, janelas, áreas comuns, casa de banho, cozinha, acesso e defeitos.",
  "Report any reused, misleading, edited, or inconsistent media.":
    "Denuncie qualquer conteúdo reutilizado, enganoso, editado ou inconsistente.",
  "Remote evidence is not a guarantee": "A evidência remota não é uma garantia",
  "A video call, recorded tour, Room Passport, identity check, document, or organization referral can reduce uncertainty. None alone proves current condition, legal right to let, suitability, personal safety, or move success.":
    "Uma videochamada, uma visita gravada, um Room Passport, uma verificação de identidade, um documento ou uma indicação de organização podem reduzir a incerteza. Nenhum, isoladamente, comprova o estado atual, o direito legal de arrendar, a adequação, a segurança pessoal ou o sucesso da mudança.",

  "Availability and Timing": "Disponibilidade e prazos",
  "Arrival is a range, not a promise": "A chegada é um intervalo, não uma promessa",
  State: "Estado",
  Meaning: "Significado",
  "Available for stated arrival": "Disponível para a chegada indicada",
  "Provider confirmed availability for the selected date/range within the freshness threshold":
    "O anfitrião confirmou disponibilidade para a data/intervalo selecionado dentro do limite de atualidade",
  "Flexible arrival possible": "Chegada flexível possível",
  "Provider indicated an approved flexibility window": "O anfitrião indicou uma janela de flexibilidade aprovada",
  "Partial date match": "Correspondência parcial de datas",
  "Room covers only part of the requested stay": "O quarto cobre apenas parte da estadia solicitada",
  "Availability to confirm": "Disponibilidade a confirmar",
  "No sufficiently recent confirmation for the selected arrival":
    "Sem confirmação suficientemente recente para a chegada selecionada",
  "Arrival date changed": "Data de chegada alterada",
  "Seeker updated timing after inquiry — recheck availability, price, and agreement":
    "O candidato atualizou os prazos após a consulta — reverifique disponibilidade, preço e contrato",
  "Travel/entry uncertain": "Viagem/entrada incerta",
  "Arrival depends on an external condition — use flexible dates, no visa or entry assumption":
    "A chegada depende de uma condição externa — use datas flexíveis, sem presumir visto ou entrada",
  "No travel or entry prediction": "Sem previsão de viagem ou entrada",
  "Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start. We use your declared dates and clear uncertainty states instead.":
    "A Zoiko Rooms não presume nem garante a entrada na fronteira, a aprovação do visto, a chegada do voo, a matrícula ou o início do trabalho. Em vez disso, usamos as datas que declarou e estados de incerteza claros.",

  "Costs and Currency": "Custos e moeda",
  "The original price stays visible from search to payment": "O preço original permanece visível da pesquisa ao pagamento",
  Item: "Item",
  "Illustrative Display": "Apresentação ilustrativa",
  "Monthly rent": "Renda mensal",
  "$1,250/month": "1250 $/mês",
  Deposit: "Caução",
  "$1,250 due after agreement signing": "1250 $ devidos após a assinatura do contrato",
  "Required fees": "Taxas obrigatórias",
  "$75 identity/document processing fee, if lawful and approved":
    "75 $ de taxa de processamento de identidade/documentos, se legal e aprovada",
  Bills: "Despesas",
  "$110/month estimated for electricity, water, and internet":
    "110 $/mês estimados para eletricidade, água e internet",
  "Known upfront total": "Total inicial conhecido",
  "$2,575 before travel, excluding variable bills and optional services":
    "2575 $ antes da viagem, excluindo despesas variáveis e serviços opcionais",
  "Currency truth rule": "Regra de fidelidade da moeda",
  "This generic learning block uses USD because the document locale is en-US. A real listing keeps its explicit original currency —":
    "Este bloco genérico de exemplo usa USD porque o idioma do documento é inglês dos EUA. Um anúncio real mantém a sua moeda original explícita —",
  "— Zoiko Rooms never converts or replaces an amount unless you intentionally request a separate indicative view.":
    "— a Zoiko Rooms nunca converte nem substitui um valor, salvo se solicitar deliberadamente uma vista indicativa separada.",

  "Current Rooms": "Quartos atuais",
  "Arrival fit, original currency, authority, and remote evidence":
    "Adequação de chegada, moeda original, autoridade e evidência remota",
  "Furnished private room near Midtown, NYC": "Quarto privado mobilado perto de Midtown, Nova Iorque",
  "Available Aug 20–Sep 10 arrival": "Disponível para chegada de 20 de ago. a 10 de set.",
  "Room near university, Toronto": "Quarto perto da universidade, Toronto",
  "Furnished room, East London": "Quarto mobilado, East London",

  "Documents and Privacy": "Documentos e privacidade",
  "Share only what's needed, with the right party, at the right time":
    "Partilhe apenas o necessário, com a parte certa, no momento certo",
  "Identity evidence": "Prova de identidade",
  "Confirms applicant/provider identity where necessary. Minimum fields, secure collection, no public upload.":
    "Confirma a identidade do candidato/anfitrião quando necessário. Campos mínimos, recolha segura, sem carregamento público.",
  "Study evidence": "Prova de estudos",
  "Confirms current program eligibility where required. Student ID is never exposed publicly.":
    "Confirma a elegibilidade do programa atual quando exigido. O cartão de estudante nunca é exposto publicamente.",
  "Employment / assignment evidence": "Prova de emprego / colocação",
  "Confirms income or organization program eligibility using the minimum necessary evidence.":
    "Confirma rendimento ou elegibilidade do programa da organização com o mínimo de evidência necessária.",
  "Guarantor evidence": "Prova de fiador",
  "Assessed under stated criteria, with alternatives offered where available.":
    "Avaliada segundo critérios definidos, com alternativas oferecidas quando disponíveis.",
  "Right-to-rent / local eligibility": "Direito a arrendar / elegibilidade local",
  "Named jurisdiction and source; Zoiko Rooms does not reach its own legal conclusion.":
    "Jurisdição e fonte identificadas; a Zoiko Rooms não formula a sua própria conclusão jurídica.",
  "Payment information": "Informações de pagamento",
  "Handled through the approved payment provider — never requested in messages.":
    "Tratada através do prestador de pagamento aprovado — nunca solicitada em mensagens.",
  "Every request answers: who requests it, why it's needed, whether it's required, who can access it, how long it's retained, and how you can correct or challenge it.":
    "Cada pedido responde: quem o solicita, porque é necessário, se é obrigatório, quem lhe pode aceder, durante quanto tempo é conservado e como pode corrigi-lo ou contestá-lo.",

  "Organization Pathways": "Vias por organização",
  "Referral, distribution, and management are separate relationships":
    "Indicação, distribuição e gestão são relações distintas",
  "Independent marketplace": "Mercado independente",
  "No documented organization referral or management relationship — no logo or implied support.":
    "Sem indicação documentada nem relação de gestão com uma organização — sem logótipo ou apoio implícito.",
  "Organization-referred": "Indicado por organização",
  "You arrived through a current authorized referral. Program name shown only when authorized.":
    "Chegou através de uma indicação atual e autorizada. O nome do programa só é apresentado se autorizado.",
  "Organization-distributed": "Distribuído por organização",
  "An organization distributes an independently provided room. Distribution does not equal ownership or guarantee.":
    "Uma organização distribui um quarto oferecido de forma independente. A distribuição não equivale a propriedade nem a garantia.",
  "Organization-managed": "Gerido por organização",
  "An organization or appointed operator manages the accommodation within a documented scope.":
    "Uma organização ou um operador designado gere o alojamento dentro de um âmbito documentado.",
  "Allowance / subsidy eligible": "Com direito a subsídio / apoio",
  "A current program may contribute to costs, with eligibility, amount, and expiry shown.":
    "Um programa atual pode contribuir para os custos, mostrando elegibilidade, valor e prazo de validade.",
  "Relocation-provider supported": "Apoiado por prestador de realocação",
  "An authorized relocation provider supports a defined part of the move — not a broader guarantee.":
    "Um prestador de realocação autorizado apoia uma parte definida da mudança — sem garantia mais ampla.",
  Government: "Governo",

  "Payments and Scam Prevention": "Pagamentos e prevenção de fraudes",
  "Don't let urgency replace authority and a receipt": "Não deixe que a urgência substitua a autoridade e um recibo",
  "Warning Sign": "Sinal de alerta",
  "Required Action": "Ação necessária",
  "Gift card, cryptocurrency, or unrelated payee": "Cartão-presente, criptomoeda ou beneficiário sem relação",
  "Warn, block where policy applies, and offer report/support":
    "Alertar, bloquear quando a política se aplicar e oferecer denúncia/apoio",
  "Urgency or secrecy": "Urgência ou sigilo",
  "Pause payment; reconfirm authority, agreement, refund, and payee":
    "Suspender o pagamento; reconfirmar autoridade, contrato, reembolso e beneficiário",
  "New payee or bank details after agreement": "Novo beneficiário ou dados bancários após o contrato",
  "Require independent reconfirmation through an approved channel":
    "Exigir reconfirmação independente através de um canal aprovado",
  "Payment before viewing/evidence/authority": "Pagamento antes da visita/evidência/autoridade",
  "Show an explicit risk warning and a safer sequence": "Mostrar um aviso de risco explícito e uma sequência mais segura",
  "Provider cannot provide a receipt or agreement": "O anfitrião não consegue fornecer recibo ou contrato",
  "Do not continue payment — report or get support": "Não continue com o pagamento — denuncie ou procure apoio",
  "Report a Concern": "Denunciar um problema",

  "Arrival Checklist": "Lista de verificação de chegada",
  "Plan the handoff before you travel": "Planeie a entrega antes de viajar",
  "Before application": "Antes da candidatura",
  "Confirm availability/arrival fit, total original-currency costs, provider authority, room evidence, and organization relationship.":
    "Confirme a disponibilidade/adequação de chegada, o custo total na moeda original, a autoridade do anfitrião, a evidência do quarto e a relação com a organização.",
  "Before agreement": "Antes do contrato",
  "Confirm parties, address/room, term, arrival window, rent, deposit, fees, bills, and cancellation/refund.":
    "Confirme as partes, endereço/quarto, prazo, janela de chegada, renda, caução, taxas, despesas e condições de cancelamento/reembolso.",
  "Before payment": "Antes do pagamento",
  "Confirm payee, method, currency, fees, receipt, and refund — and that authority/agreement details match.":
    "Confirme o beneficiário, o método, a moeda, as taxas, o recibo e o reembolso — e que os dados de autoridade/contrato coincidem.",
  "Before travel": "Antes de viajar",
  "Keep your agreement and payment record; confirm current room status, key collection, contact, and time zone.":
    "Guarde o seu contrato e comprovativo de pagamento; confirme o estado atual do quarto, a entrega de chaves, o contacto e o fuso horário.",
  "At handoff": "Na entrega",
  "Confirm provider/agent, room/address, keys/access, inventory, material condition, and utilities.":
    "Confirme o anfitrião/agente, quarto/endereço, chaves/acesso, inventário, estado material e despesas.",

  "Before You Continue": "Antes de continuar",
  "Know what's confirmed, what's flexible, and what still needs local confirmation":
    "Saiba o que está confirmado, o que é flexível e o que ainda precisa de confirmação local",
  "Availability and arrival-date status": "Estado de disponibilidade e data de chegada",
  "Original listing currency remains visible": "A moeda original do anúncio permanece visível",
  "Provider identity and authority are separate": "A identidade e a autoridade do anfitrião são distintas",
  "Document purpose, recipient, access, and retention": "Finalidade, destinatário, acesso e conservação de documentos",
  "Payment route, refund, and charge timing": "Via de pagamento, reembolso e momento da cobrança",
  "No housing, visa, legal, or safety guarantee": "Sem garantia de alojamento, visto, jurídica ou de segurança",
  Reserved: "Reservado",
  Unavailable: "Indisponível",
  "Status disputed": "Estado contestado",

  "Frequently Asked Questions": "Perguntas frequentes",
  "International Moves FAQ": "FAQ sobre mudanças internacionais",
  "Can I find a room before moving to another country?": "Posso encontrar um quarto antes de me mudar para outro país?",
  "Yes for supported destinations and current listings. Use destination, expected arrival, monthly budget, stay length, furnishing, accessibility, and organization context; availability still requires confirmation.":
    "Sim, para destinos suportados e anúncios atuais. Use destino, chegada prevista, orçamento mensal, duração da estadia, mobília, acessibilidade e contexto organizacional; a disponibilidade ainda requer confirmação.",
  "Which currency will I see?": "Que moeda vou ver?",
  "The listing's original currency — the one the provider set — stays visible from search through payment. Zoiko Rooms never converts or replaces that amount unless you intentionally request a separate indicative view.":
    "A moeda original do anúncio — a definida pelo anfitrião — permanece visível da pesquisa até ao pagamento. A Zoiko Rooms nunca converte nem substitui esse valor, salvo se solicitar deliberadamente uma vista indicativa separada.",
  "What documents might I need?": "Que documentos poderei precisar?",
  "Depending on the listing and pathway: identity evidence, study or employment/assignment evidence, guarantor evidence, and right-to-rent or local eligibility evidence. Each request explains why it's needed and how it's protected.":
    "Dependendo do anúncio e da via: prova de identidade, prova de estudos ou emprego/colocação, prova de fiador e prova de direito a arrendar ou elegibilidade local. Cada pedido explica porque é necessário e como é protegido.",
  "Does Zoiko Rooms guarantee a visa or right to rent?": "A Zoiko Rooms garante um visto ou o direito a arrendar?",
  "No. Zoiko Rooms does not infer or guarantee border entry, visa approval, flight arrival, enrollment, or employment start, and does not reach its own legal conclusion on right-to-rent eligibility.":
    "Não. A Zoiko Rooms não presume nem garante a entrada na fronteira, a aprovação do visto, a chegada do voo, a matrícula ou o início do trabalho, nem formula a sua própria conclusão jurídica sobre a elegibilidade para o direito a arrendar.",
  "How can I check a room remotely?": "Como posso verificar um quarto remotamente?",
  "Request a live or recorded video viewing that shows the date, participants, and method. You can ask about dimensions, locks, windows, common areas, and defects — and report any reused or inconsistent media.":
    "Solicite uma visita em vídeo ao vivo ou gravada que mostre a data, os participantes e o método. Pode perguntar sobre dimensões, fechaduras, janelas, áreas comuns e defeitos — e denunciar conteúdo reutilizado ou inconsistente.",
  "Is an organization-referred room guaranteed?": "Um quarto indicado por uma organização é garantido?",
  "No. Referral, distribution, and management are separate relationships. An organization-referred or organization-distributed room does not imply ownership, management, or a broader guarantee from that organization.":
    "Não. Indicação, distribuição e gestão são relações distintas. Um quarto indicado ou distribuído por uma organização não implica propriedade, gestão ou uma garantia mais ampla dessa organização.",
  "When should I pay a deposit?": "Quando devo pagar uma caução?",
  "Only after you've confirmed provider authority, the agreement, and the payee through the approved payment route. Urgency or a request to pay before viewing evidence or authority is a warning sign.":
    "Só depois de confirmar a autoridade do anfitrião, o contrato e o beneficiário através da via de pagamento aprovada. Urgência ou um pedido de pagamento antes de rever evidência ou autoridade é um sinal de alerta.",
  "What happens if my arrival date changes?": "O que acontece se a minha data de chegada mudar?",
  "Recheck availability, price, and the agreement as soon as your dates change — a changed arrival date can affect stated availability, total cost, and cancellation or refund terms.":
    "Reverifique a disponibilidade, o preço e o contrato assim que as suas datas mudarem — uma data de chegada alterada pode afetar a disponibilidade indicada, o custo total e as condições de cancelamento ou reembolso.",

  "Continue with the destination and dates you know now": "Continue com o destino e as datas que já conhece",
  "Search current rooms, save an alert, or get help choosing the right path.":
    "Pesquise quartos atuais, guarde um alerta ou obtenha ajuda para escolher o caminho certo.",
  "Get Help": "Obter ajuda",
};

// ---------------------------------------------------------------------------
// university-rooms
// ---------------------------------------------------------------------------

const DE_UNIVERSITY_ROOMS: Record<string, string> = {
  "Find a room around your university, campus, term, or placement.":
    "Finden Sie ein Zimmer rund um Ihre Universität, Ihren Campus, Ihr Semester oder Ihr Praktikum.",
  "Search current room listings using institution, campus, move-in or term dates, monthly budget, stay length, commute, furnishing, bills, guarantor needs, and accessibility features.":
    "Durchsuchen Sie aktuelle Zimmerangebote nach Institution, Campus, Einzugs- oder Semesterterminen, Monatsbudget, Aufenthaltsdauer, Pendelweg, Möblierung, Nebenkosten, Bürgschaftsbedarf und Barrierefreiheit.",
  "University or Campus": "Universität oder Campus",
  "e.g. Northbridge University": "z. B. Northbridge University",
  "Move-in / Term": "Einzug / Semester",
  "Date or term": "Datum oder Semester",
  "Monthly Budget": "Monatsbudget",
  Optional: "Optional",
  "Two students chatting in a furnished room near campus": "Zwei Studierende unterhalten sich in einem möblierten Zimmer nahe dem Campus",
  "International arrival": "Internationale Ankunft",
  "Visiting researcher": "Gastforschende/r",
  "Placement / Internship": "Praktikum / Placement",

  "Application and Document Readiness": "Bewerbungs- und Dokumentenbereitschaft",
  "Criteria and documents, explained before you submit": "Kriterien und Dokumente, erklärt vor der Einreichung",
  "Student status": "Studierendenstatus",
  "Whether required, why, acceptable evidence, who receives it, and alternatives where applicable.":
    "Ob erforderlich, warum, welche Nachweise akzeptiert werden, wer sie erhält, und Alternativen, sofern zutreffend.",
  "Identity / right-to-rent": "Identität / Vermietungsrecht",
  "Exact purpose, legal basis, responsible party, secure route, and limitations.":
    "Genauer Zweck, Rechtsgrundlage, verantwortliche Partei, sicherer Übermittlungsweg und Einschränkungen.",
  "Income / funding": "Einkommen / Finanzierung",
  "What's required, why, acceptable alternatives, and who decides.":
    "Was erforderlich ist, warum, akzeptable Alternativen und wer entscheidet.",
  "Guarantor / sponsor": "Bürge / Förderer",
  "Criteria, documents, liability period, and alternatives with privacy role separation.":
    "Kriterien, Dokumente, Haftungszeitraum und Alternativen mit getrennter Datenschutzrolle.",
  References: "Referenzen",
  "Purpose, contact permission, minimum data, recipient, retention, and correction.":
    "Zweck, Kontakterlaubnis, Mindestangaben, Empfänger, Aufbewahrung und Korrekturmöglichkeit.",
  "Accessibility / accommodation": "Barrierefreiheit / Vorkehrungen",
  "Separated from eligibility unless legally necessary; sensitive detail minimized.":
    "Getrennt von der Zulassung, sofern rechtlich nicht erforderlich; sensible Angaben werden minimiert.",
  "No sensitive document goes through public forms, email links without approved security, URL parameters, or analytics.":
    "Kein sensibles Dokument wird über öffentliche Formulare, E-Mail-Links ohne genehmigte Sicherheit, URL-Parameter oder Analysetools übermittelt.",

  "Term and Availability Planner": "Semester- und Verfügbarkeitsplaner",
  "Availability freshness tightens around term starts": "Die Aktualitätsanforderung an die Verfügbarkeit steigt rund um Semesterbeginn",
  "Available for stated term/dates": "Verfügbar für angegebenes Semester/angegebene Termine",
  "Recently confirmed for the displayed move-in/move-out or term range":
    "Kürzlich bestätigt für den angezeigten Einzugs-/Auszugs- oder Semesterzeitraum",
  "Available from date": "Verfügbar ab Datum",
  "Confirmed from a specific date, which may not align exactly with term start":
    "Bestätigt ab einem bestimmten Datum, das nicht exakt mit dem Semesterbeginn übereinstimmen muss",
  "No confirmation within the freshness threshold or exact term dates":
    "Keine Bestätigung innerhalb der Aktualitätsgrenze oder für die genauen Semestertermine",
  "Flexible arrival considered": "Flexible Ankunft wird berücksichtigt",
  "Provider may consider a date range but hasn't accepted a specific seeker":
    "Der Anbieter zieht möglicherweise einen Zeitraum in Betracht, hat aber noch keine bestimmte suchende Person akzeptiert",
  "Term mismatch": "Semester passt nicht",
  "Room dates don't match the selected academic period — nearby dates suggested":
    "Zimmertermine stimmen nicht mit dem gewählten akademischen Zeitraum überein – nahegelegene Termine werden vorgeschlagen",
  "Availability or material facts conflict with evidence — application/payment suspended":
    "Verfügbarkeit oder wesentliche Fakten stehen im Widerspruch zu den Nachweisen – Bewerbung/Zahlung ausgesetzt",

  "Cost and Guarantor Guidance": "Kosten- und Bürgschaftsleitfaden",
  "Total cost and guarantor terms before commitment": "Gesamtkosten und Bürgschaftsbedingungen vor der Zusage",
  "$1,050 per month": "1.050 $ pro Monat",
  "Security deposit": "Kaution",
  "$1,050 due after agreement signing": "1.050 $ fällig nach Vertragsunterzeichnung",
  "Required provider fee": "Erforderliche Anbietergebühr",
  "$0": "0 $",
  "Internet included; electricity estimated at $45–$70/month; water included":
    "Internet inklusive; Strom geschätzt 45–70 $/Monat; Wasser inklusive",
  "Known amount due before move-in": "Bekannter fälliger Betrag vor Einzug",
  "$2,100 plus any disclosed variable utility amount": "2.100 $ zuzüglich etwaiger ausgewiesener variabler Nebenkosten",
  Guarantor: "Bürge",
  "Local guarantor requested; alternative arrangement may be considered by the provider":
    "Lokaler Bürge erforderlich; der Anbieter kann eine alternative Regelung in Betracht ziehen",
  "Example limitation": "Beispielhafte Einschränkung",
  "This learning block demonstrates cost composition only. It is not a university, city, or market average and must not be reused as pricing evidence.":
    "Dieser Beispielabschnitt veranschaulicht lediglich die Kostenzusammensetzung. Es handelt sich nicht um einen Durchschnittswert für Universität, Stadt oder Markt und darf nicht als Preisnachweis wiederverwendet werden.",

  "Current Room Inventory": "Aktuelles Zimmerangebot",
  "Compare status, commute, cost, and authority — not one universal badge":
    "Vergleichen Sie Status, Pendelweg, Kosten und Berechtigung – kein einheitliches Gütesiegel",
  "Room near Northbridge, 12 min walk to campus": "Zimmer nahe Northbridge, 12 Min. Fußweg zum Campus",
  "Available for stated term": "Verfügbar für angegebenes Semester",
  "Shared house near Metro State, transit line": "WG nahe Metro State, an der Nahverkehrslinie",
  "Furnished room near Harbor Medical": "Möbliertes Zimmer nahe Harbor Medical",

  "University Rooms FAQ": "FAQ zu Studierendenzimmern",
  "How do I find a room near my university?": "Wie finde ich ein Zimmer nahe meiner Universität?",
  "Choose the university or campus, move-in or term dates, and monthly budget, then refine by stay length, commute, furnishing, bills, guarantor needs, accessibility, or international arrival.":
    "Wählen Sie Universität oder Campus, Einzugs- oder Semestertermine und Monatsbudget, und verfeinern Sie dann nach Aufenthaltsdauer, Pendelweg, Möblierung, Nebenkosten, Bürgschaftsbedarf, Barrierefreiheit oder internationaler Ankunft.",
  "Are these official university rooms?": "Sind das offizielle Universitätszimmer?",
  "Not necessarily. Every listing shows its relationship status — independent, university-referred, institution-distributed, institution-managed, or external official housing — so you know exactly what the university's role is, if any.":
    "Nicht unbedingt. Jedes Angebot zeigt seinen Beziehungsstatus – unabhängig, von der Universität empfohlen, institutionell vertrieben, institutionell verwaltet oder externer offizieller Wohnraum –, damit Sie genau wissen, welche Rolle die Universität gegebenenfalls spielt.",
  "Does the university approve every listing?": "Genehmigt die Universität jedes Angebot?",
  "No. Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current for that specific listing.":
    "Nein. Zoiko Rooms impliziert niemals Eigentum, Befürwortung, Genehmigung, Sicherheit oder Garantie durch die Universität, es sei denn, die Beziehung und der genaue Umfang sind für dieses spezifische Angebot dokumentiert und aktuell.",
  "What costs should I check?": "Welche Kosten sollte ich prüfen?",
  "Monthly rent, security deposit, required provider fees, bills, and the known amount due before move-in — plus whether a guarantor is requested and what alternatives the provider allows.":
    "Monatsmiete, Kaution, erforderliche Anbietergebühren, Nebenkosten und den bekannten vor Einzug fälligen Betrag – sowie ob ein Bürge verlangt wird und welche Alternativen der Anbieter zulässt.",
  "What can I do if I don't have a local guarantor?": "Was kann ich tun, wenn ich keinen lokalen Bürgen habe?",
  "Some providers accept alternative arrangements. Check the listing's guarantor terms first, and use the Cost and Guarantor Guidance section to understand what's typically required and why.":
    "Manche Anbieter akzeptieren alternative Regelungen. Prüfen Sie zunächst die Bürgschaftsbedingungen des Angebots und nutzen Sie den Abschnitt Kosten- und Bürgschaftsleitfaden, um zu verstehen, was üblicherweise erforderlich ist und warum.",
  "Can international students search before arrival?": "Können internationale Studierende schon vor der Ankunft suchen?",
  "Yes. Use International Arrival Support and International Moves to plan timing, documents, currency, and payments before you travel — availability still requires confirmation closer to your dates.":
    "Ja. Nutzen Sie die internationale Ankunftsunterstützung und internationale Umzüge, um Zeitplan, Dokumente, Währung und Zahlungen vor der Abreise zu planen – die Verfügbarkeit muss näher am Termin dennoch bestätigt werden.",
  "How does Zoiko Rooms verify student rooms?": "Wie verifiziert Zoiko Rooms Studierendenzimmer?",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship are checked and shown as separate statuses rather than one universal badge.":
    "Anbieteridentität, Angebotsberechtigung, Zimmernachweis, Verfügbarkeit, Preis, Zahlung und Institutionsbeziehung werden geprüft und als getrennte Status angezeigt, statt als ein einheitliches Gütesiegel.",
  "Can Zoiko Rooms guarantee a safe room?": "Kann Zoiko Rooms ein sicheres Zimmer garantieren?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "Nein. Verifizierung verringert Unsicherheit, garantiert aber weder Sicherheit, Rechtmäßigkeit, Eignung, Zustand der Immobilie noch künftiges Verhalten. Nutzen Sie die Melde-, Blockier- und Support-Funktionen, wenn Ihnen etwas nicht richtig erscheint.",

  "Featured Institutions": "Ausgewählte Institutionen",
  "Only supported institutions with useful current supply": "Nur unterstützte Institutionen mit nützlichem aktuellem Angebot",
  "18 current rooms": "18 aktuelle Zimmer",
  "University-referred search pathway": "Von der Universität empfohlener Suchweg",
  "12 current rooms": "12 aktuelle Zimmer",
  "Institution-distributed inventory": "Institutionell vertriebenes Angebot",
  "Availability limited": "Verfügbarkeit begrenzt",
  "Explore University": "Universität entdecken",

  "Ready to search near campus?": "Bereit, in Campusnähe zu suchen?",
  "Continue your search, save an alert, or list a room if you're a provider.":
    "Setzen Sie Ihre Suche fort, speichern Sie einen Suchauftrag, oder bieten Sie als Anbieter ein Zimmer an.",

  "International Arrival Support": "Unterstützung bei internationaler Ankunft",
  "Uncertain dates, documents, or currency? Start here": "Unsichere Termine, Dokumente oder Währung? Hier beginnen",
  "Cross-border basics": "Grundlagen für grenzüberschreitende Umzüge",
  "Original listing currency stays visible, remote evidence has limits, and Zoiko Rooms does not guarantee housing, visa outcomes, or right-to-rent eligibility. Local guarantor alternatives may exist, but acceptance is never guaranteed.":
    "Die ursprüngliche Angebotswährung bleibt sichtbar, Fernnachweise haben Grenzen, und Zoiko Rooms garantiert weder Wohnraum, Visumsergebnisse noch Vermietungsberechtigung. Lokale Bürgschaftsalternativen können bestehen, eine Annahme ist jedoch nie garantiert.",
  "Explore International Moves": "Internationale Umzüge entdecken",
  "Search with Flexible Arrival": "Mit flexibler Ankunft suchen",
  "Review Payment Safety": "Zahlungssicherheit prüfen",

  "Quick-Need Pathways": "Schnellzugriff je nach Bedarf",
  "Four ways to move forward": "Vier Wege, um weiterzukommen",
  "Search by University": "Nach Universität suchen",
  "Choose a supported institution or campus and apply term-aware search.":
    "Wählen Sie eine unterstützte Institution oder einen Campus und nutzen Sie die semesterbewusste Suche.",
  "Explore Current Rooms": "Aktuelle Zimmer entdecken",
  "Review availability, price, provider authority, and room facts.":
    "Prüfen Sie Verfügbarkeit, Preis, Anbieterberechtigung und Zimmerfakten.",
  "Plan International Arrival": "Internationale Ankunft planen",
  "Understand timing, documents, currency, payments, and uncertainty.":
    "Verstehen Sie Zeitplan, Dokumente, Währung, Zahlungen und Unsicherheiten.",
  "Get Student Safety Help": "Sicherheitshilfe für Studierende erhalten",
  "Review scam signs, viewings, payments, reporting, and support.":
    "Prüfen Sie Betrugsanzeichen, Besichtigungen, Zahlungen, Meldewege und Unterstützung.",

  "Relationship Assurance": "Beziehungssicherheit",
  "Know whether a listing is independent, referred, distributed, or institution-managed":
    "Wissen Sie, ob ein Angebot unabhängig, empfohlen, vertrieben oder institutionell verwaltet ist",
  "Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current.":
    "Zoiko Rooms impliziert niemals Eigentum, Befürwortung, Genehmigung, Sicherheit oder Garantie durch die Universität, es sei denn, die Beziehung und der genaue Umfang sind dokumentiert und aktuell.",
  "University-referred pathway": "Von der Universität empfohlener Weg",
  "Institution-managed inventory": "Institutionell verwaltetes Angebot",
  "External official housing": "Externer offizieller Wohnraum",
  "Relationship under review": "Beziehung wird geprüft",
  "Logo and Endorsement Rule": "Regel zu Logo und Befürwortung",
  'We never display an institution logo or phrases like "partnered with" or "official" unless the exact relationship, authorization, placement, period, scope, and limitations are approved.':
    'Wir zeigen niemals ein Institutionslogo oder Formulierungen wie „in Partnerschaft mit" oder „offiziell", es sei denn, die genaue Beziehung, Autorisierung, Platzierung, Dauer, Umfang und Einschränkungen sind genehmigt.',

  "University and Seeker Support": "Unterstützung für Universität und Suchende",
  "Who's responsible for what": "Wer ist wofür verantwortlich",
  "Search, account, save, compare, report": "Suchen, Konto, Speichern, Vergleichen, Melden",
  "Zoiko Rooms Help Center": "Zoiko Rooms Hilfe-Center",
  "Platform function only": "Nur Plattformfunktion",
  "Listing facts and availability": "Angebotsfakten und Verfügbarkeit",
  Provider: "Anbieter",
  "Zoiko Rooms does not guarantee provider-supplied facts": "Zoiko Rooms garantiert nicht die vom Anbieter gemachten Angaben",
  "Application decision": "Bewerbungsentscheidung",
  "Provider / agent / institution-managed owner": "Anbieter / Vermittler / institutionell verwaltender Eigentümer",
  "Zoiko Rooms role limited unless separately authorized": "Rolle von Zoiko Rooms begrenzt, sofern nicht gesondert autorisiert",
  "University referral / program": "Universitäre Empfehlung / Programm",
  "Named university support route where authorized": "Benannter universitärer Unterstützungsweg, sofern autorisiert",
  "No implied support for independent listings": "Keine implizierte Unterstützung für unabhängige Angebote",
  "Safety or scam concern": "Sicherheits- oder Betrugsbedenken",
  "Report, block, Trust & Safety, emergency services where needed":
    "Melden, Blockieren, Vertrauen & Sicherheit, bei Bedarf Notdienste",
  "Zoiko Rooms is not an emergency service": "Zoiko Rooms ist kein Notdienst",
  Issue: "Anliegen",
  "Primary Owner": "Hauptverantwortliche(r)",
  Boundary: "Abgrenzung",

  "Verification and Safety": "Verifizierung und Sicherheit",
  "Separate checks, not one universal badge": "Getrennte Prüfungen statt eines einheitlichen Gütesiegels",
  "A university support staff member available to help students on campus":
    "Ein Mitglied des universitären Support-Teams, das Studierenden auf dem Campus hilft",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship remain separate statuses.":
    "Anbieteridentität, Angebotsberechtigung, Zimmernachweis, Verfügbarkeit, Preis, Zahlung und Institutionsbeziehung bleiben getrennte Status.",
  "A provider claiming university affiliation still needs the relationship status shown — report any false affiliation claim.":
    "Auch bei behaupteter universitärer Zugehörigkeit muss der Anbieter den Beziehungsstatus anzeigen – melden Sie jede falsche Zugehörigkeitsbehauptung.",
  "Never pay a deposit merely to arrange or access a viewing.": "Zahlen Sie niemals eine Kaution nur, um eine Besichtigung zu vereinbaren oder Zugang dazu zu erhalten.",
  "Gift cards, cryptocurrency, and unrelated payees are warning signs — don't pay, report instead.":
    "Geschenkkarten, Kryptowährung und fachfremde Zahlungsempfänger sind Warnsignale – nicht zahlen, stattdessen melden.",
};

const FR_UNIVERSITY_ROOMS: Record<string, string> = {
  "Find a room around your university, campus, term, or placement.":
    "Trouvez une chambre près de votre université, campus, semestre ou stage.",
  "Search current room listings using institution, campus, move-in or term dates, monthly budget, stay length, commute, furnishing, bills, guarantor needs, and accessibility features.":
    "Recherchez les annonces actuelles selon l'établissement, le campus, les dates d'entrée ou de semestre, le budget mensuel, la durée du séjour, le trajet, l'ameublement, les charges, le besoin de garant et les caractéristiques d'accessibilité.",
  "University or Campus": "Université ou campus",
  "e.g. Northbridge University": "ex. Northbridge University",
  "Move-in / Term": "Entrée / semestre",
  "Date or term": "Date ou semestre",
  "Monthly Budget": "Budget mensuel",
  Optional: "Facultatif",
  "Two students chatting in a furnished room near campus": "Deux étudiants discutant dans une chambre meublée près du campus",
  "International arrival": "Arrivée internationale",
  "Visiting researcher": "Chercheur invité",
  "Placement / Internship": "Stage / placement",

  "Application and Document Readiness": "Préparation de la candidature et des documents",
  "Criteria and documents, explained before you submit": "Critères et documents expliqués avant votre candidature",
  "Student status": "Statut étudiant",
  "Whether required, why, acceptable evidence, who receives it, and alternatives where applicable.":
    "Si requis, pourquoi, preuves acceptables, destinataire, et alternatives le cas échéant.",
  "Identity / right-to-rent": "Identité / droit de louer",
  "Exact purpose, legal basis, responsible party, secure route, and limitations.":
    "Finalité exacte, base légale, partie responsable, voie sécurisée et limites.",
  "Income / funding": "Revenus / financement",
  "What's required, why, acceptable alternatives, and who decides.":
    "Ce qui est requis, pourquoi, les alternatives acceptables et qui décide.",
  "Guarantor / sponsor": "Garant / répondant",
  "Criteria, documents, liability period, and alternatives with privacy role separation.":
    "Critères, documents, durée de responsabilité et alternatives, avec séparation des rôles en matière de confidentialité.",
  References: "Références",
  "Purpose, contact permission, minimum data, recipient, retention, and correction.":
    "Finalité, autorisation de contact, données minimales, destinataire, conservation et rectification.",
  "Accessibility / accommodation": "Accessibilité / aménagements",
  "Separated from eligibility unless legally necessary; sensitive detail minimized.":
    "Séparée de l'éligibilité sauf nécessité légale ; les détails sensibles sont réduits au minimum.",
  "No sensitive document goes through public forms, email links without approved security, URL parameters, or analytics.":
    "Aucun document sensible ne transite par des formulaires publics, des liens e-mail sans sécurité approuvée, des paramètres d'URL ou des outils d'analyse.",

  "Term and Availability Planner": "Planificateur de semestre et de disponibilité",
  "Availability freshness tightens around term starts": "L'exigence de fraîcheur de la disponibilité se resserre autour des rentrées",
  "Available for stated term/dates": "Disponible pour le semestre/les dates indiqués",
  "Recently confirmed for the displayed move-in/move-out or term range":
    "Récemment confirmé pour la période d'entrée/sortie ou de semestre affichée",
  "Available from date": "Disponible à partir du",
  "Confirmed from a specific date, which may not align exactly with term start":
    "Confirmé à partir d'une date précise, qui peut ne pas correspondre exactement au début du semestre",
  "No confirmation within the freshness threshold or exact term dates":
    "Aucune confirmation dans le délai de fraîcheur ou pour les dates exactes du semestre",
  "Flexible arrival considered": "Arrivée flexible envisagée",
  "Provider may consider a date range but hasn't accepted a specific seeker":
    "Le bailleur peut envisager une période mais n'a pas encore accepté de candidat précis",
  "Term mismatch": "Semestre non correspondant",
  "Room dates don't match the selected academic period — nearby dates suggested":
    "Les dates de la chambre ne correspondent pas à la période académique choisie — des dates proches sont suggérées",
  "Availability or material facts conflict with evidence — application/payment suspended":
    "La disponibilité ou des faits substantiels contredisent les preuves — candidature/paiement suspendus",

  "Cost and Guarantor Guidance": "Guide des coûts et du garant",
  "Total cost and guarantor terms before commitment": "Coût total et conditions de garantie avant engagement",
  "$1,050 per month": "1 050 $ par mois",
  "Security deposit": "Dépôt de garantie",
  "$1,050 due after agreement signing": "1 050 $ dus après la signature du contrat",
  "Required provider fee": "Frais obligatoires du bailleur",
  "$0": "0 $",
  "Internet included; electricity estimated at $45–$70/month; water included":
    "Internet inclus ; électricité estimée à 45–70 $/mois ; eau incluse",
  "Known amount due before move-in": "Montant connu dû avant l'entrée",
  "$2,100 plus any disclosed variable utility amount": "2 100 $ plus tout montant variable de charges divulgué",
  Guarantor: "Garant",
  "Local guarantor requested; alternative arrangement may be considered by the provider":
    "Garant local demandé ; le bailleur peut envisager un arrangement alternatif",
  "Example limitation": "Limite de l'exemple",
  "This learning block demonstrates cost composition only. It is not a university, city, or market average and must not be reused as pricing evidence.":
    "Ce bloc pédagogique illustre uniquement la composition des coûts. Il ne s'agit pas d'une moyenne universitaire, urbaine ou de marché et ne doit pas être réutilisé comme preuve de tarification.",

  "Current Room Inventory": "Offre actuelle de chambres",
  "Compare status, commute, cost, and authority — not one universal badge":
    "Comparez statut, trajet, coût et autorité — pas un badge universel unique",
  "Room near Northbridge, 12 min walk to campus": "Chambre près de Northbridge, 12 min à pied du campus",
  "Available for stated term": "Disponible pour le semestre indiqué",
  "Shared house near Metro State, transit line": "Colocation près de Metro State, sur une ligne de transport",
  "Furnished room near Harbor Medical": "Chambre meublée près de Harbor Medical",

  "University Rooms FAQ": "FAQ chambres étudiantes",
  "How do I find a room near my university?": "Comment trouver une chambre près de mon université ?",
  "Choose the university or campus, move-in or term dates, and monthly budget, then refine by stay length, commute, furnishing, bills, guarantor needs, accessibility, or international arrival.":
    "Choisissez l'université ou le campus, les dates d'entrée ou de semestre et le budget mensuel, puis affinez selon la durée du séjour, le trajet, l'ameublement, les charges, le besoin de garant, l'accessibilité ou l'arrivée internationale.",
  "Are these official university rooms?": "S'agit-il de chambres universitaires officielles ?",
  "Not necessarily. Every listing shows its relationship status — independent, university-referred, institution-distributed, institution-managed, or external official housing — so you know exactly what the university's role is, if any.":
    "Pas nécessairement. Chaque annonce indique son statut relationnel — indépendante, recommandée par l'université, distribuée ou gérée par l'établissement, ou logement officiel externe — afin que vous sachiez exactement le rôle de l'université, le cas échéant.",
  "Does the university approve every listing?": "L'université approuve-t-elle chaque annonce ?",
  "No. Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current for that specific listing.":
    "Non. Zoiko Rooms n'implique jamais la propriété, l'approbation, la caution, la sécurité ou la garantie de l'université, sauf si la relation et son périmètre exact sont documentés et à jour pour cette annonce précise.",
  "What costs should I check?": "Quels coûts dois-je vérifier ?",
  "Monthly rent, security deposit, required provider fees, bills, and the known amount due before move-in — plus whether a guarantor is requested and what alternatives the provider allows.":
    "Le loyer mensuel, le dépôt de garantie, les frais obligatoires du bailleur, les charges et le montant connu dû avant l'entrée — ainsi que si un garant est demandé et quelles alternatives le bailleur autorise.",
  "What can I do if I don't have a local guarantor?": "Que faire si je n'ai pas de garant local ?",
  "Some providers accept alternative arrangements. Check the listing's guarantor terms first, and use the Cost and Guarantor Guidance section to understand what's typically required and why.":
    "Certains bailleurs acceptent des arrangements alternatifs. Vérifiez d'abord les conditions de garantie de l'annonce, et consultez la section Guide des coûts et du garant pour comprendre ce qui est généralement requis et pourquoi.",
  "Can international students search before arrival?": "Les étudiants internationaux peuvent-ils rechercher avant leur arrivée ?",
  "Yes. Use International Arrival Support and International Moves to plan timing, documents, currency, and payments before you travel — availability still requires confirmation closer to your dates.":
    "Oui. Utilisez l'assistance à l'arrivée internationale et les déménagements internationaux pour planifier calendrier, documents, devise et paiements avant votre départ — la disponibilité doit toujours être confirmée à l'approche de vos dates.",
  "How does Zoiko Rooms verify student rooms?": "Comment Zoiko Rooms vérifie-t-il les chambres étudiantes ?",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship are checked and shown as separate statuses rather than one universal badge.":
    "L'identité du bailleur, l'autorité sur l'annonce, les preuves relatives à la chambre, la disponibilité, le prix, le paiement et la relation avec l'établissement sont vérifiés et présentés comme des statuts distincts plutôt qu'un badge universel unique.",
  "Can Zoiko Rooms guarantee a safe room?": "Zoiko Rooms peut-il garantir une chambre sûre ?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "Non. La vérification réduit l'incertitude mais ne garantit ni la sécurité, ni la légalité, ni l'adéquation, ni l'état du bien, ni le comportement futur. Utilisez les fonctions de signalement, de blocage et d'assistance si quelque chose vous semble anormal.",

  "Featured Institutions": "Établissements en vedette",
  "Only supported institutions with useful current supply": "Uniquement des établissements pris en charge avec une offre actuelle utile",
  "18 current rooms": "18 chambres actuelles",
  "University-referred search pathway": "Parcours de recherche recommandé par l'université",
  "12 current rooms": "12 chambres actuelles",
  "Institution-distributed inventory": "Offre distribuée par l'établissement",
  "Availability limited": "Disponibilité limitée",
  "Explore University": "Explorer l'université",

  "Ready to search near campus?": "Prêt à chercher près du campus ?",
  "Continue your search, save an alert, or list a room if you're a provider.":
    "Poursuivez votre recherche, enregistrez une alerte, ou publiez une chambre si vous êtes bailleur.",

  "International Arrival Support": "Assistance à l'arrivée internationale",
  "Uncertain dates, documents, or currency? Start here": "Dates, documents ou devise incertains ? Commencez ici",
  "Cross-border basics": "Les bases pour un déménagement transfrontalier",
  "Original listing currency stays visible, remote evidence has limits, and Zoiko Rooms does not guarantee housing, visa outcomes, or right-to-rent eligibility. Local guarantor alternatives may exist, but acceptance is never guaranteed.":
    "La devise d'origine de l'annonce reste visible, les preuves à distance ont des limites, et Zoiko Rooms ne garantit ni le logement, ni l'issue du visa, ni l'éligibilité au droit de louer. Des alternatives de garant local peuvent exister, mais l'acceptation n'est jamais garantie.",
  "Explore International Moves": "Explorer les déménagements internationaux",
  "Search with Flexible Arrival": "Rechercher avec une arrivée flexible",
  "Review Payment Safety": "Consulter la sécurité des paiements",

  "Quick-Need Pathways": "Parcours selon votre besoin",
  "Four ways to move forward": "Quatre façons d'avancer",
  "Search by University": "Rechercher par université",
  "Choose a supported institution or campus and apply term-aware search.":
    "Choisissez un établissement ou un campus pris en charge et utilisez la recherche adaptée au semestre.",
  "Explore Current Rooms": "Explorer les chambres actuelles",
  "Review availability, price, provider authority, and room facts.":
    "Consultez la disponibilité, le prix, l'autorité du bailleur et les caractéristiques de la chambre.",
  "Plan International Arrival": "Planifier une arrivée internationale",
  "Understand timing, documents, currency, payments, and uncertainty.":
    "Comprenez le calendrier, les documents, la devise, les paiements et les incertitudes.",
  "Get Student Safety Help": "Obtenir de l'aide sur la sécurité étudiante",
  "Review scam signs, viewings, payments, reporting, and support.":
    "Consultez les signaux d'arnaque, les visites, les paiements, le signalement et l'assistance.",

  "Relationship Assurance": "Garantie de relation",
  "Know whether a listing is independent, referred, distributed, or institution-managed":
    "Sachez si une annonce est indépendante, recommandée, distribuée ou gérée par l'établissement",
  "Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current.":
    "Zoiko Rooms n'implique jamais la propriété, l'approbation, la caution, la sécurité ou la garantie de l'université, sauf si la relation et son périmètre exact sont documentés et à jour.",
  "University-referred pathway": "Parcours recommandé par l'université",
  "Institution-managed inventory": "Offre gérée par l'établissement",
  "External official housing": "Logement officiel externe",
  "Relationship under review": "Relation en cours de vérification",
  "Logo and Endorsement Rule": "Règle relative au logo et à la caution",
  'We never display an institution logo or phrases like "partnered with" or "official" unless the exact relationship, authorization, placement, period, scope, and limitations are approved.':
    "Nous n'affichons jamais le logo d'un établissement ni des mentions comme « en partenariat avec » ou « officiel », sauf si la relation exacte, l'autorisation, le placement, la période, le périmètre et les limites sont approuvés.",

  "University and Seeker Support": "Assistance université et locataires",
  "Who's responsible for what": "Qui est responsable de quoi",
  "Search, account, save, compare, report": "Recherche, compte, enregistrement, comparaison, signalement",
  "Zoiko Rooms Help Center": "Centre d'aide Zoiko Rooms",
  "Platform function only": "Fonction de plateforme uniquement",
  "Listing facts and availability": "Caractéristiques de l'annonce et disponibilité",
  Provider: "Bailleur",
  "Zoiko Rooms does not guarantee provider-supplied facts": "Zoiko Rooms ne garantit pas les informations fournies par le bailleur",
  "Application decision": "Décision de candidature",
  "Provider / agent / institution-managed owner": "Bailleur / agent / propriétaire géré par l'établissement",
  "Zoiko Rooms role limited unless separately authorized": "Rôle de Zoiko Rooms limité, sauf autorisation distincte",
  "University referral / program": "Recommandation / programme universitaire",
  "Named university support route where authorized": "Voie d'assistance universitaire nommée, si autorisée",
  "No implied support for independent listings": "Aucun soutien implicite pour les annonces indépendantes",
  "Safety or scam concern": "Préoccupation de sécurité ou d'arnaque",
  "Report, block, Trust & Safety, emergency services where needed":
    "Signalement, blocage, Confiance et sécurité, services d'urgence si nécessaire",
  "Zoiko Rooms is not an emergency service": "Zoiko Rooms n'est pas un service d'urgence",
  Issue: "Sujet",
  "Primary Owner": "Responsable principal",
  Boundary: "Limite",

  "Verification and Safety": "Vérification et sécurité",
  "Separate checks, not one universal badge": "Des vérifications distinctes, pas un badge universel unique",
  "A university support staff member available to help students on campus":
    "Un membre du personnel de soutien universitaire disponible pour aider les étudiants sur le campus",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship remain separate statuses.":
    "L'identité du bailleur, l'autorité sur l'annonce, les preuves relatives à la chambre, la disponibilité, le prix, le paiement et la relation avec l'établissement restent des statuts distincts.",
  "A provider claiming university affiliation still needs the relationship status shown — report any false affiliation claim.":
    "Un bailleur revendiquant une affiliation universitaire doit tout de même afficher le statut de relation — signalez toute fausse revendication d'affiliation.",
  "Never pay a deposit merely to arrange or access a viewing.": "Ne versez jamais de dépôt uniquement pour organiser ou accéder à une visite.",
  "Gift cards, cryptocurrency, and unrelated payees are warning signs — don't pay, report instead.":
    "Les cartes-cadeaux, la cryptomonnaie et les bénéficiaires sans lien sont des signaux d'alerte — ne payez pas, signalez plutôt.",
};

const ES_UNIVERSITY_ROOMS: Record<string, string> = {
  "Find a room around your university, campus, term, or placement.":
    "Encuentra una habitación cerca de tu universidad, campus, cuatrimestre o prácticas.",
  "Search current room listings using institution, campus, move-in or term dates, monthly budget, stay length, commute, furnishing, bills, guarantor needs, and accessibility features.":
    "Busca anuncios actuales según institución, campus, fechas de entrada o del cuatrimestre, presupuesto mensual, duración de la estancia, desplazamiento, amueblado, servicios, necesidad de aval y características de accesibilidad.",
  "University or Campus": "Universidad o campus",
  "e.g. Northbridge University": "p. ej. Northbridge University",
  "Move-in / Term": "Entrada / cuatrimestre",
  "Date or term": "Fecha o cuatrimestre",
  "Monthly Budget": "Presupuesto mensual",
  Optional: "Opcional",
  "Two students chatting in a furnished room near campus": "Dos estudiantes conversando en una habitación amueblada cerca del campus",
  "International arrival": "Llegada internacional",
  "Visiting researcher": "Investigador/a visitante",
  "Placement / Internship": "Prácticas / colocación",

  "Application and Document Readiness": "Preparación de la solicitud y documentos",
  "Criteria and documents, explained before you submit": "Criterios y documentos explicados antes de enviar tu solicitud",
  "Student status": "Condición de estudiante",
  "Whether required, why, acceptable evidence, who receives it, and alternatives where applicable.":
    "Si es obligatorio, por qué, qué evidencia se acepta, quién la recibe y alternativas cuando corresponda.",
  "Identity / right-to-rent": "Identidad / derecho a alquilar",
  "Exact purpose, legal basis, responsible party, secure route, and limitations.":
    "Propósito exacto, base legal, parte responsable, vía segura y limitaciones.",
  "Income / funding": "Ingresos / financiación",
  "What's required, why, acceptable alternatives, and who decides.":
    "Qué se requiere, por qué, alternativas aceptables y quién decide.",
  "Guarantor / sponsor": "Aval / patrocinador",
  "Criteria, documents, liability period, and alternatives with privacy role separation.":
    "Criterios, documentos, período de responsabilidad y alternativas, con separación de roles de privacidad.",
  References: "Referencias",
  "Purpose, contact permission, minimum data, recipient, retention, and correction.":
    "Propósito, permiso de contacto, datos mínimos, destinatario, conservación y corrección.",
  "Accessibility / accommodation": "Accesibilidad / adaptaciones",
  "Separated from eligibility unless legally necessary; sensitive detail minimized.":
    "Separada de la elegibilidad salvo necesidad legal; los detalles sensibles se reducen al mínimo.",
  "No sensitive document goes through public forms, email links without approved security, URL parameters, or analytics.":
    "Ningún documento sensible se transmite mediante formularios públicos, enlaces de correo sin seguridad aprobada, parámetros de URL o herramientas de análisis.",

  "Term and Availability Planner": "Planificador de cuatrimestre y disponibilidad",
  "Availability freshness tightens around term starts": "La exigencia de actualidad de la disponibilidad aumenta cerca del inicio del cuatrimestre",
  "Available for stated term/dates": "Disponible para el cuatrimestre/fechas indicados",
  "Recently confirmed for the displayed move-in/move-out or term range":
    "Confirmado recientemente para el período de entrada/salida o cuatrimestre mostrado",
  "Available from date": "Disponible a partir de",
  "Confirmed from a specific date, which may not align exactly with term start":
    "Confirmado a partir de una fecha concreta, que puede no coincidir exactamente con el inicio del cuatrimestre",
  "No confirmation within the freshness threshold or exact term dates":
    "Sin confirmación dentro del límite de vigencia o para las fechas exactas del cuatrimestre",
  "Flexible arrival considered": "Llegada flexible considerada",
  "Provider may consider a date range but hasn't accepted a specific seeker":
    "El anfitrión puede considerar un rango de fechas, pero aún no ha aceptado a un solicitante concreto",
  "Term mismatch": "Cuatrimestre no coincidente",
  "Room dates don't match the selected academic period — nearby dates suggested":
    "Las fechas de la habitación no coinciden con el período académico seleccionado; se sugieren fechas cercanas",
  "Availability or material facts conflict with evidence — application/payment suspended":
    "La disponibilidad o hechos relevantes contradicen la evidencia; solicitud/pago suspendidos",

  "Cost and Guarantor Guidance": "Guía de costos y aval",
  "Total cost and guarantor terms before commitment": "Costo total y condiciones de aval antes de comprometerte",
  "$1,050 per month": "1050 $ al mes",
  "Security deposit": "Depósito de garantía",
  "$1,050 due after agreement signing": "1050 $ debidos tras la firma del contrato",
  "Required provider fee": "Tarifa obligatoria del anfitrión",
  "$0": "0 $",
  "Internet included; electricity estimated at $45–$70/month; water included":
    "Internet incluido; electricidad estimada entre 45 y 70 $/mes; agua incluida",
  "Known amount due before move-in": "Monto conocido debido antes de la entrada",
  "$2,100 plus any disclosed variable utility amount": "2100 $ más cualquier monto variable de servicios revelado",
  Guarantor: "Aval",
  "Local guarantor requested; alternative arrangement may be considered by the provider":
    "Se solicita aval local; el anfitrión puede considerar un arreglo alternativo",
  "Example limitation": "Limitación del ejemplo",
  "This learning block demonstrates cost composition only. It is not a university, city, or market average and must not be reused as pricing evidence.":
    "Este bloque de ejemplo solo ilustra la composición de costos. No es un promedio universitario, urbano o de mercado y no debe reutilizarse como evidencia de precios.",

  "Current Room Inventory": "Oferta actual de habitaciones",
  "Compare status, commute, cost, and authority — not one universal badge":
    "Compara estado, desplazamiento, costo y autoridad, no una insignia universal única",
  "Room near Northbridge, 12 min walk to campus": "Habitación cerca de Northbridge, 12 min a pie del campus",
  "Available for stated term": "Disponible para el cuatrimestre indicado",
  "Shared house near Metro State, transit line": "Casa compartida cerca de Metro State, en línea de transporte",
  "Furnished room near Harbor Medical": "Habitación amueblada cerca de Harbor Medical",

  "University Rooms FAQ": "Preguntas frecuentes sobre habitaciones universitarias",
  "How do I find a room near my university?": "¿Cómo encuentro una habitación cerca de mi universidad?",
  "Choose the university or campus, move-in or term dates, and monthly budget, then refine by stay length, commute, furnishing, bills, guarantor needs, accessibility, or international arrival.":
    "Elige la universidad o campus, las fechas de entrada o del cuatrimestre y el presupuesto mensual, y luego filtra por duración de la estancia, desplazamiento, amueblado, servicios, necesidad de aval, accesibilidad o llegada internacional.",
  "Are these official university rooms?": "¿Son estas habitaciones universitarias oficiales?",
  "Not necessarily. Every listing shows its relationship status — independent, university-referred, institution-distributed, institution-managed, or external official housing — so you know exactly what the university's role is, if any.":
    "No necesariamente. Cada anuncio muestra su estado de relación: independiente, referido por la universidad, distribuido o gestionado por la institución, o vivienda oficial externa, para que sepas exactamente qué papel tiene la universidad, si lo tiene.",
  "Does the university approve every listing?": "¿La universidad aprueba cada anuncio?",
  "No. Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current for that specific listing.":
    "No. Zoiko Rooms nunca implica propiedad, aprobación, respaldo, seguridad o garantía por parte de la universidad, salvo que la relación y su alcance exacto estén documentados y vigentes para ese anuncio específico.",
  "What costs should I check?": "¿Qué costos debo revisar?",
  "Monthly rent, security deposit, required provider fees, bills, and the known amount due before move-in — plus whether a guarantor is requested and what alternatives the provider allows.":
    "Alquiler mensual, depósito de garantía, tarifas obligatorias del anfitrión, servicios y el monto conocido debido antes de la entrada, además de si se solicita un aval y qué alternativas permite el anfitrión.",
  "What can I do if I don't have a local guarantor?": "¿Qué puedo hacer si no tengo un aval local?",
  "Some providers accept alternative arrangements. Check the listing's guarantor terms first, and use the Cost and Guarantor Guidance section to understand what's typically required and why.":
    "Algunos anfitriones aceptan arreglos alternativos. Revisa primero las condiciones de aval del anuncio y consulta la sección Guía de costos y aval para entender qué se suele requerir y por qué.",
  "Can international students search before arrival?": "¿Pueden los estudiantes internacionales buscar antes de llegar?",
  "Yes. Use International Arrival Support and International Moves to plan timing, documents, currency, and payments before you travel — availability still requires confirmation closer to your dates.":
    "Sí. Usa el apoyo para la llegada internacional y traslados internacionales para planificar el calendario, los documentos, la moneda y los pagos antes de viajar; la disponibilidad aún debe confirmarse cerca de tus fechas.",
  "How does Zoiko Rooms verify student rooms?": "¿Cómo verifica Zoiko Rooms las habitaciones para estudiantes?",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship are checked and shown as separate statuses rather than one universal badge.":
    "La identidad del anfitrión, la autoridad sobre el anuncio, la evidencia de la habitación, la disponibilidad, el precio, el pago y la relación con la institución se verifican y se muestran como estados independientes, en lugar de una insignia universal única.",
  "Can Zoiko Rooms guarantee a safe room?": "¿Puede Zoiko Rooms garantizar una habitación segura?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "No. La verificación reduce la incertidumbre, pero no garantiza seguridad, legalidad, idoneidad, estado del inmueble ni comportamiento futuro. Usa las funciones de reporte, bloqueo y asistencia si algo no parece correcto.",

  "Featured Institutions": "Instituciones destacadas",
  "Only supported institutions with useful current supply": "Solo instituciones compatibles con una oferta actual útil",
  "18 current rooms": "18 habitaciones actuales",
  "University-referred search pathway": "Vía de búsqueda referida por la universidad",
  "12 current rooms": "12 habitaciones actuales",
  "Institution-distributed inventory": "Oferta distribuida por la institución",
  "Availability limited": "Disponibilidad limitada",
  "Explore University": "Explorar universidad",

  "Ready to search near campus?": "¿Listo para buscar cerca del campus?",
  "Continue your search, save an alert, or list a room if you're a provider.":
    "Continúa tu búsqueda, guarda una alerta o publica una habitación si eres anfitrión.",

  "International Arrival Support": "Apoyo para la llegada internacional",
  "Uncertain dates, documents, or currency? Start here": "¿Fechas, documentos o moneda inciertos? Empieza aquí",
  "Cross-border basics": "Fundamentos para un traslado transfronterizo",
  "Original listing currency stays visible, remote evidence has limits, and Zoiko Rooms does not guarantee housing, visa outcomes, or right-to-rent eligibility. Local guarantor alternatives may exist, but acceptance is never guaranteed.":
    "La moneda original del anuncio permanece visible, la evidencia remota tiene límites, y Zoiko Rooms no garantiza vivienda, resultados de visado ni elegibilidad para el derecho a alquilar. Pueden existir alternativas de aval local, pero la aceptación nunca está garantizada.",
  "Explore International Moves": "Explorar traslados internacionales",
  "Search with Flexible Arrival": "Buscar con llegada flexible",
  "Review Payment Safety": "Consultar la seguridad de los pagos",

  "Quick-Need Pathways": "Opciones según tu necesidad",
  "Four ways to move forward": "Cuatro formas de avanzar",
  "Search by University": "Buscar por universidad",
  "Choose a supported institution or campus and apply term-aware search.":
    "Elige una institución o campus compatible y aplica la búsqueda ajustada al cuatrimestre.",
  "Explore Current Rooms": "Explorar habitaciones actuales",
  "Review availability, price, provider authority, and room facts.":
    "Revisa disponibilidad, precio, autoridad del anfitrión y datos de la habitación.",
  "Plan International Arrival": "Planificar la llegada internacional",
  "Understand timing, documents, currency, payments, and uncertainty.":
    "Comprende el calendario, los documentos, la moneda, los pagos y la incertidumbre.",
  "Get Student Safety Help": "Obtener ayuda de seguridad para estudiantes",
  "Review scam signs, viewings, payments, reporting, and support.":
    "Revisa señales de fraude, visitas, pagos, reportes y asistencia.",

  "Relationship Assurance": "Garantía de la relación",
  "Know whether a listing is independent, referred, distributed, or institution-managed":
    "Sabe si un anuncio es independiente, referido, distribuido o gestionado por la institución",
  "Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current.":
    "Zoiko Rooms nunca implica propiedad, respaldo, aprobación, seguridad o garantía por parte de la universidad, salvo que la relación y su alcance exacto estén documentados y vigentes.",
  "University-referred pathway": "Vía referida por la universidad",
  "Institution-managed inventory": "Oferta gestionada por la institución",
  "External official housing": "Vivienda oficial externa",
  "Relationship under review": "Relación en revisión",
  "Logo and Endorsement Rule": "Regla sobre logotipo y respaldo",
  'We never display an institution logo or phrases like "partnered with" or "official" unless the exact relationship, authorization, placement, period, scope, and limitations are approved.':
    "Nunca mostramos el logotipo de una institución ni frases como «en colaboración con» u «oficial», salvo que la relación exacta, la autorización, la ubicación, el período, el alcance y las limitaciones estén aprobados.",

  "University and Seeker Support": "Asistencia para universidad y solicitantes",
  "Who's responsible for what": "Quién es responsable de qué",
  "Search, account, save, compare, report": "Búsqueda, cuenta, guardado, comparación, reporte",
  "Zoiko Rooms Help Center": "Centro de ayuda de Zoiko Rooms",
  "Platform function only": "Solo función de la plataforma",
  "Listing facts and availability": "Datos del anuncio y disponibilidad",
  Provider: "Anfitrión",
  "Zoiko Rooms does not guarantee provider-supplied facts": "Zoiko Rooms no garantiza los datos proporcionados por el anfitrión",
  "Application decision": "Decisión de la solicitud",
  "Provider / agent / institution-managed owner": "Anfitrión / agente / propietario gestionado por la institución",
  "Zoiko Rooms role limited unless separately authorized": "Función de Zoiko Rooms limitada, salvo autorización independiente",
  "University referral / program": "Referencia / programa universitario",
  "Named university support route where authorized": "Vía de apoyo universitario designada, si está autorizada",
  "No implied support for independent listings": "Sin apoyo implícito para anuncios independientes",
  "Safety or scam concern": "Preocupación de seguridad o fraude",
  "Report, block, Trust & Safety, emergency services where needed":
    "Reporte, bloqueo, Confianza y Seguridad, servicios de emergencia cuando sea necesario",
  "Zoiko Rooms is not an emergency service": "Zoiko Rooms no es un servicio de emergencia",
  Issue: "Asunto",
  "Primary Owner": "Responsable principal",
  Boundary: "Límite",

  "Verification and Safety": "Verificación y seguridad",
  "Separate checks, not one universal badge": "Verificaciones independientes, no una insignia universal única",
  "A university support staff member available to help students on campus":
    "Un miembro del personal de apoyo universitario disponible para ayudar a los estudiantes en el campus",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship remain separate statuses.":
    "La identidad del anfitrión, la autoridad sobre el anuncio, la evidencia de la habitación, la disponibilidad, el precio, el pago y la relación con la institución siguen siendo estados independientes.",
  "A provider claiming university affiliation still needs the relationship status shown — report any false affiliation claim.":
    "Un anfitrión que afirme tener afiliación universitaria igualmente debe mostrar el estado de la relación; reporta cualquier afirmación de afiliación falsa.",
  "Never pay a deposit merely to arrange or access a viewing.": "Nunca pagues un depósito solo para concertar o acceder a una visita.",
  "Gift cards, cryptocurrency, and unrelated payees are warning signs — don't pay, report instead.":
    "Las tarjetas de regalo, la criptomoneda y los beneficiarios sin relación son señales de alerta; no pagues, repórtalo en su lugar.",
};

const PT_UNIVERSITY_ROOMS: Record<string, string> = {
  "Find a room around your university, campus, term, or placement.":
    "Encontre um quarto perto da sua universidade, campus, semestre ou estágio.",
  "Search current room listings using institution, campus, move-in or term dates, monthly budget, stay length, commute, furnishing, bills, guarantor needs, and accessibility features.":
    "Pesquise anúncios atuais por instituição, campus, datas de entrada ou do semestre, orçamento mensal, duração da estadia, deslocação, mobília, despesas, necessidade de fiador e características de acessibilidade.",
  "University or Campus": "Universidade ou campus",
  "e.g. Northbridge University": "por ex. Northbridge University",
  "Move-in / Term": "Entrada / semestre",
  "Date or term": "Data ou semestre",
  "Monthly Budget": "Orçamento mensal",
  Optional: "Opcional",
  "Two students chatting in a furnished room near campus": "Dois estudantes a conversar num quarto mobilado perto do campus",
  "International arrival": "Chegada internacional",
  "Visiting researcher": "Investigador/a visitante",
  "Placement / Internship": "Estágio / colocação",

  "Application and Document Readiness": "Preparação da candidatura e dos documentos",
  "Criteria and documents, explained before you submit": "Critérios e documentos explicados antes de submeter",
  "Student status": "Estatuto de estudante",
  "Whether required, why, acceptable evidence, who receives it, and alternatives where applicable.":
    "Se é obrigatório, porquê, evidências aceitáveis, quem as recebe, e alternativas quando aplicável.",
  "Identity / right-to-rent": "Identidade / direito a arrendar",
  "Exact purpose, legal basis, responsible party, secure route, and limitations.":
    "Finalidade exata, base legal, parte responsável, via segura e limitações.",
  "Income / funding": "Rendimento / financiamento",
  "What's required, why, acceptable alternatives, and who decides.":
    "O que é exigido, porquê, alternativas aceitáveis e quem decide.",
  "Guarantor / sponsor": "Fiador / patrocinador",
  "Criteria, documents, liability period, and alternatives with privacy role separation.":
    "Critérios, documentos, período de responsabilidade e alternativas, com separação de funções de privacidade.",
  References: "Referências",
  "Purpose, contact permission, minimum data, recipient, retention, and correction.":
    "Finalidade, autorização de contacto, dados mínimos, destinatário, conservação e correção.",
  "Accessibility / accommodation": "Acessibilidade / adaptações",
  "Separated from eligibility unless legally necessary; sensitive detail minimized.":
    "Separada da elegibilidade, salvo necessidade legal; os detalhes sensíveis são minimizados.",
  "No sensitive document goes through public forms, email links without approved security, URL parameters, or analytics.":
    "Nenhum documento sensível é transmitido através de formulários públicos, ligações de e-mail sem segurança aprovada, parâmetros de URL ou ferramentas de análise.",

  "Term and Availability Planner": "Planeador de semestre e disponibilidade",
  "Availability freshness tightens around term starts": "A exigência de atualidade da disponibilidade aumenta perto do início do semestre",
  "Available for stated term/dates": "Disponível para o semestre/datas indicados",
  "Recently confirmed for the displayed move-in/move-out or term range":
    "Confirmado recentemente para o período de entrada/saída ou semestre apresentado",
  "Available from date": "Disponível a partir de",
  "Confirmed from a specific date, which may not align exactly with term start":
    "Confirmado a partir de uma data específica, que pode não coincidir exatamente com o início do semestre",
  "No confirmation within the freshness threshold or exact term dates":
    "Sem confirmação dentro do limite de atualidade ou para as datas exatas do semestre",
  "Flexible arrival considered": "Chegada flexível considerada",
  "Provider may consider a date range but hasn't accepted a specific seeker":
    "O anfitrião pode considerar um intervalo de datas, mas ainda não aceitou um candidato específico",
  "Term mismatch": "Semestre não corresponde",
  "Room dates don't match the selected academic period — nearby dates suggested":
    "As datas do quarto não correspondem ao período académico selecionado — são sugeridas datas próximas",
  "Availability or material facts conflict with evidence — application/payment suspended":
    "A disponibilidade ou factos relevantes contradizem as evidências — candidatura/pagamento suspensos",

  "Cost and Guarantor Guidance": "Guia de custos e fiador",
  "Total cost and guarantor terms before commitment": "Custo total e condições de fiador antes do compromisso",
  "$1,050 per month": "1050 $ por mês",
  "Security deposit": "Depósito de segurança",
  "$1,050 due after agreement signing": "1050 $ devidos após a assinatura do contrato",
  "Required provider fee": "Taxa obrigatória do anfitrião",
  "$0": "0 $",
  "Internet included; electricity estimated at $45–$70/month; water included":
    "Internet incluída; eletricidade estimada entre 45 e 70 $/mês; água incluída",
  "Known amount due before move-in": "Valor conhecido devido antes da entrada",
  "$2,100 plus any disclosed variable utility amount": "2100 $ mais qualquer valor variável de despesas divulgado",
  Guarantor: "Fiador",
  "Local guarantor requested; alternative arrangement may be considered by the provider":
    "É solicitado fiador local; o anfitrião pode considerar um acordo alternativo",
  "Example limitation": "Limitação do exemplo",
  "This learning block demonstrates cost composition only. It is not a university, city, or market average and must not be reused as pricing evidence.":
    "Este bloco de exemplo demonstra apenas a composição dos custos. Não é uma média universitária, da cidade ou do mercado e não deve ser reutilizado como prova de preços.",

  "Current Room Inventory": "Oferta atual de quartos",
  "Compare status, commute, cost, and authority — not one universal badge":
    "Compare estado, deslocação, custo e autoridade — não uma insígnia universal única",
  "Room near Northbridge, 12 min walk to campus": "Quarto perto de Northbridge, a 12 min a pé do campus",
  "Available for stated term": "Disponível para o semestre indicado",
  "Shared house near Metro State, transit line": "Casa partilhada perto de Metro State, junto a linha de transporte",
  "Furnished room near Harbor Medical": "Quarto mobilado perto de Harbor Medical",

  "University Rooms FAQ": "FAQ sobre quartos universitários",
  "How do I find a room near my university?": "Como encontro um quarto perto da minha universidade?",
  "Choose the university or campus, move-in or term dates, and monthly budget, then refine by stay length, commute, furnishing, bills, guarantor needs, accessibility, or international arrival.":
    "Escolha a universidade ou campus, as datas de entrada ou do semestre e o orçamento mensal, depois refine por duração da estadia, deslocação, mobília, despesas, necessidade de fiador, acessibilidade ou chegada internacional.",
  "Are these official university rooms?": "São estes quartos universitários oficiais?",
  "Not necessarily. Every listing shows its relationship status — independent, university-referred, institution-distributed, institution-managed, or external official housing — so you know exactly what the university's role is, if any.":
    "Não necessariamente. Cada anúncio mostra o seu estado de relação — independente, indicado pela universidade, distribuído ou gerido pela instituição, ou alojamento oficial externo — para que saiba exatamente qual é o papel da universidade, se existir.",
  "Does the university approve every listing?": "A universidade aprova todos os anúncios?",
  "No. Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current for that specific listing.":
    "Não. A Zoiko Rooms nunca implica propriedade, aprovação, apoio, segurança ou garantia por parte da universidade, salvo se a relação e o âmbito exato estiverem documentados e atualizados para esse anúncio específico.",
  "What costs should I check?": "Que custos devo verificar?",
  "Monthly rent, security deposit, required provider fees, bills, and the known amount due before move-in — plus whether a guarantor is requested and what alternatives the provider allows.":
    "Renda mensal, depósito de segurança, taxas obrigatórias do anfitrião, despesas e o valor conhecido devido antes da entrada — além de saber se é solicitado fiador e que alternativas o anfitrião permite.",
  "What can I do if I don't have a local guarantor?": "O que posso fazer se não tiver um fiador local?",
  "Some providers accept alternative arrangements. Check the listing's guarantor terms first, and use the Cost and Guarantor Guidance section to understand what's typically required and why.":
    "Alguns anfitriões aceitam acordos alternativos. Verifique primeiro as condições de fiador do anúncio e consulte a secção Guia de custos e fiador para entender o que é normalmente exigido e porquê.",
  "Can international students search before arrival?": "Os estudantes internacionais podem pesquisar antes de chegar?",
  "Yes. Use International Arrival Support and International Moves to plan timing, documents, currency, and payments before you travel — availability still requires confirmation closer to your dates.":
    "Sim. Use o apoio à chegada internacional e mudanças internacionais para planear prazos, documentos, moeda e pagamentos antes de viajar — a disponibilidade ainda precisa de confirmação mais perto das suas datas.",
  "How does Zoiko Rooms verify student rooms?": "Como é que a Zoiko Rooms verifica os quartos para estudantes?",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship are checked and shown as separate statuses rather than one universal badge.":
    "A identidade do anfitrião, a autoridade sobre o anúncio, a evidência do quarto, a disponibilidade, o preço, o pagamento e a relação com a instituição são verificados e apresentados como estados separados, em vez de uma insígnia universal única.",
  "Can Zoiko Rooms guarantee a safe room?": "A Zoiko Rooms pode garantir um quarto seguro?",
  "No. Verification reduces uncertainty but does not guarantee safety, legality, suitability, property condition, or future conduct. Use the report, block, and support controls if something feels wrong.":
    "Não. A verificação reduz a incerteza, mas não garante segurança, legalidade, adequação, estado do imóvel ou comportamento futuro. Use as funções de denúncia, bloqueio e apoio se algo parecer errado.",

  "Featured Institutions": "Instituições em destaque",
  "Only supported institutions with useful current supply": "Apenas instituições suportadas com oferta atual útil",
  "18 current rooms": "18 quartos atuais",
  "University-referred search pathway": "Via de pesquisa indicada pela universidade",
  "12 current rooms": "12 quartos atuais",
  "Institution-distributed inventory": "Oferta distribuída pela instituição",
  "Availability limited": "Disponibilidade limitada",
  "Explore University": "Explorar universidade",

  "Ready to search near campus?": "Pronto para pesquisar perto do campus?",
  "Continue your search, save an alert, or list a room if you're a provider.":
    "Continue a sua pesquisa, guarde um alerta ou anuncie um quarto se for anfitrião.",

  "International Arrival Support": "Apoio à chegada internacional",
  "Uncertain dates, documents, or currency? Start here": "Datas, documentos ou moeda incertos? Comece aqui",
  "Cross-border basics": "Fundamentos para uma mudança transfronteiriça",
  "Original listing currency stays visible, remote evidence has limits, and Zoiko Rooms does not guarantee housing, visa outcomes, or right-to-rent eligibility. Local guarantor alternatives may exist, but acceptance is never guaranteed.":
    "A moeda original do anúncio permanece visível, a evidência remota tem limites, e a Zoiko Rooms não garante alojamento, resultados de visto ou elegibilidade para o direito a arrendar. Podem existir alternativas de fiador local, mas a aceitação nunca é garantida.",
  "Explore International Moves": "Explorar mudanças internacionais",
  "Search with Flexible Arrival": "Pesquisar com chegada flexível",
  "Review Payment Safety": "Consultar a segurança dos pagamentos",

  "Quick-Need Pathways": "Opções de acordo com a sua necessidade",
  "Four ways to move forward": "Quatro formas de avançar",
  "Search by University": "Pesquisar por universidade",
  "Choose a supported institution or campus and apply term-aware search.":
    "Escolha uma instituição ou campus suportado e aplique a pesquisa ajustada ao semestre.",
  "Explore Current Rooms": "Explorar quartos atuais",
  "Review availability, price, provider authority, and room facts.":
    "Reveja disponibilidade, preço, autoridade do anfitrião e dados do quarto.",
  "Plan International Arrival": "Planear a chegada internacional",
  "Understand timing, documents, currency, payments, and uncertainty.":
    "Compreenda os prazos, documentos, moeda, pagamentos e incertezas.",
  "Get Student Safety Help": "Obter ajuda de segurança para estudantes",
  "Review scam signs, viewings, payments, reporting, and support.":
    "Reveja sinais de fraude, visitas, pagamentos, denúncias e apoio.",

  "Relationship Assurance": "Garantia da relação",
  "Know whether a listing is independent, referred, distributed, or institution-managed":
    "Saiba se um anúncio é independente, indicado, distribuído ou gerido pela instituição",
  "Zoiko Rooms never implies university ownership, endorsement, approval, safety, or guarantee unless the relationship and exact scope are documented and current.":
    "A Zoiko Rooms nunca implica propriedade, apoio, aprovação, segurança ou garantia por parte da universidade, salvo se a relação e o âmbito exato estiverem documentados e atualizados.",
  "University-referred pathway": "Via indicada pela universidade",
  "Institution-managed inventory": "Oferta gerida pela instituição",
  "External official housing": "Alojamento oficial externo",
  "Relationship under review": "Relação em análise",
  "Logo and Endorsement Rule": "Regra sobre logótipo e apoio",
  'We never display an institution logo or phrases like "partnered with" or "official" unless the exact relationship, authorization, placement, period, scope, and limitations are approved.':
    "Nunca apresentamos o logótipo de uma instituição nem expressões como «em parceria com» ou «oficial», salvo se a relação exata, autorização, colocação, período, âmbito e limitações estiverem aprovados.",

  "University and Seeker Support": "Apoio à universidade e aos candidatos",
  "Who's responsible for what": "Quem é responsável por quê",
  "Search, account, save, compare, report": "Pesquisa, conta, guardar, comparar, denunciar",
  "Zoiko Rooms Help Center": "Central de ajuda da Zoiko Rooms",
  "Platform function only": "Apenas função da plataforma",
  "Listing facts and availability": "Dados do anúncio e disponibilidade",
  Provider: "Anfitrião",
  "Zoiko Rooms does not guarantee provider-supplied facts": "A Zoiko Rooms não garante os dados fornecidos pelo anfitrião",
  "Application decision": "Decisão da candidatura",
  "Provider / agent / institution-managed owner": "Anfitrião / agente / proprietário gerido pela instituição",
  "Zoiko Rooms role limited unless separately authorized": "Papel da Zoiko Rooms limitado, salvo autorização à parte",
  "University referral / program": "Indicação / programa universitário",
  "Named university support route where authorized": "Via de apoio universitário designada, se autorizada",
  "No implied support for independent listings": "Sem apoio implícito para anúncios independentes",
  "Safety or scam concern": "Preocupação de segurança ou fraude",
  "Report, block, Trust & Safety, emergency services where needed":
    "Denúncia, bloqueio, Confiança e Segurança, serviços de emergência quando necessário",
  "Zoiko Rooms is not an emergency service": "A Zoiko Rooms não é um serviço de emergência",
  Issue: "Assunto",
  "Primary Owner": "Responsável principal",
  Boundary: "Limite",

  "Verification and Safety": "Verificação e segurança",
  "Separate checks, not one universal badge": "Verificações separadas, não uma insígnia universal única",
  "A university support staff member available to help students on campus":
    "Um membro da equipa de apoio universitário disponível para ajudar os estudantes no campus",
  "Provider identity, listing authority, room evidence, availability, price, payment, and institution relationship remain separate statuses.":
    "A identidade do anfitrião, a autoridade sobre o anúncio, a evidência do quarto, a disponibilidade, o preço, o pagamento e a relação com a instituição continuam a ser estados separados.",
  "A provider claiming university affiliation still needs the relationship status shown — report any false affiliation claim.":
    "Um anfitrião que afirme ter afiliação universitária continua a precisar de mostrar o estado da relação — denuncie qualquer afirmação de afiliação falsa.",
  "Never pay a deposit merely to arrange or access a viewing.": "Nunca pague um depósito apenas para marcar ou aceder a uma visita.",
  "Gift cards, cryptocurrency, and unrelated payees are warning signs — don't pay, report instead.":
    "Cartões-presente, criptomoeda e beneficiários sem relação são sinais de alerta — não pague, denuncie em vez disso.",
};

export const findARoomSituationsDictionary: LanguageDictionaries = {
  DE: { ...DE_INTERNATIONAL_MOVES },
  FR: { ...FR_INTERNATIONAL_MOVES },
  ES: { ...ES_INTERNATIONAL_MOVES },
  PT: { ...PT_INTERNATIONAL_MOVES },
};
