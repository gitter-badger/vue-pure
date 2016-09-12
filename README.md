# vue-pure powered by Vue2

> for WebApp

## 技术栈

- vue2
- vue-router
- vuex
- axios
- swiper
- normalize.css
- webpack2

## 规范

- ESLint Airbnb ES6 base

## 组件维护方案

> 2016.09.08

- components/ 全局公用组件 （为进一步全局组件库做准备），在main.js进行全局注册

- 业务组件 跟随页面组件，完成特定的业务 （暂且基本上一个页面会代表一个功能的情况下，可以这么做）

- 页面组件放 views/

- 抽离的组件内资源 如js文件， 放组件目录下

- 务必保障除页面组件之外组件的 纯度 （只使用 props 和 $emit），所有异步操作方页面组件中进行

- 组件都以文件夹形式存在 ，index.vue为入口

- 组件命名小驼峰，避开HTML本身标签名，保持引入组件和组件命名一致对应，便于寻找


## SCSS方案

- 布局全用Flex布局

- 目前在scss index.scss中@import 应用所需要的样式，基于 reset.css (100px = 1rem),目标实现主题替换

- 组件中尽量不留存样式，交给style文件夹中统一管理，便于实现themes 主题切换
