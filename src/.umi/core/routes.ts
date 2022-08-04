// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'F:/github/new_components/toa/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/~demos/:uuid",
    "layout": false,
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')})],
    "component": ((props) => dynamic({
          loader: async () => {
            const React = await import('react');
            const { default: getDemoRenderArgs } = await import(/* webpackChunkName: 'dumi_demos' */ 'F:/github/new_components/toa/node_modules/@umijs/preset-dumi/lib/plugins/features/demo/getDemoRenderArgs');
            const { default: Previewer } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi-theme-default/es/builtins/Previewer.js');
            const { usePrefersColor, context } = await import(/* webpackChunkName: 'dumi_demos' */ 'dumi/theme');

            return props => {
              
      const { demos } = React.useContext(context);
      const [renderArgs, setRenderArgs] = React.useState([]);

      // update render args when props changed
      React.useLayoutEffect(() => {
        setRenderArgs(getDemoRenderArgs(props, demos));
      }, [props.match.params.uuid, props.location.query.wrapper, props.location.query.capture]);

      // for listen prefers-color-schema media change in demo single route
      usePrefersColor();

      switch (renderArgs.length) {
        case 1:
          // render demo directly
          return renderArgs[0];

        case 2:
          // render demo with previewer
          return React.createElement(
            Previewer,
            renderArgs[0],
            renderArgs[1],
          );

        default:
          return `Demo ${props.match.params.uuid} not found :(`;
      }
    
            }
          },
          loading: () => null,
        }))()
  },
  {
    "path": "/_demos/:uuid",
    "redirect": "/~demos/:uuid"
  },
  {
    "__dumiRoot": true,
    "layout": false,
    "path": "/",
    "wrappers": [dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'../dumi/layout')}), dynamic({ loader: () => import(/* webpackChunkName: 'wrappers' */'F:/github/new_components/toa/node_modules/dumi-theme-default/es/layout.js')})],
    "routes": [
      {
<<<<<<< HEAD
        "path": "/components/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__alert__index.md' */'F:/github/new_components/toa/src/components/alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/alert/index.md",
          "updatedTime": 1659503848492,
=======
        "path": "/alert",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'alert__index.md' */'F:/github/new_components/toa/src/alert/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/alert/index.md",
          "updatedTime": 1659410289416,
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
          "componentName": "alert",
          "title": "Alert 警告提示",
          "nav": {
            "title": "组件",
            "order": 2,
<<<<<<< HEAD
            "path": "/components"
          },
          "group": {
            "title": "基础组件",
            "order": 1,
            "__fallback": true,
            "path": "/components/alert"
=======
            "path": "/alert"
          },
          "group": {
            "title": "反馈",
            "order": 1,
            "__fallback": true,
            "path": "/alert"
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
          },
          "slugs": [
            {
              "depth": 1,
              "value": "Alert 警告提示",
              "heading": "alert-警告提示"
            },
            {
              "depth": 2,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 3,
              "value": "基本用法",
              "heading": "基本用法"
            },
            {
              "depth": 2,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true
        },
<<<<<<< HEAD
        "title": "Alert 警告提示 - Toa UI"
      },
      {
        "path": "/components/button",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__button__index.md' */'F:/github/new_components/toa/src/components/button/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/button/index.md",
          "updatedTime": 1659531725542,
          "title": "Button 按钮组件",
          "route": "/components/button",
          "group": {
            "title": "基础组件",
            "order": 1,
            "__fallback": true,
            "path": "/components/button"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Button 按钮组件",
              "heading": "button-按钮组件"
            },
            {
              "depth": 3,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 4,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "Button 按钮组件 - Toa UI"
      },
      {
        "path": "/components/image",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__image__index.md' */'F:/github/new_components/toa/src/components/image/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/image/index.md",
          "updatedTime": 1659505481097,
          "title": "Image 图片组件",
          "route": "/components/image",
          "group": {
            "title": "基础组件",
            "order": 1,
            "__fallback": true,
            "path": "/components/image"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Image 图片组件",
              "heading": "image-图片组件"
            },
            {
              "depth": 3,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 4,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "Image 图片组件 - Toa UI"
      },
      {
        "path": "/components/scroll",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'components__scroll__index.md' */'F:/github/new_components/toa/src/components/scroll/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "src/components/scroll/index.md",
          "updatedTime": 1659531769299,
          "title": "Scroll Scroll",
          "route": "/components/scroll",
          "group": {
            "title": "基础组件",
            "order": 1,
            "__fallback": true,
            "path": "/components/scroll"
          },
          "slugs": [
            {
              "depth": 2,
              "value": "Scroll Scroll",
              "heading": "scroll-scroll"
            },
            {
              "depth": 3,
              "value": "代码演示",
              "heading": "代码演示"
            },
            {
              "depth": 4,
              "value": "基本使用",
              "heading": "基本使用"
            },
            {
              "depth": 3,
              "value": "API",
              "heading": "api"
            }
          ],
          "hasPreviewer": true,
          "nav": {
            "path": "/components",
            "title": "组件"
          }
        },
        "title": "Scroll Scroll - Toa UI"
=======
        "title": "Alert 警告提示 - Happy UI"
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'docs__index.md' */'F:/github/new_components/toa/docs/index.md')}),
        "exact": true,
        "meta": {
          "filePath": "docs/index.md",
<<<<<<< HEAD
          "updatedTime": 1659504330287,
=======
          "updatedTime": 1659439948257,
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
          "title": "Toa UI",
          "hero": {
            "title": "Toa UI",
            "desc": "<div class=\"markdown\"><p>文档站点基于 dumi 生成</p></div>",
            "actions": [
              {
                "text": "快速上手",
<<<<<<< HEAD
                "link": "/quick"
=======
                "link": "/getting-started"
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
              }
            ]
          },
          "features": [
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png",
              "title": "特性 1",
<<<<<<< HEAD
              "desc": "<div class=\"markdown\"><p>渲染最快的组件库</p></div>"
=======
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d60657df-0822-4631-9d7c-e7a869c2f21c/k79dmz3q_w126_h126.png",
              "title": "特性 2",
<<<<<<< HEAD
              "desc": "<div class=\"markdown\"><p>国内最全的互动游戏组件</p></div>"
=======
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
            },
            {
              "icon": "https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png",
              "title": "特性 3",
<<<<<<< HEAD
              "desc": "<div class=\"markdown\"><p>动画组件支持面最广</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2022<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "Toa UI - Toa UI"
      },
      {
        "path": "/components",
        "meta": {
          "order": 2
        },
        "exact": true,
        "redirect": "/components/alert"
      }
    ],
    "title": "Toa UI",
=======
              "desc": "<div class=\"markdown\"><p>Balabala</p></div>"
            }
          ],
          "footer": "<div class=\"markdown\"><p>Open-source MIT Licensed | Copyright © 2020<br />Powered by <a href=\"https://d.umijs.org/\" target=\"_blank\">dumi<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"\" x=\"0px\" y=\"0px\" viewBox=\"0 0 100 100\" width=\"15\" height=\"15\" class=\"__dumi-default-external-link-icon\"><path fill=\"currentColor\" d=\"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\"></path><polygon fill=\"currentColor\" points=\"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9\"></polygon></svg></a></p></div>",
          "slugs": []
        },
        "title": "Toa UI - Happy UI"
      }
    ],
    "title": "Happy UI",
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
    "component": (props) => props.children
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
