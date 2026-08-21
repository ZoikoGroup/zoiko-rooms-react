"use client";

import React, { useState } from "react";

interface CookieSetting {
  id: string;
  code: string;
  title: string;
  description: string;
  type: "always_active" | "toggle";
  activeText: string;
  inactiveText: string;
  defaultChecked?: boolean;
  disabled?: boolean;
}

interface PreferenceCategory {
  id: string;
  title: string;
  subtitle: string;
  iconSrc: string;
  badgeText: string;
  badgeType: "always_active" | "on" | "off" | "off_signal";
  settings: CookieSetting[];
}

const categoriesData: PreferenceCategory[] = [
  {
    id: "essential",
    title: "Essential & Security",
    subtitle: "Needed for the service and security you've requested",
    iconSrc: "/icons/lock.png",
    badgeText: "ALWAYS ACTIVE",
    badgeType: "always_active",
    settings: [
      {
        id: "ess-auth",
        code: "ESS-AUTH",
        title: "Sign-in and session security",
        description:
          "Keeps you signed in and protects your session — needed for the service you've requested.",
        type: "always_active",
        activeText: "Always active",
        inactiveText: "Always active",
      },
      {
        id: "ess-sec",
        code: "ESS-SEC",
        title: "Fraud, abuse and platform security",
        description:
          "Detects fraud and abuse and keeps the platform working correctly. Used only where genuinely necessary.",
        type: "always_active",
        activeText: "Always active",
        inactiveText: "Always active",
      },
    ],
  },
  {
    id: "preferences",
    title: "Preferences & Functionality",
    subtitle: "Remembers your choices and display settings",
    iconSrc: "/icons/oneside.png",
    badgeText: "ON",
    badgeType: "on",
    settings: [
      {
        id: "fnc-pref",
        code: "FNC-PREF",
        title: "Remember choices and interface settings",
        description:
          "Under UK rules, this narrow appearance use can operate without asking first. You can turn it off at any time — this is an objection, not a consent choice.",
        type: "toggle",
        activeText: "On — object",
        inactiveText: "Off — your choice",
        defaultChecked: true,
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Measurement",
    subtitle: "Aggregate service measurement and experiments",
    iconSrc: "/icons/oneside.png",
    badgeText: "ON",
    badgeType: "on",
    settings: [
      {
        id: "ana-agg",
        code: "ANA-AGG",
        title: "Aggregate service analytics",
        description:
          "Statistical-purposes exception: individual-level data isn't retained beyond aggregation, and it's never used to profile or target you. Free to turn off.",
        type: "toggle",
        activeText: "On — object",
        inactiveText: "Off — your choice",
        defaultChecked: true,
      },
      {
        id: "ana-exp",
        code: "ANA-EXP",
        title: "Product experiments / A-B testing",
        description:
          "Consent-gated — off until you turn it on. Helps us test product changes before wider release.",
        type: "toggle",
        activeText: "On — your choice",
        inactiveText: "Off — your choice",
        defaultChecked: false,
      },
    ],
  },
  {
    id: "personalisation",
    title: "Personalisation",
    subtitle: "Behaviour-based content or recommendation adaptation",
    iconSrc: "/icons/circle.png",
    badgeText: "OFF",
    badgeType: "off",
    settings: [
      {
        id: "per-rec",
        code: "PER-REC",
        title: "Behavioural personalisation",
        description:
          "Adapts recommendations based on your activity beyond simple settings you've explicitly set. Off until you permit it.",
        type: "toggle",
        activeText: "On — your choice",
        inactiveText: "Off — your choice",
        defaultChecked: false,
      },
    ],
  },
  {
    id: "advertising",
    title: "Advertising & Attribution",
    subtitle: "Ad targeting, conversion matching and remarketing",
    iconSrc: "/icons/danger.png",
    badgeText: "OFF — SIGNAL",
    badgeType: "off_signal",
    settings: [
      {
        id: "ads-pers",
        code: "ADS-PERS",
        title: "Personalised / targeted advertising",
        description:
          "Blocked because Global Privacy Control is active in this browser. We won't turn this back on while that signal is detected.",
        type: "toggle",
        activeText: "Off — signal",
        inactiveText: "Off — signal",
        defaultChecked: false,
        disabled: true,
      },
      {
        id: "ads-meas",
        code: "ADS-MEAS",
        title: "Advertising measurement / attribution",
        description:
          "Distinct from service analytics. Also blocked while your privacy signal is active.",
        type: "toggle",
        activeText: "Off — signal",
        inactiveText: "Off — signal",
        defaultChecked: false,
        disabled: true,
      },
    ],
  },
  {
    id: "external",
    title: "External Media & Integrations",
    subtitle: "Embedded maps, video and social widgets",
    iconSrc: "/icons/circle.png",
    badgeText: "OFF",
    badgeType: "off",
    settings: [
      {
        id: "ext-emb",
        code: "EXT-EMB",
        title: "Third-party embeds & integrations",
        description:
          "Maps and similar embeds load only once permitted, or the specific time you request that content.",
        type: "toggle",
        activeText: "On — your choice",
        inactiveText: "Off — your choice",
        defaultChecked: false,
      },
      {
        id: "soc-shr",
        code: "SOC-SHR",
        title: "Social sharing / platform integration",
        description:
          "Off unless you explicitly start a one-time share flow with compliant isolation.",
        type: "toggle",
        activeText: "On — your choice",
        inactiveText: "Off — your choice",
        defaultChecked: false,
      },
    ],
  },
];

export default function CookiePreferencesList() {
  const [toggles, setToggles] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    categoriesData.forEach((cat) => {
      cat.settings.forEach((s) => {
        if (s.type === "toggle") {
          initial[s.id] = s.defaultChecked ?? false;
        }
      });
    });
    return initial;
  });

  const handleToggle = (id: string, disabled?: boolean) => {
    if (disabled) return;
    setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getHeaderBadgeClass = (type: PreferenceCategory["badgeType"]) => {
    switch (type) {
      case "always_active":
        return "bg-[#EAE5D9] text-[#7A7467]";
      case "on":
        return "bg-[#E2F0E8] text-[#2D6A4F]";
      case "off":
        return "bg-[#EAE5D9] text-[#7A7467]";
      case "off_signal":
        return "bg-[#F3E5D8] text-[#A6532B]";
    }
  };

  return (
    <section className="w-full bg-[#FBF8F3] text-[#14213D] py-8 px-4 sm:px-8 md:px-12 lg:px-16 font-sans antialiased">
      <div className="max-w-4xl mx-auto space-y-6">
        {categoriesData.map((category) => (
          <div
            key={category.id}
            className="bg-[#FFFDF9] rounded-2xl border border-[#EAE6DF] shadow-[0_6px_18px_-10px_rgba(36,28,20,0.14),0_1px_2px_0px_rgba(36,28,20,0.04)] overflow-hidden"
          >
            {/* Category Header */}
            <div className="p-5 sm:p-6 flex items-center justify-between gap-4 border-b border-[#EAE6DF]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F4EFE6] flex items-center justify-center flex-shrink-0">
                  <img
                    src={category.iconSrc}
                    alt={`${category.title} icon`}
                    className="w-[12px] h-[12px] object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#101C33]">
                    {category.title}
                  </h3>
                  <p className="text-xs text-[#7A7467] font-normal">
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Top Badge */}
              <span
                className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-md tracking-wider flex-shrink-0 uppercase ${getHeaderBadgeClass(
                  category.badgeType,
                )}`}
              >
                {category.badgeText}
              </span>
            </div>

            {/* Category Settings List */}
            <div className="divide-y divide-dashed divide-[#EAE6DF] px-5 sm:px-6">
              {category.settings.map((setting) => {
                const isChecked = toggles[setting.id];
                const currentStatusText = isChecked
                  ? setting.activeText
                  : setting.inactiveText;

                return (
                  <div key={setting.id} className="py-5 space-y-2">
                    {/* Code Tag */}
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#A39B8B] block uppercase">
                      {setting.code}
                    </span>

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                      {/* Title & Description */}
                      <div className="space-y-1 max-w-2xl">
                        <h4 className="text-xs sm:text-sm font-bold text-[#101C33]">
                          {setting.title}
                        </h4>
                        <p className="text-xs text-[#7A7467] font-normal leading-relaxed">
                          {setting.description}
                        </p>
                      </div>

                      {/* Control Indicator / Toggle */}
                      <div className="flex-shrink-0 self-start sm:self-auto">
                        {setting.type === "always_active" ? (
                          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#2D6A4F]">
                            <img
                              src="/icons/lock.png"
                              alt="Lock icon"
                              className="w-[12px] h-[12px] object-contain"
                            />
                            <span>{setting.activeText}</span>
                          </div>
                        ) : (
                          <div className="flex flex-col items-end gap-1.5">
                            {/* Toggle Button */}
                            <button
                              type="button"
                              role="switch"
                              aria-checked={isChecked}
                              disabled={setting.disabled}
                              onClick={() =>
                                handleToggle(setting.id, setting.disabled)
                              }
                              className={`relative inline-flex h-6 w-11 flex-shrink-0 transition-colors duration-200 ease-in-out rounded-full border-2 border-transparent cursor-pointer ${
                                setting.disabled
                                  ? "bg-[#EAE6DF] opacity-60 cursor-not-allowed"
                                  : isChecked
                                    ? "bg-[#C84A32]"
                                    : "bg-[#EAE2D5]"
                              }`}
                            >
                              <span
                                className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-xs transform ring-0 transition duration-200 ease-in-out ${
                                  isChecked ? "translate-x-5" : "translate-x-0"
                                }`}
                              />
                            </button>

                            {/* Dynamic Status Text Below Switch */}
                            <span
                              className={`text-xs font-mono font-bold tracking-wide ${
                                setting.disabled
                                  ? "text-[#A6532B]"
                                  : isChecked
                                    ? "text-[#C84A32]"
                                    : "text-[#8C8275]"
                              }`}
                            >
                              {currentStatusText}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Bottom Scope Note Box */}
        <div className="bg-[#EFE2C8] border border-[#E3DCCE] rounded-2xl p-5 sm:px-6 sm:py-5">
          <p className="text-xs sm:text-sm text-[#5E5445] font-normal leading-relaxed">
            <strong className="font-bold text-[#5E5445]">
              Where this applies.
            </strong>{" "}
            Preferences are saved for this browser and device. If you&apos;re
            signed in on a device or browser that supports account sync, we
            apply the more privacy-protective setting where the two differ,
            rather than silently overwriting either one.
          </p>
        </div>
      </div>
    </section>
  );
}
