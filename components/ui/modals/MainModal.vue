<link rel="stylesheet" href="../../../../../../Downloads/scrolls.scss">
<template>
  <transition name="fade">
    <div v-if="value" class="modal" @click="value = false">
      <div
        class="modal-content"
        :style="{width: width}"
        @click.stop
      >
        hhhh asdas dasd asda sdasdasd asdasd
      </div>
    </div>
  </transition>
</template>
<script setup lang="ts">
import { computed, watch } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{
  modelValue: boolean,
  width: string
}>(), {
  modelValue: false,
  width: '300px'
})

const removeScroll = () => {
  const html = document.querySelector('html')
  if (!html) { return }
  html.style.overflowY = 'hidden'
  // html.style.marginLeft = 'calc(100vw - 100%)'
  // html.style.marginRight = '0'
}

const addScroll = () => {
  const html = document.querySelector('html')
  if (!html) { return }
  html.style.overflowY = 'scroll'
  html.style.paddingRight = '0px'
}
const value = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  }
})
watch(value, (val) => {
  val ? removeScroll() : addScroll()
})
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1100;
  top: -100px;
  bottom: -100px;
  left: -100px;
  right: -100px;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;

  &-content {
    background-color: $white-color;
    color: $black-color;
    border-radius: 20px;
    padding: 24px 16px;
  }
}

</style>
