export type AlertType = 'success' | 'info' | 'warning' | 'danger';

export interface AlertProps {
  title?: string;
  type?: AlertType;
  description?: string;
  effect?:'dark' | 'light' // 默认 dark
  closable?: boolean;
  center?: boolean;
  showIcon?: boolean;
}

export interface AlertEmits {
  (e: 'close'): void;
}

export type AlertInstance = {
  close: () => void;
  open: () => void;
}
