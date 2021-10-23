<template>
  <button
    class="r-button"
    :class="[type ? 'r-button--' + type : '']"
    type="button"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "RButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
  },
};
</script>

<style></style>
