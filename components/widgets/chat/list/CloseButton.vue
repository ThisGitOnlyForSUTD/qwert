<template>
  <button class="close" @click="$emit('close')">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="30px"
      viewBox="0 -960 960 960"
      width="30px"
    ><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg>
  </button>
</template>
<script setup lang="ts">
defineEmits(['close'])
</script>
<style lang="scss" scoped>
.close {
  background-color: $black-color;
  border: 2px solid $white-color;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: $transition background-color, $transition border-color;
  &:hover {
    background-color: $blue-color;
    border-color: $blue-color;
    & svg {
      fill: $black-color;
    }
  }
  & svg {
    fill: $white-color;
    transition: $transition fill;
  }
}
</style>
