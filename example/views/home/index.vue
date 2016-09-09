<template>
  <div style="height:100%;">
    <h1 class="example__title">纯组件示例列表</h1>
        <cell
        v-for="item in cellList"
        :title="item.title"
        :value="item.value"
        @on-link="$router.push(item.link)"></cell>
  </div>
</template>
<script>
import { cell, scroller } from 'components';

export default {
  data() {
    return {
      cellList: [
        {
          title: 'cell',
          value: '单条按钮',
          link: '/cell',
        },
        {
          title: 'gird',
          value: 'Flex网格',
          link: '/gird',
        },
        {
          title: 'scroller',
          value: '基于swiper的滚动',
          link: '/scroller',
        },
        {
          title: 'ui',
          value: '基础样式组件',
          link: '/ui',
        },
      ],
    };
  },
  components: {
    cell,
    scroller,
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
