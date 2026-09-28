// components/Logo.tsx
import React from 'react';

export default function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 select-none group">
      {/* Icon */}
    
      {/* Typography: Merging Serif and Sans fonts cleanly */}
      <div className="flex items-baseline">
        {/* Removed font-black so Prata's high-contrast thin serifs display perfectly */}
         <span className="text-xl font-serif font-semibold text-sky-600  tracking-wide">
          Resume
        </span>
        {/* Explicitly calling the default Sans font suffix */}
        <span className="ml-0.5 text-xs font-sans font-bold text-brand-accent">
          .ai
        </span>
      </div>
    </a>
  );
}
