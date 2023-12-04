<template>
  <button class="app-button">
    <span>{{text}}</span>
  </button>
</template>

<script setup lang="ts">
import Default from "~/layouts/default.vue";

const { text, outline } = withDefaults(defineProps<{ text: string, outline: boolean }>(), {
  text: "Перейти",
  outline: false,
});
</script>

<style lang="scss" scoped>
.app-button {
  padding: 10px 15px;
  border: 1px solid #0AE1FF;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s all;

  &:hover {
    background: none;
    color: #EBE5E1;
  }
}

default {
  color: #080809;
  background: #0AE1FF;
}
</style>

