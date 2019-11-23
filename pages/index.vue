<template>
  <view class="page-index">
    
    <view class="navbar navbar-fix bg-white" >
      <view class="status_bar"></view>
      <view class="navbar-content" >
        <view class="navbar-item brand">
          时不我待
        </view>
        <view class="navbar-item">
          <view class="search flex bg-light">
            <view class="">
              <uni-icons type="search" size="15"></uni-icons>
            </view>
            <view class="">
               <input type="text" value="" placeholder="搜索" class="input-search"/>
            </view>
 
          </view>
          
        </view>
        <view class="navbar-item text-right flex-item">
          <view class="navbar-icon-right">
            <uni-icons type="email" size="30" color="#333"></uni-icons>
          </view>
        </view>
      </view>
    </view>
    
    <swiper class="swiper-banner" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval"
      :duration="swiper.duration">
      <swiper-item>
        <view class="swiper-item">
          <view class="swiper-banner-img bg-light">
            <image src="" mode="" class="swiper-banner-img"></image>
          </view>
          
        </view>
      </swiper-item>
    </swiper>
    
    <uni-notice-bar scrollable="true" show-icon="true" single="true" text="消息通知xxxxxxxxxxxxxxxxxxxxxxx" show-close="true" style="padding: 20rpx 30rpx;"></uni-notice-bar>
    
    <view class="index-section">
      <view class="flex ">
        <view class="flex flex-item flex-wrap index-section-cate-nav text-center">
          <view class="item">
            <view class="cover bg-light">
              
            </view>
            <view class="title">
              套餐区
            </view>
            
          </view>
          <view class="item">
            <view class="cover bg-light">
              
            </view>
            <view class="title">
              分类1
            </view>
          </view>
          <view class="item">
            <view class="cover bg-light">
            </view>
            <view class="title">
              分类2
            </view>
          </view>
          <view class="item">
            <view class="cover bg-light">
              
            </view>
            <view class="title">
              分类3
            </view>
          </view>
        </view>
        <view class="flex-item text-center index-profit">
          <view class="icon">
            <image src="/static/icon/rmb.png" mode="" class="icon"></image>
          </view>
          <view class="countdowm">
            <view class="title">
              分红倒计时
            </view>
            <uni-countdown color="#666666" background-color="" border-color="#" :day="1" :hour="1" :minute="12" :second="40"></uni-countdown>
          </view>
        </view>
      </view>
      
    </view>
    
    
    <view class="index-section ">
       <view class="index-section-head flex">
         <view class="title flex-item">
           特惠套餐
         </view>
         <view class="more flex-item text-right">
           更多 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
         </view>
       </view>
       
       <view class="index-section-content">
         <scroll-view class="index-section-content-box" scroll-x="true" scroll-left="0">
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img "></image>
               </view>
             </view>
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img"></image>
               </view>
             </view>
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img"></image>
               </view>
             </view>
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img"></image>
               </view>
             </view>

         </scroll-view>
       </view>
        
    </view>
    
    
    <view class="index-section ">
       <view class="index-section-head flex">
         <view class="title flex-item">
           为你推荐
         </view>
         <view class="more flex-item text-right">
           更多 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
         </view>
       </view>
       
       <view class="index-section-content">
         <scroll-view class="index-section-content-box" scroll-x="true" scroll-left="0">
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img "></image>
               </view>
               <view class="title truncate">
                 推荐产品1
               </view>
               <view class="desc truncate">
                 描述xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
               </view>
             </view>
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img "></image>
               </view>
               <view class="title truncate">
                 推荐产品2
               </view>
               <view class="desc truncate">
                 描述
               </view>
             </view>
             
             <view class="item" >
               <view class="index-package-img bg-light">
                 <image src="" mode="" class="index-package-img "></image>
               </view>
               <view class="title truncate">
                 推荐产品3
               </view>
               <view class="desc truncate">
                 描述
               </view>
             </view>
    
         </scroll-view>
       </view>
        
    </view>
    
    
  </view>
</template>

<script>
  import {uniIcons,uniNoticeBar,uniCountdown} from '@dcloudio/uni-ui';
  export default {
    components:{
      uniIcons,
      uniNoticeBar,
      uniCountdown
    },
    data() {
      return {
        navbar: {
          opacity:1
        },
        swiper: {
          indicatorDots: true,
          autoplay: true,
          interval: 2000,
          duration: 500
        },
      }
    }
  }
</script>

<style lang="less">
  .brand {
    color: #000;
    padding-left: 30rpx;
    font-weight: bold;
    font-size: 30rpx;
    width: 180rpx;
  }
  
  .search {
    padding: 0 20rpx;
    border-radius: 40rpx;
    width: 400rpx;
    .input-search {
      height: 60rpx;
      line-height: 60rpx;
      color: #333;
    }
  }
  
  .swiper-banner {
    height: 450rpx ;
    margin-top: var(--status-bar-height);
    padding-top: 100rpx;
    .swiper-item {
      padding: 30rpx;
      
      .swiper-banner-img {
        border-radius: 16rpx;
        width: 690rpx;
        height: 360rpx;
        margin-top: ;
      }
    }
  }
  
  .index-section {
    .index-section-head {
      padding: 20rpx 30rpx;
      line-height: 30rpx;
      .title {
        color: #333;
        font-weight: 400;
        font-size: 30rpx;
      }
      .more {
        color: #666;
        font-size: 24rpx;
      }
    }
    
    .index-section-content {
      padding-left: 30rpx;
      
      .index-section-content-box {
          // width: 720rpx;
          // height: 210rpx;
          white-space: nowrap;
          width: 100%;
          .item {
            width: 320rpx;
            // height: 180rpx;
            margin-right: 30rpx;
            margin-bottom: 30rpx;
            display: inline-block;
            vertical-align: top;
            
            .title {
              font-size: 26rpx;
              color: #666;
            }
            .desc {
              font-size: 24rpx;
              color: #ccc;
            }
          }
      }
    }
    
    .index-package-img {
      width: 320rpx;
      height: 180rpx;
      border-radius: 16rpx;
    }
  }
  
  .index-section-cate-nav {
    padding: 0 30rpx 30rpx;
    border-right: 1rpx solid #EEEEEE;
    .item {
      width: 50%;
      margin-top: 30rpx;
      
      .cover {
        border-radius: 9999px;
        width: 140rpx;
        height: 140rpx;
        display: inline-block;
        
      }
      .title {
        color: #666;
      }
    }
  }
  
  .index-profit {
    padding: 30rpx;
    
    .icon {
      margin-top: 20rpx;
      width: 100px;
      display: inline-block;
      height: 100px;
    }
    
    .countdowm {
      margin-top: 30rpx;
      .title {
        color: #666666;
        font-size: 26rpx;
      }
    }
    
  }
</style>
