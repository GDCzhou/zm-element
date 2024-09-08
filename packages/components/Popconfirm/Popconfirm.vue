<script lang="ts" setup>
import { ref, computed } from "vue";
import { addUnit } from "@zm-element/utils";
import type { PopconfirmProps, PopconfirmEmits } from "./types";
import { useLocale } from "@zm-element/hooks";
import type { TooltipInstance } from "../Tooltip";

import ZButton from "../Button/Button.vue";
import ZIcon from "../Icon/Icon.vue";
import ZTooltip from "../Tooltip/Tooltip.vue";

defineOptions({
  name: "ZPopconfirm",
});

const props = withDefaults(defineProps<PopconfirmProps>(), {
  title: "",
  confirmButtonType: "primary",
  icon: "question-circle",
  iconColor: "#f90",
  hideAfter: 200,
  width: 150,
});

const emits = defineEmits<PopconfirmEmits>();
const tooltipRef = ref<TooltipInstance>();
const style = computed(() => ({ width: addUnit(props.width) }));

const { t } = useLocale();

function hidePopper() {
  tooltipRef.value?.hide();
}

function confirm(e: MouseEvent) {
  emits("confirm", e);
  hidePopper();
}

function cancel(e: MouseEvent) {
  emits("cancel", e);
  hidePopper();
}
</script>

<template>
  <z-tooltip ref="tooltipRef" trigger="click" :hide-timeout="hideAfter">
    <template #content>
      <div class="z-popconfirm" :style="style">
        <div class="z-popconfirm__main">
          <z-icon v-if="!hideIcon && icon" :icon="icon" :color="iconColor" />
          {{ title }}
        </div>
        <div class="z-popconfirm__action">
          <z-button
            size="small"
            class="z-popconfirm__cancel"
            :type="cancelButtonType"
            @click="cancel"
          >
            {{ cancelButtonText || t("popconfirm.cancelButtonText") }}
          </z-button>
          <z-button
            size="small"
            class="z-popconfirm__confirm"
            :type="confirmButtonType"
            @click="confirm"
          >
            {{ confirmButtonText || t("popconfirm.confirmButtonText") }}
          </z-button>
        </div>
      </div>
    </template>

    <template v-if="$slots.default" #default>
      <slot name="default"></slot>
    </template>

    <template v-if="$slots.reference" #default>
      <slot name="reference"></slot>
    </template>
  </z-tooltip>
</template>

<style scoped>
@import "./style.css";
</style>
