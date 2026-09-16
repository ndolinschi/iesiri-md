"use client";

import React, { useMemo } from "react";
import { Sparkles, SearchX } from "lucide-react";
import { PLACES } from "@/data/places";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { PlaceCard } from "@/components/places/PlaceCard";
import { PlaceFilters } from "@/components/places/PlaceFilters";
import { GsapReveal } from "@/components/common/GsapReveal";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const language = useIesiriStore((s) => s.language);
  const searchQuery = useIesiriStore((s) => s.searchQuery);
  const selectedCategory = useIesiriStore((s) => s.selectedCategory);
  const selectedZone = useIesiriStore((s) => s.selectedZone);
  const selectedTag = useIesiriStore((s) => s.selectedTag);
  const resetFilters = useIesiriStore((s) => s.resetFilters);

  const t = getTranslation(language);

  // Filter places
  const filteredPlaces = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return PLACES.filter((place) => {
      // Category match
      if (selectedCategory !== "all" && place.category !== selectedCategory) {
        return false;
      }

      // Zone match
      if (selectedZone !== "all" && place.zone !== selectedZone) {
        return false;
      }

      // Tag match
      if (selectedTag !== "all" && !place.tags.includes(selectedTag)) {
        return false;
      }

      // Search query match
      if (query) {
        const nameRo = place.name.ro.toLowerCase();
        const nameRu = place.name.ru.toLowerCase();
        const descRo = place.shortDescription.ro.toLowerCase();
        const descRu = place.shortDescription.ru.toLowerCase();
        const address = place.address.toLowerCase();
        const zone = place.zone.toLowerCase();
        const hasTagMatch = place.tags.some((t) => t.toLowerCase().includes(query));

        const matches =
          nameRo.includes(query) ||
          nameRu.includes(query) ||
          descRo.includes(query) ||
          descRu.includes(query) ||
          address.includes(query) ||
          zone.includes(query) ||
          hasTagMatch;

        if (!matches) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedZone, selectedTag]);

  const filterTriggerKey = `${selectedCategory}-${selectedZone}-${selectedTag}-${searchQuery}`;

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      {/* Hero Section */}
      <section className="mb-6 sm:mb-8 text-center sm:text-left">
        <GsapReveal delay={0.1}>
          <div className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
            <Sparkles className="size-3.5 text-accent" />
            <span>{t.app.badge}</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {t.hero.title}
          </h1>
          <p className="mt-2 max-w-2xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            {t.hero.subtitle}
          </p>
        </GsapReveal>
      </section>

      {/* Filter Bar */}
      <section className="mb-6 rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 backdrop-blur-xs shadow-xs">
        <PlaceFilters totalResults={filteredPlaces.length} />
      </section>

      {/* Places Grid */}
      <section>
        {filteredPlaces.length > 0 ? (
          <GsapReveal
            triggerKey={filterTriggerKey}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </GsapReveal>
        ) : (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-16 px-4 text-center">
            <div className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground mb-4">
              <SearchX className="size-7" />
            </div>
            <h3 className="font-heading text-base font-bold text-foreground">
              {t.hero.noResults}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground max-w-sm">
              Încearcă să schimbi sectorul sau să ștergi cuvântul căutat pentru a vedea toate ideile.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={resetFilters}
              className="mt-5 text-xs font-medium"
            >
              {t.hero.resetFilters}
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
