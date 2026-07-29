"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import {
  ShieldCheck,
  FileCheck2,
  MessageCircle,
  LifeBuoy,
  ArrowRight,
  Star,
  Globe2,
  CheckCircle2,
  Check,
  Home,
  Lock,
} from "lucide-react";
import { Container, Button, ImageFade } from "@/components/ui";
import { useSearchModal } from "@/components/search";
import { fadeUp, staggerContainer } from "@/lib/motion";

const checklist = [
  {
    icon: CheckCircle2,
    title: "Verified profiles",
    description: "Every listing and user is verified",
  },
  {
    icon: FileCheck2,
    title: "Clear rental records",
    description: "Keep a complete record from start to finish",
  },
  {
    icon: MessageCircle,
    title: "Secure communication",
    description: "Message in-app and protect your privacy",
  },
  {
    icon: LifeBuoy,
    title: "Support when needed",
    description: "Real people, ready to help",
  },
];

const avatarIds = [47, 12, 26, 33];

// ⚠️ IMPORTANT: this must be a real, bright, warm indoor room photo.
// Random picsum seeds do NOT search for "bedroom" — they just assign an
// arbitrary stock photo to that seed string, which is why you were seeing
// a dark mountain/sunset shot instead of the room photo. Swap this for
// your actual asset (e.g. from /public or your CMS/CDN) before shipping.
const HERO_IMAGE_URL = "/images/home/hero-bedroom.webp";

const stats = [
  { icon: Globe2, value: "100+", label: "Countries", tone: "text-sky-500" },
  { icon: Check, value: "500K+", label: "Verified users", tone: "badge" },
  { icon: Home, value: "250K+", label: "Rooms listed", tone: "text-[#8A4626]" },
  { icon: Lock, value: "Secure", label: "By design", tone: "text-neutral-500" },
];

// Animates "100+" / "500K+" style values counting up from 0 once the stat scrolls into view.
function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const target = match ? Number(match[1].replace(/,/g, "")) : null;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView || target === null) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span ref={ref}>
      {target === null ? value : `${display.toLocaleString()}${suffix}`}
    </span>
  );
}

export function HeroSection() {
  const { open } = useSearchModal();

  return (
    <section className="pb-10 pt-8 sm:pb-14 sm:pt-12">
      <Container wide className="flex flex-col gap-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative overflow-hidden rounded-4xl bg-white shadow-sm"
        >
          {/* Full-bleed background image, desktop only — ONE image spans the whole card */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            <ImageFade
              src={HERO_IMAGE_URL}
              alt="Verified private room with a bed, desk, and plants"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
            {/* Fade only covers the left ~55%, right side stays a clean, bright photo — not a dark vignette */}
            <div  />
          </div>

          {/* Mobile-only image, stacked above the text, not overlapping it */}
          <div className="relative h-64 lg:hidden">
            <ImageFade
              src={HERO_IMAGE_URL}
              alt="Verified private room with a bed, desk, and plants"
              fill
              preload
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Content column */}
          <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-10 lg:max-w-[810px] lg:p-12">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F6ECD4] px-4 py-1.5 text-sm font-medium text-[#8A4626]"
            >
              <ShieldCheck className="h-4 w-4" />
              Verified rooms. Clearer rental journeys.
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl font-heading text-4xl font-bold text-[#1B2438] sm:text-5xl"
            >
              Find a verified room
              you can{" "}
              <span className="text-[#0E2F73]">trust.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-lg text-[14px] text-[#7A7266]">
              Search private rooms for 30 nights or longer, connect safely with providers, and
              keep a clear record from application to move-out.
            </motion.p>

            {/* Search bar — exact Figma spec: cream card (#FAF6F0, 1px #D9C7B3 border,
                16px radius) holding white input pills (1px #E9E0D3 border, 8px radius) */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 rounded-2xl border border-[#D9C7B3] bg-brand-cream p-3 shadow-sm sm:flex-row sm:items-center"
            >
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="px-1 text-[12px] font-[#1B2438] text-neutral-600">Where do you want to live?</span>
                <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                  <input
                    type="text"
                    placeholder="City, neighborhood, or address"
                    className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="px-1 text-xs font-medium text-neutral-600">Move-in date</span>
                <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                  <input
                    type="date"
                    className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none [color-scheme:light]"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-1.5">
                <span className="px-1 text-xs font-medium text-neutral-600">Stay length</span>
                <div className="flex h-10 items-center rounded-lg border border-[#E9E0D3] bg-white px-3">
                  <select className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none">
                    <option>1+ month</option>
                    <option>3+ months</option>
                    <option>6+ months</option>
                    <option>12+ months</option>
                  </select>
                </div>
              </div>
              <div className="sm:self-end">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full sm:w-auto"
                  onClick={open}
                >
                  Search rooms
                </Button>
              </div>
            </motion.div>

            {/* Checklist — one row of 4 on desktop, 2x2 on mobile, no wrap issues */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 gap-4 pt-2 lg:grid-cols-4"
            >
              {checklist.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex min-w-0 items-start gap-3">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] font-semibold text-brand-navy">{title}</p>
                    <p className="text-[10.5px] text-neutral-500">{description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2 text-sm font-medium"
            >
              <a href="/list-a-room" className="inline-flex items-center gap-1.5 text-brand-red transition-colors hover:text-brand-red-dark">
                Have a room to rent? List it free
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="/how-it-works" className="inline-flex items-center gap-1.5 text-brand-red transition-colors hover:text-brand-navy-dark">
                See how verification works
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Floating testimonial card — positioned against the whole card, own z-index, own width */}
          <motion.div
            variants={fadeUp}
            className="absolute inset-x-5 bottom-5 z-10 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-lg sm:inset-x-auto sm:bottom-8 sm:right-8 sm:w-100"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarIds.map((id) => (
                  <ImageFade
                    key={id}
                    src={`https://i.pravatar.cc/150?img=${id}`}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-regular leading-snug ml-10 text-brand-navy">
                Join thousands of verified renters and landlords
              </p>
            </div>
            <div className="h-px w-full bg-[#E9E0D3]" />
            <div className="flex items-center gap-2">
              <div className="flex text-emerald-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="text-xs text-neutral-500">Trusted worldwide by our community</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          className="flex flex-col gap-6 rounded-b-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <p className="max-w-56 text-sm font-medium text-brand-navy">
            Trusted by renters and landlords around the world
          </p>
          <div className="grid flex-1 grid-cols-2 gap-y-6 sm:flex sm:items-center sm:justify-between">
            {stats.flatMap(({ icon: Icon, value, label, tone }, i) => {
              const stat = (
                <div key={label} className="flex items-center gap-3">
                  {tone === "badge" ? (
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-emerald-500 text-white">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                  ) : (
                    <Icon className={`h-5 w-5 shrink-0 ${tone}`} />
                  )}
                  <div>
                    <p className="font-heading text-3xl font-semibold leading-[22.8px] text-brand-red">
                      <AnimatedStat value={value} />
                    </p>
                    <p className="text-sm text-[#7A7266]">{label}</p>
                  </div>
                </div>
              );

              if (i === 0) return [stat];
              return [
                <div key={`${label}-divider`} className="hidden h-10 w-px shrink-0 bg-[#E9E0D3] sm:block" />,
                stat,
              ];
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}