import type { Metadata } from "next";
import Link from "next/link";
import { FormField, PasswordField, SubmitButton } from "@/components/auth";

export const metadata: Metadata = {
  title: "Create Your Account and Get Started | Zoiko Rooms",
  description:
    "Create your Zoiko Rooms account to get started. Register easily and access your account to explore rooms, accommodation options and available services.",
};

export default function RegisterPage() {
  return (
    <form className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField
          label="First Name"
          required
          placeholder="Enter Your First Name"
          autoComplete="given-name"
        />
        <FormField
          label="Last Name"
          required
          placeholder="Enter Your Last Name"
          autoComplete="family-name"
        />
      </div>

      <FormField
        label="Enter Email"
        required
        type="email"
        placeholder="Enter Your Email"
        autoComplete="email"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <PasswordField
          label="Enter Password"
          required
          autoComplete="new-password"
        />
        <PasswordField
          label="Confirm Password"
          required
          autoComplete="new-password"
        />
      </div>

      <SubmitButton>Register</SubmitButton>

      <p className="text-center text-sm text-neutral-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-navy-dark"
        >
          Login
        </Link>
      </p>
    </form>
  );
}
