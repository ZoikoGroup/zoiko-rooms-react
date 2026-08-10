import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, SectionDivider } from "./shared";

const items = [
  {
    title: "Room & home",
    description: "Type, occupancy, furnishing, storage, condition and limitations.",
  },
  {
    title: "Household",
    description: "Provider live-in status, shared-space facts, pets, smoking, quiet hours.",
  },
  {
    title: "Location",
    description: "Approximate public area, transport context, controlled exact-address stage.",
  },
  {
    title: "Availability",
    description: "Dates, stay, notice, application/reservation state, last confirmed time.",
  },
  {
    title: "Costs",
    description: "Rent, deposit, fees, bills, totals, timing, refunds/cancellation.",
  },
  {
    title: "Provider & authority",
    description: "Provider type, identity status, authority scope/date/limitations.",
  },
];

export function RoomDetailEvidenceSection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Room Detail and Evidence</Eyebrow>
            <SectionTitle>What every room detail page must show you</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {items.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{description}</p>
              </Card>
            ))}
          </div>

          <Callout label="Material information order" className="max-w-3xl">
            Availability and total money appear before promotional copy. Provider type and
            authority status appear before message, viewing, application, agreement, or payment
            actions. Unknown or not provided is explicit — the interface never invents a favorable
            value.
          </Callout>

          <a
            href="/how-it-works/room-passport"
            className="w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
          >
            Explore Room Passport
          </a>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
