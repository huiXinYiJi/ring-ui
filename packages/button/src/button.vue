<template>
  <button class="ring-button" :class="[type ? 'ring-button--' + type : '']" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'RingButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
}
</script>

<style>
</style>