<script setup lang="ts">
import { h, ref } from "vue";
import { ZMessageBox, ZSwitch, type SwitchValueType } from "zm-element";

function open1() {
  ZMessageBox({
    title: "Message",
    message: h("p", null, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
}

function open2() {
  const checked = ref<SwitchValueType>(false);
  ZMessageBox({
    title: "Message",
    message: () =>
      h(ZSwitch, {
        modelValue: checked.value,
        "onUpdate:modelValue": (val: SwitchValueType) => {
          checked.value = val;
        },
      }),
  });
}
</script>

<template>
  <z-button @click="open1" plain>Common VNode</z-button>
  <z-button @click="open2" plain>Dynamic props</z-button>
</template>
