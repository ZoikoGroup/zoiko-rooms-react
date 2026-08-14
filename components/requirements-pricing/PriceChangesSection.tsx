"use client";

import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, BulletList, SectionDivider } from "./shared";
import { priceChangePoints } from "./data";

export function PriceChangesSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Price Changes and Promotions</Eyebrow>
            <SectionTitle>How changes are handled</SectionTitle>
          </div>

          <BulletList items={priceChangePoints} className="max-w-3xl" />
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
