<template>
<div class="app-container">
    <header-bar title="vue-pure" style="background: #20A0FF;color: #fff;" @on-left="$router.back();"  @on-right="alert('点到我了')"></header-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
</div>
</template>
<script>
import { HeaderBar } from 'components';

export default {
  components: {
    HeaderBar,
  },
};
</script>
<style lang="scss">
@import '~style/init.scss';
@import '~style/components/index.scss';
body {
  background: #fbf9fe;
}
</style>
