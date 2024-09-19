import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/https://github.com/Adalab/modulo-3-evaluacion-final-rocio-ld.git",
});
