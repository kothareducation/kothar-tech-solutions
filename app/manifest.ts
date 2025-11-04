import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kothar Tech Solutions - Enterprise Software Development",
    short_name: "Kothar Tech",
    description:
      "Custom software development, web & mobile applications, and business intelligence solutions",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ed6a06",
    icons: [
      {
        src: "/kothar-tech-logo-only-nobg.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/kothar-tech-logo-only-nobg.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
  };
}

