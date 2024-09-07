<script lang="ts" setup>
import { h } from "vue";
import { ZMessage } from "zm-element";


const open = () => {
  ZMessage("This is a message.");
};

const openVn = () => {
  ZMessage({
    message: h("p", { style: "line-height: 1; font-size: 14px" }, [
      h("span", null, "Message can be "),
      h("i", { style: "color: teal" }, "VNode"),
    ]),
  });
};
</script>

<template>
  <z-button :plain="true" @click="open">Show message</z-button>
  <z-button :plain="true" @click="openVn">VNode</z-button>
</template>
