import type { LanguageDictionaries } from "../types";

// Translations for components/home, components/about, components/auth and
// components/not-found. Strings already present in navbar-footer.ts (e.g.
// "Sign in", "Search rooms", "Learn more") are reused from there and not
// duplicated here. Proper nouns ("Zoiko Rooms", "Zoiko Rooms Pro", "Room
// Passport", etc.) are intentionally left out so `t()` falls back to English.

export const miscDictionary: LanguageDictionaries = {
  DE: {
    // --- home/HeroSection ---
    "Verified private room with a bed, desk, and plants":
      "Verifiziertes Privatzimmer mit Bett, Schreibtisch und Pflanzen",
    "Verified rooms. Clearer rental journeys.": "Verifizierte Zimmer. Klarere Mietprozesse.",
    "Find a verified room you can": "Finden Sie ein verifiziertes Zimmer, dem Sie",
    "trust.": "vertrauen können.",
    "Search private rooms for 30 nights or longer, connect safely with providers, and keep a clear record from application to move-out.":
      "Suchen Sie private Zimmer für 30 Nächte oder länger, nehmen Sie sicher Kontakt zu Anbietern auf und behalten Sie einen klaren Verlauf von der Bewerbung bis zum Auszug.",
    "Where do you want to live?": "Wo möchten Sie wohnen?",
    "City, neighborhood, or address": "Stadt, Stadtteil oder Adresse",
    "Move-in date": "Einzugsdatum",
    "Stay length": "Aufenthaltsdauer",
    "1+ month": "1+ Monat",
    "3+ months": "3+ Monate",
    "6+ months": "6+ Monate",
    "12+ months": "12+ Monate",
    "Verified profiles": "Verifizierte Profile",
    "Every listing and user is verified": "Jede Anzeige und jeder Nutzer wird verifiziert",
    "Clear rental records": "Klare Mietunterlagen",
    "Keep a complete record from start to finish": "Führen Sie eine vollständige Aufzeichnung von Anfang bis Ende",
    "Secure communication": "Sichere Kommunikation",
    "Message in-app and protect your privacy": "Kommunizieren Sie in der App und schützen Sie Ihre Privatsphäre",
    "Support when needed": "Unterstützung, wenn Sie sie brauchen",
    "Real people, ready to help": "Echte Menschen, bereit zu helfen",
    "Have a room to rent? List it free": "Haben Sie ein Zimmer zu vermieten? Kostenlos inserieren",
    "See how verification works": "So funktioniert die Verifizierung",
    "Join thousands of verified renters and landlords": "Schließen Sie sich Tausenden verifizierten Mietern und Vermietern an",
    "Trusted worldwide by our community": "Weltweit vertraut von unserer Community",
    "Trusted by renters and landlords around the world": "Vertraut von Mietern und Vermietern auf der ganzen Welt",
    Countries: "Länder",
    "Verified users": "Verifizierte Nutzer",
    "Rooms listed": "Gelistete Zimmer",
    Secure: "Sicher",
    "By design": "Von Grund auf",

    // --- home/AudienceSection ---
    "List a room": "Ein Zimmer anbieten",
    "Offer an eligible private room with clear verification and applicant workflows.":
      "Bieten Sie ein berechtigtes Privatzimmer mit klarer Verifizierung und Bewerbungsabläufen an.",
    "Start a free listing": "Kostenlos inserieren starten",
    "For organizations": "Für Organisationen",
    "Source and manage verified room placements for students, staff and relocations.":
      "Verwalten Sie verifizierte Zimmervermittlungen für Studierende, Mitarbeitende und Umzüge.",
    "Explore organizations": "Organisationen entdecken",
    "Operate portfolios, compliance, applications and payments in one system.":
      "Verwalten Sie Portfolios, Compliance, Anträge und Zahlungen in einem System.",
    "Explore Pro": "Pro entdecken",

    // --- home/EvidenceSection ---
    "Verified room interior with kitchen and living space": "Verifiziertes Zimmerinterieur mit Küche und Wohnbereich",
    "See it for yourself": "Überzeugen Sie sich selbst",
    "Evidence you can actually inspect": "Beweise, die Sie tatsächlich prüfen können",
    "Every listing shows exactly what's been checked, by whom, and when — down to the lock on the door.":
      "Jede Anzeige zeigt genau, was geprüft wurde, von wem und wann – bis hin zum Schloss an der Tür.",
    "See a sample room passport": "Sehen Sie sich ein Beispiel für den Room Passport an",

    // --- home/FaqSection ---
    "What is Zoiko Rooms?": "Was ist Zoiko Rooms?",
    "Zoiko Rooms is a global platform exclusively for private individual rooms rented for 30 nights or longer. It helps room seekers review evidence-specific room information, confirm who is authorized to offer the room, communicate safely, complete the appropriate rental process and maintain a clear transaction record through move-out.":
      "Zoiko Rooms ist eine globale Plattform ausschließlich für private Einzelzimmer, die für 30 Nächte oder länger vermietet werden. Sie hilft Zimmersuchenden, nachweisbezogene Zimmerinformationen zu prüfen, zu bestätigen, wer zur Vermietung des Zimmers berechtigt ist, sicher zu kommunizieren, den passenden Mietprozess zu durchlaufen und bis zum Auszug eine klare Transaktionsaufzeichnung zu führen.",
    "What accommodation is available?": "Welche Unterkünfte sind verfügbar?",
    "Private individual rooms within larger residential properties. Whole homes, hotels, dormitory beds and nightly vacation rentals are outside the core scope.":
      "Private Einzelzimmer innerhalb größerer Wohnimmobilien. Ganze Wohnungen, Hotels, Schlafsäle und kurzfristige Ferienvermietungen liegen außerhalb des Kernbereichs.",
    "What does verified mean?": "Was bedeutet verifiziert?",
    "Each detail on a listing is tagged with the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked.":
      "Jedes Detail einer Anzeige ist mit dem entsprechenden Nachweis gekennzeichnet – vom Anbieter angegeben, dokumentiert geprüft oder physisch inspiziert –, sodass Sie immer wissen, wie eine Angabe überprüft wurde.",
    "Can I list a spare room?": "Kann ich ein freies Zimmer inserieren?",
    "Yes, as long as you're authorized to offer it. We check provider authority before a listing goes live to keep the marketplace trustworthy.":
      "Ja, solange Sie berechtigt sind, es anzubieten. Wir prüfen die Anbieterberechtigung, bevor eine Anzeige veröffentlicht wird, um den Marktplatz vertrauenswürdig zu halten.",
    "How do payments work?": "Wie funktionieren Zahlungen?",
    "Payments are handled in-platform and linked to your application and agreement, so there's a single connected record from application to move-out.":
      "Zahlungen werden innerhalb der Plattform abgewickelt und mit Ihrer Bewerbung und Ihrem Vertrag verknüpft, sodass ein einziger zusammenhängender Datensatz von der Bewerbung bis zum Auszug entsteht.",
    "What is the minimum stay?": "Wie lange ist die Mindestmietdauer?",
    "Zoiko Rooms is built for stays of 30 nights or longer.": "Zoiko Rooms ist für Aufenthalte von 30 Nächten oder länger konzipiert.",

    // --- home/FinalCtaSection ---
    "Find your next room with confidence": "Finden Sie Ihr nächstes Zimmer mit Zuversicht",
    "Search verified rooms": "Verifizierte Zimmer suchen",
    "Create a free alert": "Kostenlosen Alarm einrichten",

    // --- home/ProcessSection ---
    "The process": "Der Ablauf",
    "A streamlined path from search to move-in": "Ein klarer Weg von der Suche bis zum Einzug",
    "Search live listings, review evidence, apply securely, then manage everything from one place.":
      "Durchsuchen Sie Live-Anzeigen, prüfen Sie Nachweise, bewerben Sie sich sicher und verwalten Sie danach alles an einem Ort.",
    "Bright living room representing the rental process": "Helles Wohnzimmer als Symbol für den Mietprozess",
    "Search · passport · agreement · support — product screens": "Suche · Passport · Vertrag · Support — Produktansichten",
    "By place and date, then refine by budget.": "Nach Ort und Datum, dann nach Budget verfeinern.",
    Review: "Prüfen",
    "Compare passports and provider evidence.": "Passports und Nachweise der Anbieter vergleichen.",
    "Apply and agree": "Bewerben und vereinbaren",
    "Submit securely with clear disclosures.": "Sicher einreichen mit klaren Offenlegungen.",
    "Move in": "Einziehen",
    "Keep evidence and support connected.": "Nachweise und Support verbunden halten.",

    // --- home/RelocationSection ---
    "Find what suits you": "Finden Sie, was zu Ihnen passt",
    "Every relocation is different": "Jeder Umzug ist anders",
    "Work relocation": "Berufliche Umsiedlung",
    "Settle in before day one": "Vor dem ersten Tag eingerichtet sein",
    "Verified rooms near your new office, ready before you arrive.":
      "Verifizierte Zimmer nahe Ihrem neuen Büro, bereit vor Ihrer Ankunft.",
    "Study abroad": "Auslandsstudium",
    "Near campus, fully checked": "In Campusnähe, vollständig geprüft",
    "Rooms close to your university with honest evidence, not guesswork.":
      "Zimmer nahe Ihrer Universität mit ehrlichen Nachweisen statt Vermutungen.",
    "Healthcare placement": "Einsatz im Gesundheitswesen",
    "Housing for shift life": "Wohnen für den Schichtalltag",
    "Flexible terms built for rotations and placements, not vacations.":
      "Flexible Konditionen für Einsätze und Rotationen, nicht für Urlaub.",
    "Where we operate": "Wo wir vertreten sind",
    "Live market": "Aktiver Markt",
    Announced: "Angekündigt",

    // --- home/RoomPassportSection ---
    "Not every detail carries the same evidence": "Nicht jedes Detail trägt den gleichen Nachweis",
    "Friends gathered in a shared kitchen": "Freunde versammelt in einer gemeinsamen Küche",
    "Sample passport · demonstration data": "Beispiel-Passport · Demonstrationsdaten",
    Address: "Adresse",
    "Regulatory verified": "Behördlich verifiziert",
    "Room dimensions": "Zimmergröße",
    "Document verified": "Dokumentiert geprüft",
    Lockability: "Verschließbarkeit",
    "Physical inspection": "Physische Inspektion",
    Furnishings: "Möblierung",
    "Provider declared": "Vom Anbieter angegeben",
    "Internet speed": "Internetgeschwindigkeit",

    // --- home/RoomsAvailableSection ---
    "Live in Berlin": "Live in Berlin",
    "Rooms available now": "Jetzt verfügbare Zimmer",
    "View all rooms": "Alle Zimmer ansehen",
    "Room in": "Zimmer in",
    "avail. 1 Sep": "verfügbar ab 1. Sep",
    "avail. now": "sofort verfügbar",
    "avail. 15 Aug": "verfügbar ab 15. Aug",
    "Remote inspection": "Fernbesichtigung",

    // --- home/WhyZoikoSection ---
    "Why Zoiko Rooms": "Warum Zoiko Rooms",
    "Welcome to verified renting": "Willkommen beim verifizierten Mieten",
    "Every claim on Zoiko Rooms is backed by evidence you can actually see, not a badge you have to take on faith.":
      "Jede Aussage bei Zoiko Rooms wird durch Nachweise gestützt, die Sie tatsächlich einsehen können – nicht durch ein Abzeichen, dem Sie einfach vertrauen müssen.",
    "Provider authority": "Anbieterberechtigung",
    "We check whether the provider is entitled to offer the room.": "Wir prüfen, ob der Anbieter berechtigt ist, das Zimmer anzubieten.",
    "Evidence-based": "Nachweisbasiert",
    "See which details were declared, documented or physically verified.":
      "Sehen Sie, welche Details angegeben, dokumentiert oder physisch verifiziert wurden.",
    "Tiered evidence": "Gestaffelte Nachweise",
    "Connected record": "Verknüpfte Aufzeichnung",
    "Applications, agreements, payments and move-in evidence stay linked.":
      "Bewerbungen, Verträge, Zahlungen und Einzugsnachweise bleiben verknüpft.",
    "One timeline": "Ein durchgängiger Zeitverlauf",
    "Human support": "Menschliche Unterstützung",
    "Report concerns before, during and after the rental.": "Melden Sie Bedenken vor, während und nach der Miete.",
    "Always reachable": "Immer erreichbar",
  },
  FR: {
    // --- home/HeroSection ---
    "Verified private room with a bed, desk, and plants":
      "Chambre privée vérifiée avec un lit, un bureau et des plantes",
    "Verified rooms. Clearer rental journeys.": "Chambres vérifiées. Des parcours de location plus clairs.",
    "Find a verified room you can": "Trouvez une chambre vérifiée en qui vous pouvez",
    "trust.": "avoir confiance.",
    "Search private rooms for 30 nights or longer, connect safely with providers, and keep a clear record from application to move-out.":
      "Recherchez des chambres privées pour 30 nuits ou plus, échangez en toute sécurité avec les bailleurs et conservez un historique clair, de la candidature à la sortie.",
    "Where do you want to live?": "Où souhaitez-vous vivre ?",
    "City, neighborhood, or address": "Ville, quartier ou adresse",
    "Move-in date": "Date d'emménagement",
    "Stay length": "Durée du séjour",
    "1+ month": "1+ mois",
    "3+ months": "3+ mois",
    "6+ months": "6+ mois",
    "12+ months": "12+ mois",
    "Verified profiles": "Profils vérifiés",
    "Every listing and user is verified": "Chaque annonce et chaque utilisateur sont vérifiés",
    "Clear rental records": "Historique de location clair",
    "Keep a complete record from start to finish": "Conservez un dossier complet du début à la fin",
    "Secure communication": "Communication sécurisée",
    "Message in-app and protect your privacy": "Échangez dans l'application et protégez votre vie privée",
    "Support when needed": "Assistance quand vous en avez besoin",
    "Real people, ready to help": "De vraies personnes, prêtes à vous aider",
    "Have a room to rent? List it free": "Vous avez une chambre à louer ? Publiez-la gratuitement",
    "See how verification works": "Découvrez comment fonctionne la vérification",
    "Join thousands of verified renters and landlords": "Rejoignez des milliers de locataires et bailleurs vérifiés",
    "Trusted worldwide by our community": "Approuvé dans le monde entier par notre communauté",
    "Trusted by renters and landlords around the world": "Approuvé par les locataires et bailleurs du monde entier",
    Countries: "Pays",
    "Verified users": "Utilisateurs vérifiés",
    "Rooms listed": "Chambres publiées",
    Secure: "Sécurisé",
    "By design": "Par conception",

    // --- home/AudienceSection ---
    "List a room": "Publier une chambre",
    "Offer an eligible private room with clear verification and applicant workflows.":
      "Proposez une chambre privée éligible avec une vérification claire et des processus de candidature.",
    "Start a free listing": "Commencer une annonce gratuite",
    "For organizations": "Pour les organisations",
    "Source and manage verified room placements for students, staff and relocations.":
      "Trouvez et gérez des chambres vérifiées pour étudiants, employés et relocations.",
    "Explore organizations": "Découvrir les organisations",
    "Operate portfolios, compliance, applications and payments in one system.":
      "Gérez portefeuilles, conformité, candidatures et paiements dans un seul système.",
    "Explore Pro": "Découvrir Pro",

    // --- home/EvidenceSection ---
    "Verified room interior with kitchen and living space": "Intérieur de chambre vérifiée avec cuisine et espace de vie",
    "See it for yourself": "Voyez par vous-même",
    "Evidence you can actually inspect": "Des preuves que vous pouvez réellement examiner",
    "Every listing shows exactly what's been checked, by whom, and when — down to the lock on the door.":
      "Chaque annonce montre exactement ce qui a été vérifié, par qui et quand — jusqu'à la serrure de la porte.",
    "See a sample room passport": "Voir un exemple de Room Passport",

    // --- home/FaqSection ---
    "What is Zoiko Rooms?": "Qu'est-ce que Zoiko Rooms ?",
    "Zoiko Rooms is a global platform exclusively for private individual rooms rented for 30 nights or longer. It helps room seekers review evidence-specific room information, confirm who is authorized to offer the room, communicate safely, complete the appropriate rental process and maintain a clear transaction record through move-out.":
      "Zoiko Rooms est une plateforme mondiale exclusivement dédiée aux chambres privées individuelles louées pour 30 nuits ou plus. Elle aide les locataires à consulter des informations précises sur les chambres, à vérifier qui est autorisé à les proposer, à communiquer en toute sécurité, à suivre le processus de location adapté et à conserver un historique clair jusqu'à la sortie.",
    "What accommodation is available?": "Quel type d'hébergement est disponible ?",
    "Private individual rooms within larger residential properties. Whole homes, hotels, dormitory beds and nightly vacation rentals are outside the core scope.":
      "Des chambres privées individuelles au sein de propriétés résidentielles plus grandes. Les logements entiers, hôtels, lits en dortoir et locations de vacances de courte durée ne font pas partie du cœur de l'offre.",
    "What does verified mean?": "Que signifie vérifié ?",
    "Each detail on a listing is tagged with the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked.":
      "Chaque détail d'une annonce est associé à la preuve qui le sous-tend — déclaré par le bailleur, vérifié par document ou inspecté physiquement — afin que vous sachiez toujours comment une information a été contrôlée.",
    "Can I list a spare room?": "Puis-je publier une chambre inoccupée ?",
    "Yes, as long as you're authorized to offer it. We check provider authority before a listing goes live to keep the marketplace trustworthy.":
      "Oui, à condition d'être autorisé à la proposer. Nous vérifions l'autorité du bailleur avant la publication d'une annonce afin de garantir la fiabilité de la place de marché.",
    "How do payments work?": "Comment fonctionnent les paiements ?",
    "Payments are handled in-platform and linked to your application and agreement, so there's a single connected record from application to move-out.":
      "Les paiements sont gérés directement sur la plateforme et liés à votre candidature et à votre contrat, créant ainsi un dossier unique et connecté de la candidature jusqu'à la sortie.",
    "What is the minimum stay?": "Quelle est la durée minimale de séjour ?",
    "Zoiko Rooms is built for stays of 30 nights or longer.": "Zoiko Rooms est conçu pour des séjours de 30 nuits ou plus.",

    // --- home/FinalCtaSection ---
    "Find your next room with confidence": "Trouvez votre prochaine chambre en toute confiance",
    "Search verified rooms": "Rechercher des chambres vérifiées",
    "Create a free alert": "Créer une alerte gratuite",

    // --- home/ProcessSection ---
    "The process": "Le processus",
    "A streamlined path from search to move-in": "Un parcours simplifié, de la recherche à l'emménagement",
    "Search live listings, review evidence, apply securely, then manage everything from one place.":
      "Parcourez les annonces en direct, examinez les preuves, postulez en toute sécurité, puis gérez tout depuis un seul endroit.",
    "Bright living room representing the rental process": "Salon lumineux illustrant le processus de location",
    "Search · passport · agreement · support — product screens": "Recherche · passeport · contrat · assistance — écrans du produit",
    "By place and date, then refine by budget.": "Par lieu et date, puis affinez selon votre budget.",
    Review: "Comparer",
    "Compare passports and provider evidence.": "Comparez les passeports et les preuves des bailleurs.",
    "Apply and agree": "Postuler et signer",
    "Submit securely with clear disclosures.": "Soumettez votre dossier en toute sécurité avec des informations claires.",
    "Move in": "Emménager",
    "Keep evidence and support connected.": "Gardez les preuves et l'assistance connectées.",

    // --- home/RelocationSection ---
    "Find what suits you": "Trouvez ce qui vous convient",
    "Every relocation is different": "Chaque relocation est différente",
    "Work relocation": "Mutation professionnelle",
    "Settle in before day one": "Installez-vous avant le premier jour",
    "Verified rooms near your new office, ready before you arrive.":
      "Des chambres vérifiées près de votre nouveau bureau, prêtes avant votre arrivée.",
    "Study abroad": "Étude à l'étranger",
    "Near campus, fully checked": "Près du campus, entièrement vérifié",
    "Rooms close to your university with honest evidence, not guesswork.":
      "Des chambres proches de votre université, avec des preuves fiables plutôt que des suppositions.",
    "Healthcare placement": "Mission dans le secteur de la santé",
    "Housing for shift life": "Un logement adapté au rythme des gardes",
    "Flexible terms built for rotations and placements, not vacations.":
      "Des conditions flexibles conçues pour les rotations et missions, pas pour les vacances.",
    "Where we operate": "Où nous sommes présents",
    "Live market": "Marché actif",
    Announced: "Annoncé",

    // --- home/RoomPassportSection ---
    "Not every detail carries the same evidence": "Chaque détail ne repose pas sur le même niveau de preuve",
    "Friends gathered in a shared kitchen": "Des amis réunis dans une cuisine partagée",
    "Sample passport · demonstration data": "Exemple de passeport · données de démonstration",
    Address: "Adresse",
    "Regulatory verified": "Vérifié par une autorité",
    "Room dimensions": "Dimensions de la chambre",
    "Document verified": "Vérifié par document",
    Lockability: "Verrouillage",
    "Physical inspection": "Inspection physique",
    Furnishings: "Mobilier",
    "Provider declared": "Déclaré par le bailleur",
    "Internet speed": "Débit internet",

    // --- home/RoomsAvailableSection ---
    "Live in Berlin": "En direct à Berlin",
    "Rooms available now": "Chambres disponibles maintenant",
    "View all rooms": "Voir toutes les chambres",
    "Room in": "Chambre à",
    "avail. 1 Sep": "disponible le 1er sept.",
    "avail. now": "disponible immédiatement",
    "avail. 15 Aug": "disponible le 15 août",
    "Remote inspection": "Inspection à distance",

    // --- home/WhyZoikoSection ---
    "Why Zoiko Rooms": "Pourquoi Zoiko Rooms",
    "Welcome to verified renting": "Bienvenue dans la location vérifiée",
    "Every claim on Zoiko Rooms is backed by evidence you can actually see, not a badge you have to take on faith.":
      "Chaque affirmation sur Zoiko Rooms repose sur des preuves que vous pouvez réellement consulter, pas sur un badge à prendre pour argent comptant.",
    "Provider authority": "Autorité du bailleur",
    "We check whether the provider is entitled to offer the room.": "Nous vérifions si le bailleur est habilité à proposer la chambre.",
    "Evidence-based": "Fondé sur des preuves",
    "See which details were declared, documented or physically verified.":
      "Découvrez quels détails ont été déclarés, documentés ou physiquement vérifiés.",
    "Tiered evidence": "Preuves échelonnées",
    "Connected record": "Dossier connecté",
    "Applications, agreements, payments and move-in evidence stay linked.":
      "Candidatures, contrats, paiements et preuves d'emménagement restent liés.",
    "One timeline": "Un historique unique",
    "Human support": "Assistance humaine",
    "Report concerns before, during and after the rental.": "Signalez toute préoccupation avant, pendant et après la location.",
    "Always reachable": "Toujours disponible",
  },
  ES: {
    // --- home/HeroSection ---
    "Verified private room with a bed, desk, and plants":
      "Habitación privada verificada con cama, escritorio y plantas",
    "Verified rooms. Clearer rental journeys.": "Habitaciones verificadas. Procesos de alquiler más claros.",
    "Find a verified room you can": "Encuentra una habitación verificada en la que puedas",
    "trust.": "confiar.",
    "Search private rooms for 30 nights or longer, connect safely with providers, and keep a clear record from application to move-out.":
      "Busca habitaciones privadas por 30 noches o más, conecta de forma segura con los anfitriones y mantén un registro claro desde la solicitud hasta la salida.",
    "Where do you want to live?": "¿Dónde quieres vivir?",
    "City, neighborhood, or address": "Ciudad, barrio o dirección",
    "Move-in date": "Fecha de entrada",
    "Stay length": "Duración de la estancia",
    "1+ month": "1+ mes",
    "3+ months": "3+ meses",
    "6+ months": "6+ meses",
    "12+ months": "12+ meses",
    "Verified profiles": "Perfiles verificados",
    "Every listing and user is verified": "Cada anuncio y cada usuario están verificados",
    "Clear rental records": "Registros de alquiler claros",
    "Keep a complete record from start to finish": "Mantén un registro completo de principio a fin",
    "Secure communication": "Comunicación segura",
    "Message in-app and protect your privacy": "Comunícate dentro de la app y protege tu privacidad",
    "Support when needed": "Soporte cuando lo necesites",
    "Real people, ready to help": "Personas reales, listas para ayudar",
    "Have a room to rent? List it free": "¿Tienes una habitación para alquilar? Publícala gratis",
    "See how verification works": "Descubre cómo funciona la verificación",
    "Join thousands of verified renters and landlords": "Únete a miles de inquilinos y propietarios verificados",
    "Trusted worldwide by our community": "Confiado en todo el mundo por nuestra comunidad",
    "Trusted by renters and landlords around the world": "Confiado por inquilinos y propietarios de todo el mundo",
    Countries: "Países",
    "Verified users": "Usuarios verificados",
    "Rooms listed": "Habitaciones publicadas",
    Secure: "Seguro",
    "By design": "Por diseño",

    // --- home/AudienceSection ---
    "List a room": "Publicar una habitación",
    "Offer an eligible private room with clear verification and applicant workflows.":
      "Ofrece una habitación privada elegible con verificación clara y procesos de solicitud.",
    "Start a free listing": "Comenzar un anuncio gratuito",
    "For organizations": "Para organizaciones",
    "Source and manage verified room placements for students, staff and relocations.":
      "Encuentra y gestiona habitaciones verificadas para estudiantes, personal y traslados.",
    "Explore organizations": "Explorar organizaciones",
    "Operate portfolios, compliance, applications and payments in one system.":
      "Gestiona carteras, cumplimiento, solicitudes y pagos en un solo sistema.",
    "Explore Pro": "Explorar Pro",

    // --- home/EvidenceSection ---
    "Verified room interior with kitchen and living space": "Interior de habitación verificada con cocina y sala de estar",
    "See it for yourself": "Compruébalo tú mismo",
    "Evidence you can actually inspect": "Evidencia que puedes inspeccionar de verdad",
    "Every listing shows exactly what's been checked, by whom, and when — down to the lock on the door.":
      "Cada anuncio muestra exactamente qué se ha verificado, por quién y cuándo, hasta la cerradura de la puerta.",
    "See a sample room passport": "Ver un ejemplo de Room Passport",

    // --- home/FaqSection ---
    "What is Zoiko Rooms?": "¿Qué es Zoiko Rooms?",
    "Zoiko Rooms is a global platform exclusively for private individual rooms rented for 30 nights or longer. It helps room seekers review evidence-specific room information, confirm who is authorized to offer the room, communicate safely, complete the appropriate rental process and maintain a clear transaction record through move-out.":
      "Zoiko Rooms es una plataforma global dedicada exclusivamente a habitaciones privadas individuales alquiladas por 30 noches o más. Ayuda a quienes buscan habitación a revisar información específica respaldada por evidencia, confirmar quién está autorizado a ofrecer la habitación, comunicarse con seguridad, completar el proceso de alquiler adecuado y mantener un registro claro de la transacción hasta la salida.",
    "What accommodation is available?": "¿Qué tipo de alojamiento está disponible?",
    "Private individual rooms within larger residential properties. Whole homes, hotels, dormitory beds and nightly vacation rentals are outside the core scope.":
      "Habitaciones privadas individuales dentro de propiedades residenciales más grandes. Viviendas completas, hoteles, camas en dormitorios compartidos y alquileres vacacionales por noche quedan fuera del alcance principal.",
    "What does verified mean?": "¿Qué significa verificado?",
    "Each detail on a listing is tagged with the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked.":
      "Cada detalle de un anuncio está etiquetado con la evidencia que lo respalda: declarado por el anfitrión, verificado por documento o inspeccionado físicamente, para que siempre sepas cómo se comprobó una afirmación.",
    "Can I list a spare room?": "¿Puedo publicar una habitación libre?",
    "Yes, as long as you're authorized to offer it. We check provider authority before a listing goes live to keep the marketplace trustworthy.":
      "Sí, siempre que estés autorizado a ofrecerla. Verificamos la autoridad del anfitrión antes de que un anuncio se publique, para mantener la confianza del mercado.",
    "How do payments work?": "¿Cómo funcionan los pagos?",
    "Payments are handled in-platform and linked to your application and agreement, so there's a single connected record from application to move-out.":
      "Los pagos se gestionan dentro de la plataforma y están vinculados a tu solicitud y contrato, creando un único registro conectado desde la solicitud hasta la salida.",
    "What is the minimum stay?": "¿Cuál es la estancia mínima?",
    "Zoiko Rooms is built for stays of 30 nights or longer.": "Zoiko Rooms está diseñado para estancias de 30 noches o más.",

    // --- home/FinalCtaSection ---
    "Find your next room with confidence": "Encuentra tu próxima habitación con confianza",
    "Search verified rooms": "Buscar habitaciones verificadas",
    "Create a free alert": "Crear una alerta gratuita",

    // --- home/ProcessSection ---
    "The process": "El proceso",
    "A streamlined path from search to move-in": "Un camino simplificado desde la búsqueda hasta la mudanza",
    "Search live listings, review evidence, apply securely, then manage everything from one place.":
      "Explora anuncios activos, revisa la evidencia, postúlate de forma segura y luego gestiona todo desde un solo lugar.",
    "Bright living room representing the rental process": "Sala de estar luminosa que representa el proceso de alquiler",
    "Search · passport · agreement · support — product screens": "Búsqueda · pasaporte · contrato · soporte — pantallas del producto",
    "By place and date, then refine by budget.": "Por lugar y fecha, y después ajusta por presupuesto.",
    Review: "Revisar",
    "Compare passports and provider evidence.": "Compara pasaportes y evidencias de los anfitriones.",
    "Apply and agree": "Solicitar y firmar",
    "Submit securely with clear disclosures.": "Envía tu solicitud de forma segura con información clara.",
    "Move in": "Mudarte",
    "Keep evidence and support connected.": "Mantén la evidencia y el soporte conectados.",

    // --- home/RelocationSection ---
    "Find what suits you": "Encuentra lo que se adapta a ti",
    "Every relocation is different": "Cada traslado es diferente",
    "Work relocation": "Traslado laboral",
    "Settle in before day one": "Instálate antes del primer día",
    "Verified rooms near your new office, ready before you arrive.":
      "Habitaciones verificadas cerca de tu nueva oficina, listas antes de que llegues.",
    "Study abroad": "Estudios en el extranjero",
    "Near campus, fully checked": "Cerca del campus, totalmente verificado",
    "Rooms close to your university with honest evidence, not guesswork.":
      "Habitaciones cercanas a tu universidad con evidencia honesta, no suposiciones.",
    "Healthcare placement": "Colocación en el sector salud",
    "Housing for shift life": "Vivienda pensada para turnos",
    "Flexible terms built for rotations and placements, not vacations.":
      "Condiciones flexibles diseñadas para rotaciones y colocaciones, no para vacaciones.",
    "Where we operate": "Dónde operamos",
    "Live market": "Mercado activo",
    Announced: "Anunciado",

    // --- home/RoomPassportSection ---
    "Not every detail carries the same evidence": "No todos los detalles cuentan con el mismo nivel de evidencia",
    "Friends gathered in a shared kitchen": "Amigos reunidos en una cocina compartida",
    "Sample passport · demonstration data": "Pasaporte de muestra · datos de demostración",
    Address: "Dirección",
    "Regulatory verified": "Verificado por autoridad",
    "Room dimensions": "Dimensiones de la habitación",
    "Document verified": "Verificado por documento",
    Lockability: "Posibilidad de cerrar con llave",
    "Physical inspection": "Inspección física",
    Furnishings: "Mobiliario",
    "Provider declared": "Declarado por el anfitrión",
    "Internet speed": "Velocidad de internet",

    // --- home/RoomsAvailableSection ---
    "Live in Berlin": "En directo en Berlín",
    "Rooms available now": "Habitaciones disponibles ahora",
    "View all rooms": "Ver todas las habitaciones",
    "Room in": "Habitación en",
    "avail. 1 Sep": "disp. 1 sep.",
    "avail. now": "disp. ahora",
    "avail. 15 Aug": "disp. 15 ago.",
    "Remote inspection": "Inspección remota",

    // --- home/WhyZoikoSection ---
    "Why Zoiko Rooms": "Por qué Zoiko Rooms",
    "Welcome to verified renting": "Bienvenido al alquiler verificado",
    "Every claim on Zoiko Rooms is backed by evidence you can actually see, not a badge you have to take on faith.":
      "Cada afirmación en Zoiko Rooms está respaldada por evidencia que puedes ver de verdad, no por una insignia que debas dar por hecho.",
    "Provider authority": "Autoridad del anfitrión",
    "We check whether the provider is entitled to offer the room.": "Comprobamos si el anfitrión está autorizado a ofrecer la habitación.",
    "Evidence-based": "Basado en evidencia",
    "See which details were declared, documented or physically verified.":
      "Consulta qué detalles fueron declarados, documentados o verificados físicamente.",
    "Tiered evidence": "Evidencia escalonada",
    "Connected record": "Registro conectado",
    "Applications, agreements, payments and move-in evidence stay linked.":
      "Solicitudes, contratos, pagos y evidencia de entrada permanecen vinculados.",
    "One timeline": "Una sola línea temporal",
    "Human support": "Soporte humano",
    "Report concerns before, during and after the rental.": "Informa de cualquier problema antes, durante y después del alquiler.",
    "Always reachable": "Siempre disponible",
  },
  PT: {
    // --- home/HeroSection ---
    "Verified private room with a bed, desk, and plants":
      "Quarto privado verificado com cama, secretária e plantas",
    "Verified rooms. Clearer rental journeys.": "Quartos verificados. Processos de aluguer mais claros.",
    "Find a verified room you can": "Encontre um quarto verificado em que possa",
    "trust.": "confiar.",
    "Search private rooms for 30 nights or longer, connect safely with providers, and keep a clear record from application to move-out.":
      "Pesquise quartos privados por 30 noites ou mais, contacte com segurança os anfitriões e mantenha um registo claro desde a candidatura até à saída.",
    "Where do you want to live?": "Onde quer viver?",
    "City, neighborhood, or address": "Cidade, bairro ou morada",
    "Move-in date": "Data de entrada",
    "Stay length": "Duração da estadia",
    "1+ month": "1+ mês",
    "3+ months": "3+ meses",
    "6+ months": "6+ meses",
    "12+ months": "12+ meses",
    "Verified profiles": "Perfis verificados",
    "Every listing and user is verified": "Todos os anúncios e utilizadores são verificados",
    "Clear rental records": "Registos de aluguer claros",
    "Keep a complete record from start to finish": "Mantenha um registo completo do início ao fim",
    "Secure communication": "Comunicação segura",
    "Message in-app and protect your privacy": "Comunique na aplicação e proteja a sua privacidade",
    "Support when needed": "Apoio sempre que precisar",
    "Real people, ready to help": "Pessoas reais, prontas para ajudar",
    "Have a room to rent? List it free": "Tem um quarto para arrendar? Anuncie gratuitamente",
    "See how verification works": "Veja como funciona a verificação",
    "Join thousands of verified renters and landlords": "Junte-se a milhares de inquilinos e senhorios verificados",
    "Trusted worldwide by our community": "Confiado em todo o mundo pela nossa comunidade",
    "Trusted by renters and landlords around the world": "Confiado por inquilinos e senhorios em todo o mundo",
    Countries: "Países",
    "Verified users": "Utilizadores verificados",
    "Rooms listed": "Quartos anunciados",
    Secure: "Seguro",
    "By design": "Por design",

    // --- home/AudienceSection ---
    "List a room": "Anunciar um quarto",
    "Offer an eligible private room with clear verification and applicant workflows.":
      "Ofereça um quarto privado elegível com verificação clara e processos de candidatura.",
    "Start a free listing": "Começar um anúncio gratuito",
    "For organizations": "Para organizações",
    "Source and manage verified room placements for students, staff and relocations.":
      "Encontre e gerencie quartos verificados para estudantes, funcionários e realocações.",
    "Explore organizations": "Explorar organizações",
    "Operate portfolios, compliance, applications and payments in one system.":
      "Gerencie portefólios, conformidade, candidaturas e pagamentos num único sistema.",
    "Explore Pro": "Explorar Pro",

    // --- home/EvidenceSection ---
    "Verified room interior with kitchen and living space": "Interior de quarto verificado com cozinha e sala de estar",
    "See it for yourself": "Veja por si mesmo",
    "Evidence you can actually inspect": "Evidências que pode realmente inspecionar",
    "Every listing shows exactly what's been checked, by whom, and when — down to the lock on the door.":
      "Cada anúncio mostra exatamente o que foi verificado, por quem e quando — até à fechadura da porta.",
    "See a sample room passport": "Ver um exemplo de Room Passport",

    // --- home/FaqSection ---
    "What is Zoiko Rooms?": "O que é a Zoiko Rooms?",
    "Zoiko Rooms is a global platform exclusively for private individual rooms rented for 30 nights or longer. It helps room seekers review evidence-specific room information, confirm who is authorized to offer the room, communicate safely, complete the appropriate rental process and maintain a clear transaction record through move-out.":
      "A Zoiko Rooms é uma plataforma global dedicada exclusivamente a quartos privados individuais alugados por 30 noites ou mais. Ajuda quem procura quarto a rever informações específicas com evidências, confirmar quem está autorizado a oferecer o quarto, comunicar com segurança, seguir o processo de arrendamento adequado e manter um registo claro da transação até à saída.",
    "What accommodation is available?": "Que tipo de alojamento está disponível?",
    "Private individual rooms within larger residential properties. Whole homes, hotels, dormitory beds and nightly vacation rentals are outside the core scope.":
      "Quartos privados individuais dentro de propriedades residenciais maiores. Casas inteiras, hotéis, camas em dormitórios e arrendamentos de férias por noite ficam fora do âmbito principal.",
    "What does verified mean?": "O que significa verificado?",
    "Each detail on a listing is tagged with the evidence behind it — provider declared, document verified, or physically inspected — so you always know how a claim was checked.":
      "Cada detalhe de um anúncio é identificado com a evidência que o sustenta — declarado pelo anfitrião, verificado por documento ou inspecionado fisicamente — para que saiba sempre como uma informação foi verificada.",
    "Can I list a spare room?": "Posso anunciar um quarto vago?",
    "Yes, as long as you're authorized to offer it. We check provider authority before a listing goes live to keep the marketplace trustworthy.":
      "Sim, desde que esteja autorizado a oferecê-lo. Verificamos a autoridade do anfitrião antes de o anúncio ser publicado, para manter a confiança no mercado.",
    "How do payments work?": "Como funcionam os pagamentos?",
    "Payments are handled in-platform and linked to your application and agreement, so there's a single connected record from application to move-out.":
      "Os pagamentos são geridos dentro da plataforma e associados à sua candidatura e contrato, criando um único registo ligado desde a candidatura até à saída.",
    "What is the minimum stay?": "Qual é a estadia mínima?",
    "Zoiko Rooms is built for stays of 30 nights or longer.": "A Zoiko Rooms foi concebida para estadias de 30 noites ou mais.",

    // --- home/FinalCtaSection ---
    "Find your next room with confidence": "Encontre o seu próximo quarto com confiança",
    "Search verified rooms": "Pesquisar quartos verificados",
    "Create a free alert": "Criar um alerta gratuito",

    // --- home/ProcessSection ---
    "The process": "O processo",
    "A streamlined path from search to move-in": "Um percurso simplificado, da pesquisa à mudança",
    "Search live listings, review evidence, apply securely, then manage everything from one place.":
      "Explore anúncios em direto, reveja as evidências, candidate-se com segurança e depois gira tudo num só lugar.",
    "Bright living room representing the rental process": "Sala de estar luminosa representando o processo de arrendamento",
    "Search · passport · agreement · support — product screens": "Pesquisa · passaporte · contrato · apoio — ecrãs do produto",
    "By place and date, then refine by budget.": "Por local e data, depois refine por orçamento.",
    Review: "Rever",
    "Compare passports and provider evidence.": "Compare passaportes e evidências dos anfitriões.",
    "Apply and agree": "Candidatar-se e assinar",
    "Submit securely with clear disclosures.": "Submeta com segurança e com divulgações claras.",
    "Move in": "Mudar-se",
    "Keep evidence and support connected.": "Mantenha as evidências e o apoio ligados.",

    // --- home/RelocationSection ---
    "Find what suits you": "Encontre o que lhe convém",
    "Every relocation is different": "Cada mudança é diferente",
    "Work relocation": "Mudança de trabalho",
    "Settle in before day one": "Instale-se antes do primeiro dia",
    "Verified rooms near your new office, ready before you arrive.":
      "Quartos verificados perto do seu novo escritório, prontos antes de chegar.",
    "Study abroad": "Estudar no estrangeiro",
    "Near campus, fully checked": "Perto do campus, totalmente verificado",
    "Rooms close to your university with honest evidence, not guesswork.":
      "Quartos perto da sua universidade com evidências honestas, sem suposições.",
    "Healthcare placement": "Colocação na área da saúde",
    "Housing for shift life": "Alojamento pensado para turnos",
    "Flexible terms built for rotations and placements, not vacations.":
      "Condições flexíveis pensadas para rotações e colocações, não para férias.",
    "Where we operate": "Onde operamos",
    "Live market": "Mercado ativo",
    Announced: "Anunciado",

    // --- home/RoomPassportSection ---
    "Not every detail carries the same evidence": "Nem todos os detalhes têm o mesmo nível de evidência",
    "Friends gathered in a shared kitchen": "Amigos reunidos numa cozinha partilhada",
    "Sample passport · demonstration data": "Passaporte de exemplo · dados de demonstração",
    Address: "Morada",
    "Regulatory verified": "Verificado por entidade reguladora",
    "Room dimensions": "Dimensões do quarto",
    "Document verified": "Verificado por documento",
    Lockability: "Possibilidade de trancar",
    "Physical inspection": "Inspeção física",
    Furnishings: "Mobiliário",
    "Provider declared": "Declarado pelo anfitrião",
    "Internet speed": "Velocidade da internet",

    // --- home/RoomsAvailableSection ---
    "Live in Berlin": "Ao vivo em Berlim",
    "Rooms available now": "Quartos disponíveis agora",
    "View all rooms": "Ver todos os quartos",
    "Room in": "Quarto em",
    "avail. 1 Sep": "disp. 1 set.",
    "avail. now": "disp. agora",
    "avail. 15 Aug": "disp. 15 ago.",
    "Remote inspection": "Inspeção remota",

    // --- home/WhyZoikoSection ---
    "Why Zoiko Rooms": "Porquê a Zoiko Rooms",
    "Welcome to verified renting": "Bem-vindo ao arrendamento verificado",
    "Every claim on Zoiko Rooms is backed by evidence you can actually see, not a badge you have to take on faith.":
      "Cada afirmação na Zoiko Rooms é sustentada por evidências que pode realmente ver, não por um selo que tem de aceitar sem mais.",
    "Provider authority": "Autoridade do anfitrião",
    "We check whether the provider is entitled to offer the room.": "Verificamos se o anfitrião está autorizado a oferecer o quarto.",
    "Evidence-based": "Baseado em evidências",
    "See which details were declared, documented or physically verified.":
      "Veja quais detalhes foram declarados, documentados ou verificados fisicamente.",
    "Tiered evidence": "Evidência em níveis",
    "Connected record": "Registo ligado",
    "Applications, agreements, payments and move-in evidence stay linked.":
      "Candidaturas, contratos, pagamentos e evidências de entrada permanecem ligados.",
    "One timeline": "Uma única linha temporal",
    "Human support": "Apoio humano",
    "Report concerns before, during and after the rental.": "Reporte preocupações antes, durante e depois do arrendamento.",
    "Always reachable": "Sempre disponível",
  },
};
