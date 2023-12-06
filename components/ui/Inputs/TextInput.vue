<template>
  <div>
    <input
      class="app-input"
      :placeholder="placeholder"
    >
    <app-button
      v-if="btnText"
      :text="btnText"
      :outline="btnStyle === 'outline'"
    />
  </div>
</template>

<script setup lang="ts">
import AppButton from "~/components/ui/Buttons/AppButton.vue";

const props = withDefaults(defineProps<{ size: string, placeholder: string, btnStyle: string, type: string, btnText: string }>(), {
  size: 'm',
  btnStyle: 'base',
  type: 'text',
  btnText: null,
  placeholder: 'Введите текст'
})

computed(() => {
  const sizeMap = {
    'l': '100%',
    'm': '400px',
    's': '200px',
    'xs': '200px',
  }

  return sizeMap[props.size.toLowerCase()] || '100%'
})
</script>

<style lang="scss" scoped>
.app-input {
  padding: 10px 15px;
  width: 100%;
  max-width: v-bind();
}
</style>