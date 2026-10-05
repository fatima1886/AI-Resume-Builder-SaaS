

// import { clerkMiddleware } from '@clerk/nextjs/server';

// export default clerkMiddleware({
//   frontendApiProxy: {
//     enabled: true,
//   },
// });

// export const config = {
//   matcher: [
//     // Skip Next.js internals and all static files, unless found in search params
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',

//     // Always run for Clerk's auto-proxy path
//     '/__clerk/:path*',

//     // Always run for API routes
//     '/(api|trpc)(.*)',
//   ],
// };


// proxy.ts OR middleware.ts
// import { clerkMiddleware } from '@clerk/nextjs/server'

// export default clerkMiddleware()

// export const config = {
//   matcher: [
//     // Skip Next.js internals and static files
//     '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
//     // Always run for API routes
//     '/(api|trpc)(.*)',
//     // 🚨 REQUIRED FOR PROXYING: Always run for Clerk-specific frontend API routes
//     '/__clerk/(.*)', 
//   ],
// }


import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware({
  frontendApiProxy: {
    // Enables built-in secure proxying of Clerk Frontend API requests through Vercel
    enabled: true,
  },
})

export const config = {
  matcher: [
    // 1. Skip Next.js internals and all static assets/files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // 2. Ensure middleware always runs for internal API and tRPC routes
    '/(api|trpc)(.*)',
    
    // 3. REQUIRED FOR PROXYING: Explicitly match Clerk-specific frontend API paths
    '/__clerk/:path*', 
  ],
}

