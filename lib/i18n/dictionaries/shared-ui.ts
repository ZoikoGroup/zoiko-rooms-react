import type { LanguageDictionaries } from "../types";

const DE = {
  "Back to home": "Zurück zur Startseite",

  "Close modal": "Fenster schließen",
  "Talk to Zoiko Rooms": "Mit Zoiko Rooms sprechen",

  "DISTRIBUTION MODEL": "VERTRIEBSMODELL",
  "Institutional model": "Institutionelles Modell",
  "INSTITUTION ROLE": "ROLLE DER INSTITUTION",
  "PARTICIPANT EXPERIENCE": "ERFAHRUNG DER TEILNEHMENDEN",
  "Required limitation:": "Erforderliche Einschränkung:",
  "EXAMPLE FLOW": "BEISPIELABLAUF",
  CAPABILITY: "FUNKTION",

  "Institution allocates a specific room under current criteria.":
    "Die Institution weist ein bestimmtes Zimmer nach aktuellen Kriterien zu.",
  "Participant reviews full room facts and costs before deciding.":
    "Der/die Teilnehmende prüft alle Zimmerdetails und Kosten vor der Entscheidung.",
  "Participant accepts, declines, or requests an alternative — all logged.":
    "Der/die Teilnehmende nimmt an, lehnt ab oder fordert eine Alternative an – alles wird protokolliert.",
  Allocation: "Zuweisung",
  "The institution assigns or proposes exact room capacity under declared rules.":
    "Die Institution weist Zimmerkapazität gemäß festgelegten Regeln zu oder schlägt sie vor.",
  "Participants see the room, dates, costs, alternatives, and a clear acceptance/decline path with expiry.":
    "Teilnehmende sehen das Zimmer, die Termine, Kosten, Alternativen sowie einen klaren Annahme-/Ablehnungsweg mit Ablauffrist.",
  "No coercive acceptance and no suitability guarantee.":
    "Keine erzwungene Annahme und keine Eignungsgarantie.",

  "Approved provider networks": "Genehmigte Anbieternetzwerke",
  "Approved provider networks let an institution work with a vetted set of providers under a framework or preferred-network relationship, with the same Room Passport evidence and authority checks as the open marketplace.":
    "Genehmigte Anbieternetzwerke ermöglichen es einer Institution, mit einer geprüften Gruppe von Anbietern im Rahmen einer Vereinbarung oder bevorzugten Netzwerkbeziehung zusammenzuarbeiten – mit denselben Room-Passport-Nachweisen und Berechtigungsprüfungen wie im offenen Marktplatz.",
  "Network inclusion does not prove universal quality, compliance, safety, or room suitability.":
    "Die Aufnahme in ein Netzwerk belegt keine allgemeine Qualität, Compliance, Sicherheit oder Eignung des Zimmers.",

  "Institution defines the cohort (e.g. incoming graduate students).":
    "Die Institution definiert die Zielgruppe (z. B. neu eintreffende Graduiertenstudierende).",
  "Approved provider inventory is published to that catalog.":
    "Das genehmigte Anbieterangebot wird in diesem Katalog veröffentlicht.",
  "Participants browse and apply exactly as they would in open search.":
    "Teilnehmende durchsuchen und bewerben sich genauso wie bei der offenen Suche.",
  "Audience catalog": "Zielgruppenkatalog",
  "The institution makes approved rooms visible to a defined cohort — a scoped window into current supply.":
    "Die Institution macht genehmigte Zimmer für eine definierte Zielgruppe sichtbar – ein begrenztes Fenster in das aktuelle Angebot.",
  "Participants browse scoped, current supply with the same evidence and cost transparency as the open marketplace.":
    "Teilnehmende durchsuchen ein begrenztes, aktuelles Angebot mit derselben Nachweis- und Kostentransparenz wie im offenen Marktplatz.",
  "Catalog access is not eligibility, allocation, or funding — it's discovery only.":
    "Zugang zum Katalog bedeutet weder Berechtigung noch Zuweisung noch Finanzierung – er dient nur der Entdeckung.",

  "Every connection uses minimum necessary scopes, not broad account access.":
    "Jede Verbindung nutzt die minimal erforderlichen Berechtigungen, keinen umfassenden Kontozugriff.",
  "Field mapping, freshness, and error handling are explicit and monitored.":
    "Feldzuordnung, Aktualität und Fehlerbehandlung sind eindeutig festgelegt und werden überwacht.",
  "Offboarding a connection is a governed process — access doesn't linger.":
    "Die Beendigung einer Verbindung ist ein geregelter Prozess – Zugriffsrechte bleiben nicht bestehen.",
  "Integrations & API": "Integrationen & API",
  "Integrations connect approved identity, program, inventory, finance, and support systems under tightly scoped access.":
    "Integrationen verbinden genehmigte Identitäts-, Programm-, Bestands-, Finanz- und Supportsysteme mit eng begrenztem Zugriff.",
  "Integration claims require approved systems and current scopes — access is never assumed by default.":
    "Integrationsansprüche erfordern genehmigte Systeme und aktuelle Berechtigungen – Zugriff wird niemals standardmäßig angenommen.",

  "Institution sends an invitation with a defined expiry.":
    "Die Institution sendet eine Einladung mit festgelegter Ablauffrist.",
  "Participant opens the invitation and reviews visible data scope.":
    "Der/die Teilnehmende öffnet die Einladung und prüft den sichtbaren Datenumfang.",
  "Participant proceeds independently — or ignores it with no penalty.":
    "Der/die Teilnehmende fährt eigenständig fort – oder ignoriert die Einladung ohne Nachteile.",
  "Referral / invitation": "Empfehlung / Einladung",
  "The institution invites a person to search or begin a journey — a nudge, not a guarantee.":
    "Die Institution lädt eine Person ein, zu suchen oder einen Weg zu beginnen – ein Anstoß, keine Garantie.",
  "Participants see the referral source, its expiry, what data becomes visible, and their alternatives.":
    "Teilnehmende sehen die Empfehlungsquelle, deren Ablauffrist, welche Daten sichtbar werden, und ihre Alternativen.",
  "No room or outcome guarantee comes with a referral.":
    "Eine Empfehlung ist keine Garantie für ein Zimmer oder ein bestimmtes Ergebnis.",

  "SAMPLE FUNDING BREAKDOWN": "BEISPIELHAFTE FINANZIERUNGSAUFSCHLÜSSELUNG",
  "Generic institutional funding example — USD":
    "Allgemeines Beispiel institutioneller Finanzierung – USD",
  "These amounts demonstrate contribution and participant responsibility only. They are not Zoiko Rooms prices, institution funding promises, market averages, tax advice, benefits advice, or affordability guidance.":
    "Diese Beträge veranschaulichen lediglich den Beitrag und die Verantwortung der Teilnehmenden. Es handelt sich nicht um Preise von Zoiko Rooms, Finanzierungszusagen der Institution, Marktdurchschnitte, Steuerberatung, Beratung zu Sozialleistungen oder Erschwinglichkeitsempfehlungen.",
  "Monthly room rent:": "Monatliche Zimmermiete:",
  "$1,500 per month": "1.500 $ pro Monat",
  "Security deposit:": "Kaution:",
  "Required move-in fee:": "Erforderliche Einzugsgebühr:",
  "Estimated utilities:": "Geschätzte Nebenkosten:",
  "$150 per month": "150 $ pro Monat",
  "Institution contribution:": "Beitrag der Institution:",
  "$900 per month for the first three months": "900 $ pro Monat für die ersten drei Monate",
  "Participant recurring responsibility:": "Laufende Verantwortung des/der Teilnehmenden:",
  "$750 estimated per month during the contribution period":
    "geschätzt 750 $ pro Monat während des Beitragszeitraums",
  "Participant upfront responsibility:": "Vorab-Verantwortung des/der Teilnehmenden:",
  "$1,600 unless the approved program also covers the deposit or fee":
    "1.600 $, sofern das genehmigte Programm die Kaution oder Gebühr nicht ebenfalls übernimmt",

  "Institution defines covered cost categories and amount/formula.":
    "Die Institution legt die abgedeckten Kostenkategorien und den Betrag/die Formel fest.",
  "Approval is authorized by a named decision owner.":
    "Die Genehmigung wird von einer namentlich benannten verantwortlichen Person erteilt.",
  "Participant sees contribution and their share before committing to payment.":
    "Der/die Teilnehmende sieht den Beitrag und den eigenen Anteil, bevor eine Zahlungsverpflichtung eingegangen wird.",
  "Subsidy / allowance / voucher": "Zuschuss / Beihilfe / Gutschein",
  "The institution contributes toward cost under current, authorized approval.":
    "Die Institution beteiligt sich an den Kosten im Rahmen einer aktuellen, genehmigten Freigabe.",
  "Participants see exactly what's covered, what's excluded, and their own remaining share.":
    "Teilnehmende sehen genau, was abgedeckt ist, was ausgeschlossen ist und welcher Anteil ihnen verbleibt.",
  "Funding is not confirmed until current authorization completes.":
    "Die Finanzierung ist erst bestätigt, wenn die aktuelle Genehmigung abgeschlossen ist.",

  "OPERATING MODEL": "BETRIEBSMODELL",
  "Portfolio hierarchy rules behind the operating view":
    "Hierarchieregeln des Portfolios hinter der Betriebsansicht",
  "Stable identifiers:": "Stabile Kennungen:",
  "internal immutable IDs; public IDs and external references mapped separately.":
    "interne, unveränderliche IDs; öffentliche IDs und externe Referenzen werden separat zugeordnet.",
  "Parent-child integrity:": "Eltern-Kind-Integrität:",
  "no room without an approved parent property/unit context; no circular or orphaned relationships.":
    "kein Zimmer ohne genehmigten übergeordneten Objekt-/Einheitenkontext; keine zirkulären oder verwaisten Beziehungen.",
  "Many-to-many relationships:": "Viele-zu-viele-Beziehungen:",
  "provider, manager, owner, institution, channel and service relationships modeled separately with scope and dates.":
    "Anbieter-, Verwalter-, Eigentümer-, Institutions-, Kanal- und Dienstleistungsbeziehungen werden separat mit Umfang und Daten modelliert.",
  "Legal and operational names:": "Rechtliche und betriebliche Namen:",
  "legal entity, public brand, property name, internal code and external system references are all preserved.":
    "juristische Person, öffentliche Marke, Objektname, interner Code und externe Systemreferenzen bleiben alle erhalten.",
  "Canonical identity rule:": "Regel der kanonischen Identität:",
  "a property, room or bed must not receive a new identity merely because it enters another spreadsheet, channel, institution, integration, provider relationship or reporting structure.":
    "eine Immobilie, ein Zimmer oder ein Bett darf keine neue Identität erhalten, nur weil es in eine andere Tabelle, einen anderen Kanal, eine andere Institution, Integration, Anbieterbeziehung oder Berichtsstruktur aufgenommen wird.",
  "Explore Portfolio Structure": "Portfoliostruktur erkunden",

  "PORTFOLIO STRUCTURE": "PORTFOLIOSTRUKTUR",
  "Canonical objects, from organization to bed": "Kanonische Objekte, von der Organisation bis zum Bett",
  "Organization / tenant:": "Organisation / Mandant:",
  "stable ID, legal/display name, tenant owner, data region, status.":
    "stabile ID, rechtlicher/angezeigter Name, Mandanteninhaber, Datenregion, Status.",
  "Provider:": "Anbieter:",
  "stable ID, provider type, authority scope, effective period, responsible role, status.":
    "stabile ID, Anbietertyp, Berechtigungsumfang, Gültigkeitszeitraum, verantwortliche Rolle, Status.",
  "Portfolio:": "Portfolio:",
  "stable ID, parent, owner, scope, currency/time-zone defaults, status.":
    "stabile ID, übergeordnete Einheit, Eigentümer, Umfang, Standardwährung/-zeitzone, Status.",
  "Property / building:": "Immobilie / Gebäude:",
  "stable ID, private address, public location rules, owner/operator, access, status.":
    "stabile ID, private Adresse, öffentliche Standortregeln, Eigentümer/Betreiber, Zugang, Status.",
  "Unit / household:": "Einheit / Haushalt:",
  "stable ID, parent property, occupancy/capacity, shared spaces, responsible role.":
    "stabile ID, übergeordnete Immobilie, Belegung/Kapazität, gemeinsam genutzte Bereiche, verantwortliche Rolle.",
  "Room:": "Zimmer:",
  "stable ID, parent, room type, provider authority, Passport version, status.":
    "stabile ID, übergeordnete Einheit, Zimmertyp, Anbieterberechtigung, Passport-Version, Status.",
  "Bed / space:": "Bett / Platz:",
  "stable ID, parent room, capacity, exclusivity/shared rules, occupancy, status.":
    "stabile ID, übergeordnetes Zimmer, Kapazität, Exklusivitäts-/Freigaberegeln, Belegung, Status.",
  "Explore Room Passports": "Room Passports erkunden",

  "Search rooms": "Zimmer suchen",
  "Close search": "Suche schließen",
  "Search by city, university, or neighborhood": "Nach Stadt, Universität oder Stadtviertel suchen",
  "Popular searches": "Beliebte Suchanfragen",
  "Rooms near universities": "Zimmer in Universitätsnähe",
  "Healthcare housing": "Wohnraum für das Gesundheitswesen",
};

