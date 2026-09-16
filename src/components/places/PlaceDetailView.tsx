"use client";

import React, { useRef } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Heart,
  Share2,
  Clock,
  MapPin,
  Sparkles,
  Calendar,
  Compass,
  CheckCircle2,
  ExternalLink,
  Tag,
} from "lucide-react";
import { Place } from "@/types";
import { PLACES } from "@/data/places";
import { useIesiriStore } from "@/store/useIesiriStore";
import { getTranslation } from "@/data/i18n";
import { useIsHydrated } from "@/hooks/useIsHydrated";
import { PlaceBanner } from "./PlaceBanner";
import { PlaceCard } from "./PlaceCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import gsap from "gsap";
import { GsapReveal } from "@/components/common/GsapReveal";

interface PlaceDetailViewProps {
  place: Place;
}

export function PlaceDetailView({ place }: PlaceDetailViewProps) {
  const heartRef = useRef<HTMLButtonElement>(null);
  const isHydrated = useIsHydrated();

  const language = useIesiriStore((s) => s.language);
  const isFav = useIesiriStore((s) => s.isFavorite(place.id));
  const toggleFavorite = useIesiriStore((s) => s.toggleFavorite);

  const t = getTranslation(language);
  const favoriteActive = isHydrated ? isFav : false;

  const handleFavoriteClick = () => {
    if (heartRef.current) {
      gsap.fromTo(
        heartRef.current,
        { scale: 0.8 },
        { scale: 1.25, duration: 0.15, yoyo: true, repeat: 1, ease: "back.out(2)" }
      );
    }
    toggleFavorite(place.id);
    if (!favoriteActive) {
      toast.success(t.detail.savedInFavorites);
    }
  };

  const handleShare = async () => {
    if (typeof window !== "undefined") {
      try {
        if (navigator.share) {
          await navigator.share({
            title: place.name[language],
            text: place.shortDescription[language],
            url: window.location.href,
          });
        } else {
          await navigator.clipboard.writeText(window.location.href);
          toast.success(t.detail.copiedLink);
        }
      } catch (e) {
        // user aborted share or clipboard error
      }
    }
  };

  const name = place.name[language] || place.name.ro;
  const shortDesc = place.shortDescription[language] || place.shortDescription.ro;
  const fullDesc = place.fullDescription[language] || place.fullDescription.ro;
  const duration = place.duration ? place.duration[language] : null;
  const bestTime = place.bestTime ? place.bestTime[language] : null;
  const localTip = place.localTip ? place.localTip[language] : null;
  const highlights = place.highlights[language] || place.highlights.ro;

  // Related places: places in the same zone or category, excluding current
  const relatedPlaces = PLACES.filter(
    (p) =>
      p.id !== place.id &&
      (p.zone === place.zone || p.category === place.category)
  ).slice(0, 3);

  // Maps URL query for Chișinău
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${place.name.ro}, ${place.address}, Chișinău, Moldova`
  )}`;

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6">
      {/* Back button */}
      <div className="mb-4">
        <Link href="/">
          <Button
            variant="ghost"
            size="sm"
            className="gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground -ml-2"
          >
            <ArrowLeft className="size-4" />
            <span>{t.detail.backToList}</span>
          </Button>
        </Link>
      </div>

      <GsapReveal>
        {/* Main Place Card Container */}
        <div className="overflow-hidden rounded-3xl border border-border/80 bg-card shadow-sm">
          {/* Visual Banner Header */}
          <div className="relative">
            <PlaceBanner
              category={place.category}
              seedTitle={place.id}
              className="h-48 sm:h-64"
            />

            {/* Badges Over Banner */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
              <Badge
                variant="secondary"
                className="bg-background/90 backdrop-blur-md text-foreground font-semibold px-2.5 py-1 text-xs border border-white/20"
              >
                <MapPin className="size-3.5 text-primary inline mr-1" />
                {place.zone}
              </Badge>

              {place.priceLevel === "gratis" ? (
                <Badge className="bg-emerald-600 text-white font-bold px-2.5 py-1 text-xs uppercase tracking-wide">
                  {t.price.gratis}
                </Badge>
              ) : (
                <Badge
                  variant="outline"
                  className="bg-background/90 backdrop-blur-md text-amber-700 dark:text-amber-300 border-amber-500/50 font-bold px-2.5 py-1 text-xs"
                >
                  {t.price.ieftin}
                </Badge>
              )}
            </div>

            {/* Actions Over Banner */}
            <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
              <Button
                variant="outline"
                size="icon"
                onClick={handleShare}
                className="size-9 rounded-full bg-background/80 backdrop-blur-md border-white/20 hover:bg-background"
                title={t.detail.sharePlace}
              >
                <Share2 className="size-4 text-foreground" />
              </Button>

              <button
                ref={heartRef}
                onClick={handleFavoriteClick}
                className={`flex size-9 items-center justify-center rounded-full backdrop-blur-md transition-all active:scale-90 ${
                  favoriteActive
                    ? "bg-rose-50 text-rose-600 shadow-md ring-1 ring-rose-300 dark:bg-rose-950 dark:text-rose-400"
                    : "bg-background/80 text-foreground hover:bg-background ring-1 ring-white/20"
                }`}
                title={
                  favoriteActive
                    ? t.card.removeFromFavorites
                    : t.card.addToFavorites
                }
              >
                <Heart
                  className={`size-4.5 ${
                    favoriteActive ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Place Info Content */}
          <div className="p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
              <span className="font-semibold text-primary uppercase tracking-wide">
                {t.categories[place.category]}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="size-3.5" />
                {place.address}
              </span>
            </div>

            <h1 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {name}
            </h1>

            <p className="mt-3 text-base text-foreground/80 leading-relaxed font-normal">
              {shortDesc}
            </p>

            <div className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {fullDesc}
            </div>

            {/* Quick stats ribbon */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-2xl bg-muted/40 p-4 border border-border/60">
              {duration && (
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">
                      {t.detail.durationTitle}
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      {duration}
                    </span>
                  </div>
                </div>
              )}

              {bestTime && (
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                    <Calendar className="size-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-muted-foreground">
                      {t.detail.bestTimeTitle}
                    </span>
                    <span className="text-xs font-semibold text-foreground">
                      {bestTime}
                    </span>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <Compass className="size-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground">
                    {t.detail.priceTitle}
                  </span>
                  <span className="text-xs font-semibold text-foreground capitalize">
                    {t.price[place.priceLevel]}
                  </span>
                </div>
              </div>
            </div>

            {/* Local insider tip */}
            {localTip && (
              <div className="mt-6 rounded-2xl border border-accent/30 bg-accent/10 p-4.5 sm:p-5">
                <div className="flex items-center gap-2 font-heading text-sm font-bold text-accent-foreground">
                  <Sparkles className="size-4 text-accent" />
                  <span>{t.detail.localTipTitle}</span>
                </div>
                <p className="mt-1.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {localTip}
                </p>
              </div>
            )}

            {/* Highlights */}
            {highlights && highlights.length > 0 && (
              <div className="mt-8">
                <h2 className="font-heading text-base font-bold text-foreground mb-3">
                  {t.detail.highlights}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 rounded-xl border border-border/60 bg-card p-3 text-xs leading-normal"
                    >
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/90">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags list */}
            <div className="mt-8 pt-5 border-t border-border/60 flex flex-wrap items-center gap-1.5">
              <span className="text-xs font-medium text-muted-foreground mr-1 flex items-center gap-1">
                <Tag className="size-3" />
                Tags:
              </span>
              {place.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Action Bar */}
            <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-border/60">
              <Button
                variant={favoriteActive ? "secondary" : "default"}
                onClick={handleFavoriteClick}
                className="gap-2 font-semibold text-xs"
              >
                <Heart
                  className={`size-4 ${
                    favoriteActive ? "fill-rose-500 text-rose-500" : ""
                  }`}
                />
                <span>
                  {favoriteActive
                    ? t.detail.savedInFavorites
                    : t.detail.saveToFavorites}
                </span>
              </Button>

              <a
                href={mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <Button variant="outline" className="gap-2 font-medium text-xs">
                  <MapPin className="size-3.5 text-primary" />
                  <span>Deschide în Google Maps</span>
                  <ExternalLink className="size-3 text-muted-foreground" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </GsapReveal>

      {/* Related Outings Section */}
      {relatedPlaces.length > 0 && (
        <section className="mt-12 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-heading text-lg font-bold text-foreground">
              {t.detail.relatedPlacesTitle}
            </h2>
            <Link
              href="/"
              className="text-xs font-semibold text-primary hover:underline"
            >
              {t.nav.explore} →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedPlaces.map((relPlace) => (
              <PlaceCard key={relPlace.id} place={relPlace} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
