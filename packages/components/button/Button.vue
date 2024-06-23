<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { ref, computed } from 'vue';
import { throttle } from 'lodash-es'
import ZIcon from '../icon/Icon.vue'

defineOptions({
  name: 'ZButton'
})
const props = withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
  tag: 'button',
  throttleTime: 300,
  useThrottle: true
  })

const slots = defineSlots()
const _ref = ref<HTMLButtonElement>()
const emit = defineEmits<ButtonEmits>()
defineExpose<ButtonInstance>({
  ref: _ref
})


const handleClick = (e:MouseEvent) => {
  emit('click',e)
}
const handleClickThrttle = throttle(handleClick, props.throttleTime)

const iconStyle = computed(()=>{
  return {
    marginRight: slots.default ? '6px' : '0'
  }
})
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
  <template v-if="loading">
    <slot name="loading">
      <ZIcon 
      class="loading-icon"
      :icon="loadingIcon?? 'spinner'"
      :style="iconStyle"
      size="1x"
      spin
      />
    </slot >
  </template>
    <ZIcon 
    :icon="icon"
    size="1x"
    :style="iconStyle"
    v-if="icon && !loading"
    />
    <slot />
  </component>
</template>


<style scoped>
@import './style.css';
</style>
