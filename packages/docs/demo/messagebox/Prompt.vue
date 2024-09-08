<script setup lang="ts">
import { ZMessageBox, ZMessage } from "zm-element";

function openConfirm() {
  ZMessageBox.prompt("Place input your name", "Tip", { type: "info" })
    .then(({ value }) => {
      ZMessage.info(`your name is: ${value}`);
    })
    .catch((action) => {
      ZMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <z-button @click="openConfirm" plain> Click to open the Confirm</z-button>
</template>
