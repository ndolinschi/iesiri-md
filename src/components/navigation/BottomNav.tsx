"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Compass, Heart, Settings, Sparkles } from "lucide-react";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { PLACES } from "@/data/places";
import { useIsHydrated } from "@/hooks/useIsHydrated";

export function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();
  const isHydrated = useIsHydrated();

  const language = useIesiriStore((s) => s.language);
  const favorites = useIesiriStore((s) => s.favorites);
  const t = getTranslation(language);

  const favCount = isHydrated ? favorites.length : 0;

  const handleRandom = () => {
    const randomPlace = PLACES[Math.floor(Math.random() * PLACES.length)];
    router.push(`/place/${randomPlace.id}`);
  };

  const navItems = [
    {
      href: "/",
      label: t.nav.explore,
      icon: Compass,
      isActive: pathname === "/",
    },
    {
      href: "/favorites",
      label: t.nav.favorites,
      icon: Heart,
      isActive: pathname === "/favorites",
      badge: favCount > 0 ? favCount : null,
    },
    {
      href: "/settings",
      label: t.nav.settings,
      icon: Settings,
      isActive: pathname === "/settings",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 block border-t border-border/80 bg-background/95 backdrop-blur-lg md:hidden">
      <div className="grid h-16 grid-cols-4 items-center px-2">
        {navItems.slice(0, 2).map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1 text-center transition-all active:scale-95 ${
                item.isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div className="relative">
                <Icon
                  className={`size-5 ${
                    item.href === "/favorites" && favCount > 0 && item.isActive
                      ? "fill-rose-500 text-rose-500"
                      : ""
                  }`}
                />
                {item.badge && (
                  <span className="absolute -top-1.5 -right-2.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-extrabold text-primary-foreground">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-[11px] leading-tight">{item.label}</span>
            </Link>
          );
        })}

        {/* Quick randomizer button in bottom bar */}
        <button
          onClick={handleRandom}
          type="button"
          className="flex flex-col items-center justify-center gap-0.5 py-1 text-center text-muted-foreground transition-all active:scale-95 hover:text-foreground"
        >
          <Sparkles className="size-5 text-accent" />
          <span className="text-[11px] leading-tight">
            {language === "ro" ? "Surpriză" : "Случайно"}
          </span>
        </button>

        {/* Settings tab */}
        {navItems.slice(2).map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1 text-center transition-all active:scale-95 ${
                item.isActive
                  ? "text-primary font-bold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className="size-5" />
              <span className="text-[11px] leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
