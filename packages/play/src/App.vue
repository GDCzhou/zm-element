<script setup lang="ts">

</script>

<template>
  <ZButton type="primary" size="large" @click="console.log(1)" >button</ZButton>
  <ZAlert type="success" title="title" description="this is a description" :show-icon="true" :visible="true"></ZAlert>
</template>

