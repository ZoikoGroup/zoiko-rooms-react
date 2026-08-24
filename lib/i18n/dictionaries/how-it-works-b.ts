import type { LanguageDictionaries } from "../types";

const DE_STRINGS: Record<string, string> = {
  // verification-authority
  "Publish/unpublish listing": "Anzeige veröffentlichen/deaktivieren",
  "Block publication or keep private": "Veröffentlichung blockieren oder privat halten",
  "Read applicant data": "Bewerberdaten einsehen",
  "Deny access": "Zugriff verweigern",
  "Approve/decline applicant": "Bewerber annehmen/ablehnen",
  "No decision; route to authorized owner": "Keine Entscheidung; an autorisierten Verantwortlichen weiterleiten",
  "Sign agreement": "Vertrag unterzeichnen",
  "Block signature": "Unterschrift blockieren",
  "Receive payment": "Zahlung erhalten",
  "Block or hold payment": "Zahlung blockieren oder zurückhalten",
  "Change payment instructions": "Zahlungsanweisungen ändern",
  "Block, alert, and review": "Blockieren, warnen und prüfen",
  "Invite/manage team": "Team einladen/verwalten",
  "Block and route to admin": "Blockieren und an Admin weiterleiten",
  "Action-Specific Authority": "Handlungsbezogene Berechtigung",
  "Publishing a listing doesn't authorize everything else":
    "Eine Anzeige zu veröffentlichen berechtigt nicht automatisch zu allem anderen",
  Action: "Aktion",
  "Default If Authority Is Unclear": "Standardverhalten bei unklarer Berechtigung",
  Identity: "Identität",
  "Provider identity": "Identität des Anbieters",
  Confirmed: "Bestätigt",
  'Individual provider, "J. Alvarez"': "Privatanbieter, „J. Alvarez“",
  "Approved identity verification service": "Zugelassener Identitätsprüfungsdienst",
  "July 28, 2026": "28. Juli 2026",
  "Confirms this account belongs to a verified individual.":
    "Bestätigt, dass dieses Konto einer verifizierten Person gehört.",
  "Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room.":
    "Die Identitätsbestätigung belegt weder Eigentum, Auftragsverhältnis, Untervermietungserlaubnis noch das Recht, ein bestimmtes Zimmer zu veröffentlichen.",
  "Listing Authority": "Anzeigeberechtigung",
  "Listing authority": "Anzeigeberechtigung",
  "Room at 214 Birchwood Ave, Unit 3": "Zimmer in der 214 Birchwood Ave, Einheit 3",
  "Property title record, cross-checked with provider identity":
    "Grundbucheintrag, abgeglichen mit der Anbieteridentität",
  "Confirms current authority to advertise this specific room through March 31, 2027.":
    "Bestätigt die aktuelle Berechtigung, dieses konkrete Zimmer bis zum 31. März 2027 zu bewerben.",
  "This status does not confirm the room's condition, future availability, legal compliance, or payment outcome.":
    "Dieser Status bestätigt weder den Zustand des Zimmers noch künftige Verfügbarkeit, rechtliche Konformität oder den Zahlungsausgang.",
  "Room Evidence": "Zimmer-Nachweis",
  "Room evidence": "Zimmer-Nachweis",
  "Document Verified": "Dokument geprüft",
  "Room dimensions and furnishings, Unit 3": "Raummaße und Möblierung, Einheit 3",
  "Provider-submitted floor plan, reviewed by Zoiko Rooms staff":
    "Vom Anbieter eingereichter Grundriss, geprüft von Zoiko-Rooms-Mitarbeitenden",
  "July 12, 2026": "12. Juli 2026",
  "Confirms the declared dimensions and furnishings match a submitted document.":
    "Bestätigt, dass die angegebenen Maße und die Möblierung mit einem eingereichten Dokument übereinstimmen.",
  "Document review does not confirm the room's current physical condition, or that nothing has changed since the document was issued.":
    "Die Dokumentenprüfung bestätigt weder den aktuellen physischen Zustand des Zimmers noch, dass sich seit Ausstellung des Dokuments nichts geändert hat.",
  Availability: "Verfügbarkeit",
  "Available for Stated Dates": "Verfügbar für angegebenen Zeitraum",
  "Move-in window Aug 1 – Aug 15, 2026": "Einzugsfenster 1.–15. August 2026",
  "Provider-confirmed availability, last checked 2 days ago":
    "Vom Anbieter bestätigte Verfügbarkeit, zuletzt vor 2 Tagen geprüft",
  "July 26, 2026": "26. Juli 2026",
  "Confirms the provider marked this window available as of the last check.":
    "Bestätigt, dass der Anbieter dieses Zeitfenster bei der letzten Prüfung als verfügbar markiert hat.",
  "Availability can change between checks — confirm directly with the provider before making payment or travel plans.":
    "Die Verfügbarkeit kann sich zwischen den Prüfungen ändern — bestätigen Sie sie direkt beim Anbieter, bevor Sie zahlen oder reisen.",
  "Organization Relationship": "Organisationsbeziehung",
  "Organization relationship": "Organisationsbeziehung",
  Referred: "Vermittelt",
  "Named referral program record": "Erfasster Eintrag im Vermittlungsprogramm",
  "June 30, 2026": "30. Juni 2026",
  "Confirms the user arrived through a current, authorized university referral.":
    "Bestätigt, dass der Nutzer über eine aktuelle, autorisierte Universitätsvermittlung gekommen ist.",
  "A referral does not guarantee eligibility, room availability, approval, or payment support from the university.":
    "Eine Vermittlung garantiert weder Anspruchsberechtigung noch Zimmerverfügbarkeit, Genehmigung oder finanzielle Unterstützung durch die Universität.",
  "Decision Authority": "Entscheidungsbefugnis",
  "Decision authority": "Entscheidungsbefugnis",
  "Named Owner": "Benannter Verantwortlicher",
  "Provider account role assignment": "Rollenzuweisung im Anbieterkonto",
  "July 20, 2026": "20. Juli 2026",
  "Confirms a named, authorized human provider role owns the approve/decline decision for this application.":
    "Bestätigt, dass eine benannte, autorisierte Person auf Anbieterseite für die Annahme/Ablehnung dieser Bewerbung zuständig ist.",
  "This does not confirm the decision was made fairly, or that criteria were consistently applied.":
    "Dies bestätigt nicht, dass die Entscheidung fair getroffen oder die Kriterien konsistent angewendet wurden.",
  "Payment Authority": "Zahlungsberechtigung",
  "Payment authority": "Zahlungsberechtigung",
  "Rent and deposit for Unit 3": "Miete und Kaution für Einheit 3",
  "Approved payment route, recipient reconfirmed": "Genehmigter Zahlungsweg, Empfänger erneut bestätigt",
  "July 15, 2026": "15. Juli 2026",
  "Confirms the named recipient and route are currently authorized to receive payment for this room.":
    "Bestätigt, dass der benannte Empfänger und der Zahlungsweg aktuell zum Empfang der Zahlung für dieses Zimmer berechtigt sind.",
  "This does not guarantee a refund, dispute outcome, or that payment terms won't change before your next payment.":
    "Dies garantiert weder eine Rückerstattung noch den Ausgang eines Streitfalls oder dass sich die Zahlungsbedingungen bis zur nächsten Zahlung nicht ändern.",
  "Action Eligibility": "Handlungsberechtigung",
  "Action eligibility": "Handlungsberechtigung",
  Eligible: "Berechtigt",
  "Sign agreement, Unit 3": "Vertrag unterzeichnen, Einheit 3",
  "Current authority and application status": "Aktuelle Berechtigung und Bewerbungsstatus",
  "July 27, 2026": "27. Juli 2026",
  "Confirms this account currently has authority and status to sign this specific agreement.":
    "Bestätigt, dass dieses Konto aktuell berechtigt ist und den Status hat, diesen konkreten Vertrag zu unterzeichnen.",
  "Eligibility to act does not confirm the agreement's terms are final, or that no further review is required.":
    "Die Handlungsberechtigung bestätigt weder, dass die Vertragsbedingungen endgültig sind, noch dass keine weitere Prüfung erforderlich ist.",
  "Check the Right Thing": "Das Richtige prüfen",
  "One badge cannot represent the whole transaction": "Ein einzelnes Abzeichen kann nicht die gesamte Transaktion abbilden",
  "Provider identity, listing authority, room evidence, availability, complete costs, organization relationship, payment authority, and current action eligibility each require their own status, source, date, scope, and limitation. Click a dimension to see a real example.":
    "Anbieteridentität, Anzeigeberechtigung, Zimmer-Nachweis, Verfügbarkeit, vollständige Kosten, Organisationsbeziehung, Zahlungsberechtigung und aktuelle Handlungsberechtigung benötigen jeweils einen eigenen Status, eine Quelle, ein Datum, einen Geltungsbereich und eine Einschränkung. Klicken Sie auf eine Dimension, um ein reales Beispiel zu sehen.",
  Subject: "Gegenstand",
  Source: "Quelle",
  Checked: "Geprüft am",
  Scope: "Geltungsbereich",
  "What this does not prove": "Was dies nicht belegt",
  "Disputes, Revocation and Correction": "Anfechtung, Widerruf und Korrektur",
  "Neutral language, not public accusation": "Neutrale Sprache statt öffentlicher Anschuldigung",
  '"Fake landlord"': "„Falscher Vermieter“",
  '"Listing authority is disputed and publication is paused while evidence is reviewed."':
    "„Die Anzeigeberechtigung wird angefochten, die Veröffentlichung ist pausiert, bis die Nachweise geprüft sind.“",
  '"Fraudulent document"': "„Gefälschtes Dokument“",
  '"The document could not support the current status and requires further review."':
    "„Das Dokument konnte den aktuellen Status nicht stützen und erfordert eine weitere Prüfung.“",
  '"Unsafe provider"': "„Unsicherer Anbieter“",
  '"Specific communication, viewing, payment, or account actions are restricted during review."':
    "„Bestimmte Kommunikations-, Besichtigungs-, Zahlungs- oder Kontoaktionen sind während der Prüfung eingeschränkt.“",
  '"Failed verification"': "„Verifizierung fehlgeschlagen“",
  '"Verification could not be completed with the current evidence. Update information or contact support."':
    "„Die Verifizierung konnte mit den aktuellen Nachweisen nicht abgeschlossen werden. Bitte Angaben aktualisieren oder den Support kontaktieren.“",
  '"Blacklisted"': "„Gesperrt“",
  '"The account or action is restricted under the current policy and review process."':
    "„Das Konto oder die Aktion ist gemäß der aktuellen Richtlinie und dem Prüfprozess eingeschränkt.“",
  Avoid: "Vermeiden",
  "Use Instead": "Stattdessen verwenden",
  "Evidence Lifecycle": "Nachweis-Lebenszyklus",
  "Collected → checked → current → expiring → expired, revoked, or disputed":
    "Erfasst → geprüft → aktuell → läuft ab → abgelaufen, widerrufen oder angefochten",
  "Identify subject": "Gegenstand identifizieren",
  "Confirm role": "Rolle bestätigen",
  "Collect evidence": "Nachweise sammeln",
  "Check scope": "Geltungsbereich prüfen",
  "Show status": "Status anzeigen",
  "Maintain & respond": "Pflegen & reagieren",
  "Every status needs a source, effective date, review date, expiry or reconfirmation rule, scope, limitation, owner, and correction path.":
    "Jeder Status benötigt eine Quelle, ein Gültigkeitsdatum, ein Prüfdatum, eine Ablauf- oder Erneuerungsregel, einen Geltungsbereich, eine Einschränkung, einen Verantwortlichen und einen Korrekturweg.",
  "What does verified mean on Zoiko Rooms?": "Was bedeutet „verifiziert“ bei Zoiko Rooms?",
  "It always refers to a specific check, subject, source, date, and scope. Identity, listing authority, room evidence, availability, costs, organization relationship, decision authority, and payment authority remain separate.":
    "Es bezieht sich immer auf eine konkrete Prüfung, einen Gegenstand, eine Quelle, ein Datum und einen Geltungsbereich. Identität, Anzeigeberechtigung, Zimmer-Nachweis, Verfügbarkeit, Kosten, Organisationsbeziehung, Entscheidungsbefugnis und Zahlungsberechtigung bleiben getrennt.",
  "Does identity verification prove someone can list a room?":
    "Belegt die Identitätsprüfung, dass jemand ein Zimmer anzeigen darf?",
  "No. Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room — listing authority is checked separately.":
    "Nein. Die Identitätsbestätigung belegt weder Eigentum, Auftragsverhältnis, Untervermietungserlaubnis noch das Recht, ein bestimmtes Zimmer zu veröffentlichen — die Anzeigeberechtigung wird separat geprüft.",
  "How is a landlord or agent's authority checked?": "Wie wird die Berechtigung eines Vermieters oder Maklers geprüft?",
  "Each provider path has its own minimum authority chain — for example, a landlord's identity plus current ownership or lawful control plus exact property/room authority.":
    "Jeder Anbieterweg hat seine eigene Mindestkette an Berechtigungen — bei einem Vermieter etwa Identität plus aktuelles Eigentum oder rechtmäßige Verfügungsgewalt plus genaue Berechtigung für die Immobilie/das Zimmer.",
  "Can verification expire or be revoked?": "Kann eine Verifizierung ablaufen oder widerrufen werden?",
  "Yes. Every status carries an effective date, a review or expiry rule, and a correction path, so evidence can move from current to expiring to expired, revoked, or disputed.":
    "Ja. Jeder Status trägt ein Gültigkeitsdatum, eine Prüf- oder Ablaufregel und einen Korrekturweg, sodass ein Nachweis von aktuell über auslaufend zu abgelaufen, widerrufen oder angefochten wechseln kann.",
  "What documents are public?": "Welche Dokumente sind öffentlich?",
  "None directly. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document itself.":
    "Keine direkt. Öffentliche Ansichten zeigen einen abgegrenzten Status, eine Quellkategorie, ein Datum, eine Einschränkung und eine Handlungswirkung — nie das zugrunde liegende Dokument selbst.",
  "Who can approve an applicant or sign an agreement?": "Wer kann einen Bewerber genehmigen oder einen Vertrag unterzeichnen?",
  "Only a named, authorized human owner with confirmed decision or signature authority for that specific action — action-specific authority is never assumed from publishing rights alone.":
    "Nur eine benannte, autorisierte Person mit bestätigter Entscheidungs- oder Unterschriftsbefugnis für genau diese Handlung — eine handlungsbezogene Berechtigung wird nie allein aus dem Veröffentlichungsrecht angenommen.",
  "What happens if authority is disputed?": "Was passiert, wenn eine Berechtigung angefochten wird?",
  "The related status is marked disputed and publication or the affected action is paused while evidence is reviewed — described in neutral language, not public accusation.":
    "Der betreffende Status wird als angefochten markiert, und die Veröffentlichung oder die betroffene Aktion wird pausiert, während die Nachweise geprüft werden — in neutraler Sprache beschrieben, nicht als öffentliche Anschuldigung.",
  "Frequently Asked Questions": "Häufig gestellte Fragen",
  "Verification & Authority FAQ": "FAQ zu Verifizierung & Berechtigung",
  "Use the right status before your next action": "Nutzen Sie den richtigen Status vor Ihrer nächsten Aktion",
  "Continue to the room journey, provider journey, Room Passport, or Payments, Safety & Support with the current scoped status in view.":
    "Setzen Sie den Weg für Zimmersuchende, den Weg für Anbieter, Room Passport oder Zahlungen, Sicherheit & Support fort — mit dem aktuellen, abgegrenzten Status im Blick.",
  "Explore Room Passport": "Room Passport entdecken",
  "Get Support": "Support erhalten",
  "Know what was checked, whose authority applies, and what each status does — and does not — prove.":
    "Erfahren Sie, was geprüft wurde, wessen Berechtigung gilt und was jeder Status belegt — und was nicht.",
  "Zoiko Rooms keeps identity, listing authority, room evidence, organization relationships, availability, costs, payment authority, and action permissions separate so users can make informed decisions.":
    "Zoiko Rooms hält Identität, Anzeigeberechtigung, Zimmer-Nachweis, Organisationsbeziehungen, Verfügbarkeit, Kosten, Zahlungsberechtigung und Handlungsrechte getrennt, damit Nutzer fundierte Entscheidungen treffen können.",
  "Organization Authority": "Organisationsberechtigung",
  "What a relationship means — and doesn't": "Was eine Beziehung bedeutet — und was nicht",
  "The organization directed or invited the user to Zoiko Rooms; no guarantee of eligibility, room, approval, or payment.":
    "Die Organisation hat den Nutzer zu Zoiko Rooms geleitet oder eingeladen; keine Garantie für Anspruchsberechtigung, Zimmer, Genehmigung oder Zahlung.",
  Distributed: "Verteilt",
  "The organization makes approved inventory discoverable; provider authority and room evidence remain separate.":
    "Die Organisation macht genehmigtes Angebot auffindbar; Anbieterberechtigung und Zimmer-Nachweis bleiben getrennt.",
  Managed: "Verwaltet",
  "The organization or partner performs named listing/support operations; exact decisions and data access are shown.":
    "Die Organisation oder der Partner führt benannte Anzeige-/Support-Aufgaben aus; genaue Entscheidungen und Datenzugriffe werden angezeigt.",
  Allocated: "Zugewiesen",
  "A current process assigned or reserved inventory; dates, conditions, and alternatives are explicit.":
    "Ein aktueller Prozess hat Angebot zugewiesen oder reserviert; Termine, Bedingungen und Alternativen sind ausdrücklich angegeben.",
  Subsidized: "Bezuschusst",
  "The organization contributes under current eligibility and limits; uncovered costs remain visible.":
    "Die Organisation trägt im Rahmen aktueller Berechtigung und Grenzen bei; nicht gedeckte Kosten bleiben sichtbar.",
  "Direct billed": "Direkt abgerechnet",
  "Approved costs are billed to the organization; covered/excluded items and disputes are explicit.":
    "Genehmigte Kosten werden der Organisation in Rechnung gestellt; gedeckte/ausgeschlossene Posten und Streitfälle sind ausdrücklich angegeben.",
  "Every provider path has its own evidence chain": "Jeder Anbieterweg hat seine eigene Nachweiskette",
  "Provider Path": "Anbieterweg",
  "Minimum Authority Chain": "Mindest-Berechtigungskette",
  "Live-in provider": "Anbieter mit Eigennutzung",
  "Identity → current residence/occupation or control → permission where required → joint authority where applicable":
    "Identität → aktuelle Wohnnutzung oder Verfügungsgewalt → ggf. erforderliche Erlaubnis → ggf. gemeinsame Berechtigung",
  Landlord: "Vermieter",
  "Identity → current ownership or lawful control → exact property/room authority":
    "Identität → aktuelles Eigentum oder rechtmäßige Verfügungsgewalt → genaue Berechtigung für Immobilie/Zimmer",
  "Authorized agent": "Autorisierter Makler",
  "Agent identity → organization identity → current principal authority → written instruction/delegation":
    "Identität des Maklers → Identität der Organisation → aktuelle Vollmacht des Auftraggebers → schriftlicher Auftrag/Delegation",
  "Authorized subletter": "Autorisierter Untervermieter",
  "Identity → primary agreement/occupation → explicit permission → exact room/dates/conditions":
    "Identität → Hauptvertrag/Nutzung → ausdrückliche Erlaubnis → genaues Zimmer/Zeitraum/Bedingungen",
  "Organization provider": "Organisationsanbieter",
  "Representative identity → organization identity → role → inventory/provider relationship → distribution authority":
    "Identität der vertretenden Person → Identität der Organisation → Rolle → Angebots-/Anbieterbeziehung → Vertriebsberechtigung",
  "Separation of duties": "Funktionstrennung",
  "Where risk warrants it, the person who edits listing facts or payment instructions should not be able to approve their own high-risk change, issue a refund, or expand their own permissions without an independent authorized review.":
    "Wo das Risiko es rechtfertigt, sollte die Person, die Anzeigedaten oder Zahlungsanweisungen ändert, ihre eigene risikoreiche Änderung nicht ohne unabhängige, autorisierte Prüfung selbst genehmigen, eine Rückerstattung veranlassen oder eigene Rechte erweitern können.",
  "Privacy and Security": "Datenschutz und Sicherheit",
  "Documents stay controlled, always": "Dokumente bleiben stets kontrolliert",
  "No unredacted evidence appears in public pages, URLs, analytics, notifications, or client errors.":
    "Keine ungeschwärzten Nachweise erscheinen auf öffentlichen Seiten, in URLs, Analysen, Benachrichtigungen oder Client-Fehlern.",
  "Passwords, full banking credentials, security codes, or broad document bundles are never requested without a current purpose.":
    "Passwörter, vollständige Bankdaten, Sicherheitscodes oder umfangreiche Dokumentensammlungen werden nie ohne aktuellen Zweck angefordert.",
  "Evidence is never used for unrelated marketing, behavioral profiling, or hidden applicant decisions.":
    "Nachweise werden nie für sachfremdes Marketing, Verhaltensprofile oder verdeckte Bewerberentscheidungen verwendet.",
  'Records are retained only as long as legally, financially, or operationally necessary — not indefinitely "because it might be useful."':
    "Aufzeichnungen werden nur so lange aufbewahrt, wie es rechtlich, finanziell oder betrieblich notwendig ist — nicht unbegrenzt, „weil es vielleicht nützlich sein könnte“.",
  "Public Status Display": "Öffentliche Statusanzeige",
  "Enough to understand, not enough to expose": "Genug zum Verstehen, nicht genug zum Preisgeben",
  Example: "Beispiel",
  "\"Listing authority: Confirmed for this room through March 31, 2027. Source reviewed July 28, 2026. This status confirms current authority to advertise the room; it does not confirm the room's condition, future availability, legal compliance, provider behavior, or payment outcome.\"":
    "„Anzeigeberechtigung: Bestätigt für dieses Zimmer bis zum 31. März 2027. Quelle geprüft am 28. Juli 2026. Dieser Status bestätigt die aktuelle Berechtigung, das Zimmer zu bewerben; er bestätigt weder Zustand, künftige Verfügbarkeit, Rechtskonformität, Verhalten des Anbieters noch den Zahlungsausgang.“",
  "Documents and sensitive evidence remain private. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document.":
    "Dokumente und sensible Nachweise bleiben privat. Öffentliche Ansichten zeigen einen abgegrenzten Status, eine Quellkategorie, ein Datum, eine Einschränkung und eine Handlungswirkung — nie das zugrunde liegende Dokument.",
};

