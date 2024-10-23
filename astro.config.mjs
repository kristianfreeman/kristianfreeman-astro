// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap(), react(), tailwind()],
  markdown: {
    shikiConfig: {
      theme: 'catppuccin-mocha',
      transformers: [
        {
          pre(node) {
            node.properties.class += ' not-prose';
          },
        }
      ],
    },
  },
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
  experimental: {
    clientPrerender: true,
  },
  site: 'https://kristianfreeman.com',
});
