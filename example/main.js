import Vue from 'vue';
import FastClick from 'fastclick';
import root from './app';
import router from './router';

FastClick.attach(document.body);

const app = new Vue({
  router,
  ...root,
});

app.$mount('#app');
