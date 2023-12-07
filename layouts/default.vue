<template>
  <div>
    <app-cursor />
    <desktop-header />
    <div>
      <slot />
    </div>
    <ChatForm />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import DesktopHeader from '~/components/parts/Header/DesktopHeader.vue'
import ChatForm from '~/components/widgets/chat/ChatForm.vue'
import AppCursor from '~/components/ui/Effects/AppCursor.vue'
</script>

<style lang="scss" scoped>
</style>
