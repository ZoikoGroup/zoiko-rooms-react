import type { LanguageDictionaries } from "../types";

// ===================== resources-overview =====================

const DE: Record<string, string> = {
  Resources: "Ressourcen",
  "Help Center": "Hilfe-Center",
  Guides: "Leitfäden",
  "City Guides": "Stadtführer",
  "Safety & Scam Prevention": "Sicherheit & Betrugsprävention",
  "Room Rental Glossary": "Glossar zur Zimmervermietung",

  "Resources explain and route — they never guarantee an outcome, official legal advice, or a scam-free platform.":
    "Ressourcen erklären und leiten weiter — sie garantieren nie ein Ergebnis, eine offizielle Rechtsberatung oder eine betrugsfreie Plattform.",
  "Sourced & scoped": "Belegt & abgegrenzt",
  "Every answer states its currentness, source, and what it doesn't cover.":
    "Jede Antwort nennt ihre Aktualität, Quelle und was sie nicht abdeckt.",
  "Never one answer for every location": "Nie eine Antwort für jeden Standort",
  "Location context is optional, and never required for universal guidance.":
    "Standortkontext ist optional und für allgemeingültige Hinweise nie erforderlich.",

  "Resource Destinations": "Ressourcenbereiche",
  "Five destinations, each with one clear job": "Fünf Bereiche, jeder mit einer klaren Aufgabe",
  "Every destination has a stated boundary — what it resolves, and what it explicitly does not decide or guarantee.":
    "Jeder Bereich hat eine klare Abgrenzung — was er löst und was er ausdrücklich nicht entscheidet oder garantiert.",

  "Resolve product, account, workflow, payment, and support questions.":
    "Klärt Fragen zu Produkt, Konto, Abläufen, Zahlungen und Support.",
  "For anyone with an active account issue or case.": "Für alle mit einem laufenden Kontoproblem oder Vorgang.",
  "Payment status": "Zahlungsstatus",
  "Account access": "Kontozugriff",
  "Report a concern": "Anliegen melden",
  "Self-service and support routing — not a replacement for private case status.":
    "Selbsthilfe und Support-Weiterleitung — kein Ersatz für den persönlichen Vorgangsstatus.",
  "Open Help Center": "Hilfe-Center öffnen",

  "Follow role- and journey-based, step-by-step education.":
    "Schritt-für-Schritt-Anleitungen nach Rolle und Vorhaben.",
  "For seekers, providers, organizations, and Pro operators.":
    "Für Suchende, Anbieter, Organisationen und Pro-Betreiber.",
  "Review an agreement": "Vertrag prüfen",
  "Confirm a payment": "Zahlung bestätigen",
  "Set up a Room Passport": "Room Passport einrichten",
  "Stable, general journeys — not city-specific or case-specific decisions.":
    "Stabile, allgemeine Abläufe — keine stadt- oder fallspezifischen Entscheidungen.",
  "Browse Guides": "Leitfäden durchsuchen",

  "Provide sourced local context for planning a room search and move.":
    "Liefert belegten lokalen Kontext für Zimmersuche und Umzugsplanung.",
  "For local, relocating, and international seekers.": "Für lokale, umziehende und internationale Suchende.",
  "Berlin rental basics": "Grundlagen zur Wohnungsmiete in Berlin",
  "Local costs": "Lokale Kosten",
  "Transit context": "Verkehrsanbindung",
  "No blanket legal, safety, cost, availability, or neighborhood guarantee.":
    "Keine pauschale Garantie zu Recht, Sicherheit, Kosten, Verfügbarkeit oder Wohnviertel.",
  "Explore City Guides": "Stadtführer entdecken",

  "Recognize, stop, verify, preserve evidence, and escalate high-risk activity.":
    "Riskante Aktivitäten erkennen, stoppen, prüfen, dokumentieren und melden.",
  "For anyone who's seen a warning sign, at any stage.": "Für alle, die ein Warnsignal bemerkt haben — in jeder Phase.",
  "Payment redirection": "Zahlungsumleitung",
  Impersonation: "Identitätsvortäuschung",
  "Unsafe viewings": "Unsichere Besichtigungen",
  "Prevention and support — not emergency response or universal safety certification.":
    "Prävention und Unterstützung — kein Notfalldienst und keine allgemeine Sicherheitszertifizierung.",
  "Review Safety Guidance": "Sicherheitshinweise ansehen",

  "Explain controlled terms used across Zoiko Rooms and common rental journeys.":
    "Erklärt festgelegte Begriffe von Zoiko Rooms und gängigen Mietabläufen.",
  "For anyone unsure what a term or status actually means.": "Für alle, die sich bei einem Begriff oder Status unsicher sind.",
  "Security deposit": "Kaution",
  "Direct billing": "Direktabrechnung",
  "Plain-language definitions — not legal definitions unless sourced and scoped.":
    "Verständliche Erklärungen — keine juristischen Definitionen, außer wenn belegt und abgegrenzt.",
  "Open Glossary": "Glossar öffnen",

  "Not sure which of the four resources above fits? Answer a few questions.":
    "Nicht sicher, welcher der vier Bereiche oben passt? Beantworten Sie ein paar Fragen.",
  "For anyone who isn't sure where to start.": "Für alle, die nicht wissen, wo sie anfangen sollen.",
  Role: "Rolle",
  Stage: "Phase",
  "Issue type": "Anliegenart",
  Urgency: "Dringlichkeit",
  "A routing tool — not a decision-maker or guaranteed answer.":
    "Ein Weiterleitungswerkzeug — kein Entscheider und keine garantierte Antwort.",
  "Choose Support": "Support auswählen",

  Current: "Aktuell",
  Route: "Weiterleitung",

  FAQ: "Häufige Fragen",
  "Common questions": "Häufig gestellte Fragen",
  "Does search here guarantee a correct or complete answer?":
    "Garantiert die Suche hier eine korrekte oder vollständige Antwort?",
  "No. Resources give current, sourced guidance — not a guaranteed answer, official legal advice, or an AI expert. For live status, always check your account or live product record.":
    "Nein. Ressourcen bieten aktuelle, belegte Hinweise — keine garantierte Antwort, offizielle Rechtsberatung oder KI-Expertise. Für den aktuellen Status prüfen Sie immer Ihr Konto oder den Live-Produktdatensatz.",
  "Do I need to pick a location to get useful guidance?": "Muss ich einen Standort auswählen, um nützliche Hinweise zu erhalten?",
  "No. Location context is optional and only sharpens results where it applies — every destination still gives universal, non-location-specific guidance without it.":
    "Nein. Der Standortkontext ist optional und verfeinert Ergebnisse nur, wo er zutrifft — jeder Bereich bietet auch ohne ihn allgemeingültige Hinweise.",
  "What if none of the five destinations fit my question?": "Was, wenn keiner der fünf Bereiche zu meiner Frage passt?",
  "Use Choose Support — a short routing tool based on your role, stage, issue type, and urgency — to find the right next step instead of guessing between destinations.":
    "Nutzen Sie Support auswählen — ein kurzes Weiterleitungswerkzeug basierend auf Rolle, Phase, Anliegenart und Dringlichkeit —, um den richtigen nächsten Schritt zu finden, statt zwischen Bereichen zu raten.",
  "Search, browse, or choose the next step that fits you.": "Suchen, durchstöbern oder den passenden nächsten Schritt wählen.",
  "Search Resources": "Ressourcen durchsuchen",
  "Browse by Need": "Nach Bedarf durchsuchen",

  "Find direct, current guidance for every stage of renting, listing, moving, and operating rooms.":
    "Direkte, aktuelle Hinweise für jede Phase des Mietens, Anbietens, Umziehens und Betreibens von Zimmern.",
  "Search answers, follow role-based guides, understand city and rental terms, avoid scams, resolve problems, and move into the correct product or support pathway.":
    "Antworten suchen, rollenbasierten Leitfäden folgen, Stadt- und Mietbegriffe verstehen, Betrug vermeiden, Probleme lösen und den richtigen Produkt- oder Support-Weg finden.",
  "Ask a question or search a topic — e.g. deposits, viewing safety, room passport":
    "Stellen Sie eine Frage oder suchen Sie ein Thema — z. B. Kaution, Sicherheit bei Besichtigungen, Room Passport",
  "No resource matches": "Keine Ressource passt zu",
  "yet. Try Choose Support below, or browse the five destinations.":
    "bisher. Versuchen Sie Support auswählen unten oder durchstöbern Sie die fünf Bereiche.",

  "Room Seeker": "Zimmersuchende/r",
  Provider: "Anbieter",
  Organization: "Organisation",
  "Zoiko Rooms Pro Operator": "Zoiko Rooms Pro-Betreiber",
  "Representative / Advocate": "Vertreter/in / Fürsprecher/in",
  "General Visitor": "Allgemeine/r Besucher/in",

  "Something feel off right now?": "Stimmt gerade etwas nicht?",
  "Payment redirection, credential requests, a false room, or an unsafe viewing — this overrides normal browsing.":
    "Zahlungsumleitung, Anfragen nach Zugangsdaten, ein gefälschtes Zimmer oder eine unsichere Besichtigung — das geht vor dem normalen Stöbern.",

  // ===================== help-center =====================
  "HELP CENTER": "HILFE-CENTER",
  "Find the right answer, safety action, or accountable support path.":
    "Finden Sie die richtige Antwort, Sicherheitsmaßnahme oder den passenden Support-Weg.",
  "Search current help, choose what you're trying to do, or start with the issue affecting your room, listing, application, agreement, payment, organization, or Pro workspace.":
    "Durchsuchen Sie aktuelle Hilfeinhalte, wählen Sie Ihr Vorhaben, oder starten Sie mit dem Problem zu Ihrem Zimmer, Ihrer Anzeige, Bewerbung, Ihrem Vertrag, Ihrer Zahlung, Organisation oder Ihrem Pro-Arbeitsbereich.",
  "What do you need help with?": "Wobei benötigen Sie Hilfe?",
  "Search Help": "Hilfe durchsuchen",
  "Don't include passwords, verification codes, bank credentials, full card details, exact private addresses, or sensitive documents.":
    "Geben Sie keine Passwörter, Verifizierungscodes, Bankdaten, vollständigen Kartendaten, genauen Privatadressen oder sensiblen Dokumente an.",
  "I may be at risk or seeing a scam": "Ich bin möglicherweise gefährdet oder sehe einen Betrug",
  "I can't access my account": "Ich kann nicht auf mein Konto zugreifen",
  "I need help with a room or listing": "Ich brauche Hilfe zu einem Zimmer oder einer Anzeige",
  "I need help with an application or agreement": "Ich brauche Hilfe zu einer Bewerbung oder einem Vertrag",
  "I have a payment, refund, or deposit issue": "Ich habe ein Problem mit Zahlung, Rückerstattung oder Kaution",
  "I manage an organization or Pro workspace": "Ich verwalte eine Organisation oder einen Pro-Arbeitsbereich",
  "Account & Identity": "Konto & Identität",
  "Payments & Refunds": "Zahlungen & Rückerstattungen",
  "Organizations & Pro": "Organisationen & Pro",
  "Safety & Trust": "Sicherheit & Vertrauen",
  "Search, filters, saved rooms, availability, viewings, applications, agreements, move-in, and support.":
    "Suche, Filter, gespeicherte Zimmer, Verfügbarkeit, Besichtigungen, Bewerbungen, Verträge, Einzug und Support.",
  "Provider access, room records, Room Passport, availability, costs, publishing, applications, agreements, and payments.":
    "Anbieterzugang, Zimmerdatensätze, Room Passport, Verfügbarkeit, Kosten, Veröffentlichung, Bewerbungen, Verträge und Zahlungen.",
  "Sign-in, verification, MFA, authorized representatives, access recovery, privacy, and security.":
    "Anmeldung, Verifizierung, MFA, bevollmächtigte Vertreter, Zugangswiederherstellung, Datenschutz und Sicherheit.",
  "Recipients, charges, deposits, contributions, failed payments, receipts, refunds, disputes, and fraud.":
    "Empfänger, Gebühren, Kautionen, Beiträge, fehlgeschlagene Zahlungen, Belege, Rückerstattungen, Streitfälle und Betrug.",
  "University, employer, healthcare, mobility, public-sector, portfolio, distribution, and integration support.":
    "Support für Universitäten, Arbeitgeber, Gesundheitswesen, Mobilität, öffentlichen Sektor, Portfolios, Vertrieb und Integrationen.",
  "Scams, impersonation, unsafe viewings, harassment, discrimination, documents, credentials, and urgent restrictions.":
    "Betrug, Identitätsvortäuschung, unsichere Besichtigungen, Belästigung, Diskriminierung, Dokumente, Zugangsdaten und dringende Einschränkungen.",
  "Reviewed Jul 2026": "Geprüft im Juli 2026",
  "Open help pathway": "Hilfeweg öffnen",

  "Check case status": "Vorgangsstatus prüfen",
  "Case reference, e.g. ZR-482913": "Vorgangsnummer, z. B. ZR-482913",
  "Check Status": "Status prüfen",
  "Popular help right now": "Aktuell beliebte Hilfethemen",
  "How do I review a room agreement before signing?": "Wie prüfe ich einen Mietvertrag vor der Unterschrift?",
  "How do I verify where a payment should go?": "Wie prüfe ich, wohin eine Zahlung gehen soll?",
  "How do I prepare my Room Passport for publication?": "Wie bereite ich meinen Room Passport zur Veröffentlichung vor?",
  "What if someone asks for my password or a code?": "Was, wenn jemand nach meinem Passwort oder einem Code fragt?",
  "Room Seeker · Agree": "Zimmersuchende/r · Vertrag",
  "Room Seeker · Pay": "Zimmersuchende/r · Zahlung",
  "Provider · Prepare": "Anbieter · Vorbereitung",
  "Account & Identity · Safety": "Konto & Identität · Sicherheit",
  Updated: "Aktualisiert",

  "Frequently asked questions": "Häufig gestellte Fragen",
  "How do I contact Zoiko Rooms support?": "Wie kontaktiere ich den Zoiko Rooms Support?",
  "Use the Help Center issue chooser or Contact Support. Sign in only when the issue requires access to a private record or case.":
    "Nutzen Sie die Anliegenauswahl im Hilfe-Center oder Support kontaktieren. Melden Sie sich nur an, wenn das Anliegen Zugriff auf einen privaten Datensatz oder Vorgang erfordert.",
  "What should I do if someone asks for my password or verification code?":
    "Was soll ich tun, wenn jemand nach meinem Passwort oder Verifizierungscode fragt?",
  "Never share passwords, one-time verification codes, or PINs with anyone. Zoiko Rooms support will never ask for these credentials.":
    "Geben Sie niemals Passwörter, einmalige Verifizierungscodes oder PINs weiter. Der Zoiko Rooms Support fragt niemals nach solchen Zugangsdaten.",
  "How can I report a room or listing?": "Wie kann ich ein Zimmer oder eine Anzeige melden?",
  "Select the listing record in your account or use the safety reporting tool to submit details directly to our Trust & Safety team.":
    "Wählen Sie den Anzeigen-Datensatz in Ihrem Konto oder nutzen Sie das Sicherheits-Meldetool, um Details direkt an unser Trust & Safety-Team zu senden.",
  "Can support guarantee a refund or room outcome?": "Kann der Support eine Rückerstattung oder ein Zimmerergebnis garantieren?",
  "Support reviews each case according to authenticated records, terms, and evidence, but outcomes depend on policy compliance and verification.":
    "Der Support prüft jeden Vorgang anhand verifizierter Datensätze, Bedingungen und Nachweise, aber Ergebnisse hängen von Richtlinienkonformität und Verifizierung ab.",
  "What if I'm in immediate danger?": "Was, wenn ich in unmittelbarer Gefahr bin?",
  "Contact local emergency services immediately. A Zoiko support case can be opened afterward, but our team cannot act as an emergency response service.":
    "Kontaktieren Sie sofort den örtlichen Notdienst. Ein Zoiko-Support-Vorgang kann anschließend eröffnet werden, aber unser Team ist kein Notfalldienst.",
  "Can someone contact support for me?": "Kann jemand für mich den Support kontaktieren?",
  "An authorized representative or advocate can reach out on your behalf, provided proper identity or authorization details are supplied.":
    "Ein bevollmächtigter Vertreter oder Fürsprecher kann sich in Ihrem Namen melden, sofern geeignete Identitäts- oder Vollmachtnachweise vorgelegt werden.",

  "Who are you helping today?": "Wem helfen Sie heute?",
  "Organization Participant": "Organisationsteilnehmer/in",
  "Pro Operator": "Pro-Betreiber/in",
  "Current answer example": "Aktuelles Antwortbeispiel",
  "This is what a real Help Center answer looks like — source, owner, date, applicability, and limitation always visible.":
    "So sieht eine echte Hilfe-Center-Antwort aus — Quelle, Verantwortliche/r, Datum, Anwendbarkeit und Einschränkung immer sichtbar.",
  "Applies to:": "Gilt für:",
  "Room Seeker · Pay stage": "Zimmersuchende/r · Phase Zahlung",
  "Source:": "Quelle:",
  "Payments Support": "Zahlungssupport",
  "Reviewed:": "Geprüft:",
  "Use the current authenticated payment request and verified recipient in your account. Do not pay from a message that conflicts with that record.":
    "Nutzen Sie die aktuelle, authentifizierte Zahlungsanfrage und den verifizierten Empfänger in Ihrem Konto. Zahlen Sie nicht aufgrund einer Nachricht, die diesem Datensatz widerspricht.",
  "Open your current agreement and payment request in your account.":
    "Öffnen Sie Ihren aktuellen Vertrag und die Zahlungsanfrage in Ihrem Konto.",
  "Compare the recipient name and account against any message you received.":
    "Vergleichen Sie den Empfängernamen und das Konto mit jeder erhaltenen Nachricht.",
  "If they don't match, stop — don't pay, and report the mismatch.":
    "Stimmen sie nicht überein, stoppen Sie — zahlen Sie nicht und melden Sie die Abweichung.",
  "If they match, pay only through the approved route shown in your account.":
    "Stimmen sie überein, zahlen Sie nur über den genehmigten, in Ihrem Konto angezeigten Weg.",
  "Limitation:": "Einschränkung:",
  "This answer explains the process. It cannot confirm today's specific recipient or amount — only your live account record can.":
    "Diese Antwort erklärt den Ablauf. Sie kann den heutigen konkreten Empfänger oder Betrag nicht bestätigen — das kann nur Ihr aktueller Kontodatensatz.",
  "Open my payment record": "Meinen Zahlungsdatensatz öffnen",
  "Related: Payments, Safety & Support": "Verwandt: Zahlungen, Sicherheit & Support",
  "Sign in to view your payment, application, agreement, or case record.":
    "Melden Sie sich an, um Ihren Zahlungs-, Bewerbungs-, Vertrags- oder Vorgangsdatensatz einzusehen.",
  "Public help stays open without an account — we only ask you to sign in when opening or changing something private.":
    "Öffentliche Hilfe bleibt ohne Konto zugänglich — wir bitten Sie nur um Anmeldung, wenn Sie etwas Privates öffnen oder ändern.",
  "Sign In Securely": "Sicher anmelden",

  "Still need help? Choose your next step.": "Noch Hilfe nötig? Wählen Sie Ihren nächsten Schritt.",
  "Contact Support": "Support kontaktieren",
  "Check Case Status": "Vorgangsstatus prüfen",
  "Safety Help": "Sicherheitshilfe",

  "Organizations and Zoiko Rooms Pro support": "Support für Organisationen und Zoiko Rooms Pro",
  DOMAIN: "BEREICH",
  "COMMON ISSUES": "HÄUFIGE ANLIEGEN",
  ROUTE: "WEITERLEITUNG",
  "Referral, eligibility, allocation, contribution, term dates": "Vermittlung, Berechtigung, Zuweisung, Beitrag, Semestertermine",
  "Invitation, allowance, direct billing, assignment change": "Einladung, Zuschuss, Direktabrechnung, Änderung der Zuweisung",
  "Workforce access, dates, funding — no clinical data": "Personalzugang, Termine, Finanzierung — keine klinischen Daten",
  "Case owner, shortlist, handoff, funding, closure": "Fallverantwortliche/r, Vorauswahl, Übergabe, Finanzierung, Abschluss",
  "Hierarchy, Room Passport, availability, import, publishing": "Hierarchie, Room Passport, Verfügbarkeit, Import, Veröffentlichung",
  "Connection, authorization, mapping, webhook, error": "Verbindung, Autorisierung, Zuordnung, Webhook, Fehler",
  "University program owner + Zoiko organization support": "Programmverantwortliche/r der Universität + Zoiko-Organisationssupport",
  "Employer/mobility owner + Zoiko organization support": "Arbeitgeber-/Mobilitätsverantwortliche/r + Zoiko-Organisationssupport",
  "Healthcare workforce owner + Zoiko support": "Personalverantwortliche/r im Gesundheitswesen + Zoiko-Support",
  "Mobility owner + Zoiko support": "Mobilitätsverantwortliche/r + Zoiko-Support",
  "Pro Operations": "Pro-Betrieb",
  "Integration Support / Security": "Integrationssupport / Sicherheit",

  "Safety and privacy": "Sicherheit und Datenschutz",
  SCENARIO: "SZENARIO",
  "IMMEDIATE ACTION": "SOFORTMASSNAHME",
  "SUPPORT ROUTE": "SUPPORT-WEG",
  "Payment redirection / unknown recipient": "Zahlungsumleitung / unbekannter Empfänger",
  "Credential / one-time-code request": "Anfrage nach Zugangsdaten / Einmalcode",
  "False listing / unauthorized room": "Gefälschte Anzeige / nicht autorisiertes Zimmer",
  "Unsafe viewing / access": "Unsichere Besichtigung / unsicherer Zugang",
  "Harassment / discrimination": "Belästigung / Diskriminierung",
  "Immediate danger": "Unmittelbare Gefahr",
  "Don't pay; verify current recipient in your account; secure your account":
    "Nicht zahlen; aktuellen Empfänger in Ihrem Konto prüfen; Konto absichern",
  "Don't share; end contact; reset credentials; revoke sessions":
    "Nicht weitergeben; Kontakt beenden; Zugangsdaten zurücksetzen; Sitzungen widerrufen",
  "Stop the transaction; preserve messages; report the exact record":
    "Transaktion stoppen; Nachrichten sichern; den genauen Datensatz melden",
  "Leave or avoid the location; contact a trusted person or local emergency help":
    "Ort verlassen oder meiden; eine Vertrauensperson oder den örtlichen Notdienst kontaktieren",
  "Stop contact where safe; preserve evidence; block/report":
    "Kontakt beenden, wenn sicher; Beweise sichern; blockieren/melden",
  "Use local emergency services": "Örtlichen Notdienst nutzen",
  "Payments + Trust & Safety": "Zahlungen + Trust & Safety",
  "Identity/Security + Trust & Safety": "Identität/Sicherheit + Trust & Safety",
  "Trust & Safety + Provider Operations": "Trust & Safety + Anbieterbetrieb",
  "Trust & Safety; external emergency services": "Trust & Safety; externer Notdienst",
  "Trust & Safety; fairness/privacy owner": "Trust & Safety; Verantwortliche/r für Fairness/Datenschutz",
  "External emergency services; a Zoiko case may follow but is not emergency response":
    "Externer Notdienst; ein Zoiko-Vorgang kann anschließend folgen, ist aber kein Notfalldienst",

  "Still need help? Start the smallest accountable request.": "Noch Hilfe nötig? Starten Sie die kleinstmögliche verantwortliche Anfrage.",
  "Choose the issue and affected journey, review what will be shared, and attach only necessary evidence.":
    "Wählen Sie das Anliegen und den betroffenen Ablauf, prüfen Sie, was geteilt wird, und fügen Sie nur nötige Nachweise bei.",
  "ISSUE CATEGORY": "ANLIEGENKATEGORIE",
  "Find a Room": "Zimmer finden",
  "List a Room": "Zimmer anbieten",
  "YOUR ROLE": "IHRE ROLLE",
  "CURRENT IMPACT": "AKTUELLE AUSWIRKUNG",
  "Cannot access": "Kein Zugriff möglich",
  "Delayed action": "Verzögerte Bearbeitung",
  "Incorrect information": "Falsche Angaben",
  "Security concerns": "Sicherheitsbedenken",
  URGENCY: "DRINGLICHKEIT",
  Standard: "Standard",
  "High / Time-Sensitive": "Hoch / zeitkritisch",
  "Urgent Safety": "Dringende Sicherheit",
  "DESCRIBE THE ISSUE": "ANLIEGEN BESCHREIBEN",
  "What happened, and what outcome are you looking for?": "Was ist passiert, und welches Ergebnis wünschen Sie sich?",
  "Don't include passwords, one-time codes, full card details, or unrelated sensitive documents. We'll ask for evidence securely if it's needed.":
    "Geben Sie keine Passwörter, Einmalcodes, vollständigen Kartendaten oder unrelated sensiblen Dokumente an. Wir fragen bei Bedarf sicher nach Nachweisen.",
  "SAFE CONTACT METHOD": "SICHERE KONTAKTMETHODE",
  "Email or phone": "E-Mail oder Telefon",
  "By submitting, you agree that this information is shared with the accountable team for your issue only, retained only as long as necessary, and not used for unrelated purposes.":
    "Mit dem Absenden stimmen Sie zu, dass diese Informationen nur mit dem für Ihr Anliegen zuständigen Team geteilt, nur so lange wie nötig aufbewahrt und nicht für andere Zwecke verwendet werden.",
  "Start Support Request": "Support-Anfrage starten",
};

