<template>
<div :class="c" @click="$emit('on-link')">

  <slot name="icon">
    <i :class="[ c + '__icon',iconClass ]" :style="iconStyle" v-if="isIcon"></i>
  </slot>

  <div :class="c + '-title'">
    <span v-text="title" :class="c + '__title'"></span>
    <slot name="subtitle">
      <p v-text="subTitle" v-if="subTitle" :class="c + '__subtitle'"></p>
    </slot>
  </div>

  <slot>
    <span v-text="value" :class="c + '__value'"></span>
  </slot>

  <i :class="[ linkIcon, c + '__link']" v-if="isLink"></i>
</div>
</template>
<script>
export default {
  props: {
    c: {
      default: 'cell',
    },
    isIcon: {
      default: true,
    },
    iconClass: {
      default: 'i i-index',
    },
    iconStyle: {
      default() {
        return {
          'color': '#666',
        };
      },
    },
    title: {
      default: 'title',
    },
    subTitle: {
      default: '',
    },
    value: {
      default: 'value',
    },
    isLink: {
      default: true,
    },
    linkIcon: {
      default: 'i i-link',
    },
  },
};
</script>
