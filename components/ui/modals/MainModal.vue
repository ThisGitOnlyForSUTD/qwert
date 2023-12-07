<template>
  <teleport to="body">
    <transition name="fade">
      <div v-if="value" class="modal" @click="value = false">
        <div
          class="modal-content"
          :style="{width: width}"
          @click.stop
        >
          <div class="modal-top">
            <div class="modal-title">
              <slot name="title" />
            </div>
            <CloseButton />
          </div>
          <div class="modal-body">
            <slot />
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
  width: string
}>(), {
  modelValue: false,
  width: '300px'
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
  background-color: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  @include phone {
    align-items: flex-end;
  }

  &-content {
    background-color: $black-color;
    color:$white-color;
    border: 2px solid $white-color;
    border-radius: 4px;
    max-height: 80%;
    height: max-content;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    box-shadow: 2rem 1.5rem 0 #6262e5;

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
    padding: 12px 16px 12px;
    border-bottom: 1px solid $white-color;
  }
  &-body {
    padding: 16px 16px;
    overflow-y: hidden;
  }
}

</style>
