import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
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

// Prerender plugin that creates static HTML files for all routes with dedicated SEO tags and prerendered DOM
function prerenderPlugin(options: { routes: string[] }): Plugin {
  return {
    name: 'vite-plugin-prerender-seo',
    apply: 'build',
    async closeBundle() {
      const distDir = path.resolve(import.meta.dirname || '.', 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const templateHtml = fs.readFileSync(indexPath, 'utf-8');

      // Statically prerender the React DOM markup
      let renderedApp = '';
      try {
        const React = (await import('react')).default;
        const { renderToString } = await import('react-dom/server');
        const { default: App } = await import('./src/App');
        renderedApp = renderToString(React.createElement(App));
      } catch (err) {
        console.warn('Prerender HTML render fallback:', err);
      }

      // Metadata definition for all routes from sitemap.xml
      const routeMetadata: Record<string, {
        title: string;
        description: string;
        ogTitle: string;
        ogDescription: string;
        ogImage: string;
        url: string;
      }> = {
        '/': {
          title: 'Archeon Studio – არქიტექტურული სტუდია & ინტერიერის დიზაინი თბილისი | Architecture Studio Tbilisi',
          description: 'Archeon Studio – წამყვანი არქიტექტურული სტუდია და ინტერიერის დიზაინი თბილისში. სივრცის დაგეგმარება, ლაზერული აზომვა და 3D ვიზუალიზაცია. Leading architecture & interior design studio in Tbilisi, Georgia.',
          ogTitle: 'Archeon Studio – არქიტექტურული სტუდია & ინტერიერის დიზაინი თბილისი',
          ogDescription: 'არქიტექტურული პროექტირება, ინტერიერის დიზაინი, ლაზერული აზომვა და 3D ვიზუალიზაცია თბილისში. Architecture and interior design studio in Tbilisi, Georgia.',
          ogImage: '/assets/aistudio/images/hero_architecture_exterior_1792413464824.jpg',
          url: 'https://archeonstudio.ge/',
        },
        '/about': {
          title: 'ჩვენს შესახებ | About Us – Archeon Studio Tbilisi',
          description: 'გაიცანით Archeon Studio – არქიტექტორთა და დიზაინერთა გუნდი თბილისში. ჩვენი ფილოსოფია, ხედვა და გამოცდილება. About Archeon Studio architects and interior designers in Tbilisi, Georgia.',
          ogTitle: 'ჩვენს შესახებ | About Us – Archeon Studio',
          ogDescription: 'გაიცანით Archeon Studio-ს გუნდი და არქიტექტურული მიდგომა. Learn about our architectural practice, design philosophy, and team in Tbilisi.',
          ogImage: '/assets/aistudio/images/interior_living_travertine_1792413465592.jpg',
          url: 'https://archeonstudio.ge/about/',
        },
        '/services': {
          title: 'სერვისები | Services – Archeon Studio Tbilisi',
          description: 'არქიტექტურული პროექტირება, ინტერიერის დიზაინი, ლაზერული აზომვა, 3D ვიზუალიზაცია და სამუშაო ტექნიკური ნახაზები თბილისში. Comprehensive architectural and interior design services.',
          ogTitle: 'სერვისები | Architectural & Interior Services – Archeon Studio',
          ogDescription: 'არქიტექტურა, ინტერიერის დიზაინი, ლაზერული აზომვა და 3D ვიზუალიზაცია თბილისში. Architectural design, space planning, laser survey, and 3D rendering.',
          ogImage: '/assets/aistudio/images/architectural_drawings_technical_1792413466221.jpg',
          url: 'https://archeonstudio.ge/services/',
        },
        '/portfolio': {
          title: 'პორტფოლიო | Portfolio – Archeon Studio Tbilisi',
          description: 'Archeon Studio-ს შერჩეული არქიტექტურული და ინტერიერის დიზაინის პროექტები. საცხოვრებელი რეზიდენციები, ვილები, ბინები და კომერციული სივრცეები საქართველოში.',
          ogTitle: 'პორტფოლიო | Architecture & Design Portfolio – Archeon Studio',
          ogDescription: 'დაათვალიერეთ Archeon Studio-ს დასრულებული და მიმდინარე არქიტექტურული პროექტები. Explore our residential and commercial architecture projects in Georgia.',
          ogImage: '/assets/aistudio/images/hero_penthouse_minimalist_daylight_1792415040750.jpg',
          url: 'https://archeonstudio.ge/portfolio/',
        },
        '/projects': {
          title: 'პროექტები | Architectural Projects – Archeon Studio Tbilisi',
          description: 'არქიტექტურული და ინტერიერის პროექტების სრული კატალოგი: კერძო სახლები, პენტჰაუსები, შოურუმები და ტექნიკური ნახაზები. Complete portfolio of architecture and interior projects.',
          ogTitle: 'პროექტები | Architectural Projects – Archeon Studio',
          ogDescription: 'Archeon Studio-ს პროექტები: არქიტექტურა, ინტერიერი, 3D რენდერები და ნახაზები. Architectural projects in Tbilisi, Georgia.',
          ogImage: '/assets/aistudio/images/project_cliffside_villa_1792413485642.jpg',
          url: 'https://archeonstudio.ge/projects/',
        },
        '/contact': {
          title: 'კონტაქტი | Contact – Archeon Studio Tbilisi (+995 551 31 62 62)',
          description: 'დაგვიკავშირდით უფასო არქიტექტურულ კონსულტაციაზე: +995 551 31 62 62, hello.archeonstudio@gmail.com, თბილისი, საქართველო. Contact Archeon Studio.',
          ogTitle: 'კონტაქტი | Contact Archeon Studio (+995 551 31 62 62)',
          ogDescription: 'მზად ხართ თქვენი სივრცის გარდაქმნისთვის? დაგვიკავშირდით არქიტექტურულ კონსულტაციაზე. Contact Archeon Studio in Tbilisi, Georgia.',
          ogImage: '/assets/aistudio/images/hero_architecture_exterior_1792413464824.jpg',
          url: 'https://archeonstudio.ge/contact/',
        },
      };

      for (const route of options.routes) {
        const meta = routeMetadata[route] || routeMetadata['/'];
        let html = templateHtml;

        // 1. Replace <title>
        html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`);

        // 2. Replace meta description
        html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${meta.description}"`);

        // 3. Replace og:title & twitter:title
        html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${meta.ogTitle}"`);
        html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"/i, `<meta name="twitter:title" content="${meta.ogTitle}"`);

        // 4. Replace og:description & twitter:description
        html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${meta.ogDescription}"`);
        html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/i, `<meta name="twitter:description" content="${meta.ogDescription}"`);

        // 5. Replace og:url & twitter:url
        html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"/i, `<meta property="og:url" content="${meta.url}"`);
        html = html.replace(/<meta\s+name="twitter:url"\s+content="[^"]*"/i, `<meta name="twitter:url" content="${meta.url}"`);

        // 6. Replace canonical link
        html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/i, `<link rel="canonical" href="${meta.url}" />`);

        // 7. Replace og:image & twitter:image with correct base prepended
        const resolvedImage = meta.ogImage.startsWith('/') && base !== '/'
          ? `${base.replace(/\/$/, '')}${meta.ogImage}`
          : meta.ogImage;
        html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"/i, `<meta property="og:image" content="${resolvedImage}"`);
        html = html.replace(/<meta\s+name="twitter:image"\s+content="[^"]*"/i, `<meta name="twitter:image" content="${resolvedImage}"`);

        // 8. Inject prerendered markup into <div id="root">
        if (renderedApp) {
          html = html.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);
        }

        // 9. Write out to destination
        if (route === '/' || route === '') {
          fs.writeFileSync(indexPath, html, 'utf-8');
        } else {
          const routeFolder = path.join(distDir, route.replace(/^\//, ''));
          if (!fs.existsSync(routeFolder)) {
            fs.mkdirSync(routeFolder, { recursive: true });
          }
          fs.writeFileSync(path.join(routeFolder, 'index.html'), html, 'utf-8');
        }
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
      prerenderPlugin({
        routes: ['/', '/about', '/services', '/portfolio', '/contact', '/projects'],
      }),
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
