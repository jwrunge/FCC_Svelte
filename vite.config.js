import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [svelte()],
	server: {
		proxy: {
			"/data/php": {
				target: "http://localhost:9000",
				changeOrigin: true,
				// leave path as-is so /data/php/... hits the PHP server
			},
		},
	},
});
