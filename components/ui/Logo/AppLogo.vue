<template>
  <div class="text-container">
    <span class="text">{{ displayedText }}</span>
    <span v-if="showCursor" class="cursor">|</span>
  </div>
</template>

<script setup>
const text = 'Rassvet'
const displayedText = ref('')
const index = ref(0)
const showCursor = ref(true)

const printSymbol = () => {
  const timeout = Math.round(Math.random() * 300)
  displayedText.value += text[index.value]
  index.value++

  if (index.value < text.length) {
    setTimeout(printSymbol, timeout)
  } else {
    toggleCursor()
  }
}

const toggleCursor = () => {
  setInterval(() => {
    showCursor.value = !showCursor.value
  }, 500)
}

onMounted(() => {
  setTimeout(printSymbol, 400)
})
</script>

<style scoped>
.text-container {
  display: inline-block;
  position: relative;
  font-family: Monument;
}

.cursor {
  position: absolute;
  top: 0;
  right: -7px;
  font-size: 1em;
  width: 5px;
  background: #0AE1FF;
  color: #0AE1FF;
}
</style>
