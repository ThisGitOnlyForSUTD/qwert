<template>
  <section>
    <MainModal v-model="value" />
    <main-intro />
    <button style="color: red; margin-top: 100px; cursor: pointer !important;" @click="value = true">
      asdasda
    </button>
    <app-gallery />
  </section>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MainIntro from '~/components/parts/Intro/MainIntro.vue'
import AppGallery from '~/components/parts/Gallery/AppGallery.vue'
import MainModal from '~/components/ui/modals/MainModal.vue'
const value = ref(false)
</script>
