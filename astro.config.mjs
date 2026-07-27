import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ligaacademicasiufac.github.io',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
  build: {
    assets: '_astro'
  }
});
