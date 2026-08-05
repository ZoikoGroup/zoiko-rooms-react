import { footerOffices } from "./footer-data";
import { LinkedinIcon, YoutubeIcon, XIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

const socialLinks = [
  { label: "LinkedIn", href: "#", Icon: LinkedinIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
  { label: "X", href: "#", Icon: XIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
];

export function FooterOffices() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {footerOffices.map(({ title, name, address }) => (
        <div key={title} className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{title}</p>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="whitespace-nowrap text-sm text-white">{address}</p>
        </div>
      ))}

      <div className="flex items-start gap-2 sm:justify-end">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.08] text-white/80 transition-colors hover:bg-white/[0.14] hover:text-white"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
