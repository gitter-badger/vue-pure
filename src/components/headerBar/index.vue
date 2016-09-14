<template>
<header :class="c">

  <icon-text :c="leftClass" :text="leftText" :icon-class="leftIcon" :position="leftTextPosition" @on-whole="$emit('on-left')"></icon-text>
  <slot name="left"></slot>

  <slot name="title">
    <span v-text="title" :class="c + '__title'" @click="$emit('on-title')"></span>
  </slot>

  <slot name="right"></slot>
  <icon-text :c="rightClass" :text="rightText" :icon-class="rightIcon" :position="rightTextPosition" @on-whole="$emit('on-right')"></icon-text>

</header>
</template>

<script>
import IconText from '../iconText';

export default {
  props: {
    c: {
      default: 'headerbar',
    },
    title: {
      default: 'headerBar',
    },
    leftClass: {
      default: 'icontext--left',
    },
    leftIcon: {
      default: 'i i-backrow',
    },
    leftText: {
      default: '',
    },
    leftTextPosition: {
      default: 'right',
    },
    rightClass: {
      default: 'icontext--right',
    },
    rightIcon: {
      default: 'i i-menu',
    },
    rightText: {
      default: '',
    },
    rightTextPosition: {
      default: 'left',
    },
  },
  components: {
    IconText,
  },
};
</script>
