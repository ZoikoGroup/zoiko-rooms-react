import Image from "next/image";
import Link from "next/link";

const HEADLINE = [
  { text: "Find the room.", accent: false },
  { text: "Feel at home.", accent: true },
] as const;

const FIELDS = [
  {
    id: "location",
    label: "Where to live?",
    placeholder: "City or neighborhood",
  },
  { id: "move-in", label: "Move-in date", placeholder: "Select date" },
  { id: "stay", label: "Stay length", placeholder: "1+ month" },
] as const;

export default function RoomHero() {
  return (
    <section className="w-full overflow-x-hidden bg-[#0d1220] px-6 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-12">
        {/* Left */}
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/85">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#3ddc84]"
            />
            Black Friday Special Active · 20% Off All Bookings
          </p>

          <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            {HEADLINE.map((line) => (
              <span
                key={line.text}
                className={line.accent ? "block text-[#e0b062]" : "block"}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="mt-5 max-w-[440px] text-base leading-7 text-white/70">
            Secure verified rooms backed by transparent evidence and special
            Black Friday price concessions.
          </p>

          <form className="mt-6 flex flex-col gap-4 rounded-xl border border-white/10 bg-[#161d30] p-4 sm:flex-row sm:items-center sm:gap-5">
            <div className="grid flex-1 gap-4 sm:grid-cols-3">
              {FIELDS.map((field) => (
                <div key={field.id}>
                  <label
                    htmlFor={field.id}
                    className="block text-sm font-bold uppercase tracking-[0.04em] text-white"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.id}
                    type="text"
                    placeholder={field.placeholder}
                    className="mt-1 w-full bg-transparent text-sm text-white/70 outline-none placeholder:text-white/50"
                  />
                </div>
              ))}
            </div>
            <Link
              href="#deals"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[#e0392d] px-6 py-4 text-sm font-bold text-white"
            >
              Claim BF Deal →
            </Link>
          </form>
        </div>

        {/* Right */}
        <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
            <Image
              src="/images/black/1.png"
              alt="Woman working on a laptop while seated on a sofa in a bright living room"
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="absolute right-4 top-4 rounded-xl border-2 border-[#e0392d] bg-[#0d1220] px-5 py-3 text-center shadow-xl">
            <p className="font-mono text-sm uppercase tracking-[0.12em] text-[#e0392d]">
              Black Friday
            </p>
            <p className="text-2xl font-extrabold leading-7">20% OFF</p>
            <p className="font-mono text-sm uppercase tracking-[0.08em] text-[#e0b062]">
              Nov 27 – 30
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
