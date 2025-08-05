
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
    'index.csr.html': {size: 9479, hash: '096cc5d28ffa1e70311e8eab271049649e7070c6e543964a0e5b4d0c98f278c8', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: '273ef32f90b441015c3571b665269bd9e9565b30459124c265f12f1f00cc4f96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vehicle-details/index.html': {size: 73791, hash: 'aea61d0f1ab3a039653d40090b1c5a49e6af83eae3c1992cbfc9302f28269fc4', text: () => import('./assets-chunks/vehicle-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 97909, hash: '011f58f7a92c2dab12a535109e88121d6f4a4ded31c948ddb4d75fda3229a016', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 110379, hash: '3b71fda199681b3a570e5a316705712b2a801945bf26f4e964d1a516841648a1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XISE5V6I.css': {size: 396879, hash: 'gLVeo8Jxijw', text: () => import('./assets-chunks/styles-XISE5V6I_css.mjs').then(m => m.default)}
  },
};