const FR_STRINGS: Record<string, string> = {
  "Publish/unpublish listing": "Publier/retirer une annonce",
  "Block publication or keep private": "Bloquer la publication ou garder privé",
  "Read applicant data": "Consulter les données du candidat",
  "Deny access": "Refuser l'accès",
  "Approve/decline applicant": "Accepter/refuser un candidat",
  "No decision; route to authorized owner": "Aucune décision ; transmis au responsable autorisé",
  "Sign agreement": "Signer le contrat",
  "Block signature": "Bloquer la signature",
  "Receive payment": "Recevoir un paiement",
  "Block or hold payment": "Bloquer ou suspendre le paiement",
  "Change payment instructions": "Modifier les instructions de paiement",
  "Block, alert, and review": "Bloquer, alerter et examiner",
  "Invite/manage team": "Inviter/gérer l'équipe",
  "Block and route to admin": "Bloquer et transmettre à l'administrateur",
  "Action-Specific Authority": "Autorité propre à chaque action",
  "Publishing a listing doesn't authorize everything else":
    "Publier une annonce n'autorise pas tout le reste",
  Action: "Action",
  "Default If Authority Is Unclear": "Comportement par défaut en cas d'autorité incertaine",
  Identity: "Identité",
  "Provider identity": "Identité du bailleur",
  Confirmed: "Confirmé",
  'Individual provider, "J. Alvarez"': "Bailleur particulier, « J. Alvarez »",
  "Approved identity verification service": "Service de vérification d'identité agréé",
  "July 28, 2026": "28 juillet 2026",
  "Confirms this account belongs to a verified individual.":
    "Confirme que ce compte appartient à une personne vérifiée.",
  "Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room.":
    "La confirmation d'identité ne prouve ni la propriété, ni un mandat d'agence, ni une autorisation de sous-location, ni le droit de publier une chambre précise.",
  "Listing Authority": "Autorité de publication",
  "Listing authority": "Autorité de publication",
  "Room at 214 Birchwood Ave, Unit 3": "Chambre au 214 Birchwood Ave, unité 3",
  "Property title record, cross-checked with provider identity":
    "Titre de propriété, recoupé avec l'identité du bailleur",
  "Confirms current authority to advertise this specific room through March 31, 2027.":
    "Confirme l'autorité actuelle de publier cette chambre précise jusqu'au 31 mars 2027.",
  "This status does not confirm the room's condition, future availability, legal compliance, or payment outcome.":
    "Ce statut ne confirme ni l'état de la chambre, ni sa disponibilité future, ni sa conformité légale, ni l'issue du paiement.",
  "Room Evidence": "Preuves relatives à la chambre",
  "Room evidence": "Preuves relatives à la chambre",
  "Document Verified": "Vérifié par document",
  "Room dimensions and furnishings, Unit 3": "Dimensions et ameublement, unité 3",
  "Provider-submitted floor plan, reviewed by Zoiko Rooms staff":
    "Plan soumis par le bailleur, examiné par l'équipe Zoiko Rooms",
  "July 12, 2026": "12 juillet 2026",
  "Confirms the declared dimensions and furnishings match a submitted document.":
    "Confirme que les dimensions et l'ameublement déclarés correspondent à un document soumis.",
  "Document review does not confirm the room's current physical condition, or that nothing has changed since the document was issued.":
    "L'examen du document ne confirme ni l'état physique actuel de la chambre, ni l'absence de changement depuis sa délivrance.",
  Availability: "Disponibilité",
  "Available for Stated Dates": "Disponible aux dates indiquées",
  "Move-in window Aug 1 – Aug 15, 2026": "Fenêtre d'emménagement du 1er au 15 août 2026",
  "Provider-confirmed availability, last checked 2 days ago":
    "Disponibilité confirmée par le bailleur, vérifiée il y a 2 jours",
  "July 26, 2026": "26 juillet 2026",
  "Confirms the provider marked this window available as of the last check.":
    "Confirme que le bailleur a marqué cette période comme disponible lors de la dernière vérification.",
  "Availability can change between checks — confirm directly with the provider before making payment or travel plans.":
    "La disponibilité peut changer entre deux vérifications — confirmez-la directement auprès du bailleur avant de payer ou de voyager.",
  "Organization Relationship": "Relation avec l'organisation",
  "Organization relationship": "Relation avec l'organisation",
  Referred: "Recommandé",
  "Named referral program record": "Enregistrement nominatif du programme de recommandation",
  "June 30, 2026": "30 juin 2026",
  "Confirms the user arrived through a current, authorized university referral.":
    "Confirme que l'utilisateur est arrivé via une recommandation universitaire actuelle et autorisée.",
  "A referral does not guarantee eligibility, room availability, approval, or payment support from the university.":
    "Une recommandation ne garantit ni l'éligibilité, ni la disponibilité d'une chambre, ni une approbation, ni une aide financière de l'université.",
  "Decision Authority": "Autorité de décision",
  "Decision authority": "Autorité de décision",
  "Named Owner": "Responsable nommé",
  "Provider account role assignment": "Attribution de rôle sur le compte bailleur",
  "July 20, 2026": "20 juillet 2026",
  "Confirms a named, authorized human provider role owns the approve/decline decision for this application.":
    "Confirme qu'une personne nommée et autorisée côté bailleur détient la décision d'acceptation/refus de cette candidature.",
  "This does not confirm the decision was made fairly, or that criteria were consistently applied.":
    "Cela ne confirme pas que la décision a été prise équitablement, ni que les critères ont été appliqués de façon cohérente.",
  "Payment Authority": "Autorité de paiement",
  "Payment authority": "Autorité de paiement",
  "Rent and deposit for Unit 3": "Loyer et dépôt pour l'unité 3",
  "Approved payment route, recipient reconfirmed": "Circuit de paiement approuvé, bénéficiaire reconfirmé",
  "July 15, 2026": "15 juillet 2026",
  "Confirms the named recipient and route are currently authorized to receive payment for this room.":
    "Confirme que le bénéficiaire nommé et le circuit sont actuellement autorisés à recevoir le paiement pour cette chambre.",
  "This does not guarantee a refund, dispute outcome, or that payment terms won't change before your next payment.":
    "Cela ne garantit ni un remboursement, ni l'issue d'un litige, ni que les conditions de paiement resteront identiques d'ici votre prochain paiement.",
  "Action Eligibility": "Éligibilité à l'action",
  "Action eligibility": "Éligibilité à l'action",
  Eligible: "Éligible",
  "Sign agreement, Unit 3": "Signer le contrat, unité 3",
  "Current authority and application status": "Autorité actuelle et statut de la candidature",
  "July 27, 2026": "27 juillet 2026",
  "Confirms this account currently has authority and status to sign this specific agreement.":
    "Confirme que ce compte dispose actuellement de l'autorité et du statut requis pour signer ce contrat précis.",
  "Eligibility to act does not confirm the agreement's terms are final, or that no further review is required.":
    "L'éligibilité à agir ne confirme pas que les termes du contrat sont définitifs, ni qu'aucun examen supplémentaire n'est requis.",
  "Check the Right Thing": "Vérifier ce qui compte vraiment",
  "One badge cannot represent the whole transaction": "Un seul badge ne peut pas représenter toute la transaction",
  "Provider identity, listing authority, room evidence, availability, complete costs, organization relationship, payment authority, and current action eligibility each require their own status, source, date, scope, and limitation. Click a dimension to see a real example.":
    "L'identité du bailleur, l'autorité de publication, les preuves relatives à la chambre, la disponibilité, les coûts complets, la relation avec l'organisation, l'autorité de paiement et l'éligibilité à l'action actuelle nécessitent chacun leur propre statut, source, date, portée et limitation. Cliquez sur une dimension pour voir un exemple réel.",
  Subject: "Sujet",
  Source: "Source",
  Checked: "Vérifié le",
  Scope: "Portée",
  "What this does not prove": "Ce que cela ne prouve pas",
  "Disputes, Revocation and Correction": "Litiges, révocation et correction",
  "Neutral language, not public accusation": "Un langage neutre, pas une accusation publique",
  '"Fake landlord"': "« Faux propriétaire »",
  '"Listing authority is disputed and publication is paused while evidence is reviewed."':
    "« L'autorité de publication est contestée et la publication est suspendue le temps d'examiner les preuves. »",
  '"Fraudulent document"': "« Document frauduleux »",
  '"The document could not support the current status and requires further review."':
    "« Le document ne peut pas étayer le statut actuel et nécessite un examen complémentaire. »",
  '"Unsafe provider"': "« Bailleur à risque »",
  '"Specific communication, viewing, payment, or account actions are restricted during review."':
    "« Certaines actions de communication, de visite, de paiement ou de compte sont restreintes pendant l'examen. »",
  '"Failed verification"': "« Vérification échouée »",
  '"Verification could not be completed with the current evidence. Update information or contact support."':
    "« La vérification n'a pas pu être menée à bien avec les preuves actuelles. Mettez à jour vos informations ou contactez l'assistance. »",
  '"Blacklisted"': "« Compte suspendu »",
  '"The account or action is restricted under the current policy and review process."':
    "« Le compte ou l'action est restreint conformément à la politique et au processus d'examen en vigueur. »",
  Avoid: "À éviter",
  "Use Instead": "À utiliser à la place",
  "Evidence Lifecycle": "Cycle de vie des preuves",
  "Collected → checked → current → expiring → expired, revoked, or disputed":
    "Collectée → vérifiée → à jour → bientôt expirée → expirée, révoquée ou contestée",
  "Identify subject": "Identifier le sujet",
  "Confirm role": "Confirmer le rôle",
  "Collect evidence": "Collecter les preuves",
  "Check scope": "Vérifier la portée",
  "Show status": "Afficher le statut",
  "Maintain & respond": "Maintenir et réagir",
  "Every status needs a source, effective date, review date, expiry or reconfirmation rule, scope, limitation, owner, and correction path.":
    "Chaque statut nécessite une source, une date d'effet, une date de révision, une règle d'expiration ou de reconfirmation, une portée, une limitation, un responsable et une voie de correction.",
  "What does verified mean on Zoiko Rooms?": "Que signifie « vérifié » sur Zoiko Rooms ?",
  "It always refers to a specific check, subject, source, date, and scope. Identity, listing authority, room evidence, availability, costs, organization relationship, decision authority, and payment authority remain separate.":
    "Cela renvoie toujours à une vérification précise, un sujet, une source, une date et une portée. Identité, autorité de publication, preuves relatives à la chambre, disponibilité, coûts, relation avec l'organisation, autorité de décision et autorité de paiement restent distinctes.",
  "Does identity verification prove someone can list a room?":
    "La vérification d'identité prouve-t-elle qu'une personne peut publier une chambre ?",
  "No. Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room — listing authority is checked separately.":
    "Non. La confirmation d'identité ne prouve ni la propriété, ni un mandat d'agence, ni une autorisation de sous-location, ni le droit de publier une chambre précise — l'autorité de publication est vérifiée séparément.",
  "How is a landlord or agent's authority checked?": "Comment l'autorité d'un propriétaire ou d'un agent est-elle vérifiée ?",
  "Each provider path has its own minimum authority chain — for example, a landlord's identity plus current ownership or lawful control plus exact property/room authority.":
    "Chaque profil de bailleur a sa propre chaîne d'autorité minimale — par exemple, pour un propriétaire : identité, plus propriété actuelle ou contrôle légal, plus autorité précise sur le bien/la chambre.",
  "Can verification expire or be revoked?": "Une vérification peut-elle expirer ou être révoquée ?",
  "Yes. Every status carries an effective date, a review or expiry rule, and a correction path, so evidence can move from current to expiring to expired, revoked, or disputed.":
    "Oui. Chaque statut porte une date d'effet, une règle de révision ou d'expiration, et une voie de correction, si bien qu'une preuve peut passer de à jour à bientôt expirée puis à expirée, révoquée ou contestée.",
  "What documents are public?": "Quels documents sont publics ?",
  "None directly. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document itself.":
    "Aucun directement. Les vues publiques affichent un statut délimité, une catégorie de source, une date, une limitation et un effet sur les actions — jamais le document sous-jacent.",
  "Who can approve an applicant or sign an agreement?": "Qui peut accepter un candidat ou signer un contrat ?",
  "Only a named, authorized human owner with confirmed decision or signature authority for that specific action — action-specific authority is never assumed from publishing rights alone.":
    "Seule une personne nommée et autorisée, disposant d'une autorité de décision ou de signature confirmée pour cette action précise — l'autorité propre à une action n'est jamais présumée du seul droit de publication.",
  "What happens if authority is disputed?": "Que se passe-t-il si l'autorité est contestée ?",
  "The related status is marked disputed and publication or the affected action is paused while evidence is reviewed — described in neutral language, not public accusation.":
    "Le statut concerné est marqué comme contesté, et la publication ou l'action concernée est suspendue le temps d'examiner les preuves — décrit dans un langage neutre, pas comme une accusation publique.",
  "Frequently Asked Questions": "Questions fréquentes",
  "Verification & Authority FAQ": "FAQ Vérification et autorité",
  "Use the right status before your next action": "Utilisez le bon statut avant votre prochaine action",
  "Continue to the room journey, provider journey, Room Passport, or Payments, Safety & Support with the current scoped status in view.":
    "Poursuivez le parcours locataire, le parcours bailleur, Room Passport, ou Paiements, sécurité et assistance en gardant à l'esprit le statut actuel délimité.",
  "Explore Room Passport": "Découvrir Room Passport",
  "Get Support": "Obtenir de l'aide",
  "Know what was checked, whose authority applies, and what each status does — and does not — prove.":
    "Sachez ce qui a été vérifié, quelle autorité s'applique, et ce que chaque statut prouve — ou ne prouve pas.",
  "Zoiko Rooms keeps identity, listing authority, room evidence, organization relationships, availability, costs, payment authority, and action permissions separate so users can make informed decisions.":
    "Zoiko Rooms garde séparés identité, autorité de publication, preuves relatives à la chambre, relations avec les organisations, disponibilité, coûts, autorité de paiement et droits d'action, afin que les utilisateurs puissent décider en toute connaissance de cause.",
  "Organization Authority": "Autorité de l'organisation",
  "What a relationship means — and doesn't": "Ce qu'une relation signifie — et ce qu'elle ne signifie pas",
  "The organization directed or invited the user to Zoiko Rooms; no guarantee of eligibility, room, approval, or payment.":
    "L'organisation a orienté ou invité l'utilisateur vers Zoiko Rooms ; aucune garantie d'éligibilité, de chambre, d'approbation ou de paiement.",
  Distributed: "Diffusé",
  "The organization makes approved inventory discoverable; provider authority and room evidence remain separate.":
    "L'organisation rend visible une offre approuvée ; l'autorité du bailleur et les preuves relatives à la chambre restent distinctes.",
  Managed: "Géré",
  "The organization or partner performs named listing/support operations; exact decisions and data access are shown.":
    "L'organisation ou le partenaire réalise des opérations nommées de publication/assistance ; les décisions exactes et les accès aux données sont indiqués.",
  Allocated: "Attribué",
  "A current process assigned or reserved inventory; dates, conditions, and alternatives are explicit.":
    "Un processus en cours a attribué ou réservé une offre ; dates, conditions et alternatives sont explicites.",
  Subsidized: "Subventionné",
  "The organization contributes under current eligibility and limits; uncovered costs remain visible.":
    "L'organisation contribue selon l'éligibilité et les limites en vigueur ; les coûts non couverts restent visibles.",
  "Direct billed": "Facturation directe",
  "Approved costs are billed to the organization; covered/excluded items and disputes are explicit.":
    "Les coûts approuvés sont facturés à l'organisation ; les éléments couverts/exclus et les litiges sont explicites.",
  "Every provider path has its own evidence chain": "Chaque profil de bailleur a sa propre chaîne de preuves",
  "Provider Path": "Profil de bailleur",
  "Minimum Authority Chain": "Chaîne d'autorité minimale",
  "Live-in provider": "Bailleur résident",
  "Identity → current residence/occupation or control → permission where required → joint authority where applicable":
    "Identité → résidence/occupation ou contrôle actuel → autorisation si nécessaire → autorité conjointe le cas échéant",
  Landlord: "Propriétaire",
  "Identity → current ownership or lawful control → exact property/room authority":
    "Identité → propriété actuelle ou contrôle légal → autorité précise sur le bien/la chambre",
  "Authorized agent": "Agent autorisé",
  "Agent identity → organization identity → current principal authority → written instruction/delegation":
    "Identité de l'agent → identité de l'organisation → autorité actuelle du mandant → instruction/délégation écrite",
  "Authorized subletter": "Sous-locataire autorisé",
  "Identity → primary agreement/occupation → explicit permission → exact room/dates/conditions":
    "Identité → contrat/occupation principal → autorisation explicite → chambre/dates/conditions précises",
  "Organization provider": "Organisation bailleur",
  "Representative identity → organization identity → role → inventory/provider relationship → distribution authority":
    "Identité du représentant → identité de l'organisation → rôle → relation offre/bailleur → autorité de distribution",
  "Separation of duties": "Séparation des tâches",
  "Where risk warrants it, the person who edits listing facts or payment instructions should not be able to approve their own high-risk change, issue a refund, or expand their own permissions without an independent authorized review.":
    "Lorsque le risque le justifie, la personne qui modifie les données de l'annonce ou les instructions de paiement ne devrait pas pouvoir approuver seule sa propre modification à risque, émettre un remboursement ou étendre ses propres droits sans un examen indépendant et autorisé.",
  "Privacy and Security": "Confidentialité et sécurité",
  "Documents stay controlled, always": "Les documents restent toujours contrôlés",
  "No unredacted evidence appears in public pages, URLs, analytics, notifications, or client errors.":
    "Aucune preuve non caviardée n'apparaît sur les pages publiques, dans les URL, les analyses, les notifications ou les erreurs client.",
  "Passwords, full banking credentials, security codes, or broad document bundles are never requested without a current purpose.":
    "Mots de passe, coordonnées bancaires complètes, codes de sécurité ou lots de documents étendus ne sont jamais demandés sans motif actuel.",
  "Evidence is never used for unrelated marketing, behavioral profiling, or hidden applicant decisions.":
    "Les preuves ne sont jamais utilisées à des fins de marketing non lié, de profilage comportemental ou de décisions cachées sur les candidats.",
  'Records are retained only as long as legally, financially, or operationally necessary — not indefinitely "because it might be useful."':
    "Les données ne sont conservées que le temps légalement, financièrement ou opérationnellement nécessaire — jamais indéfiniment « au cas où cela servirait ».",
  "Public Status Display": "Affichage public du statut",
  "Enough to understand, not enough to expose": "Assez pour comprendre, pas assez pour exposer",
  Example: "Exemple",
  "\"Listing authority: Confirmed for this room through March 31, 2027. Source reviewed July 28, 2026. This status confirms current authority to advertise the room; it does not confirm the room's condition, future availability, legal compliance, provider behavior, or payment outcome.\"":
    "« Autorité de publication : confirmée pour cette chambre jusqu'au 31 mars 2027. Source vérifiée le 28 juillet 2026. Ce statut confirme l'autorité actuelle de publier la chambre ; il ne confirme ni son état, ni sa disponibilité future, ni sa conformité légale, ni le comportement du bailleur, ni l'issue du paiement. »",
  "Documents and sensitive evidence remain private. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document.":
    "Les documents et les preuves sensibles restent privés. Les vues publiques affichent un statut délimité, une catégorie de source, une date, une limitation et un effet sur les actions — jamais le document sous-jacent.",
};

