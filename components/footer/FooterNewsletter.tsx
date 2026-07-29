"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/ui";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-4 lg:max-w-xs">
      <Logo width={170} height={26} />
      <p className="text-sm text-neutral-600">
        Verified private rooms for 30 nights or longer.
      </p>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex items-center gap-2 rounded-full border border-black/10 bg-white p-1.5 pl-4"
      >
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Your email address"
          className="w-full bg-transparent text-sm text-brand-ink outline-none placeholder:text-neutral-400"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Subscribe"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-red text-white transition-colors hover:bg-brand-red-dark"
        >
          <ArrowRight className="h-4 w-4" />
        </motion.button>
      </form>
    </div>
  );
}
