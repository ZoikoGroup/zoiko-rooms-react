"use client";

import { motion } from "framer-motion";
import { CircleHelp, Mail, ShieldOff, Minus, LifeBuoy } from "lucide-react";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { Eyebrow, SectionTitle, Paragraph, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const points = [
  { icon: CircleHelp, title: "Why am I seeing this?", description: "Referral, allocation, or program reason, stated plainly" },
  { icon: Mail, title: "Is it optional?", description: "Search freely, use a referral, or accept/decline an allocation" },
  { icon: ShieldOff, title: "Will this affect my job?", description: "Housing activity is never used as a performance signal" },
  { icon: Minus, title: "Who pays?", description: "Covered and excluded costs shown before commitment" },
  { icon: LifeBuoy, title: "Who supports me?", description: "Named owner across employer, provider, and Zoiko Rooms" },
];

export function WorkerTransparencySection() {
  return (
    <SectionDivider>
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex max-w-2xl flex-col items-center gap-4 text-center">
            <Eyebrow>Worker Transparency</Eyebrow>
            <SectionTitle>Workers can see the whole picture</SectionTitle>
            <Paragraph className="mx-auto">
              Why they&apos;re seeing this, whether it&apos;s optional, who pays, and who supports
              them — answered plainly, not buried in legal copy.
            </Paragraph>
          </div>

          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <motion.div
              variants={fadeUp}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4 }}
              className="w-full overflow-hidden rounded-3xl"
            >
              <NaturalImage
                src="/images/employers/transparency-meeting-room.png"
                alt="Colleagues discussing a workforce housing program"
              />
            </motion.div>

            <div className="flex flex-col gap-3">
              {points.map(({ icon: Icon, title, description }) => (
                <motion.div
                  key={title}
                  variants={fadeUp}
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-3 rounded-xl border border-[#E9E0D3] bg-white px-5 py-4 shadow-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F1E7DA] text-[#A85A34]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-brand-navy">{title}</span>
                    <span className="block text-sm text-neutral-500">{description}</span>
                  </span>
                </motion.div>
              ))}

              <Button href="/resources" variant="outline" size="md" className="mt-2 w-fit">
                Review the Transparency Panel
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
