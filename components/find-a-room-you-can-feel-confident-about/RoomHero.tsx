"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Accessibility,
  ArrowRight,
  BedDouble,
  Briefcase,
  Building2,
  CalendarDays,
  ChevronDown,
  Clock,
  FileText,
  GraduationCap,
  Globe,
  Headphones,
  Heart,
  Home,
  Lock,
  MapPin,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Star,
  User,
  Users,
  Wallet,
} from "lucide-react";

const tabs = [
  { label: "Find a Room", icon: BedDouble },
  { label: "Near a University", icon: GraduationCap },
  { label: "Corporate & Staff", icon: Building2 },
  { label: "Relocation", icon: Heart },
] as const;

const badges = [
  { line1: "Verified", line2: "Listings", icon: ShieldCheck },
  { line1: "Trusted", line2: "Hosts", icon: Users },
  { line1: "Clear", line2: "Rental Record", icon: FileText },
  { line1: "24/7", line2: "Support", icon: Headphones },
] as const;

const filters = [
  { label: "All Filters", icon: SlidersHorizontal, dot: false },
  { label: "Monthly Budget", icon: Wallet, dot: true },
  { label: "Room Type", icon: BedDouble, dot: true },
  { label: "Amenities", icon: Home, dot: true },
  { label: "Gender Preference", icon: User, dot: true },
  { label: "Accessibility", icon: Accessibility, dot: true },
] as const;

const trust = [
  {
    title: "Multi-level Verification",
    text: "Identity, property, and listing authority checks.",
    icon: ShieldCheck,
  },
  {
    title: "Safe & Secure",
    text: "Protected messaging and payments.",
    icon: Lock,
  },
  {
    title: "Full Rental Record",
    text: "Keep your agreements, payments and stay history.",
    icon: FileText,
  },
  {
    title: "Global Platform",
    text: "Rooms in 100+ countries.",
    icon: Globe,
  },
] as const;

const footerItems = [
  { label: "Learners & Students", icon: Users },
  { label: "Professionals", icon: Briefcase },
  { label: "Relocators", icon: Building2 },
  { label: "Organizations & Employers", icon: FileText },
  { label: "Rooms in 100+ Countries", icon: Globe },
] as const;

