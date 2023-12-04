<template>
  <div>
    <desktop-header />
    <div class="container">
      <slot />
    </div>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import DesktopHeader from "~/components/parts/Header/DesktopHeader.vue";
</script>

<style lang="scss" scoped>
</style>