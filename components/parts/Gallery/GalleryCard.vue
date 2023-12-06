<template>
  <div
    @click="router.push('/')"
    class="gallery-card">
    <h2 class="gallery-card__title">Lorem ipsum.</h2>
    <p class="gallery-card__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque error necessitatibus sint soluta voluptatum! Aspernatur commodi culpa debitis dicta ducimus earum harum laboriosam saepe vel.</p>
      <link-arrow
        class="gallery-card__link"
        fill="#EEFBF5"
        width="60px"
        height="60px"
      />
  </div>
</template>

<script setup lang="ts">
import LinkArrow from "~/components/ui/icons/LinkArrow.vue";
import router from "#app/plugins/router.js";

const props = withDefaults(defineProps<{ width: string, height: string, img: string }>(), {
  width: '350px',
  height: '400px',
  img: 'url("https://wearesocial.com/jp/wp-content/uploads/sites/9/2023/01/japan-375x211.jpg")',
})
</script>

<style lang="scss" scoped>
.gallery-card {
  cursor: none;
  width: 100%;
  position: relative;
  height: v-bind(height);
  border: 1px solid $gray-color;
  border-radius: $radius-4;
  padding: 20px;
  max-width: v-bind(width);

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: v-bind(img);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: .3s ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 0.1;
    }
  }

  &__title {
    font-size: 2em;
    margin-bottom: 30px;
  }

  &__text {
    border-left: 1px solid $blue-color;
    font-size: 1.2em;
    padding: 5px 0 5px 13px;
    margin-bottom: 40px;
  }

  &__link {
    position: absolute;
    right: calc(0% + 20px);
    bottom: 0;
  }
}
</style>