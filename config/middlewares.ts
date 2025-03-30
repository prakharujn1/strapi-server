export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        directives: {
          "default-src": ["'self'", "data:", "blob:", "http://localhost:1337", "https://clc-website-indol.vercel.app"],
          "frame-ancestors": ["'self'", "http://localhost:5173","https://clc-website-indol.vercel.app"], // Change to your frontend URL
          "media-src": ["'self'", "data:", "blob:", "http://localhost:1337","https://clc-website-indol.vercel.app"],
          "img-src": ["'self'", "data:", "blob:", "http://localhost:1337","https://clc-website-indol.vercel.app"],
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
