<script lang="ts" setup>
import { ZMessage } from "zm-element";

const open1 = () => {
  ZMessage({
    showClose: true,
    message: "This is a message.",
  });
};
const open2 = () => {
  ZMessage({
    showClose: true,
    message: "Congrats, this is a success message.",
    type: "success",
  });
};
const open3 = () => {
  ZMessage({
    showClose: true,
    message: "Warning, this is a warning message.",
    type: "warning",
  });
};
const open4 = () => {
  ZMessage({
    showClose: true,
    message: "Oops, this is a error message.",
    type: "danger",
  });
};
</script>

<template>
  <z-button :plain="true" @click="open1">Message</z-button>
  <z-button :plain="true" @click="open2">Success</z-button>
  <z-button :plain="true" @click="open3">Warning</z-button>
  <z-button :plain="true" @click="open4">Error</z-button>
</template>
