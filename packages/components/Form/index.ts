import Form from "./Form.vue";
import FormItem from "./FormItem.vue";
import { withInstall } from "@zm-element/utils";

export const ZForm = withInstall(Form);
export const ZFormItem = withInstall(FormItem);

export * from "./types";
export * from "./hooks";
