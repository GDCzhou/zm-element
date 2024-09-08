<script setup lang="ts">
import { h } from "vue";
import { ZMessage, ZMessageBox } from "zm-element";
import { delay } from "lodash-es";

async function openMsgBox() {
  try {
    const action = await ZMessageBox({
      title: "Message",
      message: h("p", null, [
        h("span", null, "Message can be "),
        h("i", { style: "color: teal" }, "VNode"),
      ]),
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
      type: "danger",
      icon: "trash",
      beforeClose(action, instance, done) {
        if (action !== "confirm") {
          done();
          return;
        }

        instance.confirmButtonLoading = true;
        instance.confirmButtonText = "Loading...";
        delay(() => {
          done();
          delay(() => (instance.confirmButtonLoading = false), 1000);
        }, 3000);
      },
    });

    ZMessage.info(`action : ${action}`);
  } catch (action) {
    ZMessage.warning(`action : ${action}`);
  }
}
</script>

<template>
  <z-button @click="openMsgBox" plain>Click to open Message Box</z-button>
</template>
