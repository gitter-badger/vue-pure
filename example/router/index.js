import Vue from 'vue';
import VueRouter from 'vue-router';
// 页面
import home from '../views/home';
import grid from '../views/grid';
import cell from '../views/cell';
import scroller from '../views/scroller';
import ui from '../views/ui';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: home },
    { path: '/cell', component: cell },
    { path: '/grid', component: grid },
    { path: '/scroller', component: scroller },
    { path: '/ui', component: ui },
  ],
});
