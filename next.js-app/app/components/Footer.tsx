// import Link from 'next/link';

// export default function Footer() {
//   // REPLACE THIS WITH YOUR BRAND HEX COLOR
//   const brandColor = '#4f46e5'; 

//   return (
//     <footer 
//       className="bg-[#0f172a] text-[#94a3b8] font-sans pt-16 border-t-4"
//       style={{ borderTopColor: brandColor }}
//     >
//       <div className="max-w-7xl mx-auto px-6 pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
//         {/* Column 1: Brand Profile */}
//         <div className="space-y-4">
//           <h2 className="text-2xl font-bold text-[#f8fafc]">
//             Brand<span style={{ color: brandColor }}>Name</span>
//           </h2>
//           <p className="text-sm leading-relaxed">
//             Building high-quality digital experiences. We combine clean design with powerful code to elevate your online presence.
//           </p>
//           <div className="flex space-x-3 pt-2">
//             {['FB', 'TW', 'LN', 'IG'].map((social) => (
//               <a
//                 key={social}
//                 href="#"
//                 className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center text-[#f8fafc] text-xs font-bold transition-all duration-200 hover:text-white"
//                 style={{ '--hover-bg': brandColor } as React.CSSProperties}
//                 onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = brandColor)}
//                 onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)')}
//               >
//                 {social}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Column 2: Company Directory */}
//         <div>
//           <h3 className="text-[#f8fafc] font-semibold text-base mb-6">Company</h3>
//           <ul className="space-y-3 text-sm">
//             {[
//               { label: 'About Us', href: '/about' },
//               { label: 'Our Services', href: '/services' },
//               { label: 'Careers', href: '/careers' },
//               { label: 'Press Kit', href: '/press' },
//             ].map((link) => (
//               <li key={link.label}>
//                 <Link 
//                   href={link.href}
//                   className="transition-all duration-200 inline-block hover:translate-x-1"
//                   style={{ '--hover-color': brandColor } as React.CSSProperties}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = brandColor)}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = '')}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 3: Resources Grid */}
//         <div>
//           <h3 className="text-[#f8fafc] font-semibold text-base mb-6">Resources</h3>
//           <ul className="space-y-3 text-sm">
//             {[
//               { label: 'Blog', href: '/blog' },
//               { label: 'Help Center', href: '/help' },
//               { label: 'Privacy Policy', href: '/privacy' },
//               { label: 'Terms of Use', href: '/terms' },
//             ].map((link) => (
//               <li key={link.label}>
//                 <Link 
//                   href={link.href}
//                   className="transition-all duration-200 inline-block hover:translate-x-1"
//                   style={{ '--hover-color': brandColor } as React.CSSProperties}
//                   onMouseEnter={(e) => (e.currentTarget.style.color = brandColor)}
//                   onMouseLeave={(e) => (e.currentTarget.style.color = '')}
//                 >
//                   {link.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Column 4: Newsletter Subscription */}
//         <div className="space-y-4">
//           <h3 className="text-[#f8fafc] font-semibold text-base">Stay Updated</h3>
//           <p className="text-sm leading-relaxed">
//             Subscribe to our newsletter to receive the latest updates and news.
//           </p>
//           <form 
//             onSubmit={(e) => e.preventDefault()} 
//             className="flex w-full items-stretch"
//           >
//             <input
//               type="email"
//               placeholder="Your email address"
//               required
//               className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-md text-sm text-[#f8fafc] outline-none transition-colors focus:border-opacity-100"
//               style={{ focusBorderColor: brandColor } as React.CSSProperties}
//               onFocus={(e) => (e.currentTarget.style.borderColor = brandColor)}
//               onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)')}
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 text-white font-semibold text-sm rounded-r-md transition-opacity hover:opacity-90"
//               style={{ backgroundColor: brandColor }}
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Copyright Bar */}
//       <div className="bg-[#020617] py-6 text-xs mt-4">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//           <p>&copy; {new Date().getFullYear()} BrandName. All rights reserved.</p>
//           <div className="flex space-x-6">
//             {['Privacy', 'Terms', 'Sitemap'].map((legal) => (
//               <Link 
//                 key={legal}
//                 href={`/${legal.toLowerCase()}`}
//                 className="transition-colors duration-200"
//                 onMouseEnter={(e) => (e.currentTarget.style.color = brandColor)}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = '')}
//               >
//                 {legal}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

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
