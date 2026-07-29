"use client";

import { motion } from "framer-motion";
import {
  Search,
  CalendarDays,
  Clock,
  ShieldCheck,
  FileCheck2,
  MessageCircle,
  LifeBuoy,
  ArrowRight,
  Star,
  Globe2,
  CheckCircle2,
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

const avatarSeeds = ["renter-1", "renter-2", "renter-3", "renter-4"];

// ⚠️ IMPORTANT: this must be a real, bright, warm indoor room photo.
// Random picsum seeds do NOT search for "bedroom" — they just assign an
// arbitrary stock photo to that seed string, which is why you were seeing
// a dark mountain/sunset shot instead of the room photo. Swap this for
// your actual asset (e.g. from /public or your CMS/CDN) before shipping.
const HERO_IMAGE_URL = "/images/hero-bedroom.webp";

const stats = [
  { icon: Globe2, value: "100+", label: "Countries" },
  { icon: CheckCircle2, value: "500K+", label: "Verified users" },
  { icon: Home, value: "250K+", label: "Rooms listed" },
  { icon: Lock, value: "Secure", label: "By design" },
];

export function HeroSection() {
  const { open } = useSearchModal();

  return (
    <section className="pb-10 pt-8 sm:pb-14 sm:pt-12">
      <Container className="flex flex-col gap-6">
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
            <div className="absolute inset-0 bg-linear-to-r from-white via-white/80 to-transparent" />
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
          <div className="relative z-10 flex flex-col gap-6 p-8 sm:p-10 lg:max-w-[800px] lg:p-12">
            <motion.span
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-red/10 px-4 py-1.5 text-sm font-medium text-brand-red"
            >
              <ShieldCheck className="h-4 w-4" />
              Verified rooms. Clearer rental journeys.
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl font-heading text-4xl font-medium leading-tight text-brand-navy sm:text-5xl"
            >
              Find a verified room{" "}
              <span className="text-brand-navy/70">you can</span>{" "}
              <span className="text-blue-600">trust.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="max-w-md text-base text-neutral-600">
              Search private rooms for 30 nights or longer, connect safely with providers, and
              keep a clear record from application to move-out.
            </motion.p>

            {/* Search bar — grid instead of flex, with min-w-0 so cells shrink cleanly
                instead of collapsing text into single-word lines */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 gap-3 rounded-2xl border border-black/10 bg-white p-3 shadow-sm sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-center sm:gap-0 sm:divide-x sm:divide-black/10 sm:p-2"
            >
              <div className="flex min-w-0 flex-col gap-1 px-3 py-1">
                <span className="text-xs font-medium text-neutral-500">Where do you want to live?</span>
                <div className="flex min-w-0 items-center gap-2">
                  <Search className="h-4 w-4 shrink-0 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="City, neighborhood, or address"
                    className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-1 px-3 py-1">
                <span className="text-xs font-medium text-neutral-500">Move-in date</span>
                <div className="flex min-w-0 items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0 text-neutral-400" />
                  <input
                    type="date"
                    className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none [color-scheme:light]"
                  />
                </div>
              </div>
              <div className="flex min-w-0 flex-col gap-1 px-3 py-1">
                <span className="text-xs font-medium text-neutral-500">Stay length</span>
                <div className="flex min-w-0 items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0 text-neutral-400" />
                  <select className="w-full min-w-0 bg-transparent text-sm text-brand-ink outline-none">
                    <option>1+ month</option>
                    <option>3+ months</option>
                    <option>6+ months</option>
                    <option>12+ months</option>
                  </select>
                </div>
              </div>
              <div className="px-1 pt-1 sm:pl-3 sm:pt-0">
                <Button
                  size="lg"
                  className="w-full !rounded-lg !bg-brand-navy text-white hover:!bg-brand-navy-dark sm:w-auto"
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
                    <p className="text-sm font-semibold text-brand-navy">{title}</p>
                    <p className="text-xs text-neutral-500">{description}</p>
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
              <a href="/how-it-works" className="inline-flex items-center gap-1.5 text-brand-navy transition-colors hover:text-brand-navy-dark">
                See how verification works
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          {/* Floating testimonial card — positioned against the whole card, own z-index, own max-width */}
          <motion.div
            variants={fadeUp}
            className="absolute bottom-5 right-5 z-10 flex max-w-xs flex-col gap-3 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-sm sm:bottom-8 sm:right-8"
          >
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarSeeds.map((seed) => (
                  <ImageFade
                    key={seed}
                    src={`https://picsum.photos/seed/${seed}/64/64`}
                    alt=""
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-brand-navy">
                Join thousands of verified renters and landlords
              </p>
            </div>
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
          className="flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <p className="max-w-56 text-sm font-medium text-brand-navy">
            Trusted by renters and landlords around the world
          </p>
          <div className="grid flex-1 grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <p className="font-heading text-lg font-semibold text-brand-navy">{value}</p>
                  <p className="text-xs text-neutral-500">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}