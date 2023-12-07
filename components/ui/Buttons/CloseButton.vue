<template>
  <button class="close" @click="$emit('close')">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M1.40942 0.490117C1.15558 0.236276 0.744026 0.236276 0.490185 0.490117C0.236344 0.743957 0.236344 1.15551 0.490185 1.40936L6.0808 6.99997L0.590648 12.4901C0.336807 12.744 0.336808 13.1555 0.590649 13.4094C0.844489 13.6632 1.25605 13.6632 1.50989 13.4094L7.00004 7.91921L12.4902 13.4094C12.744 13.6632 13.1556 13.6632 13.4094 13.4094C13.6633 13.1555 13.6633 12.744 13.4094 12.4901L7.91928 6.99997L13.5099 1.40936C13.7637 1.15551 13.7637 0.743957 13.5099 0.490117C13.256 0.236276 12.8445 0.236276 12.5906 0.490117L7.00004 6.08073L1.40942 0.490117Z"
        fill="#0AE1FFFF"
      />
    </svg>
  </button>
</template>
<script setup lang="ts">
defineEmits(['close'])
</script>
<style lang="scss" scoped>
.close {
  height: 26px;
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  opacity: 1;
  transition: opacity .2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
}
</style>
