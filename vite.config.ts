import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: This must match your GitHub repository name exactly
  // If your repo is 'https://github.com/username/market_fear_tracker', use '/market_fear_tracker/'
  base: '/market_mood_tracker/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion', 'recharts', 'lucide-react', 'date-fns'],
        },
      },
    },
  },
});
