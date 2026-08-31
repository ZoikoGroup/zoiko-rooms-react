"use client";

import { footerOffices } from "./footer-data";
import { LinkedinIcon, YoutubeIcon, XIcon, InstagramIcon, FacebookIcon, PinterestIcon } from "./SocialIcons";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/zoiko-rooms", Icon: LinkedinIcon },
  { label: "YouTube", href: "https://www.youtube.com/@ZoikoRooms", Icon: YoutubeIcon },
  { label: "X", href: "https://x.com/ZoikoRoom", Icon: XIcon },
  { label: "Instagram", href: "https://www.instagram.com/zoikorooms/", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/zoikorooms/", Icon: FacebookIcon },
  { label: "Pinterest", href: "https://www.pinterest.com/zoikorooms/", Icon: PinterestIcon },
];

export function FooterOffices() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
      {footerOffices.map(({ title, name, address }) => (
        <div key={title} className="flex flex-col gap-1">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white">{t(title)}</p>
          <p className="text-sm font-semibold text-white">{name}</p>
          <p className="whitespace-nowrap text-sm text-white">{address}</p>
        </div>
      ))}

      <div className="flex items-start gap-2 sm:justify-end">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
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
