<template>
  <button
    class="r-button"
    @click="handleClick"
    :class="[
      type ? 'r-button--' + type : '',
      size ? 'r-button--' + size : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-round': round,
        'is-circle': circle,
        'is-text': text,
      },
    ]"
    :type="nativeType"
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
    size: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    round: Boolean,
    circle: Boolean,
    text: Boolean,
    loading: Boolean,
    disabled: Boolean,
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
  },
};
</script>
