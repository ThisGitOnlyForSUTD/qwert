<template>
  <button class="chat-btn">
    <img
      class="chat-btn-icon"
      src="~/public/icons/chat.svg"
      alt="chat"
    >
  </button>
</template>
<style lang="scss">
.chat {
  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: $blue-color;
    &-icon {
      display: block;
      height: 40px
    }
  }
}
</style>
