"use client";

import { motion } from "framer-motion";
import { Container, Reveal, Button } from "@/components/ui";
import { fadeUp } from "@/lib/motion";

const paths = [
  {
    title: "Find a room with more clarity",
    description:
      "Search private rooms, review the evidence available and manage the rental journey through one platform.",
    cta: "Search Rooms",
    href: "/find-a-room",
    variant: "primary" as const,
  },
  {
    title: "Offer a room with greater confidence",
    description:
      "Create a structured listing, complete the required verification and reach qualified room seekers.",
    cta: "List a Room",
    href: "/list-a-room",
    variant: "outline" as const,
  },
  {
    title: "For organizations",
    description:
      "Explore accountable accommodation referrals, placement, safeguarding and reporting.",
    cta: "For Organizations",
    href: "/organizations",
    variant: "outline" as const,
  },
  {
    title: "For professional operators",
    description:
      "Manage room portfolios, compliance, applications and institutional relationships.",
    cta: "Explore Zoiko Rooms Pro",
    href: "/pro/overview",
    variant: "outline" as const,
  },
];

export function AboutFinalCtaSection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-10 rounded-4xl bg-[#F1E7DA] p-8 sm:p-12">
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-2 text-center">
            <h2 className="font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              Ready to find, or offer, a room?
            </h2>
            <p className="text-base text-neutral-600">
              Choose the path that fits what you&apos;re trying to do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {paths.map(({ title, description, cta, href, variant }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25 }}
                className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm md:p-8"
              >
                <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                <p className="flex-1 text-sm text-neutral-600">{description}</p>
                <Button href={href} variant={variant} className="w-fit">
                  {cta}
                </Button>
              </motion.div>
            ))}
          </div>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="mt-8 flex flex-col gap-3 text-xs leading-relaxed text-neutral-500"
        >
          <p>
            © 2026 Zoiko Rooms. Zoiko Rooms is a trading name of Zoiko Realty Group Inc., a Zoiko
            Group company. All rights reserved.
          </p>
          <p>
            Zoiko Rooms provides technology, marketplace, verification and
            accommodation-management services for individual-room rentals. Availability,
            verification, agreements, payments, deposits and protection services vary by
            jurisdiction.
          </p>
          <p>
            Verification confirms only the evidence and checks expressly identified on the
            platform. It does not constitute a guarantee of safety, legality, suitability,
            property condition or future conduct.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
