<script setup>
import { ZMessage } from "zm-element";

function handleClose() {
  ZMessage.info("close callback");
}
</script>
<template>
  <div class="basic block">
    <z-alert title="Unclosable alert" type="success" :closable="false" />
    <z-alert title="Alert with callback" type="warning" @close="handleClose" />
  </div>
</template>
