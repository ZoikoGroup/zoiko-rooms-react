import type { LanguageDictionaries } from "../types";

const DE = {
  "Applications, Agreements & Payments": "Anträge, Vereinbarungen & Zahlungen",
  "Applications, decisions, agreements, and payments — separately owned, never blurred together.":
    "Anträge, Entscheidungen, Vereinbarungen und Zahlungen — getrennt verantwortet, niemals vermischt.",
  "Every decision has a named human owner and a criteria version. Every payment shows payer, recipient, route, and status confirmed by the processor — never assumed.":
    "Jede Entscheidung hat eine namentlich benannte verantwortliche Person und eine Kriterienversion. Jede Zahlung zeigt Zahler, Empfänger, Weg und einen vom Zahlungsdienstleister bestätigten Status — nie angenommen.",
  "Decision ownership": "Entscheidungsverantwortung",
  "Authorized human owner, criteria version, reason category, correction, and review.":
    "Autorisierte verantwortliche Person, Kriterienversion, Grundkategorie, Korrektur und Überprüfung.",
  "Payment status discipline": "Disziplin beim Zahlungsstatus",
  'Never shown "paid" until confirmed by the current processor or ledger source.':
    'Zeigt niemals „bezahlt", bis dies vom aktuellen Zahlungsdienstleister oder der Buchungsquelle bestätigt wurde.',
  "Separation of duties": "Funktionstrennung",
  "Payment setup, recipient change, approval, execution, and reconciliation stay distinct permissions.":
    "Zahlungseinrichtung, Empfängeränderung, Genehmigung, Ausführung und Abgleich bleiben getrennte Berechtigungen.",
  "Explore this workflow": "Diesen Arbeitsablauf erkunden",
  "Applications, Agreements and Payments Illustration": "Illustration zu Anträgen, Vereinbarungen und Zahlungen",
  "Generic room financial lifecycle · illustrative, USD": "Allgemeiner Finanzzyklus eines Zimmers · illustrativ, USD",
  "Monthly room rent": "Monatliche Zimmermiete",
  "Security deposit": "Kaution",
  "Required move-in fee": "Erforderliche Einzugsgebühr",
  "Estimated utilities": "Geschätzte Nebenkosten",
  "Known upfront total": "Bekannter Gesamtbetrag im Voraus",
  "Refund state example": "Beispiel für Erstattungsstatus",
  "$600 pending review": "600 $, Prüfung ausstehend",
  "These figures demonstrate how Pro displays charges and statuses. They are not Zoiko Rooms prices, an escrow promise, or a guaranteed refund.":
    "Diese Zahlen zeigen, wie Pro Gebühren und Status darstellt. Es handelt sich nicht um Preise von Zoiko Rooms, ein Treuhandversprechen oder eine garantierte Erstattung.",

  "Assurance & Procurement": "Absicherung & Beschaffung",
  "What a compliance or security reviewer can expect to see": "Was eine Compliance- oder Sicherheitsprüfung erwarten kann",
  "Architecture & data flow": "Architektur & Datenfluss",
  "Components, environments, data categories, storage, access, and deletion paths.":
    "Komponenten, Umgebungen, Datenkategorien, Speicherung, Zugriff und Löschwege.",
  "Identity & access": "Identität & Zugriff",
  "SSO/provisioning, least privilege, elevated access, and periodic review.":
    "SSO/Provisioning, minimale Rechtevergabe, erweiterter Zugriff und regelmäßige Überprüfung.",
  Security: "Sicherheit",
  "Encryption, secrets management, monitoring, incident response, and backups.":
    "Verschlüsselung, Verwaltung von Geheimnissen, Überwachung, Vorfallreaktion und Backups.",
  "Privacy & data processing": "Datenschutz & Datenverarbeitung",
  "Roles, purposes, retention, subprocessors, and participant rights.":
    "Rollen, Zwecke, Aufbewahrung, Unterauftragsverarbeiter und Rechte der Teilnehmenden.",
  Payments: "Zahlungen",
  "Recipients, routes, processor roles, receipts, refunds, and reconciliation.":
    "Empfänger, Zahlungswege, Rollen der Zahlungsdienstleister, Belege, Erstattungen und Abgleich.",
  Accessibility: "Barrierefreiheit",
  "WCAG 2.2 AA approach, test evidence, and remediation process.":
    "WCAG-2.2-AA-Ansatz, Testnachweise und Behebungsprozess.",

  "Compliance & Verification": "Compliance & Verifizierung",
  "Identity, authority, and evidence stay reviewable — not a badge taken on faith.":
    "Identität, Berechtigung und Nachweise bleiben überprüfbar — kein Gütesiegel auf Vertrauensbasis.",
  "Provider identity, listing authority, and room evidence move through a named lifecycle. High-risk changes — bank recipient, legal party, room identity, signer — always route through Action Review.":
    "Anbieteridentität, Listungsberechtigung und Zimmernachweise durchlaufen einen benannten Lebenszyklus. Risikoreiche Änderungen — Bankempfänger, juristische Partei, Zimmeridentität, Unterzeichner — laufen stets über die Aktionsprüfung.",
  "Evidence record": "Nachweisdatensatz",
  "Type, object scope, source, collector, dates, reviewer, and retention — every field sourced.":
    "Typ, Objektumfang, Quelle, Erfasser, Daten, Prüfer und Aufbewahrung — jedes Feld belegt.",
  "Fairness by design": "Fairness von Grund auf",
  "Proportional, time-bound restrictions with human review — no protected-trait profiling.":
    "Verhältnismäßige, zeitlich begrenzte Einschränkungen mit menschlicher Überprüfung — kein Profiling geschützter Merkmale.",
  "Claim boundary": "Aussagegrenze",
  "Zoiko Rooms Pro displays current evidence. It never promises total legal compliance or safety.":
    "Zoiko Rooms Pro zeigt aktuelle Nachweise an. Es verspricht niemals vollständige Rechtskonformität oder Sicherheit.",
  "Explore Compliance & Verification": "Compliance & Verifizierung erkunden",
  "Compliance and Verification Demonstration": "Demonstration zu Compliance & Verifizierung",
  Current: "Aktuell",
  Expiring: "Läuft ab",
  "Information needed": "Information erforderlich",
  Restricted: "Eingeschränkt",
  "Named evidence, reviewer, and review path at every stage":
    "Benannte Nachweise, Prüfer und Prüfweg in jeder Phase",

  "Frequently Asked": "Häufig gestellte Fragen",
  "Capability, authority, and payment questions": "Fragen zu Funktionen, Berechtigungen und Zahlungen",
  "What is Zoiko Rooms Pro?": "Was ist Zoiko Rooms Pro?",
  "A governed operating environment for authorized room providers, portfolio operators, organizations, and distribution partners to manage room records, availability, verification, applications, agreements, payments, institutional distribution, integrations, and exceptions.":
    "Eine geregelte Betriebsumgebung für autorisierte Zimmeranbieter, Portfoliobetreiber, Organisationen und Vertriebspartner zur Verwaltung von Zimmerdatensätzen, Verfügbarkeit, Verifizierung, Anträgen, Vereinbarungen, Zahlungen, institutioneller Verteilung, Integrationen und Ausnahmen.",
  "Who is Zoiko Rooms Pro for?": "Für wen ist Zoiko Rooms Pro gedacht?",
  "Designed for room providers, property managers, institutional partners, and housing operators requiring structured operational workflows and explicit compliance boundaries.":
    "Konzipiert für Zimmeranbieter, Immobilienverwalter, institutionelle Partner und Wohnraumbetreiber, die strukturierte Betriebsabläufe und klare Compliance-Grenzen benötigen.",
  "Does Zoiko Rooms Pro verify every provider or room?": "Verifiziert Zoiko Rooms Pro jeden Anbieter oder jedes Zimmer?",
  "Zoiko Rooms Pro provides structured verification pathways, evidence tracking, and review queues. Every data point maintains clear source and verification history.":
    "Zoiko Rooms Pro bietet strukturierte Verifizierungswege, Nachweisverfolgung und Prüfwarteschlangen. Jeder Datenpunkt behält eine klare Quellen- und Verifizierungshistorie.",
  "Can Pro manage room availability?": "Kann Pro die Zimmerverfügbarkeit verwalten?",
  "Yes, availability is tracked dynamically with source confirmation, timestamped freshness, and automated synchronization across connected systems.":
    "Ja, die Verfügbarkeit wird dynamisch mit Quellenbestätigung, zeitgestempelter Aktualität und automatisierter Synchronisierung über verbundene Systeme verfolgt.",
  "Can Pro manage applications, agreements, and payments?": "Kann Pro Anträge, Vereinbarungen und Zahlungen verwalten?",
  "Yes. Applications, decisions, agreements, and payments remain separately owned with distinct permissions, human review checkpoints, and processor-backed payment statuses.":
    "Ja. Anträge, Entscheidungen, Vereinbarungen und Zahlungen bleiben getrennt verantwortet, mit eigenen Berechtigungen, menschlichen Prüfpunkten und vom Zahlungsdienstleister bestätigten Zahlungsstatus.",
  "Does Pro integrate with other systems?": "Lässt sich Pro mit anderen Systemen integrieren?",
  "Pro offers API access, signed webhooks, and governed connectors for CRM, portfolio feeds, payment ledgers, e-signature tools, and reporting platforms.":
    "Pro bietet API-Zugang, signierte Webhooks und geregelte Konnektoren für CRM, Portfolio-Feeds, Zahlungsbücher, E-Signatur-Tools und Reporting-Plattformen.",
  "Does AI make application or payment decisions?": "Trifft KI Entscheidungen über Anträge oder Zahlungen?",
  "No. Decisions maintain explicit human ownership and versioned criteria. Automated processes only surface data, route queues, and enforce governed rules.":
    "Nein. Entscheidungen bleiben in klarer menschlicher Verantwortung mit versionierten Kriterien. Automatisierte Prozesse zeigen lediglich Daten an, leiten Warteschlangen und setzen geregelte Regeln durch.",

  "Five Capabilities, One Governed Model": "Fünf Funktionen, ein geregeltes Modell",
  "Route to the capability that matches your responsibility": "Zur passenden Funktion für Ihren Verantwortungsbereich",
  "Portfolio & Availability": "Portfolio & Verfügbarkeit",
  "Operate properties, rooms, Room Passports, availability, pricing, restrictions, maintenance, and bulk changes.":
    "Immobilien, Zimmer, Room Passports, Verfügbarkeit, Preise, Einschränkungen, Instandhaltung und Massenänderungen verwalten.",
  "Institutional Distribution": "Institutionelle Verteilung",
  "Distribute approved supply to universities, employers, healthcare, mobility, and public-sector programs.":
    "Genehmigtes Angebot an Universitäten, Arbeitgeber, das Gesundheitswesen, Mobilitäts- und öffentliche Programme verteilen.",
  "Connect approved systems through minimum scopes, source-of-truth rules, idempotency, monitoring, and revocation.":
    "Genehmigte Systeme über minimale Berechtigungen, Regeln zur maßgeblichen Datenquelle, Idempotenz, Überwachung und Widerruf verbinden.",
  "Design the operating model, migration, controls, rollout, support, and reporting around current responsibility.":
    "Betriebsmodell, Migration, Kontrollen, Einführung, Support und Berichterstattung um die aktuelle Verantwortung herum gestalten.",

  "How the Operating Graph Is Built": "Wie der Betriebsgraph aufgebaut wird",
  "From scope to reconfirmation, every step keeps ownership explicit":
    "Vom Umfang bis zur erneuten Bestätigung bleibt die Verantwortung in jedem Schritt eindeutig",
  "Establish scope": "Umfang festlegen",
  "Organizations, portfolios, properties, rooms, markets, programs, roles, systems, and outcomes.":
    "Organisationen, Portfolios, Immobilien, Zimmer, Märkte, Programme, Rollen, Systeme und Ergebnisse.",
  "Confirm authority": "Berechtigung bestätigen",
  "Provider, manager, representative, inventory, signer, payment, decision, and integration authority.":
    "Berechtigung für Anbieter, Verwalter, Vertreter, Bestand, Unterzeichner, Zahlung, Entscheidung und Integration.",
  "Build records": "Datensätze erstellen",
  "Canonical Room Passports, availability, complete costs, policies, evidence, sources, and dates.":
    "Kanonische Room Passports, Verfügbarkeit, vollständige Kosten, Richtlinien, Nachweise, Quellen und Daten.",
  "Configure workflows": "Arbeitsabläufe konfigurieren",
  "Applications, decisions, reservations, agreements, payments, distribution, support, and exceptions.":
    "Anträge, Entscheidungen, Reservierungen, Vereinbarungen, Zahlungen, Verteilung, Support und Ausnahmen.",
  "Connect systems": "Systeme verbinden",
  "Approved identities, portfolio, availability, finance, organization, support, and reporting systems.":
    "Genehmigte Identitäts-, Portfolio-, Verfügbarkeits-, Finanz-, Organisations-, Support- und Reportingsysteme.",
  "Operate with review": "Mit Überprüfung betreiben",
  "Queues, ownership, service levels, action review, separation of duties, and auditable changes.":
    "Warteschlangen, Verantwortung, Servicelevel, Aktionsprüfung, Funktionstrennung und nachvollziehbare Änderungen.",
  "Measure governed outcomes": "Geregelte Ergebnisse messen",
  "Availability, data quality, applications, agreements, payments, service, exceptions, and access.":
    "Verfügbarkeit, Datenqualität, Anträge, Vereinbarungen, Zahlungen, Service, Ausnahmen und Zugriff.",
  "Reconfirm or close": "Erneut bestätigen oder abschließen",
  "Authority, roles, rooms, relationships, connections, retention, open money, and unresolved cases.":
    "Berechtigung, Rollen, Zimmer, Beziehungen, Verbindungen, Aufbewahrung, offene Zahlungen und ungelöste Fälle.",

  "Implementation Model": "Implementierungsmodell",
  "Discovery through exit — every phase has an owner and an exit criterion":
    "Von der Erkundung bis zum Ausstieg — jede Phase hat einen Verantwortlichen und ein Abschlusskriterium",
  Discover: "Erkunden",
  "Organizations, portfolios, markets, workflows, systems, and success criteria.":
    "Organisationen, Portfolios, Märkte, Arbeitsabläufe, Systeme und Erfolgskriterien.",
  "Design & configure": "Gestalten & konfigurieren",
  "Canonical records, authority, roles, statuses, workflows, and connections.":
    "Kanonische Datensätze, Berechtigung, Rollen, Status, Arbeitsabläufe und Verbindungen.",
  "Validate & pilot": "Validieren & pilotieren",
  "Functional, role, data, and payment checks with a controlled rollout.":
    "Funktions-, Rollen-, Daten- und Zahlungsprüfungen mit einer kontrollierten Einführung.",
  "Launch & operate": "Starten & betreiben",
  "Current data, owners, monitoring, support, and a governed operating rhythm.":
    "Aktuelle Daten, Verantwortliche, Überwachung, Support und ein geregelter Betriebsrhythmus.",
  "Renew or exit": "Verlängern oder beenden",
  "Reviewed scope, or a clean exit with no orphaned access, room, or payment.":
    "Überprüfter Umfang oder ein sauberer Ausstieg ohne verwaiste Zugriffe, Zimmer oder Zahlungen.",

  "Institutional Distribution Illustration": "Illustration zur institutionellen Verteilung",
  "Distribute approved supply without transferring hidden responsibility.":
    "Genehmigtes Angebot verteilen, ohne versteckte Verantwortung zu übertragen.",
  "Organization relationships define exact providers, rooms, audience, criteria, funding, and service — provider authority and participant rights are never absorbed into the relationship.":
    "Organisationsbeziehungen legen genau fest, welche Anbieter, Zimmer, Zielgruppe, Kriterien, Finanzierung und Leistung gelten — Anbieterberechtigung und Rechte der Teilnehmenden gehen in der Beziehung nie unter.",
  "Explore Institutional Distribution": "Institutionelle Verteilung erkunden",
  "Provider authority and participant rights stay intact across every market":
    "Anbieterberechtigung und Rechte der Teilnehmenden bleiben in jedem Markt gewahrt",
  "Audience access": "Zielgruppenzugang",
  "Invitation, referral, entitlement, eligibility, allocation, or open discovery — purpose stays explicit.":
    "Einladung, Empfehlung, Anspruch, Berechtigung, Zuweisung oder offene Entdeckung — der Zweck bleibt eindeutig.",
  "Funding & billing": "Finanzierung & Abrechnung",
  "Subsidy, voucher, or direct billing shown with payer, payee, status, and reconciliation.":
    "Zuschuss, Gutschein oder Direktabrechnung mit Zahler, Zahlungsempfänger, Status und Abgleich.",
  "Governed closure": "Geregelter Abschluss",
  "Ending a program releases supply and resolves agreements, payments, and cases cleanly.":
    "Die Beendigung eines Programms gibt Angebot frei und löst Vereinbarungen, Zahlungen und Fälle sauber auf.",
  Universities: "Universitäten",
  "Employers & healthcare": "Arbeitgeber & Gesundheitswesen",
  "Mobility & public sector": "Mobilität & öffentlicher Sektor",

  "Connect current systems without weakening source, security, or operational control.":
    "Aktuelle Systeme verbinden, ohne Quelle, Sicherheit oder Betriebskontrolle zu schwächen.",
  "Every integration has a named owner, minimum scopes, and explicit source-of-truth rules. Consequential writes go through review, idempotency, and audit — never silent system-of-record changes.":
    "Jede Integration hat eine namentlich benannte verantwortliche Person, minimale Berechtigungen und klare Regeln zur maßgeblichen Datenquelle. Folgenreiche Schreibvorgänge durchlaufen Überprüfung, Idempotenz und Prüfpfad — nie stille Änderungen am Referenzsystem.",
  "Explore Integrations & API": "Integrationen & API erkunden",
  "Sample integration status · demonstration data": "Beispielhafter Integrationsstatus · Demonstrationsdaten",
  "Approved categories": "Genehmigte Kategorien",
  "Portfolio, CRM, e-sign, finance, organization, identity, support, and BI systems — governed use only.":
    "Portfolio-, CRM-, E-Signatur-, Finanz-, Organisations-, Identitäts-, Support- und BI-Systeme — nur geregelte Nutzung.",
  "Events & monitoring": "Ereignisse & Überwachung",
  "Signed webhooks, retry, deduplication, freshness, and dead-letter handling.":
    "Signierte Webhooks, Wiederholungsversuche, Deduplizierung, Aktualität und Dead-Letter-Behandlung.",
  "Clean revocation": "Sauberer Widerruf",
  "Stop reads/writes/events, rotate credentials, reconcile, and export or delete data on exit.":
    "Lese-/Schreib-/Ereignisvorgänge stoppen, Zugangsdaten rotieren, abgleichen und Daten beim Austritt exportieren oder löschen.",
  "Portfolio feed": "Portfolio-Feed",
  "Active · synced 4m ago": "Aktiv · synchronisiert vor 4 Min.",
  "Payment ledger": "Zahlungsbuch",
  Active: "Aktiv",
  "CRM connector": "CRM-Konnektor",
  "Degraded · retrying": "Beeinträchtigt · Wiederholung läuft",
  "Legacy import": "Altsystem-Import",
  "Paused by owner": "Vom Verantwortlichen pausiert",

  "Operate properties, rooms, and Room Passports without losing the evidence behind each field.":
    "Immobilien, Zimmer und Room Passports verwalten, ohne die Nachweise hinter jedem Feld zu verlieren.",
  "The Room Passport stays the canonical room record — facts, media, access, condition, costs, and availability are sourced, dated, and owned, even as bulk changes and imports move fast.":
    "Der Room Passport bleibt der maßgebliche Zimmerdatensatz — Fakten, Medien, Zugang, Zustand, Kosten und Verfügbarkeit sind belegt, datiert und verantwortet, auch wenn Massenänderungen und Importe schnell erfolgen.",
  "Explore Portfolio & Availability": "Portfolio & Verfügbarkeit erkunden",
  "Sample Room Passport": "Beispielhafter Room Passport",
  "Sample Room Passport · demonstration data": "Beispielhafter Room Passport · Demonstrationsdaten",
  "Portfolio hierarchy": "Portfoliohierarchie",
  "Organization → portfolio → property → room → offer, with stable identifiers and transfer history.":
    "Organisation → Portfolio → Immobilie → Zimmer → Angebot, mit stabilen Kennungen und Übertragungshistorie.",
  "Bulk actions & imports": "Massenaktionen & Importe",
  "Scope preview, validation, dry run, conflict detection, idempotency, rollback, and audit.":
    "Umfangsvorschau, Validierung, Testlauf, Konflikterkennung, Idempotenz, Rollback und Prüfpfad.",
  "Data-quality queue": "Warteschlange für Datenqualität",
  "Missing, stale, conflicting, expiring, and materially changed fields routed to an owner.":
    "Fehlende, veraltete, widersprüchliche, ablaufende und wesentlich geänderte Felder werden an eine verantwortliche Person weitergeleitet.",
  Address: "Adresse",
  "Regulatory verified": "Behördlich verifiziert",
  "Room dimensions": "Zimmermaße",
  "Document verified": "Dokumentarisch verifiziert",
  "Availability freshness": "Aktualität der Verfügbarkeit",
  "Source confirmed 2h ago": "Quelle vor 2 Std. bestätigt",
  Furnishings: "Möblierung",
  "Provider declared": "Vom Anbieter angegeben",
  "Maintenance status": "Instandhaltungsstatus",
  "Open · owner assigned": "Offen · Verantwortlicher zugewiesen",

  "Roles, Audit & Reporting": "Rollen, Prüfung & Berichterstattung",
  "Authority before capability — for every role, every time":
    "Berechtigung vor Funktion — für jede Rolle, jedes Mal",
  "No user, system, automation, organization, or partner can act beyond their current identity, role, object, program, market, and time scope.":
    "Kein Benutzer, System, keine Automatisierung, Organisation oder Partner kann über die aktuelle Identität, Rolle, das Objekt, Programm, den Markt und Zeitrahmen hinaus handeln.",
  "Organization owner": "Organisationsinhaber",
  "Account configuration and approved markets — not unrestricted participant or payment access.":
    "Kontokonfiguration und genehmigte Märkte — kein uneingeschränkter Zugriff auf Teilnehmende oder Zahlungen.",
  "Portfolio administrator": "Portfolioadministrator",
  "Portfolios, properties, rooms, and operations — not signer or payment authority.":
    "Portfolios, Immobilien, Zimmer und Betrieb — keine Unterzeichnungs- oder Zahlungsbefugnis.",
  "Compliance reviewer": "Compliance-Prüfer",
  "Identity, authority, and evidence review — not payment execution.":
    "Prüfung von Identität, Berechtigung und Nachweisen — keine Zahlungsausführung.",
  "Decision owner": "Entscheidungsverantwortlicher",
  "Named application, allocation, or exception decisions under approved criteria.":
    "Benannte Entscheidungen zu Anträgen, Zuweisungen oder Ausnahmen nach genehmigten Kriterien.",
  "Authorized signer": "Autorisierter Unterzeichner",
  "Signs an exact agreement version for a named legal party.":
    "Unterzeichnet eine genaue Vereinbarungsversion für eine benannte juristische Partei.",
  "Payment approver": "Zahlungsgenehmiger",
  "Approves or executes charges under limits — never self-approval.":
    "Genehmigt oder führt Belastungen innerhalb von Grenzen aus — niemals Selbstgenehmigung.",
  "Integration administrator": "Integrationsadministrator",
  "Connections, scopes, and monitoring — not business decisions.":
    "Verbindungen, Berechtigungen und Überwachung — keine Geschäftsentscheidungen.",
  "Auditor / read-only": "Prüfer / Nur-Lese-Zugriff",
  "Approved records, evidence, and reports — no operational writes.":
    "Genehmigte Datensätze, Nachweise und Berichte — keine operativen Schreibzugriffe.",

  "Unified Operating Model": "Einheitliches Betriebsmodell",
  "One shared operational graph — separate sources, permissions, decisions, money, and evidence.":
    "Ein gemeinsamer Betriebsgraph — getrennte Quellen, Berechtigungen, Entscheidungen, Zahlungen und Nachweise.",
  "A canonical Room Passport links provider authority, room facts, availability, applications, agreements, payments, institutional relationships, support cases, and changes — without flattening them into one unreviewable status.":
    "Ein kanonischer Room Passport verknüpft Anbieterberechtigung, Zimmerfakten, Verfügbarkeit, Anträge, Vereinbarungen, Zahlungen, institutionelle Beziehungen, Support-Fälle und Änderungen — ohne sie zu einem nicht überprüfbaren Status zu verflachen.",
  "Linked records do not mean every role sees every object. Each relationship is filtered by purpose, organization, role, program, participant, room, market, time, and sensitivity.":
    "Verknüpfte Datensätze bedeuten nicht, dass jede Rolle jedes Objekt sieht. Jede Beziehung wird nach Zweck, Organisation, Rolle, Programm, Teilnehmenden, Zimmer, Markt, Zeit und Sensibilität gefiltert.",
  Room: "Zimmer",
  "Provider & portfolio": "Anbieter & Portfolio",
  "Applications & agreements": "Anträge & Vereinbarungen",
  "Payments & refunds": "Zahlungen & Erstattungen",
  "Evidence & authority": "Nachweis & Berechtigung",
  "Institutional programs": "Institutionelle Programme",
  "Integrations & events": "Integrationen & Ereignisse",
  "Support & trust cases": "Support- & Vertrauensfälle",
  "Sourced · scoped · reviewable": "Belegt · abgegrenzt · überprüfbar",

  "Run room portfolios, institutional distribution, and consequential workflows from one governed operating view.":
    "Zimmerportfolios, institutionelle Verteilung und folgenreiche Arbeitsabläufe aus einer geregelten Betriebsansicht steuern.",
  "Keep provider authority, Room Passports, availability, applications, agreements, payments, roles, integrations, and evidence connected — while every source, action, status, limitation, and decision owner stays explicit.":
    "Anbieterberechtigung, Room Passports, Verfügbarkeit, Anträge, Vereinbarungen, Zahlungen, Rollen, Integrationen und Nachweise verbunden halten — während jede Quelle, Aktion, jeder Status, jede Einschränkung und verantwortliche Person eindeutig bleibt.",
  "Explore Pro Capabilities": "Pro-Funktionen erkunden",
  "Zoiko Rooms Pro Operating View": "Betriebsansicht von Zoiko Rooms Pro",
  "Operating Boundary": "Betriebsgrenze",
  "Zoiko Rooms Pro coordinates records and actions. It does not silently become the provider, legal party, payment recipient, eligibility authority, or system of record.":
    "Zoiko Rooms Pro koordiniert Datensätze und Aktionen. Es wird niemals stillschweigend zum Anbieter, zur juristischen Partei, zum Zahlungsempfänger, zur Berechtigungsinstanz oder zum Referenzsystem.",
  "Every module shows the responsible organization, provider, role, source, effective period, current status, limitation, and review path before a consequential action is available.":
    "Jedes Modul zeigt die verantwortliche Organisation, den Anbieter, die Rolle, Quelle, Gültigkeitsdauer, den aktuellen Status, Einschränkungen und den Prüfweg, bevor eine folgenreiche Aktion verfügbar ist.",

  "Costs & Restrictions": "Kosten & Einschränkungen",
  "Complete cost before commitment.": "Vollständige Kosten vor der Verpflichtung.",
  "Rent, deposit, required fees, bills, taxes, discounts, participant contribution, period and effective date are visible together — not disclosed one at a time.":
    "Miete, Kaution, erforderliche Gebühren, Nebenkosten, Steuern, Rabatte, Beitrag der Teilnehmenden, Zeitraum und Gültigkeitsdatum sind gemeinsam sichtbar — nicht nacheinander offengelegt.",
  "Cost Item": "Kostenposten",
  "Illustrative Current Value": "Illustrativer aktueller Wert",
  "$1,450 per month": "1.450 $ pro Monat",
  "$1,450": "1.450 $",
  "$80": "80 $",
  "$120 per month": "120 $ pro Monat",
  "Known recurring total": "Bekannter wiederkehrender Gesamtbetrag",
  "$1,570 per month": "1.570 $ pro Monat",
  "$1,530 before move-in, excluding first month's rent if collected separately":
    "1.530 $ vor Einzug, ohne die erste Monatsmiete, falls diese separat erhoben wird",
  "Effective date": "Gültigkeitsdatum",
  "Illustrative values effective August 1, 2026": "Illustrative Werte gültig ab 1. August 2026",
  "a later change must not silently rewrite an earlier accepted agreement":
    "eine spätere Änderung darf eine zuvor akzeptierte Vereinbarung nicht stillschweigend überschreiben",
  "Example Boundary": "Beispielgrenze",
  "These USD values demonstrate complete-cost presentation and effective dating. They are not Zoiko Rooms prices, market averages, provider quotes, taxes, affordability guidance, investment advice, or a guarantee of future cost.":
    "Diese USD-Werte veranschaulichen die vollständige Kostendarstellung und Gültigkeitsdatierung. Es handelt sich nicht um Preise von Zoiko Rooms, Marktdurchschnitte, Angebote von Anbietern, Steuern, Erschwinglichkeitsempfehlungen, Anlageberatung oder eine Garantie künftiger Kosten.",
  "Occupancy & capacity": "Belegung & Kapazität",
  "Approved maximum and room/bed model, with source and date — no hidden extra occupant.":
    "Genehmigtes Maximum und Zimmer-/Bettmodell, mit Quelle und Datum — kein versteckter zusätzlicher Bewohner.",
  "Stay dates": "Aufenthaltsdaten",
  "Minimum/maximum stay, notice, renewal, extension, early termination and turnover.":
    "Mindest-/Höchstaufenthalt, Kündigungsfrist, Verlängerung, Ausdehnung, vorzeitige Beendigung und Wechsel.",
  "Household & shared living": "Haushalt & gemeinsames Wohnen",
  "Private/shared spaces, current occupancy facts and household rules.":
    "Private/gemeinsame Bereiche, aktuelle Belegungsfakten und Haushaltsregeln.",
  "Age & eligibility": "Alter & Berechtigung",
  "Only where lawful and necessary, with exact rule, source and alternatives.":
    "Nur, wo rechtlich zulässig und erforderlich, mit genauer Regel, Quelle und Alternativen.",
  "Pets & assistance animals": "Haustiere & Assistenztiere",
  "Separate pet preference/rule from assistance-animal process; no disability inference.":
    "Haustierpräferenz/-regel getrennt vom Assistenztierprozess; keine Rückschlüsse auf Behinderung.",
  "Protected traits": "Geschützte Merkmale",
  "Never used for ranking, matching, filtering or eligibility outside a narrowly authorized lawful program.":
    "Werden niemals für Rangfolge, Zuordnung, Filterung oder Berechtigung außerhalb eines eng autorisierten, rechtmäßigen Programms verwendet.",
  "Review Cost Model": "Kostenmodell prüfen",

  "Availability Ledger": "Verfügbarkeitsbuch",
  "Availability is a ledger, not a single toggle.": "Verfügbarkeit ist ein Buchungssystem, kein einzelner Schalter.",
  "Available capacity for a room and date range equals current authorized capacity minus overlapping agreements, active reservations, accepted allocations, unexpired holds, maintenance blocks, owner use, and channel commitments.":
    "Die verfügbare Kapazität für ein Zimmer und einen Zeitraum entspricht der aktuellen genehmigten Kapazität abzüglich überschneidender Vereinbarungen, aktiver Reservierungen, akzeptierter Zuweisungen, nicht abgelaufener Reservierungssperren, Instandhaltungssperren, Eigennutzung und Kanalverpflichtungen.",
  "Open capacity": "Offene Kapazität",
  "Room/bed capacity available for a defined date range and authorized channel.":
    "Zimmer-/Bettkapazität, verfügbar für einen festgelegten Zeitraum und genehmigten Kanal.",
  "Soft hold": "Vorläufige Reservierungssperre",
  "Temporary non-binding hold pending a named workflow, with a required expiry and owner.":
    "Vorübergehende, unverbindliche Sperre bis zum Abschluss eines benannten Arbeitsablaufs, mit erforderlichem Ablaufdatum und Verantwortlichem.",
  Reservation: "Reservierung",
  "Approved temporary commitment with conditions, amount, and cancellation rules.":
    "Genehmigte, vorübergehende Verpflichtung mit Bedingungen, Betrag und Stornoregeln.",
  "Room proposed or assigned under an authorized organization program.":
    "Zimmer, das im Rahmen eines genehmigten Organisationsprogramms vorgeschlagen oder zugewiesen wurde.",
  "Agreement commitment": "Vereinbarungsverpflichtung",
  "Signed or otherwise binding occupancy period with termination/change rules.":
    "Unterzeichneter oder anderweitig verbindlicher Belegungszeitraum mit Kündigungs-/Änderungsregeln.",
  "Owner / provider use": "Nutzung durch Eigentümer / Anbieter",
  "Approved period unavailable to market/program channels, with a reason category.":
    "Genehmigter Zeitraum, nicht verfügbar für Markt-/Programmkanäle, mit Grundkategorie.",
  "Maintenance block": "Instandhaltungssperre",
  "Affected capacity or feature unavailable during an issue or remediation.":
    "Betroffene Kapazität oder Ausstattung während eines Problems oder einer Behebung nicht verfügbar.",
  "Channel block / quota": "Kanalsperre / Kontingent",
  "Capacity reserved or withheld for a specific public or institutional channel.":
    "Kapazität, die für einen bestimmten öffentlichen oder institutionellen Kanal reserviert oder zurückgehalten wird.",
  "Unknown / stale": "Unbekannt / veraltet",
  "Availability that cannot currently be trusted for a consequential action.":
    "Verfügbarkeit, der derzeit für eine folgenreiche Aktion nicht vertraut werden kann.",
  Available: "Verfügbar",
  Limited: "Begrenzt",
  "On hold": "Zurückgestellt",
  Reserved: "Reserviert",
  Allocated: "Zugewiesen",
  "Agreement pending": "Vereinbarung ausstehend",
  "Occupied / agreement active": "Belegt / Vereinbarung aktiv",
  "Maintenance / blocked": "Instandhaltung / gesperrt",
  Unavailable: "Nicht verfügbar",
  "Availability status shown to participants — always with dates and conditions, never a bare label:":
    "Verfügbarkeitsstatus, der Teilnehmenden angezeigt wird — immer mit Daten und Bedingungen, nie als bloße Bezeichnung:",
  "No Overbooking Promise": "Kein Überbuchungsversprechen",
  "The design uses a date-based commitment ledger, capacity and overlap checks, concurrency controls, source reconciliation, and Action Review. It must not promise that overbooking is impossible.":
    "Das Design verwendet ein datumsbasiertes Verpflichtungsbuch, Kapazitäts- und Überschneidungsprüfungen, Nebenläufigkeitskontrollen, Quellenabgleich und die Aktionsprüfung. Es darf nicht versprechen, dass Überbuchung unmöglich ist.",
  "Explore Availability": "Verfügbarkeit erkunden",
};

