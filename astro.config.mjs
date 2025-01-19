// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
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