import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import glsl from 'vite-plugin-glsl'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), glsl()],
  build: {
    outDir: './docs', // relative to index.html
    // emptyOutDir: true, // true if outDir is inside root. if outDir is not inside root, uncomment this.
  }
})
