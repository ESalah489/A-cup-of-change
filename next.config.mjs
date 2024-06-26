/** @type {import('next').NextConfig} */
import path from 'path';
const nextConfig = {
  sassOptions: {
    includePaths: ['./public'],
  },images: {
    domains: ['cupofchange-eg.com']
  },
};

export default nextConfig;
