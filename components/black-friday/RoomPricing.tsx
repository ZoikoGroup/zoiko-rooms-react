import Link from "next/link";
import { Check, Star } from "lucide-react";

const STATS = [
  { value: "100+", label: "Markets Live" },
  { value: "500K+", label: "Verified Users" },
  { value: "250K+", label: "Rooms Listed" },
  { value: "Secure", label: "By Design" },
] as const;

const PLANS = [
  {
    name: "Standard Renter",
    description: "For individual students & professionals.",
    was: "$29",
    price: "$23.20",
    badge: "Black Friday: 20% Off",
    features: ["Verified Room Passports", "Direct Host Chat"],
    cta: "Select Standard",
    href: "https://app.zoikorooms.com/account",
    featured: false,
  },
  {
    name: "Host Pro Tier",
    description: "For property managers and hosts.",
    was: "$89",
    price: "$71.20",
    badge: "Black Friday: 20% Off First Year",
    features: [
      "Host Authority Verification",
      "Advanced Applicant Screening",
      "Zero-Fee Enquiry Handling",
    ],
    cta: "Claim Pro Deal Now",
    href: "https://app.zoikorooms.com/account",
    featured: true,
  },
  {
    name: "Portfolio Enterprise",
    description: "Full compliance multi-property suite.",
    was: "$249",
    price: "$199.20",
    badge: "Black Friday Bundle Offer",
    features: ["Unlimited Portfolios", "Regulatory Compliance Tools"],
    cta: "Contact Enterprise",
    href: "https://app.zoikorooms.com/account",
    featured: false,
  },
] as const;

export default function RoomPricing() {
  return (
    <section id="deals" className="w-full overflow-x-hidden bg-[#121824] text-white">
      {/* Stats */}
      <ul className="mx-auto grid max-w-[1200px] grid-cols-2 border-b border-white/10 lg:grid-cols-4">
        {STATS.map((stat) => (
          <li
            key={stat.label}
            className="border-white/10 px-4 py-6 text-center lg:border-r lg:last:border-r-0"
          >
            <p className="font-serif text-3xl font-bold text-[#d9473f]">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/50">{stat.label}</p>
          </li>
        ))}
      </ul>

      {/* Pricing */}
      <div className="px-6 pb-16 pt-12 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#d9473f]">
              Black Friday 2026 Pricing
            </p>
            <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
              Choose Your Plan &amp; Save 20%
            </h2>
            <p className="mt-3 text-base text-white/60">
              Special promotional rates valid during the Black Friday event
              window.
            </p>
          </div>

          <ul className="mx-auto mt-12 grid max-w-[1200px] items-stretch gap-6 md:grid-cols-3">
            {PLANS.map((plan) => (
              <li
                key={plan.name}
                className={
                  plan.featured
                    ? "relative flex flex-col rounded-2xl border-2 border-[#d9473f] bg-gradient-to-b from-[#2a1a22] to-[#171e30] p-6 shadow-[0_0_40px_rgba(217,71,63,0.25)]"
                    : "relative flex flex-col rounded-2xl border border-white/10 bg-[#171e30] p-6"
                }
              >
                {plan.featured && (
                  <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d9473f] px-3 py-1 text-sm font-bold uppercase tracking-[0.06em]">
                    Best Value
                  </span>
                )}

                <h3 className="font-serif text-xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-sm text-white/60">{plan.description}</p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-base text-white/40 line-through">
                    {plan.was}
                  </span>
                  <span className="font-serif text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-sm text-white/50">/mo</span>
                </p>

                <p className="mt-4 flex items-center gap-2 rounded-md bg-white/5 px-3 py-2 text-sm font-semibold text-[#e0b062]">
                  <Star
                    className="h-4 w-4 shrink-0 fill-[#e0b062]"
                    aria-hidden="true"
                  />
                  {plan.badge}
                </p>

                <ul className="mt-5 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-white/85"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-[#3ddc84]"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={
                    plan.featured
                      ? "mt-8 inline-flex items-center justify-center rounded-lg bg-[#e0392d] px-4 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#e0392d]/30"
                      : "mt-8 inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-3.5 text-sm font-bold text-white"
                  }
                >
                  {plan.cta}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
