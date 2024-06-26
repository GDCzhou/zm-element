<script setup>
import { ErMessage } from "eric-ui";
function handleBtnClick() {
  ErMessage.info("btn click");
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
