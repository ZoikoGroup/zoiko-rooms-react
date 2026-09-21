"use client";

import React from "react";
import { AlertTriangle } from "lucide-react";

export default function HiringProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Application review",
      description:
        "A recruiter reviews your application against the role's approved criteria.",
    },
    {
      number: "02",
      title: "Recruiter conversation",
      description:
        "An initial conversation about your background and the role.",
    },
    {
      number: "03",
      title: "Role-specific interviews",
      description: "Interview types vary by role — never assumed universally.",
    },
    {
      number: "04",
      title: "Team conversation",
      description: "Meet the team you'd be working with directly.",
    },
    {
      number: "05",
      title: "Decision & offer",
      description:
        "No fixed timeline is promised — your recruiter will confirm next steps.",
    },
  ];

  return (
    <section
      id="how-hiring-works"
      className="flex flex-col items-center justify-center py-12 md:py-20 text-[#1C1917]"
    >
      <div className="max-w-6xl w-full px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D91414] mb-3">
            Hiring Process
          </p>
          <h2 className="text-[36px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-4">
            How hiring generally works
          </h2>
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal">
            Organization-wide stages are shown here — specific steps and
            timelines vary by role and region, and are confirmed with you
            directly, not promised on this page.
          </p>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white rounded-2xl border border-[#E7DFD3] p-6 flex flex-col justify-between shadow-xs min-h-[180px]"
            >
              <span className="text-xs font-bold text-[#D91414] mb-4">
                {step.number}
              </span>
              <div>
                <h3 className="text-sm font-bold text-[#1C1917] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-[#78716C] leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Info Cards (Privacy & Accessibility) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Candidate Privacy & Application Boundary */}
          <div className="bg-white rounded-2xl border border-[#E7DFD3] p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-[#1C1917] mb-4">
              Candidate Privacy & Application Boundary
            </h3>
            <ul className="space-y-3 text-xs text-[#78716C] leading-relaxed list-disc list-outside ml-4">
              <li>
                This page supports anonymous, public role discovery — we avoid
                collecting personal data here unless necessary.
              </li>
              <li>
                Your application, documents, and account are owned and managed
                by our application system, not this page.
              </li>
              <li>
                The applicable candidate privacy notice is linked before and
                during your application.
              </li>
              <li>
                We don't state specific retention or deletion periods here
                unless our privacy team has approved them.
              </li>
            </ul>
          </div>

          {/* Accessibility & Accommodation */}
          <div className="bg-white rounded-2xl border border-[#E7DFD3] p-6 sm:p-8 shadow-xs">
            <h3 className="text-base font-bold text-[#1C1917] mb-4">
              Accessibility & Accommodation
            </h3>
            <ul className="space-y-3 text-xs text-[#78716C] leading-relaxed list-disc list-outside ml-4">
              <li>
                This page targets WCAG 2.2 AA across role discovery and job
                detail.
              </li>
              <li>
                If you need an accommodation during the hiring process, use the
                approved request channel linked in each job posting.
              </li>
              <li>
                We don't promise a specific response time for accommodation
                requests unless stated in the posting.
              </li>
              <li>
                Accommodation requests are routed to a controlled channel, not
                general marketing forms.
              </li>
            </ul>
          </div>
        </div>

        {/* Fraud Prevention Callout Banner */}
        <div className="bg-[#FAF3E8] border border-[#E8DCC8] rounded-2xl p-6 sm:p-8 text-[#5C4D39] shadow-xs">
          <div className="flex items-center gap-2 mb-3 text-[#995B00]">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <h3 className="text-sm font-bold text-[#4A3B22]">
              Recruitment Fraud & Verified Communication
            </h3>
          </div>
          <ul className="space-y-2 text-xs leading-relaxed list-disc list-outside ml-5 text-[#6B5A42]">
            <li>
              We will never ask you to pay a fee, purchase equipment, or share
              banking details as part of our hiring process.
            </li>
            <li>
              Legitimate offers only come through our verified application
              system and approved recruiter channels — never solely through
              casual chat apps.
            </li>
            <li>
              If you're unsure whether a message claiming to be from Zoiko Rooms
              is legitimate, don't respond with personal or financial
              information — verify through this Careers page directly.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
