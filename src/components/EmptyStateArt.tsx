import type { SVGProps } from "react";

const BEAD_COUNT = 12;
const CENTER = 60;
const RADIUS = 40;

// 12 beads placed evenly on a circle, starting at 3 o'clock and going clockwise.
// Even index = green, odd index = gold. Index 3 (bottom) is the larger "imam" bead.
const round = (n: number) => Math.round(n * 100) / 100;

const beads = Array.from({ length: BEAD_COUNT }, (_, i) => {
  const angle = (i * 2 * Math.PI) / BEAD_COUNT;
  return {
    cx: round(CENTER + RADIUS * Math.cos(angle)),
    cy: round(CENTER + RADIUS * Math.sin(angle)),
    r: i === 3 ? 7.5 : 6,
    tone: i % 2 === 0 ? "fill-primary" : "fill-gold",
  };
});

export function EmptyStateArt({
  className = "w-30 h-auto",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {beads.map((bead) => (
        <circle
          key={`${bead.cx}-${bead.cy}`}
          cx={bead.cx}
          cy={bead.cy}
          r={bead.r}
          className={bead.tone}
        />
      ))}

      {/* cord hanging from the bottom bead */}
      <path
        d="M60 108v12"
        fill="none"
        strokeWidth={2}
        strokeLinecap="round"
        className="stroke-gold-strong"
      />

      {/* tassel bead */}
      <ellipse cx="60" cy="124" rx="4" ry="5" className="fill-primary" />
    </svg>
  );
}