const FR: Record<string, string> = {
  Resources: "Ressources",
  "Help Center": "Centre d'aide",
  Guides: "Guides",
  "City Guides": "Guides de villes",
  "Safety & Scam Prevention": "Sécurité et prévention des fraudes",
  "Room Rental Glossary": "Glossaire de la location de chambres",

  "Resources explain and route — they never guarantee an outcome, official legal advice, or a scam-free platform.":
    "Les ressources expliquent et orientent — elles ne garantissent jamais un résultat, un avis juridique officiel ou une plateforme sans fraude.",
  "Sourced & scoped": "Sourcé et délimité",
  "Every answer states its currentness, source, and what it doesn't cover.":
    "Chaque réponse indique son actualité, sa source et ce qu'elle ne couvre pas.",
  "Never one answer for every location": "Jamais une réponse unique pour chaque lieu",
  "Location context is optional, and never required for universal guidance.":
    "Le contexte de localisation est facultatif et jamais requis pour des indications générales.",

  "Resource Destinations": "Espaces de ressources",
  "Five destinations, each with one clear job": "Cinq espaces, chacun avec une mission claire",
  "Every destination has a stated boundary — what it resolves, and what it explicitly does not decide or guarantee.":
    "Chaque espace a une limite définie — ce qu'il résout et ce qu'il ne décide ni ne garantit explicitement pas.",

  "Resolve product, account, workflow, payment, and support questions.":
    "Résout les questions de produit, de compte, de processus, de paiement et d'assistance.",
  "For anyone with an active account issue or case.": "Pour toute personne ayant un problème ou un dossier de compte en cours.",
  "Payment status": "Statut du paiement",
  "Account access": "Accès au compte",
  "Report a concern": "Signaler un problème",
  "Self-service and support routing — not a replacement for private case status.":
    "Libre-service et orientation vers l'assistance — ne remplace pas le suivi privé d'un dossier.",
  "Open Help Center": "Ouvrir le centre d'aide",

  "Follow role- and journey-based, step-by-step education.": "Des guides étape par étape selon votre profil et votre parcours.",
  "For seekers, providers, organizations, and Pro operators.": "Pour les locataires, bailleurs, organisations et opérateurs Pro.",
  "Review an agreement": "Examiner un contrat",
  "Confirm a payment": "Confirmer un paiement",
  "Set up a Room Passport": "Configurer un Room Passport",
  "Stable, general journeys — not city-specific or case-specific decisions.":
    "Des parcours stables et généraux — pas des décisions propres à une ville ou à un dossier.",
  "Browse Guides": "Parcourir les guides",

  "Provide sourced local context for planning a room search and move.":
    "Apporte un contexte local sourcé pour planifier une recherche et un déménagement.",
  "For local, relocating, and international seekers.": "Pour les chercheurs locaux, en mobilité ou internationaux.",
  "Berlin rental basics": "Bases de la location à Berlin",
  "Local costs": "Coûts locaux",
  "Transit context": "Contexte des transports",
  "No blanket legal, safety, cost, availability, or neighborhood guarantee.":
    "Aucune garantie générale juridique, de sécurité, de coût, de disponibilité ou de quartier.",
  "Explore City Guides": "Découvrir les guides de villes",

  "Recognize, stop, verify, preserve evidence, and escalate high-risk activity.":
    "Reconnaître, stopper, vérifier, conserver des preuves et signaler une activité à haut risque.",
  "For anyone who's seen a warning sign, at any stage.": "Pour toute personne ayant remarqué un signal d'alerte, à tout moment.",
  "Payment redirection": "Détournement de paiement",
  Impersonation: "Usurpation d'identité",
  "Unsafe viewings": "Visites dangereuses",
  "Prevention and support — not emergency response or universal safety certification.":
    "Prévention et assistance — ni intervention d'urgence ni certification de sécurité universelle.",
  "Review Safety Guidance": "Consulter les conseils de sécurité",

  "Explain controlled terms used across Zoiko Rooms and common rental journeys.":
    "Explique les termes encadrés utilisés sur Zoiko Rooms et dans les parcours de location courants.",
  "For anyone unsure what a term or status actually means.": "Pour toute personne incertaine du sens exact d'un terme ou d'un statut.",
  "Security deposit": "Dépôt de garantie",
  "Direct billing": "Facturation directe",
  "Plain-language definitions — not legal definitions unless sourced and scoped.":
    "Définitions en langage clair — pas des définitions juridiques, sauf si sourcées et délimitées.",
  "Open Glossary": "Ouvrir le glossaire",

  "Not sure which of the four resources above fits? Answer a few questions.":
    "Vous ne savez pas laquelle des quatre ressources ci-dessus vous convient ? Répondez à quelques questions.",
  "For anyone who isn't sure where to start.": "Pour toute personne ne sachant pas par où commencer.",
  Role: "Rôle",
  Stage: "Étape",
  "Issue type": "Type de problème",
  Urgency: "Urgence",
  "A routing tool — not a decision-maker or guaranteed answer.":
    "Un outil d'orientation — ni décideur, ni réponse garantie.",
  "Choose Support": "Choisir une assistance",

  Current: "Actuel",
  Route: "Orientation",

  FAQ: "FAQ",
  "Common questions": "Questions fréquentes",
  "Does search here guarantee a correct or complete answer?": "La recherche ici garantit-elle une réponse exacte ou complète ?",
  "No. Resources give current, sourced guidance — not a guaranteed answer, official legal advice, or an AI expert. For live status, always check your account or live product record.":
    "Non. Les ressources fournissent des indications actuelles et sourcées — pas une réponse garantie, un avis juridique officiel ou une expertise par IA. Pour un statut en temps réel, consultez toujours votre compte ou le dossier produit en direct.",
  "Do I need to pick a location to get useful guidance?": "Dois-je choisir un lieu pour obtenir des conseils utiles ?",
  "No. Location context is optional and only sharpens results where it applies — every destination still gives universal, non-location-specific guidance without it.":
    "Non. Le contexte de localisation est facultatif et n'affine les résultats que lorsqu'il s'applique — chaque espace donne des indications générales même sans lui.",
  "What if none of the five destinations fit my question?": "Et si aucun des cinq espaces ne correspond à ma question ?",
  "Use Choose Support — a short routing tool based on your role, stage, issue type, and urgency — to find the right next step instead of guessing between destinations.":
    "Utilisez Choisir une assistance — un court outil d'orientation basé sur votre profil, votre étape, votre type de problème et son urgence — pour trouver la bonne étape suivante plutôt que de deviner entre les espaces.",
  "Search, browse, or choose the next step that fits you.": "Recherchez, parcourez ou choisissez la prochaine étape qui vous convient.",
  "Search Resources": "Rechercher des ressources",
  "Browse by Need": "Parcourir par besoin",

  "Find direct, current guidance for every stage of renting, listing, moving, and operating rooms.":
    "Trouvez des indications directes et actuelles pour chaque étape de la location, de la publication, du déménagement et de la gestion de chambres.",
  "Search answers, follow role-based guides, understand city and rental terms, avoid scams, resolve problems, and move into the correct product or support pathway.":
    "Recherchez des réponses, suivez des guides selon votre profil, comprenez les termes liés aux villes et à la location, évitez les fraudes, résolvez des problèmes et accédez au bon produit ou parcours d'assistance.",
  "Ask a question or search a topic — e.g. deposits, viewing safety, room passport":
    "Posez une question ou recherchez un sujet — par ex. dépôts, sécurité des visites, Room Passport",
  "No resource matches": "Aucune ressource ne correspond à",
  "yet. Try Choose Support below, or browse the five destinations.":
    "pour l'instant. Essayez Choisir une assistance ci-dessous, ou parcourez les cinq espaces.",

  "Room Seeker": "Locataire",
  Provider: "Bailleur",
  Organization: "Organisation",
  "Zoiko Rooms Pro Operator": "Opérateur Zoiko Rooms Pro",
  "Representative / Advocate": "Représentant(e) / défenseur(se)",
  "General Visitor": "Visiteur général",

  "Something feel off right now?": "Quelque chose semble anormal en ce moment ?",
  "Payment redirection, credential requests, a false room, or an unsafe viewing — this overrides normal browsing.":
    "Détournement de paiement, demande d'identifiants, fausse chambre ou visite dangereuse — cela prime sur la navigation normale.",
};

