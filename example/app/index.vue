<template>
<div class="app-container">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>
<script>
import { scroller } from 'components';

export default {
  components: {
    scroller,
  },
};
</script>
<style lang="scss">
@import '~style/init.scss';
</style>
