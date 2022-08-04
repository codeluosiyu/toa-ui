import { defineConfig } from 'dumi';

let base: any = '/toa-ui';
let publicPath: any = '/toa-ui/';

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined;
    publicPath = undefined;
}

export default defineConfig({
    title: 'Toa UI',
    mode: 'site',
    outputPath: 'doc-site',
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath,
});