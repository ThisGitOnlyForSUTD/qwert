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
    <div ref="listWrapper" class="list-content hide-scroll">
      <div
        v-for="(item, id) in list"
        :key="item.message + id"
        class="list-message"
        :class="{'list-message_outgoing': item.outgoing}"
      >
        {{ item.message }}
      </div>
    </div>
    <div
      class="list-question hide-scroll"
    >
      <ChatChip
        v-for="item in question"
        :key="item.text"
        @click="selectQuestion(item)"
      >
        {{ item.text }}
      </ChatChip>
    </div>
  </div>
</template>
<script setup lang="ts">
import { nextTick } from 'vue'
import CloseButton from './CloseButton.vue'
import ChatChip from '~/components/widgets/chat/list/ChatChip.vue'

defineEmits(['closeChat'])
interface IQuestion {
  text:string,
  answer: string
}
interface IMessage {
  message:string,
  outgoing: boolean
}
const question = ref([
  { text: 'asda asdasd', answer: 'asdasd asddas asda sdas dasdasdas asdas asdasdas' },
  { text: 'asdasdasd asas', answer: 'asdasdas asdasda sdasdasda gfdhfgjh fgjfgjf gjfgjfg fgjfgj fgj' },
  { text: 'asdasdasd asdasdas asdasd asd', answer: 'dfhdfh dfhdfhdfhdf dfhdfhdfhdf dhfhdfhdfhdfhdf dhfhdfhdfhdf dfhdfhdfh dfhdfhdfhdf' },
  { text: '13123 1231123', answer: 'dfhdhfdh dfhdfhdfh dfhdfh dhdf hdfhdfhdhdfhjfrgjfgfkf' },
  { text: 'sadasdasas', answer: 'sdfs dsdfhdfjhfgj fgjfgjdfgtsdf g' },
  { text: 'sdsad asdasda fsdgsdghsd', answer: 'hjl; hjg; h; dfghsdhfsdfh dfhsdsfh dfhdfhd hdsfhdfh dfh' },
  { text: 'sdsad asdasda fsdgsdghsd', answer: 'sdjhfhshdhh shdjfkljsdjjfkl;sjdj sjd jfjsdhfjkhsdkjhfjkhjkh jkshdj hjskdgfjksgdk ' },
  { text: 'saadasdsad', answer: 'dfhsdfhdsf dfhdf hdfh fdshfdfhdfshafh' },
  { text: 'dfhdfh dfhdfhdf dfhdfh dfhdfh', answer: 'dfh df hdfhdfhdfhd dhdfdfhdfhdfhdfh' },
  { text: 'asdfsd dfgdf', answer: 'dfhdfhdf dfhfh sd3463 dfgdf' },
  { text: 'sdsad asdasda fsdgsdghsd', answer: 'dfgdfgds dfhdf 5474' },
  { text: 'sfgdfgdf fdgdfgdfgdfg', answer: 'sdfsdfsd fsdfsdfsdfs sdfsdfsdf' }
])

const list = ref<IMessage[]>([])
const listWrapper = ref<HTMLDivElement>()
const scrollToBottom = () => {
  nextTick(() => {
    if (!listWrapper.value) { return }
    listWrapper.value.scrollTop = listWrapper.value.scrollHeight
  })
}
const selectQuestion = (question: IQuestion) => {
  list.value.push({ message: `${question.text}?`, outgoing: true })
  scrollToBottom()
  setTimeout(() => {
    list.value.push({ message: `${question.answer}?`, outgoing: false })
    scrollToBottom()
  }, 300)
}
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
    height: 100%;
    padding: 16px 12px;
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    gap: 6px;
    overflow-y: scroll;
    overscroll-behavior: none;
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
