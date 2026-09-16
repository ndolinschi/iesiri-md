"use client";

import React from "react";
import Link from "next/link";
import { Heart, Compass, Trash2 } from "lucide-react";
import { PLACES } from "@/data/places";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { PlaceCard } from "@/components/places/PlaceCard";
import { GsapReveal } from "@/components/common/GsapReveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function FavoritesPage() {
  const isHydrated = useIsHydrated();
  const language = useIesiriStore((s) => s.language);
  const favorites = useIesiriStore((s) => s.favorites);
  const clearFavorites = useIesiriStore((s) => s.clearFavorites);

  const t = getTranslation(language);

  // Filter PLACES to only those saved in favorites
  const savedPlaces = isHydrated
    ? PLACES.filter((place) => favorites.includes(place.id))
    : [];

  const handleClearAll = () => {
    if (window.confirm(t.favorites.clearConfirm)) {
      clearFavorites();
      toast.info(t.settings.favoritesCleared);
    }
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      {/* Page Header */}
      <section className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <GsapReveal delay={0.05}>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400 mb-2">
            <Heart className="size-3.5 fill-rose-500" />
            <span>
              {savedPlaces.length}{" "}
              {language === "ro" ? "salvate" : "сохранено"}
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            {t.favorites.title}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl">
            {t.favorites.subtitle}
          </p>
        </GsapReveal>

        {savedPlaces.length > 0 && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleClearAll}
            className="self-start sm:self-auto gap-1.5 text-xs text-muted-foreground hover:text-destructive hover:border-destructive/40"
          >
            <Trash2 className="size-3.5" />
            <span>{t.favorites.clearAll}</span>
          </Button>
        )}
      </section>

      {/* Content */}
      <section>
        {savedPlaces.length > 0 ? (
          <GsapReveal
            triggerKey={favorites.length}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {savedPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </GsapReveal>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border/80 bg-card/40 py-16 px-4 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-rose-500/10 text-rose-500 mb-4">
              <Heart className="size-8" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {t.favorites.emptyTitle}
            </h3>
            <p className="mt-1.5 max-w-md text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {t.favorites.emptyDescription}
            </p>
            <Link href="/" className="mt-6">
              <Button className="gap-2 text-xs font-semibold">
                <Compass className="size-4" />
                <span>{t.favorites.exploreCta}</span>
              </Button>
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
