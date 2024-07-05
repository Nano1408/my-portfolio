import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
      // '@assets': path.resolve(__dirname, 'src/assets'),
      '@proyectos': path.resolve(__dirname, 'src/proyectos'),
      '@moreProjects': path.resolve(__dirname, 'src/moreProjects'),
      '@components': path.resolve(__dirname, 'src/components'),
    },
  },
})
