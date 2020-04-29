<template>
  <div class="page-banner">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banners" :key="index">
          <img :src="item.pic" alt />
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Banner",
  props: {
    banners: {
      type: Array,
      default: []
    }
  },
  methods: {
    initBanner() {
      new Swiper(".swiper-container", {
        autoplay:true,
        speed:1000,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  },
  watch: {
    banners() {
      //banners 改变 网络请求数据成功
      this.$nextTick(() => {
        this.initBanner();
      });
    }
  }
  /* mounted() {
    this.initBanner();
  } */
};
</script>
<style lang="scss" scoped>
@import "~swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 125px;
  // background: green;s
  img {
    width: 100%;
    height: 125px;
  }
}
</style>
<style lang="scss">
.swiper-pagination-bullet-active{
  background-color: white;
}
</style>
