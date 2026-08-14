"use client";

import { motion } from "framer-motion";
import { Container, Reveal } from "@/components/ui";
import { fadeUp, easeOut } from "@/lib/motion";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { NaturalImage } from "@/components/find-a-room/NaturalImage";

const paths = [
  {
    title: "Live-in Providers",
    description: "You currently live in the home and offer a room within the occupied household.",
    image: "/images/for-providers/path-live-in-provider.png",
    href: "/list-a-room/live-in-providers",
  },
  {
    title: "Landlords & Agents",
    description: "You own or lawfully control the room, or act for an authorized principal.",
    image: "/images/for-providers/path-landlords-agents.png",
    href: "/list-a-room/landlords-agents",
  },
  {
    title: "Authorized Sublets",
    description: "You rely on a primary agreement and current permission to sublet.",
    image: "/images/for-providers/path-authorized-sublets.png",
    href: "/list-a-room/authorized-sublets",
  },
];

export function ProviderPathsSection() {
  return (
    <SectionDivider className="bg-white">
      <Container>
        <Reveal className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Eyebrow>Provider Paths</Eyebrow>
            <SectionTitle>Route to the guide that matches your authority</SectionTitle>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {paths.map(({ title, description, image, href }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, boxShadow: "0 20px 40px -12px rgba(14,47,115,0.25)" }}
                transition={{ duration: 0.25, ease: easeOut }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 ease-out group-hover:scale-105">
                    <NaturalImage src={image} alt={title} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 p-5">
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{title}</h3>
                  <p className="text-sm text-neutral-500">{description}</p>
                  <a
                    href={href}
                    className="mt-2 w-fit text-sm font-semibold text-brand-red underline-offset-2 transition-colors hover:text-brand-red-dark hover:underline"
                  >
                    Open guide
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
