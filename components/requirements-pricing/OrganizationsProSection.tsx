"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider, InfoTable } from "./shared";
import { orgProRows } from "./data";

export function OrganizationsProSection() {
  const rows = orgProRows.map((row) => [row.context, row.standard, row.pro]);

  return (
    <SectionDivider id="organizations-pro">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Organizations and Zoiko Rooms Pro</Eyebrow>
            <SectionTitle>When standard pricing doesn&apos;t apply</SectionTitle>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <InfoTable columns={["Context", "Standard page response", "Professional route"]} rows={rows} />
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
