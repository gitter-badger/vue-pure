<template>
<span :class="c" @click="$emit('on-whole')">
  <span v-text="text" v-if="text && position === 'left'" @click="$emit('on-text')"></span>
  <slot name="icon">
     <i :class="[ iconClass, c + 'c__icon']" @click="$emit('on-icon')"></i>
  </slot>
  <span v-text="text" v-if="text && position === 'right'" @click="$emit('on-text')"></span>
</span>
</template>

<script>
export default {
  props: {
    c: {
      default: 'icontext',
    },
    position: {
      default: 'right',
    },
    iconClass: {
      default: 'i i-backrow',
    },
    text: {
      default: 'text',
    },
  },
};
</script>
