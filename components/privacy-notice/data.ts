export type TocItem = { id: string; label: string };

export const tocItems: TocItem[] = [
  { id: "who-applies", label: "1. Who this applies to" },
  { id: "who-responsible", label: "2. Who's responsible" },
  { id: "information-collected", label: "3. Information we collect" },
  { id: "where-from", label: "4. Where it comes from" },
  { id: "why-we-use", label: "5. Why we use it" },
  { id: "when-required", label: "6. When it's required" },
  { id: "who-we-share", label: "7. Who we share it with" },
  { id: "payments-finance", label: "8. Payments & finance" },
  { id: "verification-fraud", label: "9. Verification & fraud" },
  { id: "automated-decisions", label: "10. Automated decisions" },
  { id: "cookies-advertising", label: "11. Cookies & advertising" },
  { id: "international-transfers", label: "12. International transfers" },
  { id: "how-long-we-keep", label: "13. How long we keep it" },
  { id: "how-we-protect", label: "14. How we protect it" },
  { id: "your-privacy-rights", label: "15. Your privacy rights" },
  { id: "children-age", label: "16. Children & age" },
  { id: "regional-disclosures", label: "17. Regional disclosures" },
  { id: "contact-complaints", label: "18. Contact & complaints" },
  { id: "changes-to-notice", label: "19. Changes to this notice" },
  { id: "related-notices", label: "20. Related notices" },
];

