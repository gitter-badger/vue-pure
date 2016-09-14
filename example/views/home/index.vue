<template>
  <div style="height:100%;">
    <h1 class="example__title">Vue Pure</h1>
    <scroller>
      <cell
      v-for="item in cellList"
      :title="item.title"
      :value="item.value"
      :icon-class="item.iconClass"
      :is-link="false"
      @on-link="$router.push(item.link)"></cell>
    </scroller>
  </div>
</template>
<script>
import { Cell, Scroller } from 'components';

export default {
  data() {
    return {
      cellList: [
        {
          title: 'Cell',
          value: '单条按钮',
          link: '/cell',
          iconClass: 'i i-link',
        },
        {
          title: 'Grid',
          value: 'Flex网格',
          link: '/grid',
          iconClass: 'i i-link',
        },
        {
          title: 'Scroller',
          value: '基于swiper的滚动',
          link: '/scroller',
          iconClass: 'i i-link',
        },
        {
          title: 'Nothing',
          value: '结果组件 - 无',
          link: '/nothing',
          iconClass: 'i i-link',
        },
        {
          title: 'Input',
          value: '单条输入框',
          link: '/input',
          iconClass: 'i i-link',
        },
        {
          title: 'Checkbox',
          value: '复选框 - 样式',
          link: '/checkbox',
          iconClass: 'i i-link',
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
.example__title{
  text-align: center;
  padding: .1rem;
  background-color: #f5f5f5;
  border-bottom: .01rem solid #ddd;
}
</style>
