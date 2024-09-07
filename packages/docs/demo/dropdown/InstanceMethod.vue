<script setup lang="ts">
import type { DropdownItemProps, DropdownInstance } from "zm-element";
import { ref } from "vue";

const items: DropdownItemProps[] = [
  { command: "1", label: "Action 1" },
  { command: "2", label: "Action 2" },
  { command: "3", label: "Action 3", disabled: true },
  { command: "4", label: "Action 4", divided: true },
];
const dropdownRef = ref<DropdownInstance>();
</script>

<template>
  <z-button @click="() => dropdownRef?.open()">open</z-button>
  <z-button @click="() => dropdownRef?.close()">close</z-button>
  <br />
  <z-dropdown ref="dropdownRef" :items="items">
    <span class="dropdown-link">
      Dropdown List
      <z-icon icon="angle-down" />
    </span>
  </z-dropdown>
</template>

<style scoped>
.dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--z-color-primary);
  margin-top: 20px;
  i {
    margin-left: 8px;
  }
}
</style>
