"use client";

import Link from "next/link";
import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, SectionDivider, InfoTable } from "./shared";
import { comparisonColumns, comparisonRows } from "./data";

export function ProviderPathComparisonSection() {
  const rows = comparisonRows.map((row) => [
    row.requirement,
    ...row.values.map((value, index) =>
      value.href ? (
        <Link
          key={index}
          href={value.href}
          className="font-semibold text-brand-red transition-colors hover:text-brand-red-dark"
        >
          {value.text}
        </Link>
      ) : (
        value.text
      ),
    ),
  ]);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Provider-Path Comparison</Eyebrow>
            <SectionTitle>Requirements differ by path — here&apos;s how</SectionTitle>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[900px]">
              <InfoTable columns={comparisonColumns} rows={rows} />
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
