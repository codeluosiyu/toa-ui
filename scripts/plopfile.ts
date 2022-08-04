/* eslint-disable  import/no-extraneous-dependencies */
import { NodePlopAPI } from 'plop';
import path from 'path';

export default function (plop: NodePlopAPI) {
  plop.setGenerator('component', {
    description: '创建一个新组件',
    prompts: [
      { type: 'input', name: 'name', message: '请输入组件名称（多个单词以中横线命名）' },
      { type: 'input', name: 'CN', message: '请输入组件中文名称' },
      { type: 'input', name: 'description', message: '请输入组件描述' },
    ],
    actions: [
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/index.ts'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/index.ts'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/index.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/{{kebabCase name}}.tsx'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/{{kebabCase name}}.tsx'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/comp.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/style/index.less'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/style/index.less'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/style/style.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/style/index.ts'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/style/index.ts'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/style/index.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/index.md'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/index.md'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/doc.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/interface.ts'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/interface.ts'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/interface.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/demo/basic.tsx'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/demo/basic.tsx'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/demo/basic.hbs'),
      },
      {
        type: 'add',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/{{kebabCase name}}/__tests__/index.test.tsx'),
=======
        path: path.resolve(__dirname, '../components/{{kebabCase name}}/__tests__/index.test.tsx'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        templateFile: path.resolve(__dirname, '../templates/component/__tests__/index.test.hbs'),
      },
      {
        type: 'append',
<<<<<<< HEAD
        path: path.resolve(__dirname, '../src/components/index.ts'),
=======
        path: path.resolve(__dirname, '../components/index.ts'),
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: "export { default as {{pascalCase name}} } from './{{kebabCase name}}';",
      },
    ],
  });
}