<template>
<div>
  <div>
    <h2>grid Flex网格</h2>
    <grid></grid>
    <grid :list="navGrid" c="navgrid"  @on-item=""></grid>
    <grid :list="orderGrid" @on-item=""></grid>
    <grid :list="doGrid"  @on-item=""></grid>
    <grid c="footergrid" :list="navGrid" @on-item=""></grid>
  </div>
</div>
</template>
<script>
import { grid, scroller } from 'components';
import { orderGrid, doGrid, navGrid } from '_mixins/grid';

export default {
  mixins: [
    orderGrid,
    doGrid,
    navGrid,
  ],
  components: {
    grid,
  },
};

</script>
<style lang="scss">

</style>
