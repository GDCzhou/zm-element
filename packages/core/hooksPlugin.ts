import { each, isFunction } from 'lodash-es'
import shell from 'shelljs'
import type { Plugin } from 'vite'

export default function customHooksPlugin({
    rmFiles = [],
    afterBuild,
    beforeBuild,
}:{
  beforeBuild?: Function;
  afterBuild?: Function;
  rmFiles?: string[];
}): Plugin {
  return {
    name: 'customHooksPlugin',
    buildStart() {
      each(rmFiles, (fname)=> shell.rm('-rf', fname));
      isFunction(beforeBuild) && beforeBuild();
    },
    buildEnd(err) {
      (!err) && isFunction(afterBuild) && afterBuild();
    }
  }
}

