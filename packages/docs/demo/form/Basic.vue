<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ZMessage } from "zm-element";

const form = reactive({
  name: "",
  region: "",
  delivery: false,
  desc: "",
});

const options = ref([
  { value: "beijing", label: "Zone One" },
  { value: "shanghai", label: "Zone Two" },
]);

const onSubmit = () => {
  ZMessage.success("submit!");
};
</script>

<template>
  <z-form :model="form">
    <z-form-item label="Activity name">
      <z-input v-model="form.name" />
    </z-form-item>
    <z-form-item label="Activity zone">
      <z-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </z-form-item>
    <z-form-item label="Instant delivery">
      <z-switch v-model="form.delivery" />
    </z-form-item>
    <z-form-item label="Activity form">
      <z-input v-model="form.desc" type="textarea" />
    </z-form-item>
    <z-form-item>
      <z-button type="primary" @click="onSubmit">Create</z-button>
      <z-button>Cancel</z-button>
    </z-form-item>
  </z-form>
</template>
