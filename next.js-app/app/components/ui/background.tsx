
// first
export type BackgroundProps = {
  variant?: "hero" | "preview" | "thumbnail";
};

type VariantConfig = {
  meshOpacity: number;
  gridOpacity: number;
  glowOpacity: number;
};

const CONFIG = {
  hero: {
    meshOpacity: 0.45,   
    gridOpacity: 0.55,  
    glowOpacity: 0.15,  
  },
 
  preview: {
    meshOpacity: 0.18,
    gridOpacity: 0.08,
    glowOpacity: 0.06,
  },
  thumbnail: {
    meshOpacity: 0.30,
    gridOpacity: 0.16,
    glowOpacity: 0.12,
  },
} as const;

type VariantName = keyof typeof CONFIG;

export default function VignetteGradientMesh({
  variant = "hero",
}: BackgroundProps) {
  const config = CONFIG[variant as VariantName];

  return (
    /* FIXED: Swapped 'bg-bg-canvas' for an explicit inline style var to prevent tailwind v4 parsing errors */
    <div 
      className="absolute inset-0 overflow-hidden w-full h-full min-h-screen" 
      style={{ backgroundColor: 'var(--bg-canvas)' }}
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.meshOpacity,
          background: `
            radial-gradient(circle at 22% 28%, var(--color-bg-accent) 0%, transparent 34%),
            radial-gradient(circle at 78% 26%, var(--color-bg-secondary) 0%, transparent 30%),
            radial-gradient(circle at 42% 76%, var(--color-bg-accent-2) 0%, transparent 32%),
            radial-gradient(circle at 82% 72%, var(--color-bg-accent-3) 0%, transparent 28%)
          `,
          filter: "blur(70px)",
          maskImage:
            "radial-gradient(circle at center, black 26%, rgba(0,0,0,.96) 48%, rgba(0,0,0,.55) 72%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 26%, rgba(0,0,0,.96) 48%, rgba(0,0,0,.55) 72%, transparent 100%)",
        }}
      />

      {/* Technical grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.gridOpacity,
          backgroundImage: `
            linear-gradient(var(--color-bg-line) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bg-line) 1px, transparent 1px)
          `,
          backgroundSize: "34px 34px",
          maskImage:
            "radial-gradient(circle at center, black 28%, rgba(0,0,0,.96) 50%, rgba(0,0,0,.5) 74%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 28%, rgba(0,0,0,.96) 50%, rgba(0,0,0,.5) 74%, transparent 100%)",
        }}
      />

      {/* Center spotlight */}
      <div
        className="absolute inset-0"
        style={{
          opacity: config.glowOpacity,
          background:
            "radial-gradient(circle at center, white 0%, transparent 42%)",
          filter: "blur(90px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}



// import type { BackgroundProps } from "@/types";

// type VariantConfig = {
//   sheenOpacity: number;
//   glowOpacity: number;
//   edgeOpacity: number;
//   facetOpacity: readonly [number, number, number, number, number];
// };

// const CONFIG = {
//   hero: {
//     sheenOpacity: 0.14,
//     glowOpacity: 0.10,
//     edgeOpacity: 0.28,
//     facetOpacity: [0.10, 0.08, 0.07, 0.06, 0.14],
//   },

//   preview: {
//     sheenOpacity: 0.11,
//     glowOpacity: 0.08,
//     edgeOpacity: 0.22,
//     facetOpacity: [0.08, 0.07, 0.06, 0.05, 0.12],
//   },

//   thumbnail: {
//     sheenOpacity: 0.18,
//     glowOpacity: 0.14,
//     edgeOpacity: 0.36,
//     facetOpacity: [0.12, 0.10, 0.08, 0.07, 0.18],
//   },
// } as const;

// export default function CrystalGlass({
//   variant = "hero",
// }: BackgroundProps) {
//   const config = CONFIG[variant as keyof typeof CONFIG];

//   return (
//     <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
//       {/* Crystal facets */}
//       <svg
//         className="absolute inset-0 h-full w-full"
//         viewBox="0 0 800 600"
//         preserveAspectRatio="xMidYMid slice"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <polygon
//           points="0,0 400,180 0,380"
//           fill="var(--color-bg-accent)"
//           fillOpacity={config.facetOpacity[0]}
//         />

//         <polygon
//           points="800,0 400,180 800,380"
//           fill="var(--color-bg-secondary)"
//           fillOpacity={config.facetOpacity[1]}
//         />

//         <polygon
//           points="160,0 640,0 400,260"
//           fill="var(--color-bg-accent-2)"
//           fillOpacity={config.facetOpacity[2]}
//         />

//         <polygon
//           points="0,380 400,600 800,380 400,180"
//           fill="var(--color-bg-accent-3)"
//           fillOpacity={config.facetOpacity[3]}
//         />

//         <polygon
//           points="0,600 400,420 800,600"
//           fill="var(--color-bg-border)"
//           fillOpacity={config.facetOpacity[4]}
//         />

//         {/* Facet edges */}

//         <line
//           x1="0"
//           y1="0"
//           x2="400"
//           y2="180"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity}
//         />

//         <line
//           x1="800"
//           y1="0"
//           x2="400"
//           y2="180"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity}
//         />

//         <line
//           x1="0"
//           y1="380"
//           x2="400"
//           y2="180"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity * 0.75}
//         />

//         <line
//           x1="800"
//           y1="380"
//           x2="400"
//           y2="180"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity * 0.75}
//         />

//         <line
//           x1="0"
//           y1="600"
//           x2="400"
//           y2="420"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity * 0.55}
//         />

//         <line
//           x1="800"
//           y1="600"
//           x2="400"
//           y2="420"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity * 0.55}
//         />

//         <line
//           x1="400"
//           y1="180"
//           x2="400"
//           y2="420"
//           stroke="var(--color-bg-line)"
//           strokeWidth="1"
//           opacity={config.edgeOpacity * 0.7}
//         />
//       </svg>

//       {/* Soft crystal glow */}

//       <div
//         className="absolute inset-0"
//         style={{
//           opacity: config.glowOpacity,
//           background:
//             "radial-gradient(circle at 50% 42%, white 0%, transparent 42%)",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* Glass highlight */}

//       <div
//         className="absolute inset-0"
//         style={{
//           opacity: config.sheenOpacity,
//           background:
//             "linear-gradient(135deg, var(--color-bg-foreground) 0%, rgba(255,255,255,.35) 14%, transparent 46%)",
//           mixBlendMode: "screen",
//         }}
//       />
//     </div>
//   );
// }



// import type { BackgroundProps } from "@/types";

// type VariantConfig = {
//   spacing: number;
//   radius: number;
//   opacity: number;
//   secondaryOpacity: number;
//   focus: string;
// };

// const CONFIG = {
//   hero: {
//     spacing: 28,
//     radius: 1.5,
//     opacity: 0.34,
//     secondaryOpacity: 0.10,
//     focus: "82% 78%",
//   },

//   preview: {
//     spacing: 24,
//     radius: 1.8,
//     opacity: 0.46,
//     secondaryOpacity: 0.14,
//     focus: "76% 72%",
//   },

//   thumbnail: {
//     spacing: 20,
//     radius: 2.3,
//     opacity: 0.62,
//     secondaryOpacity: 0.18,
//     focus: "70% 66%",
//   },
// } as const;

// export default function FadeDots({
//   variant = "hero",
// }: BackgroundProps) {
//   const config = CONFIG[variant];

//   return (
//     <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
//       {/* Primary dots */}

//       <div
//         className="absolute inset-0"
//         style={{
//           opacity: config.opacity,
//           backgroundImage: `
//             radial-gradient(
//               circle,
//               var(--color-bg-accent) ${config.radius}px,
//               transparent ${config.radius}px
//             )
//           `,
//           backgroundSize: `${config.spacing}px ${config.spacing}px`,
//         }}
//       />

//       {/* Offset dots */}

//       <div
//         className="absolute inset-0"
//         style={{
//           opacity: config.secondaryOpacity,
//           backgroundImage: `
//             radial-gradient(
//               circle,
//               var(--color-bg-secondary) ${config.radius * 0.7}px,
//               transparent ${config.radius * 0.7}px
//             )
//           `,
//           backgroundSize: `${config.spacing}px ${config.spacing}px`,
//           backgroundPosition: `${config.spacing / 2}px ${config.spacing / 2
//             }px`,
//         }}
//       />

//       {/* Edge fade */}

//       <div
//         className="absolute inset-0"
//         style={{
//           background: `
//             radial-gradient(
//               ellipse ${config.focus} at 50% 50%,
//               transparent 18%,
//               transparent 52%,
//               var(--color-bg-canvas) 100%
//             )
//           `,
//         }}
//       />
//     </div>
//   );
// }


// import type { BackgroundProps } from "@/types";

// type VariantConfig = {
//   strokeOpacity: number;
//   accentOpacity: number;
//   glowOpacity: number;
// };

// const CONFIG = {
//   hero: {
//     strokeOpacity: 0.18,
//     accentOpacity: 0.08,
//     glowOpacity: 0.08,
//   },

//   preview: {
//     strokeOpacity: 0.15,
//     accentOpacity: 0.06,
//     glowOpacity: 0.06,
//   },

//   thumbnail: {
//     strokeOpacity: 0.28,
//     accentOpacity: 0.12,
//     glowOpacity: 0.12,
//   },
// } as const;

// const HEX = "26,0 78,0 104,45 78,90 26,90 0,45";

// const ROWS = 8;
// const COLS = 9;
// const W = 104;
// const H = 90;

// export default function VignetteHexGrid({
//   variant = "hero",
// }: BackgroundProps) {
//   const config = CONFIG[variant];

//   return (
//     <div className="absolute inset-0 overflow-hidden bg-bg-canvas">
//       <svg
//         className="absolute inset-0 h-full w-full"
//         viewBox="0 0 936 720"
//         preserveAspectRatio="xMidYMid slice"
//         style={{
//           maskImage:
//             "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 48%, rgba(0,0,0,.55) 70%, transparent 100%)",
//           WebkitMaskImage:
//             "radial-gradient(circle at center, black 24%, rgba(0,0,0,.95) 48%, rgba(0,0,0,.55) 70%, transparent 100%)",
//         }}
//       >
//         {/* Filled accent cells */}

//         {[13, 22, 31, 40, 49, 58].map((index) => {
//           const row = Math.floor(index / COLS);
//           const col = index % COLS;

//           const x = col * W + (row % 2 ? W / 2 : 0);
//           const y = row * 68;

//           return (
//             <polygon
//               key={`fill-${index}`}
//               points={HEX}
//               transform={`translate(${x},${y})`}
//               fill="var(--color-bg-accent)"
//               opacity={config.accentOpacity}
//             />
//           );
//         })}

//         {/* Hex grid */}

//         {Array.from({ length: ROWS }).map((_, row) =>
//           Array.from({ length: COLS }).map((_, col) => {
//             const x = col * W + (row % 2 ? W / 2 : 0);
//             const y = row * 68;

//             return (
//               <polygon
//                 key={`${row}-${col}`}
//                 points={HEX}
//                 transform={`translate(${x},${y})`}
//                 fill="none"
//                 stroke="var(--color-bg-line)"
//                 strokeWidth="1"
//                 opacity={config.strokeOpacity}
//               />
//             );
//           })
//         )}
//       </svg>

//       {/* Soft center glow */}

//       <div
//         className="absolute inset-0"
//         style={{
//           opacity: config.glowOpacity,
//           background: `
//             radial-gradient(circle at center,
//               var(--color-bg-accent) 0%,
//               transparent 32%
//             ),

//             radial-gradient(circle at center,
//               var(--color-bg-secondary) 0%,
//               transparent 58%
//             )
//           `,
//           filter: "blur(70px)",
//           mixBlendMode: "screen",
//         }}
//       />

//       {/* Extra vignette */}

//       <div
//         className="absolute inset-0"
//         style={{
//           background:
//             "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.18) 82%, var(--color-bg-canvas) 100%)",
//         }}
//       />
//     </div>
//   );
// }
