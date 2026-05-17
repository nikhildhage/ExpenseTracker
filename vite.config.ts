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
					const marker = 'node_modules/';
					const idx = id.lastIndexOf(marker);
					if (idx === -1) return;
					const rest = id.slice(idx + marker.length);
					const match = rest.match(/^(?:(@[^/]+)\/)?([^/]+)/);
					if (!match) return;
					const pkg = match[1] ? `${match[1]}/${match[2]}` : match[2];

					if (pkg.startsWith('@mui/') || pkg.startsWith('@emotion/')) return 'mui-vendor';
					if (pkg === 'chart.js' || pkg === 'react-chartjs-2') return 'chart-vendor';
					if (pkg === 'react' || pkg === 'react-dom') return 'react-vendor';
					// everything else: let Vite auto-split
				},
			},
		},
	},
});
