<p align="center"><a href="http://vue-pure.dingyiming.cn" target="_blank"><img width="400"src="https://cloud.githubusercontent.com/assets/12537013/18533150/8325bd0a-7b13-11e6-9084-ed27b2466e3c.png"></a></p>
<p align="center">
<a href="http://stackshare.io/dingyiming/dingyiming"><img src="http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat" alt="stack"></a>
<a href="https://travis-ci.org/dingyiming/vue-pure"><img src="https://travis-ci.org/dingyiming/vue-pure.png" alt="Build Status"></a>
<a href="https://circleci.com/gh/dingyiming/vue-pure"><img src="https://img.shields.io/circleci/project/dingyiming/vue-pure/dev.svg" alt="Build Status"></a>
<a href="http://isitmaintained.com/project/dingyiming/vue-pure"><img src="http://isitmaintained.com/badge/resolution/dingyiming/vue-pure.svg" alt="Build Status"></a>
<a href="http://isitmaintained.com/project/dingyiming/vue-pure"><img src="http://isitmaintained.com/badge/open/dingyiming/vue-pure.svg" alt="Build Status"></a>
</p>

> for WebApp

> 2016.09.15 update

## 技术栈

[![Join the chat at https://gitter.im/vuepure/Lobby](https://badges.gitter.im/vuepure/Lobby.svg)](https://gitter.im/vuepure/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

- vue2
- vue-router
- vuex
- axios
- swiper
- normalize.css
- webpack2
- SCSS
- BEM
- Travis CI

## 规范

- ESLint Airbnb ES6 base

- 尽量写上注释

- 保持mounted(){} 内代码清爽

- 请保持import from 的文件名和from后文件名大小写一致

## 组件维护方案

- components/ 全局公用组件 （为进一步全局组件库做准备），在main.js进行全局注册

- 业务组件 跟随页面组件，完成特定的业务 （暂且基本上一个页面会代表一个功能的情况下，可以这么做）

- 页面组件放 views/

- 抽离的组件内资源 如js文件， 放组件目录下

- 务必保障除页面组件之外组件的 纯度 （只使用 props 和 $emit），所有异步操作方页面组件中进行

- 组件都以文件夹形式存在 ，index.vue为入口

- 组件命名小驼峰，避开HTML本身标签名，组件引入后命名为大驼峰保持一致

- 在vue生命周期 `created() {}` 进行数据初始化， 如果涉及模板更新请使用 `mounted() {}` 进行初始化。

- 组件逻辑代码分离，使用`mixins`,首要分离`init.js`,即数据初始化代码

## SCSS方案

- 布局全用Flex布局

- 目前在scss index.scss中@import 应用所需要的样式，基于 reset.css (100px = 1rem),目标实现主题替换

- 组件中尽量不留存样式，交给style文件夹中统一管理，便于实现themes 主题切换

## 注意事项

- 自定义组件绑定原生DOM事件 如 `@click` 是无效的，需要通过自定义事件进行响应，在组件 `HeaderBar`的时候注意到了这一点，进行了修正。

- 推荐统一按照Vue生命周期排列实例函数