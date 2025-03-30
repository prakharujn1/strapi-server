export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "data:", "blob:", "http://localhost:1337"],
          "frame-ancestors": ["*"],  // Change to your frontend URL
          "media-src": ["'self'", "data:", "blob:", "http://localhost:1337"],
          "img-src": ["'self'", "data:", "blob:", "http://localhost:1337"],
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
