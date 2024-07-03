<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { createPopper, type Instance } from '@popperjs/core'
import type { TooltipProps} from './types'


defineOptions({
  name: 'ZTooltip'
})
const props = withDefaults(defineProps<TooltipProps>(), {
  trigger: 'hover',
  // content: ''
placement: 'auto'
})

const popperRef = ref()
const contentRef = ref()
const isShow = ref(false)
const hoverEvents = ref<Record<string,EventListener>>({})
const clickEvents = ref<Record<string,EventListener>>({})
let popperInstance:Instance

function show() {
  // contentRef.value.setAttribute('data-show', '');
  isShow.value = true
  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.setOptions(options => {
    return { ...options,
      modifiers: [
            ...options.modifiers as any[],
            { name: 'eventListeners', enabled: true },
          ],
    }
  })
  popperInstance.update();
}

clickEvents.value['click'] = isShow.value ? hide : show

function hide() {
        // Hide the tooltip
        // tooltip.removeAttribute('data-show');
        isShow.value = false

        // Disable the event listeners
        popperInstance.setOptions((options) => ({
          ...options,
          modifiers: [
            ...options.modifiers as any[],
            { name: 'eventListeners', enabled: false },
          ],
        }));
      }

const showEvents = ['mouseenter', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  hoverEvents.value[event] = show
});

hideEvents.forEach((event) => {
  hoverEvents.value[event]= hide
});

onMounted(() => {
  popperInstance = createPopper(popperRef.value, contentRef.value, {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      }
      ,...props.modifiers
    ]
  }
  )
})
</script>
<template>
  <div class="tooltip-container">
    <div ref="popperRef" id="popper" v-on="trigger==='hover'? hoverEvents : clickEvents">
      <slot></slot>
    </div>
    <div ref="contentRef" id="tooltip" role="tooltip" v-show="isShow" >
      <slot name="content"></slot>
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<style scoped>
@import './style.css';

</style>
