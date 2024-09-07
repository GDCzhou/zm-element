<script setup lang="ts">
import { type DropdownItemProps, ZMessage } from "zm-element";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];

function handleClick() {
  ZMessage.info("button click");
}
</script>

<template>
  <div class="row">
    <z-dropdown :items="items">
      <z-button type="primary">
        Dropdown List
        <z-icon icon="angle-down" style="margin-left: 8px" />
      </z-button>
    </z-dropdown>
    <z-dropdown
      :items="items"
      type="primary"
      @click="handleClick"
      split-button
    >
      Dropdown List
    </z-dropdown>
  </div>
</template>

<style scoped>
.row div {
  margin-right: 16px;
}
</style>
