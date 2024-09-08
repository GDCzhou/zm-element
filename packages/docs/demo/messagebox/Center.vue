<script setup lang="ts">
import { ZMessage, ZMessageBox } from "zm-element";

function openMsgBox() {
  ZMessageBox.confirm(
    "proxy will permanently delete the file. Continue?",
    "Warning",
    {
      type: "warning",
      center: true,
      // 这里展示一下 不用 Promise 写法的时候
      callback(action) {
        if (action === "confirm") {
          ZMessage.info(action);
        } else {
          ZMessage.warning(action as string);
        }
      },
    }
  );
}
</script>

<template>
  <z-button @click="openMsgBox" plain>Click to open Message Box</z-button>
</template>
