import { Logo } from "@/components/ui";

export function FooterBrand() {
  return (
    <div className="flex flex-col gap-3">
      <div className="w-fit rounded-lg bg-white px-4 py-3">
        <Logo width={170} height={26} />
      </div>
      <p className="text-sm text-white/60">
        A more trusted way to find, verify, secure, and manage a private room.
      </p>
    </div>
  );
}
