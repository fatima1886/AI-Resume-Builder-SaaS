// // app/layout.tsx
// import type { Metadata } from "next";
// import { Prata ,Instrument_Serif } from "next/font/google"; // Removed unused Playfair_Display
// import "./globals.css";
// import Logo from "./components/Logo";
// import Footer from "./components/Footer";



// const instrumentSerif = Instrument_Serif({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-instrument-serif",
//   display: "swap",
// });
// // Configure your luxury Serif font (Logo text)
// const prataSerif = Prata({
//   weight: "400", 
//   subsets: ["latin"],
//   variable: "--font-prata-serif", 
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Resume.ai | Premium AI Resume Builder",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className={` ${prataSerif.variable} ${instrumentSerif.variable}  bg-[image:var(--background-image-saas-grid)] font-sans antialiased bg-[#f8fafc]`}>
//         {/* Simple professional header frame wrapping your new logo */}
//         <header className="w-full h-16 bg-transparent flex items-center px-6 sticky top-0 z-40 border-b border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300">
//           <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
//             <Logo />
//           </div>
//         </header>

//         <main className="flex-1 flex flex-col">{children}</main>
//         <div className="mt-[-80]  z-50">
//        <Footer/>
//        </div>
//       </body>
//     </html>
//   );
// }








// // app/layout.tsx
// import type { Metadata } from "next";
// import { Prata, Instrument_Serif } from "next/font/google";
// // 
// import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';

// import { auth } from "@clerk/nextjs/server";
// import "./globals.css";
// import Logo from "./components/Logo";
// import Footer from "./components/Footer";

// const instrumentSerif = Instrument_Serif({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-instrument-serif",
//   display: "swap",
// });

// const prataSerif = Prata({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-prata-serif",
//   display: "swap",
// });

// export const metadata: Metadata = {
//   title: "Resume.ai | Premium AI Resume Builder",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider> {/* 2. Wrapped the entire HTML layout in ClerkProvider */}
//       <html lang="en">
//         <body className={` ${prataSerif.variable} ${instrumentSerif.variable} bg-[image:var(--background-image-saas-grid)] font-sans antialiased bg-[#f8fafc] min-h-screen flex flex-col`}>

//           {/* Header section integrated with Clerk authentication flows */}
//           <header className="w-full h-16 bg-transparent flex items-center px-6 sticky top-0 z-40 border-b border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300">
//             <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
//               <Logo />

//               {/* 3. Auth controls perfectly aligned on the right side of your navigation */}
//               {/* <div className="flex items-center gap-4">
//                 <Show when="signed-out">
//                   <SignInButton />
//                   <SignUpButton>
//                     <button className="bg-sky-600 hover:bg-sky-800 text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer transition-colors">
//                       Sign Up
//                     </button>
//                   </SignUpButton>
//                 </Show>
//                 <Show when="signed-in">
//                   <UserButton />
//                 </Show>
//               </div> */}


//               <div className="flex items-center gap-4">
//   {/* This block renders ONLY when the user is logged out */}
//   <SignedOut>
//     <SignInButton mode="modal">
//       <button className="text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer">
//         Sign In
//       </button>
//     </SignInButton>
    
//     <SignUpButton mode="modal">
//       <button className="bg-sky-600 hover:bg-sky-800 text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer transition-colors">
//         Sign Up
//       </button>
//     </SignUpButton>
//   </SignedOut>

//   {/* This block renders ONLY when the user is logged in */}
//   <SignedIn>
//     <UserButton afterSignOutUrl="/" />
//   </SignedIn>
// </div>

//             </div>
//           </header>

//           <main className="flex-1 flex flex-col">{children}</main>

//           <div className="mt-[-80] z-50">
//             <Footer />
//           </div>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }








// updated
// app/layout.tsx
import type { Metadata } from "next";
import { Prata, Instrument_Serif } from "next/font/google";
// Core 3 Import: Using 'Show' instead of SignedIn/SignedOut
import { ClerkProvider, Show, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs'; 
import "./globals.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const prataSerif = Prata({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-prata-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Resume.ai | Premium AI Resume Builder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Clerk Provider handles global authentication fallback configurations
    <ClerkProvider afterSignOutUrl="/"> 
      <html lang="en">
        <body className={` ${prataSerif.variable} ${instrumentSerif.variable} bg-[image:var(--background-image-saas-grid)] font-sans antialiased bg-[#f8fafc] min-h-screen flex flex-col`}>

          {/* Header section integrated with Clerk authentication flows */}
          <header className="w-full h-16 bg-transparent flex items-center px-6 sticky top-0 z-40 border-b border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
              <Logo />

              <div className="flex items-center gap-4">
                {/* Core 3: Handled conditionally via the 'when' prop */}
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <button className="text-sm font-medium text-slate-700 hover:text-slate-900 cursor-pointer">
                      Sign In
                    </button>
                  </SignInButton>
                  
                  <SignUpButton mode="modal">
                    <button className="bg-sky-600 hover:bg-sky-800 text-white rounded-full font-medium text-sm h-10 px-4 cursor-pointer transition-colors">
                      Sign Up
                    </button>
                  </SignUpButton>
                </Show>

                {/* Core 3: Shows profile badge only when session evaluates true */}
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>

            </div>
          </header>

          <main className="flex-1 flex flex-col">{children}</main>

          <div className="mt-[-80] z-50">
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
