import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  include: ['@fortawesome/free-brands-svg-icons'],
  plugins: [react()]
});
