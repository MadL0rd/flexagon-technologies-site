import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://flexagon-technologies.github.io',
  output: 'static',
  integrations: [],
  markdown: {
    gfm: true
  },
  vite: {
    resolve: {
      alias: {
        '@components': './src/components',
        '@layouts': './src/layouts',
        '@content': './src/content',
        '@assets': './src/assets'
      }
    }
  }
});
