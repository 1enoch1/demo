import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server: {
        port: 9000,
    },
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/scss/app.scss', 'resources/js/app.tsx', 'resources/js/Pages/Test.tsx'],
            refresh: true,
        }),
        react(),
        tailwindcss()
    ],
});