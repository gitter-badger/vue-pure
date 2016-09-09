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
<style lang="scss">
.btn--default{
  border: .01rem solid #ddd;
  color:#666;
  background-color: #fff;
  padding: .05rem .15rem;
}

.btn--danger{
  @extend .btn--default;
  border: .01rem solid #e66;
  color: #e66;
}

.btn--default--inverse{
  @extend .btn--default;
  background-color: #666;
  color: #fff;
}

.btn--danger--inverse{
  @extend .btn--default;
  background-color: #e66;
  color: #fff;
}

</style>
