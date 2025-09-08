
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "route": "/vehicle-details"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 19529, hash: '5ca47cdf8a0f9de58e4c629744c31f6f17f75985a243a9429d2091429425cbfe', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '3199bccdb6d4eadfe7d2257a7d8960f53ba53124b80c598e8b2f06b10b85bf8f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127465, hash: '278df3e9705414d90cdfecd8266d321b4453aefee2c4c9343f6b08430a54d7f5', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'vehicle-details/index.html': {size: 102655, hash: '4c5e42abdb4c88594b07bccaa8cfde97c84687c0f97a3379c73c080ffda9982d', text: () => import('./assets-chunks/vehicle-details_index_html.mjs').then(m => m.default)},
    'index.html': {size: 118562, hash: 'cc765cc11ce815d0aa533ac364a0f58a8f251f34b10dec6fd9623238ee76ddbf', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-BEXXJVGV.css': {size: 422484, hash: '4lJV10rc7bs', text: () => import('./assets-chunks/styles-BEXXJVGV_css.mjs').then(m => m.default)}
  },
};
