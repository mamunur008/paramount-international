import tailwindcss from '@tailwindcss/vite'
export default defineNuxtConfig({
  compatibilityDate: '2026-08-16',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: { plugins: [tailwindcss()] },
  app: { head: {
    titleTemplate: '%s | Paramount International',
    meta: [
      { name: 'description', content: 'Paramount International delivers enterprise software, cloud engineering, integration and managed IT support from Bangladesh.' },
      { name: 'theme-color', content: '#071d3d' },
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }, { rel: 'manifest', href: '/site.webmanifest' }],
  } },
  routeRules: { '/': { prerender: true }, '/about': { prerender: true }, '/services': { prerender: true }, '/products': { prerender: true }, '/portfolio': { prerender: true }, '/leadership': { prerender: true }, '/contact': { prerender: true } },
  typescript: { strict: true },
})
