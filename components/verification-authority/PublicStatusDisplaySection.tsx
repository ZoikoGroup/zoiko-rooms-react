import { Container, Reveal } from "@/components/ui";
import { Eyebrow, SectionTitle, Callout, Paragraph, SectionDivider } from "./shared";

export function PublicStatusDisplaySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Public Status Display</Eyebrow>
            <SectionTitle>Enough to understand, not enough to expose</SectionTitle>
          </div>

          <Callout label="Example" className="max-w-3xl">
            &quot;Listing authority: Confirmed for this room through March 31, 2027. Source
            reviewed July 28, 2026. This status confirms current authority to advertise the room;
            it does not confirm the room&apos;s condition, future availability, legal compliance,
            provider behavior, or payment outcome.&quot;
          </Callout>

          <Paragraph>
            Documents and sensitive evidence remain private. Public views show a scoped status,
            source category, date, limitation, and action effect — never the underlying document.
          </Paragraph>

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
