<template>
  <div style="height:100%;">
    <scroller>
      <cell icon-class="" title="cell 实现各种组合" c="cell--title" value="" :is-link="false"></cell>
      <!-- 基础样式 -->
      <cell></cell>

      <!-- value左对齐 -->
      <cell icon-class="" title="cell value左对齐控制class就可以了,没有箭头" c="cell--title" value="" :is-link="false"></cell>

      <cell c="cell--valueleft" :is-link="false"></cell>

      <!-- 带上具体描述 -->
      <cell icon-class="" title="cell 带上具体描述" c="cell--title" value="" :is-link="false"></cell>

      <cell sub-title="具体描述"></cell>

      <!-- icon 换成图片 -->
      <cell icon-class="i i-menu" title="cell icon换图片" c="cell--title" value="" :is-link="false"></cell>

      <cell title="Ant-design" sub-title="很棒的移动组件库" value="GO" @on-link="alert('GO');">
        <div slot="icon">
          <img src="https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png" width="40" height="40" style="margin-left:.1rem; margin-right: .1rem;">
        </div>
      </cell>

      <!-- cell 卡片 -->
      <cell icon-class="" title="cell 实现卡片" c="cell--title" value="" :is-link="false"></cell>

      <cell :is-link="false" title="小米Max全网通 标准版 3GB内存 32G ROM" value="">
        <div slot="icon" style="width: 1rem; height:1rem;margin-right: .05rem;margin-left:.1rem;">
          <img src="http://m.360buyimg.com/n1/s220x220_jfs/t2773/127/1105965253/208760/827e92c4/573357c1N10bb6e16.jpg" style="width:100%;height:100%;">
        </div>
        <div slot="subtitle">
          <p style="color:#e66;">￥ 1299</p>
        </div>
      </cell>
    </scroller>

  </div>
</template>
<script>
import { Cell, Scroller } from 'components';

export default {
  components: {
    Cell,
    Scroller,
  },
};
</script>
<style lang="scss" scoped>
 .cell-group{
  margin-top: .1rem;
 }
</style>
