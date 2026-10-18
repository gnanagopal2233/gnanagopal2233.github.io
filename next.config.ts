import type { NextConfig } from "next";

// GitHub Pages: a user site (Gopal2233.github.io) is served at "/", a project site at "/<repo>".
// The deploy workflow sets BASE_PATH automatically.
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  images: { unoptimized: true },
  trailingSlash: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
