<template>
  <div class="scroller">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <slot>
        </slot>
      </div>
      </div>
    <div class="swiper-scrollbar"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';

export default {
  mounted() {
    const swiper = new Swiper('.scroller', {
        scrollbar: '.swiper-scrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        updateOnImagesReady: true, // 自动刷新
        observer: true,
    });
  },
};
</script>

<style lang="scss">
.scroller {
  height: 100%;
  width: auto;
  overflow: hidden;
  position: relative;
}
.swiper-slide {
  font-size: 16px;
  height: auto;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  height: 100%;
}
.swiper-wrapper{
  height: 100%;
}

</style>
