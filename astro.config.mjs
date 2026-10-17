// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // 自定义域名：GitHub Pages 部署后通过 CNAME 指向此域名，base 保持根路径
  site: 'https://figcraft.ndjp.net',
  integrations: [react()],

  vite: {
    plugins: [tailwindcss()]
  }
});