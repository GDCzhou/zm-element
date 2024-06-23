<script lang='ts' setup>
  import { provide, reactive, toRef} from 'vue'
  import { BUTTON_GROUP_CTX_KEY } from './constants'
  import type { ButtonGroupProps} from './types'

  defineOptions({
    name: 'ZButtonGroup'
  })

  const props = defineProps<ButtonGroupProps>()
  provide(BUTTON_GROUP_CTX_KEY, 
    reactive({
      size: toRef(props, 'size'),
      type: toRef(props, 'type'),
      disabled: toRef(props, 'disabled')
    })
  )
</script>
<template>
  <div class="z-button-group">
    <slot />
  </div>
</template>

<style scoped>
@import './style.css'
</style>
