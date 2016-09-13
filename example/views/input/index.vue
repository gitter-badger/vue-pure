<template>
<div class="app-container">
  <scroller>
  <input-item placeholder="请输入内容" class="mt--10"></input-item>

  <input-item placeholder="请输入内容"   value="123456" type="password" class="mt--10"></input-item>

  <input-item placeholder="带icon" title="" icon-class="i i-menu"  class="mt--10"></input-item>

  <input-item placeholder="带icon" title="icontitle" icon-class="i i-menu"  class="mt--10"></input-item>

  <input-item placeholder="右侧subbtn" title="icontitle" class="mt--10">
    <div slot="subbtn" style="border-left: .01rem solid #ddd;padding-left: .1rem;">
      <p>点击验证</p>
    </div>
  </input-item>
</scroller>
</div>
</template>

<script>
import { InputItem, Scroller } from 'components';

export default {
  components: {
    InputItem,
    Scroller,
  },
};
</script>
