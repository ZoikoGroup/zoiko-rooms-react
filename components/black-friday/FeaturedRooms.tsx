import Image from "next/image";
import Link from "next/link";

const ROOMS = [
  {
    price: "$624",
    was: "$780",
    location: "Kreuzberg, Berlin",
    src: "/images/black/7.png",
    alt: "Modern living room with built-in shelving and large windows",
    href: "/black-friday/rooms/kreuzberg",
  },
  {
    price: "$520",
    was: "$650",
    location: "Neukölln, Berlin",
    src: "/images/black/8.png",
    alt: "Modern white house with a pool and tropical plants",
    href: "/black-friday/rooms/neukolln",
  },
  {
    price: "$568",
    was: "$710",
    location: "Prenzlauer Berg, Berlin",
    src: "/images/black/9.png",
    alt: "Cozy living room with a sofa, plants and wooden furniture",
    href: "/black-friday/rooms/prenzlauer-berg",
  },
  {
    price: "$552",
    was: "$690",
    location: "Friedrichshain, Berlin",
    src: "/images/black/10.png",
    alt: "Bright living room with a light sofa and soft throw",
    href: "https://app.zoikorooms.com/account",
  },
] as const;

const STEPS = [
  {
    number: "01",
    title: "Smart Search",
    description:
      "Filter active room inventory by preferred city, neighborhood, budget, and move-in dates instantly.",
  },
  {
    number: "02",
    title: "Evidence Review",
    description:
      "Inspect comprehensive room passports covering regulatory verification and physical check results.",
  },
  {
    number: "03",
    title: "Secure Application",
    description:
      "Apply securely with clear disclosures and lock in your exclusive Black Friday rate concessions.",
  },
  {
    number: "04",
    title: "Smooth Move-In",
    description:
      "Finalize digital agreements and step into your fully verified new home with ongoing support.",
  },
] as const;

export default function FeaturedRooms() {
  return (
    <section className="w-full overflow-x-hidden bg-[#0a0e17] px-6 py-14 text-white sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1200px]">
        {/* Featured rooms */}
        <div className="text-center">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#d9473f]">
            Sample Listings
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Rooms on Sale
          </h2>
          <p className="mt-3 text-base text-white/60">
            Lock in your 20% Black Friday discount today.
          </p>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ROOMS.map((room) => (
            <li
              key={room.location}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#161d30]"
            >
              <div className="relative h-[150px] w-full">
                <Image
                  src={room.src}
                  alt={room.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 90vw"
                  className="object-cover"
                />
                <span className="absolute bottom-2 left-2 rounded bg-[#e0392d] px-2 py-1 text-sm font-bold uppercase text-white">
                  20% Off BF
                </span>
              </div>
              <div className="p-4">
                <p className="flex items-baseline gap-2">
                  <span className="text-base font-bold">{room.price}</span>
                  <span className="text-sm text-white/40 line-through">
                    {room.was}
                  </span>
                  <span className="text-base font-bold">/mo</span>
                </p>
                <p className="mt-1 text-sm text-white/60">{room.location}</p>
                <Link
                  href="https://app.zoikorooms.com/account"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[#e0392d] px-4 py-2.5 text-sm font-semibold text-white"
                >
                  Claim Offer
                </Link>
              </div>
            </li>
          ))}
        </ul>

        {/* Journey */}
        <div className="mt-24 text-center">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-[#d9473f]">
            Seamless Journey
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            From Search to Move-In
          </h2>
          <p className="mt-3 text-base text-white/60">
            A streamlined digital workflow built for speed, transparency, and
            complete security.
          </p>
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <li
              key={step.number}
              className="relative overflow-hidden rounded-xl border border-white/10 bg-[#161d30] p-5 pt-6"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d9473f] to-[#e0b062]"
              />
              <p className="font-serif text-3xl font-bold text-[#c9a25a]">
                {step.number}
              </p>
              <h3 className="mt-3 font-serif text-lg font-bold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-5 text-white/60">
                {step.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
