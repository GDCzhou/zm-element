<script lang='ts' setup>
import type { AlertEmits, AlertInstance, AlertProps } from './types'

import { ref, useSlots, computed } from 'vue'
import { typeIconMap } from '@zm-element/utils'
import ZIcon from '../Icon/Icon.vue';


defineOptions({
  name: 'ZAlert'
})

const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  closable: true,
  type: 'info',
})

const visible = ref(true)
const emits = defineEmits<AlertEmits>()
const slots = useSlots()

const close = () => {
  visible.value = false
  emits('close')
}
const open = () => {
  visible.value = true
}

const iconName = computed(() => {
  return typeIconMap.get(props.type) ?? 'circle-info'
})
const withDescription = computed(() => {
  return slots.description || slots.default
})

defineExpose<AlertInstance>({
  close,
  open,
})
</script>
<template>
  <transition name="z-alert-fade">
    <div :class="{
      [`z-alert__${type}`]: type,
      [`z-alert__${effect}`]: effect,
      'text-center': center
    }" v-show="visible" class="z-alert" role="alert">
      <z-icon 
      v-if="showIcon" 
      class="z-alert__icon" 
      :class="{
        'big-icon': withDescription
      }" 
      :icon=iconName
      />
      <div class="z-alert__content">

        <span class="z-alert__title" 
        :class="{'with-desc': withDescription}"
        :style="{display:center && !showIcon ? 'flow' :' inline'}"
        >
          <slot name="title"> {{ title }}</slot>
        </span>
        <p class="z-alert__description">
          <slot> {{ description }}</slot>
        </p>
        <div class="z-alert__close" v-if="closable">
          <z-icon icon="xmark" @click.stop="close" />
        </div>
      </div>
    </div>

  </transition>
</template>

<style scoped>
@import "./style.css";
</style>
