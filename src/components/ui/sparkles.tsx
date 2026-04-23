"use client";
import React, { useEffect, useState } from "react";

interface SparklesCoreProps {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export function SparklesCore({
  background = "transparent",
  minSize = 0.4,
  maxSize = 1.0,
  particleDensity = 70,
  className = "",
  particleColor = "#FFFFFF",
}: SparklesCoreProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={`absolute inset-0 ${className}`} style={{ background }}>
      {[...Array(particleDensity)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * (maxSize - minSize) + minSize}px`,
            height: `${Math.random() * (maxSize - minSize) + minSize}px`,
            backgroundColor: particleColor,
            borderRadius: '50%',
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}
    </div>
  );
}