import { defineConfig } from 'dumi';

<<<<<<< HEAD
let base: any = '/toa-ui';
let publicPath: any = '/toa-ui/';
=======
// 此处更换为自己的仓库名
let base: any = '/react-ui-library-tutorial';
let publicPath: any = '/react-ui-library-tutorial/';
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e

if (process.env.SITE_BUILD_ENV === 'PREVIEW') {
    base = undefined;
    publicPath = undefined;
}

export default defineConfig({
<<<<<<< HEAD
    title: 'Toa UI',
=======
    title: 'Happy UI',
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
    mode: 'site',
    outputPath: 'doc-site',
    exportStatic: {},
    dynamicImport: {},
    base,
    publicPath,
});