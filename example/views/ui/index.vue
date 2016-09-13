<template>
<div>
 <h2>按钮组</h2>
 <ui-btn></ui-btn>
 <ui-btn c="btn--default--inverse"></ui-btn>
 <ui-btn c="btn--danger"></ui-btn>
 <ui-btn c="btn--danger--inverse"></ui-btn>
</div>
</template>
<script>
import { UiBtn } from 'components';
export default {
  components: {
    UiBtn,
  },
};
</script>
