<template>
  <div class="list">
    <div class="list-top">
      <div>
        <p class="list-title">
          Часто задаваемые вопросы
        </p>
        <p class="list-sub">
          FAQ
        </p>
      </div>
      <CloseButton @close="$emit('closeChat')" />
    </div>
    <div class="list-content" />
  </div>
</template>
<script setup lang="ts">
import CloseButton from './CloseButton.vue'

defineEmits(['closeChat'])
</script>
<style lang="scss" scoped>
.list {
  width: 320px;
  background-color: $black-color;
  border-top-right-radius: 12px;
  border: 2px solid $white-color;
  border-bottom: none;
  max-height: 496px;
  height: 500px;
  opacity: 0.8;

  &-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $white-color;
    padding: 16px 12px;
  }
  &-title {}
  &-sub {
    font-size: 0.7em;
  }

  &-content {
    padding: 16px 12px;
    height: calc(100% - 65px);
  }

}

</style>
