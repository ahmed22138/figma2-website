import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'anotherdomain.com',
      },
    ],
  },



         
    
    
   


};




export default nextConfig;
