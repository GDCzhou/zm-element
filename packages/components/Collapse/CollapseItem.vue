<script lang='ts' setup>
import type { CollapseItemProps } from './types'
import { COLLAPSE_CTX_KEY } from './constants'
import { inject, computed } from 'vue'

import ZIcon from '../Icon/Icon.vue';
import transitionEvents from './transtionEvent';

defineOptions({
  name: 'ZCollapseItem'
})

const props = defineProps<CollapseItemProps>()
const ctx = inject(COLLAPSE_CTX_KEY, void 0)
const isActive = computed(() => ctx?.activeNames.value?.includes(props.name))

const handleClick = () => {
  if (props.disabled) return
  ctx?.handleItemClick(props.name)
}

</script>
<template>
  <div class="z-collapse-item" :class="{ 'is-disabled': disabled }">
    <div class="z-collapse-item__header" @click="handleClick" :class="{
      'is-active': isActive,
      'is-disabled': disabled
    }">
      <span class="z-collapse-item_title">
        <slot name="title">
          {{ title }}
        </slot>
      </span>
      <z-icon icon="angle-right" class="header-angle"></z-icon>
    </div>
    <transition v-on="transitionEvents" name="slide">
      <div class="z-collapse-item_wapper " v-show="isActive">
        <div class="z-collapse-item__content" :id="`item-content-${name}`">
          <slot></slot>
        </div>
      </div>
    </transition>

  </div>
</template>

<style scoped>
@import './style.css';
</style>