const FR = {
  "Back to home": "Retour à l'accueil",

  "Close modal": "Fermer la fenêtre",
  "Talk to Zoiko Rooms": "Parler à Zoiko Rooms",

  "DISTRIBUTION MODEL": "MODÈLE DE DISTRIBUTION",
  "Institutional model": "Modèle institutionnel",
  "INSTITUTION ROLE": "RÔLE DE L'INSTITUTION",
  "PARTICIPANT EXPERIENCE": "EXPÉRIENCE DU PARTICIPANT",
  "Required limitation:": "Limite obligatoire :",
  "EXAMPLE FLOW": "EXEMPLE DE PARCOURS",
  CAPABILITY: "FONCTIONNALITÉ",

  "Institution allocates a specific room under current criteria.":
    "L'institution attribue une chambre précise selon les critères en vigueur.",
  "Participant reviews full room facts and costs before deciding.":
    "Le participant consulte tous les détails et coûts de la chambre avant de décider.",
  "Participant accepts, declines, or requests an alternative — all logged.":
    "Le participant accepte, refuse ou demande une alternative — tout est enregistré.",
  Allocation: "Attribution",
  "The institution assigns or proposes exact room capacity under declared rules.":
    "L'institution attribue ou propose une capacité de chambre précise selon des règles déclarées.",
  "Participants see the room, dates, costs, alternatives, and a clear acceptance/decline path with expiry.":
    "Les participants voient la chambre, les dates, les coûts, les alternatives et un parcours clair d'acceptation/refus avec échéance.",
  "No coercive acceptance and no suitability guarantee.":
    "Aucune acceptation forcée et aucune garantie d'adéquation.",

  "Approved provider networks": "Réseaux de bailleurs approuvés",
  "Approved provider networks let an institution work with a vetted set of providers under a framework or preferred-network relationship, with the same Room Passport evidence and authority checks as the open marketplace.":
    "Les réseaux de bailleurs approuvés permettent à une institution de collaborer avec un ensemble vérifié de bailleurs dans le cadre d'un accord ou d'une relation de réseau privilégié, avec les mêmes preuves Room Passport et vérifications d'autorité que sur le marché ouvert.",
  "Network inclusion does not prove universal quality, compliance, safety, or room suitability.":
    "L'inclusion dans un réseau ne prouve pas une qualité, une conformité, une sécurité ou une adéquation universelles de la chambre.",

  "Institution defines the cohort (e.g. incoming graduate students).":
    "L'institution définit la cohorte (par ex. nouveaux étudiants de troisième cycle).",
  "Approved provider inventory is published to that catalog.":
    "L'offre des bailleurs approuvés est publiée dans ce catalogue.",
  "Participants browse and apply exactly as they would in open search.":
    "Les participants parcourent et postulent exactement comme dans la recherche ouverte.",
  "Audience catalog": "Catalogue par profil",
  "The institution makes approved rooms visible to a defined cohort — a scoped window into current supply.":
    "L'institution rend les chambres approuvées visibles pour une cohorte définie — une fenêtre limitée sur l'offre actuelle.",
  "Participants browse scoped, current supply with the same evidence and cost transparency as the open marketplace.":
    "Les participants parcourent une offre actuelle et délimitée, avec la même transparence des preuves et des coûts que sur le marché ouvert.",
  "Catalog access is not eligibility, allocation, or funding — it's discovery only.":
    "L'accès au catalogue ne constitue ni une éligibilité, ni une attribution, ni un financement — il s'agit uniquement de découverte.",

  "Every connection uses minimum necessary scopes, not broad account access.":
    "Chaque connexion utilise les autorisations strictement nécessaires, et non un accès élargi au compte.",
  "Field mapping, freshness, and error handling are explicit and monitored.":
    "Le mappage des champs, l'actualisation des données et la gestion des erreurs sont explicites et surveillés.",
  "Offboarding a connection is a governed process — access doesn't linger.":
    "La suppression d'une connexion suit un processus encadré — l'accès ne perdure pas.",
  "Integrations & API": "Intégrations et API",
  "Integrations connect approved identity, program, inventory, finance, and support systems under tightly scoped access.":
    "Les intégrations relient les systèmes approuvés d'identité, de programme, d'inventaire, de finance et de support, avec un accès strictement limité.",
  "Integration claims require approved systems and current scopes — access is never assumed by default.":
    "Toute revendication d'intégration exige des systèmes approuvés et des autorisations à jour — l'accès n'est jamais présumé par défaut.",

  "Institution sends an invitation with a defined expiry.":
    "L'institution envoie une invitation avec une échéance définie.",
  "Participant opens the invitation and reviews visible data scope.":
    "Le participant ouvre l'invitation et consulte l'étendue des données visibles.",
  "Participant proceeds independently — or ignores it with no penalty.":
    "Le participant poursuit de manière autonome — ou ignore l'invitation sans pénalité.",
  "Referral / invitation": "Recommandation / invitation",
  "The institution invites a person to search or begin a journey — a nudge, not a guarantee.":
    "L'institution invite une personne à rechercher ou à entamer un parcours — une incitation, non une garantie.",
  "Participants see the referral source, its expiry, what data becomes visible, and their alternatives.":
    "Les participants voient la source de la recommandation, son échéance, les données rendues visibles et leurs alternatives.",
  "No room or outcome guarantee comes with a referral.":
    "Une recommandation ne garantit ni chambre ni résultat.",

  "SAMPLE FUNDING BREAKDOWN": "EXEMPLE DE RÉPARTITION DU FINANCEMENT",
  "Generic institutional funding example — USD":
    "Exemple générique de financement institutionnel — USD",
  "These amounts demonstrate contribution and participant responsibility only. They are not Zoiko Rooms prices, institution funding promises, market averages, tax advice, benefits advice, or affordability guidance.":
    "Ces montants illustrent uniquement la contribution et la responsabilité du participant. Il ne s'agit pas de tarifs Zoiko Rooms, de promesses de financement de l'institution, de moyennes du marché, de conseils fiscaux, de conseils sur les aides sociales ou de recommandations d'accessibilité financière.",
  "Monthly room rent:": "Loyer mensuel de la chambre :",
  "$1,500 per month": "1 500 $ par mois",
  "Security deposit:": "Dépôt de garantie :",
  "Required move-in fee:": "Frais d'entrée obligatoires :",
  "Estimated utilities:": "Charges estimées :",
  "$150 per month": "150 $ par mois",
  "Institution contribution:": "Contribution de l'institution :",
  "$900 per month for the first three months": "900 $ par mois pendant les trois premiers mois",
  "Participant recurring responsibility:": "Responsabilité récurrente du participant :",
  "$750 estimated per month during the contribution period":
    "750 $ estimés par mois pendant la période de contribution",
  "Participant upfront responsibility:": "Responsabilité initiale du participant :",
  "$1,600 unless the approved program also covers the deposit or fee":
    "1 600 $, sauf si le programme approuvé couvre également le dépôt ou les frais",

  "Institution defines covered cost categories and amount/formula.":
    "L'institution définit les catégories de coûts couvertes et le montant/la formule.",
  "Approval is authorized by a named decision owner.":
    "L'approbation est autorisée par un décisionnaire nommément désigné.",
  "Participant sees contribution and their share before committing to payment.":
    "Le participant voit la contribution et sa part avant de s'engager au paiement.",
  "Subsidy / allowance / voucher": "Subvention / allocation / bon",
  "The institution contributes toward cost under current, authorized approval.":
    "L'institution contribue aux coûts dans le cadre d'une approbation actuelle et autorisée.",
  "Participants see exactly what's covered, what's excluded, and their own remaining share.":
    "Les participants voient précisément ce qui est couvert, ce qui est exclu et la part qui leur reste à payer.",
  "Funding is not confirmed until current authorization completes.":
    "Le financement n'est confirmé qu'une fois l'autorisation en cours finalisée.",

  "OPERATING MODEL": "MODÈLE OPÉRATIONNEL",
  "Portfolio hierarchy rules behind the operating view":
    "Règles de hiérarchie du portefeuille derrière la vue opérationnelle",
  "Stable identifiers:": "Identifiants stables :",
  "internal immutable IDs; public IDs and external references mapped separately.":
    "identifiants internes immuables ; identifiants publics et références externes cartographiés séparément.",
  "Parent-child integrity:": "Intégrité parent-enfant :",
  "no room without an approved parent property/unit context; no circular or orphaned relationships.":
    "aucune chambre sans contexte parent propriété/unité approuvé ; aucune relation circulaire ou orpheline.",
  "Many-to-many relationships:": "Relations plusieurs-à-plusieurs :",
  "provider, manager, owner, institution, channel and service relationships modeled separately with scope and dates.":
    "les relations avec les bailleurs, gestionnaires, propriétaires, institutions, canaux et services sont modélisées séparément avec portée et dates.",
  "Legal and operational names:": "Dénominations juridiques et opérationnelles :",
  "legal entity, public brand, property name, internal code and external system references are all preserved.":
    "l'entité juridique, la marque publique, le nom de la propriété, le code interne et les références des systèmes externes sont tous conservés.",
  "Canonical identity rule:": "Règle d'identité canonique :",
  "a property, room or bed must not receive a new identity merely because it enters another spreadsheet, channel, institution, integration, provider relationship or reporting structure.":
    "une propriété, une chambre ou un lit ne doit pas recevoir une nouvelle identité simplement parce qu'il entre dans une autre feuille de calcul, un autre canal, une autre institution, intégration, relation avec un bailleur ou structure de reporting.",
  "Explore Portfolio Structure": "Explorer la structure du portefeuille",

  "PORTFOLIO STRUCTURE": "STRUCTURE DU PORTEFEUILLE",
  "Canonical objects, from organization to bed": "Objets canoniques, de l'organisation au lit",
  "Organization / tenant:": "Organisation / locataire :",
  "stable ID, legal/display name, tenant owner, data region, status.":
    "identifiant stable, nom légal/d'affichage, propriétaire du locataire, région des données, statut.",
  "Provider:": "Bailleur :",
  "stable ID, provider type, authority scope, effective period, responsible role, status.":
    "identifiant stable, type de bailleur, portée d'autorité, période de validité, rôle responsable, statut.",
  "Portfolio:": "Portefeuille :",
  "stable ID, parent, owner, scope, currency/time-zone defaults, status.":
    "identifiant stable, parent, propriétaire, portée, devise/fuseau horaire par défaut, statut.",
  "Property / building:": "Propriété / bâtiment :",
  "stable ID, private address, public location rules, owner/operator, access, status.":
    "identifiant stable, adresse privée, règles de localisation publique, propriétaire/exploitant, accès, statut.",
  "Unit / household:": "Unité / foyer :",
  "stable ID, parent property, occupancy/capacity, shared spaces, responsible role.":
    "identifiant stable, propriété parente, occupation/capacité, espaces partagés, rôle responsable.",
  "Room:": "Chambre :",
  "stable ID, parent, room type, provider authority, Passport version, status.":
    "identifiant stable, parent, type de chambre, autorité du bailleur, version du Passport, statut.",
  "Bed / space:": "Lit / espace :",
  "stable ID, parent room, capacity, exclusivity/shared rules, occupancy, status.":
    "identifiant stable, chambre parente, capacité, règles d'exclusivité/partage, occupation, statut.",
  "Explore Room Passports": "Découvrir les Room Passports",

  "Search rooms": "Rechercher des chambres",
  "Close search": "Fermer la recherche",
  "Search by city, university, or neighborhood": "Rechercher par ville, université ou quartier",
  "Popular searches": "Recherches populaires",
  "Rooms near universities": "Chambres près des universités",
  "Healthcare housing": "Logement pour le secteur de la santé",
};

