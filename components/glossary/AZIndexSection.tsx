"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";

interface TermItem {
  id: string;
  title: string;
  category: string;
  status: string;
  definition: string;
  notTheSameAs: string;
  applicability: string;
  calloutText: string;
  limitations: string;
  example: string;
  confusedWith: {
    term: string;
    description: string;
  };
  relatedJourneys: string[];
  relatedTerms: string[];
  sourceOwner: string;
  reviewedDate: string;
}

const termsList: TermItem[] = [
  {
    id: "accessibility-feature",
    title: "Accessibility feature",
    category: "Safety, privacy & access",
    status: "Current",
    definition:
      "An accessibility feature is a specific, sourced fact about a room's physical access \u2014 such as step-free entry, elevator access, or doorway width.",
    notTheSameAs:
      "It is not a medical or statutory suitability judgment \u2014 it's a factual description, not a conclusion.",
    applicability:
      "Applies wherever a provider or inspection has recorded specific access facts.",
    calloutText:
      "Open the listing's live Room Passport for specific, dated access facts.",
    limitations:
      "Absence of a listed feature does not confirm the room lacks it \u2014 it may simply be unconfirmed.",
    example:
      'A generic example: "step-free entrance, elevator to 3rd floor, 32-inch bathroom doorway" listed with a source and date.',
    confusedWith: {
      term: "Room Passport",
      description:
        "Accessibility features are one category of facts within the broader Room Passport.",
    },
    relatedJourneys: ["Open accessibility guidance"],
    relatedTerms: ["Room Passport"],
    sourceOwner: "Zoiko Rooms Product",
    reviewedDate: "Reviewed 1 month ago",
  },
  {
    id: "agreement",
    title: "Agreement",
    category: "Applications & agreements",
    status: "Current",
    definition:
      "An agreement is a legally binding contract between the room seeker and provider outlining the terms of occupancy, payment schedules, and household rules.",
    notTheSameAs: "An application or initial reservation hold.",
    applicability: "Applies during the binding stage of booking a room.",
    calloutText: "Review your active digital contract prior to signing.",
    limitations: "Terms cannot be modified unilaterally after signature.",
    example: "Standard Residential Tenancy or License to Occupy Agreement.",
    confusedWith: {
      term: "Application",
      description:
        "An application expresses interest, while an agreement binds both parties legally.",
    },
    relatedJourneys: ["Review room agreement"],
    relatedTerms: ["Application", "Holding deposit"],
    sourceOwner: "Zoiko Rooms Legal",
    reviewedDate: "Reviewed 2 weeks ago",
  },
  {
    id: "application",
    title: "Application",
    category: "Applications & agreements",
    status: "Current",
    definition:
      "A formal submission by a room seeker detailing their profile, preferences, and background to request occupancy.",
    notTheSameAs: "A confirmed booking or signed agreement.",
    applicability: "Applies prior to agreement generation and room allocation.",
    calloutText: "Track your active application status in your dashboard.",
    limitations: "Submitting an application does not guarantee room placement.",
    example: "Completed seeker profile with identity verification.",
    confusedWith: {
      term: "Agreement",
      description: "Applications precede approval; agreements follow approval.",
    },
    relatedJourneys: ["Submit room application"],
    relatedTerms: ["Agreement", "Eligibility"],
    sourceOwner: "Zoiko Rooms Product",
    reviewedDate: "Reviewed 1 month ago",
  },
  {
    id: "authorized-sublet",
    title: "Authorized sublet",
    category: "Providers & authority",
    status: "Current",
    definition:
      "A subleasing arrangement officially sanctioned by the primary landlord or property management entity.",
    notTheSameAs: "An unapproved or informal secondary rental.",
    applicability: "Applies to tenants granting tenancy rights to a third party.",
    calloutText: "Verify sublet authorization records before sending payments.",
    limitations: "Subject to the underlying primary lease duration and terms.",
    example: "Written consent letter attached to the Room Passport.",
    confusedWith: {
      term: "Listing authority",
      description:
        "Authorized sublet refers to tenancy transfer, whereas listing authority covers advertising permissions.",
    },
    relatedJourneys: ["Verify sublet authority"],
    relatedTerms: ["Listing authority", "Provider"],
    sourceOwner: "Zoiko Rooms Operations",
    reviewedDate: "Reviewed 3 months ago",
  },
  {
    id: "bills-included",
    title: "Bills included",
    category: "Costs & payments",
    status: "Current",
    definition:
      "A rent structure where utility costs (e.g., water, electricity, gas, internet) are bundled into the base periodic payment.",
    notTheSameAs: "Uncapped unlimited utility consumption without fair-use limits.",
    applicability: "Applies to specified listings with bundled payment terms.",
    calloutText: "Check the Room Passport for utility fair-use caps.",
    limitations: "Excess usage beyond fair-use policies may incur additional fees.",
    example: "Rent inclusive of broadband, water, and heating up to £100/mo.",
    confusedWith: {
      term: "Rent",
      description: "Rent is the base charge; bills included incorporates utilities.",
    },
    relatedJourneys: ["Calculate total room cost"],
    relatedTerms: ["Rent", "Direct billing"],
    sourceOwner: "Zoiko Rooms Finance",
    reviewedDate: "Reviewed 1 month ago",
  },
  {
    id: "direct-billing",
    title: "Direct billing",
    category: "Organizations & programs",
    status: "Current",
    definition:
      "A payment arrangement where an employer, university, or sponsor pays rental costs directly to the provider.",
    notTheSameAs: "Personal seeker reimbursement or manual expense claims.",
    applicability: "Applies to corporate, healthcare, or institutional placements.",
    calloutText: "Ensure your organization mandate is linked to your account.",
    limitations: "Only covers charges authorized by the sponsoring organization.",
    example: "Employer paying housing subsidy directly via monthly invoicing.",
    confusedWith: {
      term: "Bills included",
      description: "Direct billing refers to who pays; bills included refers to what is covered.",
    },
    relatedJourneys: ["Manage organization billing"],
    relatedTerms: ["Eligibility", "Nomination / allocation"],
    sourceOwner: "Zoiko Rooms Pro Support",
    reviewedDate: "Reviewed 2 weeks ago",
  },
  {
    id: "eligibility",
    title: "Eligibility",
    category: "Organizations & programs",
    status: "Current",
    definition:
      "Criteria set by partner organizations or providers to determine qualification for specific housing options or subsidies.",
    notTheSameAs: "A guarantee of room placement.",
    applicability: "Applies to institutional housing and subsidized placements.",
    calloutText: "Check eligibility status with your organization coordinator.",
    limitations: "Subject to verification and document validation.",
    example: "Enrolled full-time student status or active corporate relocation contract.",
    confusedWith: {
      term: "Application",
      description: "Eligibility is the requirement; application is the process.",
    },
    relatedJourneys: ["Check program eligibility"],
    relatedTerms: ["Nomination / allocation", "Direct billing"],
    sourceOwner: "Zoiko Rooms Pro Support",
    reviewedDate: "Reviewed 1 month ago",
  },
  {
    id: "holding-deposit",
    title: "Holding deposit",
    category: "Costs & payments",
    status: "Current",
    definition:
      "A payment made to reserve a room while background checks and agreement preparation are underway.",
    notTheSameAs: "The main tenancy security deposit.",
    applicability: "Applies upon application approval before contract signing.",
    calloutText: "View holding deposit terms and refund rules in your account.",
    limitations: "May be forfeited if false information is provided during screening.",
    example: "1 week's rent paid to pause public marketing of a room.",
    confusedWith: {
      term: "Rent",
      description: "Holding deposit reserves the room; rent pays for occupancy time.",
    },
    relatedJourneys: ["Pay holding deposit"],
    relatedTerms: ["Rent", "Agreement"],
    sourceOwner: "Zoiko Rooms Finance",
    reviewedDate: "Reviewed 3 weeks ago",
  },
  {
    id: "listing-authority",
    title: "Listing authority",
    category: "Providers & authority",
    status: "Current",
    definition:
      "Documented legal right or power of an individual or agent to market and lease a specific property or room.",
    notTheSameAs: "Ownership of the real estate property.",
    applicability: "Applies to agents, property managers, and subletting tenants.",
    calloutText: "Verify verified listing authority badges on room profiles.",
    limitations: "Authority can expire or be revoked by the property owner.",
    example: "Signed management agency contract or sublet permission letter.",
    confusedWith: {
      term: "Authorized sublet",
      description: "Listing authority is the permission to market; authorized sublet is the tenancy structure.",
    },
    relatedJourneys: ["Verify provider authority"],
    relatedTerms: ["Authorized sublet", "Accessibility feature"],
    sourceOwner: "Zoiko Rooms Safety",
    reviewedDate: "Reviewed 1 month ago",
  },
  {
    id: "nomination-allocation",
    title: "Nomination / allocation",
    category: "Organizations & programs",
    status: "Current",
    definition:
      "The process where an organization assigns specific reserved rooms or quotas to eligible individuals.",
    notTheSameAs: "Direct open-market room booking.",
    applicability: "Applies to university partner halls and corporate housing pools.",
    calloutText: "View your official institutional allocation letter in account records.",
    limitations: "Allocations expire if not accepted within the specified timeframe.",
    example: "University placing a first-year student into an allocated room block.",
    confusedWith: {
      term: "Eligibility",
      description: "Eligibility is qualifying for the pool; allocation is assigning the specific room.",
    },
    relatedJourneys: ["Accept organization allocation"],
    relatedTerms: ["Eligibility", "Direct billing"],
    sourceOwner: "Zoiko Rooms Pro Support",
    reviewedDate: "Reviewed 1 month ago",
  },
  {
    id: "rent",
    title: "Rent",
    category: "Costs & payments",
    status: "Current",
    definition:
      "The recurring payment agreed upon between seeker and provider for exclusive or shared occupancy of a room.",
    notTheSameAs: "Security deposits, holding fees, or utility charges.",
    applicability: "Applies continuously across all room rentals.",
    calloutText: "Review your official payment schedule in your account dashboard.",
    limitations: "Due dates and payment routes are fixed by the signed agreement.",
    example: "Monthly rent payment of £800 due on the 1st of each calendar month.",
    confusedWith: {
      term: "Holding deposit",
      description: "Rent pays for ongoing occupancy; holding deposit reserves the room initially.",
    },
    relatedJourneys: ["View payment schedule"],
    relatedTerms: ["Bills included", "Holding deposit"],
    sourceOwner: "Zoiko Rooms Finance",
    reviewedDate: "Reviewed 2 weeks ago",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#".split("");

// Related-term pills that name something outside the current glossary list —
// point straight at the real page that covers it instead of a dead-end pill.
const externalTermLinks: Record<string, string> = {
  "Room Passport": "/how-it-works/room-passport",
  Provider: "/list-a-room",
};

// Related-journey pills describe a guided task, not a glossary entry, so they
// route to the real page that walks through that task.
const relatedJourneyLinks: Record<string, string> = {
  "Open accessibility guidance": "/legal/fair-housing-anti-discrimination#accessibility",
  "Review room agreement": "/agreement-review-signing",
  "Submit room application": "/find-a-room/search-rooms",
  "Verify sublet authority": "/list-a-room/authorized-sublets",
  "Calculate total room cost": "/how-it-works/payments-safety-support",
  "Manage organization billing": "/organizations",
  "Check program eligibility": "/organizations",
  "Pay holding deposit": "/how-it-works/payments-safety-support",
  "Verify provider authority": "/how-it-works/verification-authority",
  "Accept organization allocation": "/organizations",
  "View payment schedule": "/how-it-works/payments-safety-support",
};

interface AZIndexSectionProps {
  activeCategory?: string | null;
  onClearCategory?: () => void;
  jumpToTermId?: string | null;
  onJumpHandled?: () => void;
}

export default function AZIndexSection({
  activeCategory,
  onClearCategory,
  jumpToTermId,
  onJumpHandled,
}: AZIndexSectionProps) {
  const [selectedLetter, setSelectedLetter] = useState("A");
  const [selectedTermId, setSelectedTermId] = useState("accessibility-feature");

  // Terms in scope for the alphabet/letter picker — narrowed to the active
  // category, if one was chosen from "Browse by Topic".
  const categoryTerms = useMemo(() => {
    if (!activeCategory) return termsList;
    return termsList.filter((term) => term.category === activeCategory);
  }, [activeCategory]);

  // Dynamically compute which letters actually have terms available
  const availableLetters = useMemo(() => {
    const lettersSet = new Set<string>();
    categoryTerms.forEach((term) => {
      const firstLetter = term.title.charAt(0).toUpperCase();
      if (/[A-Z]/.test(firstLetter)) {
        lettersSet.add(firstLetter);
      } else {
        lettersSet.add("#");
      }
    });
    return lettersSet;
  }, [categoryTerms]);

  // Filter terms according to selected letter (within the active category, if any)
  const filteredTerms = useMemo(() => {
    return categoryTerms.filter((term) => {
      const firstLetter = term.title.charAt(0).toUpperCase();
      if (selectedLetter === "#") {
        return !/[A-Z]/.test(firstLetter);
      }
      return firstLetter === selectedLetter;
    });
  }, [categoryTerms, selectedLetter]);

  // Handle clicking a letter button
  const handleLetterClick = (letter: string) => {
    setSelectedLetter(letter);
    const matchingTerms = categoryTerms.filter((term) => {
      const firstChar = term.title.charAt(0).toUpperCase();
      return letter === "#" ? !/[A-Z]/.test(firstChar) : firstChar === letter;
    });

    if (matchingTerms.length > 0) {
      setSelectedTermId(matchingTerms[0].id);
    }
  };

  // Jump to the first letter with a term whenever the active category changes
  useEffect(() => {
    if (!activeCategory) return;
    const firstLetterWithTerm = alphabet.find((letter) => availableLetters.has(letter));
    if (firstLetterWithTerm) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- re-anchoring the letter/term picker to a newly chosen category, not a render loop
      setSelectedLetter(firstLetterWithTerm);
      const firstTerm = categoryTerms.find((term) => {
        const firstChar = term.title.charAt(0).toUpperCase();
        return firstLetterWithTerm === "#" ? !/[A-Z]/.test(firstChar) : firstChar === firstLetterWithTerm;
      });
      if (firstTerm) {
        setSelectedTermId(firstTerm.id);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-run when the category itself changes, not on every filteredTerms recompute
  }, [activeCategory]);

  // Jump to a specific term (e.g. from a "Popular questions" link) on request
  useEffect(() => {
    if (!jumpToTermId) return;
    const target = termsList.find((term) => term.id === jumpToTermId);
    if (target) {
      onClearCategory?.();
      const firstChar = target.title.charAt(0).toUpperCase();
      // eslint-disable-next-line react-hooks/set-state-in-effect -- responding to an external "jump to this term" request, not a render loop
      setSelectedLetter(/[A-Z]/.test(firstChar) ? firstChar : "#");
      setSelectedTermId(target.id);
    }
    onJumpHandled?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only re-run when a new jump is requested
  }, [jumpToTermId]);

  const currentTerm =
    termsList.find((t) => t.id === selectedTermId) || filteredTerms[0] || termsList[0];

  return (
    <section id="az-index" className="w-full scroll-mt-24 pb-16 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased text-[#1E2022]">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 w-full max-w-2xl mx-auto">
          <span className="text-[11px] font-bold tracking-widest text-[#B24A3B] uppercase block">
            A&ndash;Z INDEX
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#14213D] leading-tight">
            Find any term directly
          </h2>
          <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
            Letters without a current canonical term stay visible but disabled &mdash; nothing pretends to have more coverage than it does.
          </p>
          {activeCategory && (
            <button
              type="button"
              onClick={onClearCategory}
              className="inline-flex items-center gap-1.5 bg-[#F5F2ED] hover:bg-[#EAE6DF] text-[#14213D] text-xs font-semibold py-1.5 px-3.5 rounded-full transition-colors cursor-pointer"
            >
              Filtering by: {activeCategory}
              <span aria-hidden="true">&times;</span>
            </button>
          )}
        </div>

        {/* Alphabet Navigation Row */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto">
          {alphabet.map((letter) => {
            const hasTerms = availableLetters.has(letter);
            const isSelected = selectedLetter === letter;

            return (
              <button
                key={letter}
                type="button"
                disabled={!hasTerms}
                onClick={() => handleLetterClick(letter)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-bold transition-all duration-150 flex items-center justify-center ${
                  isSelected
                    ? "bg-[#142550] text-white shadow-xs scale-105"
                    : hasTerms
                    ? "bg-white text-[#14213D] border border-[#EAE6DF] hover:bg-[#FAF6F0] cursor-pointer"
                    : "bg-white/50 text-[#C4C9D0] border border-[#EAE6DF]/60 cursor-not-allowed opacity-60"
                }`}
              >
                {letter}
              </button>
            );
          })}
        </div>

        {/* Main Content Area: Sidebar + Active Term Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
          
          {/* Left Sidebar: Terms List for Selected Letter */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                {filteredTerms.length} OF {categoryTerms.length} TERMS ({selectedLetter})
              </span>
            </div>

            <div className="space-y-1 max-h-[600px] overflow-y-auto pr-1">
              {filteredTerms.length > 0 ? (
                filteredTerms.map((item) => {
                  const isActive = item.id === selectedTermId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedTermId(item.id)}
                      className={`w-full text-left p-3.5 rounded-2xl transition-all duration-150 cursor-pointer block ${
                        isActive
                          ? "bg-white border border-[#EAE6DF] shadow-xs"
                          : "hover:bg-white/60 border border-transparent"
                      }`}
                    >
                      <div className="text-xs sm:text-sm font-bold text-[#14213D]">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#7A838E] font-normal pt-0.5">
                        {item.category}
                      </div>
                    </button>
                  );
                })
              ) : (
                <div className="p-4 text-xs text-[#7A838E] bg-white/40 rounded-2xl border border-[#EAE6DF]">
                  No terms listed under letter &quot;{selectedLetter}&quot;.
                </div>
              )}
            </div>
          </div>

          {/* Right Main Panel: Detail Card */}
          <div className="lg:col-span-8">
            <motion.div
              key={currentTerm.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE6DF] shadow-xs space-y-8"
            >
              {/* Header Badges & Title */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 bg-[#E8F3EE] text-[#1D6042] text-[11px] font-semibold py-1 px-3 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1D6042]" />
                    {currentTerm.status}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-[#F5F2ED] text-[#555E68] text-[11px] font-semibold py-1 px-3 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8C95A0]" />
                    {currentTerm.category}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#14213D]">
                  {currentTerm.title}
                </h3>
              </div>

              {/* Main Content Sections */}
              <div className="space-y-5 text-xs sm:text-sm text-[#14213D] leading-relaxed">
                <p className="font-normal text-[#14213D]">
                  {currentTerm.definition}
                </p>

                {currentTerm.notTheSameAs && (
                  <p className="text-[#555E68]">
                    <strong className="text-[#14213D] font-bold">Not the same as:</strong>{" "}
                    {currentTerm.notTheSameAs}
                  </p>
                )}

                {currentTerm.applicability && (
                  <p className="text-[#555E68]">
                    <strong className="text-[#14213D] font-bold">Applicability:</strong>{" "}
                    {currentTerm.applicability}
                  </p>
                )}

                {/* Callout Box */}
                {currentTerm.calloutText && (
                  <div className="bg-[#EAF2ED] border border-[#D5E6DC] rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-xs text-[#1D6042] font-medium flex items-center gap-2">
                      <span>🗺️</span> {currentTerm.calloutText}
                    </p>
                    <a
                      href="/login"
                      className="bg-[#142550] hover:bg-[#0D1629] text-white text-xs font-bold py-2 px-5 rounded-full transition-all duration-150 whitespace-nowrap cursor-pointer shrink-0"
                    >
                      Open &rarr;
                    </a>
                  </div>
                )}
              </div>

              {currentTerm.limitations && (
                <>
                  <div className="border-t border-[#EAE6DF]" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                      LIMITATIONS
                    </span>
                    <p className="text-xs sm:text-sm text-[#555E68] leading-relaxed">
                      {currentTerm.limitations}
                    </p>
                  </div>
                </>
              )}

              {currentTerm.example && (
                <>
                  <div className="border-t border-[#EAE6DF]" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                      EXAMPLE
                    </span>
                    <div className="bg-[#FAF8F5] border border-[#EAE6DF] border-dashed rounded-2xl p-4 sm:p-5 space-y-1.5">
                      <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                        GENERIC, ILLUSTRATIVE ONLY
                      </span>
                      <p className="text-xs sm:text-sm text-[#555E68] font-normal leading-relaxed">
                        {currentTerm.example}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {currentTerm.confusedWith?.term && (
                <>
                  <div className="border-t border-[#EAE6DF]" />
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                      COMMONLY CONFUSED WITH
                    </span>
                    <div className="bg-[#FAF8F5] border border-[#EAE6DF] rounded-2xl p-4 space-y-1">
                      <div className="text-xs font-bold text-[#14213D]">
                        {currentTerm.confusedWith.term}
                      </div>
                      <p className="text-xs text-[#555E68] font-normal">
                        {currentTerm.confusedWith.description}
                      </p>
                    </div>
                  </div>
                </>
              )}

              {currentTerm.relatedJourneys?.length > 0 && (
                <>
                  <div className="border-t border-[#EAE6DF]" />
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                      RELATED JOURNEYS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentTerm.relatedJourneys.map((journey) => (
                        <a
                          key={journey}
                          href={relatedJourneyLinks[journey] || "/contact-us"}
                          className="bg-[#FAF8F5] hover:bg-[#F2EADF] border border-[#EAE6DF] text-[#14213D] text-xs font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer"
                        >
                          {journey}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {currentTerm.relatedTerms?.length > 0 && (
                <>
                  <div className="border-t border-[#EAE6DF]" />
                  <div className="space-y-3">
                    <span className="text-[10px] font-bold tracking-wider text-[#7A838E] uppercase block">
                      RELATED TERMS
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentTerm.relatedTerms.map((term) => {
                        const match = termsList.find((t) => t.title === term);
                        const className =
                          "bg-white hover:bg-[#FAF8F5] border border-[#EAE6DF] text-[#14213D] text-xs font-semibold py-2 px-4 rounded-full transition-colors cursor-pointer";
                        if (match) {
                          return (
                            <button
                              key={term}
                              type="button"
                              onClick={() => setSelectedTermId(match.id)}
                              className={className}
                            >
                              {term}
                            </button>
                          );
                        }
                        return (
                          <a key={term} href={externalTermLinks[term] || "/contact-us"} className={className}>
                            {term}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}

              <div className="border-t border-[#EAE6DF]" />

              {/* Card Footer Actions & Source Info */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                <div className="text-[11px] text-[#7A838E]">
                  Source/owner: {currentTerm.sourceOwner} &middot; {currentTerm.reviewedDate}
                </div>
                <a
                  href="/contact-us"
                  className="hover:bg-[#F2EADF] border border-[#EAE6DF] text-[#14213D] text-xs font-bold py-2.5 px-5 rounded-full transition-colors cursor-pointer whitespace-nowrap"
                >
                  Report unclear or outdated
                </a>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}