<template>
  <div class="chat">
    <transition name="fade">
      <ChatButton
        v-show="!isChatOpen"
        class="chat-close"
        @open-chat="isChatOpen = true"
      />
    </transition>
    <transition name="slide">
      <ChatList
        v-show="isChatOpen"
        @close-chat="isChatOpen = false"
      />
    </transition>
  </div>
</template>
<script setup lang="ts">
import ChatButton from '~/components/widgets/chat/ChatButton.vue'
import ChatList from '~/components/widgets/chat/list/ChatList.vue'
const isChatOpen = ref(false)
</script>
<style lang="scss" scoped>
.chat {
  position: fixed;
  bottom: 0;
  right: 2%;
  min-height: 64px;
  min-width: 64px;
  z-index: 1000;
  &-close {
    position: absolute;
    right: 0%;
    bottom: 10px;
  }
}
.fade-enter-active{
  transition: $transition opacity;
  transition-delay: 0.3s;
}

.fade-enter-from,.fade-leave-to {
  opacity: 0;
}
.slide-leave-active, .slide-enter-active {
  transition: $transition transform;
}
.slide-enter-from,.slide-leave-to {
  transform: translateY(100%);
}

</style>
