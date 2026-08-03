import type { Metadata } from "next";
import Link from "next/link";
import { FormField, PasswordField, SubmitButton } from "@/components/auth";

export const metadata: Metadata = { title: "Login — Zoiko Rooms" };

export default function LoginPage() {
  return (
    <form className="flex flex-col gap-5">
      <FormField label="Email" required type="email" placeholder="Enter Your Email" autoComplete="email" />
      <PasswordField label="Password" required autoComplete="current-password" />

      <div className="-mt-2 text-right">
        <Link
          href="/reset-password"
          className="text-sm text-brand-navy transition-colors duration-200 hover:text-brand-navy-dark"
        >
          Forgot Password?
        </Link>
      </div>

      <SubmitButton>Login</SubmitButton>

      <p className="text-center text-sm text-neutral-500">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-navy-dark">
          Sign Up
        </Link>
      </p>
    </form>
  );
}