const FR = {
  "Applications, Agreements & Payments": "Candidatures, accords et paiements",
  "Applications, decisions, agreements, and payments — separately owned, never blurred together.":
    "Candidatures, décisions, accords et paiements — chacun sous une responsabilité distincte, jamais confondus.",
  "Every decision has a named human owner and a criteria version. Every payment shows payer, recipient, route, and status confirmed by the processor — never assumed.":
    "Chaque décision est attribuée à une personne responsable nommée et à une version de critères. Chaque paiement indique le payeur, le bénéficiaire, la voie et un statut confirmé par le prestataire de paiement — jamais supposé.",
  "Decision ownership": "Responsabilité des décisions",
  "Authorized human owner, criteria version, reason category, correction, and review.":
    "Responsable humain autorisé, version des critères, catégorie de motif, correction et révision.",
  "Payment status discipline": "Rigueur sur le statut des paiements",
  'Never shown "paid" until confirmed by the current processor or ledger source.':
    "N'affiche jamais « payé » tant que ce n'est pas confirmé par le prestataire de paiement actuel ou la source du registre.",
  "Separation of duties": "Séparation des tâches",
  "Payment setup, recipient change, approval, execution, and reconciliation stay distinct permissions.":
    "La configuration des paiements, le changement de bénéficiaire, l'approbation, l'exécution et le rapprochement restent des autorisations distinctes.",
  "Explore this workflow": "Découvrir ce processus",
  "Applications, Agreements and Payments Illustration": "Illustration des candidatures, accords et paiements",
  "Generic room financial lifecycle · illustrative, USD": "Cycle financier générique d'une chambre · à titre indicatif, USD",
  "Monthly room rent": "Loyer mensuel de la chambre",
  "Security deposit": "Dépôt de garantie",
  "Required move-in fee": "Frais d'entrée obligatoires",
  "Estimated utilities": "Charges estimées",
  "Known upfront total": "Total initial connu",
  "Refund state example": "Exemple de statut de remboursement",
  "$600 pending review": "600 $, en attente d'examen",
  "These figures demonstrate how Pro displays charges and statuses. They are not Zoiko Rooms prices, an escrow promise, or a guaranteed refund.":
    "Ces chiffres illustrent la manière dont Pro affiche les frais et les statuts. Il ne s'agit pas de tarifs Zoiko Rooms, d'une promesse de séquestre ni d'un remboursement garanti.",

  "Assurance & Procurement": "Assurance et approvisionnement",
  "What a compliance or security reviewer can expect to see": "Ce qu'un auditeur conformité ou sécurité peut s'attendre à voir",
  "Architecture & data flow": "Architecture et flux de données",
  "Components, environments, data categories, storage, access, and deletion paths.":
    "Composants, environnements, catégories de données, stockage, accès et procédures de suppression.",
  "Identity & access": "Identité et accès",
  "SSO/provisioning, least privilege, elevated access, and periodic review.":
    "SSO/provisionnement, moindre privilège, accès élevé et revue périodique.",
  Security: "Sécurité",
  "Encryption, secrets management, monitoring, incident response, and backups.":
    "Chiffrement, gestion des secrets, surveillance, réponse aux incidents et sauvegardes.",
  "Privacy & data processing": "Confidentialité et traitement des données",
  "Roles, purposes, retention, subprocessors, and participant rights.":
    "Rôles, finalités, conservation, sous-traitants et droits des participants.",
  Payments: "Paiements",
  "Recipients, routes, processor roles, receipts, refunds, and reconciliation.":
    "Bénéficiaires, voies de paiement, rôles des prestataires, reçus, remboursements et rapprochement.",
  Accessibility: "Accessibilité",
  "WCAG 2.2 AA approach, test evidence, and remediation process.":
    "Approche WCAG 2.2 AA, preuves de tests et processus de correction.",

  "Compliance & Verification": "Conformité et vérification",
  "Identity, authority, and evidence stay reviewable — not a badge taken on faith.":
    "L'identité, l'autorité et les preuves restent vérifiables — pas un simple label de confiance.",
  "Provider identity, listing authority, and room evidence move through a named lifecycle. High-risk changes — bank recipient, legal party, room identity, signer — always route through Action Review.":
    "L'identité du bailleur, l'autorité de mise en ligne et les preuves de la chambre suivent un cycle de vie nommé. Les modifications à haut risque — bénéficiaire bancaire, partie légale, identité de la chambre, signataire — passent toujours par la révision des actions.",
  "Evidence record": "Registre de preuves",
  "Type, object scope, source, collector, dates, reviewer, and retention — every field sourced.":
    "Type, périmètre de l'objet, source, collecteur, dates, réviseur et conservation — chaque champ est sourcé.",
  "Fairness by design": "Équité dès la conception",
  "Proportional, time-bound restrictions with human review — no protected-trait profiling.":
    "Restrictions proportionnées et limitées dans le temps avec révision humaine — aucun profilage de caractéristiques protégées.",
  "Claim boundary": "Limite des affirmations",
  "Zoiko Rooms Pro displays current evidence. It never promises total legal compliance or safety.":
    "Zoiko Rooms Pro affiche les preuves actuelles. Il ne promet jamais une conformité légale ou une sécurité totale.",
  "Explore Compliance & Verification": "Découvrir Conformité et vérification",
  "Compliance and Verification Demonstration": "Démonstration de conformité et vérification",
  Current: "Actuel",
  Expiring: "Expire bientôt",
  "Information needed": "Information requise",
  Restricted: "Restreint",
  "Named evidence, reviewer, and review path at every stage":
    "Preuve nommée, réviseur et parcours de révision à chaque étape",

  "Frequently Asked": "Questions fréquentes",
  "Capability, authority, and payment questions": "Questions sur les fonctionnalités, l'autorité et les paiements",
  "What is Zoiko Rooms Pro?": "Qu'est-ce que Zoiko Rooms Pro ?",
  "A governed operating environment for authorized room providers, portfolio operators, organizations, and distribution partners to manage room records, availability, verification, applications, agreements, payments, institutional distribution, integrations, and exceptions.":
    "Un environnement d'exploitation encadré permettant aux bailleurs autorisés, gestionnaires de portefeuille, organisations et partenaires de distribution de gérer les fiches chambres, la disponibilité, la vérification, les candidatures, les accords, les paiements, la distribution institutionnelle, les intégrations et les exceptions.",
  "Who is Zoiko Rooms Pro for?": "À qui s'adresse Zoiko Rooms Pro ?",
  "Designed for room providers, property managers, institutional partners, and housing operators requiring structured operational workflows and explicit compliance boundaries.":
    "Conçu pour les bailleurs, gestionnaires immobiliers, partenaires institutionnels et exploitants de logements nécessitant des processus opérationnels structurés et des limites de conformité explicites.",
  "Does Zoiko Rooms Pro verify every provider or room?": "Zoiko Rooms Pro vérifie-t-il chaque bailleur ou chaque chambre ?",
  "Zoiko Rooms Pro provides structured verification pathways, evidence tracking, and review queues. Every data point maintains clear source and verification history.":
    "Zoiko Rooms Pro fournit des parcours de vérification structurés, un suivi des preuves et des files de révision. Chaque donnée conserve une source et un historique de vérification clairs.",
  "Can Pro manage room availability?": "Pro peut-il gérer la disponibilité des chambres ?",
  "Yes, availability is tracked dynamically with source confirmation, timestamped freshness, and automated synchronization across connected systems.":
    "Oui, la disponibilité est suivie dynamiquement avec confirmation de la source, actualisation horodatée et synchronisation automatisée entre systèmes connectés.",
  "Can Pro manage applications, agreements, and payments?": "Pro peut-il gérer les candidatures, les accords et les paiements ?",
  "Yes. Applications, decisions, agreements, and payments remain separately owned with distinct permissions, human review checkpoints, and processor-backed payment statuses.":
    "Oui. Les candidatures, décisions, accords et paiements restent sous des responsabilités distinctes, avec des autorisations séparées, des points de contrôle humains et des statuts de paiement confirmés par le prestataire.",
  "Does Pro integrate with other systems?": "Pro s'intègre-t-il à d'autres systèmes ?",
  "Pro offers API access, signed webhooks, and governed connectors for CRM, portfolio feeds, payment ledgers, e-signature tools, and reporting platforms.":
    "Pro propose un accès API, des webhooks signés et des connecteurs encadrés pour les CRM, les flux de portefeuille, les registres de paiement, les outils de signature électronique et les plateformes de reporting.",
  "Does AI make application or payment decisions?": "L'IA prend-elle des décisions sur les candidatures ou les paiements ?",
  "No. Decisions maintain explicit human ownership and versioned criteria. Automated processes only surface data, route queues, and enforce governed rules.":
    "Non. Les décisions conservent une responsabilité humaine explicite et des critères versionnés. Les processus automatisés se contentent d'afficher des données, d'acheminer les files et de faire respecter des règles encadrées.",

  "Five Capabilities, One Governed Model": "Cinq fonctionnalités, un modèle encadré",
  "Route to the capability that matches your responsibility": "Accédez à la fonctionnalité correspondant à votre responsabilité",
  "Portfolio & Availability": "Portefeuille et disponibilité",
  "Operate properties, rooms, Room Passports, availability, pricing, restrictions, maintenance, and bulk changes.":
    "Gérer les propriétés, les chambres, les Room Passports, la disponibilité, les tarifs, les restrictions, la maintenance et les modifications en masse.",
  "Institutional Distribution": "Distribution institutionnelle",
  "Distribute approved supply to universities, employers, healthcare, mobility, and public-sector programs.":
    "Distribuer l'offre approuvée aux universités, employeurs, programmes de santé, de mobilité et du secteur public.",
  "Connect approved systems through minimum scopes, source-of-truth rules, idempotency, monitoring, and revocation.":
    "Connecter des systèmes approuvés via des autorisations minimales, des règles de source de référence, l'idempotence, la surveillance et la révocation.",
  "Design the operating model, migration, controls, rollout, support, and reporting around current responsibility.":
    "Concevoir le modèle d'exploitation, la migration, les contrôles, le déploiement, le support et le reporting autour de la responsabilité actuelle.",

  "How the Operating Graph Is Built": "Comment le graphe opérationnel est construit",
  "From scope to reconfirmation, every step keeps ownership explicit":
    "Du périmètre à la reconfirmation, chaque étape conserve une responsabilité explicite",
  "Establish scope": "Définir le périmètre",
  "Organizations, portfolios, properties, rooms, markets, programs, roles, systems, and outcomes.":
    "Organisations, portefeuilles, propriétés, chambres, marchés, programmes, rôles, systèmes et résultats.",
  "Confirm authority": "Confirmer l'autorité",
  "Provider, manager, representative, inventory, signer, payment, decision, and integration authority.":
    "Autorité du bailleur, du gestionnaire, du représentant, de l'inventaire, du signataire, du paiement, de la décision et de l'intégration.",
  "Build records": "Constituer les fiches",
  "Canonical Room Passports, availability, complete costs, policies, evidence, sources, and dates.":
    "Room Passports canoniques, disponibilité, coûts complets, politiques, preuves, sources et dates.",
  "Configure workflows": "Configurer les processus",
  "Applications, decisions, reservations, agreements, payments, distribution, support, and exceptions.":
    "Candidatures, décisions, réservations, accords, paiements, distribution, support et exceptions.",
  "Connect systems": "Connecter les systèmes",
  "Approved identities, portfolio, availability, finance, organization, support, and reporting systems.":
    "Systèmes approuvés d'identité, de portefeuille, de disponibilité, de finance, d'organisation, de support et de reporting.",
  "Operate with review": "Opérer avec révision",
  "Queues, ownership, service levels, action review, separation of duties, and auditable changes.":
    "Files d'attente, responsabilité, niveaux de service, révision des actions, séparation des tâches et modifications auditables.",
  "Measure governed outcomes": "Mesurer les résultats encadrés",
  "Availability, data quality, applications, agreements, payments, service, exceptions, and access.":
    "Disponibilité, qualité des données, candidatures, accords, paiements, service, exceptions et accès.",
  "Reconfirm or close": "Reconfirmer ou clôturer",
  "Authority, roles, rooms, relationships, connections, retention, open money, and unresolved cases.":
    "Autorité, rôles, chambres, relations, connexions, conservation, sommes en attente et dossiers non résolus.",

  "Implementation Model": "Modèle de mise en œuvre",
  "Discovery through exit — every phase has an owner and an exit criterion":
    "De la découverte à la sortie — chaque phase a un responsable et un critère de sortie",
  Discover: "Découvrir",
  "Organizations, portfolios, markets, workflows, systems, and success criteria.":
    "Organisations, portefeuilles, marchés, processus, systèmes et critères de réussite.",
  "Design & configure": "Concevoir et configurer",
  "Canonical records, authority, roles, statuses, workflows, and connections.":
    "Fiches canoniques, autorité, rôles, statuts, processus et connexions.",
  "Validate & pilot": "Valider et piloter",
  "Functional, role, data, and payment checks with a controlled rollout.":
    "Contrôles fonctionnels, de rôles, de données et de paiement, avec un déploiement contrôlé.",
  "Launch & operate": "Lancer et exploiter",
  "Current data, owners, monitoring, support, and a governed operating rhythm.":
    "Données à jour, responsables, surveillance, support et un rythme opérationnel encadré.",
  "Renew or exit": "Renouveler ou sortir",
  "Reviewed scope, or a clean exit with no orphaned access, room, or payment.":
    "Périmètre revu, ou une sortie propre sans accès, chambre ou paiement orphelin.",

  "Institutional Distribution Illustration": "Illustration de la distribution institutionnelle",
  "Distribute approved supply without transferring hidden responsibility.":
    "Distribuer l'offre approuvée sans transférer de responsabilité cachée.",
  "Organization relationships define exact providers, rooms, audience, criteria, funding, and service — provider authority and participant rights are never absorbed into the relationship.":
    "Les relations avec l'organisation définissent précisément les bailleurs, les chambres, le public, les critères, le financement et le service — l'autorité du bailleur et les droits des participants ne sont jamais absorbés par la relation.",
  "Explore Institutional Distribution": "Découvrir la distribution institutionnelle",
  "Provider authority and participant rights stay intact across every market":
    "L'autorité du bailleur et les droits des participants restent intacts sur chaque marché",
  "Audience access": "Accès du public",
  "Invitation, referral, entitlement, eligibility, allocation, or open discovery — purpose stays explicit.":
    "Invitation, recommandation, droit, éligibilité, attribution ou découverte ouverte — la finalité reste explicite.",
  "Funding & billing": "Financement et facturation",
  "Subsidy, voucher, or direct billing shown with payer, payee, status, and reconciliation.":
    "Subvention, bon ou facturation directe affichés avec le payeur, le bénéficiaire, le statut et le rapprochement.",
  "Governed closure": "Clôture encadrée",
  "Ending a program releases supply and resolves agreements, payments, and cases cleanly.":
    "La fin d'un programme libère l'offre et résout proprement les accords, paiements et dossiers.",
  Universities: "Universités",
  "Employers & healthcare": "Employeurs et santé",
  "Mobility & public sector": "Mobilité et secteur public",

  "Connect current systems without weakening source, security, or operational control.":
    "Connecter les systèmes actuels sans affaiblir la source, la sécurité ou le contrôle opérationnel.",
  "Every integration has a named owner, minimum scopes, and explicit source-of-truth rules. Consequential writes go through review, idempotency, and audit — never silent system-of-record changes.":
    "Chaque intégration a un responsable nommé, des autorisations minimales et des règles explicites de source de référence. Les écritures à conséquence passent par la révision, l'idempotence et l'audit — jamais de modification silencieuse du système de référence.",
  "Explore Integrations & API": "Découvrir Intégrations et API",
  "Sample integration status · demonstration data": "Exemple de statut d'intégration · données de démonstration",
  "Approved categories": "Catégories approuvées",
  "Portfolio, CRM, e-sign, finance, organization, identity, support, and BI systems — governed use only.":
    "Systèmes de portefeuille, CRM, signature électronique, finance, organisation, identité, support et BI — usage encadré uniquement.",
  "Events & monitoring": "Événements et surveillance",
  "Signed webhooks, retry, deduplication, freshness, and dead-letter handling.":
    "Webhooks signés, nouvelles tentatives, déduplication, actualisation et gestion des messages en échec.",
  "Clean revocation": "Révocation propre",
  "Stop reads/writes/events, rotate credentials, reconcile, and export or delete data on exit.":
    "Arrêter les lectures/écritures/événements, faire tourner les identifiants, effectuer un rapprochement, puis exporter ou supprimer les données à la sortie.",
  "Portfolio feed": "Flux de portefeuille",
  "Active · synced 4m ago": "Actif · synchronisé il y a 4 min",
  "Payment ledger": "Registre de paiement",
  Active: "Actif",
  "CRM connector": "Connecteur CRM",
  "Degraded · retrying": "Dégradé · nouvelle tentative en cours",
  "Legacy import": "Import hérité",
  "Paused by owner": "Suspendu par le responsable",

  "Operate properties, rooms, and Room Passports without losing the evidence behind each field.":
    "Gérer les propriétés, les chambres et les Room Passports sans perdre les preuves derrière chaque champ.",
  "The Room Passport stays the canonical room record — facts, media, access, condition, costs, and availability are sourced, dated, and owned, even as bulk changes and imports move fast.":
    "Le Room Passport reste la fiche chambre canonique — faits, médias, accès, état, coûts et disponibilité sont sourcés, datés et attribués, même lorsque les modifications en masse et les imports sont rapides.",
  "Explore Portfolio & Availability": "Découvrir Portefeuille et disponibilité",
  "Sample Room Passport": "Exemple de Room Passport",
  "Sample Room Passport · demonstration data": "Exemple de Room Passport · données de démonstration",
  "Portfolio hierarchy": "Hiérarchie du portefeuille",
  "Organization → portfolio → property → room → offer, with stable identifiers and transfer history.":
    "Organisation → portefeuille → propriété → chambre → offre, avec identifiants stables et historique des transferts.",
  "Bulk actions & imports": "Actions en masse et imports",
  "Scope preview, validation, dry run, conflict detection, idempotency, rollback, and audit.":
    "Aperçu du périmètre, validation, simulation, détection de conflits, idempotence, retour arrière et audit.",
  "Data-quality queue": "File de qualité des données",
  "Missing, stale, conflicting, expiring, and materially changed fields routed to an owner.":
    "Les champs manquants, obsolètes, contradictoires, expirants ou modifiés de façon significative sont acheminés vers un responsable.",
  Address: "Adresse",
  "Regulatory verified": "Vérifié réglementairement",
  "Room dimensions": "Dimensions de la chambre",
  "Document verified": "Vérifié par document",
  "Availability freshness": "Actualité de la disponibilité",
  "Source confirmed 2h ago": "Source confirmée il y a 2 h",
  Furnishings: "Ameublement",
  "Provider declared": "Déclaré par le bailleur",
  "Maintenance status": "Statut de maintenance",
  "Open · owner assigned": "Ouvert · responsable assigné",

  "Roles, Audit & Reporting": "Rôles, audit et reporting",
  "Authority before capability — for every role, every time":
    "L'autorité avant la fonctionnalité — pour chaque rôle, à chaque fois",
  "No user, system, automation, organization, or partner can act beyond their current identity, role, object, program, market, and time scope.":
    "Aucun utilisateur, système, automatisation, organisation ou partenaire ne peut agir au-delà de son identité, rôle, objet, programme, marché et période actuels.",
  "Organization owner": "Propriétaire de l'organisation",
  "Account configuration and approved markets — not unrestricted participant or payment access.":
    "Configuration du compte et marchés approuvés — pas d'accès illimité aux participants ou aux paiements.",
  "Portfolio administrator": "Administrateur de portefeuille",
  "Portfolios, properties, rooms, and operations — not signer or payment authority.":
    "Portefeuilles, propriétés, chambres et opérations — pas d'autorité de signature ou de paiement.",
  "Compliance reviewer": "Réviseur conformité",
  "Identity, authority, and evidence review — not payment execution.":
    "Révision de l'identité, de l'autorité et des preuves — pas d'exécution de paiement.",
  "Decision owner": "Responsable de la décision",
  "Named application, allocation, or exception decisions under approved criteria.":
    "Décisions nommées de candidature, d'attribution ou d'exception selon des critères approuvés.",
  "Authorized signer": "Signataire autorisé",
  "Signs an exact agreement version for a named legal party.":
    "Signe une version exacte de l'accord pour une partie légale nommée.",
  "Payment approver": "Approbateur de paiement",
  "Approves or executes charges under limits — never self-approval.":
    "Approuve ou exécute des débits dans des limites définies — jamais d'auto-approbation.",
  "Integration administrator": "Administrateur d'intégration",
  "Connections, scopes, and monitoring — not business decisions.":
    "Connexions, autorisations et surveillance — pas de décisions métier.",
  "Auditor / read-only": "Auditeur / lecture seule",
  "Approved records, evidence, and reports — no operational writes.":
    "Fiches approuvées, preuves et rapports — aucune écriture opérationnelle.",

  "Unified Operating Model": "Modèle opérationnel unifié",
  "One shared operational graph — separate sources, permissions, decisions, money, and evidence.":
    "Un graphe opérationnel partagé — sources, autorisations, décisions, finances et preuves distinctes.",
  "A canonical Room Passport links provider authority, room facts, availability, applications, agreements, payments, institutional relationships, support cases, and changes — without flattening them into one unreviewable status.":
    "Un Room Passport canonique relie l'autorité du bailleur, les faits de la chambre, la disponibilité, les candidatures, les accords, les paiements, les relations institutionnelles, les dossiers de support et les modifications — sans les réduire à un statut unique non vérifiable.",
  "Linked records do not mean every role sees every object. Each relationship is filtered by purpose, organization, role, program, participant, room, market, time, and sensitivity.":
    "Des fiches liées ne signifient pas que chaque rôle voit chaque objet. Chaque relation est filtrée selon la finalité, l'organisation, le rôle, le programme, le participant, la chambre, le marché, le temps et la sensibilité.",
  Room: "Chambre",
  "Provider & portfolio": "Bailleur et portefeuille",
  "Applications & agreements": "Candidatures et accords",
  "Payments & refunds": "Paiements et remboursements",
  "Evidence & authority": "Preuve et autorité",
  "Institutional programs": "Programmes institutionnels",
  "Integrations & events": "Intégrations et événements",
  "Support & trust cases": "Dossiers de support et de confiance",
  "Sourced · scoped · reviewable": "Sourcé · délimité · vérifiable",

  "Run room portfolios, institutional distribution, and consequential workflows from one governed operating view.":
    "Gérer les portefeuilles de chambres, la distribution institutionnelle et les processus à conséquence depuis une vue d'exploitation encadrée unique.",
  "Keep provider authority, Room Passports, availability, applications, agreements, payments, roles, integrations, and evidence connected — while every source, action, status, limitation, and decision owner stays explicit.":
    "Garder l'autorité du bailleur, les Room Passports, la disponibilité, les candidatures, les accords, les paiements, les rôles, les intégrations et les preuves connectés — tandis que chaque source, action, statut, limite et responsable de décision reste explicite.",
  "Explore Pro Capabilities": "Découvrir les fonctionnalités Pro",
  "Zoiko Rooms Pro Operating View": "Vue d'exploitation de Zoiko Rooms Pro",
  "Operating Boundary": "Limite opérationnelle",
  "Zoiko Rooms Pro coordinates records and actions. It does not silently become the provider, legal party, payment recipient, eligibility authority, or system of record.":
    "Zoiko Rooms Pro coordonne les fiches et les actions. Il ne devient jamais silencieusement le bailleur, la partie légale, le bénéficiaire du paiement, l'autorité d'éligibilité ou le système de référence.",
  "Every module shows the responsible organization, provider, role, source, effective period, current status, limitation, and review path before a consequential action is available.":
    "Chaque module affiche l'organisation responsable, le bailleur, le rôle, la source, la période de validité, le statut actuel, les limites et le parcours de révision avant qu'une action à conséquence ne soit disponible.",

  "Costs & Restrictions": "Coûts et restrictions",
  "Complete cost before commitment.": "Coût complet avant tout engagement.",
  "Rent, deposit, required fees, bills, taxes, discounts, participant contribution, period and effective date are visible together — not disclosed one at a time.":
    "Le loyer, le dépôt, les frais obligatoires, les charges, les taxes, les remises, la contribution du participant, la période et la date d'effet sont visibles ensemble — non révélés un par un.",
  "Cost Item": "Poste de coût",
  "Illustrative Current Value": "Valeur actuelle indicative",
  "$1,450 per month": "1 450 $ par mois",
  "$1,450": "1 450 $",
  "$80": "80 $",
  "$120 per month": "120 $ par mois",
  "Known recurring total": "Total récurrent connu",
  "$1,570 per month": "1 570 $ par mois",
  "$1,530 before move-in, excluding first month's rent if collected separately":
    "1 530 $ avant l'emménagement, hors loyer du premier mois s'il est perçu séparément",
  "Effective date": "Date d'effet",
  "Illustrative values effective August 1, 2026": "Valeurs indicatives en vigueur au 1er août 2026",
  "a later change must not silently rewrite an earlier accepted agreement":
    "une modification ultérieure ne doit pas réécrire silencieusement un accord précédemment accepté",
  "Example Boundary": "Limite d'exemple",
  "These USD values demonstrate complete-cost presentation and effective dating. They are not Zoiko Rooms prices, market averages, provider quotes, taxes, affordability guidance, investment advice, or a guarantee of future cost.":
    "Ces montants en USD illustrent la présentation du coût complet et la datation d'effet. Il ne s'agit pas de tarifs Zoiko Rooms, de moyennes du marché, de devis de bailleurs, de taxes, de conseils d'accessibilité financière, de conseils en investissement, ni d'une garantie de coût futur.",
  "Occupancy & capacity": "Occupation et capacité",
  "Approved maximum and room/bed model, with source and date — no hidden extra occupant.":
    "Maximum approuvé et modèle chambre/lit, avec source et date — aucun occupant supplémentaire caché.",
  "Stay dates": "Dates de séjour",
  "Minimum/maximum stay, notice, renewal, extension, early termination and turnover.":
    "Durée minimale/maximale, préavis, renouvellement, prolongation, résiliation anticipée et rotation.",
  "Household & shared living": "Foyer et vie partagée",
  "Private/shared spaces, current occupancy facts and household rules.":
    "Espaces privés/partagés, faits d'occupation actuels et règles du foyer.",
  "Age & eligibility": "Âge et éligibilité",
  "Only where lawful and necessary, with exact rule, source and alternatives.":
    "Uniquement lorsque cela est légal et nécessaire, avec règle exacte, source et alternatives.",
  "Pets & assistance animals": "Animaux de compagnie et d'assistance",
  "Separate pet preference/rule from assistance-animal process; no disability inference.":
    "Séparer la préférence/règle relative aux animaux de compagnie du processus des animaux d'assistance ; aucune déduction de handicap.",
  "Protected traits": "Caractéristiques protégées",
  "Never used for ranking, matching, filtering or eligibility outside a narrowly authorized lawful program.":
    "Jamais utilisées pour le classement, l'appariement, le filtrage ou l'éligibilité en dehors d'un programme légal strictement autorisé.",
  "Review Cost Model": "Examiner le modèle de coût",

  "Availability Ledger": "Registre de disponibilité",
  "Availability is a ledger, not a single toggle.": "La disponibilité est un registre, pas un simple interrupteur.",
  "Available capacity for a room and date range equals current authorized capacity minus overlapping agreements, active reservations, accepted allocations, unexpired holds, maintenance blocks, owner use, and channel commitments.":
    "La capacité disponible pour une chambre et une plage de dates correspond à la capacité autorisée actuelle, moins les accords qui se chevauchent, les réservations actives, les attributions acceptées, les blocages non expirés, les blocages de maintenance, l'usage propriétaire et les engagements de canal.",
  "Open capacity": "Capacité ouverte",
  "Room/bed capacity available for a defined date range and authorized channel.":
    "Capacité chambre/lit disponible pour une plage de dates définie et un canal autorisé.",
  "Soft hold": "Blocage temporaire",
  "Temporary non-binding hold pending a named workflow, with a required expiry and owner.":
    "Blocage temporaire non contraignant en attente d'un processus nommé, avec une échéance et un responsable requis.",
  Reservation: "Réservation",
  "Approved temporary commitment with conditions, amount, and cancellation rules.":
    "Engagement temporaire approuvé avec conditions, montant et règles d'annulation.",
  "Room proposed or assigned under an authorized organization program.":
    "Chambre proposée ou attribuée dans le cadre d'un programme d'organisation autorisé.",
  "Agreement commitment": "Engagement contractuel",
  "Signed or otherwise binding occupancy period with termination/change rules.":
    "Période d'occupation signée ou autrement contraignante, avec règles de résiliation/modification.",
  "Owner / provider use": "Usage du propriétaire / bailleur",
  "Approved period unavailable to market/program channels, with a reason category.":
    "Période approuvée indisponible pour les canaux de marché/programme, avec une catégorie de motif.",
  "Maintenance block": "Blocage de maintenance",
  "Affected capacity or feature unavailable during an issue or remediation.":
    "Capacité ou fonctionnalité affectée indisponible pendant un incident ou une remédiation.",
  "Channel block / quota": "Blocage / quota de canal",
  "Capacity reserved or withheld for a specific public or institutional channel.":
    "Capacité réservée ou retenue pour un canal public ou institutionnel spécifique.",
  "Unknown / stale": "Inconnu / obsolète",
  "Availability that cannot currently be trusted for a consequential action.":
    "Disponibilité qui ne peut pas actuellement être considérée comme fiable pour une action à conséquence.",
  Available: "Disponible",
  Limited: "Limitée",
  "On hold": "En attente",
  Reserved: "Réservée",
  Allocated: "Attribuée",
  "Agreement pending": "Accord en attente",
  "Occupied / agreement active": "Occupée / accord actif",
  "Maintenance / blocked": "Maintenance / bloquée",
  Unavailable: "Indisponible",
  "Availability status shown to participants — always with dates and conditions, never a bare label:":
    "Statut de disponibilité affiché aux participants — toujours avec dates et conditions, jamais une simple étiquette :",
  "No Overbooking Promise": "Aucune promesse de non-surréservation",
  "The design uses a date-based commitment ledger, capacity and overlap checks, concurrency controls, source reconciliation, and Action Review. It must not promise that overbooking is impossible.":
    "Le dispositif utilise un registre d'engagements basé sur les dates, des vérifications de capacité et de chevauchement, des contrôles de concurrence, un rapprochement des sources et la révision des actions. Il ne doit pas promettre que la surréservation est impossible.",
  "Explore Availability": "Découvrir la disponibilité",
};

