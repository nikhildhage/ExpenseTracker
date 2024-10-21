import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {},
	build: {
		minify: 'terser',
		sourcemap: true,
		outDir: 'dist',
		emptyOutDir: true,
	},
});
