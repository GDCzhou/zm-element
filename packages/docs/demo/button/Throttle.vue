<script setup>
import { ZMessage } from "zm-element";
function handleBtnClick() {
  ZMessage.info("btn click");
}
</script>

<template>
  <p>
    <z-button @click="handleBtnClick"> with throttle</z-button>
    <z-button :use-throttle="false" @click="handleBtnClick"
      >without throttle</z-button
    >
  </p>
</template>