const ES_STRINGS: Record<string, string> = {
  "Publish/unpublish listing": "Publicar/retirar el anuncio",
  "Block publication or keep private": "Bloquear la publicación o mantener privado",
  "Read applicant data": "Consultar los datos del solicitante",
  "Deny access": "Denegar el acceso",
  "Approve/decline applicant": "Aceptar/rechazar solicitante",
  "No decision; route to authorized owner": "Sin decisión; se remite al responsable autorizado",
  "Sign agreement": "Firmar el contrato",
  "Block signature": "Bloquear la firma",
  "Receive payment": "Recibir el pago",
  "Block or hold payment": "Bloquear o retener el pago",
  "Change payment instructions": "Modificar las instrucciones de pago",
  "Block, alert, and review": "Bloquear, alertar y revisar",
  "Invite/manage team": "Invitar/gestionar equipo",
  "Block and route to admin": "Bloquear y remitir al administrador",
  "Action-Specific Authority": "Autoridad específica por acción",
  "Publishing a listing doesn't authorize everything else":
    "Publicar un anuncio no autoriza todo lo demás",
  Action: "Acción",
  "Default If Authority Is Unclear": "Comportamiento por defecto si la autoridad no está clara",
  Identity: "Identidad",
  "Provider identity": "Identidad del anfitrión",
  Confirmed: "Confirmado",
  'Individual provider, "J. Alvarez"': "Anfitrión particular, «J. Alvarez»",
  "Approved identity verification service": "Servicio aprobado de verificación de identidad",
  "July 28, 2026": "28 de julio de 2026",
  "Confirms this account belongs to a verified individual.":
    "Confirma que esta cuenta pertenece a una persona verificada.",
  "Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room.":
    "La confirmación de identidad no acredita propiedad, mandato de agencia, permiso de subarriendo ni el derecho a publicar una habitación concreta.",
  "Listing Authority": "Autoridad de publicación",
  "Listing authority": "Autoridad de publicación",
  "Room at 214 Birchwood Ave, Unit 3": "Habitación en 214 Birchwood Ave, unidad 3",
  "Property title record, cross-checked with provider identity":
    "Título de propiedad, contrastado con la identidad del anfitrión",
  "Confirms current authority to advertise this specific room through March 31, 2027.":
    "Confirma la autoridad actual para anunciar esta habitación concreta hasta el 31 de marzo de 2027.",
  "This status does not confirm the room's condition, future availability, legal compliance, or payment outcome.":
    "Este estado no confirma el estado de la habitación, su disponibilidad futura, el cumplimiento legal ni el resultado del pago.",
  "Room Evidence": "Evidencia de la habitación",
  "Room evidence": "Evidencia de la habitación",
  "Document Verified": "Verificado por documento",
  "Room dimensions and furnishings, Unit 3": "Dimensiones y mobiliario, unidad 3",
  "Provider-submitted floor plan, reviewed by Zoiko Rooms staff":
    "Plano presentado por el anfitrión, revisado por el equipo de Zoiko Rooms",
  "July 12, 2026": "12 de julio de 2026",
  "Confirms the declared dimensions and furnishings match a submitted document.":
    "Confirma que las dimensiones y el mobiliario declarados coinciden con un documento presentado.",
  "Document review does not confirm the room's current physical condition, or that nothing has changed since the document was issued.":
    "La revisión del documento no confirma el estado físico actual de la habitación ni que nada haya cambiado desde su emisión.",
  Availability: "Disponibilidad",
  "Available for Stated Dates": "Disponible en las fechas indicadas",
  "Move-in window Aug 1 – Aug 15, 2026": "Ventana de entrada del 1 al 15 de agosto de 2026",
  "Provider-confirmed availability, last checked 2 days ago":
    "Disponibilidad confirmada por el anfitrión, verificada hace 2 días",
  "July 26, 2026": "26 de julio de 2026",
  "Confirms the provider marked this window available as of the last check.":
    "Confirma que el anfitrión marcó esta ventana como disponible en la última verificación.",
  "Availability can change between checks — confirm directly with the provider before making payment or travel plans.":
    "La disponibilidad puede cambiar entre verificaciones — confírmala directamente con el anfitrión antes de pagar o viajar.",
  "Organization Relationship": "Relación con la organización",
  "Organization relationship": "Relación con la organización",
  Referred: "Derivado",
  "Named referral program record": "Registro nominal del programa de derivación",
  "June 30, 2026": "30 de junio de 2026",
  "Confirms the user arrived through a current, authorized university referral.":
    "Confirma que el usuario llegó mediante una derivación universitaria vigente y autorizada.",
  "A referral does not guarantee eligibility, room availability, approval, or payment support from the university.":
    "Una derivación no garantiza elegibilidad, disponibilidad de habitación, aprobación ni apoyo económico de la universidad.",
  "Decision Authority": "Autoridad de decisión",
  "Decision authority": "Autoridad de decisión",
  "Named Owner": "Responsable designado",
  "Provider account role assignment": "Asignación de rol en la cuenta del anfitrión",
  "July 20, 2026": "20 de julio de 2026",
  "Confirms a named, authorized human provider role owns the approve/decline decision for this application.":
    "Confirma que una persona designada y autorizada del anfitrión posee la decisión de aceptar/rechazar esta solicitud.",
  "This does not confirm the decision was made fairly, or that criteria were consistently applied.":
    "Esto no confirma que la decisión se tomara de forma justa ni que los criterios se aplicaran de manera coherente.",
  "Payment Authority": "Autoridad de pago",
  "Payment authority": "Autoridad de pago",
  "Rent and deposit for Unit 3": "Alquiler y depósito de la unidad 3",
  "Approved payment route, recipient reconfirmed": "Vía de pago aprobada, destinatario reconfirmado",
  "July 15, 2026": "15 de julio de 2026",
  "Confirms the named recipient and route are currently authorized to receive payment for this room.":
    "Confirma que el destinatario nombrado y la vía están actualmente autorizados para recibir el pago de esta habitación.",
  "This does not guarantee a refund, dispute outcome, or that payment terms won't change before your next payment.":
    "Esto no garantiza un reembolso, el resultado de una disputa, ni que las condiciones de pago no cambien antes de tu próximo pago.",
  "Action Eligibility": "Elegibilidad para la acción",
  "Action eligibility": "Elegibilidad para la acción",
  Eligible: "Elegible",
  "Sign agreement, Unit 3": "Firmar contrato, unidad 3",
  "Current authority and application status": "Autoridad actual y estado de la solicitud",
  "July 27, 2026": "27 de julio de 2026",
  "Confirms this account currently has authority and status to sign this specific agreement.":
    "Confirma que esta cuenta tiene actualmente la autoridad y el estado necesarios para firmar este contrato concreto.",
  "Eligibility to act does not confirm the agreement's terms are final, or that no further review is required.":
    "La elegibilidad para actuar no confirma que los términos del contrato sean definitivos ni que no se requiera otra revisión.",
  "Check the Right Thing": "Comprueba lo que realmente importa",
  "One badge cannot represent the whole transaction": "Una sola insignia no puede representar toda la transacción",
  "Provider identity, listing authority, room evidence, availability, complete costs, organization relationship, payment authority, and current action eligibility each require their own status, source, date, scope, and limitation. Click a dimension to see a real example.":
    "La identidad del anfitrión, la autoridad de publicación, la evidencia de la habitación, la disponibilidad, los costos completos, la relación con la organización, la autoridad de pago y la elegibilidad para la acción actual necesitan cada uno su propio estado, fuente, fecha, alcance y limitación. Haz clic en una dimensión para ver un ejemplo real.",
  Subject: "Sujeto",
  Source: "Fuente",
  Checked: "Verificado el",
  Scope: "Alcance",
  "What this does not prove": "Lo que esto no demuestra",
  "Disputes, Revocation and Correction": "Disputas, revocación y corrección",
  "Neutral language, not public accusation": "Lenguaje neutral, no una acusación pública",
  '"Fake landlord"': "«Propietario falso»",
  '"Listing authority is disputed and publication is paused while evidence is reviewed."':
    "«La autoridad de publicación está en disputa y la publicación se pausa mientras se revisa la evidencia.»",
  '"Fraudulent document"': "«Documento fraudulento»",
  '"The document could not support the current status and requires further review."':
    "«El documento no pudo respaldar el estado actual y requiere una revisión adicional.»",
  '"Unsafe provider"': "«Anfitrión de riesgo»",
  '"Specific communication, viewing, payment, or account actions are restricted during review."':
    "«Determinadas acciones de comunicación, visita, pago o cuenta quedan restringidas durante la revisión.»",
  '"Failed verification"': "«Verificación fallida»",
  '"Verification could not be completed with the current evidence. Update information or contact support."':
    "«La verificación no pudo completarse con la evidencia actual. Actualiza la información o contacta con soporte.»",
  '"Blacklisted"': "«Cuenta restringida»",
  '"The account or action is restricted under the current policy and review process."':
    "«La cuenta o la acción están restringidas según la política y el proceso de revisión vigentes.»",
  Avoid: "Evitar",
  "Use Instead": "Usar en su lugar",
  "Evidence Lifecycle": "Ciclo de vida de la evidencia",
  "Collected → checked → current → expiring → expired, revoked, or disputed":
    "Recopilada → verificada → vigente → por expirar → expirada, revocada o disputada",
  "Identify subject": "Identificar el sujeto",
  "Confirm role": "Confirmar el rol",
  "Collect evidence": "Recopilar evidencia",
  "Check scope": "Verificar el alcance",
  "Show status": "Mostrar el estado",
  "Maintain & respond": "Mantener y responder",
  "Every status needs a source, effective date, review date, expiry or reconfirmation rule, scope, limitation, owner, and correction path.":
    "Cada estado necesita una fuente, una fecha de vigencia, una fecha de revisión, una regla de expiración o reconfirmación, un alcance, una limitación, un responsable y una vía de corrección.",
  "What does verified mean on Zoiko Rooms?": "¿Qué significa «verificado» en Zoiko Rooms?",
  "It always refers to a specific check, subject, source, date, and scope. Identity, listing authority, room evidence, availability, costs, organization relationship, decision authority, and payment authority remain separate.":
    "Siempre se refiere a una verificación concreta, un sujeto, una fuente, una fecha y un alcance. Identidad, autoridad de publicación, evidencia de la habitación, disponibilidad, costos, relación con la organización, autoridad de decisión y autoridad de pago se mantienen separadas.",
  "Does identity verification prove someone can list a room?":
    "¿La verificación de identidad demuestra que alguien puede publicar una habitación?",
  "No. Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room — listing authority is checked separately.":
    "No. La confirmación de identidad no acredita propiedad, mandato de agencia, permiso de subarriendo ni el derecho a publicar una habitación concreta — la autoridad de publicación se verifica por separado.",
  "How is a landlord or agent's authority checked?": "¿Cómo se verifica la autoridad de un propietario o agente?",
  "Each provider path has its own minimum authority chain — for example, a landlord's identity plus current ownership or lawful control plus exact property/room authority.":
    "Cada perfil de anfitrión tiene su propia cadena mínima de autoridad — por ejemplo, en un propietario: identidad, más propiedad actual o control legal, más autoridad exacta sobre el inmueble/la habitación.",
  "Can verification expire or be revoked?": "¿Puede una verificación expirar o ser revocada?",
  "Yes. Every status carries an effective date, a review or expiry rule, and a correction path, so evidence can move from current to expiring to expired, revoked, or disputed.":
    "Sí. Cada estado lleva una fecha de vigencia, una regla de revisión o expiración y una vía de corrección, de modo que la evidencia puede pasar de vigente a por expirar y luego a expirada, revocada o disputada.",
  "What documents are public?": "¿Qué documentos son públicos?",
  "None directly. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document itself.":
    "Ninguno directamente. Las vistas públicas muestran un estado delimitado, una categoría de fuente, una fecha, una limitación y un efecto sobre las acciones — nunca el documento subyacente.",
  "Who can approve an applicant or sign an agreement?": "¿Quién puede aprobar a un solicitante o firmar un contrato?",
  "Only a named, authorized human owner with confirmed decision or signature authority for that specific action — action-specific authority is never assumed from publishing rights alone.":
    "Solo una persona designada y autorizada, con autoridad de decisión o firma confirmada para esa acción concreta — la autoridad específica de una acción nunca se presume solo por el derecho de publicación.",
  "What happens if authority is disputed?": "¿Qué ocurre si se disputa la autoridad?",
  "The related status is marked disputed and publication or the affected action is paused while evidence is reviewed — described in neutral language, not public accusation.":
    "El estado correspondiente se marca como disputado y la publicación o la acción afectada se pausa mientras se revisa la evidencia — descrito en lenguaje neutral, no como una acusación pública.",
  "Frequently Asked Questions": "Preguntas frecuentes",
  "Verification & Authority FAQ": "Preguntas frecuentes sobre verificación y autoridad",
  "Use the right status before your next action": "Usa el estado correcto antes de tu próxima acción",
  "Continue to the room journey, provider journey, Room Passport, or Payments, Safety & Support with the current scoped status in view.":
    "Continúa con el recorrido de quien busca habitación, el del anfitrión, Room Passport, o Pagos, seguridad y asistencia, teniendo en cuenta el estado actual delimitado.",
  "Explore Room Passport": "Explorar Room Passport",
  "Get Support": "Obtener ayuda",
  "Know what was checked, whose authority applies, and what each status does — and does not — prove.":
    "Descubre qué se verificó, qué autoridad aplica y qué demuestra —y qué no— cada estado.",
  "Zoiko Rooms keeps identity, listing authority, room evidence, organization relationships, availability, costs, payment authority, and action permissions separate so users can make informed decisions.":
    "Zoiko Rooms mantiene separados la identidad, la autoridad de publicación, la evidencia de la habitación, las relaciones con organizaciones, la disponibilidad, los costos, la autoridad de pago y los permisos de acción, para que los usuarios tomen decisiones informadas.",
  "Organization Authority": "Autoridad de la organización",
  "What a relationship means — and doesn't": "Qué significa una relación — y qué no",
  "The organization directed or invited the user to Zoiko Rooms; no guarantee of eligibility, room, approval, or payment.":
    "La organización dirigió o invitó al usuario a Zoiko Rooms; sin garantía de elegibilidad, habitación, aprobación o pago.",
  Distributed: "Distribuido",
  "The organization makes approved inventory discoverable; provider authority and room evidence remain separate.":
    "La organización hace visible una oferta aprobada; la autoridad del anfitrión y la evidencia de la habitación se mantienen separadas.",
  Managed: "Gestionado",
  "The organization or partner performs named listing/support operations; exact decisions and data access are shown.":
    "La organización o el socio realizan operaciones nombradas de publicación/soporte; se muestran las decisiones exactas y el acceso a los datos.",
  Allocated: "Asignado",
  "A current process assigned or reserved inventory; dates, conditions, and alternatives are explicit.":
    "Un proceso vigente asignó o reservó oferta; las fechas, condiciones y alternativas son explícitas.",
  Subsidized: "Subvencionado",
  "The organization contributes under current eligibility and limits; uncovered costs remain visible.":
    "La organización contribuye según la elegibilidad y los límites vigentes; los costos no cubiertos permanecen visibles.",
  "Direct billed": "Facturación directa",
  "Approved costs are billed to the organization; covered/excluded items and disputes are explicit.":
    "Los costos aprobados se facturan a la organización; los elementos cubiertos/excluidos y las disputas son explícitos.",
  "Every provider path has its own evidence chain": "Cada perfil de anfitrión tiene su propia cadena de evidencia",
  "Provider Path": "Perfil de anfitrión",
  "Minimum Authority Chain": "Cadena mínima de autoridad",
  "Live-in provider": "Anfitrión residente",
  "Identity → current residence/occupation or control → permission where required → joint authority where applicable":
    "Identidad → residencia/ocupación o control actual → permiso cuando corresponda → autoridad conjunta cuando aplique",
  Landlord: "Propietario",
  "Identity → current ownership or lawful control → exact property/room authority":
    "Identidad → propiedad actual o control legal → autoridad exacta sobre el inmueble/la habitación",
  "Authorized agent": "Agente autorizado",
  "Agent identity → organization identity → current principal authority → written instruction/delegation":
    "Identidad del agente → identidad de la organización → autoridad actual del mandante → instrucción/delegación escrita",
  "Authorized subletter": "Subarrendador autorizado",
  "Identity → primary agreement/occupation → explicit permission → exact room/dates/conditions":
    "Identidad → contrato/ocupación principal → permiso explícito → habitación/fechas/condiciones exactas",
  "Organization provider": "Organización anfitriona",
  "Representative identity → organization identity → role → inventory/provider relationship → distribution authority":
    "Identidad del representante → identidad de la organización → rol → relación oferta/anfitrión → autoridad de distribución",
  "Separation of duties": "Separación de funciones",
  "Where risk warrants it, the person who edits listing facts or payment instructions should not be able to approve their own high-risk change, issue a refund, or expand their own permissions without an independent authorized review.":
    "Cuando el riesgo lo justifique, la persona que edita los datos del anuncio o las instrucciones de pago no debería poder aprobar su propio cambio de alto riesgo, emitir un reembolso ni ampliar sus propios permisos sin una revisión independiente y autorizada.",
  "Privacy and Security": "Privacidad y seguridad",
  "Documents stay controlled, always": "Los documentos permanecen siempre controlados",
  "No unredacted evidence appears in public pages, URLs, analytics, notifications, or client errors.":
    "Ninguna evidencia sin redactar aparece en páginas públicas, URLs, analíticas, notificaciones o errores del cliente.",
  "Passwords, full banking credentials, security codes, or broad document bundles are never requested without a current purpose.":
    "Nunca se solicitan contraseñas, credenciales bancarias completas, códigos de seguridad o lotes amplios de documentos sin un propósito vigente.",
  "Evidence is never used for unrelated marketing, behavioral profiling, or hidden applicant decisions.":
    "La evidencia nunca se usa para marketing no relacionado, perfiles de comportamiento o decisiones ocultas sobre solicitantes.",
  'Records are retained only as long as legally, financially, or operationally necessary — not indefinitely "because it might be useful."':
    "Los registros se conservan solo el tiempo legal, financiero u operativamente necesario — nunca indefinidamente «por si acaso resulta útil».",
  "Public Status Display": "Visualización pública del estado",
  "Enough to understand, not enough to expose": "Suficiente para entender, no suficiente para exponer",
  Example: "Ejemplo",
  "\"Listing authority: Confirmed for this room through March 31, 2027. Source reviewed July 28, 2026. This status confirms current authority to advertise the room; it does not confirm the room's condition, future availability, legal compliance, provider behavior, or payment outcome.\"":
    "«Autoridad de publicación: confirmada para esta habitación hasta el 31 de marzo de 2027. Fuente verificada el 28 de julio de 2026. Este estado confirma la autoridad actual para anunciar la habitación; no confirma su estado, disponibilidad futura, cumplimiento legal, comportamiento del anfitrión ni el resultado del pago.»",
  "Documents and sensitive evidence remain private. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document.":
    "Los documentos y la evidencia sensible permanecen privados. Las vistas públicas muestran un estado delimitado, una categoría de fuente, una fecha, una limitación y un efecto sobre las acciones — nunca el documento subyacente.",
};

