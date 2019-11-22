<template>
  <view class="page-index">
    <swiper class="swiper-banner" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval" 
      :duration="swiper.duration">
      <swiper-item>
        <view class="swiper-item uni-bg-gray">
          <image src="" mode="" class="swiper-banner-img"></image>
        </view>
      </swiper-item>
    </swiper>
		
		<uni-notice-bar scrollable="true" show-icon="true" single="true" text="消息通知xxxxxxxxxxxxxxxxxxxxxxx" show-close="true" style="margin-bottom:0;"></uni-notice-bar>
		
		<view class="uni-flex p-3 text-center uni-border-top uni-border-bottom">
			<view class="uni-flex-item index-good-cates">
				<view class="uni-flex">
					<view class="uni-flex-item ">
						<view class="item">套餐区</view>
					</view>
					<view class="uni-flex-item">
						<view class="item">计生用品</view>
					</view>
				</view>
				<view class="uni-flex">
					<view class="uni-flex-item">
						<view class="item">男用产品</view>
					</view>
					<view class="uni-flex-item">
						<view class="item">女用产品</view>
					</view>
				</view>
			</view>
			<view class="uni-flex-item text-center uni-border-left">
				<view class="">
					<image src="/static/icon/rmb.png" mode="" style="width: 160rpx;height: 160rpx;"></image>
				</view>
				<view class="uni-text-gray uni-text-small">
					分红倒计时
				</view>
				<view class="">
					<uni-countdown color="#666666" background-color="" border-color="#" :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
				</view>
			</view>
		</view>
		
		<view class="index-packages-section">
			<view class="uni-flex index-packages-head p-3 ">
				<view class="uni-flex-item index-packages-title">
					特惠套餐
				</view>
				<view class="uni-flex-item text-right index-packages-more">
					更多
				</view>
			</view>
			<view class="index-packages text-center">
				<view class="index-packages-item" style="height: 240rpx;">
					<view class="" style="width: 360rpx;">
						特惠套餐1
					</view>
				</view>
				<view class="index-packages-item" style="height: 240rpx;">
					<view class="" style="width: 360rpx;height: 240rpx;">
						特惠套餐2
					</view>
				</view>
				<view class="index-packages-item" style="height: 240rpx;">
					<view class="" style="width: 360rpx;height: 240rpx;">
						特惠套餐3
					</view>
				</view>
				<view class="index-packages-item" style="height: 240rpx;">
					<view class="" style="width: 360rpx;height: 240rpx;">
						特惠套餐4
					</view>
				</view>
			</view>
		</view>
  </view>
</template>

<script>
	import {uniNoticeBar,uniCountdown} from "@dcloudio/uni-ui"
  export default {
		components:{
			uniNoticeBar,
			uniCountdown
		},
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

<style lang="less">
	.page-index {
		background: #FFFFFF;
	}
	
	.index-good-cates {
		.item {
			// background: #007AFF;
			border: 1px solid #3D6BFA;
			line-height: 40rpx;
			height: 120rpx;
			width: 120rpx;
			display: inline-block;
			border-radius: 120rpx;
			padding: 24rpx;
			margin-bottom: 20rpx;
			color: #3D6BFA;
		}
	}
	
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
	
	.index-packages-section {
		.index-packages-head {
			border-top: 8rpx solid #3D6BFA;
			border-bottom: 1rpx solid #EEEEEE;
		}
		.index-packages-title {
			font-size: 26rpx;
			font-weight: bold;
			color: #3D6BFA;
			
		}
	}
	
	.index-packages {
		height: 480rpx;
		.index-packages-item {
			float: left;
			width: 50%;
			height: 240rpx;
		}
	}
</style>
