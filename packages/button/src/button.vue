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
        'is-dashed': dashed,
        'is-ghost': ghost,
      },
    ]"
    :type="nativeType"
  >
    <span class="r-button__icon">
      <i class="r-base-loading" v-if="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 1024 1024"
        >
          <path
            d="M988 548c-19.9 0-36-16.1-36-36c0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 0 0-94.3-139.9a437.71 437.71 0 0 0-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7c26.7 63.1 40.2 130.2 40.2 199.3c.1 19.9-16 36-35.9 36z"
            fill="currentColor"
          ></path>
        </svg>
      </i>
      <template v-if="!loading"><slot name="icon"></slot></template>
    </span>
    <span v-if="$slots.default"><slot></slot></span>
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
    // tiny、small、medium 和 large
    size: {
      type: String,
      default: "medium",
    },
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    // 圆角
    round: Boolean,
    // 圆形
    circle: Boolean,
    // 文本按钮
    text: Boolean,
    // 加载状态
    loading: Boolean,
    // 禁用状态
    disabled: Boolean,
    // 虚线
    dashed: Boolean,
    // 是否透明
    ghost: Boolean,
  },
  methods: {
    handleClick(evt) {
      console.log(evt);
      this.$emit("click", evt);
    },
  },
};
</script>
