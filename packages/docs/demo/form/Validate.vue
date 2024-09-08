<script lang="ts" setup>
import { reactive, ref } from "vue";
import { ZMessage, type FormInstance } from "zm-element";

const formRef = ref<FormInstance>();
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

const rules = reactive({
  name: [
    { required: true, message: "请输入活动名称", trigger: "blur" },
    { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
  ],
  region: [{ required: true, message: "请选择活动区域", trigger: "change" }],
  desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
});

const onSubmit = () => {
  formRef.value?.validate().then((valid) => {
    if (valid) {
      ZMessage.success("submit!");
    }
  });
};

const onReset = () => {
  formRef.value?.resetFields();
};
</script>

<template>
  <z-form ref="formRef" :model="form" :rules="rules">
    <z-form-item label="Activity name" prop="name">
      <z-input v-model="form.name" />
    </z-form-item>
    <z-form-item label="Activity zone" prop="region">
      <z-select
        v-model="form.region"
        placeholder="please select your zone"
        :options="options"
      />
    </z-form-item>
    <z-form-item label="Instant delivery" prop="delivery">
      <z-switch v-model="form.delivery" />
    </z-form-item>
    <z-form-item label="Activity form" prop="desc">
      <z-input v-model="form.desc" type="textarea" />
    </z-form-item>
    <z-form-item>
      <z-button type="primary" @click="onSubmit">Create</z-button>
      <z-button @click="onReset">Reset</z-button>
    </z-form-item>
  </z-form>
</template>
