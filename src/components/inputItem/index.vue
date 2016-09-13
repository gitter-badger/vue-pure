<template>
<div :class="c">
  <slot name="title">
    <i :class="[iconClass, c + '__icon']" v-if="iconClass"></i>
    <p v-text="title" :class="c + '__title'" v-if="title"></p>
  </slot>
  <input :type="type" :value="value" :placeholder="placeholder" @change="$emit('on-change', value)" :class="c + '__input'">
  <slot name="subbtn"></slot>
</div>
</template>

<script>
export default {
  props: {
    c: {
      default: 'inputitem',
    },
    iconClass: {
      default: '',
    },
    title: {
      default: 'title',
    },
    type: {
      default: 'text',
    },
    value: {
      default: '',
    },
    placeholder: {
      default: '',
    },
  },
};
</script>