const ES: Record<string, string> = {
  Resources: "Recursos",
  "Help Center": "Centro de ayuda",
  Guides: "Guías",
  "City Guides": "Guías de ciudades",
  "Safety & Scam Prevention": "Seguridad y prevención de fraudes",
  "Room Rental Glossary": "Glosario de alquiler de habitaciones",

  "Resources explain and route — they never guarantee an outcome, official legal advice, or a scam-free platform.":
    "Los recursos explican y orientan — nunca garantizan un resultado, asesoramiento legal oficial ni una plataforma libre de fraudes.",
  "Sourced & scoped": "Con fuente y alcance definido",
  "Every answer states its currentness, source, and what it doesn't cover.":
    "Cada respuesta indica su vigencia, su fuente y lo que no cubre.",
  "Never one answer for every location": "Nunca una única respuesta para todos los lugares",
  "Location context is optional, and never required for universal guidance.":
    "El contexto de ubicación es opcional y nunca es necesario para orientaciones generales.",

  "Resource Destinations": "Secciones de recursos",
  "Five destinations, each with one clear job": "Cinco secciones, cada una con una función clara",
  "Every destination has a stated boundary — what it resolves, and what it explicitly does not decide or guarantee.":
    "Cada sección tiene un límite definido — lo que resuelve y lo que explícitamente no decide ni garantiza.",

  "Resolve product, account, workflow, payment, and support questions.":
    "Resuelve preguntas sobre producto, cuenta, procesos, pagos y soporte.",
  "For anyone with an active account issue or case.": "Para cualquiera con un problema o caso de cuenta activo.",
  "Payment status": "Estado del pago",
  "Account access": "Acceso a la cuenta",
  "Report a concern": "Reportar un problema",
  "Self-service and support routing — not a replacement for private case status.":
    "Autoservicio y derivación a soporte — no reemplaza el estado privado de un caso.",
  "Open Help Center": "Abrir el centro de ayuda",

  "Follow role- and journey-based, step-by-step education.": "Guías paso a paso según tu perfil y tu proceso.",
  "For seekers, providers, organizations, and Pro operators.": "Para inquilinos, anfitriones, organizaciones y operadores Pro.",
  "Review an agreement": "Revisar un contrato",
  "Confirm a payment": "Confirmar un pago",
  "Set up a Room Passport": "Configurar un Room Passport",
  "Stable, general journeys — not city-specific or case-specific decisions.":
    "Procesos estables y generales — no decisiones específicas de una ciudad o un caso.",
  "Browse Guides": "Explorar guías",

  "Provide sourced local context for planning a room search and move.":
    "Ofrece contexto local documentado para planear una búsqueda y una mudanza.",
  "For local, relocating, and international seekers.": "Para quienes buscan localmente, se reubican o llegan del extranjero.",
  "Berlin rental basics": "Fundamentos del alquiler en Berlín",
  "Local costs": "Costos locales",
  "Transit context": "Contexto de transporte",
  "No blanket legal, safety, cost, availability, or neighborhood guarantee.":
    "Sin garantía general legal, de seguridad, de costo, de disponibilidad ni de barrio.",
  "Explore City Guides": "Explorar guías de ciudades",

  "Recognize, stop, verify, preserve evidence, and escalate high-risk activity.":
    "Reconocer, detener, verificar, conservar evidencia y escalar actividad de alto riesgo.",
  "For anyone who's seen a warning sign, at any stage.": "Para cualquiera que haya visto una señal de alerta, en cualquier etapa.",
  "Payment redirection": "Desvío de pagos",
  Impersonation: "Suplantación de identidad",
  "Unsafe viewings": "Visitas inseguras",
  "Prevention and support — not emergency response or universal safety certification.":
    "Prevención y apoyo — no respuesta de emergencia ni certificación de seguridad universal.",
  "Review Safety Guidance": "Ver orientación de seguridad",

  "Explain controlled terms used across Zoiko Rooms and common rental journeys.":
    "Explica términos controlados usados en Zoiko Rooms y en procesos habituales de alquiler.",
  "For anyone unsure what a term or status actually means.": "Para cualquiera que no esté seguro de qué significa un término o estado.",
  "Security deposit": "Depósito de garantía",
  "Direct billing": "Facturación directa",
  "Plain-language definitions — not legal definitions unless sourced and scoped.":
    "Definiciones en lenguaje sencillo — no definiciones legales, salvo que estén documentadas y delimitadas.",
  "Open Glossary": "Abrir el glosario",

  "Not sure which of the four resources above fits? Answer a few questions.":
    "¿No sabes cuál de los cuatro recursos anteriores te conviene? Responde algunas preguntas.",
  "For anyone who isn't sure where to start.": "Para cualquiera que no sepa por dónde empezar.",
  Role: "Rol",
  Stage: "Etapa",
  "Issue type": "Tipo de problema",
  Urgency: "Urgencia",
  "A routing tool — not a decision-maker or guaranteed answer.":
    "Una herramienta de orientación — no toma decisiones ni garantiza una respuesta.",
  "Choose Support": "Elegir soporte",

  Current: "Actual",
  Route: "Derivación",

  FAQ: "Preguntas frecuentes",
  "Common questions": "Preguntas comunes",
  "Does search here guarantee a correct or complete answer?": "¿La búsqueda aquí garantiza una respuesta correcta o completa?",
  "No. Resources give current, sourced guidance — not a guaranteed answer, official legal advice, or an AI expert. For live status, always check your account or live product record.":
    "No. Los recursos ofrecen orientación actual y documentada — no una respuesta garantizada, asesoramiento legal oficial ni un experto en IA. Para el estado en tiempo real, revisa siempre tu cuenta o el registro del producto.",
  "Do I need to pick a location to get useful guidance?": "¿Necesito elegir una ubicación para obtener orientación útil?",
  "No. Location context is optional and only sharpens results where it applies — every destination still gives universal, non-location-specific guidance without it.":
    "No. El contexto de ubicación es opcional y solo afina los resultados donde aplica — cada sección ofrece orientación general incluso sin él.",
  "What if none of the five destinations fit my question?": "¿Y si ninguna de las cinco secciones responde a mi pregunta?",
  "Use Choose Support — a short routing tool based on your role, stage, issue type, and urgency — to find the right next step instead of guessing between destinations.":
    "Usa Elegir soporte — una breve herramienta de orientación basada en tu rol, etapa, tipo de problema y urgencia — para encontrar el siguiente paso correcto en lugar de adivinar entre secciones.",
  "Search, browse, or choose the next step that fits you.": "Busca, explora o elige el siguiente paso que te convenga.",
  "Search Resources": "Buscar recursos",
  "Browse by Need": "Explorar por necesidad",

  "Find direct, current guidance for every stage of renting, listing, moving, and operating rooms.":
    "Encuentra orientación directa y actual para cada etapa de alquilar, publicar, mudarte y operar habitaciones.",
  "Search answers, follow role-based guides, understand city and rental terms, avoid scams, resolve problems, and move into the correct product or support pathway.":
    "Busca respuestas, sigue guías según tu perfil, entiende términos de ciudades y alquiler, evita fraudes, resuelve problemas y accede al producto o soporte correcto.",
  "Ask a question or search a topic — e.g. deposits, viewing safety, room passport":
    "Haz una pregunta o busca un tema — p. ej. depósitos, seguridad en visitas, Room Passport",
  "No resource matches": "Ningún recurso coincide con",
  "yet. Try Choose Support below, or browse the five destinations.":
    "todavía. Prueba Elegir soporte abajo, o explora las cinco secciones.",

  "Room Seeker": "Persona que busca habitación",
  Provider: "Anfitrión",
  Organization: "Organización",
  "Zoiko Rooms Pro Operator": "Operador de Zoiko Rooms Pro",
  "Representative / Advocate": "Representante / defensor(a)",
  "General Visitor": "Visitante general",

  "Something feel off right now?": "¿Algo no va bien ahora mismo?",
  "Payment redirection, credential requests, a false room, or an unsafe viewing — this overrides normal browsing.":
    "Desvío de pagos, solicitud de credenciales, una habitación falsa o una visita insegura — esto tiene prioridad sobre la navegación normal.",
};

