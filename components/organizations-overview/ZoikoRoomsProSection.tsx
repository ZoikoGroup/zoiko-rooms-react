"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";

export function ZoikoRoomsProSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Eyebrow>Zoiko Rooms Pro &amp; Integrations</Eyebrow>
            <SectionTitle>Operating a portfolio or connecting a system? Route to Pro.</SectionTitle>
          </div>

          <motion.div variants={fadeUp} className="grid grid-cols-1 overflow-hidden rounded-2xl lg:grid-cols-2">
            <div className="relative min-h-[280px] w-full">
              <ImageFade
                src="/images/organizations-overview/pro-portfolio-room.png"
                alt="A furnished room ready to list as part of a managed portfolio"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center gap-3 bg-brand-navy p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F2A38C]">
                For Portfolio &amp; Integration Teams
              </span>
              <h3 className="font-heading text-xl font-medium text-white">
                Zoiko Rooms Pro handles portfolio, compliance, applications, distribution, and
                integrations.
              </h3>
              <p className="text-sm leading-relaxed text-[#C6CCDE]">
                If your organization operates inventory directly, needs system-to-system
                integration, or manages bulk distribution, Zoiko Rooms Pro is the governed
                operating layer built for that responsibility.
              </p>
              <Button
                href="/pro"
                size="lg"
                variant="outline"
                className="mt-2 w-fit !border-white/40 !text-white hover:!bg-white hover:!text-brand-navy"
              >
                Explore Zoiko Rooms Pro
              </Button>
            </div>
          </motion.div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