const ES = {
  "Back to home": "Volver al inicio",

  "Close modal": "Cerrar ventana",
  "Talk to Zoiko Rooms": "Hablar con Zoiko Rooms",

  "DISTRIBUTION MODEL": "MODELO DE DISTRIBUCIÓN",
  "Institutional model": "Modelo institucional",
  "INSTITUTION ROLE": "FUNCIÓN DE LA INSTITUCIÓN",
  "PARTICIPANT EXPERIENCE": "EXPERIENCIA DEL PARTICIPANTE",
  "Required limitation:": "Limitación obligatoria:",
  "EXAMPLE FLOW": "EJEMPLO DE FLUJO",
  CAPABILITY: "CAPACIDAD",

  "Institution allocates a specific room under current criteria.":
    "La institución asigna una habitación específica según los criterios vigentes.",
  "Participant reviews full room facts and costs before deciding.":
    "El participante revisa todos los datos y costos de la habitación antes de decidir.",
  "Participant accepts, declines, or requests an alternative — all logged.":
    "El participante acepta, rechaza o solicita una alternativa; todo queda registrado.",
  Allocation: "Asignación",
  "The institution assigns or proposes exact room capacity under declared rules.":
    "La institución asigna o propone la capacidad exacta de habitaciones según reglas declaradas.",
  "Participants see the room, dates, costs, alternatives, and a clear acceptance/decline path with expiry.":
    "Los participantes ven la habitación, las fechas, los costos, las alternativas y un proceso claro de aceptación/rechazo con vencimiento.",
  "No coercive acceptance and no suitability guarantee.":
    "Sin aceptación forzada ni garantía de idoneidad.",

  "Approved provider networks": "Redes de proveedores aprobadas",
  "Approved provider networks let an institution work with a vetted set of providers under a framework or preferred-network relationship, with the same Room Passport evidence and authority checks as the open marketplace.":
    "Las redes de proveedores aprobadas permiten que una institución trabaje con un conjunto verificado de proveedores bajo un acuerdo marco o una relación de red preferente, con las mismas evidencias de Room Passport y verificaciones de autoridad que en el mercado abierto.",
  "Network inclusion does not prove universal quality, compliance, safety, or room suitability.":
    "La inclusión en la red no garantiza calidad universal, cumplimiento, seguridad ni idoneidad de la habitación.",

  "Institution defines the cohort (e.g. incoming graduate students).":
    "La institución define el grupo (por ejemplo, estudiantes de posgrado que se incorporan).",
  "Approved provider inventory is published to that catalog.":
    "El inventario de proveedores aprobados se publica en ese catálogo.",
  "Participants browse and apply exactly as they would in open search.":
    "Los participantes exploran y postulan exactamente igual que en la búsqueda abierta.",
  "Audience catalog": "Catálogo por audiencia",
  "The institution makes approved rooms visible to a defined cohort — a scoped window into current supply.":
    "La institución hace visibles las habitaciones aprobadas a un grupo definido: una ventana acotada a la oferta actual.",
  "Participants browse scoped, current supply with the same evidence and cost transparency as the open marketplace.":
    "Los participantes exploran una oferta actual y acotada, con la misma transparencia de evidencias y costos que en el mercado abierto.",
  "Catalog access is not eligibility, allocation, or funding — it's discovery only.":
    "El acceso al catálogo no implica elegibilidad, asignación ni financiación: es solo para explorar opciones.",

  "Every connection uses minimum necessary scopes, not broad account access.":
    "Cada conexión utiliza los permisos mínimos necesarios, no un acceso amplio a la cuenta.",
  "Field mapping, freshness, and error handling are explicit and monitored.":
    "La asignación de campos, la actualización de datos y la gestión de errores son explícitas y se supervisan.",
  "Offboarding a connection is a governed process — access doesn't linger.":
    "La desconexión de una integración es un proceso controlado: el acceso no permanece activo.",
  "Integrations & API": "Integraciones y API",
  "Integrations connect approved identity, program, inventory, finance, and support systems under tightly scoped access.":
    "Las integraciones conectan sistemas aprobados de identidad, programas, inventario, finanzas y soporte con un acceso estrictamente limitado.",
  "Integration claims require approved systems and current scopes — access is never assumed by default.":
    "Cualquier solicitud de integración requiere sistemas aprobados y permisos vigentes: el acceso nunca se presupone por defecto.",

  "Institution sends an invitation with a defined expiry.":
    "La institución envía una invitación con un vencimiento definido.",
  "Participant opens the invitation and reviews visible data scope.":
    "El participante abre la invitación y revisa el alcance de datos visible.",
  "Participant proceeds independently — or ignores it with no penalty.":
    "El participante continúa de forma independiente, o la ignora sin penalización.",
  "Referral / invitation": "Referencia / invitación",
  "The institution invites a person to search or begin a journey — a nudge, not a guarantee.":
    "La institución invita a una persona a buscar o iniciar un proceso: un incentivo, no una garantía.",
  "Participants see the referral source, its expiry, what data becomes visible, and their alternatives.":
    "Los participantes ven el origen de la referencia, su vencimiento, qué datos se hacen visibles y sus alternativas.",
  "No room or outcome guarantee comes with a referral.":
    "Una referencia no garantiza una habitación ni un resultado.",

  "SAMPLE FUNDING BREAKDOWN": "EJEMPLO DE DESGLOSE DE FINANCIACIÓN",
  "Generic institutional funding example — USD":
    "Ejemplo genérico de financiación institucional: USD",
  "These amounts demonstrate contribution and participant responsibility only. They are not Zoiko Rooms prices, institution funding promises, market averages, tax advice, benefits advice, or affordability guidance.":
    "Estos importes solo ilustran la contribución y la responsabilidad del participante. No son precios de Zoiko Rooms, promesas de financiación de la institución, promedios de mercado, asesoramiento fiscal, asesoramiento sobre prestaciones ni orientación sobre asequibilidad.",
  "Monthly room rent:": "Alquiler mensual de la habitación:",
  "$1,500 per month": "1500 $ al mes",
  "Security deposit:": "Depósito de garantía:",
  "Required move-in fee:": "Tarifa de entrada obligatoria:",
  "Estimated utilities:": "Servicios estimados:",
  "$150 per month": "150 $ al mes",
  "Institution contribution:": "Contribución de la institución:",
  "$900 per month for the first three months": "900 $ al mes durante los primeros tres meses",
  "Participant recurring responsibility:": "Responsabilidad recurrente del participante:",
  "$750 estimated per month during the contribution period":
    "aproximadamente 750 $ al mes durante el período de contribución",
  "Participant upfront responsibility:": "Responsabilidad inicial del participante:",
  "$1,600 unless the approved program also covers the deposit or fee":
    "1600 $, salvo que el programa aprobado también cubra el depósito o la tarifa",

  "Institution defines covered cost categories and amount/formula.":
    "La institución define las categorías de costos cubiertas y el importe/la fórmula.",
  "Approval is authorized by a named decision owner.":
    "La aprobación la autoriza una persona responsable designada.",
  "Participant sees contribution and their share before committing to payment.":
    "El participante ve la contribución y su parte antes de comprometerse al pago.",
  "Subsidy / allowance / voucher": "Subsidio / ayuda / bono",
  "The institution contributes toward cost under current, authorized approval.":
    "La institución contribuye al costo bajo una aprobación vigente y autorizada.",
  "Participants see exactly what's covered, what's excluded, and their own remaining share.":
    "Los participantes ven exactamente qué está cubierto, qué queda excluido y cuál es su parte restante.",
  "Funding is not confirmed until current authorization completes.":
    "La financiación no se confirma hasta que se complete la autorización vigente.",

  "OPERATING MODEL": "MODELO OPERATIVO",
  "Portfolio hierarchy rules behind the operating view":
    "Reglas de jerarquía de la cartera detrás de la vista operativa",
  "Stable identifiers:": "Identificadores estables:",
  "internal immutable IDs; public IDs and external references mapped separately.":
    "identificadores internos inmutables; los identificadores públicos y las referencias externas se asignan por separado.",
  "Parent-child integrity:": "Integridad padre-hijo:",
  "no room without an approved parent property/unit context; no circular or orphaned relationships.":
    "ninguna habitación sin un contexto de propiedad/unidad superior aprobado; sin relaciones circulares o huérfanas.",
  "Many-to-many relationships:": "Relaciones de muchos a muchos:",
  "provider, manager, owner, institution, channel and service relationships modeled separately with scope and dates.":
    "las relaciones con proveedores, gestores, propietarios, instituciones, canales y servicios se modelan por separado con alcance y fechas.",
  "Legal and operational names:": "Nombres legales y operativos:",
  "legal entity, public brand, property name, internal code and external system references are all preserved.":
    "se conservan la entidad legal, la marca pública, el nombre de la propiedad, el código interno y las referencias de sistemas externos.",
  "Canonical identity rule:": "Regla de identidad canónica:",
  "a property, room or bed must not receive a new identity merely because it enters another spreadsheet, channel, institution, integration, provider relationship or reporting structure.":
    "una propiedad, habitación o cama no debe recibir una nueva identidad simplemente por entrar en otra hoja de cálculo, canal, institución, integración, relación con un proveedor o estructura de informes.",
  "Explore Portfolio Structure": "Explorar la estructura de la cartera",

  "PORTFOLIO STRUCTURE": "ESTRUCTURA DE LA CARTERA",
  "Canonical objects, from organization to bed": "Objetos canónicos, desde la organización hasta la cama",
  "Organization / tenant:": "Organización / cliente:",
  "stable ID, legal/display name, tenant owner, data region, status.":
    "identificador estable, nombre legal/visible, propietario del cliente, región de datos, estado.",
  "Provider:": "Proveedor:",
  "stable ID, provider type, authority scope, effective period, responsible role, status.":
    "identificador estable, tipo de proveedor, alcance de autoridad, período de vigencia, rol responsable, estado.",
  "Portfolio:": "Cartera:",
  "stable ID, parent, owner, scope, currency/time-zone defaults, status.":
    "identificador estable, elemento superior, propietario, alcance, moneda/zona horaria predeterminadas, estado.",
  "Property / building:": "Propiedad / edificio:",
  "stable ID, private address, public location rules, owner/operator, access, status.":
    "identificador estable, dirección privada, reglas de ubicación pública, propietario/operador, acceso, estado.",
  "Unit / household:": "Unidad / hogar:",
  "stable ID, parent property, occupancy/capacity, shared spaces, responsible role.":
    "identificador estable, propiedad superior, ocupación/capacidad, espacios compartidos, rol responsable.",
  "Room:": "Habitación:",
  "stable ID, parent, room type, provider authority, Passport version, status.":
    "identificador estable, elemento superior, tipo de habitación, autoridad del proveedor, versión del Passport, estado.",
  "Bed / space:": "Cama / espacio:",
  "stable ID, parent room, capacity, exclusivity/shared rules, occupancy, status.":
    "identificador estable, habitación superior, capacidad, reglas de exclusividad/uso compartido, ocupación, estado.",
  "Explore Room Passports": "Explorar los Room Passports",

  "Search rooms": "Buscar habitaciones",
  "Close search": "Cerrar búsqueda",
  "Search by city, university, or neighborhood": "Busca por ciudad, universidad o barrio",
  "Popular searches": "Búsquedas populares",
  "Rooms near universities": "Habitaciones cerca de universidades",
  "Healthcare housing": "Vivienda para el sector salud",
};

