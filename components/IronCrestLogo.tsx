import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "light";
}

export default function IronCrestLogo({ className = "h-10", variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  const primaryColor = isLight ? "#FFFFFF" : "#1C2329";
  const accentColor = "#D92525"; // Forge Crimson / Iron Red
  const steelColor = isLight ? "#8B99A6" : "#4A5866";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Heavy Steel Truss Emblem */}
      <div className="relative h-full flex items-center shrink-0">
        <svg
          viewBox="0 0 56 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto aspect-[56/46] drop-shadow-sm"
        >
          {/* Heavy Steel Outer Gable Frame (Molten Forge Orange) */}
          <path
            d="M28 2L54 18.5V44H43V23L28 13.5L13 23V44H2V18.5L28 2Z"
            fill={accentColor}
          />
          {/* Structural Webbing & Inner Solid Crest (Carbon Steel) */}
          <path
            d="M28 17L38 23.5V39H32V28.5L28 26L24 28.5V39H18V23.5L28 17Z"
            fill={primaryColor}
          />
          {/* Heavy Base Girder Flange */}
          <rect x="6" y="39" width="44" height="5" fill={primaryColor} />
          {/* Rivet Details on base plate */}
          <circle cx="9" cy="41.5" r="1.2" fill="#FFFFFF" opacity={isLight ? 0.9 : 0.6} />
          <circle cx="47" cy="41.5" r="1.2" fill="#FFFFFF" opacity={isLight ? 0.9 : 0.6} />
        </svg>
      </div>

      {/* Industrial Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-baseline">
          <span
            className="text-lg md:text-xl font-black tracking-wider uppercase font-sans"
            style={{ color: primaryColor }}
          >
            IRON<span style={{ color: accentColor }}>CREST</span>
          </span>
          <span className="ml-1 text-[9px] font-mono font-bold text-brand-zinc tracking-tighter">
            EST. 1984
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 bg-brand-orange shrink-0" />
          <span
            className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase"
            style={{ color: steelColor }}
          >
            BUILDING SYSTEMS
          </span>
        </div>
      </div>
    </div>
  );
}
