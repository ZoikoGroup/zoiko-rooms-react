"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const steps = [
  {
    number: "01",
    title: "Provider enters the facts",
    description: "Room type, dimensions, furnishings, household routines, and availability — the starting declaration.",
    image: "/images/room-passport/step-provider-enters-facts.png",
  },
  {
    number: "02",
    title: "Evidence is requested where it matters most",
    description: "Address, ownership or authority, and safety-critical facts like locks and exits are prioritized for document or physical checks.",
    image: "/images/room-passport/step-evidence-requested.png",
  },
  {
    number: "03",
    title: "Each field is tagged with its evidence level",
    description: "Declared, documented, or inspected — visible per field, not averaged into one score.",
    image: "/images/room-passport/step-field-tagged.png",
  },
  {
    number: "04",
    title: "The record stays current",
    description: "Material changes, expiring evidence, and disputes update the Passport — it doesn't freeze at publication.",
    image: "/images/room-passport/step-record-stays-current.png",
  },
];

export function PassportLifecycleSection() {
  const { t } = useLanguage();

  return (
    <section className="border-b border-[#E9E0D3] py-16 sm:py-24">
      <Container>
        <Reveal className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>{t("How a Passport Gets Built")}</Eyebrow>
            <h2 className="max-w-2xl font-heading text-3xl font-medium text-brand-navy sm:text-4xl">
              {t("From first draft to a living record")}
            </h2>
          </div>

          <div className="flex flex-col gap-10">
            {steps.map(({ number, title, description, image }, index) => {
              const imageFirst = index % 2 === 0;
              return (
                <div
                  key={number}
                  className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-12"
                >
                  <motion.div
                    variants={fadeUp}
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    className={`w-full overflow-hidden rounded-3xl ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
                  >
                    <NaturalImage src={image} alt={t(title)} />
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    className={`flex flex-col gap-2 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
                  >
                    <span className="font-heading text-sm font-semibold text-[#C2703C]">{number}</span>
                    <h3 className="font-heading text-xl font-medium text-brand-navy">{t(title)}</h3>
                    <p className="text-sm leading-relaxed text-neutral-600">{t(description)}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
