"use client";

import { motion, type Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const floatUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: (customDelay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay,
    },
  }),
};

interface FinalCtaSectionProps {
  onSearchRooms?: () => void;
  onListRoom?: () => void;
}

export default function FinalCtaSection({
  onSearchRooms,
  onListRoom,
}: FinalCtaSectionProps) {
  const router = useRouter();
  return (
    <section className="flex w-full justify-center px-6 py-12 font-['Inter',sans-serif] md:px-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
        variants={floatUpVariants}
        className="relative flex w-full bg-[#F1E7DA] max-w-[1176px] flex-col items-center justify-start gap-3.5 overflow-hidden rounded-3xl border border-stone-300/60 px-6 py-12 shadow-sm md:px-12"
      
      >
        <motion.div
          custom={0.1}
          variants={floatUpVariants}
          className="flex w-full flex-col items-center justify-start text-center"
        >
          <h2 className="font-['Fraunces',serif] text-2xl font-semibold leading-10 text-gray-800 md:text-3xl">
            Ready to search a city?
          </h2>
        </motion.div>

        <motion.div
          custom={0.15}
          variants={floatUpVariants}
          className="flex w-full flex-col items-center justify-start text-center"
        >
          <p className="max-w-[500px] text-sm font-normal leading-6 text-stone-600 md:text-base">
            Continue to current rooms, or offer supply if you&apos;re a provider.
          </p>
        </motion.div>

        <motion.div
          custom={0.2}
          variants={floatUpVariants}
          className="z-10 flex w-full flex-wrap items-center justify-center gap-3.5 pt-2.5"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: "#0c4a6e",
              boxShadow: "0 8px 20px -4px rgba(12, 74, 110, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            // onClick={onSearchRooms}
            onClick={()=>router.push("/find-a-room/search-rooms")}
            className="flex cursor-pointer items-center justify-center rounded-full bg-sky-900 px-7 py-3.5 text-base font-semibold text-white transition-all duration-200"
          >
            Search Rooms
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.02,
              backgroundColor: "#ffffff",
              borderColor: "#a8a29e",
            }}
            whileTap={{ scale: 0.98 }}
            // onClick={onListRoom}
            onClick={()=>router.push("/list-a-room")}
            className="flex cursor-pointer items-center justify-center rounded-full border border-stone-300 bg-white/80 px-7 py-3.5 text-base font-semibold text-gray-800 backdrop-blur-sm transition-all duration-200"
          >
            List a Room
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