export default function RoomHero() {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section
      id="room-hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7F8FC] to-white text-[#0B1B4D] antialiased"
    >
      {/* Top area: copy + tabs, with the photo on the right */}
      <div className="relative w-full">
        {/* Photo block (right side, top to bottom of tabs row) */}
        <div className="relative h-[240px] w-full sm:h-[300px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[57%]">
          <Image
            src="/images/confident/hero.png"
            alt="Bright furnished room with a city skyline view"
            fill
            priority
            sizes="(min-width: 1024px) 57vw, 100vw"
            className="object-cover object-left-top"
          />
          <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-10 bg-gradient-to-r from-[#F7F8FC] to-transparent lg:block" />
        </div>

        <div className="relative mx-auto max-w-[1280px] px-6 pt-8 sm:px-10 lg:px-12 lg:pt-6">
          <div className="max-w-[560px] lg:max-w-[46%]">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#F4C9CF] bg-[#FDECEE] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.04em] text-[#0B1B4D]">
              <Home className="h-3.5 w-3.5 text-[#D7001F]" aria-hidden="true" />
              Private Rooms
              <span className="text-[#0B1B4D]">•</span>
              30+ Nights
            </span>

            <h1 className="mt-5 text-[44px] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#0B1B4D] sm:text-[52px] lg:text-[48px] xl:text-[54px]">
              Find a room you can
              <br />
              <span className="ml-2">feel </span>
              <span className="text-[#D7001F]">confident</span> about.
            </h1>

            <p className="mt-5 max-w-[400px] text-[14px] leading-[1.6] text-[#2B3556]">
              Discover verified rooms for stays of 30 nights or longer. Connect
              safely, manage your rental and keep a clear record — all in one
              place.
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              {badges.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.line1}
                    className="flex items-center gap-2.5 rounded-xl border border-[#F4C9CF] bg-[#FDECEE]/80 px-3.5 py-2.5"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-[#0B1B4D]"
                      aria-hidden="true"
                    />
                    <p className="text-[10px] font-semibold leading-[1.3] text-[#0B1B4D]">
                      {b.line1}
                      <br />
                      {b.line2}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tabs (overlap the photo) */}
          <div className="relative z-10 mt-8 flex w-full flex-wrap items-center gap-x-1 gap-y-1 rounded-t-2xl bg-[#F1F2F6]/90 px-3 pt-2 backdrop-blur-sm lg:w-[calc(100%-100px)] lg:max-w-[760px]">
            {tabs.map((tab, i) => {
              const Icon = tab.icon;
              const isActive = activeTab === i;
              return (
                <button
                  key={tab.label}
                  type="button"
                  onClick={() => setActiveTab(i)}
                  aria-pressed={isActive}
                  className={`relative flex items-center gap-2 px-4 py-3 text-[12px] font-semibold transition-colors ${
                    isActive
                      ? "rounded-t-xl bg-white text-[#D7001F]"
                      : "text-[#0B1B4D] hover:text-[#D7001F]"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {tab.label}
                  {isActive ? (
                    <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#D7001F]" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-12">
        {/* Form card */}
        <div className="relative z-10 rounded-2xl rounded-tl-none bg-white px-5 py-5 shadow-[0_10px_40px_rgba(11,27,77,0.12)] sm:px-6">
          <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-2 lg:grid-cols-[1.9fr_1.1fr_1.1fr_0.9fr]">
            <div>
              <label
                htmlFor="location"
                className="block text-[11px] font-semibold text-[#0B1B4D]"
              >
                Where do you want to live?
              </label>
              <div className="mt-2 flex items-center gap-2.5 rounded-lg border border-[#D9DCE6] bg-white px-3.5 py-3">
                <MapPin
                  className="h-3.5 w-3.5 text-[#0B1B4D]"
                  aria-hidden="true"
                />
                <input
                  id="location"
                  type="text"
                  placeholder="City, neighborhood, university or ZIP code"
                  className="w-full bg-transparent text-[11px] text-[#0B1B4D] outline-none placeholder:text-[#7D839B]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="movein"
                className="block text-[11px] font-semibold text-[#0B1B4D]"
              >
                Move-in date
              </label>
              <div className="mt-2 flex items-center gap-2.5 rounded-lg border border-[#D9DCE6] bg-white px-3.5 py-3">
                <CalendarDays
                  className="h-3.5 w-3.5 text-[#0B1B4D]"
                  aria-hidden="true"
                />
                <input
                  id="movein"
                  type="text"
                  placeholder="Select date"
                  className="w-full bg-transparent text-[11px] text-[#0B1B4D] outline-none placeholder:text-[#7D839B]"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="stay"
                className="block text-[11px] font-semibold text-[#0B1B4D]"
              >
                Length of stay
              </label>
              <div className="relative mt-2 flex items-center gap-2.5 rounded-lg border border-[#D9DCE6] bg-white px-3.5 py-3">
                <Clock
                  className="h-3.5 w-3.5 text-[#0B1B4D]"
                  aria-hidden="true"
                />
                <select
                  id="stay"
                  defaultValue="30+ nights"
                  className="w-full appearance-none bg-transparent text-[11px] text-[#0B1B4D] outline-none"
                >
                  <option>30+ nights</option>
                  <option>60+ nights</option>
                  <option>90+ nights</option>
                  <option>180+ nights</option>
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-3.5 h-3.5 w-3.5 text-[#0B1B4D]"
                  aria-hidden="true"
                />
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#D7001F] px-6 py-3.5 text-[12px] font-bold text-white shadow-[0_6px_16px_rgba(215,0,31,0.3)] transition-colors hover:bg-[#B80019]"
            >
              <Search className="h-3.5 w-3.5" aria-hidden="true" />
              Search Rooms
            </a>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-[#ECEEF3] pt-4">
            {filters.map((f, i) => {
              const Icon = f.icon;
              return (
                <a
                  key={f.label}
                  href="#"
                  className={`inline-flex items-center gap-2 text-[10px] font-semibold text-[#0B1B4D] transition-colors hover:text-[#D7001F] ${
                    i !== 0 ? "lg:border-l lg:border-[#ECEEF3] lg:pl-6" : ""
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {f.label}
                  {f.dot ? (
                    <span className="text-[8px]" aria-hidden="true">
                      •
                    </span>
                  ) : null}
                </a>
              );
            })}
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-8 grid grid-cols-1 items-start gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_auto]">
          {trust.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF0F6]">
                  <Icon className="h-4 w-4 text-[#0B1B4D]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[11px] font-bold leading-[1.3] text-[#0B1B4D]">
                    {item.title}
                  </p>
                  <p className="mt-1 max-w-[170px] text-[10px] leading-[1.45] text-[#5C647E]">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}

          <div className="flex flex-col items-start lg:items-center">
            <div className="flex gap-0.5">
              {[0, 1, 2, 3].map((n) => (
                <span
                  key={n}
                  className="flex h-5 w-5 items-center justify-center bg-[#00B67A]"
                >
                  <Star
                    className="h-3 w-3 fill-white text-white"
                    aria-hidden="true"
                  />
                </span>
              ))}
              <span className="flex h-5 w-5 items-center justify-center bg-gradient-to-r from-[#00B67A] to-[#C9CCD6]">
                <Star
                  className="h-3 w-3 fill-white text-white"
                  aria-hidden="true"
                />
              </span>
            </div>
            <p className="mt-1.5 text-[9px] font-semibold leading-[1.3] text-[#0B1B4D] lg:text-center">
              Trusted worldwide
              <br />
              by our community
            </p>
          </div>
        </div>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-4 pb-12 sm:flex-row">
          <a
            href="/list-a-room"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0B1B4D] bg-white px-7 py-3 text-[12px] font-bold text-[#0B1B4D] transition-colors hover:bg-[#0B1B4D] hover:text-white"
          >
            Have a room to rent? List it free
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          <a
            href="/pro/compliance-and-verification"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D7001F] bg-white px-7 py-3 text-[12px] font-bold text-[#D7001F] transition-colors hover:bg-[#D7001F] hover:text-white"
          >
            See how verification works
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom-left decorative swoosh */}
      <svg
        className="pointer-events-none absolute bottom-[48px] left-0 hidden h-[110px] w-[200px] lg:block"
        viewBox="0 0 200 110"
        fill="none"
        aria-hidden="true"
      >
        {/* Red outer curve (starts higher, extends further right, sits flush behind the blue) */}
        <path d="M0 10 C 65 22, 130 55, 192 110 L 0 110 Z" fill="#D7001F" />
        {/* Blue inner curve */}
        <path d="M0 32 C 55 44, 105 72, 143 110 L 0 110 Z" fill="#0B1B4D" />
      </svg>

      {/* Bottom navy bar */}
      <div className="relative w-full bg-[#0B1B4D]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-4 sm:px-10 lg:justify-between lg:px-12">
          {footerItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 text-[11px] font-semibold text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {item.label}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
