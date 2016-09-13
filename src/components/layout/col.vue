<template>
  <div
    :class="c"
    :class="[
      c + '-' + span,
      offset ? c + '-offset-' + offset : '',
      pull ? c + '-pull-' + pull : '',
      push ? c + '-push-' + push : ''
    ]"
    :style="style"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Col',
    props: {
      c: {
        type: String,
        default: 'col',
      },
      span: { // 栅格占据列数 必选
        type: Number,
        required: true
      },
      offset: Number, // 栅格左侧的间隔格数
      pull: Number, // 栅格向左移动格数
      push: Number, // 栅格向右移动格数
      gutter: Number, // 栅栏间隔
    },
    computed: {
      style() {
        var ret = {};
        if (this.gutter) {
          ret.paddingLeft = this.gutter / 2 + 'px';
          ret.paddingRight = ret.paddingLeft;
        }
        return ret;
      },
    },
  };
</script>
<style lang="scss">
.col {

}
</style>
