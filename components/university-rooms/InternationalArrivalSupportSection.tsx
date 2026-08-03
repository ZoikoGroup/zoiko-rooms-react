import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const links = [
  { label: "Explore International Moves", href: "/find-a-room/international-moves" },
  { label: "Search with Flexible Arrival", href: "/find-a-room" },
  { label: "Review Payment Safety", href: "/resources" },
];

export function InternationalArrivalSupportSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>International Arrival Support</Eyebrow>
            <SectionTitle>Uncertain dates, documents, or currency? Start here</SectionTitle>
          </div>

          <Callout label="Cross-border basics" className="max-w-3xl">
            Original listing currency stays visible, remote evidence has limits, and Zoiko Rooms
            does not guarantee housing, visa outcomes, or right-to-rent eligibility. Local
            guarantor alternatives may exist, but acceptance is never guaranteed.
          </Callout>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-brand-red transition-colors hover:text-brand-red-dark"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
