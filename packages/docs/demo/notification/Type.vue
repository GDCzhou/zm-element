<script lang="ts" setup>
import { ZNotification } from "zm-element";

const open1 = () => {
  ZNotification({
    title: "Success",
    message: "This is a success message",
    type: "success",
  });
};

const open2 = () => {
  ZNotification({
    title: "Warning",
    message: "This is a warning message",
    type: "warning",
  });
};

const open3 = () => {
  ZNotification({
    title: "Info",
    message: "This is an info message",
    type: "info",
  });
};

const open4 = () => {
  ZNotification({
    title: "Error",
    message: "This is an error message",
    type: "danger",
  });
};
</script>

<template>
  <z-button plain @click="open1"> Success </z-button>
  <z-button plain @click="open2"> Warning </z-button>
  <z-button plain @click="open3"> Info </z-button>
  <z-button plain @click="open4"> Error </z-button>
</template>
