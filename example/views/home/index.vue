<template>
  <div style="height:100%;">
    <scroller>
      <cell
      v-for="item in cellList"
      :title="item.title"
      :value="item.value"
      :icon-class="item.iconClass"
      :icon-style="item.iconStyle"
      :is-link="false"
      @on-link="$router.push(item.link)"></cell>
    </scroller>
  </div>
</template>
<script>
import { Cell, Scroller, } from 'components';

export default {
  data() {
    return {
      cellList: [
        {
          title: 'Cell',
          value: '单条按钮',
          link: '/cell',
          iconClass: 'i i-xihuan',
          iconStyle: { 'color': '#e66' },
        },
        {
          title: 'Grid',
          value: 'Flex网格',
          link: '/grid',
          iconClass: 'i i-order',
          iconStyle: { 'color': '#007FFF' },
        },
        {
          title: 'Scroller',
          value: '基于swiper的滚动',
          link: '/scroller',
          iconClass: 'i i-menu',
          iconStyle: { 'color': '#F7BA2A' },
        },
        {
          title: 'Nothing',
          value: '结果组件 - 无',
          link: '/nothing',
          iconClass: 'i i-nothing',
          iconStyle: { 'color': '#e5e9f2' },
        },
        {
          title: 'Input',
          value: '单条输入框',
          link: '/input',
          iconClass: 'i i-link',
          iconStyle: { 'color': '#324057' },
        },
        {
          title: 'Checkbox',
          value: '复选框 - 样式',
          link: '/checkbox',
          iconClass: 'i i-add',
          iconStyle: { 'color': '#ff4949' },
        },
        {
          title: 'HeaderBar',
          value: '顶部导航',
          link: '/headerbar',
          iconClass: 'i i-dizhi',
          iconStyle: { 'color': '#1D8CE0' },
        },
        {
          title: 'IconText',
          value: '图标 + 文字',
          link: '/icontext',
          iconClass: 'i i-tishi',
          iconStyle: { 'color': '#13CE66' },
        },
      ],
    };
  },
  components: {
    Cell,
    Scroller,
  },
};
</script>
<style lang="scss">
</style>
