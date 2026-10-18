import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Gopal Adusumilli — Forward Deployed Engineer",
  description: "Full-stack engineer who embeds with customers and ships software into regulated production. Biopharma QMS, cloud microservices, LLM agents.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
