<template>
  <div
    class="cursor"
    :style="{ left: `${position.x}px`, top: `${position.y}px`, backgroundColor: cursorColor }"
  >
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const position = ref({ x: 0, y: 0 });
const cursorColor = ref('transparent');

const updateCursorPosition = (event) => {
  position.value = { x: event.pageX, y: event.pageY };
};

const changeCursorColor = () => {
  cursorColor.value = 'rgba(0, 0, 0, 0.5)';
};

const resetCursorColor = () => {
  cursorColor.value = 'transparent';
};

onMounted(() => {
  document.addEventListener('mousemove', updateCursorPosition);
  document.querySelectorAll('a, button, input, textarea').forEach((element) => {
    element.addEventListener('mouseover', changeCursorColor);
    element.addEventListener('mouseout', resetCursorColor);
  });
});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', updateCursorPosition);
});
</script>

<style scoped>
.cursor {
  width: 20px;
  height: 20px;
  border: 2px solid #06aec5;
  border-radius: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
  pointer-events: none;
  z-index: 999;
  transition: background-color 0.3s ease;
}
</style>
