<script setup lang="ts">
import { h } from "vue";
import { ZNotification } from "zm-element";

function openNotify1() {
  ZNotification({
    title: "Title",
    message: h("i", { style: "color:teal" }, "This is a remider"),
    position:'bottom-right'
  });
}

function openNotify2() {
  ZNotification({
    title: "Prompt",
    message: "This is a message that does not auto close",
    duration: 0,
    position:'top-left'
  });
}
</script>

<template>
  <z-button @click="openNotify1" plain>Closes automatically</z-button>
  <z-button @click="openNotify2" plain>Won't closes automatically</z-button>
</template>
