"use client";

import { motion } from "framer-motion";
import { DoorClosed, KeyRound, Ghost, Sparkles } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { fadeUp, staggerContainer } from "@/lib/motion";

function DoorScene() {
  return (
    <motion.div
      variants={fadeUp}
      className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
    >
      {/* floor shadow, pulses as the door "hovers" */}
      <motion.div
        className="absolute bottom-1 h-4 w-24 rounded-full bg-brand-navy/10 blur-sm"
        animate={{ scaleX: [1, 0.85, 1], opacity: [0.6, 0.35, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* the door itself, gently bobbing */}
      <motion.div
        className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-brand-navy text-white shadow-xl sm:h-32 sm:w-32"
        animate={{ y: [0, -6, 0], rotate: [0, -1.5, 0, 1.5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <DoorClosed className="h-12 w-12 sm:h-14 sm:w-14" />
        <span className="absolute -bottom-3 rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-navy shadow-sm">
          404
        </span>
      </motion.div>

      {/* key, swinging from the handle like it's on a hook */}
      <motion.div
        className="absolute right-2 top-[46%] origin-top text-brand-red sm:right-3"
        animate={{ rotate: [-16, 16, -16] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <KeyRound className="h-7 w-7 sm:h-8 sm:w-8" />
      </motion.div>

      {/* ghost peeking out, since no one's home */}
      <motion.div
        className="absolute -left-6 -top-2 text-neutral-300 sm:-left-8"
        animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Ghost className="h-9 w-9 sm:h-10 sm:w-10" />
      </motion.div>

      {/* twinkling sparkle */}
      <motion.span
        className="absolute -top-2 right-4 text-amber-400 sm:right-6"
        animate={{ opacity: [0, 1, 0], scale: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      >
        <Sparkles className="h-5 w-5" />
      </motion.span>
    </motion.div>
  );
}

export function NotFoundContent() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center py-20">
      <Container>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mx-auto flex max-w-lg flex-col items-center gap-6 text-center"
        >
          <DoorScene />
          <motion.h1
            variants={fadeUp}
            className="font-heading text-6xl font-medium text-brand-navy sm:text-7xl"
          >
            404
          </motion.h1>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-2xl font-medium text-brand-navy sm:text-3xl"
          >
            This room isn&apos;t on the map.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-base text-neutral-600 sm:text-lg">
            No listing, no reservation, no forwarding address. The page you&apos;re looking for
            may have moved or never existed — let&apos;s get you back to a real room.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
            <Button href="/" size="lg">
              Back to home
            </Button>
            <Button href="/find-a-room" size="lg" variant="outline">
              Find a room
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
