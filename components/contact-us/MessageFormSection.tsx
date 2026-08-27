"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container, Reveal, ImageFade } from "@/components/ui";
import { fadeUp } from "@/lib/motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { Eyebrow, SectionTitle, SectionDivider } from "./shared";
import { helpTopics, responseTimes } from "./data";

type FormErrors = Partial<Record<"fullName" | "email" | "message", string>>;

export function MessageFormSection() {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [helpWith, setHelpWith] = useState(helpTopics[0]);
  const [roomId, setRoomId] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: FormErrors = {};
    if (!fullName.trim()) nextErrors.fullName = t("Enter your name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) nextErrors.email = t("Enter a valid email address.");
    if (!message.trim()) nextErrors.message = t("Tell us what's going on.");

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  }

  return (
    <SectionDivider id="message-form" className="scroll-mt-24 bg-white">
      <Container>
        <Reveal className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-4 text-center">
            <Eyebrow>{t("Send a message")}</Eyebrow>
            <SectionTitle className="text-center">{t("Or just tell us what's going on")}</SectionTitle>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
            <motion.div variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center gap-3 py-10 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-lg font-medium text-brand-navy">{t("Message sent")}</h3>
                  <p className="max-w-sm text-sm leading-relaxed text-neutral-600">
                    {t("A real person will review your message and reply from a verified @zoikorooms.com address.")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="fullName" className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {t("Full Name")}
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        placeholder={t("Your name")}
                        className="rounded-xl border border-[#E9E0D3] bg-white px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                      />
                      {errors.fullName && <span className="text-xs text-brand-red">{errors.fullName}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {t("Email")}
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder={t("you@example.com")}
                        className="rounded-xl border border-[#E9E0D3] bg-white px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                      />
                      {errors.email && <span className="text-xs text-brand-red">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="helpWith" className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {t("I Need Help With")}
                      </label>
                      <select
                        id="helpWith"
                        value={helpWith}
                        onChange={(event) => setHelpWith(event.target.value)}
                        className="rounded-xl border border-[#E9E0D3] bg-white px-3.5 py-2.5 text-sm text-brand-navy outline-none focus:border-brand-navy"
                      >
                        {helpTopics.map((topic) => (
                          <option key={topic} value={topic}>
                            {t(topic)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="roomId" className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        {t("Room or Agreement ID (optional)")}
                      </label>
                      <input
                        id="roomId"
                        type="text"
                        value={roomId}
                        onChange={(event) => setRoomId(event.target.value)}
                        placeholder={t("e.g. AG-284719")}
                        className="rounded-xl border border-[#E9E0D3] bg-white px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                      {t("Message")}
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      rows={5}
                      placeholder={t("Tell us what's going on — the more detail, the faster we can help.")}
                      className="resize-y rounded-xl border border-[#E9E0D3] bg-white px-3.5 py-2.5 text-sm text-brand-navy outline-none placeholder:text-neutral-400 focus:border-brand-navy"
                    />
                    {errors.message && <span className="text-xs text-brand-red">{errors.message}</span>}
                  </div>

                  <button
                    type="submit"
                    className="w-fit rounded-full bg-brand-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-dark"
                  >
                    {t("Send message")}
                  </button>

                  <p className="text-xs text-neutral-400">
                    {t("We reply from @zoikorooms.com only. We'll never ask for your password or payment details by email.")}
                  </p>
                </form>
              )}
            </motion.div>

            <div className="flex flex-col gap-6">
              <motion.div variants={fadeUp} className="overflow-hidden rounded-2xl border border-[#E9E0D3] bg-white">
                <div className="relative h-32 w-full">
                  <ImageFade
                    src="/images/contact-us/message-illustration.png"
                    alt=""
                    fill
                    sizes="320px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-sm font-semibold text-brand-navy">
                    {t("What happens after you send this")}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {t(
                      "A real person reviews your message, routes it to the right team, and replies from a verified @zoikorooms.com address.",
                    )}
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-[#E9E0D3] bg-white p-5">
                <h3 className="font-heading text-sm font-semibold text-brand-navy">{t("Response times")}</h3>
                <div className="mt-3 flex flex-col divide-y divide-[#E9E0D3]">
                  {responseTimes.map((row) => (
                    <div key={row.label} className="flex items-center justify-between py-2.5 text-sm">
                      <span className="text-neutral-600">{t(row.label)}</span>
                      <span className="font-semibold text-brand-navy">{t(row.time)}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionDivider>
  );
}
