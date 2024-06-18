<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { ref } from 'vue';
import { throttle } from 'lodash-es'

defineOptions({
  name: 'ZButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
  tag: 'button',
  throttleTime: 300,
  useThrottle: true
  })

const slote = defineSlots()
const _ref = ref<HTMLButtonElement>()
const emit = defineEmits<ButtonEmits>()
defineExpose<ButtonInstance>({
  ref: _ref
})


const handleClick = (e:MouseEvent) => {
  emit('click',e)
}
const handleClickThrttle = throttle(handleClick, props.throttleTime)

</script>

<template>
  <component 
  :is="props.tag"
  ref="_ref"
  class="z-button"
  :class = "{
    [`z-button--${type}`]: type,
    [`z-button--${size}`]: size,
    'is-disabled': disabled,
    'is-loading': loading,
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
  }"
  :disabled="disabled || loading ? true : void 0"
  :autofocus="autofocus"
  :type="tag === 'button' ? nativeType : void 0"
  @click="(e:MouseEvent) => useThrottle ? handleClickThrttle(e) : handleClick(e)"
  >
    <slot></slot>
  </component>
</template>


<style scoped>
@import './style.css';
</style>
