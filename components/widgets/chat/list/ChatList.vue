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
      <div class="list-message list-message_outgoing">
        kakoy vopros?
      </div>
      <div class="list-message">
        takoy otvet!
      </div>
      <div class="list-message list-message_outgoing">
        chto?
      </div>
      <div class="list-message">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum ea fugiat ullam vel! Alias aspernatur debitis, deserunt eos fugit illo ipsam labore, laboriosam obcaecati perferendis quae quibusdam similique tempore vel?
      </div>
      <div class="list-message list-message_outgoing">
        TbI dyra ?
      </div>
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

    display: flex;
    flex-direction: column;
    gap: 6px;

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
  &-message {
    padding: 4px 6px;
    background-color: $black-color;
    border: 2px solid $white-color;
    color: $white-color;
    border-radius: 8px;
    width: max-content;
    max-width: 260px;
    &_outgoing {
      margin-left: auto;
    }
  }

}
</style>
