<template>
  <div class="chat">
    <ChatButton
      v-if="!isChatOpen"
      @open-chat="isChatOpen = true"
    />
  </div>
</template>
<script setup lang="ts">
import ChatButton from '~/components/widgets/chat/ChatButton.vue'
const isChatOpen = ref(false)
</script>
<style lang="scss" scoped>
.chat {
  position: fixed;
  bottom: 5%;
  right: 2%;

}
</style>
