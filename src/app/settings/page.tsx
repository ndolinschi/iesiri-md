"use client";

import React from "react";
import {
  Globe2,
  Trash2,
  Info,
  Check,
  Sparkles,
  Heart,
  ShieldCheck,
} from "lucide-react";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { GsapReveal } from "@/components/common/GsapReveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SettingsPage() {
  const isHydrated = useIsHydrated();
  const language = useIesiriStore((s) => s.language);
  const setLanguage = useIesiriStore((s) => s.setLanguage);
  const favorites = useIesiriStore((s) => s.favorites);
  const clearFavorites = useIesiriStore((s) => s.clearFavorites);

  const t = getTranslation(language);
  const favCount = isHydrated ? favorites.length : 0;

  const handleClearFavorites = () => {
    if (window.confirm(t.favorites.clearConfirm)) {
      clearFavorites();
      toast.success(t.settings.favoritesCleared);
    }
  };

  return (
    <div className="container mx-auto max-w-3xl px-4 sm:px-6">
      {/* Page Header */}
      <section className="mb-6 sm:mb-8">
        <GsapReveal delay={0.05}>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t.settings.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {t.settings.subtitle}
          </p>
        </GsapReveal>
      </section>

      <GsapReveal delay={0.1} className="space-y-6">
        {/* Language Selection Card */}
        <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Globe2 className="size-4" />
            </div>
            <h2 className="font-heading text-base font-bold text-foreground">
              {t.settings.languageSection}
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            {t.settings.languageDescription}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setLanguage("ro");
                toast.success("Limba a fost schimbată în Română");
              }}
              className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                language === "ro"
                  ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground font-semibold"
                  : "border-border bg-card/50 text-muted-foreground hover:border-border hover:bg-muted/40"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">
                  {t.settings.romanian}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Implicit / Default
                </span>
              </div>
              {language === "ro" && (
                <div className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5 stroke-[3]" />
                </div>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                setLanguage("ru");
                toast.success("Язык изменен на Русский");
              }}
              className={`flex items-center justify-between rounded-xl border p-3.5 text-left transition-all ${
                language === "ru"
                  ? "border-primary bg-primary/5 ring-1 ring-primary text-foreground font-semibold"
                  : "border-border bg-card/50 text-muted-foreground hover:border-border hover:bg-muted/40"
              }`}
            >
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground">
                  {t.settings.russian}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  Полная локализация
                </span>
              </div>
              {language === "ru" && (
                <div className="flex size-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-3.5 stroke-[3]" />
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Data & Storage Card */}
        <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-1.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
              <Heart className="size-4 fill-rose-500/30" />
            </div>
            <h2 className="font-heading text-base font-bold text-foreground">
              {t.settings.dataSection}
            </h2>
          </div>
          <p className="text-xs text-muted-foreground mb-4">
            {t.settings.savedCount(favCount)}
          </p>

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-muted-foreground">
              Salvat local în browser (localStorage)
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={favCount === 0}
              onClick={handleClearFavorites}
              className="gap-1.5 text-xs text-muted-foreground hover:text-destructive hover:border-destructive/40"
            >
              <Trash2 className="size-3.5" />
              <span>{t.settings.clearFavoritesBtn}</span>
            </Button>
          </div>
        </div>

        {/* 3 Weekend Rules Card */}
        <div className="rounded-2xl border border-accent/40 bg-accent/5 p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2 text-accent-foreground font-heading text-sm font-bold mb-3">
            <Sparkles className="size-4 text-accent" />
            <span>{t.settings.weekendTipsTitle}</span>
          </div>
          <div className="space-y-2.5 text-xs sm:text-sm text-foreground/85 leading-relaxed">
            <p className="rounded-lg bg-background/60 p-2.5 border border-accent/20">
              {t.settings.tip1}
            </p>
            <p className="rounded-lg bg-background/60 p-2.5 border border-accent/20">
              {t.settings.tip2}
            </p>
            <p className="rounded-lg bg-background/60 p-2.5 border border-accent/20">
              {t.settings.tip3}
            </p>
          </div>
        </div>

        {/* About Card */}
        <div className="rounded-2xl border border-border/80 bg-card p-5 sm:p-6 shadow-xs">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Info className="size-4" />
            </div>
            <h2 className="font-heading text-base font-bold text-foreground">
              {t.settings.aboutSection}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t.settings.aboutText}
          </p>

          <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-primary" />
              Client-only MVP • Next.js 16
            </span>
            <span>Chișinău, Moldova</span>
          </div>
        </div>
      </GsapReveal>
    </div>
  );
}
