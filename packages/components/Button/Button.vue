<script setup lang="ts">
import type { ButtonProps, ButtonEmits, ButtonInstance } from './types';
import { ref, computed, inject } from 'vue';
import { throttle } from 'lodash-es'
import { BUTTON_GROUP_CTX_KEY } from './constants'

import ZIcon from '../Icon/Icon.vue'

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
const buttonGroupCtx = inject(BUTTON_GROUP_CTX_KEY, void 0)




/** computed */
const size = computed(()=> buttonGroupCtx?.size ?? props.size ?? '')
const type = computed(()=> buttonGroupCtx?.type ?? props.type ?? '')
const disabled = computed(()=> buttonGroupCtx?.disable ?? props.disabled ?? '')
const iconStyle = computed(()=>{
  return {
    marginRight: slots.default ? '6px' : '0'
  }
})

/** 事件 */
const handleClick = (e:MouseEvent) => {
  emit('click',e)
  console.log('test')
}
const handleClickThrttle = throttle(handleClick, props.throttleTime)


defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
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
