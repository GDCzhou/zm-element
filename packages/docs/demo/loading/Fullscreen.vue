<script setup>
import { ref } from "vue";
import { ZLoading } from "zm-element";

const loading = ref(false);

function openLoading1() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 20000);
}

function openLoading2() {
  const _loading = ZLoading.service({
    lock: true,
    spinner: "circle-notch",
    text: "加载中...",
    background: "rgba(255,255,255,0.5)",
  });
  setTimeout(() => {
    _loading.close();
  }, 2000);
}
</script>

<template>
  <z-button
    v-loading.fullscreen.lock="loading"
    type="primary"
    @click="openLoading1"
  >
    As a directive
  </z-button>
  <z-button type="primary" @click="openLoading2"> As a service </z-button>
</template>
