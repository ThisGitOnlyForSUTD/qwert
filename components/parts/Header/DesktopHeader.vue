<template>
  <header class="desktop-header container">
    <logo class="desktop-header__logo" />
      <ul class="desktop-header__list">
        <li
            class="desktop-header__item"
            v-for="item in navLinks"
            :key="item.slug"
        >
          <nuxt-link
              :to="item.link"
              class="desktop-header__link"
          >
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
  </header>
</template>

<script setup lang="ts">
import Logo from "~/components/ui/Logo/Logo.vue";

const navLinks = [
  { slug: 'main', name: 'Главная', link: '/' },
  { slug: 'cases', name: 'Кейсы', link: '/cases' },
  { slug: 'about', name: 'О нас', link: '/about' },
  { slug: 'faq', name: 'Как мы работаем', link: '/faq' },
  { slug: 'calculate', name: 'Расчет стоимости', link: '/calculate' },
  { slug: 'contacts', name: 'Контакты', link: '/contacts' },
];
</script>

<style lang="scss" scoped>
.desktop-header {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;

  &__logo {
    width: 100%;
    max-width: 100px;
  }

  &__list {
    display: flex;
    width: 100%;
    gap: 10px;
    list-style-type:  none;
  }

  &__link {
    font-size: 16px;
    font-family: TTHovesPro;
    text-decoration: none;
  }
}
</style>
