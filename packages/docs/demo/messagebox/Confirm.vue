<script setup lang="ts">
import { ZMessageBox, ZMessage } from "zm-element";

function openConfirm() {
  ZMessageBox.confirm("proxy will permanently delete the file. Continue?", "Warning", { type: "warning" })
    .then((action) => {
      ZMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      ZMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <z-button @click="openConfirm" plain> Click to open the Confirm</z-button>
</template>
