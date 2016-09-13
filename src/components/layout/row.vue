<template>
  <div
    :class="c"
    :style="style"
    :class="[
      justify !== 'start' ? c + '-justify-' + justify : '',
      align !== 'top' ? c + '-align-' + align : '',
      {
        c + '--flex': flex
      }
    ]"
  >
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Row',
    props: {
      c: {
        type: String,
        default: 'row',
      },
      gutter: { // 栅格间隔
        type: Number,
        default: '10',
      },
      flex: {
        type: Boolean,
        default: true,
      }, // 布局模式 可选 flex
      justify: {    // flex布局下的水平排列表方式 start/end/center/space-around/space-between
        type: String,
        default: 'start'
      },
      align: { // flex布局下的垂直排列方式 top/middle/bottom
        type: String,
        default: 'top'
      }
    },
    computed: {
      style() {  // 计算间隔
        var ret = {};
        if (this.gutter) {
          ret.marginLeft = `-${this.gutter / 2}px`;
          ret.marginRight = ret.marginLeft;
        }
        return ret;
      }
    }
  };
</script>
