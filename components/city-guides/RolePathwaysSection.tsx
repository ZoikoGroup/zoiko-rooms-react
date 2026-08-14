"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe, Briefcase, Landmark, Building2, User } from "lucide-react";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import type { Audience } from "./data";

export type RoleValue = "student" | "international" | "work" | "provider" | "organization" | "all";

const roles: { icon: typeof GraduationCap; label: string; value: RoleValue }[] = [
  { icon: GraduationCap, label: "Student / university", value: "student" },
  { icon: Globe, label: "International arrival", value: "international" },
  { icon: Briefcase, label: "Work / duty-location", value: "work" },
  { icon: Landmark, label: "Room provider", value: "provider" },
  { icon: Building2, label: "Organization", value: "organization" },
  { icon: User, label: "General seeker", value: "all" },
];

type RolePathwaysSectionProps = {
  activeRole: RoleValue | null;
  onSelectRole: (value: RoleValue) => void;
};

export function RolePathwaysSection({ activeRole, onSelectRole }: RolePathwaysSectionProps) {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Role Pathways</Eyebrow>
            <SectionTitle>Choose the guidance that fits your move</SectionTitle>
            <Paragraph className="mx-auto">
              Selecting a pathway filters the directory above to guides covering that audience.
            </Paragraph>
          </div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
            {roles.map(({ icon: Icon, label, value }) => {
              const isActive = activeRole === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => onSelectRole(value)}
                  className={`flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-brand-navy bg-brand-navy text-white"
                      : "border-[#E9E0D3] bg-white text-brand-navy hover:bg-brand-navy/5"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              );
            })}
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}

export function roleToAudience(value: RoleValue): Audience | "all" {
  if (value === "provider" || value === "organization" || value === "all") return "all";
  return value;
}
