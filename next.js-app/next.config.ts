// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;

const nextConfig = {
  experimental: {
    // Tells your local server to accept assets loaded from your live proxy domain
    allowedDevOrigins: ['ai-resume-builder-saa-s-g2da.vercel.app'], 
  },
};

export default nextConfig;
