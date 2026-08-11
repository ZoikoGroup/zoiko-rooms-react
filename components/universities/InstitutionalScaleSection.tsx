import { Container, Reveal, Button } from "@/components/ui";
import { Eyebrow, SectionTitle } from "./shared";

const features = [
  { title: "Portfolio & Availability", description: "Manage rooms, pricing, and team workflow across your program." },
  { title: "Institutional Distribution", description: "Reach approved institutional demand at scale." },
  { title: "Applications & Payments", description: "One pipeline for applications, agreements, and payment." },
  { title: "Integrations & API", description: "Connect your existing housing and SIS systems." },
];

export function InstitutionalScaleSection() {
  return (
    <section className="border-b border-white/10 bg-[#1B2438] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col items-center gap-10 text-center">
          <div className="flex max-w-2xl flex-col items-center gap-4">
            <Eyebrow dark>For Institutional Scale</Eyebrow>
            <SectionTitle dark>Scale university room programs with Zoiko Rooms Pro</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, description }) => (
              <div key={title} className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="text-sm leading-relaxed text-white/60">{description}</p>
              </div>
            ))}
          </div>

          <Button href="/pro" size="lg" variant="secondary">
            Explore Zoiko Rooms Pro
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