const ES = {
  "Applications, Agreements & Payments": "Solicitudes, acuerdos y pagos",
  "Applications, decisions, agreements, and payments — separately owned, never blurred together.":
    "Solicitudes, decisiones, acuerdos y pagos — cada uno con responsabilidad separada, nunca mezclados.",
  "Every decision has a named human owner and a criteria version. Every payment shows payer, recipient, route, and status confirmed by the processor — never assumed.":
    "Cada decisión tiene una persona responsable designada y una versión de criterios. Cada pago muestra el pagador, el destinatario, la vía y un estado confirmado por el procesador de pagos, nunca presupuesto.",
  "Decision ownership": "Responsabilidad de las decisiones",
  "Authorized human owner, criteria version, reason category, correction, and review.":
    "Responsable humano autorizado, versión de criterios, categoría de motivo, corrección y revisión.",
  "Payment status discipline": "Rigor en el estado de los pagos",
  'Never shown "paid" until confirmed by the current processor or ledger source.':
    'Nunca se muestra "pagado" hasta que lo confirme el procesador de pagos actual o la fuente del libro contable.',
  "Separation of duties": "Separación de funciones",
  "Payment setup, recipient change, approval, execution, and reconciliation stay distinct permissions.":
    "La configuración de pagos, el cambio de destinatario, la aprobación, la ejecución y la conciliación siguen siendo permisos independientes.",
  "Explore this workflow": "Explorar este flujo de trabajo",
  "Applications, Agreements and Payments Illustration": "Ilustración de solicitudes, acuerdos y pagos",
  "Generic room financial lifecycle · illustrative, USD": "Ciclo financiero genérico de una habitación · ilustrativo, USD",
  "Monthly room rent": "Alquiler mensual de la habitación",
  "Security deposit": "Depósito de garantía",
  "Required move-in fee": "Tarifa de entrada obligatoria",
  "Estimated utilities": "Servicios estimados",
  "Known upfront total": "Total inicial conocido",
  "Refund state example": "Ejemplo de estado de reembolso",
  "$600 pending review": "600 $, pendiente de revisión",
  "These figures demonstrate how Pro displays charges and statuses. They are not Zoiko Rooms prices, an escrow promise, or a guaranteed refund.":
    "Estas cifras muestran cómo Pro presenta los cargos y estados. No son precios de Zoiko Rooms, una promesa de depósito en garantía ni un reembolso garantizado.",

  "Assurance & Procurement": "Garantías y contratación",
  "What a compliance or security reviewer can expect to see": "Qué puede esperar ver un revisor de cumplimiento o seguridad",
  "Architecture & data flow": "Arquitectura y flujo de datos",
  "Components, environments, data categories, storage, access, and deletion paths.":
    "Componentes, entornos, categorías de datos, almacenamiento, acceso y procesos de eliminación.",
  "Identity & access": "Identidad y acceso",
  "SSO/provisioning, least privilege, elevated access, and periodic review.":
    "SSO/aprovisionamiento, mínimo privilegio, acceso elevado y revisión periódica.",
  Security: "Seguridad",
  "Encryption, secrets management, monitoring, incident response, and backups.":
    "Cifrado, gestión de secretos, supervisión, respuesta a incidentes y copias de seguridad.",
  "Privacy & data processing": "Privacidad y tratamiento de datos",
  "Roles, purposes, retention, subprocessors, and participant rights.":
    "Roles, finalidades, retención, subencargados y derechos de los participantes.",
  Payments: "Pagos",
  "Recipients, routes, processor roles, receipts, refunds, and reconciliation.":
    "Destinatarios, vías, roles de los procesadores, recibos, reembolsos y conciliación.",
  Accessibility: "Accesibilidad",
  "WCAG 2.2 AA approach, test evidence, and remediation process.":
    "Enfoque WCAG 2.2 AA, evidencia de pruebas y proceso de corrección.",

  "Compliance & Verification": "Cumplimiento y verificación",
  "Identity, authority, and evidence stay reviewable — not a badge taken on faith.":
    "La identidad, la autoridad y las evidencias permanecen verificables, no una insignia basada en la confianza.",
  "Provider identity, listing authority, and room evidence move through a named lifecycle. High-risk changes — bank recipient, legal party, room identity, signer — always route through Action Review.":
    "La identidad del proveedor, la autoridad de publicación y las evidencias de la habitación pasan por un ciclo de vida definido. Los cambios de alto riesgo — destinatario bancario, parte legal, identidad de la habitación, firmante — siempre pasan por la revisión de acciones.",
  "Evidence record": "Registro de evidencias",
  "Type, object scope, source, collector, dates, reviewer, and retention — every field sourced.":
    "Tipo, alcance del objeto, fuente, recopilador, fechas, revisor y retención — cada campo con fuente.",
  "Fairness by design": "Equidad desde el diseño",
  "Proportional, time-bound restrictions with human review — no protected-trait profiling.":
    "Restricciones proporcionales y limitadas en el tiempo con revisión humana — sin perfilado de características protegidas.",
  "Claim boundary": "Límite de las afirmaciones",
  "Zoiko Rooms Pro displays current evidence. It never promises total legal compliance or safety.":
    "Zoiko Rooms Pro muestra evidencias actuales. Nunca promete cumplimiento legal total ni seguridad.",
  "Explore Compliance & Verification": "Explorar Cumplimiento y verificación",
  "Compliance and Verification Demonstration": "Demostración de cumplimiento y verificación",
  Current: "Vigente",
  Expiring: "Por vencer",
  "Information needed": "Información requerida",
  Restricted: "Restringido",
  "Named evidence, reviewer, and review path at every stage":
    "Evidencia identificada, revisor y proceso de revisión en cada etapa",

  "Frequently Asked": "Preguntas frecuentes",
  "Capability, authority, and payment questions": "Preguntas sobre funciones, autoridad y pagos",
  "What is Zoiko Rooms Pro?": "¿Qué es Zoiko Rooms Pro?",
  "A governed operating environment for authorized room providers, portfolio operators, organizations, and distribution partners to manage room records, availability, verification, applications, agreements, payments, institutional distribution, integrations, and exceptions.":
    "Un entorno operativo regulado para que proveedores de habitaciones autorizados, operadores de cartera, organizaciones y socios de distribución gestionen registros de habitaciones, disponibilidad, verificación, solicitudes, acuerdos, pagos, distribución institucional, integraciones y excepciones.",
  "Who is Zoiko Rooms Pro for?": "¿Para quién está pensado Zoiko Rooms Pro?",
  "Designed for room providers, property managers, institutional partners, and housing operators requiring structured operational workflows and explicit compliance boundaries.":
    "Diseñado para proveedores de habitaciones, administradores de propiedades, socios institucionales y operadores de vivienda que requieren flujos operativos estructurados y límites de cumplimiento explícitos.",
  "Does Zoiko Rooms Pro verify every provider or room?": "¿Zoiko Rooms Pro verifica a todos los proveedores o habitaciones?",
  "Zoiko Rooms Pro provides structured verification pathways, evidence tracking, and review queues. Every data point maintains clear source and verification history.":
    "Zoiko Rooms Pro ofrece procesos de verificación estructurados, seguimiento de evidencias y colas de revisión. Cada dato mantiene una fuente clara y un historial de verificación.",
  "Can Pro manage room availability?": "¿Puede Pro gestionar la disponibilidad de habitaciones?",
  "Yes, availability is tracked dynamically with source confirmation, timestamped freshness, and automated synchronization across connected systems.":
    "Sí, la disponibilidad se rastrea de forma dinámica con confirmación de la fuente, actualización con marca de tiempo y sincronización automatizada entre sistemas conectados.",
  "Can Pro manage applications, agreements, and payments?": "¿Puede Pro gestionar solicitudes, acuerdos y pagos?",
  "Yes. Applications, decisions, agreements, and payments remain separately owned with distinct permissions, human review checkpoints, and processor-backed payment statuses.":
    "Sí. Las solicitudes, decisiones, acuerdos y pagos mantienen responsabilidades separadas, con permisos distintos, puntos de revisión humana y estados de pago respaldados por el procesador.",
  "Does Pro integrate with other systems?": "¿Pro se integra con otros sistemas?",
  "Pro offers API access, signed webhooks, and governed connectors for CRM, portfolio feeds, payment ledgers, e-signature tools, and reporting platforms.":
    "Pro ofrece acceso a la API, webhooks firmados y conectores regulados para CRM, feeds de cartera, libros de pagos, herramientas de firma electrónica y plataformas de generación de informes.",
  "Does AI make application or payment decisions?": "¿La IA toma decisiones sobre solicitudes o pagos?",
  "No. Decisions maintain explicit human ownership and versioned criteria. Automated processes only surface data, route queues, and enforce governed rules.":
    "No. Las decisiones mantienen una responsabilidad humana explícita y criterios con versiones. Los procesos automatizados solo muestran datos, dirigen colas y aplican reglas reguladas.",

  "Five Capabilities, One Governed Model": "Cinco funciones, un modelo regulado",
  "Route to the capability that matches your responsibility": "Acceda a la función que corresponde a su responsabilidad",
  "Portfolio & Availability": "Cartera y disponibilidad",
  "Operate properties, rooms, Room Passports, availability, pricing, restrictions, maintenance, and bulk changes.":
    "Gestione propiedades, habitaciones, Room Passports, disponibilidad, tarifas, restricciones, mantenimiento y cambios masivos.",
  "Institutional Distribution": "Distribución institucional",
  "Distribute approved supply to universities, employers, healthcare, mobility, and public-sector programs.":
    "Distribuya la oferta aprobada a universidades, empleadores, programas de salud, movilidad y del sector público.",
  "Connect approved systems through minimum scopes, source-of-truth rules, idempotency, monitoring, and revocation.":
    "Conecte sistemas aprobados mediante permisos mínimos, reglas de fuente de verdad, idempotencia, supervisión y revocación.",
  "Design the operating model, migration, controls, rollout, support, and reporting around current responsibility.":
    "Diseñe el modelo operativo, la migración, los controles, la implementación, el soporte y los informes en torno a la responsabilidad actual.",

  "How the Operating Graph Is Built": "Cómo se construye el grafo operativo",
  "From scope to reconfirmation, every step keeps ownership explicit":
    "Del alcance a la reconfirmación, cada paso mantiene la responsabilidad explícita",
  "Establish scope": "Establecer el alcance",
  "Organizations, portfolios, properties, rooms, markets, programs, roles, systems, and outcomes.":
    "Organizaciones, carteras, propiedades, habitaciones, mercados, programas, roles, sistemas y resultados.",
  "Confirm authority": "Confirmar la autoridad",
  "Provider, manager, representative, inventory, signer, payment, decision, and integration authority.":
    "Autoridad del proveedor, gestor, representante, inventario, firmante, pago, decisión e integración.",
  "Build records": "Crear registros",
  "Canonical Room Passports, availability, complete costs, policies, evidence, sources, and dates.":
    "Room Passports canónicos, disponibilidad, costos completos, políticas, evidencias, fuentes y fechas.",
  "Configure workflows": "Configurar flujos de trabajo",
  "Applications, decisions, reservations, agreements, payments, distribution, support, and exceptions.":
    "Solicitudes, decisiones, reservas, acuerdos, pagos, distribución, soporte y excepciones.",
  "Connect systems": "Conectar sistemas",
  "Approved identities, portfolio, availability, finance, organization, support, and reporting systems.":
    "Sistemas aprobados de identidad, cartera, disponibilidad, finanzas, organización, soporte e informes.",
  "Operate with review": "Operar con revisión",
  "Queues, ownership, service levels, action review, separation of duties, and auditable changes.":
    "Colas, responsabilidad, niveles de servicio, revisión de acciones, separación de funciones y cambios auditables.",
  "Measure governed outcomes": "Medir resultados regulados",
  "Availability, data quality, applications, agreements, payments, service, exceptions, and access.":
    "Disponibilidad, calidad de datos, solicitudes, acuerdos, pagos, servicio, excepciones y acceso.",
  "Reconfirm or close": "Reconfirmar o cerrar",
  "Authority, roles, rooms, relationships, connections, retention, open money, and unresolved cases.":
    "Autoridad, roles, habitaciones, relaciones, conexiones, retención, importes pendientes y casos sin resolver.",

  "Implementation Model": "Modelo de implementación",
  "Discovery through exit — every phase has an owner and an exit criterion":
    "Del descubrimiento a la salida — cada fase tiene un responsable y un criterio de salida",
  Discover: "Descubrir",
  "Organizations, portfolios, markets, workflows, systems, and success criteria.":
    "Organizaciones, carteras, mercados, flujos de trabajo, sistemas y criterios de éxito.",
  "Design & configure": "Diseñar y configurar",
  "Canonical records, authority, roles, statuses, workflows, and connections.":
    "Registros canónicos, autoridad, roles, estados, flujos de trabajo y conexiones.",
  "Validate & pilot": "Validar y pilotar",
  "Functional, role, data, and payment checks with a controlled rollout.":
    "Verificaciones funcionales, de roles, de datos y de pagos, con una implementación controlada.",
  "Launch & operate": "Lanzar y operar",
  "Current data, owners, monitoring, support, and a governed operating rhythm.":
    "Datos actuales, responsables, supervisión, soporte y un ritmo operativo regulado.",
  "Renew or exit": "Renovar o salir",
  "Reviewed scope, or a clean exit with no orphaned access, room, or payment.":
    "Alcance revisado, o una salida limpia sin accesos, habitaciones ni pagos huérfanos.",

  "Institutional Distribution Illustration": "Ilustración de la distribución institucional",
  "Distribute approved supply without transferring hidden responsibility.":
    "Distribuir la oferta aprobada sin transferir responsabilidades ocultas.",
  "Organization relationships define exact providers, rooms, audience, criteria, funding, and service — provider authority and participant rights are never absorbed into the relationship.":
    "Las relaciones con la organización definen con precisión los proveedores, habitaciones, público, criterios, financiación y servicio — la autoridad del proveedor y los derechos del participante nunca se absorben en la relación.",
  "Explore Institutional Distribution": "Explorar la distribución institucional",
  "Provider authority and participant rights stay intact across every market":
    "La autoridad del proveedor y los derechos del participante permanecen intactos en cada mercado",
  "Audience access": "Acceso del público",
  "Invitation, referral, entitlement, eligibility, allocation, or open discovery — purpose stays explicit.":
    "Invitación, referencia, derecho, elegibilidad, asignación o descubrimiento abierto — el propósito permanece explícito.",
  "Funding & billing": "Financiación y facturación",
  "Subsidy, voucher, or direct billing shown with payer, payee, status, and reconciliation.":
    "Subsidio, bono o facturación directa mostrados con pagador, beneficiario, estado y conciliación.",
  "Governed closure": "Cierre regulado",
  "Ending a program releases supply and resolves agreements, payments, and cases cleanly.":
    "Finalizar un programa libera la oferta y resuelve limpiamente los acuerdos, pagos y casos.",
  Universities: "Universidades",
  "Employers & healthcare": "Empleadores y salud",
  "Mobility & public sector": "Movilidad y sector público",

  "Connect current systems without weakening source, security, or operational control.":
    "Conectar los sistemas actuales sin debilitar la fuente, la seguridad ni el control operativo.",
  "Every integration has a named owner, minimum scopes, and explicit source-of-truth rules. Consequential writes go through review, idempotency, and audit — never silent system-of-record changes.":
    "Cada integración tiene un responsable designado, permisos mínimos y reglas explícitas de fuente de verdad. Las escrituras relevantes pasan por revisión, idempotencia y auditoría — nunca cambios silenciosos en el sistema de registro.",
  "Explore Integrations & API": "Explorar Integraciones y API",
  "Sample integration status · demonstration data": "Estado de integración de ejemplo · datos de demostración",
  "Approved categories": "Categorías aprobadas",
  "Portfolio, CRM, e-sign, finance, organization, identity, support, and BI systems — governed use only.":
    "Sistemas de cartera, CRM, firma electrónica, finanzas, organización, identidad, soporte y BI — solo uso regulado.",
  "Events & monitoring": "Eventos y supervisión",
  "Signed webhooks, retry, deduplication, freshness, and dead-letter handling.":
    "Webhooks firmados, reintentos, deduplicación, actualización y gestión de mensajes fallidos.",
  "Clean revocation": "Revocación limpia",
  "Stop reads/writes/events, rotate credentials, reconcile, and export or delete data on exit.":
    "Detener lecturas/escrituras/eventos, rotar credenciales, conciliar y exportar o eliminar datos al salir.",
  "Portfolio feed": "Feed de cartera",
  "Active · synced 4m ago": "Activo · sincronizado hace 4 min",
  "Payment ledger": "Libro de pagos",
  Active: "Activo",
  "CRM connector": "Conector CRM",
  "Degraded · retrying": "Degradado · reintentando",
  "Legacy import": "Importación heredada",
  "Paused by owner": "Pausado por el responsable",

  "Operate properties, rooms, and Room Passports without losing the evidence behind each field.":
    "Gestione propiedades, habitaciones y Room Passports sin perder la evidencia detrás de cada campo.",
  "The Room Passport stays the canonical room record — facts, media, access, condition, costs, and availability are sourced, dated, and owned, even as bulk changes and imports move fast.":
    "El Room Passport sigue siendo el registro canónico de la habitación — datos, medios, acceso, estado, costos y disponibilidad están respaldados, fechados y con responsable, incluso cuando los cambios masivos e importaciones son rápidos.",
  "Explore Portfolio & Availability": "Explorar Cartera y disponibilidad",
  "Sample Room Passport": "Room Passport de ejemplo",
  "Sample Room Passport · demonstration data": "Room Passport de ejemplo · datos de demostración",
  "Portfolio hierarchy": "Jerarquía de la cartera",
  "Organization → portfolio → property → room → offer, with stable identifiers and transfer history.":
    "Organización → cartera → propiedad → habitación → oferta, con identificadores estables e historial de transferencias.",
  "Bulk actions & imports": "Acciones masivas e importaciones",
  "Scope preview, validation, dry run, conflict detection, idempotency, rollback, and audit.":
    "Vista previa del alcance, validación, simulación, detección de conflictos, idempotencia, reversión y auditoría.",
  "Data-quality queue": "Cola de calidad de datos",
  "Missing, stale, conflicting, expiring, and materially changed fields routed to an owner.":
    "Los campos faltantes, obsoletos, contradictorios, por vencer o con cambios significativos se dirigen a un responsable.",
  Address: "Dirección",
  "Regulatory verified": "Verificado normativamente",
  "Room dimensions": "Dimensiones de la habitación",
  "Document verified": "Verificado por documento",
  "Availability freshness": "Actualidad de la disponibilidad",
  "Source confirmed 2h ago": "Fuente confirmada hace 2 h",
  Furnishings: "Mobiliario",
  "Provider declared": "Declarado por el proveedor",
  "Maintenance status": "Estado de mantenimiento",
  "Open · owner assigned": "Abierto · responsable asignado",

  "Roles, Audit & Reporting": "Roles, auditoría e informes",
  "Authority before capability — for every role, every time":
    "La autoridad antes que la función — para cada rol, siempre",
  "No user, system, automation, organization, or partner can act beyond their current identity, role, object, program, market, and time scope.":
    "Ningún usuario, sistema, automatización, organización o socio puede actuar más allá de su identidad, rol, objeto, programa, mercado y periodo actuales.",
  "Organization owner": "Propietario de la organización",
  "Account configuration and approved markets — not unrestricted participant or payment access.":
    "Configuración de la cuenta y mercados aprobados — sin acceso ilimitado a participantes o pagos.",
  "Portfolio administrator": "Administrador de cartera",
  "Portfolios, properties, rooms, and operations — not signer or payment authority.":
    "Carteras, propiedades, habitaciones y operaciones — sin autoridad de firma ni de pago.",
  "Compliance reviewer": "Revisor de cumplimiento",
  "Identity, authority, and evidence review — not payment execution.":
    "Revisión de identidad, autoridad y evidencias — sin ejecución de pagos.",
  "Decision owner": "Responsable de la decisión",
  "Named application, allocation, or exception decisions under approved criteria.":
    "Decisiones designadas de solicitud, asignación o excepción bajo criterios aprobados.",
  "Authorized signer": "Firmante autorizado",
  "Signs an exact agreement version for a named legal party.":
    "Firma una versión exacta del acuerdo para una parte legal designada.",
  "Payment approver": "Aprobador de pagos",
  "Approves or executes charges under limits — never self-approval.":
    "Aprueba o ejecuta cargos dentro de límites — nunca autoaprobación.",
  "Integration administrator": "Administrador de integraciones",
  "Connections, scopes, and monitoring — not business decisions.":
    "Conexiones, permisos y supervisión — sin decisiones de negocio.",
  "Auditor / read-only": "Auditor / solo lectura",
  "Approved records, evidence, and reports — no operational writes.":
    "Registros aprobados, evidencias e informes — sin escrituras operativas.",

  "Unified Operating Model": "Modelo operativo unificado",
  "One shared operational graph — separate sources, permissions, decisions, money, and evidence.":
    "Un grafo operativo compartido — fuentes, permisos, decisiones, dinero y evidencias separados.",
  "A canonical Room Passport links provider authority, room facts, availability, applications, agreements, payments, institutional relationships, support cases, and changes — without flattening them into one unreviewable status.":
    "Un Room Passport canónico vincula la autoridad del proveedor, los datos de la habitación, la disponibilidad, las solicitudes, los acuerdos, los pagos, las relaciones institucionales, los casos de soporte y los cambios — sin reducirlos a un único estado no verificable.",
  "Linked records do not mean every role sees every object. Each relationship is filtered by purpose, organization, role, program, participant, room, market, time, and sensitivity.":
    "Que los registros estén vinculados no significa que todos los roles vean todos los objetos. Cada relación se filtra por propósito, organización, rol, programa, participante, habitación, mercado, tiempo y sensibilidad.",
  Room: "Habitación",
  "Provider & portfolio": "Proveedor y cartera",
  "Applications & agreements": "Solicitudes y acuerdos",
  "Payments & refunds": "Pagos y reembolsos",
  "Evidence & authority": "Evidencia y autoridad",
  "Institutional programs": "Programas institucionales",
  "Integrations & events": "Integraciones y eventos",
  "Support & trust cases": "Casos de soporte y confianza",
  "Sourced · scoped · reviewable": "Con fuente · delimitado · verificable",

  "Run room portfolios, institutional distribution, and consequential workflows from one governed operating view.":
    "Gestione carteras de habitaciones, distribución institucional y flujos de trabajo relevantes desde una única vista operativa regulada.",
  "Keep provider authority, Room Passports, availability, applications, agreements, payments, roles, integrations, and evidence connected — while every source, action, status, limitation, and decision owner stays explicit.":
    "Mantenga conectados la autoridad del proveedor, los Room Passports, la disponibilidad, las solicitudes, los acuerdos, los pagos, los roles, las integraciones y las evidencias, mientras cada fuente, acción, estado, limitación y responsable de decisión permanece explícito.",
  "Explore Pro Capabilities": "Explorar las funciones de Pro",
  "Zoiko Rooms Pro Operating View": "Vista operativa de Zoiko Rooms Pro",
  "Operating Boundary": "Límite operativo",
  "Zoiko Rooms Pro coordinates records and actions. It does not silently become the provider, legal party, payment recipient, eligibility authority, or system of record.":
    "Zoiko Rooms Pro coordina registros y acciones. Nunca se convierte silenciosamente en el proveedor, la parte legal, el destinatario del pago, la autoridad de elegibilidad ni el sistema de registro.",
  "Every module shows the responsible organization, provider, role, source, effective period, current status, limitation, and review path before a consequential action is available.":
    "Cada módulo muestra la organización responsable, el proveedor, el rol, la fuente, el periodo de vigencia, el estado actual, las limitaciones y el proceso de revisión antes de que una acción relevante esté disponible.",

  "Costs & Restrictions": "Costos y restricciones",
  "Complete cost before commitment.": "Costo completo antes del compromiso.",
  "Rent, deposit, required fees, bills, taxes, discounts, participant contribution, period and effective date are visible together — not disclosed one at a time.":
    "El alquiler, el depósito, las tarifas obligatorias, los servicios, los impuestos, los descuentos, la contribución del participante, el período y la fecha de vigencia son visibles en conjunto, no revelados uno a uno.",
  "Cost Item": "Concepto de costo",
  "Illustrative Current Value": "Valor actual ilustrativo",
  "$1,450 per month": "1450 $ al mes",
  "$1,450": "1450 $",
  "$80": "80 $",
  "$120 per month": "120 $ al mes",
  "Known recurring total": "Total recurrente conocido",
  "$1,570 per month": "1570 $ al mes",
  "$1,530 before move-in, excluding first month's rent if collected separately":
    "1530 $ antes de la mudanza, sin incluir el alquiler del primer mes si se cobra por separado",
  "Effective date": "Fecha de vigencia",
  "Illustrative values effective August 1, 2026": "Valores ilustrativos vigentes desde el 1 de agosto de 2026",
  "a later change must not silently rewrite an earlier accepted agreement":
    "un cambio posterior no debe reescribir silenciosamente un acuerdo previamente aceptado",
  "Example Boundary": "Límite del ejemplo",
  "These USD values demonstrate complete-cost presentation and effective dating. They are not Zoiko Rooms prices, market averages, provider quotes, taxes, affordability guidance, investment advice, or a guarantee of future cost.":
    "Estos valores en USD demuestran la presentación del costo completo y la fecha de vigencia. No son precios de Zoiko Rooms, promedios de mercado, cotizaciones de proveedores, impuestos, orientación sobre asequibilidad, asesoramiento de inversión ni una garantía de costo futuro.",
  "Occupancy & capacity": "Ocupación y capacidad",
  "Approved maximum and room/bed model, with source and date — no hidden extra occupant.":
    "Máximo aprobado y modelo de habitación/cama, con fuente y fecha — sin ocupantes adicionales ocultos.",
  "Stay dates": "Fechas de estancia",
  "Minimum/maximum stay, notice, renewal, extension, early termination and turnover.":
    "Estancia mínima/máxima, aviso, renovación, ampliación, terminación anticipada y rotación.",
  "Household & shared living": "Hogar y convivencia compartida",
  "Private/shared spaces, current occupancy facts and household rules.":
    "Espacios privados/compartidos, datos de ocupación actuales y normas del hogar.",
  "Age & eligibility": "Edad y elegibilidad",
  "Only where lawful and necessary, with exact rule, source and alternatives.":
    "Solo cuando sea legal y necesario, con una regla exacta, fuente y alternativas.",
  "Pets & assistance animals": "Mascotas y animales de asistencia",
  "Separate pet preference/rule from assistance-animal process; no disability inference.":
    "Separar la preferencia/norma sobre mascotas del proceso de animales de asistencia; sin inferencias sobre discapacidad.",
  "Protected traits": "Características protegidas",
  "Never used for ranking, matching, filtering or eligibility outside a narrowly authorized lawful program.":
    "Nunca se usan para clasificar, emparejar, filtrar o determinar elegibilidad fuera de un programa legal estrictamente autorizado.",
  "Review Cost Model": "Revisar el modelo de costos",

  "Availability Ledger": "Libro de disponibilidad",
  "Availability is a ledger, not a single toggle.": "La disponibilidad es un libro contable, no un simple interruptor.",
  "Available capacity for a room and date range equals current authorized capacity minus overlapping agreements, active reservations, accepted allocations, unexpired holds, maintenance blocks, owner use, and channel commitments.":
    "La capacidad disponible para una habitación y un rango de fechas equivale a la capacidad autorizada actual menos los acuerdos superpuestos, las reservas activas, las asignaciones aceptadas, las retenciones no vencidas, los bloqueos de mantenimiento, el uso del propietario y los compromisos de canal.",
  "Open capacity": "Capacidad abierta",
  "Room/bed capacity available for a defined date range and authorized channel.":
    "Capacidad de habitación/cama disponible para un rango de fechas definido y un canal autorizado.",
  "Soft hold": "Retención temporal",
  "Temporary non-binding hold pending a named workflow, with a required expiry and owner.":
    "Retención temporal no vinculante mientras se completa un flujo de trabajo designado, con vencimiento y responsable obligatorios.",
  Reservation: "Reserva",
  "Approved temporary commitment with conditions, amount, and cancellation rules.":
    "Compromiso temporal aprobado con condiciones, importe y normas de cancelación.",
  "Room proposed or assigned under an authorized organization program.":
    "Habitación propuesta o asignada bajo un programa de organización autorizado.",
  "Agreement commitment": "Compromiso contractual",
  "Signed or otherwise binding occupancy period with termination/change rules.":
    "Período de ocupación firmado o vinculante de otra manera, con normas de terminación/cambio.",
  "Owner / provider use": "Uso del propietario / proveedor",
  "Approved period unavailable to market/program channels, with a reason category.":
    "Período aprobado no disponible para los canales de mercado/programa, con una categoría de motivo.",
  "Maintenance block": "Bloqueo de mantenimiento",
  "Affected capacity or feature unavailable during an issue or remediation.":
    "Capacidad o función afectada no disponible durante un problema o su corrección.",
  "Channel block / quota": "Bloqueo / cuota de canal",
  "Capacity reserved or withheld for a specific public or institutional channel.":
    "Capacidad reservada o retenida para un canal público o institucional específico.",
  "Unknown / stale": "Desconocido / obsoleto",
  "Availability that cannot currently be trusted for a consequential action.":
    "Disponibilidad que actualmente no puede considerarse fiable para una acción relevante.",
  Available: "Disponible",
  Limited: "Limitada",
  "On hold": "En espera",
  Reserved: "Reservada",
  Allocated: "Asignada",
  "Agreement pending": "Acuerdo pendiente",
  "Occupied / agreement active": "Ocupada / acuerdo activo",
  "Maintenance / blocked": "Mantenimiento / bloqueada",
  Unavailable: "No disponible",
  "Availability status shown to participants — always with dates and conditions, never a bare label:":
    "Estado de disponibilidad mostrado a los participantes — siempre con fechas y condiciones, nunca una simple etiqueta:",
  "No Overbooking Promise": "Sin promesa de no sobreventa",
  "The design uses a date-based commitment ledger, capacity and overlap checks, concurrency controls, source reconciliation, and Action Review. It must not promise that overbooking is impossible.":
    "El diseño utiliza un libro de compromisos basado en fechas, verificaciones de capacidad y superposición, controles de concurrencia, conciliación de fuentes y la revisión de acciones. No debe prometer que la sobreventa sea imposible.",
  "Explore Availability": "Explorar la disponibilidad",
};

