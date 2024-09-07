<script lang="ts" setup>
import { ZMessage } from "zm-element";

const open1 = () => {
  ZMessage({
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open2 = () => {
  ZMessage.success("Congrats, this is a success message.");
};
</script>
<template>
  <div>
    <z-button @click="open1">插件式调用</z-button>
    <z-button @click="open2">函数式调用</z-button>
    <z-button @click="$message.success('Congrats, this is a success message.')"
      >全局方法调用</z-button
    >
  </div>
</template>
