

import Image from "next/image";
import { Show } from "@clerk/nextjs";
import "./globals.css";
import Link from "next/link";
import VignetteGradientMesh from "@/app/components/ui/background"
const Home = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-4rem)] bg-white bg-gradient-to-r from-white via-sky-50/30 to-sky-100/50 px-6 sm:px-12 lg:px-24 "> <VignetteGradientMesh variant="hero"/> 
    
  
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-7xl flex-col items-center justify-between gap-10 py-50 lg:flex-row lg:py-0 mt-[-50] mb-40">
        <div className="flex w-full max-w-xl flex-1 flex-col items-start pt-10 text-left sm:pt-16 lg:pt-24">
          <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-amber-500 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
            <span className="text-[#f59e0b]">✨</span>
            Next-Gen AI Workspace
          </span>

          <h1 className="sans text-5xl font-bold leading-[1.15] tracking-normal text-slate-900 sm:text-5xl lg:text-6xl">
            Build a <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Premium Resume
            </span>{" "}
            <br />
            in Minutes.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Input your raw details, apply smart structural AI text optimizations, and view your changes live on an interactive blueprint template grid.
          </p>



 <div className="mt-10 flex items-center justify-center gap-x-6">
        {/* Core 3: This button will ONLY show if the user is logged in */}
        <Show when="signed-in">
          <Link
            href="/dashboard"
            className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-600 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
          >
            Let's Build →
          </Link>
        </Show>

        {/* Optional: You can add a second fallback block for signed-out users if you want */}
        <Show when="signed-out">
          <p className="text-sm font-medium text-orange-600 bg-purple-100 px-4 py-2 rounded-full">
            Sign in above to unlock the AI builder
          </p>
        </Show>
      </div>
        
        </div>

        <div className="flex w-full flex-1 items-center justify-center">
          <div
            className=" hidden md:block md:relative md:aspect-[1/1.414] md:w-full md:max-w-[420px] rotate-3 cursor-pointer overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-2xl shadow-sky-900/15 transition-all duration-300 hover:rotate-0 hover:scale-[1.02] sm:max-w-[480px] mt-20"
            aria-label="Premium resume mockup preview"
          >
            <Image
              src="/hero-resume.svg.png"
              alt="Premium Resume Blueprint Workspace"
              fill
              loading="eager"
              sizes="(max-width: 1200px) 100vw, (max-width: 2000px) 80vw, 33vw"
              className="object-contain p-2"
              
             
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;



// import VignetteGradientMesh from "@/app/components/ui/background";

// export default function Home() {
//   return (
//     /* The outer container MUST force full-width, full-height, and remain relative */
//     <div className="relative min-h-screen w-full overflow-x-hidden">
      
//       {/* 1. Mount the background component */}
//       <VignetteGradientMesh variant="hero" />

//       {/* 2. Wrap your content inside a relative element with a higher layer priority (z-10) */}
//       <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center">
//         <h1 className="text-5xl font-bold tracking-tight text-[var(--color-bg-accent)]">
//           Sky 500 Modern Interface
//         </h1>
//         <p className="mt-4 max-w-md text-lg opacity-70">
//           Your custom vector meshes and soft geometric lines are running directly underneath this card surface.
//         </p>
//       </main>
//     </div>
//   );
// }

