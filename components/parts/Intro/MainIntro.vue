<template>
  <section class="intro">
    <div class="intro__wrapper">
      <div class="glitch">
        <div :key="i" v-for="i in 5" class="glitch__item"></div>
        <h2 class="glitch__title">Разработка эффективных сайтов, лендингов, CRM-систем для вашего бизнеса</h2>
        <ul class="intro-list">
          <li
            v-for="(item, idx) in subtitles"
            :key="item + 1"
            :class="['intro-list__item', { 'fade-in': fadeIn }]"
          >
            {{ idx === subtitleIndex ? item : '' }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const subtitles = [
  'Я истребитель, небо — мой обитель, да, я прибыл, у-у',
  'Тройная прибыль, syкa, этот трэп — твоя погибель',
  'Я не хожу в Оутлет, я стрит атлет',
  'Она держит мой кларнет и не хочет встать с колен',
]

const subtitleIndex = ref(0);
const fadeIn = ref(true);

onMounted(() => {
  setInterval(() => {
    fadeIn.value = false;

    setTimeout(() => {
      subtitleIndex.value = (subtitleIndex.value + 1) % subtitles.length;
      fadeIn.value = true;
    }, 500);
  }, 5000);
});
</script>

<style lang="scss" scoped>
.intro {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &__wrapper {
    max-width: 1100px;
    display: flex;
    flex-direction: column;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/public/images/infro-bg.gif");
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.1;
  }
}
.intro-list {
  margin-top: 40px;
  &__item {
    font-size: 1.1em;
    opacity: 0;
    transition: opacity .4s ease-in-out;
  }
}
.fade-in {
  opacity: 0.7;
}

:root {
  --color-text: #fff;
  --color-bg: #000;
  --color-link: #f9d77e;
  --color-link-hover: #fff;
  --color-info: #efc453;
  --glitch-width: 100vw;
  --glitch-height: 100vh;
  --gap-horizontal: 10px;
  --gap-vertical: 5px;
  --time-anim: 4s;
  --delay-anim: 2s;
  --blend-mode-1: none;
  --blend-mode-2: none;
  --blend-mode-3: none;
  --blend-mode-4: none;
  --blend-mode-5: overlay;
  --blend-color-1: transparent;
  --blend-color-2: transparent;
  --blend-color-3: transparent;
  --blend-color-4: transparent;
  --blend-color-5: #af4949;
}

.glitch {
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &__item {
    background: url('https://images.unsplash.com/photo-1482245294234-b3f2f8d5f1a4?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=1922d6e6f96e8e67aac67057877e15da') no-repeat 50% 50% / cover;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;

    &:nth-child(n+2) {
      opacity: 0;
      animation-duration: var(--time-anim);
      animation-delay: var(--delay-anim);
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    &:nth-child(2) {
      background-color: var(--blend-color-2);
      background-blend-mode: var(--blend-mode-2);
      animation-name: glitch-anim-2;
    }

    &:nth-child(3) {
      background-color: var(--blend-color-3);
      background-blend-mode: var(--blend-mode-3);
      animation-name: glitch-anim-3;
    }

    &:nth-child(4) {
      background-color: var(--blend-color-4);
      background-blend-mode: var(--blend-mode-4);
      animation-name: glitch-anim-4;
    }

    &:nth-child(5) {
      background-color: var(--blend-color-5);
      background-blend-mode: var(--blend-mode-5);
      animation-name: glitch-anim-flash;

      @keyframes glitch-anim-flash {
        0%, 5% {
          opacity: 0.2;
          transform: translate3d(var(--glitch-horizontal), var(--glitch-height), 0);
        }
        5.5%, 100% {
          opacity: 0;
          transform: translate3d(0, 0, 0);
        }
      }
    }
  }

  &__title {
    font-family: TTHovesPro;
    font-size: 50px;
    text-align: center;
    color: $white-color;
    position: relative;
    text-transform: uppercase;

    &:before,
    &:after {
      content: 'Разработка эффективных сайтов, лендингов, CRM-систем для вашего бизнеса';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    &:before {
      left: 2px;
      text-shadow: -1px 0 $blue-color;
      clip: rect(24px, 550px, 90px, 0);
      animation: glitch-anim 2s linear infinite alternate-reverse;
    }

    &:after {
      left: -2px;
      text-shadow: -1px 0 $blue-color;
      clip: rect(85px, 550px, 140px, 0);
      animation: glitch-anim 2s 1s linear infinite alternate-reverse;
    }

    @keyframes glitch-anim {
      $steps: 20;
      @for $i from 0 through $steps {
        #{percentage($i*(1/$steps))} {
          clip: rect(random(160)+px, 9999px, random(170)+px, 0);
        }
      }
    }
  }
}

@keyframes glitch-anim-2{
  0% {

    opacity: 1;
    transform: translate3d(var(--gap-horizontal),0,0);
    -webkit-clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);

  }
  2% {

    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
    clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);

  }
  4% {

    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
    clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);

  }
  6% {

    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
    clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);

  }
  8% {

    -webkit-clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);
    clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%);

  }
  10% {

    -webkit-clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);
    clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%);

  }
  12% {

    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);
    clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%);

  }
  14% {

    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
    clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);

  }
  16% {

    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
    clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);

  }
  18% {

    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
    clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);

  }
  20% {

    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);
    clip-path: polygon(0 70%, 100% 70%, 100% 80%, 0 80%);

  }
  21.9% {

    opacity: 1;
    transform: translate3d(var(--gap-horizontal),0,0);

  }
  22%, 100% {

    opacity: 0;
    transform: translate3d(0,0,0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);

  }
}

