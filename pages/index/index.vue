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
		
		<view class="index-section index-packages-section ">
			<view class="uni-flex index-section-head index-section-head p-3 ">
				<view class="uni-flex-item index-section-title">
					特惠套餐
				</view>
				<view class="uni-flex-item text-right index-section-more">
					更多
				</view>
			</view>
			<view class="uni-flex flex-wrap text-center index-packages">
				<view class="uni-flex-item" >
					<view class="index-packages-item">
						<image src="" mode="" class="index-packages-img"></image>
					</view>
				</view>
				<view class="uni-flex-item" >
					<view class="index-packages-item">
						<image src="" mode="" class="index-packages-img"></image>
					</view>
				</view>
				<view class="uni-flex-item" >
					<view class="index-packages-item">
						<image src="" mode="" class="index-packages-img"></image>
					</view>
				</view>
				<view class="uni-flex-item" >
					<view class="index-packages-item">
						<image src="" mode="" class="index-packages-img"></image>
					</view>
				</view>
			</view>
		</view>
		
		<view class="index-section mt-2">
			<view class="uni-flex index-section-head p-3">
				<view class="uni-flex-item index-section-title ">
					为你推荐
				</view>
				<view class="uni-flex-item text-right index-section-more">
					更多
				</view>
			</view>
			<view class="uni-flex flex-wrap p-3 index-recommend text-center">
				<view class="uni-flex-item ">
					<view class="index-recommend-item">
						<image src="" mode="" class="index-recommend-img"></image>
						<view class="index-recommend-name">
							推荐一1
						</view>
					</view>
				</view>
				<view class="uni-flex-item ">
					<view class="index-recommend-item">
						<image src="" mode="" class="index-recommend-img"></image>
						<view class="index-recommend-name">
							推荐一2
						</view>
					</view>
				</view>
				<view class="uni-flex-item ">
					<view class="index-recommend-item">
						<image src="" mode="" class="index-recommend-img"></image>
						<view class="index-recommend-name">
							推荐一3
						</view>
					</view>
				</view>
				<view class="uni-flex-item ">
					<view class="index-recommend-item">
						<image src="" mode="" class="index-recommend-img"></image>
						<view class="index-recommend-name">
							推荐一4
						</view>
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
		padding-bottom: 200rpx;
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
	
	.index-section {
		.index-section-head {
			border-top: 8rpx solid #3D6BFA;
			border-bottom: 1rpx solid #EEEEEE;
		}
		.index-section-title {
			font-size: 26rpx;
			font-weight: bold;
			color: #3D6BFA;
			
		}
	}
	
	.index-packages {
	
		.index-packages-item {
			width: 375rpx;
			margin-top: 30rpx;
			
			.index-packages-img {
				width: 300rpx;
				height: 200rpx;
				display: inline-block;
				background: #EEEEEE;
				border-radius: 8rpx;
				margin-bottom: 0;
			}
			
			.index-packages-name {
				color: #666666;
			}
		}
	}
	
	.index-recommend {
		.index-recommend-item {
			width: 345rpx;
		}
		
		.index-recommend-img {
			background: #EEEEEE;
			border-radius: 8rpx;
			width: 240rpx;
			height: 240rpx;
			display: inline-block;
			margin-top: 30rpx;
		}
		
		.index-recommend-name {
			color: #666666;
		}
	}
	
</style>