const PT: Record<string, string> = {
  Resources: "Recursos",
  "Help Center": "Central de ajuda",
  Guides: "Guias",
  "City Guides": "Guias de cidades",
  "Safety & Scam Prevention": "Segurança e prevenção de fraudes",
  "Room Rental Glossary": "Glossário de aluguel de quartos",

  "Resources explain and route — they never guarantee an outcome, official legal advice, or a scam-free platform.":
    "Os recursos explicam e encaminham — nunca garantem um resultado, aconselhamento jurídico oficial ou uma plataforma livre de fraudes.",
  "Sourced & scoped": "Com fonte e escopo definidos",
  "Every answer states its currentness, source, and what it doesn't cover.":
    "Cada resposta indica sua atualidade, sua fonte e o que não cobre.",
  "Never one answer for every location": "Nunca uma única resposta para todos os lugares",
  "Location context is optional, and never required for universal guidance.":
    "O contexto de localização é opcional e nunca é necessário para orientações gerais.",

  "Resource Destinations": "Seções de recursos",
  "Five destinations, each with one clear job": "Cinco seções, cada uma com uma função clara",
  "Every destination has a stated boundary — what it resolves, and what it explicitly does not decide or guarantee.":
    "Cada seção tem um limite definido — o que resolve e o que explicitamente não decide nem garante.",

  "Resolve product, account, workflow, payment, and support questions.":
    "Resolve dúvidas sobre produto, conta, processos, pagamentos e suporte.",
  "For anyone with an active account issue or case.": "Para quem tem um problema ou caso de conta em andamento.",
  "Payment status": "Status do pagamento",
  "Account access": "Acesso à conta",
  "Report a concern": "Denunciar um problema",
  "Self-service and support routing — not a replacement for private case status.":
    "Autoatendimento e encaminhamento ao suporte — não substitui o status privado de um caso.",
  "Open Help Center": "Abrir a central de ajuda",

  "Follow role- and journey-based, step-by-step education.": "Guias passo a passo de acordo com o seu perfil e a sua jornada.",
  "For seekers, providers, organizations, and Pro operators.": "Para inquilinos, anfitriões, organizações e operadores Pro.",
  "Review an agreement": "Revisar um contrato",
  "Confirm a payment": "Confirmar um pagamento",
  "Set up a Room Passport": "Configurar um Room Passport",
  "Stable, general journeys — not city-specific or case-specific decisions.":
    "Jornadas estáveis e gerais — não decisões específicas de uma cidade ou de um caso.",
  "Browse Guides": "Explorar guias",

  "Provide sourced local context for planning a room search and move.":
    "Fornece contexto local documentado para planejar uma busca e uma mudança.",
  "For local, relocating, and international seekers.": "Para quem busca localmente, está se mudando ou vem de outro país.",
  "Berlin rental basics": "Fundamentos do aluguel em Berlim",
  "Local costs": "Custos locais",
  "Transit context": "Contexto de transporte",
  "No blanket legal, safety, cost, availability, or neighborhood guarantee.":
    "Sem garantia geral legal, de segurança, de custo, de disponibilidade ou de bairro.",
  "Explore City Guides": "Explorar guias de cidades",

  "Recognize, stop, verify, preserve evidence, and escalate high-risk activity.":
    "Reconhecer, interromper, verificar, preservar evidências e escalar atividades de alto risco.",
  "For anyone who's seen a warning sign, at any stage.": "Para quem percebeu um sinal de alerta, em qualquer etapa.",
  "Payment redirection": "Redirecionamento de pagamento",
  Impersonation: "Falsificação de identidade",
  "Unsafe viewings": "Visitas inseguras",
  "Prevention and support — not emergency response or universal safety certification.":
    "Prevenção e apoio — não resposta de emergência nem certificação universal de segurança.",
  "Review Safety Guidance": "Ver orientações de segurança",

  "Explain controlled terms used across Zoiko Rooms and common rental journeys.":
    "Explica termos controlados usados na Zoiko Rooms e em jornadas comuns de aluguel.",
  "For anyone unsure what a term or status actually means.": "Para quem não tem certeza do que um termo ou status realmente significa.",
  "Security deposit": "Depósito de segurança",
  "Direct billing": "Faturamento direto",
  "Plain-language definitions — not legal definitions unless sourced and scoped.":
    "Definições em linguagem simples — não definições jurídicas, salvo quando documentadas e delimitadas.",
  "Open Glossary": "Abrir o glossário",

  "Not sure which of the four resources above fits? Answer a few questions.":
    "Não sabe qual dos quatro recursos acima é o ideal? Responda a algumas perguntas.",
  "For anyone who isn't sure where to start.": "Para quem não sabe por onde começar.",
  Role: "Função",
  Stage: "Etapa",
  "Issue type": "Tipo de problema",
  Urgency: "Urgência",
  "A routing tool — not a decision-maker or guaranteed answer.":
    "Uma ferramenta de encaminhamento — não toma decisões nem garante uma resposta.",
  "Choose Support": "Escolher suporte",

  Current: "Atual",
  Route: "Encaminhamento",

  FAQ: "Perguntas frequentes",
  "Common questions": "Perguntas comuns",
  "Does search here guarantee a correct or complete answer?": "A pesquisa aqui garante uma resposta correta ou completa?",
  "No. Resources give current, sourced guidance — not a guaranteed answer, official legal advice, or an AI expert. For live status, always check your account or live product record.":
    "Não. Os recursos oferecem orientação atual e documentada — não uma resposta garantida, aconselhamento jurídico oficial ou uma especialista em IA. Para o status em tempo real, consulte sempre a sua conta ou o registo do produto.",
  "Do I need to pick a location to get useful guidance?": "Preciso escolher uma localização para obter orientação útil?",
  "No. Location context is optional and only sharpens results where it applies — every destination still gives universal, non-location-specific guidance without it.":
    "Não. O contexto de localização é opcional e só refina os resultados onde se aplica — cada seção ainda oferece orientação geral sem ele.",
  "What if none of the five destinations fit my question?": "E se nenhuma das cinco seções responder à minha pergunta?",
  "Use Choose Support — a short routing tool based on your role, stage, issue type, and urgency — to find the right next step instead of guessing between destinations.":
    "Use Escolher suporte — uma breve ferramenta de encaminhamento baseada na sua função, etapa, tipo de problema e urgência — para encontrar o próximo passo certo em vez de adivinhar entre as seções.",
  "Search, browse, or choose the next step that fits you.": "Pesquise, explore ou escolha o próximo passo ideal para você.",
  "Search Resources": "Pesquisar recursos",
  "Browse by Need": "Explorar por necessidade",

  "Find direct, current guidance for every stage of renting, listing, moving, and operating rooms.":
    "Encontre orientação direta e atual para cada etapa de alugar, anunciar, mudar-se e operar quartos.",
  "Search answers, follow role-based guides, understand city and rental terms, avoid scams, resolve problems, and move into the correct product or support pathway.":
    "Pesquise respostas, siga guias de acordo com o seu perfil, entenda termos de cidades e aluguel, evite fraudes, resolva problemas e siga para o produto ou suporte correto.",
  "Ask a question or search a topic — e.g. deposits, viewing safety, room passport":
    "Faça uma pergunta ou pesquise um tema — por ex. depósitos, segurança em visitas, Room Passport",
  "No resource matches": "Nenhum recurso corresponde a",
  "yet. Try Choose Support below, or browse the five destinations.":
    "ainda. Experimente Escolher suporte abaixo, ou explore as cinco seções.",

  "Room Seeker": "Pessoa em busca de quarto",
  Provider: "Anfitrião",
  Organization: "Organização",
  "Zoiko Rooms Pro Operator": "Operador da Zoiko Rooms Pro",
  "Representative / Advocate": "Representante / defensor(a)",
  "General Visitor": "Visitante geral",

  "Something feel off right now?": "Algo parece errado agora?",
  "Payment redirection, credential requests, a false room, or an unsafe viewing — this overrides normal browsing.":
    "Redirecionamento de pagamento, pedido de credenciais, um quarto falso ou uma visita insegura — isso tem prioridade sobre a navegação normal.",
};

export const resourcesDictionary: LanguageDictionaries = { DE, FR, ES, PT };
