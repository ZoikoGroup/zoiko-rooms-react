// lucide-react dropped brand/logo icons, so these five are hand-drawn
// minimal glyphs instead of imported components.
type IconProps = { className?: string };

export function LinkedinIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M22 12s0-3.16-.4-4.68a2.53 2.53 0 0 0-1.78-1.79C18.32 5.13 12 5.13 12 5.13s-6.32 0-7.82.4a2.53 2.53 0 0 0-1.78 1.79C2 8.84 2 12 2 12s0 3.16.4 4.68a2.53 2.53 0 0 0 1.78 1.79c1.5.4 7.82.4 7.82.4s6.32 0 7.82-.4a2.53 2.53 0 0 0 1.78-1.79c.4-1.52.4-4.68.4-4.68ZM10 15.02V8.98L15.27 12 10 15.02Z" />
    </svg>
  );
}

export function XIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M13.98 10.62 20.3 3h-1.5l-5.49 6.62L8.9 3H3.32l6.63 9.63L3.32 21h1.5l5.8-6.99L15.1 21h5.58l-6.7-10.38Zm-2.05 2.47-.67-.97L5.9 4.17h2.3l4.31 6.19.67.97 5.6 8.04h-2.3l-4.55-6.53Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.2c2.67 0 2.99.01 4.04.06 1.05.05 1.77.21 2.4.46.65.25 1.2.6 1.75 1.14.5.5.85 1.1 1.14 1.75.25.63.4 1.35.46 2.4.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05 1.05-.21 1.77-.46 2.4a4.7 4.7 0 0 1-1.14 1.75 4.7 4.7 0 0 1-1.75 1.14c-.63.25-1.35.4-2.4.46-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-1.05-.05-1.77-.21-2.4-.46a4.7 4.7 0 0 1-1.75-1.14 4.7 4.7 0 0 1-1.14-1.75c-.25-.63-.4-1.35-.46-2.4C3.16 14.99 3.15 14.67 3.15 12s.01-2.99.06-4.04c.05-1.05.21-1.77.46-2.4.25-.65.6-1.2 1.14-1.75a4.7 4.7 0 0 1 1.75-1.14c.63-.25 1.35-.4 2.4-.46C9.01 3.21 9.33 3.2 12 3.2Zm0 4.53a4.27 4.27 0 1 0 0 8.54 4.27 4.27 0 0 0 0-8.54Zm0 7.04a2.77 2.77 0 1 1 0-5.54 2.77 2.77 0 0 1 0 5.54Zm4.44-7.21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
}

export function FacebookIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M14.5 8.5h2V5.3c-.35-.05-1.53-.15-2.9-.15-2.87 0-4.84 1.8-4.84 5.12v2.73H5.5v3.6h3.26V21h3.6v-8.4h3.06l.49-3.6h-3.55V10.7c0-1.05.28-1.77 1.14-1.77Z" />
    </svg>
  );
}

export function PinterestIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 3.2c-4.85 0-8.8 3.95-8.8 8.8 0 3.62 2.2 6.73 5.34 8.06-.07-.68-.14-1.74.03-2.49.15-.68 1-4.31 1-4.31s-.26-.51-.26-1.27c0-1.19.69-2.08 1.55-2.08.73 0 1.08.55 1.08 1.2 0 .73-.47 1.83-.71 2.85-.2.85.43 1.55 1.27 1.55 1.53 0 2.7-1.61 2.7-3.94 0-2.06-1.48-3.5-3.6-3.5-2.45 0-3.89 1.84-3.89 3.73 0 .74.28 1.53.64 1.96a.26.26 0 0 1 .06.25c-.07.28-.22.86-.25.98-.04.16-.13.2-.3.12-1.12-.52-1.82-2.15-1.82-3.47 0-2.82 2.05-5.42 5.92-5.42 3.11 0 5.53 2.22 5.53 5.18 0 3.09-1.95 5.58-4.66 5.58-.91 0-1.77-.47-2.06-1.03l-.56 2.14c-.2.78-.75 1.75-1.11 2.35.84.26 1.72.4 2.64.4 4.85 0 8.8-3.95 8.8-8.8s-3.95-8.8-8.8-8.8Z" />
    </svg>
  );
}
