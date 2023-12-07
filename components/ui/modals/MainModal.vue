<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="value" class="modal" @click="value = false">
        <div
          class="modal-content container"
          @click.stop
        >
          <div class="modal-top">
            <div class="modal-title">
              <slot name="title" />
            </div>
            <CloseButton
              @click="value = false"
            />
          </div>
          <div class="modal-body">
            <slot />
          </div>
          <div class="modal-bottom">
            <div class="modal-action">
              <slot name="action" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import CloseButton from '~/components/ui/Buttons/CloseButton.vue'

const emit = defineEmits(['update:modelValue'])
const props = withDefaults(defineProps<{
  modelValue: boolean,
}>(), {
  modelValue: false
})

const value = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    emit('update:modelValue', val)
  }
})

</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 1100;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(8, 8, 9, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  @include phone {
    align-items: flex-end;
  }

  &-content {
    color:$white-color;
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    //box-shadow: 2rem 1.5rem 0 #6262e5;

    @include phone {
      width: 100% !important;
      border-bottom: none;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
      max-height: 60%;
    }
  }
  &-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    font-size: 2em;
  }
  &-body {
    padding: 16px 16px;
    overflow-y: hidden;
  }
  &-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px 12px;
  }
}

</style>
