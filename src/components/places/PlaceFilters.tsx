"use client";

import React from "react";
import { Search, X, SlidersHorizontal, MapPin, Tag, Sparkles } from "lucide-react";
import { ALL_CATEGORIES, ALL_ZONES, POPULAR_TAGS } from "@/data/places";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { PlaceCategory, Zone } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlaceFiltersProps {
  totalResults: number;
}

export function PlaceFilters({ totalResults }: PlaceFiltersProps) {
  const language = useIesiriStore((s) => s.language);
  const searchQuery = useIesiriStore((s) => s.searchQuery);
  const setSearchQuery = useIesiriStore((s) => s.setSearchQuery);
  const selectedCategory = useIesiriStore((s) => s.selectedCategory);
  const setSelectedCategory = useIesiriStore((s) => s.setSelectedCategory);
  const selectedZone = useIesiriStore((s) => s.selectedZone);
  const setSelectedZone = useIesiriStore((s) => s.setSelectedZone);
  const selectedTag = useIesiriStore((s) => s.selectedTag);
  const setSelectedTag = useIesiriStore((s) => s.setSelectedTag);
  const resetFilters = useIesiriStore((s) => s.resetFilters);

  const t = getTranslation(language);

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    selectedCategory !== "all" ||
    selectedZone !== "all" ||
    selectedTag !== "all";

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t.hero.searchPlaceholder}
          className="h-11 w-full pl-10 pr-10 rounded-xl bg-card border-border/80 text-sm shadow-xs focus-visible:ring-primary"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Categories Tabs / Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
        {ALL_CATEGORIES.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as PlaceCategory | "all")}
              className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20"
                  : "bg-card border border-border/80 text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {cat.label[language]}
            </button>
          );
        })}
      </div>

      {/* Zone Filters with MapPin */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <span className="shrink-0 text-muted-foreground flex items-center gap-1 font-medium pl-0.5">
          <MapPin className="size-3.5 text-primary" />
          <span>{t.card.zone}:</span>
        </span>
        <button
          onClick={() => setSelectedZone("all")}
          className={`shrink-0 rounded-lg px-2.5 py-1 transition-all ${
            selectedZone === "all"
              ? "bg-secondary text-secondary-foreground font-bold shadow-xs"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
          }`}
        >
          {t.hero.allZones}
        </button>
        {ALL_ZONES.map((zone) => {
          const isActive = selectedZone === zone;
          return (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone as Zone)}
              className={`shrink-0 rounded-lg px-2.5 py-1 transition-all ${
                isActive
                  ? "bg-primary/15 text-primary font-bold border border-primary/30"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
              }`}
            >
              {zone}
            </button>
          );
        })}
      </div>

      {/* Popular Tag Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs scrollbar-none">
        <span className="shrink-0 text-muted-foreground flex items-center gap-1 font-medium pl-0.5">
          <Tag className="size-3 text-accent" />
          <span>Tag:</span>
        </span>
        <button
          onClick={() => setSelectedTag("all")}
          className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] transition-all ${
            selectedTag === "all"
              ? "bg-foreground text-background font-semibold"
              : "bg-muted/50 text-muted-foreground hover:text-foreground"
          }`}
        >
          {t.hero.allTags}
        </button>
        {POPULAR_TAGS.map((tag) => {
          const isActive = selectedTag === tag.id;
          return (
            <button
              key={tag.id}
              onClick={() =>
                setSelectedTag(selectedTag === tag.id ? "all" : tag.id)
              }
              className={`shrink-0 rounded-md px-2 py-0.5 text-[11px] font-medium transition-all ${
                isActive
                  ? "bg-accent text-accent-foreground font-bold shadow-xs"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              #{tag.label[language]}
            </button>
          );
        })}
      </div>

      {/* Results Header & Reset filters */}
      <div className="flex items-center justify-between pt-1 border-t border-border/50 text-xs">
        <span className="font-semibold text-foreground/80">
          {t.hero.resultsCount(totalResults)}
        </span>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={resetFilters}
            className="h-7 text-xs text-muted-foreground hover:text-destructive gap-1 px-2"
          >
            <X className="size-3" />
            <span>{t.hero.resetFilters}</span>
          </Button>
        )}
      </div>
    </div>
  );
}
