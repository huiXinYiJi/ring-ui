<template>
  <div class="ring-notice">
    <div class="ring-notice__main">
      <div class="ring-notice__title">{{ title }}</div>
      <div class="ring-notice__content">{{ content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RingNotice',
  data() {
    return {
      title: '',
      content: ''
    }
  },
  mounted() {
    console.log(this.title);
  },
  methods: {

  }
}
</script>