@keyframes glitch-anim-3{
  0% {

    opacity: 1;
    transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);
    -webkit-clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);

  }
  3% {

    -webkit-clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
    clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);

  }
  5% {

    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);
    clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%);

  }
  7% {

    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);

  }
  9% {

    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);
    clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%);

  }
  11% {

    -webkit-clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);
    clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%);

  }
  13% {

    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);

  }
  15% {

    -webkit-clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);
    clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%);

  }
  17% {

    -webkit-clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);
    clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%);

  }
  19% {

    -webkit-clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);
    clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%);

  }
  20% {

    -webkit-clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);
    clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%);

  }
  21.9% {

    opacity: 1;
    transform: translate3d(calc(-1 * var(--gap-horizontal)),0,0);

  }
  22%, 100% {

    opacity: 0;
    transform: translate3d(0,0,0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
  }
}

@keyframes glitch-anim-4{
  0% {
    opacity: 1;
    transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
    -webkit-clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
    clip-path: polygon(0 1%, 100% 1%, 100% 3%, 0 3%);
  }
  1.5% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
    clip-path: polygon(0 10%, 100% 10%, 100% 9%, 0 9%);
  }
  2% {
    -webkit-clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
    clip-path: polygon(0 5%, 100% 5%, 100% 6%, 0 6%);
  }
  2.5% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
    clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
  }
  3% {
    -webkit-clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
    clip-path: polygon(0 10%, 100% 10%, 100% 10%, 0 10%);
  }
  5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
    clip-path: polygon(0 30%, 100% 30%, 100% 25%, 0 25%);
  }
  5.5% {
    -webkit-clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
    clip-path: polygon(0 15%, 100% 15%, 100% 16%, 0 16%);
  }
  7% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
    clip-path: polygon(0 40%, 100% 40%, 100% 39%, 0 39%);
  }
  8% {
    -webkit-clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
    clip-path: polygon(0 20%, 100% 20%, 100% 21%, 0 21%);
  }
  9% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
    clip-path: polygon(0 60%, 100% 60%, 100% 55%, 0 55%);
  }
  10.5% {
    -webkit-clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
    clip-path: polygon(0 30%, 100% 30%, 100% 31%, 0 31%);
  }
  11% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
    clip-path: polygon(0 70%, 100% 70%, 100% 69%, 0 69%);
  }
  13% {
    -webkit-clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
    clip-path: polygon(0 40%, 100% 40%, 100% 41%, 0 41%);
  }
  14% {
    -webkit-clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
    clip-path: polygon(0 80%, 100% 80%, 100% 75%, 0 75%);
  }
  14.5% {
    -webkit-clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
    clip-path: polygon(0 50%, 100% 50%, 100% 51%, 0 51%);
  }
  15% {
    -webkit-clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
    clip-path: polygon(0 90%, 100% 90%, 100% 90%, 0 90%);
  }
  16% {
    -webkit-clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
    clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
  }
  18% {
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
    clip-path: polygon(0 100%, 100% 100%, 100% 99%, 0 99%);
  }
  20% {
    -webkit-clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
    clip-path: polygon(0 70%, 100% 70%, 100% 71%, 0 71%);
  }
  21.9% {
    opacity: 1;
    transform: translate3d(0, calc(-1 * var(--gap-vertical)), 0) scale3d(-1,-1,1);
  }
  22%, 100% {
    opacity: 0;
    transform: translate3d(0,0,0);
    -webkit-clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);

  }
}
</style>
