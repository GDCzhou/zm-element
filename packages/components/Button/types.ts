import type { Component, Ref, ComputedRef} from 'vue'

export type ButtonType = "primary" | "success" | "warning" | "danger" | "info";
export type ButtonSize = 'large' | 'default' | 'small' 
export type NativeType = 'button' | 'submit' | 'reset'


export interface ButtonProps {
  /** 按钮类型 */
  type?: ButtonType
  /** 按钮大小 */
  size?: ButtonSize
  /** 按钮原生类型 */
  nativeType?: NativeType
  /** 是否禁用按钮 */
  disabled?: boolean
  /** 是否加载中 */
  loading?: boolean
  /** 是否朴素按钮 */
  plain?: boolean
  /** 是否圆角按钮 */
  round?: boolean
  /** 是否圆形按钮 */
  circle?: boolean
  /** 按钮组件 */
  tag?:string| Component
  /** 节流模式*/
  useThrottle?: boolean
  /** 节流时间 */
  throttleTime?: number
  /** icon图标 */
  loadingIcon?: string
  /** 是否自动获取焦点 */
  autofocus?: boolean
  /** icon */
  icon?: string
  onClick?: (e: MouseEvent) => void
}


/** click event */
export interface ButtonEmits {
  (e: "click", value: MouseEvent): void;
}


/** compoenent instance */
export interface ButtonInstance {
  ref: Ref<HTMLButtonElement| void>
  disabled: ComputedRef
  size: ComputedRef
  type: ComputedRef
}


export interface ButtonGroupContext {
  size?: ButtonSize
  type?: ButtonType
  disable?: boolean
} 

export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}
