"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider, InfoTable } from "./shared";
import { proRoutingRows } from "./data";

export function ProRoutingSection() {
  const { t } = useLanguage();
  const rows = proRoutingRows.map((row) => [t(row.need), t(row.consumer), t(row.pro)]);

  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>{t("Portfolio Routing")}</Eyebrow>
            <SectionTitle>{t("When Zoiko Rooms Pro is the right path")}</SectionTitle>
            <Paragraph>{t("Professional breadth is routed to Pro rather than implied by a single-listing workflow.")}</Paragraph>
          </div>

          <motion.div variants={fadeUp} className="w-full overflow-hidden rounded-2xl">
            <NaturalImage
              src="/images/landlords-agents/pro-routing-team.png"
              alt={t("A property management team walking together")}
            />
          </motion.div>

          <div className="overflow-x-auto">
            <div className="min-w-[760px]">
              <InfoTable columns={[t("Need"), t("Consumer listing"), t("Zoiko Rooms Pro route")]} rows={rows} />
            </div>
          </div>

          <Button href="/pro" size="lg" variant="outline" className="w-fit">
            {t("Explore Zoiko Rooms Pro")}
          </Button>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
