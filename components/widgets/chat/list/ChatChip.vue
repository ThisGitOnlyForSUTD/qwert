<template>
  <div class="chip">
    <slot />
  </div>
</template>
<style lang="scss" scoped>
.chip {
  padding: 4px 8px;
  border-radius: 16px;
  border: 2px solid $white-color;
  width: max-content;
  cursor: pointer;
  transition: $transition border-color, $transition color;
  &:hover {
    border-color: $blue-color;
    color: $blue-color;
  }
}
</style>