const PT = {
  "Back to home": "Voltar ao início",

  "Close modal": "Fechar janela",
  "Talk to Zoiko Rooms": "Falar com a Zoiko Rooms",

  "DISTRIBUTION MODEL": "MODELO DE DISTRIBUIÇÃO",
  "Institutional model": "Modelo institucional",
  "INSTITUTION ROLE": "PAPEL DA INSTITUIÇÃO",
  "PARTICIPANT EXPERIENCE": "EXPERIÊNCIA DO PARTICIPANTE",
  "Required limitation:": "Limitação obrigatória:",
  "EXAMPLE FLOW": "EXEMPLO DE FLUXO",
  CAPABILITY: "CAPACIDADE",

  "Institution allocates a specific room under current criteria.":
    "A instituição atribui um quarto específico de acordo com os critérios atuais.",
  "Participant reviews full room facts and costs before deciding.":
    "O participante analisa todos os dados e custos do quarto antes de decidir.",
  "Participant accepts, declines, or requests an alternative — all logged.":
    "O participante aceita, recusa ou solicita uma alternativa — tudo é registado.",
  Allocation: "Atribuição",
  "The institution assigns or proposes exact room capacity under declared rules.":
    "A instituição atribui ou propõe a capacidade exata de quartos de acordo com regras declaradas.",
  "Participants see the room, dates, costs, alternatives, and a clear acceptance/decline path with expiry.":
    "Os participantes veem o quarto, as datas, os custos, as alternativas e um percurso claro de aceitação/recusa com prazo de validade.",
  "No coercive acceptance and no suitability guarantee.":
    "Sem aceitação coerciva e sem garantia de adequação.",

  "Approved provider networks": "Redes de fornecedores aprovadas",
  "Approved provider networks let an institution work with a vetted set of providers under a framework or preferred-network relationship, with the same Room Passport evidence and authority checks as the open marketplace.":
    "As redes de fornecedores aprovadas permitem que uma instituição trabalhe com um conjunto verificado de fornecedores ao abrigo de um acordo-quadro ou relação de rede preferencial, com as mesmas evidências do Room Passport e verificações de autoridade do mercado aberto.",
  "Network inclusion does not prove universal quality, compliance, safety, or room suitability.":
    "A inclusão na rede não comprova qualidade universal, conformidade, segurança ou adequação do quarto.",

  "Institution defines the cohort (e.g. incoming graduate students).":
    "A instituição define o grupo-alvo (por exemplo, novos estudantes de pós-graduação).",
  "Approved provider inventory is published to that catalog.":
    "O inventário de fornecedores aprovados é publicado nesse catálogo.",
  "Participants browse and apply exactly as they would in open search.":
    "Os participantes pesquisam e candidatam-se exatamente como fariam na pesquisa aberta.",
  "Audience catalog": "Catálogo por público",
  "The institution makes approved rooms visible to a defined cohort — a scoped window into current supply.":
    "A instituição torna os quartos aprovados visíveis a um grupo definido — uma janela delimitada sobre a oferta atual.",
  "Participants browse scoped, current supply with the same evidence and cost transparency as the open marketplace.":
    "Os participantes pesquisam uma oferta atual e delimitada, com a mesma transparência de evidências e custos do mercado aberto.",
  "Catalog access is not eligibility, allocation, or funding — it's discovery only.":
    "O acesso ao catálogo não constitui elegibilidade, atribuição ou financiamento — serve apenas para descoberta.",

  "Every connection uses minimum necessary scopes, not broad account access.":
    "Cada ligação utiliza apenas as permissões mínimas necessárias, e não um acesso alargado à conta.",
  "Field mapping, freshness, and error handling are explicit and monitored.":
    "O mapeamento de campos, a atualização dos dados e o tratamento de erros são explícitos e monitorizados.",
  "Offboarding a connection is a governed process — access doesn't linger.":
    "O encerramento de uma ligação é um processo controlado — o acesso não permanece ativo.",
  "Integrations & API": "Integrações e API",
  "Integrations connect approved identity, program, inventory, finance, and support systems under tightly scoped access.":
    "As integrações ligam sistemas aprovados de identidade, programa, inventário, finanças e suporte, com acesso estritamente limitado.",
  "Integration claims require approved systems and current scopes — access is never assumed by default.":
    "Qualquer pedido de integração exige sistemas aprovados e permissões atuais — o acesso nunca é presumido por predefinição.",

  "Institution sends an invitation with a defined expiry.":
    "A instituição envia um convite com um prazo de validade definido.",
  "Participant opens the invitation and reviews visible data scope.":
    "O participante abre o convite e analisa o âmbito de dados visível.",
  "Participant proceeds independently — or ignores it with no penalty.":
    "O participante prossegue de forma independente — ou ignora o convite sem qualquer penalização.",
  "Referral / invitation": "Referência / convite",
  "The institution invites a person to search or begin a journey — a nudge, not a guarantee.":
    "A instituição convida uma pessoa a procurar ou a iniciar um percurso — um incentivo, não uma garantia.",
  "Participants see the referral source, its expiry, what data becomes visible, and their alternatives.":
    "Os participantes veem a origem da referência, o seu prazo de validade, que dados se tornam visíveis e as suas alternativas.",
  "No room or outcome guarantee comes with a referral.":
    "Uma referência não garante um quarto nem um resultado.",

  "SAMPLE FUNDING BREAKDOWN": "EXEMPLO DE REPARTIÇÃO DE FINANCIAMENTO",
  "Generic institutional funding example — USD":
    "Exemplo genérico de financiamento institucional — USD",
  "These amounts demonstrate contribution and participant responsibility only. They are not Zoiko Rooms prices, institution funding promises, market averages, tax advice, benefits advice, or affordability guidance.":
    "Estes valores demonstram apenas a contribuição e a responsabilidade do participante. Não são preços da Zoiko Rooms, promessas de financiamento da instituição, médias de mercado, aconselhamento fiscal, aconselhamento sobre subsídios ou orientação sobre acessibilidade de custos.",
  "Monthly room rent:": "Renda mensal do quarto:",
  "$1,500 per month": "1500 $ por mês",
  "Security deposit:": "Depósito de segurança:",
  "Required move-in fee:": "Taxa de entrada obrigatória:",
  "Estimated utilities:": "Serviços estimados:",
  "$150 per month": "150 $ por mês",
  "Institution contribution:": "Contribuição da instituição:",
  "$900 per month for the first three months": "900 $ por mês durante os primeiros três meses",
  "Participant recurring responsibility:": "Responsabilidade recorrente do participante:",
  "$750 estimated per month during the contribution period":
    "cerca de 750 $ por mês durante o período de contribuição",
  "Participant upfront responsibility:": "Responsabilidade inicial do participante:",
  "$1,600 unless the approved program also covers the deposit or fee":
    "1600 $, exceto se o programa aprovado também cobrir o depósito ou a taxa",

  "Institution defines covered cost categories and amount/formula.":
    "A instituição define as categorias de custos cobertas e o valor/fórmula.",
  "Approval is authorized by a named decision owner.":
    "A aprovação é autorizada por um responsável de decisão nomeado.",
  "Participant sees contribution and their share before committing to payment.":
    "O participante vê a contribuição e a sua parte antes de se comprometer com o pagamento.",
  "Subsidy / allowance / voucher": "Subsídio / apoio / vale",
  "The institution contributes toward cost under current, authorized approval.":
    "A instituição contribui para o custo ao abrigo de uma aprovação atual e autorizada.",
  "Participants see exactly what's covered, what's excluded, and their own remaining share.":
    "Os participantes veem exatamente o que está coberto, o que está excluído e qual a sua parte remanescente.",
  "Funding is not confirmed until current authorization completes.":
    "O financiamento só é confirmado após a conclusão da autorização atual.",

  "OPERATING MODEL": "MODELO OPERACIONAL",
  "Portfolio hierarchy rules behind the operating view":
    "Regras de hierarquia do portefólio por trás da vista operacional",
  "Stable identifiers:": "Identificadores estáveis:",
  "internal immutable IDs; public IDs and external references mapped separately.":
    "identificadores internos imutáveis; os identificadores públicos e as referências externas são mapeados separadamente.",
  "Parent-child integrity:": "Integridade pai-filho:",
  "no room without an approved parent property/unit context; no circular or orphaned relationships.":
    "nenhum quarto sem um contexto de propriedade/unidade superior aprovado; sem relações circulares ou órfãs.",
  "Many-to-many relationships:": "Relações muitos-para-muitos:",
  "provider, manager, owner, institution, channel and service relationships modeled separately with scope and dates.":
    "as relações com fornecedores, gestores, proprietários, instituições, canais e serviços são modeladas separadamente com âmbito e datas.",
  "Legal and operational names:": "Designações legais e operacionais:",
  "legal entity, public brand, property name, internal code and external system references are all preserved.":
    "a entidade jurídica, a marca pública, o nome da propriedade, o código interno e as referências de sistemas externos são todos preservados.",
  "Canonical identity rule:": "Regra de identidade canónica:",
  "a property, room or bed must not receive a new identity merely because it enters another spreadsheet, channel, institution, integration, provider relationship or reporting structure.":
    "uma propriedade, quarto ou cama não deve receber uma nova identidade apenas por passar a constar noutra folha de cálculo, canal, instituição, integração, relação com fornecedor ou estrutura de relatórios.",
  "Explore Portfolio Structure": "Explorar a estrutura do portefólio",

  "PORTFOLIO STRUCTURE": "ESTRUTURA DO PORTEFÓLIO",
  "Canonical objects, from organization to bed": "Objetos canónicos, da organização à cama",
  "Organization / tenant:": "Organização / cliente:",
  "stable ID, legal/display name, tenant owner, data region, status.":
    "identificador estável, nome legal/de exibição, proprietário do cliente, região dos dados, estado.",
  "Provider:": "Fornecedor:",
  "stable ID, provider type, authority scope, effective period, responsible role, status.":
    "identificador estável, tipo de fornecedor, âmbito de autoridade, período de vigência, função responsável, estado.",
  "Portfolio:": "Portefólio:",
  "stable ID, parent, owner, scope, currency/time-zone defaults, status.":
    "identificador estável, elemento superior, proprietário, âmbito, moeda/fuso horário predefinidos, estado.",
  "Property / building:": "Propriedade / edifício:",
  "stable ID, private address, public location rules, owner/operator, access, status.":
    "identificador estável, morada privada, regras de localização pública, proprietário/operador, acesso, estado.",
  "Unit / household:": "Unidade / agregado:",
  "stable ID, parent property, occupancy/capacity, shared spaces, responsible role.":
    "identificador estável, propriedade superior, ocupação/capacidade, espaços partilhados, função responsável.",
  "Room:": "Quarto:",
  "stable ID, parent, room type, provider authority, Passport version, status.":
    "identificador estável, elemento superior, tipo de quarto, autoridade do fornecedor, versão do Passport, estado.",
  "Bed / space:": "Cama / espaço:",
  "stable ID, parent room, capacity, exclusivity/shared rules, occupancy, status.":
    "identificador estável, quarto superior, capacidade, regras de exclusividade/partilha, ocupação, estado.",
  "Explore Room Passports": "Explorar os Room Passports",

  "Search rooms": "Pesquisar quartos",
  "Close search": "Fechar pesquisa",
  "Search by city, university, or neighborhood": "Pesquisar por cidade, universidade ou bairro",
  "Popular searches": "Pesquisas populares",
  "Rooms near universities": "Quartos perto de universidades",
  "Healthcare housing": "Alojamento para o setor da saúde",
};

export const sharedUiDictionary: LanguageDictionaries = { DE, FR, ES, PT };
