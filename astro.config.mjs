// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'server',
  site: 'https://factos.pages.dev',
  integrations: [tailwind(), sitemap()],
  markdown: {
    remarkPlugins: [],
  },
  env: {
    schema: {
      DB_REMOTE_URL: envField.string({ context: 'server', access: 'secret' }),
      DB_APP_TOKEN: envField.string({ context: 'server', access: 'secret' })
    }
  },
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});