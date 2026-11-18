import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // Short bio links (/ig, /tt, /yt, /fb) that add utm tags so Google Analytics
  // credits each platform. Temporary redirects, so the tags can change later.
  async redirects() {
    const bio = (source: string) =>
      `/?utm_source=${source}&utm_medium=social&utm_campaign=bio`;
    return [
      { source: '/ig', destination: bio('instagram'), permanent: false },
      { source: '/tt', destination: bio('tiktok'), permanent: false },
      { source: '/yt', destination: bio('youtube'), permanent: false },
      { source: '/fb', destination: bio('facebook'), permanent: false },
    ];
  },
};

export default nextConfig;