const PT = {
  "Applications, Agreements & Payments": "Candidaturas, contratos e pagamentos",
  "Applications, decisions, agreements, and payments — separately owned, never blurred together.":
    "Candidaturas, decisões, contratos e pagamentos — cada um com responsabilidade separada, nunca misturados.",
  "Every decision has a named human owner and a criteria version. Every payment shows payer, recipient, route, and status confirmed by the processor — never assumed.":
    "Cada decisão tem um responsável humano nomeado e uma versão de critérios. Cada pagamento mostra o pagador, o destinatário, a via e um estado confirmado pelo processador — nunca presumido.",
  "Decision ownership": "Responsabilidade pelas decisões",
  "Authorized human owner, criteria version, reason category, correction, and review.":
    "Responsável humano autorizado, versão dos critérios, categoria de motivo, correção e revisão.",
  "Payment status discipline": "Rigor no estado dos pagamentos",
  'Never shown "paid" until confirmed by the current processor or ledger source.':
    'Nunca é apresentado como "pago" até ser confirmado pelo processador atual ou pela fonte do livro-razão.',
  "Separation of duties": "Separação de funções",
  "Payment setup, recipient change, approval, execution, and reconciliation stay distinct permissions.":
    "A configuração de pagamentos, a alteração do destinatário, a aprovação, a execução e a reconciliação permanecem permissões distintas.",
  "Explore this workflow": "Explorar este fluxo de trabalho",
  "Applications, Agreements and Payments Illustration": "Ilustração de candidaturas, contratos e pagamentos",
  "Generic room financial lifecycle · illustrative, USD": "Ciclo financeiro genérico de um quarto · ilustrativo, USD",
  "Monthly room rent": "Renda mensal do quarto",
  "Security deposit": "Depósito de segurança",
  "Required move-in fee": "Taxa de entrada obrigatória",
  "Estimated utilities": "Serviços estimados",
  "Known upfront total": "Total inicial conhecido",
  "Refund state example": "Exemplo de estado de reembolso",
  "$600 pending review": "600 $, pendente de revisão",
  "These figures demonstrate how Pro displays charges and statuses. They are not Zoiko Rooms prices, an escrow promise, or a guaranteed refund.":
    "Estes valores demonstram como o Pro apresenta cobranças e estados. Não são preços da Zoiko Rooms, uma promessa de depósito-caução nem um reembolso garantido.",

  "Assurance & Procurement": "Garantia e aquisição",
  "What a compliance or security reviewer can expect to see": "O que um revisor de conformidade ou segurança pode esperar ver",
  "Architecture & data flow": "Arquitetura e fluxo de dados",
  "Components, environments, data categories, storage, access, and deletion paths.":
    "Componentes, ambientes, categorias de dados, armazenamento, acesso e processos de eliminação.",
  "Identity & access": "Identidade e acesso",
  "SSO/provisioning, least privilege, elevated access, and periodic review.":
    "SSO/provisionamento, privilégio mínimo, acesso elevado e revisão periódica.",
  Security: "Segurança",
  "Encryption, secrets management, monitoring, incident response, and backups.":
    "Encriptação, gestão de segredos, monitorização, resposta a incidentes e cópias de segurança.",
  "Privacy & data processing": "Privacidade e tratamento de dados",
  "Roles, purposes, retention, subprocessors, and participant rights.":
    "Funções, finalidades, retenção, subcontratados e direitos dos participantes.",
  Payments: "Pagamentos",
  "Recipients, routes, processor roles, receipts, refunds, and reconciliation.":
    "Destinatários, vias, funções dos processadores, recibos, reembolsos e reconciliação.",
  Accessibility: "Acessibilidade",
  "WCAG 2.2 AA approach, test evidence, and remediation process.":
    "Abordagem WCAG 2.2 AA, evidências de testes e processo de correção.",

  "Compliance & Verification": "Conformidade e verificação",
  "Identity, authority, and evidence stay reviewable — not a badge taken on faith.":
    "A identidade, a autoridade e as evidências permanecem verificáveis — não um selo aceite por confiança.",
  "Provider identity, listing authority, and room evidence move through a named lifecycle. High-risk changes — bank recipient, legal party, room identity, signer — always route through Action Review.":
    "A identidade do fornecedor, a autoridade de listagem e as evidências do quarto seguem um ciclo de vida definido. Alterações de alto risco — destinatário bancário, parte legal, identidade do quarto, signatário — passam sempre pela revisão de ações.",
  "Evidence record": "Registo de evidências",
  "Type, object scope, source, collector, dates, reviewer, and retention — every field sourced.":
    "Tipo, âmbito do objeto, fonte, recolhedor, datas, revisor e retenção — cada campo com fonte.",
  "Fairness by design": "Equidade desde a conceção",
  "Proportional, time-bound restrictions with human review — no protected-trait profiling.":
    "Restrições proporcionais e limitadas no tempo com revisão humana — sem definição de perfis de características protegidas.",
  "Claim boundary": "Limite das afirmações",
  "Zoiko Rooms Pro displays current evidence. It never promises total legal compliance or safety.":
    "A Zoiko Rooms Pro apresenta evidências atuais. Nunca promete conformidade legal total ou segurança.",
  "Explore Compliance & Verification": "Explorar Conformidade e verificação",
  "Compliance and Verification Demonstration": "Demonstração de conformidade e verificação",
  Current: "Atual",
  Expiring: "A expirar",
  "Information needed": "Informação necessária",
  Restricted: "Restrito",
  "Named evidence, reviewer, and review path at every stage":
    "Evidência identificada, revisor e percurso de revisão em cada etapa",

  "Frequently Asked": "Perguntas frequentes",
  "Capability, authority, and payment questions": "Perguntas sobre funcionalidades, autoridade e pagamentos",
  "What is Zoiko Rooms Pro?": "O que é a Zoiko Rooms Pro?",
  "A governed operating environment for authorized room providers, portfolio operators, organizations, and distribution partners to manage room records, availability, verification, applications, agreements, payments, institutional distribution, integrations, and exceptions.":
    "Um ambiente operacional regulado para que fornecedores de quartos autorizados, operadores de portefólio, organizações e parceiros de distribuição giram registos de quartos, disponibilidade, verificação, candidaturas, contratos, pagamentos, distribuição institucional, integrações e exceções.",
  "Who is Zoiko Rooms Pro for?": "Para quem é a Zoiko Rooms Pro?",
  "Designed for room providers, property managers, institutional partners, and housing operators requiring structured operational workflows and explicit compliance boundaries.":
    "Concebida para fornecedores de quartos, gestores de propriedades, parceiros institucionais e operadores de alojamento que necessitam de fluxos operacionais estruturados e limites de conformidade explícitos.",
  "Does Zoiko Rooms Pro verify every provider or room?": "A Zoiko Rooms Pro verifica todos os fornecedores ou quartos?",
  "Zoiko Rooms Pro provides structured verification pathways, evidence tracking, and review queues. Every data point maintains clear source and verification history.":
    "A Zoiko Rooms Pro oferece percursos de verificação estruturados, acompanhamento de evidências e filas de revisão. Cada dado mantém uma fonte clara e um histórico de verificação.",
  "Can Pro manage room availability?": "O Pro consegue gerir a disponibilidade dos quartos?",
  "Yes, availability is tracked dynamically with source confirmation, timestamped freshness, and automated synchronization across connected systems.":
    "Sim, a disponibilidade é acompanhada dinamicamente com confirmação da fonte, atualização com registo de hora e sincronização automatizada entre sistemas ligados.",
  "Can Pro manage applications, agreements, and payments?": "O Pro consegue gerir candidaturas, contratos e pagamentos?",
  "Yes. Applications, decisions, agreements, and payments remain separately owned with distinct permissions, human review checkpoints, and processor-backed payment statuses.":
    "Sim. As candidaturas, decisões, contratos e pagamentos mantêm responsabilidades separadas, com permissões distintas, pontos de revisão humana e estados de pagamento apoiados pelo processador.",
  "Does Pro integrate with other systems?": "O Pro integra-se com outros sistemas?",
  "Pro offers API access, signed webhooks, and governed connectors for CRM, portfolio feeds, payment ledgers, e-signature tools, and reporting platforms.":
    "O Pro oferece acesso à API, webhooks assinados e conectores regulados para CRM, feeds de portefólio, livros de pagamentos, ferramentas de assinatura eletrónica e plataformas de relatórios.",
  "Does AI make application or payment decisions?": "A IA toma decisões sobre candidaturas ou pagamentos?",
  "No. Decisions maintain explicit human ownership and versioned criteria. Automated processes only surface data, route queues, and enforce governed rules.":
    "Não. As decisões mantêm responsabilidade humana explícita e critérios com versões. Os processos automatizados apenas apresentam dados, encaminham filas e aplicam regras reguladas.",

  "Five Capabilities, One Governed Model": "Cinco funcionalidades, um modelo regulado",
  "Route to the capability that matches your responsibility": "Aceda à funcionalidade correspondente à sua responsabilidade",
  "Portfolio & Availability": "Portefólio e disponibilidade",
  "Operate properties, rooms, Room Passports, availability, pricing, restrictions, maintenance, and bulk changes.":
    "Gira propriedades, quartos, Room Passports, disponibilidade, preços, restrições, manutenção e alterações em massa.",
  "Institutional Distribution": "Distribuição institucional",
  "Distribute approved supply to universities, employers, healthcare, mobility, and public-sector programs.":
    "Distribua a oferta aprovada a universidades, empregadores, programas de saúde, mobilidade e do setor público.",
  "Connect approved systems through minimum scopes, source-of-truth rules, idempotency, monitoring, and revocation.":
    "Ligue sistemas aprovados através de permissões mínimas, regras de fonte de verdade, idempotência, monitorização e revogação.",
  "Design the operating model, migration, controls, rollout, support, and reporting around current responsibility.":
    "Conceba o modelo operacional, a migração, os controlos, a implementação, o suporte e os relatórios em torno da responsabilidade atual.",

  "How the Operating Graph Is Built": "Como o grafo operacional é construído",
  "From scope to reconfirmation, every step keeps ownership explicit":
    "Do âmbito à reconfirmação, cada etapa mantém a responsabilidade explícita",
  "Establish scope": "Estabelecer o âmbito",
  "Organizations, portfolios, properties, rooms, markets, programs, roles, systems, and outcomes.":
    "Organizações, portefólios, propriedades, quartos, mercados, programas, funções, sistemas e resultados.",
  "Confirm authority": "Confirmar a autoridade",
  "Provider, manager, representative, inventory, signer, payment, decision, and integration authority.":
    "Autoridade do fornecedor, gestor, representante, inventário, signatário, pagamento, decisão e integração.",
  "Build records": "Criar registos",
  "Canonical Room Passports, availability, complete costs, policies, evidence, sources, and dates.":
    "Room Passports canónicos, disponibilidade, custos completos, políticas, evidências, fontes e datas.",
  "Configure workflows": "Configurar fluxos de trabalho",
  "Applications, decisions, reservations, agreements, payments, distribution, support, and exceptions.":
    "Candidaturas, decisões, reservas, contratos, pagamentos, distribuição, suporte e exceções.",
  "Connect systems": "Ligar sistemas",
  "Approved identities, portfolio, availability, finance, organization, support, and reporting systems.":
    "Sistemas aprovados de identidade, portefólio, disponibilidade, finanças, organização, suporte e relatórios.",
  "Operate with review": "Operar com revisão",
  "Queues, ownership, service levels, action review, separation of duties, and auditable changes.":
    "Filas, responsabilidade, níveis de serviço, revisão de ações, separação de funções e alterações auditáveis.",
  "Measure governed outcomes": "Medir resultados regulados",
  "Availability, data quality, applications, agreements, payments, service, exceptions, and access.":
    "Disponibilidade, qualidade de dados, candidaturas, contratos, pagamentos, serviço, exceções e acesso.",
  "Reconfirm or close": "Reconfirmar ou encerrar",
  "Authority, roles, rooms, relationships, connections, retention, open money, and unresolved cases.":
    "Autoridade, funções, quartos, relações, ligações, retenção, valores em aberto e casos por resolver.",

  "Implementation Model": "Modelo de implementação",
  "Discovery through exit — every phase has an owner and an exit criterion":
    "Da descoberta à saída — cada fase tem um responsável e um critério de saída",
  Discover: "Descobrir",
  "Organizations, portfolios, markets, workflows, systems, and success criteria.":
    "Organizações, portefólios, mercados, fluxos de trabalho, sistemas e critérios de sucesso.",
  "Design & configure": "Conceber e configurar",
  "Canonical records, authority, roles, statuses, workflows, and connections.":
    "Registos canónicos, autoridade, funções, estados, fluxos de trabalho e ligações.",
  "Validate & pilot": "Validar e testar",
  "Functional, role, data, and payment checks with a controlled rollout.":
    "Verificações funcionais, de funções, de dados e de pagamento, com uma implementação controlada.",
  "Launch & operate": "Lançar e operar",
  "Current data, owners, monitoring, support, and a governed operating rhythm.":
    "Dados atuais, responsáveis, monitorização, suporte e um ritmo operacional regulado.",
  "Renew or exit": "Renovar ou sair",
  "Reviewed scope, or a clean exit with no orphaned access, room, or payment.":
    "Âmbito revisto, ou uma saída limpa sem acessos, quartos ou pagamentos órfãos.",

  "Institutional Distribution Illustration": "Ilustração da distribuição institucional",
  "Distribute approved supply without transferring hidden responsibility.":
    "Distribuir a oferta aprovada sem transferir responsabilidades ocultas.",
  "Organization relationships define exact providers, rooms, audience, criteria, funding, and service — provider authority and participant rights are never absorbed into the relationship.":
    "As relações com a organização definem com exatidão os fornecedores, quartos, público, critérios, financiamento e serviço — a autoridade do fornecedor e os direitos do participante nunca são absorvidos pela relação.",
  "Explore Institutional Distribution": "Explorar a distribuição institucional",
  "Provider authority and participant rights stay intact across every market":
    "A autoridade do fornecedor e os direitos do participante permanecem intactos em todos os mercados",
  "Audience access": "Acesso do público",
  "Invitation, referral, entitlement, eligibility, allocation, or open discovery — purpose stays explicit.":
    "Convite, referência, direito, elegibilidade, atribuição ou descoberta aberta — o propósito permanece explícito.",
  "Funding & billing": "Financiamento e faturação",
  "Subsidy, voucher, or direct billing shown with payer, payee, status, and reconciliation.":
    "Subsídio, vale ou faturação direta apresentados com pagador, beneficiário, estado e reconciliação.",
  "Governed closure": "Encerramento regulado",
  "Ending a program releases supply and resolves agreements, payments, and cases cleanly.":
    "O encerramento de um programa liberta a oferta e resolve de forma limpa contratos, pagamentos e casos.",
  Universities: "Universidades",
  "Employers & healthcare": "Empregadores e saúde",
  "Mobility & public sector": "Mobilidade e setor público",

  "Connect current systems without weakening source, security, or operational control.":
    "Ligar os sistemas atuais sem enfraquecer a fonte, a segurança ou o controlo operacional.",
  "Every integration has a named owner, minimum scopes, and explicit source-of-truth rules. Consequential writes go through review, idempotency, and audit — never silent system-of-record changes.":
    "Cada integração tem um responsável nomeado, permissões mínimas e regras explícitas de fonte de verdade. As escritas relevantes passam por revisão, idempotência e auditoria — nunca alterações silenciosas no sistema de registo.",
  "Explore Integrations & API": "Explorar Integrações e API",
  "Sample integration status · demonstration data": "Estado de integração de exemplo · dados de demonstração",
  "Approved categories": "Categorias aprovadas",
  "Portfolio, CRM, e-sign, finance, organization, identity, support, and BI systems — governed use only.":
    "Sistemas de portefólio, CRM, assinatura eletrónica, finanças, organização, identidade, suporte e BI — apenas uso regulado.",
  "Events & monitoring": "Eventos e monitorização",
  "Signed webhooks, retry, deduplication, freshness, and dead-letter handling.":
    "Webhooks assinados, novas tentativas, deduplicação, atualização e tratamento de mensagens falhadas.",
  "Clean revocation": "Revogação limpa",
  "Stop reads/writes/events, rotate credentials, reconcile, and export or delete data on exit.":
    "Parar leituras/escritas/eventos, rodar credenciais, reconciliar e exportar ou eliminar dados na saída.",
  "Portfolio feed": "Feed de portefólio",
  "Active · synced 4m ago": "Ativo · sincronizado há 4 min",
  "Payment ledger": "Livro de pagamentos",
  Active: "Ativo",
  "CRM connector": "Conector CRM",
  "Degraded · retrying": "Degradado · a tentar novamente",
  "Legacy import": "Importação legada",
  "Paused by owner": "Pausado pelo responsável",

  "Operate properties, rooms, and Room Passports without losing the evidence behind each field.":
    "Gira propriedades, quartos e Room Passports sem perder as evidências por trás de cada campo.",
  "The Room Passport stays the canonical room record — facts, media, access, condition, costs, and availability are sourced, dated, and owned, even as bulk changes and imports move fast.":
    "O Room Passport continua a ser o registo canónico do quarto — factos, media, acesso, condição, custos e disponibilidade têm fonte, data e responsável, mesmo quando as alterações em massa e importações são rápidas.",
  "Explore Portfolio & Availability": "Explorar Portefólio e disponibilidade",
  "Sample Room Passport": "Room Passport de exemplo",
  "Sample Room Passport · demonstration data": "Room Passport de exemplo · dados de demonstração",
  "Portfolio hierarchy": "Hierarquia do portefólio",
  "Organization → portfolio → property → room → offer, with stable identifiers and transfer history.":
    "Organização → portefólio → propriedade → quarto → oferta, com identificadores estáveis e histórico de transferências.",
  "Bulk actions & imports": "Ações em massa e importações",
  "Scope preview, validation, dry run, conflict detection, idempotency, rollback, and audit.":
    "Pré-visualização do âmbito, validação, simulação, deteção de conflitos, idempotência, reversão e auditoria.",
  "Data-quality queue": "Fila de qualidade de dados",
  "Missing, stale, conflicting, expiring, and materially changed fields routed to an owner.":
    "Campos em falta, desatualizados, contraditórios, a expirar ou com alterações significativas são encaminhados para um responsável.",
  Address: "Morada",
  "Regulatory verified": "Verificado regulamentarmente",
  "Room dimensions": "Dimensões do quarto",
  "Document verified": "Verificado por documento",
  "Availability freshness": "Atualidade da disponibilidade",
  "Source confirmed 2h ago": "Fonte confirmada há 2 h",
  Furnishings: "Mobiliário",
  "Provider declared": "Declarado pelo fornecedor",
  "Maintenance status": "Estado de manutenção",
  "Open · owner assigned": "Aberto · responsável atribuído",

  "Roles, Audit & Reporting": "Funções, auditoria e relatórios",
  "Authority before capability — for every role, every time":
    "A autoridade antes da funcionalidade — para cada função, sempre",
  "No user, system, automation, organization, or partner can act beyond their current identity, role, object, program, market, and time scope.":
    "Nenhum utilizador, sistema, automatização, organização ou parceiro pode agir além da sua identidade, função, objeto, programa, mercado e período atuais.",
  "Organization owner": "Proprietário da organização",
  "Account configuration and approved markets — not unrestricted participant or payment access.":
    "Configuração da conta e mercados aprovados — sem acesso ilimitado a participantes ou pagamentos.",
  "Portfolio administrator": "Administrador de portefólio",
  "Portfolios, properties, rooms, and operations — not signer or payment authority.":
    "Portefólios, propriedades, quartos e operações — sem autoridade de assinatura ou de pagamento.",
  "Compliance reviewer": "Revisor de conformidade",
  "Identity, authority, and evidence review — not payment execution.":
    "Revisão de identidade, autoridade e evidências — sem execução de pagamentos.",
  "Decision owner": "Responsável pela decisão",
  "Named application, allocation, or exception decisions under approved criteria.":
    "Decisões nomeadas de candidatura, atribuição ou exceção segundo critérios aprovados.",
  "Authorized signer": "Signatário autorizado",
  "Signs an exact agreement version for a named legal party.":
    "Assina uma versão exata do contrato para uma parte legal nomeada.",
  "Payment approver": "Aprovador de pagamentos",
  "Approves or executes charges under limits — never self-approval.":
    "Aprova ou executa cobranças dentro de limites — nunca autoaprovação.",
  "Integration administrator": "Administrador de integrações",
  "Connections, scopes, and monitoring — not business decisions.":
    "Ligações, permissões e monitorização — sem decisões de negócio.",
  "Auditor / read-only": "Auditor / apenas leitura",
  "Approved records, evidence, and reports — no operational writes.":
    "Registos aprovados, evidências e relatórios — sem escritas operacionais.",

  "Unified Operating Model": "Modelo operacional unificado",
  "One shared operational graph — separate sources, permissions, decisions, money, and evidence.":
    "Um grafo operacional partilhado — fontes, permissões, decisões, valores e evidências separados.",
  "A canonical Room Passport links provider authority, room facts, availability, applications, agreements, payments, institutional relationships, support cases, and changes — without flattening them into one unreviewable status.":
    "Um Room Passport canónico liga a autoridade do fornecedor, os factos do quarto, a disponibilidade, as candidaturas, os contratos, os pagamentos, as relações institucionais, os casos de suporte e as alterações — sem os reduzir a um único estado não verificável.",
  "Linked records do not mean every role sees every object. Each relationship is filtered by purpose, organization, role, program, participant, room, market, time, and sensitivity.":
    "Registos ligados não significam que todas as funções veem todos os objetos. Cada relação é filtrada por propósito, organização, função, programa, participante, quarto, mercado, tempo e sensibilidade.",
  Room: "Quarto",
  "Provider & portfolio": "Fornecedor e portefólio",
  "Applications & agreements": "Candidaturas e contratos",
  "Payments & refunds": "Pagamentos e reembolsos",
  "Evidence & authority": "Evidência e autoridade",
  "Institutional programs": "Programas institucionais",
  "Integrations & events": "Integrações e eventos",
  "Support & trust cases": "Casos de suporte e confiança",
  "Sourced · scoped · reviewable": "Com fonte · delimitado · verificável",

  "Run room portfolios, institutional distribution, and consequential workflows from one governed operating view.":
    "Gira portefólios de quartos, distribuição institucional e fluxos de trabalho relevantes a partir de uma única vista operacional regulada.",
  "Keep provider authority, Room Passports, availability, applications, agreements, payments, roles, integrations, and evidence connected — while every source, action, status, limitation, and decision owner stays explicit.":
    "Mantenha ligados a autoridade do fornecedor, os Room Passports, a disponibilidade, as candidaturas, os contratos, os pagamentos, as funções, as integrações e as evidências — enquanto cada fonte, ação, estado, limitação e responsável pela decisão permanece explícito.",
  "Explore Pro Capabilities": "Explorar as funcionalidades do Pro",
  "Zoiko Rooms Pro Operating View": "Vista operacional da Zoiko Rooms Pro",
  "Operating Boundary": "Limite operacional",
  "Zoiko Rooms Pro coordinates records and actions. It does not silently become the provider, legal party, payment recipient, eligibility authority, or system of record.":
    "A Zoiko Rooms Pro coordena registos e ações. Nunca se torna silenciosamente o fornecedor, a parte legal, o destinatário do pagamento, a autoridade de elegibilidade ou o sistema de registo.",
  "Every module shows the responsible organization, provider, role, source, effective period, current status, limitation, and review path before a consequential action is available.":
    "Cada módulo apresenta a organização responsável, o fornecedor, a função, a fonte, o período de vigência, o estado atual, as limitações e o percurso de revisão antes de uma ação relevante estar disponível.",

  "Costs & Restrictions": "Custos e restrições",
  "Complete cost before commitment.": "Custo completo antes do compromisso.",
  "Rent, deposit, required fees, bills, taxes, discounts, participant contribution, period and effective date are visible together — not disclosed one at a time.":
    "A renda, o depósito, as taxas obrigatórias, as contas, os impostos, os descontos, a contribuição do participante, o período e a data de vigência são visíveis em conjunto — não divulgados um de cada vez.",
  "Cost Item": "Item de custo",
  "Illustrative Current Value": "Valor atual ilustrativo",
  "$1,450 per month": "1450 $ por mês",
  "$1,450": "1450 $",
  "$80": "80 $",
  "$120 per month": "120 $ por mês",
  "Known recurring total": "Total recorrente conhecido",
  "$1,570 per month": "1570 $ por mês",
  "$1,530 before move-in, excluding first month's rent if collected separately":
    "1530 $ antes da mudança, excluindo a renda do primeiro mês, caso seja cobrada separadamente",
  "Effective date": "Data de vigência",
  "Illustrative values effective August 1, 2026": "Valores ilustrativos em vigor a partir de 1 de agosto de 2026",
  "a later change must not silently rewrite an earlier accepted agreement":
    "uma alteração posterior não deve reescrever silenciosamente um contrato previamente aceite",
  "Example Boundary": "Limite do exemplo",
  "These USD values demonstrate complete-cost presentation and effective dating. They are not Zoiko Rooms prices, market averages, provider quotes, taxes, affordability guidance, investment advice, or a guarantee of future cost.":
    "Estes valores em USD demonstram a apresentação do custo completo e a datação de vigência. Não são preços da Zoiko Rooms, médias de mercado, orçamentos de fornecedores, impostos, orientação sobre acessibilidade de custos, aconselhamento de investimento nem uma garantia de custo futuro.",
  "Occupancy & capacity": "Ocupação e capacidade",
  "Approved maximum and room/bed model, with source and date — no hidden extra occupant.":
    "Máximo aprovado e modelo de quarto/cama, com fonte e data — sem ocupante adicional oculto.",
  "Stay dates": "Datas de estadia",
  "Minimum/maximum stay, notice, renewal, extension, early termination and turnover.":
    "Estadia mínima/máxima, pré-aviso, renovação, prorrogação, rescisão antecipada e rotatividade.",
  "Household & shared living": "Agregado e vivência partilhada",
  "Private/shared spaces, current occupancy facts and household rules.":
    "Espaços privados/partilhados, factos de ocupação atuais e regras do agregado.",
  "Age & eligibility": "Idade e elegibilidade",
  "Only where lawful and necessary, with exact rule, source and alternatives.":
    "Apenas quando legal e necessário, com regra exata, fonte e alternativas.",
  "Pets & assistance animals": "Animais de estimação e de assistência",
  "Separate pet preference/rule from assistance-animal process; no disability inference.":
    "Separar a preferência/regra sobre animais de estimação do processo de animais de assistência; sem inferência de deficiência.",
  "Protected traits": "Características protegidas",
  "Never used for ranking, matching, filtering or eligibility outside a narrowly authorized lawful program.":
    "Nunca utilizadas para classificação, correspondência, filtragem ou elegibilidade fora de um programa legal estritamente autorizado.",
  "Review Cost Model": "Rever o modelo de custos",

  "Availability Ledger": "Livro de disponibilidade",
  "Availability is a ledger, not a single toggle.": "A disponibilidade é um livro-razão, não um simples interruptor.",
  "Available capacity for a room and date range equals current authorized capacity minus overlapping agreements, active reservations, accepted allocations, unexpired holds, maintenance blocks, owner use, and channel commitments.":
    "A capacidade disponível para um quarto e um intervalo de datas equivale à capacidade autorizada atual, menos contratos sobrepostos, reservas ativas, atribuições aceites, retenções não expiradas, bloqueios de manutenção, uso do proprietário e compromissos de canal.",
  "Open capacity": "Capacidade aberta",
  "Room/bed capacity available for a defined date range and authorized channel.":
    "Capacidade de quarto/cama disponível para um intervalo de datas definido e um canal autorizado.",
  "Soft hold": "Retenção temporária",
  "Temporary non-binding hold pending a named workflow, with a required expiry and owner.":
    "Retenção temporária não vinculativa enquanto se aguarda um fluxo de trabalho nomeado, com validade e responsável obrigatórios.",
  Reservation: "Reserva",
  "Approved temporary commitment with conditions, amount, and cancellation rules.":
    "Compromisso temporário aprovado com condições, valor e regras de cancelamento.",
  "Room proposed or assigned under an authorized organization program.":
    "Quarto proposto ou atribuído no âmbito de um programa de organização autorizado.",
  "Agreement commitment": "Compromisso contratual",
  "Signed or otherwise binding occupancy period with termination/change rules.":
    "Período de ocupação assinado ou vinculativo de outra forma, com regras de rescisão/alteração.",
  "Owner / provider use": "Uso do proprietário / fornecedor",
  "Approved period unavailable to market/program channels, with a reason category.":
    "Período aprovado indisponível para os canais de mercado/programa, com uma categoria de motivo.",
  "Maintenance block": "Bloqueio de manutenção",
  "Affected capacity or feature unavailable during an issue or remediation.":
    "Capacidade ou funcionalidade afetada indisponível durante um problema ou a sua correção.",
  "Channel block / quota": "Bloqueio / quota de canal",
  "Capacity reserved or withheld for a specific public or institutional channel.":
    "Capacidade reservada ou retida para um canal público ou institucional específico.",
  "Unknown / stale": "Desconhecido / desatualizado",
  "Availability that cannot currently be trusted for a consequential action.":
    "Disponibilidade que atualmente não pode ser considerada fiável para uma ação relevante.",
  Available: "Disponível",
  Limited: "Limitada",
  "On hold": "Em espera",
  Reserved: "Reservada",
  Allocated: "Atribuída",
  "Agreement pending": "Contrato pendente",
  "Occupied / agreement active": "Ocupado / contrato ativo",
  "Maintenance / blocked": "Manutenção / bloqueado",
  Unavailable: "Indisponível",
  "Availability status shown to participants — always with dates and conditions, never a bare label:":
    "Estado de disponibilidade apresentado aos participantes — sempre com datas e condições, nunca uma simples etiqueta:",
  "No Overbooking Promise": "Sem promessa de não sobrelotação",
  "The design uses a date-based commitment ledger, capacity and overlap checks, concurrency controls, source reconciliation, and Action Review. It must not promise that overbooking is impossible.":
    "O design utiliza um livro de compromissos baseado em datas, verificações de capacidade e sobreposição, controlos de concorrência, reconciliação de fontes e a revisão de ações. Não deve prometer que a sobrelotação é impossível.",
  "Explore Availability": "Explorar a disponibilidade",
};

export const proADictionary: LanguageDictionaries = { DE, FR, ES, PT };
