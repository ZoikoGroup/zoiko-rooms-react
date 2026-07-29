"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, SubTitle, Paragraph, SectionDivider } from "./shared";

export function GovernanceSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-6">
          <Eyebrow>Governance</Eyebrow>
          <SectionTitle>Fair Access and Responsible Technology</SectionTitle>
          <Paragraph>
            Zoiko Rooms is committed to lawful, fair and accessible participation in housing
            markets.
          </Paragraph>
          <Paragraph>
            Protected characteristics must not be used to target housing advertisements,
            unlawfully rank access to rooms, create hidden exclusions or determine fraud risk.
            Lawful compatibility factors may include smoking, pets, working patterns, visitors,
            cleaning expectations and household routines, but these tools must not become a
            disguised means of discrimination.
          </Paragraph>
          <Paragraph>
            Artificial intelligence may assist with document extraction, image duplication,
            fraud pattern detection, search relevance and operational prioritization. It must
            not independently determine legal classification, housing eligibility, sanctions or
            final safety outcomes.
          </Paragraph>

          <SubTitle>Privacy and Security</SubTitle>
          <Paragraph>
            Zoiko Rooms may process identity, housing, communication, financial and
            institutional information. The platform is designed around data minimization,
            encryption, regional controls, contextual access, auditable actions, controlled
            retention, verified deletion, secure partner integration and incident response.
          </Paragraph>
          <Paragraph>
            Sensitive personal information must not be repurposed for unrelated advertising or
            hidden housing decisions.
          </Paragraph>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
