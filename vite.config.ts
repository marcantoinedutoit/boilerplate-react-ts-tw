import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
    define: {
        'process.env': {},
    },
    plugins: [
        [tsconfigPaths()],
        react(),
    ],
    build: {
        outDir: 'build',
    },
    server: {
        open: true,
        port: 3000
    },
});

