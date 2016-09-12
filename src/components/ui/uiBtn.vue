<template>
  <button :class="c">
    <i :class="iconClass" v-if="iconClass"></i>
    <span v-text="text"></span>
  </button>
</template>
<script>
export default {
  props: {
    c: {
      default: 'btn--default',
    },
    iconClass: {
      default: '',
    },
    text: {
      default: 'text',
    },
  },
};
</script>
