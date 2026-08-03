import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FormField, SubmitButton } from "@/components/auth";

export const metadata: Metadata = { title: "Reset Password — Zoiko Rooms" };

export default function ResetPasswordPage() {
  return (
    <form className="flex flex-col gap-5">
      <FormField
        label="Email Address"
        required
        type="email"
        placeholder="your@companyemail.com"
        autoComplete="email"
      />

      <SubmitButton>Send reset link</SubmitButton>

      <Link
        href="/login"
        className="flex items-center justify-center gap-1.5 text-center text-sm text-neutral-500 transition-colors duration-200 hover:text-brand-navy"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to sign in
      </Link>
    </form>
  );
}
