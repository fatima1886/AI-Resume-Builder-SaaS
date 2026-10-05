

'use client'
import Link from 'next/link';

export default function Footer() {
  // REPLACE THIS WITH YOUR BRAND HEX COLOR
  const brandColor = 'sky-600'; 

  return (
    <footer className="bg-[#0f172a] text-[#94a3b8] font-sans border-t border-white/5 py-8 sticky bottom-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
        
        {/* Brand Copyright */}
        <div>
          <span className="font-semibold text-[#f8fafc] mr-1">Resume.ai</span>
          <span>&copy; {new Date().getFullYear()}. All rights reserved.</span>
        </div>

        {/* Minimal Navigation Links */}
        <div className="flex space-x-6">
          {[
            { label: 'About', href: '/about' },
            { label: 'Privacy', href: '/privacy' },
            { label: 'Terms', href: '/terms' },
            { label: 'Contact', href: '/contact' },
          ].map((link) => (
            <Link 
              key={link.label}
              href={link.href}
              className="transition-colors duration-200"
              onMouseEnter={(e) => (e.currentTarget.style.color = brandColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = '')}
            >
              {link.label}
            </Link>
          ))}
        </div>
        
      </div>
    </footer>
  );
}
