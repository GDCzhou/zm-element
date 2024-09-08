<script lang="ts" setup>
import {ZNotification} from 'zm-element'

const open = () => {
  ZNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>

<template>
  <z-button plain @click="open"> Hide close button </z-button>
</template>
