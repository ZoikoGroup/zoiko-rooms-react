"use client";

import { Container, Reveal, Card } from "@/components/ui";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const models = [
  { title: "Public referral", description: "Invites or directs a participant in — no eligibility or outcome guarantee." },
  { title: "Eligibility assessment", description: "Assesses declared criteria with notice, evidence, and a human decision." },
  { title: "Provider-network distribution", description: "Authorizes approved providers or rooms for a defined audience." },
  { title: "Managed case", description: "Coordinates named tasks across participant, provider, and funding." },
  { title: "Nomination / allocation", description: "Proposes or assigns inventory under current criteria — decline stays real." },
  { title: "Subsidy / voucher / grant", description: "Contributes under current eligibility, with covered costs shown plainly." },
  { title: "Direct billing", description: "Accepts approved charges under current authority and limits." },
  { title: "Procurement / framework", description: "Commissions providers under an approved procurement scope." },
  { title: "Support-only", description: "Guidance and advocacy — no control over rooms or decisions." },
];

export function OperatingModelsSection() {
  const { t } = useLanguage();

  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <Eyebrow>{t("Operating Models")}</Eyebrow>
          <SectionTitle>{t("Choose the relationship, never hide the decision")}</SectionTitle>
          <Paragraph className="mx-auto">
            {t(
              "A public body can refer, assess, distribute, manage, nominate, allocate, subsidize, bill directly, or simply support — but what it doesn't cover always stays visible."
            )}
          </Paragraph>

          <div className="mt-6 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-3">
            {models.map(({ title, description }) => (
              <Card key={title} className="p-6">
                <h3 className="font-heading text-base font-medium text-brand-navy">{t(title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">{t(description)}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
