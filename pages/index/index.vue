<template>
  <view class="">
    <swiper class="swiper-banner" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval"
      :duration="swiper.duration">
      <swiper-item>
        <view class="swiper-item uni-bg-red">
          <image src="" mode="" class="swiper-banner-img"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-green">
          <image src="" mode="" class="swiper-banner-img"></image>
        </view>
      </swiper-item>
      <swiper-item>
        <view class="swiper-item uni-bg-blue">
          <image src="" mode="" class="swiper-banner-img"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello',
        swiper: {
          indicatorDots: true,
          autoplay: true,
          interval: 2000,
          duration: 500
        }
      }
    },
    async onLoad() {},
    methods: {

    }
  }
</script>

<style>
  .swiper-banner {
    height: 400rpx;

    .swiper-item {
      height: 400rpx;
    }
    
    .swiper-banner-img {
      width: 750rpx;
      height: 400rpx;
    }
  }
</style>