const PT_STRINGS: Record<string, string> = {
  "Publish/unpublish listing": "Publicar/despublicar anúncio",
  "Block publication or keep private": "Bloquear publicação ou manter privado",
  "Read applicant data": "Consultar dados do candidato",
  "Deny access": "Negar acesso",
  "Approve/decline applicant": "Aprovar/recusar candidato",
  "No decision; route to authorized owner": "Sem decisão; encaminhado ao responsável autorizado",
  "Sign agreement": "Assinar contrato",
  "Block signature": "Bloquear assinatura",
  "Receive payment": "Receber pagamento",
  "Block or hold payment": "Bloquear ou reter pagamento",
  "Change payment instructions": "Alterar instruções de pagamento",
  "Block, alert, and review": "Bloquear, alertar e analisar",
  "Invite/manage team": "Convidar/gerir equipa",
  "Block and route to admin": "Bloquear e encaminhar ao administrador",
  "Action-Specific Authority": "Autoridade específica por ação",
  "Publishing a listing doesn't authorize everything else":
    "Publicar um anúncio não autoriza tudo o resto",
  Action: "Ação",
  "Default If Authority Is Unclear": "Comportamento padrão quando a autoridade não é clara",
  Identity: "Identidade",
  "Provider identity": "Identidade do anfitrião",
  Confirmed: "Confirmado",
  'Individual provider, "J. Alvarez"': "Anfitrião particular, «J. Alvarez»",
  "Approved identity verification service": "Serviço aprovado de verificação de identidade",
  "July 28, 2026": "28 de julho de 2026",
  "Confirms this account belongs to a verified individual.":
    "Confirma que esta conta pertence a uma pessoa verificada.",
  "Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room.":
    "A confirmação de identidade não comprova propriedade, mandato de agência, permissão de sublocação nem o direito de publicar um quarto específico.",
  "Listing Authority": "Autoridade de publicação",
  "Listing authority": "Autoridade de publicação",
  "Room at 214 Birchwood Ave, Unit 3": "Quarto no 214 Birchwood Ave, unidade 3",
  "Property title record, cross-checked with provider identity":
    "Título de propriedade, cruzado com a identidade do anfitrião",
  "Confirms current authority to advertise this specific room through March 31, 2027.":
    "Confirma a autoridade atual para anunciar este quarto específico até 31 de março de 2027.",
  "This status does not confirm the room's condition, future availability, legal compliance, or payment outcome.":
    "Este estado não confirma o estado do quarto, a disponibilidade futura, a conformidade legal nem o resultado do pagamento.",
  "Room Evidence": "Evidência do quarto",
  "Room evidence": "Evidência do quarto",
  "Document Verified": "Verificado por documento",
  "Room dimensions and furnishings, Unit 3": "Dimensões e mobiliário, unidade 3",
  "Provider-submitted floor plan, reviewed by Zoiko Rooms staff":
    "Planta submetida pelo anfitrião, revista pela equipa da Zoiko Rooms",
  "July 12, 2026": "12 de julho de 2026",
  "Confirms the declared dimensions and furnishings match a submitted document.":
    "Confirma que as dimensões e o mobiliário declarados correspondem a um documento submetido.",
  "Document review does not confirm the room's current physical condition, or that nothing has changed since the document was issued.":
    "A revisão do documento não confirma o estado físico atual do quarto, nem que nada mudou desde a sua emissão.",
  Availability: "Disponibilidade",
  "Available for Stated Dates": "Disponível nas datas indicadas",
  "Move-in window Aug 1 – Aug 15, 2026": "Janela de entrada de 1 a 15 de agosto de 2026",
  "Provider-confirmed availability, last checked 2 days ago":
    "Disponibilidade confirmada pelo anfitrião, verificada há 2 dias",
  "July 26, 2026": "26 de julho de 2026",
  "Confirms the provider marked this window available as of the last check.":
    "Confirma que o anfitrião marcou esta janela como disponível na última verificação.",
  "Availability can change between checks — confirm directly with the provider before making payment or travel plans.":
    "A disponibilidade pode mudar entre verificações — confirme diretamente com o anfitrião antes de pagar ou viajar.",
  "Organization Relationship": "Relação com a organização",
  "Organization relationship": "Relação com a organização",
  Referred: "Encaminhado",
  "Named referral program record": "Registo nominal do programa de encaminhamento",
  "June 30, 2026": "30 de junho de 2026",
  "Confirms the user arrived through a current, authorized university referral.":
    "Confirma que o utilizador chegou através de um encaminhamento universitário atual e autorizado.",
  "A referral does not guarantee eligibility, room availability, approval, or payment support from the university.":
    "Um encaminhamento não garante elegibilidade, disponibilidade de quarto, aprovação nem apoio financeiro da universidade.",
  "Decision Authority": "Autoridade de decisão",
  "Decision authority": "Autoridade de decisão",
  "Named Owner": "Responsável designado",
  "Provider account role assignment": "Atribuição de função na conta do anfitrião",
  "July 20, 2026": "20 de julho de 2026",
  "Confirms a named, authorized human provider role owns the approve/decline decision for this application.":
    "Confirma que uma pessoa designada e autorizada do anfitrião detém a decisão de aprovar/recusar esta candidatura.",
  "This does not confirm the decision was made fairly, or that criteria were consistently applied.":
    "Isto não confirma que a decisão foi tomada de forma justa, nem que os critérios foram aplicados de forma consistente.",
  "Payment Authority": "Autoridade de pagamento",
  "Payment authority": "Autoridade de pagamento",
  "Rent and deposit for Unit 3": "Renda e caução da unidade 3",
  "Approved payment route, recipient reconfirmed": "Via de pagamento aprovada, destinatário reconfirmado",
  "July 15, 2026": "15 de julho de 2026",
  "Confirms the named recipient and route are currently authorized to receive payment for this room.":
    "Confirma que o destinatário nomeado e a via estão atualmente autorizados a receber o pagamento deste quarto.",
  "This does not guarantee a refund, dispute outcome, or that payment terms won't change before your next payment.":
    "Isto não garante um reembolso, o resultado de uma disputa, nem que as condições de pagamento não mudem antes do próximo pagamento.",
  "Action Eligibility": "Elegibilidade para a ação",
  "Action eligibility": "Elegibilidade para a ação",
  Eligible: "Elegível",
  "Sign agreement, Unit 3": "Assinar contrato, unidade 3",
  "Current authority and application status": "Autoridade atual e estado da candidatura",
  "July 27, 2026": "27 de julho de 2026",
  "Confirms this account currently has authority and status to sign this specific agreement.":
    "Confirma que esta conta tem atualmente a autoridade e o estado necessários para assinar este contrato específico.",
  "Eligibility to act does not confirm the agreement's terms are final, or that no further review is required.":
    "A elegibilidade para agir não confirma que os termos do contrato são definitivos, nem que não é necessária mais revisão.",
  "Check the Right Thing": "Verifique o que realmente importa",
  "One badge cannot represent the whole transaction": "Um único selo não pode representar toda a transação",
  "Provider identity, listing authority, room evidence, availability, complete costs, organization relationship, payment authority, and current action eligibility each require their own status, source, date, scope, and limitation. Click a dimension to see a real example.":
    "A identidade do anfitrião, a autoridade de publicação, a evidência do quarto, a disponibilidade, os custos completos, a relação com a organização, a autoridade de pagamento e a elegibilidade para a ação atual necessitam, cada uma, do seu próprio estado, fonte, data, âmbito e limitação. Clique numa dimensão para ver um exemplo real.",
  Subject: "Assunto",
  Source: "Fonte",
  Checked: "Verificado em",
  Scope: "Âmbito",
  "What this does not prove": "O que isto não comprova",
  "Disputes, Revocation and Correction": "Litígios, revogação e correção",
  "Neutral language, not public accusation": "Linguagem neutra, não uma acusação pública",
  '"Fake landlord"': "«Senhorio falso»",
  '"Listing authority is disputed and publication is paused while evidence is reviewed."':
    "«A autoridade de publicação está em disputa e a publicação é pausada enquanto as evidências são analisadas.»",
  '"Fraudulent document"': "«Documento fraudulento»",
  '"The document could not support the current status and requires further review."':
    "«O documento não conseguiu sustentar o estado atual e requer análise adicional.»",
  '"Unsafe provider"': "«Anfitrião de risco»",
  '"Specific communication, viewing, payment, or account actions are restricted during review."':
    "«Determinadas ações de comunicação, visita, pagamento ou conta ficam restritas durante a análise.»",
  '"Failed verification"': "«Verificação falhada»",
  '"Verification could not be completed with the current evidence. Update information or contact support."':
    "«A verificação não pôde ser concluída com as evidências atuais. Atualize as informações ou contacte o suporte.»",
  '"Blacklisted"': "«Conta restringida»",
  '"The account or action is restricted under the current policy and review process."':
    "«A conta ou a ação está restringida segundo a política e o processo de revisão vigentes.»",
  Avoid: "Evitar",
  "Use Instead": "Usar em vez disso",
  "Evidence Lifecycle": "Ciclo de vida da evidência",
  "Collected → checked → current → expiring → expired, revoked, or disputed":
    "Recolhida → verificada → atual → a expirar → expirada, revogada ou contestada",
  "Identify subject": "Identificar o sujeito",
  "Confirm role": "Confirmar o papel",
  "Collect evidence": "Recolher evidências",
  "Check scope": "Verificar o âmbito",
  "Show status": "Mostrar o estado",
  "Maintain & respond": "Manter e responder",
  "Every status needs a source, effective date, review date, expiry or reconfirmation rule, scope, limitation, owner, and correction path.":
    "Cada estado precisa de uma fonte, uma data de vigência, uma data de revisão, uma regra de expiração ou reconfirmação, um âmbito, uma limitação, um responsável e uma via de correção.",
  "What does verified mean on Zoiko Rooms?": "O que significa «verificado» na Zoiko Rooms?",
  "It always refers to a specific check, subject, source, date, and scope. Identity, listing authority, room evidence, availability, costs, organization relationship, decision authority, and payment authority remain separate.":
    "Refere-se sempre a uma verificação específica, um sujeito, uma fonte, uma data e um âmbito. Identidade, autoridade de publicação, evidência do quarto, disponibilidade, custos, relação com a organização, autoridade de decisão e autoridade de pagamento mantêm-se separadas.",
  "Does identity verification prove someone can list a room?":
    "A verificação de identidade comprova que alguém pode publicar um quarto?",
  "No. Identity confirmation does not prove ownership, agency instruction, sublet permission, or the right to publish any specific room — listing authority is checked separately.":
    "Não. A confirmação de identidade não comprova propriedade, mandato de agência, permissão de sublocação nem o direito de publicar um quarto específico — a autoridade de publicação é verificada separadamente.",
  "How is a landlord or agent's authority checked?": "Como é verificada a autoridade de um senhorio ou agente?",
  "Each provider path has its own minimum authority chain — for example, a landlord's identity plus current ownership or lawful control plus exact property/room authority.":
    "Cada percurso de anfitrião tem a sua própria cadeia mínima de autoridade — por exemplo, num senhorio: identidade, mais propriedade atual ou controlo legal, mais autoridade exata sobre o imóvel/quarto.",
  "Can verification expire or be revoked?": "Uma verificação pode expirar ou ser revogada?",
  "Yes. Every status carries an effective date, a review or expiry rule, and a correction path, so evidence can move from current to expiring to expired, revoked, or disputed.":
    "Sim. Cada estado tem uma data de vigência, uma regra de revisão ou expiração e uma via de correção, pelo que a evidência pode passar de atual a a expirar e depois a expirada, revogada ou contestada.",
  "What documents are public?": "Que documentos são públicos?",
  "None directly. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document itself.":
    "Nenhum diretamente. As vistas públicas mostram um estado delimitado, uma categoria de fonte, uma data, uma limitação e um efeito sobre as ações — nunca o documento subjacente.",
  "Who can approve an applicant or sign an agreement?": "Quem pode aprovar um candidato ou assinar um contrato?",
  "Only a named, authorized human owner with confirmed decision or signature authority for that specific action — action-specific authority is never assumed from publishing rights alone.":
    "Apenas uma pessoa designada e autorizada, com autoridade de decisão ou assinatura confirmada para essa ação específica — a autoridade específica de uma ação nunca se presume apenas a partir do direito de publicação.",
  "What happens if authority is disputed?": "O que acontece se a autoridade for contestada?",
  "The related status is marked disputed and publication or the affected action is paused while evidence is reviewed — described in neutral language, not public accusation.":
    "O estado relacionado é marcado como contestado e a publicação ou a ação afetada é pausada enquanto as evidências são analisadas — descrito em linguagem neutra, não como acusação pública.",
  "Frequently Asked Questions": "Perguntas frequentes",
  "Verification & Authority FAQ": "Perguntas frequentes sobre verificação e autoridade",
  "Use the right status before your next action": "Use o estado correto antes da sua próxima ação",
  "Continue to the room journey, provider journey, Room Passport, or Payments, Safety & Support with the current scoped status in view.":
    "Continue para o percurso de quem procura quarto, o percurso do anfitrião, Room Passport, ou Pagamentos, segurança e suporte, tendo em conta o estado atual delimitado.",
  "Explore Room Passport": "Explorar o Room Passport",
  "Get Support": "Obter suporte",
  "Know what was checked, whose authority applies, and what each status does — and does not — prove.":
    "Saiba o que foi verificado, que autoridade se aplica e o que cada estado comprova — e o que não comprova.",
  "Zoiko Rooms keeps identity, listing authority, room evidence, organization relationships, availability, costs, payment authority, and action permissions separate so users can make informed decisions.":
    "A Zoiko Rooms mantém separados identidade, autoridade de publicação, evidência do quarto, relações com organizações, disponibilidade, custos, autoridade de pagamento e permissões de ação, para que os utilizadores possam tomar decisões informadas.",
  "Organization Authority": "Autoridade da organização",
  "What a relationship means — and doesn't": "O que significa uma relação — e o que não significa",
  "The organization directed or invited the user to Zoiko Rooms; no guarantee of eligibility, room, approval, or payment.":
    "A organização direcionou ou convidou o utilizador para a Zoiko Rooms; sem garantia de elegibilidade, quarto, aprovação ou pagamento.",
  Distributed: "Distribuído",
  "The organization makes approved inventory discoverable; provider authority and room evidence remain separate.":
    "A organização torna visível uma oferta aprovada; a autoridade do anfitrião e a evidência do quarto mantêm-se separadas.",
  Managed: "Gerido",
  "The organization or partner performs named listing/support operations; exact decisions and data access are shown.":
    "A organização ou o parceiro realiza operações nomeadas de publicação/suporte; as decisões exatas e o acesso aos dados são apresentados.",
  Allocated: "Atribuído",
  "A current process assigned or reserved inventory; dates, conditions, and alternatives are explicit.":
    "Um processo atual atribuiu ou reservou oferta; datas, condições e alternativas são explícitas.",
  Subsidized: "Subsidiado",
  "The organization contributes under current eligibility and limits; uncovered costs remain visible.":
    "A organização contribui de acordo com a elegibilidade e os limites vigentes; os custos não cobertos permanecem visíveis.",
  "Direct billed": "Faturação direta",
  "Approved costs are billed to the organization; covered/excluded items and disputes are explicit.":
    "Os custos aprovados são faturados à organização; os itens cobertos/excluídos e as disputas são explícitos.",
  "Every provider path has its own evidence chain": "Cada percurso de anfitrião tem a sua própria cadeia de evidências",
  "Provider Path": "Percurso do anfitrião",
  "Minimum Authority Chain": "Cadeia mínima de autoridade",
  "Live-in provider": "Anfitrião residente",
  "Identity → current residence/occupation or control → permission where required → joint authority where applicable":
    "Identidade → residência/ocupação ou controlo atual → permissão quando necessário → autoridade conjunta quando aplicável",
  Landlord: "Senhorio",
  "Identity → current ownership or lawful control → exact property/room authority":
    "Identidade → propriedade atual ou controlo legal → autoridade exata sobre o imóvel/quarto",
  "Authorized agent": "Agente autorizado",
  "Agent identity → organization identity → current principal authority → written instruction/delegation":
    "Identidade do agente → identidade da organização → autoridade atual do mandante → instrução/delegação escrita",
  "Authorized subletter": "Sublocador autorizado",
  "Identity → primary agreement/occupation → explicit permission → exact room/dates/conditions":
    "Identidade → contrato/ocupação principal → permissão explícita → quarto/datas/condições exatas",
  "Organization provider": "Organização anfitriã",
  "Representative identity → organization identity → role → inventory/provider relationship → distribution authority":
    "Identidade do representante → identidade da organização → função → relação oferta/anfitrião → autoridade de distribuição",
  "Separation of duties": "Separação de funções",
  "Where risk warrants it, the person who edits listing facts or payment instructions should not be able to approve their own high-risk change, issue a refund, or expand their own permissions without an independent authorized review.":
    "Quando o risco o justifique, a pessoa que edita os dados do anúncio ou as instruções de pagamento não deve poder aprovar sozinha a sua própria alteração de alto risco, emitir um reembolso ou expandir as suas próprias permissões sem uma revisão independente e autorizada.",
  "Privacy and Security": "Privacidade e segurança",
  "Documents stay controlled, always": "Os documentos permanecem sempre controlados",
  "No unredacted evidence appears in public pages, URLs, analytics, notifications, or client errors.":
    "Nenhuma evidência não redigida aparece em páginas públicas, URLs, análises, notificações ou erros do cliente.",
  "Passwords, full banking credentials, security codes, or broad document bundles are never requested without a current purpose.":
    "Palavras-passe, dados bancários completos, códigos de segurança ou grandes conjuntos de documentos nunca são solicitados sem um propósito atual.",
  "Evidence is never used for unrelated marketing, behavioral profiling, or hidden applicant decisions.":
    "As evidências nunca são usadas para marketing não relacionado, perfis comportamentais ou decisões ocultas sobre candidatos.",
  'Records are retained only as long as legally, financially, or operationally necessary — not indefinitely "because it might be useful."':
    "Os registos são conservados apenas o tempo legal, financeira ou operacionalmente necessário — nunca indefinidamente «porque pode ser útil».",
  "Public Status Display": "Exibição pública do estado",
  "Enough to understand, not enough to expose": "O suficiente para compreender, não o suficiente para expor",
  Example: "Exemplo",
  "\"Listing authority: Confirmed for this room through March 31, 2027. Source reviewed July 28, 2026. This status confirms current authority to advertise the room; it does not confirm the room's condition, future availability, legal compliance, provider behavior, or payment outcome.\"":
    "«Autoridade de publicação: confirmada para este quarto até 31 de março de 2027. Fonte revista em 28 de julho de 2026. Este estado confirma a autoridade atual para anunciar o quarto; não confirma o seu estado, disponibilidade futura, conformidade legal, comportamento do anfitrião nem o resultado do pagamento.»",
  "Documents and sensitive evidence remain private. Public views show a scoped status, source category, date, limitation, and action effect — never the underlying document.":
    "Os documentos e as evidências sensíveis permanecem privados. As vistas públicas mostram um estado delimitado, uma categoria de fonte, uma data, uma limitação e um efeito sobre as ações — nunca o documento subjacente.",
};

export const howItWorksBDictionary: LanguageDictionaries = {
  DE: DE_STRINGS,
  FR: FR_STRINGS,
  ES: ES_STRINGS,
  PT: PT_STRINGS,
};
