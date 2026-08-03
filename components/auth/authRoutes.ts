export type AuthTab = {
  label: string;
  href: "/login" | "/register" | "/reset-password";
  heading: string;
  subtitle: string;
};

export const authTabs: AuthTab[] = [
  {
    label: "Login",
    href: "/login",
    heading: "Welcome Back!",
    subtitle: "Access your rooms, applications, payments, and rental records securely.",
  },
  {
    label: "Register",
    href: "/register",
    heading: "Let's Get Started",
    subtitle: "Create your account and start your rental journey.",
  },
  {
    label: "Reset Password",
    href: "/reset-password",
    heading: "Forgot password?",
    subtitle: "We'll email you a link to reset it.",
  },
];
