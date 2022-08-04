// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';
import rawCode1 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/alert/demo/basic.tsx?dumi-raw-code';
import rawCode2 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/alert/index.tsx?dumi-raw-code';
import rawCode3 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/alert/style/index.ts?dumi-raw-code';
import rawCode4 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/alert/style/index.less?dumi-raw-code';
import rawCode5 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/button/demo/basic.tsx?dumi-raw-code';
import rawCode6 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/button/index.ts?dumi-raw-code';
import rawCode7 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/button/interface.ts?dumi-raw-code';
import rawCode8 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/button/button.tsx?dumi-raw-code';
import rawCode9 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/image/demo/basic.tsx?dumi-raw-code';
import rawCode10 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/image/index.ts?dumi-raw-code';
import rawCode11 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/image/interface.ts?dumi-raw-code';
import rawCode12 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/image/image.tsx?dumi-raw-code';
import rawCode13 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/scroll/demo/basic.tsx?dumi-raw-code';
import rawCode14 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/scroll/index.ts?dumi-raw-code';
import rawCode15 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/scroll/interface.ts?dumi-raw-code';
import rawCode16 from '!!dumi-raw-code-loader!F:/github/new_components/toa/src/components/scroll/scroll.tsx?dumi-raw-code';

export default {
  'alert-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_trela" */'F:/github/new_components/toa/src/components/alert/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode1},"index.tsx":{"import":"./../index","content":rawCode2},"style/index.ts":{"import":"../style","content":rawCode3},"style/index.less":{"import":"./index.less","content":rawCode4}},"dependencies":{"react":{"version":"18.2.0"},"prop-types":{"version":"15.8.1"}},"componentName":"alert","identifier":"alert-basic"},
  },
  'button-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'F:/github/new_components/toa/src/components/button/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode5},"index.ts":{"import":"../","content":rawCode6},"interface.ts":{"import":"./interface","content":rawCode7},"button.tsx":{"import":"./button","content":rawCode8}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"button-basic"},
  },
  'image-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'F:/github/new_components/toa/src/components/image/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode9},"index.ts":{"import":"./../index","content":rawCode10},"interface.ts":{"import":"./interface","content":rawCode11},"image.tsx":{"import":"./image","content":rawCode12}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"image-basic"},
  },
  'scroll-basic': {
    component: dynamic({
      loader: async () => (await import(/* webpackChunkName: "demos_no_comp" */'F:/github/new_components/toa/src/components/scroll/demo/basic.tsx')).default,
      loading: () => null,
    }),
    previewerProps: {"sources":{"_":{"tsx":rawCode13},"index.ts":{"import":"../","content":rawCode14},"interface.ts":{"import":"./interface","content":rawCode15},"scroll.tsx":{"import":"./scroll","content":rawCode16}},"dependencies":{"react":{"version":"18.2.0"}},"identifier":"scroll-basic"},
  },
};
