<script lang="ts" setup>
import { ref } from "vue";

const disabled = ref(false);
</script>

<template>
  <z-tooltip
    :disabled="disabled"
    content="click to close tooltip function"
    placement="bottom"
  >
    <z-button @click="disabled = !disabled"
      >click to {{ disabled ? "active" : "close" }} tooltip function</z-button
    >
  </z-tooltip>
</template>
