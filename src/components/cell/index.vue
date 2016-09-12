<template>
<div :class="c" @click="$emit('on-link')">
  <i class="i" :class="[ c + '__icon',iconClass ]" :style="iconStyle" v-if="isIcon"></i>
  <span v-text="title" :class="c + '__title'"></span>
  <span v-text="value" :class="c + '__value'"></span>
  <i class="i i-link" :class="c + '__link'" v-if="isLink"></i>
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
      default: 'i-index',
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
    value: {
      default: 'value',
    },
    isLink: {
      default: true,
    }
  },
};
</script>
