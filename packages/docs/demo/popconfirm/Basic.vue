<script setup lang="ts">
import { ja, ko, en, zhCn, zhTw,  ZConfigProvider } from "zm-element";
import { get } from "lodash-es";

import { computed, ref } from "vue";

const language = ref("");
const langMap = {
  ja,
  ko,
  en,
  zhCn,
  zhTw,
} as const;
const locale = computed(() => get(langMap, language.value));


const changelang = () => {
  const l = ["zhCn", "zhTw", "ko", "en", "ja"];
  language.value = l[(l.indexOf(language.value) + 1) % l.length];
  console.log(locale.value);
};
</script>
<template>
  <z-button @click="changelang" type="info" style="margin-right: 20px"
    >change language</z-button>
  <z-config-provider :locale="locale">
    <z-popconfirm title="Are you shure to delete this item?">
      <z-button>Delete</z-button>
    </z-popconfirm>
  </z-config-provider>
</template>