export const sidebarLinks = [
  { label: "Manage privacy choices", href: "/legal/your-privacy-choices" },
  { label: "Your Privacy Choices page", href: "/legal/your-privacy-choices" },
  { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
];

export const controllerRows = [
  { label: "Controller for UK processing", value: "Zoiko Rooms UK Ltd." },
  { label: "Registered office", value: "London, United Kingdom" },
  { label: "UK representative / DPO contact", value: "privacy@zoikorooms.example" },
  { label: "Payment-specific controller", value: "Zoiko Payments Europe Ltd. (for processor-held data)" },
];

export type InfoCategoryRow = { category: string; tag?: string; examples: string; notes: string };

export const infoCategoryRows: InfoCategoryRow[] = [
  { category: "Identity & contact", examples: "Name, email, phone, address, age attributes when required.", notes: "Required vs. optional shown at the point of collection." },
  { category: "Account & authentication", examples: "Account ID, role, preferences, login and security events.", notes: "Credentials, tokens and hashes are never disclosed here." },
  { category: "Verification & compliance", tag: "Conditional", examples: "Identity-document details, verification result, eligibility checks.", notes: "Elevated notice applies if biometric data is involved." },
  { category: "Room, listing & provider", examples: "Listing details, property attributes, availability, provider documentation.", notes: "Public listing content is kept separate from your personal data." },
  { category: "Search, inquiry & transaction", examples: "Search criteria, inquiries, booking state, dates, counterparties.", notes: "Transaction evidence retained per Section 13." },
  { category: "Payments & financial", examples: "Payment instrument metadata/tokens, payout details, billing info, refunds.", notes: "See Section 8 for what we do and don't receive." },
  { category: "Communications & content", examples: "Messages, reviews, support cases, reports, attachments.", notes: "Trust & Safety may access relevant content during moderation." },
  { category: "Device, usage & approximate location", examples: "IP, browser/device identifiers, language, approximate location, diagnostics.", notes: "Precise location only where a feature specifically needs and discloses it." },
  { category: "Trust, fraud & safety signals", examples: "Risk indicators, account-linkage signals, abuse reports, moderation outcomes.", notes: "Detection thresholds and logic aren't disclosed publicly." },
  { category: "Marketing & preferences", examples: "Email/SMS preference, campaign interaction, advertising-choice signals.", notes: "Managed via Cookie Preferences and Your Privacy Choices." },
  { category: "Third-party information", examples: "References, organization admin details, verification outputs.", notes: "Sources described in Section 4." },
  { category: "Derived / inferred information", examples: "Risk scores, recommendations, preference inferences.", notes: "Material inferences with significant effects get separate disclosure." },
  { category: "Sensitive / protected information", tag: "Minimized", examples: "Only specific categories necessary for an approved feature or legal duty.", notes: "We don't collect protected-characteristic data just because anti-discrimination law exists." },
];

export const sourcesList = [
  { lead: "Directly from you", rest: "when you create an account, list a room, apply, message, or contact support." },
  { lead: "Transaction counterparties", rest: "the other party to a listing, application, or agreement." },
  { lead: "Verification, payment and fraud providers", rest: "results returned from checks you or a provider initiated." },
  { lead: "Organization administrators", rest: "where you're added to an institutional or employer program." },
  { lead: "Your device", rest: "technical and diagnostic information generated by using the platform." },
  { lead: "Public or official sources", rest: "where lawful and relevant, such as confirming a business registration." },
  { lead: "Service integrations", rest: "data returned by connected third-party tools you've enabled." },
  { lead: "Derived signals", rest: "information we generate by analyzing the categories above." },
];

export const purposeRows = [
  { purpose: "Create and secure accounts", families: "Identity/contact; account/authentication; security events.", basis: "Contract; legitimate interests (security)" },
  { purpose: "Provide search & transaction services", families: "Listing/provider; search/inquiry; transaction; communications.", basis: "Contract" },
  { purpose: "Process payments, payouts, deposits, refunds", families: "Transaction; payment/financial; tax/compliance.", basis: "Contract; legal obligation" },
  { purpose: "Verify identity, eligibility or provider status", families: "Identity; verification; compliance; fraud signals.", basis: "Legal obligation; contract; legitimate interests" },
  { purpose: "Protect users and enforce standards", families: "Account/device; communications; fraud/safety signals.", basis: "Legitimate interests; legal obligation" },
  { purpose: "Provide support and resolve disputes", families: "Identity; transaction; messages; support records.", basis: "Contract; legitimate interests; legal claims" },
  { purpose: "Comply with law and legal process", families: "Identity; transaction; compliance; other necessary records.", basis: "Legal obligation; legal claims" },
  { purpose: "Improve reliability and accessibility", families: "Usage/diagnostic; aggregated feedback.", basis: "Legitimate interests" },
  { purpose: "Personalize search or recommendations", families: "Usage/search; preference/derived data.", basis: "Contract; legitimate interests; consent where required" },
  { purpose: "Send marketing or measure advertising", families: "Contact; marketing preferences; device/cookie identifiers.", basis: "Consent; soft opt-out where lawful" },
];

export const sharedWithList = [
  { lead: "Transaction participants", rest: "the other party to your listing, application or agreement." },
  { lead: "Processors & service providers", rest: "vendors who process data on our instructions under contract." },
  { lead: "Payment & verification providers", rest: "to complete payments or checks you've initiated." },
  { lead: "Corporate affiliates", rest: "within the Zoiko group, consistent with this notice." },
  { lead: "Professional advisers", rest: "lawyers, auditors, and similar, where necessary." },
  { lead: "Authorities", rest: "where legally required, such as a valid regulatory or law-enforcement request." },
  { lead: "Business transfers", rest: "in a merger, acquisition, or similar event, subject to continuity safeguards." },
];

export const retentionRows = [
  { type: "Account records", approach: "For as long as your account is active, plus a limited post-closure window." },
  { type: "Transaction / ledger records", approach: "Per applicable financial record-keeping requirements." },
  { type: "Tax & compliance records", approach: "Per statutory retention periods in your market." },
  { type: "Dispute & legal-claim records", approach: "Until resolution, plus the applicable limitation period." },
  { type: "Identity & verification records", approach: "Per the verification tier and any regulatory requirement." },
  { type: "Support records", approach: "For a limited period after case resolution, for quality and continuity." },
  { type: "Security & fraud records", approach: "As needed to protect against and evidence abuse." },
  { type: "Marketing records", approach: "Until you opt out, plus a short suppression-list period." },
];

export const rightsCards = [
  { title: "Access", description: "Get a copy of the personal data we hold." },
  { title: "Correct", description: "Fix inaccurate or incomplete data." },
  { title: "Delete", description: "Ask us to delete data we no longer need." },
  { title: "Restrict / object", description: "Limit or object to specific processing." },
  { title: "Port", description: "Receive your data in a portable format." },
  { title: "Withdraw consent", description: "End consent-based processing at any time." },
  { title: "Automated-decision review", description: "Ask for explanation or human review." },
  { title: "Appeal & complain", description: "Escalate internally or to a regulator." },
];

export const regionalRows = [
  { label: "Applicable law", value: "UK GDPR and the Data Protection Act 2018." },
  { label: "Controller", value: "Zoiko Rooms UK Ltd., as set out in Section 2." },
  { label: "Right to object", value: "You can object to processing based on legitimate interests at any time; objection to direct marketing is always honored." },
  { label: "Transfers", value: "Approved UK transfer mechanisms are used for any relevant international transfer — see Section 12." },
  { label: "Marketplace minimization", value: "Identity and contact details between a room seeker and provider are minimized before booking; only what's needed for the transaction or safety is shared." },
  { label: "Regulator", value: "You can complain to the UK Information Commissioner's Office (ICO) — see Section 18." },
];

export const contactRows: { label: string; value: string; href?: string }[] = [
  { label: "Privacy contact", value: "privacy@zoikorooms.example" },
  { label: "UK representative / DPO", value: "Available on request via the above contact" },
  { label: "Internal complaint route", value: "Submit a privacy request →", href: "/legal/your-privacy-choices" },
  { label: "Regulator (England)", value: "Information Commissioner's Office (ICO) — ico.org.uk", href: "https://ico.org.uk" },
];

export const relatedNotices = [
  { label: "Cookie Notice", href: "/legal/cookie-notice" },
  { label: "Cookie Preferences", href: "/legal/cookie-preferences" },
  { label: "Your Privacy Choices", href: "/legal/your-privacy-choices" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Payment Terms", href: "/legal/payment-terms" },
  { label: "Fair Housing & Anti-Discrimination", href: "/legal/fair-housing-anti-discrimination" },
  { label: "Community Standards", href: "/legal/community-standards" },
  { label: "Regional Legal Notices", href: "/legal/regional-notice" },
];
