/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'i.ibb.co.com'],
  },
  async headers() {
    return [
      {
        // This example sets headers for the /sitemap.xml path
        source: "/sitemap.xml",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "index, follow", // Allow indexing and following links
          },
        ],
      },
    ];
  },
};

export default nextConfig;
