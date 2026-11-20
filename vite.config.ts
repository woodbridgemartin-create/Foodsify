
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    pages: [
      "/",
      "/how-it-works",
      "/for-businesses",
      "/faqs",
      "/contact",
      "/terms",
      "/privacy",
      "/cookies",
    ].map((path) => ({ path })),

    prerender: {
      enabled: false,
    },

    server: {
      entry: "server",
    },
  },
});

