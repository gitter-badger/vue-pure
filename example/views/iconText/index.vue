<template>
<div>
  <h1>字体 + 图标 </h1>
  <ul>
    <li>
      <icon-text text="文字在右"></icon-text>
    </li>
    <li>
      <icon-text text="文字在左侧" icon-class="i i-link" position="left"></icon-text>
    </li>
    <li>
      <icon-text text="只有文字（基本没用）" position="left" icon-class=""></icon-text>
    </li>
    <li>
      <icon-text text="" icon-class="i i-index"></icon-text>
    </li>
  </ul>

</div>
</template>

<script>
import IconText from 'components/iconText';

export default {
  components: {
    IconText,
  },
};
</script>
