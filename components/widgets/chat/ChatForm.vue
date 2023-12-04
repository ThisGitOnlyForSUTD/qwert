<template>
  <div class="chat">
    <ChatButton />
  </div>
</template>
<script setup>
import ChatButton from '~/components/widgets/chat/ChatButton.vue'
</script>
<style lang="scss" scoped>
.chat {
  position: fixed;
  bottom: 5%;
  right: 2%;

}
</style>
