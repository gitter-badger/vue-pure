<template>
<div style="height:100%;">
  <scroller>
    <ul>
      <li v-for="n  in 100" v-text="n" style="text-align:center;margin:.05rem;color:#666;"></li>
    </ul>
  </scroller>
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
