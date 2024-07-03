<script setup lang="ts">

</script>

<template>
  <div class="container">
    <ZTooltip>
      <ZButton type="primary" size="large">button</ZButton>
      <template #content>
        content
      </template>
    </ZTooltip>
    <ZButton type="primary" size="large" @click="console.log(1)">button</ZButton>
    <ZAlert type="success" title="title" description="this is a description" :show-icon="true" :visible="true"></ZAlert>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
