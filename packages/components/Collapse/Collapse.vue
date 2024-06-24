<script lang='ts' setup>
import type { CollapseEmits, CollapseItemName, CollapseProps } from './types'
import { ref } from 'vue'
import { COLLAPSE_CTX_KEY } from './constants'
import { provide, watch } from 'vue'

defineOptions({
  name: 'ZCollapse'
})

const props = defineProps<CollapseProps>()
const emit = defineEmits<CollapseEmits>()
const activeNames = ref<CollapseItemName[]>(props.modelValue)

if (props.accordion && activeNames.value.length > 1) {
  console.warn('[Z-UI WARNING] When accordion is true, only one collapse item can be selected at a time.')
}


function handleItemClick(item: CollapseItemName) {
  let _activeName = [...activeNames.value]
  if (props.accordion) {
    _activeName = [_activeName[0] === item ? '' : item]
    updateActiveNames(_activeName)
    return
  }
  const index = _activeName.indexOf(item)
  if (index > -1) {
    _activeName.splice(index, 1)
  } else {
    _activeName.push(item)
  }
  updateActiveNames(_activeName)
}

function updateActiveNames(newValue: CollapseItemName[]) {  
  activeNames.value = newValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

watch(() => props.modelValue, (newValue) => {
  updateActiveNames(newValue)
})
provide(COLLAPSE_CTX_KEY, {
  handleItemClick,
  activeNames
})


</script>
<template>
  <div class="z-collapse">
    <slot></slot>
  </div>
</template>

<style scoped>
@import './style.css';
</style>
