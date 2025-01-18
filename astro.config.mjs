// @ts-check
import { defineConfig, envField } from 'astro/config';
import db from '@astrojs/db';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [db(), tailwind()],
  markdown: {
    remarkPlugins: [],
  },
  env: {
    schema: {
      DB_REMOTE_URL: envField.string({ context: 'server', access: 'secret' }),
      DB_APP_TOKEN: envField.string({ context: 'server', access: 'secret' })
    }
  }
});