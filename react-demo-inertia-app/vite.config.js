import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    server: {
        port: 9000,
    },
    plugins: [
        laravel({
            input: ['resources/scss/app.css', 'resources/scss/app.scss', 'resources/js/app.tsx'],
            refresh: true,
        }),
        react(),
    ],
});