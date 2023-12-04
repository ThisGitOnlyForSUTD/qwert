<template>
  <div>
    <desktop-header />
    <div class="container">
      <slot />
    </div>
    <ChatForm />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import DesktopHeader from '~/components/parts/Header/DesktopHeader.vue'
import ChatForm from '~/components/widgets/chat/ChatForm.vue'
</script>

<style lang="scss" scoped>
</style>
