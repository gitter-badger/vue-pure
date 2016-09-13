<template>
<div class="app-container">
  <scroller>
    <cell
      title="选中了"
      icon-class="i i-menu"
      :is-link="false">
      <div style="margin-right: .2rem;color: #e66;">
        <span v-for="(item, index) in checkList" v-if="item"  v-text="index + ','" style="margin-right:.1rem;"></span>
      </div>
    </cell>
    <ul>
      <li v-for="(n, index) in checkList" >
        <cell :is-link="false" :title="'序号' + index + '---小米Max全网通 标准版 3GB内存 32G ROM'" value="">
          <div slot="icon" style="width: 1.3rem;margin-right: .05rem;margin-left:.1rem;display: flex;align-items: center;">
            <checkbox
              slot="icon"
              @on-change="changeChecked"
              :index="index"
              :is-checked="n"></checkbox>
            <img src="http://m.360buyimg.com/n1/s220x220_jfs/t2773/127/1105965253/208760/827e92c4/573357c1N10bb6e16.jpg"
                 style="width:100px;height:100px;">
          </div>
          <div slot="subtitle">
            <p style="color:#e66;">￥ 1299</p>
          </div>
        </cell>
      </li>
    </ul>
  </scroller>
</div>
</template>

<script>
import { Checkbox, Cell, Scroller } from 'components';

export default {
  data() {
    return  {
      checkList: {},
    };
  },
  created() {
    let arr = {};
    for (let i = 0; i < 5; i++) {
      if (i%2 === 0) {
        arr[i] = true;
      } else {
        arr[i] = false;
      }
    }
    this.checkList = arr;
  },
  methods: {
    changeChecked(value, index) {
      this.checkList[index] = value;
      console.log(this.checkList)
    },
  },
  components: {
    Checkbox,
    Cell,
    Scroller,
  },
};
</script>

<style lang="scss" scoped>
</style>
