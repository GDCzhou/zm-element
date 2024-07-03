import type { Options } from '@popperjs/core'


export interface TooltipProps extends Options {
  content?: string;
  trigger?: 'hover' | 'click'  | 'contextmenu';
  // 是否显示 tooltip
  visible?: boolean;
  transition?: string;
  showTimeout?: number;
  hideTimeOut?: number;
}

export interface TooltipEmits {
  (e: 'visibleChange', value: boolean): void;
  (e: 'clickOutside'): void;
}

export interface TooltipInstance {
  show: () => void;
  hide: () => void;
}
