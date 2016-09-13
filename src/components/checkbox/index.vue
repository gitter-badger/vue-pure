<template>
<div :class="c">
  <label>
    <i :class="[ isChecked ? checked : unChecked, c + '__icon', isChecked ? checkedClass : '' ]" ></i>
    <input type="checkbox" v-model="isChecked" style="opacity:0;position:absolute;" name="" @change="onChange(isChecked, index)">
  </label>
</div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isChecked: false,
  //   };
  // },
  props: {
    c: {
      default: 'checkbox',
    },
    index: {
    },
    isChecked: {
      default: false,
    },
    defaultChecked: {
      default: false,
    },
    unChecked: {
      default: 'i i-unchecked',
    },
    checked: {
      default: 'i i-checked',
    },
    checkedClass: {
      default: 'checkbox--checked',
    },
  },
  methods: {
    onChange(isChecked, index) {
      this.isChecked = isChecked;
      this.$emit('on-change', isChecked, index);
    },
  },
};
</script>
