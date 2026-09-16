"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface GsapRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  y?: number;
  stagger?: number;
  triggerKey?: string | number; // re-animate when this changes (e.g. active filter)
}

export function GsapReveal({
  children,
  className = "",
  delay = 0,
  duration = 0.45,
  y = 16,
  stagger = 0.04,
  triggerKey,
}: GsapRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.children;
      if (!elements || elements.length === 0) {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y },
          { opacity: 1, y: 0, duration, delay, ease: "power2.out" }
        );
      } else {
        gsap.fromTo(
          elements,
          { opacity: 0, y, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration,
            delay,
            stagger,
            ease: "power2.out",
          }
        );
      }
    },
    { scope: containerRef, dependencies: [triggerKey] }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
