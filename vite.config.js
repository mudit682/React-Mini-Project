// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Remove this line
// import deno from '@deno/vite-plugin';

export default defineConfig({
  plugins: [react()],
});
