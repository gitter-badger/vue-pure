import Vue from 'vue';
import VueRouter from 'vue-router';
// 页面
import Home from '../views/home';
import Grid from '../views/grid';
import Cell from '../views/cell';
import Scroller from '../views/scroller';
import Layout from '../views/layout';
import Nothing from '../views/nothing';
import Input from '../views/input';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/cell', component: Cell },
    { path: '/grid', component: Grid },
    { path: '/scroller', component: Scroller },
    { path: '/layout', component: Layout },
    { path: '/nothing', component: Nothing },
    { path: '/input', component: Input },
  ],
});
