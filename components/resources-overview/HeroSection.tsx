"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useOnClickOutside } from "@/lib/hooks/useOnClickOutside";
import { Eyebrow, Paragraph } from "./shared";
import { destinations, roleOptions } from "./data";

export function HeroSection() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const [selectedRole, setSelectedRole] = useState(roleOptions[0]);
  const boxRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(boxRef, () => setFocused(false));

  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return destinations.filter(
      (d) =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.tags.some((tag) => tag.toLowerCase().includes(q)),
    );
  }, [query]);

  const showResults = focused && query.trim().length > 0;

  function handleSearch() {
    const first = matches[0];
    if (first) {
      window.location.href = first.href;
    }
  }

  return (
    <section id="search-resources" className="scroll-mt-24 border-b border-[#E9E0D3] py-12 sm:py-16">
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <Eyebrow>Resources</Eyebrow>
          <motion.h1 variants={fadeUp} className="font-heading text-3xl font-medium text-brand-navy sm:text-[42px] sm:leading-[1.15]">
            Find direct, current guidance for every stage of renting, listing, moving, and
            operating rooms.
          </motion.h1>
          <Paragraph className="mx-auto text-center">
            Search answers, follow role-based guides, understand city and rental terms, avoid
            scams, resolve problems, and move into the correct product or support pathway.
          </Paragraph>

          <motion.div ref={boxRef} variants={fadeUp} className="relative w-full max-w-xl">
            <div className="flex items-center gap-2 rounded-full border border-[#E9E0D3] bg-white p-2 shadow-[0_10px_30px_rgba(20,20,30,0.06)]">
              <Search className="ml-3 h-4 w-4 shrink-0 text-neutral-400" />
              <input
                type="text"
                value={query}
                onFocus={() => setFocused(true)}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleSearch()}
                placeholder="Ask a question or search a topic — e.g. deposits, viewing safety, room passport"
                className="min-w-0 flex-1 bg-transparent px-1 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400"
              />
              <button
                type="button"
                onClick={handleSearch}
                className="shrink-0 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
              >
                Search Resources
              </button>
            </div>

            {showResults && (
              <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-20 overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white text-left shadow-[0_14px_34px_rgba(20,20,30,0.08)]">
                {matches.length === 0 ? (
                  <p className="px-5 py-4 text-sm text-neutral-400">
                    No resource matches &quot;{query}&quot; yet. Try Choose Support below, or
                    browse the five destinations.
                  </p>
                ) : (
                  matches.map((destination) => (
                    <a
                      key={destination.key}
                      href={destination.href}
                      className="flex w-full items-center justify-between gap-3 border-b border-[#E9E0D3] px-5 py-3 text-left text-sm transition-colors last:border-b-0 hover:bg-brand-cream"
                    >
                      <span className="font-semibold text-brand-navy">{destination.title}</span>
                      <span className="shrink-0 text-xs text-neutral-400">{destination.cta} →</span>
                    </a>
                  ))
                )}
              </div>
            )}
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2">
            {roleOptions.map((role) => {
              const isSelected = selectedRole === role;
              return (
                <button
                  key={role}
                  type="button"
                  onClick={() => setSelectedRole(role)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                    isSelected
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  {role}
                </button>
              );
            })}
          </motion.div>
        </Reveal>
      </Container>
    </section>
  );
}
