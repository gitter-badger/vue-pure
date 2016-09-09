<template>
<div>
  <div>
    <h2>gird Flex网格</h2>
    <gird></gird>
    <gird :list="navGird" c="navgird"  @on-item=""></gird>
    <gird :list="orderGird" @on-item=""></gird>
    <gird :list="doGird"  @on-item=""></gird>
    <gird c="footergird" :list="navGird" @on-item=""></gird>
  </div>
</div>
</template>
<script>
import { gird, scroller } from 'components';
import { orderGird, doGird, navGird } from 'components/gird/mixin';

export default {
  mixins: [
    orderGird,
    doGird,
    navGird,
  ],
  components: {
    gird,
  },
};

</script>
<style lang="scss">

</style>
