/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // The route you want to redirect to
          permanent: true, // Set to true for a 301 redirect, or false for a temporary redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  