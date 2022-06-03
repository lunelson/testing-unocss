import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import presetMini from '@unocss/preset-mini';

export default defineConfig({
  plugins: [
    react(),
    Unocss({
      rules: [['shit', { color: 'green' }]],
      presets: [presetMini()],
    }),
  ],
});
