"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Compass,
  Heart,
  Settings,
  Sparkles,
  Trees,
} from "lucide-react";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { PLACES } from "@/data/places";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHydrated = useIsHydrated();

  const language = useIesiriStore((s) => s.language);
  const setLanguage = useIesiriStore((s) => s.setLanguage);
  const favorites = useIesiriStore((s) => s.favorites);

  const t = getTranslation(language);
  const favCount = isHydrated ? favorites.length : 0;

  const handleRandomPlace = () => {
    const randomIndex = Math.floor(Math.random() * PLACES.length);
    const randomPlace = PLACES[randomIndex];
    router.push(`/place/${randomPlace.id}`);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-background/95 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-transform active:scale-95"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/20 transition-all group-hover:scale-105 group-hover:bg-primary/90">
            <Trees className="size-5" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-heading text-lg font-bold tracking-tight text-foreground">
                Ieșiri<span className="text-primary font-black">.md</span>
              </span>
              <Badge
                variant="outline"
                className="hidden border-primary/30 bg-primary/5 text-[10px] font-semibold text-primary sm:inline-flex px-1.5 py-0"
              >
                Chișinău
              </Badge>
            </div>
            <span className="hidden text-[11px] text-muted-foreground sm:inline-block leading-none">
              {t.app.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1">
          <Link href="/">
            <Button
              variant={pathname === "/" ? "secondary" : "ghost"}
              size="sm"
              className="gap-1.5 text-xs font-medium"
            >
              <Compass className="size-3.5" />
              <span>{t.nav.explore}</span>
            </Button>
          </Link>
          <Link href="/favorites">
            <Button
              variant={pathname === "/favorites" ? "secondary" : "ghost"}
              size="sm"
              className="gap-1.5 text-xs font-medium relative"
            >
              <Heart
                className={`size-3.5 ${
                  favCount > 0 ? "fill-rose-500 text-rose-500" : ""
                }`}
              />
              <span>{t.nav.favorites}</span>
              {favCount > 0 && (
                <span className="ml-0.5 inline-flex items-center justify-center rounded-full bg-primary/15 px-1.5 py-0.2 text-[10px] font-bold text-primary">
                  {favCount}
                </span>
              )}
            </Button>
          </Link>
          <Link href="/settings">
            <Button
              variant={pathname === "/settings" ? "secondary" : "ghost"}
              size="sm"
              className="gap-1.5 text-xs font-medium"
            >
              <Settings className="size-3.5" />
              <span>{t.nav.settings}</span>
            </Button>
          </Link>
        </nav>

        {/* Right actions: Random pick + Language toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleRandomPlace}
            className="hidden sm:inline-flex gap-1.5 text-xs border-dashed hover:border-primary hover:text-primary transition-colors"
            title={t.nav.random}
          >
            <Sparkles className="size-3.5 text-accent" />
            <span className="hidden lg:inline">{t.nav.random}</span>
            <span className="lg:hidden">Surpriză</span>
          </Button>

          {/* Quick Language Toggle */}
          <div className="flex items-center rounded-lg border border-border bg-muted/40 p-0.5">
            <button
              onClick={() => setLanguage("ro")}
              type="button"
              className={`rounded-md px-2 py-1 text-xs font-semibold transition-all ${
                language === "ro"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              RO
            </button>
            <button
              onClick={() => setLanguage("ru")}
              type="button"
              className={`rounded-md px-2 py-1 text-xs font-semibold transition-all ${
                language === "ru"
                  ? "bg-card text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              RU
            </button>
          </div>

          {/* Mobile Favorites icon button */}
          <Link href="/favorites" className="md:hidden">
            <Button
              variant={pathname === "/favorites" ? "secondary" : "ghost"}
              size="icon"
              className="relative size-8"
              aria-label={t.nav.favorites}
            >
              <Heart
                className={`size-4 ${
                  favCount > 0 ? "fill-rose-500 text-rose-500" : ""
                }`}
              />
              {favCount > 0 && (
                <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-primary-foreground">
                  {favCount}
                </span>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
