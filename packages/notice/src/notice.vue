<template>
  <div class="r-notice">
    <div class="r-notice__main">
      <div class="r-notice__title">{{ title }}</div>
      <div class="r-notice__content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RNotice",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  mounted() {
    console.log(this.title);
  },
  methods: {},
};
</script>
