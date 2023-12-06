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
    <div
      class="list-question hide-scroll"
    >
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
  { text: 'sadasdasas' },
  { text: 'sdsad asdasda fsdgsdghsd' },
  { text: 'sdsad asdasda fsdgsdghsd' },
  { text: 'saadasdsad' },
  { text: 'dfhdfh dfhdfhdf dfhdfh dfhdfh' },
  { text: 'asdfsd dfgdf' },
  { text: 'sdsad asdasda fsdgsdghsd' },
  { text: 'sfgdfgdf fdgdfgdfgdfg' }
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
    max-height: 150px;
    overflow-y: scroll;
    overscroll-behavior: none;
    border-top: 1px solid $white-color;
  }

}

</style>
