"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Heart, Clock, MapPin, Sparkles, ChevronRight } from "lucide-react";
import { Place } from "@/types";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { PlaceBanner } from "./PlaceBanner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const heartRef = useRef<HTMLButtonElement>(null);
  const isHydrated = useIsHydrated();

  const language = useIesiriStore((s) => s.language);
  const isFav = useIesiriStore((s) => s.isFavorite(place.id));
  const toggleFavorite = useIesiriStore((s) => s.toggleFavorite);

  const t = getTranslation(language);
  const favoriteActive = isHydrated ? isFav : false;

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // GSAP micro-animation on heart
    if (heartRef.current) {
      gsap.fromTo(
        heartRef.current,
        { scale: 0.8 },
        { scale: 1.25, duration: 0.15, yoyo: true, repeat: 1, ease: "back.out(2)" }
      );
    }

    toggleFavorite(place.id);
  };

  const name = place.name[language] || place.name.ro;
  const shortDesc = place.shortDescription[language] || place.shortDescription.ro;
  const duration = place.duration ? place.duration[language] : null;
  const localTip = place.localTip ? place.localTip[language] : null;

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      {/* Banner / Header Visual */}
      <div className="relative">
        <PlaceBanner category={place.category} seedTitle={place.id} />

        {/* Floating Sector & Price Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge
            variant="secondary"
            className="bg-background/85 backdrop-blur-md text-foreground font-semibold shadow-xs text-[11px] border border-white/20"
          >
            <MapPin className="size-3 text-primary inline mr-1" />
            {place.zone}
          </Badge>

          {place.priceLevel === "gratis" ? (
            <Badge className="bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-[10px] tracking-wide uppercase px-2 shadow-xs">
              {t.price.gratis}
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="bg-background/80 backdrop-blur-md text-amber-700 dark:text-amber-300 border-amber-500/40 text-[10px] font-semibold"
            >
              {t.price.ieftin}
            </Badge>
          )}
        </div>

        {/* Favorite toggle button */}
        <button
          ref={heartRef}
          onClick={handleFavoriteClick}
          aria-label={
            favoriteActive ? t.card.removeFromFavorites : t.card.addToFavorites
          }
          className={`absolute top-3 right-3 z-20 flex size-9 items-center justify-center rounded-full backdrop-blur-md transition-all active:scale-90 ${
            favoriteActive
              ? "bg-rose-50 text-rose-600 shadow-md ring-1 ring-rose-300 dark:bg-rose-950/80 dark:text-rose-400"
              : "bg-black/30 text-white hover:bg-black/50 hover:scale-105 ring-1 ring-white/20"
          }`}
        >
          <Heart
            className={`size-4.5 transition-colors ${
              favoriteActive ? "fill-rose-500 text-rose-500" : ""
            }`}
          />
        </button>
      </div>

      {/* Card Content Body */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-1.5">
          <span className="capitalize font-medium text-primary">
            {t.categories[place.category] || place.category}
          </span>
          {duration && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="size-3" />
                {duration}
              </span>
            </>
          )}
        </div>

        {/* Place Title */}
        <Link href={`/place/${place.id}`} className="group-hover:text-primary transition-colors">
          <h3 className="font-heading text-lg font-bold tracking-tight text-foreground line-clamp-1">
            {name}
          </h3>
        </Link>

        {/* Short Description */}
        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {shortDesc}
        </p>

        {/* Insider Tip Callout */}
        {localTip && (
          <div className="mt-3 flex items-start gap-1.5 rounded-lg bg-muted/60 p-2 text-[11px] text-foreground/80">
            <Sparkles className="size-3.5 shrink-0 text-accent mt-0.5" />
            <span className="line-clamp-1 font-medium">{localTip}</span>
          </div>
        )}

        {/* Tag pills */}
        <div className="mt-3.5 flex flex-wrap gap-1">
          {place.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-secondary/70 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground"
            >
              #{tag}
            </span>
          ))}
          {place.tags.length > 3 && (
            <span className="text-[10px] text-muted-foreground self-center">
              +{place.tags.length - 3}
            </span>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-4 pt-3 border-t border-border/60 flex items-center justify-between">
          <span className="text-[11px] text-muted-foreground truncate max-w-[180px]">
            {place.address}
          </span>
          <Link href={`/place/${place.id}`}>
            <Button
              variant="ghost"
              size="sm"
              className="gap-1 text-xs font-semibold text-primary hover:text-primary hover:bg-primary/10 -mr-2"
            >
              <span>{t.card.viewDetails}</span>
              <ChevronRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
