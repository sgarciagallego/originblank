export default function Robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/*/404',
    },
    sitemap: 'https://originblank.com/sitemap.xml',
  }
}