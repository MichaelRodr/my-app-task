import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from '@honkhonk/vite-plugin-svgr';
import Icons from 'unplugin-icons/vite';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Icons(),
		svgr({
			keepEmittedAssets: true,
			svgrOptions: {
				icon: true,
				dimensions: false,
			},
		}),
		react(),
	],
});
