<template>
  <div>
    <MainModal v-model="value" :width="'800px'">
      <template #title>
        Крутой тайтлaaa
      </template>
      <text-input outline />
    </MainModal>
    <header class="desktop-header container">
      <app-logo class="desktop-header__logo" />
      <nav class="desktop-header__nav">
        <ul class="desktop-header__list">
          <li
            v-for="item in navLinks"
            :key="item.slug"
            class="desktop-header__item"
          >
            <nuxt-link
              :to="item.link"
              class="desktop-header__link"
            >
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="desktop-header__contacts">
        <app-button
          text="Заказать"
          @click="value = true"
        />
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '~/components/ui/Logo/AppLogo.vue'
import AppButton from '~/components/ui/Buttons/AppButton.vue'
import MainModal from '~/components/ui/modals/MainModal.vue'
import TextInput from '~/components/ui/Inputs/TextInput.vue'

const value = ref(false)
const navLinks = [
  { slug: 'main', name: 'Главная', link: '/' },
  { slug: 'cases', name: 'Кейсы', link: '/cases' },
  { slug: 'about', name: 'О нас', link: '/about' },
  { slug: 'faq', name: 'Как мы работаем', link: '/faq' },
  { slug: 'calculate', name: 'Расчет стоимости', link: '/calculate' },
  { slug: 'contacts', name: 'Контакты', link: '/contacts' }
]
</script>

<style lang="scss" scoped>
.desktop-header {
  position: fixed;
  left: 0;
  right: calc(20px);
  z-index: 100;
  display: flex;
  align-items: center;
  padding: 20px 0;

  justify-content: space-between;

  &__logo {
    width: 100%;
    max-width: 100px;
  }

  &__nav {
    mix-blend-mode: difference;
  }

  &__list {
    display: flex;
    gap: 20px;
    list-style-type:  none;
  }

  &__link {
    font-size: 1.1em;
    font-family: TTHovesPro;
    text-decoration: none;
    color: $white-color;
    transition: 0.3s ease-in-out;

    &:hover {
      color: $blue-color;
    }
  }
}
</style>
