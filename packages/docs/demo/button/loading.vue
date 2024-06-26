<template>
  <div>
    <z-button type="primary" loading>Loading</z-button>
    <z-button type="primary" loading-icon="circle-notch" loading
      >Loading</z-button
    >
    <z-button type="primary" loading>
      <template #loading>
        <er-icon style="margin-right: 6px" icon="star" spin />
      </template>
      Loading
    </z-button>
  </div>
</template>
