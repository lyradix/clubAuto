
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
    'index.csr.html': {size: 19529, hash: '1eebddcb53581593d972afa19f71143399faa172ebf4e6486a42b8dd0b2704cd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1005, hash: 'b37d03b02ab07146682288d99a3509b5ba6dd858533674822331db376d62a4b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'vehicle-details/index.html': {size: 102372, hash: '916dd383572490fba4dacea193fdaa9622cc74d1f1ff212f044a2ed4c7c36ae6', text: () => import('./assets-chunks/vehicle-details_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 127182, hash: '127de1d213bfd8d685bb44250139ac94380342ffdda696592a0e6b2af213476f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 118067, hash: 'e6cdd87693ac6709b9f3587b31f1a5c47574a83d449998a16f350ecf8e9b481c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-P7C6FOJ7.css': {size: 422484, hash: 'yB5i+3cQFRI', text: () => import('./assets-chunks/styles-P7C6FOJ7_css.mjs').then(m => m.default)}
  },
};
