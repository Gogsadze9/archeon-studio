import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';

// For GitHub Pages: "/archeon-studio/"
// For Cloudflare Pages + custom domain archeon.ge: "/"
const base = process.env.VITE_BASE_PATH || '/archeon-studio/';

// Plugin to automatically prepend Vite's base to public asset paths in code during build
function prependBasePlugin(basePath: string): Plugin {
  const normalizedBase = basePath.endsWith('/') ? basePath : `${basePath}/`;
  return {
    name: 'prepend-base-to-assets',
    transform(code: string, id: string) {
      if ((id.includes('/src/') || id.includes('/index.html')) && code.includes('/assets/aistudio/images/')) {
        return {
          code: code
            .replaceAll('"/assets/aistudio/images/', `"${normalizedBase}assets/aistudio/images/`)
            .replaceAll("'/assets/aistudio/images/", `'${normalizedBase}assets/aistudio/images/`),
          map: null,
        };
      }
    },
  };
}

export default defineConfig(() => {
  return {
    base,
    publicDir: 'public',
    plugins: [
      react(),
      tailwindcss(),
      prependBasePlugin(base),
      {
        name: 'dev-root-fallback',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            // Allow dev server preview at root http://localhost:3000/ to serve the base path
            if (req.url === '/' || req.url === '') {
              req.url = base;
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname || '.', '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
