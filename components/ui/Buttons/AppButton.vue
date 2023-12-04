<template>
  <button :class="['app-button', outline ? 'outline' : 'base']">
    <span>{{text}}</span>
  </button>
</template>

<script setup lang="ts">
const { text, outline } = withDefaults(defineProps<{ text: string, outline: boolean }>(), {
  text: "Перейти",
  outline: false,
});
</script>

<style lang="scss" scoped>
.app-button {
  padding: 10px 15px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s all;

  &:hover {
    background: none;
    color: #EBE5E1;
  }
}

.base {
  color: #080809;
  background: #0AE1FF;
  border: 1px solid #0AE1FF;
  border-radius: 4px;

  &:hover {
    background: none;
    color: #EBE5E1;
  }
}

.outline {
  color: #EBE5E1;
  border: 1px solid #EBE5E1;
  border-radius: 4px;
  background: none;

  &:hover {
    border: 1px solid #0AE1FF;
    color: #0AE1FF;
  }
}
</style>

