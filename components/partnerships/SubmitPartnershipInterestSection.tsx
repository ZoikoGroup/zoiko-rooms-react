"use client";

import React, { useEffect, useState } from "react";

interface SubmitPartnershipInterestSectionProps {
  initialPath?: string | null;
}

export default function SubmitPartnershipInterestSection({
  initialPath,
}: SubmitPartnershipInterestSectionProps) {
  const [formData, setFormData] = useState({
    partnershipPath: "",
    organizationName: "",
    website: "",
    yourName: "",
    workEmail: "",
    roleFunction: "",
    geographyMarket: "",
    proposal: "",
    acceptPrivacy: false,
    receiveCommunication: false,
  });
  const [referenceId, setReferenceId] = useState<string | null>(null);

  useEffect(() => {
    if (initialPath) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- responding to an external "start interest form" path selection, not a render loop
      setFormData((prev) => ({ ...prev, partnershipPath: initialPath }));
    }
  }, [initialPath]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = `ZR-PN-${Math.floor(100000 + Math.random() * 900000)}`;
    setReferenceId(ref);
  };

  return (
    <div
      id="submit-partnership-interest"
      className="scroll-mt-24 flex items-center justify-center py-12 md:py-20 text-[#1C1917] bg-[#f6efe3]"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 px-4 sm:px-6 items-start">
        {/* Left Column: Info Content */}
        <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-4">
          {/* Eyebrow Label with Dash */}
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-0.5 bg-[#D91414]" />
            <p className="text-xs font-bold uppercase tracking-widest text-[#D91414]">
              Submit Partnership Interest
            </p>
          </div>

          {/* Main Title */}
          <h2 className="text-[22px] font-serif font-bold text-[#1C1917] leading-tight tracking-tight mb-4">
            Tell us the basics — we&apos;ll take it from there.
          </h2>

          {/* Intro Description */}
          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed font-normal mb-6">
            This starts the intake stage described above. It&apos;s a request, not an
            agreement — submitting this form doesn&apos;t make your organization a
            Zoiko Rooms partner.
          </p>

          {/* Bulleted Guidelines */}
          <ul className="space-y-3 text-xs sm:text-sm text-[#78716C] leading-relaxed list-disc list-inside">
            <li className="pl-1">
              <span className="-ml-1">
                We ask for the minimum information needed to route your request
                correctly.
              </span>
            </li>
            <li className="pl-1">
              <span className="-ml-1">
                Communication consent is optional and separate from submitting
                the form.
              </span>
            </li>
            <li className="pl-1">
              <span className="-ml-1">
                You&apos;ll receive a reference ID immediately — not a promised
                response time.
              </span>
            </li>
          </ul>
        </div>

        {/* Right Column: Interactive Form Card */}
        <div className="lg:col-span-6 w-full bg-[#FBF7EF] rounded-3xl border border-[#E3D3B8] p-6 sm:p-10 shadow-xs">
          {referenceId ? (
            <div className="text-center py-8 space-y-4">
              <div className="mx-auto w-12 h-12 rounded-full bg-[#E1EEE5] flex items-center justify-center text-[#3E7A5D] text-2xl">
                ✓
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1C1917]">
                Your interest has been submitted.
              </h3>
              <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed">
                Reference ID:{" "}
                <span className="font-semibold text-[#1C1917]">
                  {referenceId}
                </span>
                <br />
                Keep this for your records. This confirms receipt, not
                approval — it goes through the same initial review stage as
                every other submission.
              </p>
            </div>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Partnership Path Dropdown */}
            <div>
              <label className="block text-xs font-bold text-[#1C1917] mb-2">
                Partnership path
              </label>
              <select
                name="partnershipPath"
                value={formData.partnershipPath}
                onChange={handleChange}
                className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#182232]"
              >
                <option value="">Select a path...</option>
                <option value="institutional">
                  Institutional & Relocation Partners
                </option>
                <option value="technology">
                  Technology & Integration Partners
                </option>
                <option value="property">Property & Portfolio Partners</option>
                <option value="general">General Partnership Interest</option>
              </select>
            </div>

            {/* Row 1: Organization Name & Website */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1C1917] mb-2">
                  Organization name
                </label>
                <input
                  type="text"
                  name="organizationName"
                  placeholder="Acme University"
                  value={formData.organizationName}
                  onChange={handleChange}
                  className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1C1917] mb-2">
                  Website{" "}
                  <span className="text-[#A8A29E] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="website"
                  placeholder="acme.example"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232]"
                />
              </div>
            </div>

            {/* Row 2: Your Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1C1917] mb-2">
                  Your name
                </label>
                <input
                  type="text"
                  name="yourName"
                  placeholder="Jordan Lee"
                  value={formData.yourName}
                  onChange={handleChange}
                  className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1C1917] mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  placeholder="jordan@acme.example"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232]"
                />
              </div>
            </div>

            {/* Row 3: Role / Function & Geography / Market */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#1C1917] mb-2">
                  Role / function{" "}
                  <span className="text-[#A8A29E] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="roleFunction"
                  placeholder="Partnerships lead"
                  value={formData.roleFunction}
                  onChange={handleChange}
                  className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232]"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#1C1917] mb-2">
                  Geography / market{" "}
                  <span className="text-[#A8A29E] font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  name="geographyMarket"
                  placeholder="e.g. England, UK"
                  value={formData.geographyMarket}
                  onChange={handleChange}
                  className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl px-4 py-3 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232]"
                />
              </div>
            </div>

            {/* Textarea: What are you proposing? */}
            <div>
              <label className="block text-xs font-bold text-[#1C1917] mb-2">
                What are you proposing?
              </label>
              <textarea
                name="proposal"
                rows={4}
                placeholder="A short description of your organization and the collaboration you have in mind."
                value={formData.proposal}
                onChange={handleChange}
                className="w-full bg-[#F6EFE3] border border-[#E3D3B8] rounded-xl p-4 text-xs text-[#1C1917] placeholder-[#A8A29E] focus:outline-none focus:ring-2 focus:ring-[#182232] resize-none"
              />
            </div>

            {/* Notice Text */}
            <p className="text-[11px] text-[#A8A29E] leading-relaxed pt-1">
              Handled under our{" "}
              <a
                href="/legal/privacy-notice"
                className="text-[#D91414] font-semibold hover:underline"
              >
                Privacy Notice
              </a>
              . Please don&apos;t include customer data, credentials, or confidential
              information in this form.
            </p>

            {/* Checkboxes */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-[#E3D3B8] text-[#182232] focus:ring-[#182232]"
                />
                <span className="text-xs text-[#78716C] font-semibold leading-tight">
                  I&apos;ve read and accept the Privacy Notice for this submission.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="receiveCommunication"
                  checked={formData.receiveCommunication}
                  onChange={handleChange}
                  className="mt-0.5 rounded border-[#E3D3B8] text-[#182232] focus:ring-[#182232]"
                />
                <span className="text-xs text-[#A8A29E] leading-tight">
                  I&apos;m happy to receive occasional partnership-related
                  communication from Zoiko Rooms. (Optional — not required to
                  submit.)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0E2866] hover:bg-[#0A1D4A] text-white text-xs font-semibold py-3.5 px-6 rounded-full transition-colors cursor-pointer pt-3 mt-4"
            >
              Submit partnership interest
            </button>
          </form>
          )}
        </div>
      </div>
    </div>
  );
}
