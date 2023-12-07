<template>
  <div>
    <label />
    <input
      :class="['app-input', outline ? 'outline' : 'base']"
      :placeholder="placeholder"
    >
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ size: string, placeholder: string, type: string, outline: boolean }>(), {
  size: 'm',
  type: 'text',
  placeholder: 'Введите текст',
  outline: false
})

const inputWidth = computed(() => {
  const sizeMap = {
    l: '100%',
    m: '400px',
    s: '200px',
    xs: '200px'
  }

  return sizeMap[props.size.toLowerCase()] || '100%'
})
</script>

<style lang="scss" scoped>
.app-input {
  padding: 10px 15px;
  width: 100%;
  color: $white-color;
  max-width: v-bind(inputWidth);
  transition: 0.2s ease-in;
  border: none;
}

.base {
  border-radius: 4px;
  border: 2px solid rgba(10, 225, 255, 0.5) !important;

  &:focus {
    border: 2px solid $blue-color;
  }
}

.outline {
  border-bottom: 2px solid rgba(10, 225, 255, 0.5) !important;

  &:focus {
    border-bottom: 2px solid $blue-color !important;
  }
}
</style>
