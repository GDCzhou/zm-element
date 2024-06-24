import type { Ref } from "vue";

export type CollapseItemName = string | number;

export interface CollapseItemProps {
  /**
   * 唯一标识
   */
  name: CollapseItemName;
  /**
   * 标题
   */
  title: string;
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否默认展开
   */
}

export interface CollapseProps {
  modelValue: CollapseItemName[];
  accordion?: boolean;
}


export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseItemName[]): void;
  (e: 'change', value: CollapseItemName[]): void;
}


export interface CollapseContext {
  activeNames: Ref<CollapseItemName[]>;
  handleItemClick: (name: CollapseItemName) => void;
}
