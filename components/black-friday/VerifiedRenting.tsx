import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";

const CARDS = [
  {
    title: "Provider Authority",
    description: "We check title ownership before listings go live.",
    src: "/images/black/2.png",
    alt: "Bright living room with a sofa, artwork and large windows",
  },
  {
    title: "Room Passport",
    description: "Inspect declared or physically verified details.",
    src: "/images/black/3.png",
    alt: "Living room with a plant, floor lamp and white sofa",
  },
  {
    title: "Connected Record",
    description: "Agreements and payments in one clear timeline.",
    src: "/images/black/4.png",
    alt: "Open-plan office corridor with shelving and glass doors",
  },
  {
    title: "Human Support",
    description: "Dedicated assistance throughout your stay.",
    src: "/images/black/5.png",
    alt: "Support professional in a grey blazer against an orange wall",
  },
] as const;

export default function VerifiedRenting() {
  return (
    <section className="w-full overflow-x-hidden bg-[#0a0e17] px-6 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading */}
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#d9473f]">
            Trust &amp; Verification
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Welcome to verified renting.
          </h2>
          <p className="mt-3 text-base text-white/60">
            Every claim is backed by inspectable evidence.
          </p>
        </div>

        {/* Bonus banner */}
        <div className="mt-8 flex flex-col gap-3 rounded-lg border border-[#d9473f]/40 bg-gradient-to-r from-[#2a1320] to-[#1a1220] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-2 text-sm text-white/85">
            <Flame
              className="mt-0.5 h-4 w-4 shrink-0 text-[#f59e0b]"
              aria-hidden="true"
            />
            <span>
              <strong className="font-bold text-[#e0b062]">
                Black Friday Bonus:
              </strong>{" "}
              Book any verified room before Nov 30 to lock in zero booking fees.
            </span>
          </p>
          <span className="inline-flex shrink-0 self-start rounded bg-[#e0392d] px-3 py-1 text-sm font-bold uppercase text-white sm:self-auto">
            Active Offer
          </span>
        </div>

        {/* Cards */}
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <li
              key={card.title}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#161d30]"
            >
              <div className="relative h-[140px] w-full">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-bold">{card.title}</h3>
                <p className="mt-2 text-sm leading-5 text-white/60">
                  {card.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Featured */}
        <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/10 bg-[#0f2150] md:grid-cols-[1.15fr_1fr]">
          <div className="relative min-h-[260px] md:min-h-[300px]">
            <Image
              src="/images/black/6.png"
              alt="Spacious living room with armchairs, a fireplace and floor-to-ceiling windows"
              fill
              sizes="(min-width: 768px) 55vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#f0807a]">
              Black Friday Featured
            </p>
            <h3 className="mt-4 font-serif text-3xl font-bold leading-tight">
              Evidence you can actually inspect.
            </h3>
            <p className="mt-4 text-base leading-6 text-white/75">
              Take advantage of our 20% seasonal markdown on all curated partner
              rooms.
            </p>
            <Link
              href="https://app.zoikorooms.com/account"
              className="mt-6 inline-flex items-center justify-center self-start rounded-lg bg-[#e0392d] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e0392d]/30"
            >
              Browse BF Rooms Now →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
