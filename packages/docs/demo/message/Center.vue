<script lang="ts" setup>
import { ZMessage } from "zm-element";

const openCenter = () => {
  ZMessage({
    showClose: true,
    message: "Centered text",
    center: true
  });
};
</script>

<template>
  <z-button plain @click="openCenter">Centered text</z-button>
</template>
