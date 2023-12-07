<template>
  <section class="gallery">
    <div class="gallery__wrapper container">
      <gallery-card
        height="585px"
      />
      <div class="gallery__wrapper_main">
        <gallery-card
          width="900px"
          height="300px"
        />
        <div class="gallery__wrapper_sub">
          <gallery-card
            v-for="i in 2"
            :key="i"
            width="442px"
            height="270px"
          />
        </div>
      </div>
    </div>
    <div class="gallery__animation">
      <client-only>
        <vue3-lottie
          animation-link="https://lottie.host/ea76b809-6fe7-4344-8d73-cddbdfef5224/A77aTgwGj1.json"
          :height="700"
          :width="700"
        />
      </client-only>
    </div>
  </section>
</template>
<script setup lang="ts">
import GalleryCard from '~/components/parts/Gallery/GalleryCard.vue'
</script>

<style lang="scss" scoped>
.gallery {
  position: relative;
  z-index: 3;
  padding: 200px 0;
  width: 100%;
  margin: 0 auto;
  background-image: linear-gradient(to left top, #01424c, #0d3743, #142c37, #16212b, #14181e, #121418, #0e0e12, #080809, #080809, #080809, #080809, #080809);

  &__animation {
    position: absolute;
    z-index: 1;
    left: -10%;
    bottom: 2%;
    opacity: 0.1;
  }

  &__wrapper {
    display: flex;
    gap: 15px;
    justify-content: center;

    &_sub {
      margin-top: 15px;
      display: flex;
      gap: 16px;
    }
  }
}
</style>
