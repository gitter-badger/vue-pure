<template>
<ul :class="c">
  <li v-for="item in list" :class="[c + '-item', item.active ? c + '-item__active' : '' ]" @click="$emit('on-item', item)">
    <i :class="[ item.iconClass, c + '__icon' ]" v-if="item.iconClass"  class="i" ></i>
    <p v-text="item.number" v-if="item.number" :class="c + '__number'"></p>
    <p v-text="item.text" :class="c + '__text'"></p>
  </li>
</ul>
</template>
<script>
export default {
  props: {
    c: {
      default: 'gird',
    },
    list: {
      default() {
        return [
          {
            iconClass: '',
            number: '0',
            text: 'text',
          },
        ];
      },
    },
  },
};
</script>
