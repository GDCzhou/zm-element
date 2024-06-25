import { isString } from "lodash-es";

class UIErrorMsg extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'UIErrorMsg';
  }
}


export function throwError(message: string) {
  throw new UIErrorMsg(message);
}


export function  debugWarning(error: Error):void;
export function  debugWarning(scope: string, message: string):void;
export function debugWarning(scope: string|Error,message?: string) {
  if (process.env.NODE_ENV === 'development') {
    const err = isString(scope) ? new UIErrorMsg(`[${scope}]: ${message}`) : scope;
    console.warn(err);
  }
}
