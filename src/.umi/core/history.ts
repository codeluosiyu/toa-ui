// @ts-nocheck
import { createBrowserHistory, History } from 'F:/github/new_components/toa/node_modules/umi/node_modules/@umijs/runtime';

let options = {
<<<<<<< HEAD
  "basename": "/toa-ui"
=======
  "basename": "/react-ui-library-tutorial"
>>>>>>> 3968ddb6d71f1e972ba42c3db2e0a1297c05518e
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
