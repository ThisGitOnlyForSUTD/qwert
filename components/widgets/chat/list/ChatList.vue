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
    <div class="list-content">
      1
    </div>
    <div class="list-question">
      <ChatChip v-for="item in question" :key="item.text">
        {{ item.text }}
      </ChatChip>
    </div>
  </div>
</template>
<script setup lang="ts">
import CloseButton from './CloseButton.vue'
import ChatChip from '~/components/widgets/chat/list/ChatChip.vue'

defineEmits(['closeChat'])

const question = ref([
  { text: 'asda asdasd' },
  { text: 'asdasdasd asas' },
  { text: 'asdasdasd asdasdas asdasd asd' },
  { text: '13123 1231123' },
  { text: '1asd asd asd asd' }
])
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

  display: flex;
  flex-direction: column;

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
    flex-grow: 1;
  }
  &-question {
    padding: 16px 12px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px 15px;
    justify-content: flex-end;
  }

}

</style>
