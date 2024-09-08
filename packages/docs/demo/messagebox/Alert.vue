<script setup lang="ts">
import { ZMessageBox, ZMessage } from "zm-element";

function openAlert() {
  ZMessageBox.alert("This is a message", "Title")
    .then((action) => {
      ZMessage.info(`action: ${action}`);
    })
    .catch((action) => {
      ZMessage.warning(`action: ${action}`);
    });
}
</script>

<template>
  <z-button @click="openAlert" plain> Click to open the Alert</z-button>
</template>
