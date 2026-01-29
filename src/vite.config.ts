import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {},
	build: {
		minify: 'terser',
		sourcemap: true,
		outDir: 'dist',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules/@mui')) {
						return 'mui-vendor';
					}

					if (id.includes('node_modules/chart.js') || id.includes('node_modules/			react-chartjs-2')) {
						return 'chart-vendor';
					}

					if (id.includes('node_modules/react')) {
						return 'react-vendor';
					}
					// Default: let Vite auto-split
				},
			},
		},
	},
});
