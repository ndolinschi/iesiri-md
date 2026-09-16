"use client";

import React from "react";
import { PlaceCategory } from "@/types";
import { Trees, Compass, Landmark, Coffee, Sparkles } from "lucide-react";

interface PlaceBannerProps {
  category: PlaceCategory;
  seedTitle?: string;
  className?: string;
}

export function PlaceBanner({
  category,
  seedTitle: _seedTitle,
  className = "",
}: PlaceBannerProps) {
  // Category-based aesthetic gradients and ambient icons
  const getBannerConfig = () => {
    switch (category) {
      case "parc":
        return {
          gradient:
            "from-emerald-700 via-teal-800 to-green-900 text-emerald-100",
          accentColor: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
          icon: Trees,
          pattern: "radial-gradient(circle at 80% 20%, rgba(52, 211, 153, 0.25) 0%, transparent 50%)",
        };
      case "plimbare":
        return {
          gradient:
            "from-sky-700 via-cyan-800 to-teal-900 text-sky-100",
          accentColor: "bg-cyan-500/20 text-cyan-200 border-cyan-400/30",
          icon: Compass,
          pattern: "radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.25) 0%, transparent 50%)",
        };
      case "muzeu":
        return {
          gradient:
            "from-amber-800 via-stone-800 to-orange-950 text-amber-100",
          accentColor: "bg-amber-500/20 text-amber-200 border-amber-400/30",
          icon: Landmark,
          pattern: "radial-gradient(circle at 75% 30%, rgba(251, 191, 36, 0.25) 0%, transparent 50%)",
        };
      case "cafe":
        return {
          gradient:
            "from-amber-700 via-yellow-900 to-stone-900 text-amber-100",
          accentColor: "bg-yellow-500/20 text-yellow-200 border-yellow-400/30",
          icon: Coffee,
          pattern: "radial-gradient(circle at 30% 20%, rgba(245, 158, 11, 0.25) 0%, transparent 50%)",
        };
      default:
        return {
          gradient:
            "from-emerald-700 via-teal-800 to-stone-900 text-emerald-100",
          accentColor: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
          icon: Sparkles,
          pattern: "none",
        };
    }
  };

  const config = getBannerConfig();
  const IconComponent = config.icon;

  return (
    <div
      className={`relative flex h-36 w-full items-center justify-center overflow-hidden bg-gradient-to-br ${config.gradient} ${className}`}
      style={{ backgroundImage: config.pattern }}
    >
      {/* Subtle organic decorative rings */}
      <div className="absolute -right-6 -bottom-10 size-32 rounded-full border border-white/10 opacity-30" />
      <div className="absolute -left-8 -top-8 size-28 rounded-full border border-white/10 opacity-20" />

      {/* Atmospheric center iconography */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-1.5 transition-transform duration-300 group-hover:scale-105">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/20 shadow-md">
          <IconComponent className="size-7 text-white/90" />
        </div>
      </div>
    </div>
  );
}
