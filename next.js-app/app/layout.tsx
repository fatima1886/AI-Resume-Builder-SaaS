// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Prata ,Instrument_Serif } from "next/font/google"; // Removed unused Playfair_Display
import "./globals.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

// Configure your primary Sans-Serif font (Body text, forms)
// const jakartaSans = Plus_Jakarta_Sans({
//   subsets: ["latin"],
//   variable: "--font-jakarta-sans",
//   display: "swap",
// });

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  display: "swap",
});
// Configure your luxury Serif font (Logo text)
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
    <html lang="en">
      <body className={` ${prataSerif.variable} ${instrumentSerif.variable}  bg-[image:var(--background-image-saas-grid)] font-sans antialiased bg-[#f8fafc]`}>
        {/* Simple professional header frame wrapping your new logo */}
        <header className="w-full h-16 bg-transparent flex items-center px-6 sticky top-0 z-40 border-b border-white/10 bg-white/[0.02] backdrop-blur-md transition-all duration-300">
          <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
            <Logo />
          </div>
        </header>
        
        <main className="flex-1 flex flex-col">{children}</main>
        <div className="mt-[-80]  z-50">
       <Footer/>
       </div>
      </body>
    </html>
  );
}
