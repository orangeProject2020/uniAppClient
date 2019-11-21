<template>
  <view class="">
    <view class="uni-flex user-profile-title">
      <view class="uni-flex-item">
        <image src="../../static/icon/user_a.png" mode="" class="user-avatar"></image>
      </view>
      <view class="uni-flex-item ">
        <view class="text-white user-name">
          用户昵称
        </view>
      </view>
      <view class="uni-flex-item text-right">
        <view class="text-white user-setting-nav">
          <image src="/static/icon/setting.png" mode="" style="width: 64rpx;height: 64rpx;"></image>
        </view>
      </view>
      
    </view>
    
    <view class="uni-flex text-center user-assets-box">
      <view class="uni-flex-item">
        <view class="assets-num price">
          ￥100.00
        </view>
        <view class="assets-title">
          可提金额
        </view>
      </view>
      <view class="uni-flex-item">
        <view class="assets-num price">
          ￥100.00
        </view>
        <view class="assets-title">
          预计分红 ？
        </view>
      </view>
      <view class="uni-flex-item">
        <view class="assets-num ">
          2
        </view>
        <view class="assets-title">
          可用道具
        </view>
      </view>
    </view>
    
    <view class="user-item-card" style="margin-top:-60rpx;">
      <view class="uni-flex user-item-title">
        <view class="uni-flex-item title">
          我的订单
        </view>
        <view class="uni-flex-item text-right nav" @click="goToUrl('mallOrder')">
          所有
        </view>
      </view>
      <view class="uni-flex text-center user-item-card-icons">
        <view class="uni-flex-item" @click="goToUrl('mallOrder0')">
          <view class="">
            <image src="/static/icon/order_0.png" mode="" class="icon"></image>
          </view>
          <view class="">
            未付款
          </view>
        </view>
        
        <view class="uni-flex-item" @click="goToUrl('mallOrder1')">
          <view class="">
            <image src="/static/icon/order_1.png" mode="" class="icon"></image>
          </view>
          <view class="">
            待发货
          </view>
        </view>
        
        <view class="uni-flex-item" @click="goToUrl('mallOrder2')">
          <view class="">
            <image src="/static/icon/order_2.png" mode="" class="icon"></image>
          </view>
          <view class="">
            待收货
          </view>
        </view>
        
        <view class="uni-flex-item" @click="goToUrl('mallOrder3')">
          <view class="">
            <image src="/static/icon/order_3.png" mode="" class="icon"></image>
          </view>
          <view class="">
            已完成
          </view>
        </view>
      </view>
      
    </view>
    
    <view class="user-item-card">
      <view class="uni-flex user-item-title">
        <view class="uni-flex-item title">
          财务中心
        </view>
        <view class="uni-flex-item text-right nav">
          
        </view>
      </view>
      <view class="uni-flex text-center user-item-card-icons">
        <view class="uni-flex-item">
          <view class="">
            <image src="/static/icon/profit_0.png" mode="" class="icon"></image>
          </view>
          <view class="">
            提现申请
          </view>
        </view>
        
        <view class="uni-flex-item" @click="goToUrl('mallProfit')">
          <view class="">
            <image src="/static/icon/profit_1.png" mode="" class="icon"></image>
          </view>
          <view class="" >
            收益记录
          </view>
        </view>
        
        <view class="uni-flex-item">
          <view class="">
            <image src="/static/icon/profit_2.png" mode="" class="icon"></image>
          </view>
          <view class="">
            提现记录
          </view>
        </view>
        
        <view class="uni-flex-item">
          
        </view>
      </view>
      
    </view>
    
    
    <view class="user-item-card">
      <view class="uni-flex user-item-title">
        <view class="uni-flex-item title">
          常用功能
        </view>
        <view class="uni-flex-item text-right nav">
          
        </view>
      </view>
      
      <view class="uni-flex text-center user-item-card-icons">
        <view class="uni-flex-item" @click="goToUrl('mallCollect')">
          <view class="">
            <image src="/static/icon/like.png" mode="" class="icon"></image>
          </view>
          <view class="">
            商品收藏
          </view>
        </view>
        
        <view class="uni-flex-item" @click="goToUrl('mallAddress')">
          <view class="">
            <image src="/static/icon/address.png" mode="" class="icon"></image>
          </view>
          <view class="">
            地址管理
          </view>
        </view>
        
        <view class="uni-flex-item">
          <view class="">
            <image src="/static/icon/comment.png" mode="" class="icon"></image>
          </view>
          <view class="" @click="goToUrl('orderComment')">
            评价
          </view>
        </view>
        
        <view class="uni-flex-item" @click="goToUrl('orderAfter')">
          <view class="">
            <image src="/static/icon/order_after.png" mode="" class="icon"></image>
          </view>
          <view class="">
            售后
          </view>
        </view>
        
      </view>
      
      <view class="uni-flex text-center user-item-card-icons">
        <view class="uni-flex-item">
          <view class="">
            <image src="/static/icon/share.png" mode="" class="icon"></image>
          </view>
          <view class="">
            分享APP
          </view>
        </view>
        
        <view class="uni-flex-item">
          <view class="">
            <image src="/static/icon/invite.png" mode="" class="icon"></image>
          </view>
          <view class="">
            我的推荐
          </view>
        </view>
        
        <view class="uni-flex-item">
          <view class="">
            
          </view>
          <view class="">
            
          </view>
        </view>
        
        <view class="uni-flex-item">
          <view class="">
            
          </view>
          <view class="">
            
          </view>
        </view>
        
      </view>
      
    </view>
      
    <view class="p-4" v-if="isLogin">
      <button type="warn" @click="onLogout">退出</button>
    </view>
  </view>
</template>

<script>
  var wvUserIndex;
  export default {
    data(){
      return {
        isLogin: false,
        user: false
      }
    },
    methods:{
      navToLogin(){
        if (!this.isLogin) {
           uni.navigateTo({
             url:'/pages/auth/login'
           })
        } 
      },
      goToUrl(type) {
        // let token = uni.getStorageSync('user_auth_token')
        if (!this.isLogin){
          this.navToLogin()
          return true;
        }
        
        uni.navigateTo({
          url:'/pages/user/wv?type=' + type
        })
      },
      onLogout(){
        uni.setStorageSync('user_auth_token', '')
        uni.switchTab({
          url:'/pages/mall/index'
        })
      }
    },
    onLoad() {
      let token = uni.getStorageSync('user_auth_token')
      this.isLogin = token ? true : false
    },
    onShow() {
      // uni.setStorageSync('user_auth_token', '')
      let token = uni.getStorageSync('user_auth_token')
      console.log('token:', token)
      this.isLogin = token ? true : false
      // if (!token) {
      //   this.navToLogin()
      // }
    }
  }
</script>

<style lang="less">
  
  .user-profile-title {
    padding: 160rpx 40rpx;
    background-image: linear-gradient(to bottom right, #1989fa, #3D6BFA);
    
    .user-avatar {
      width: 160rpx;
      height: 160rpx;
      border-radius: 160rpx;
      background: #EEEEEE;
    }
    
    .user-name {
      line-height: 160rpx;
      font-size: 40rpx;
      font-weight: bold;
    }
    .user-setting-nav {
      padding-top: 24px;
    }
  }
  
  .user-assets-box {
    margin-left: 40rpx;
    margin-right: 40rpx;
    padding: 40rpx 0;
    background: #FFFFFF;
    border-radius: 16rpx;
    position: relative;
    top: -100rpx;
    
    .assets-num {
      font-size: 40rpx;
      font-weight: bold;
      
    }
    .assets-num.price {
      color: #e53e3e;
    }
    
    .assets-title {
      font-size: 26upx;
      color:#C0C0C0 ;
      margin: 12rpx 24rpx;
      padding-top: 12rpx;
      border-top: 1rpx solid #F1F1F1;
    }
  }
  
  .user-item-card {
    margin: 0 40rpx 40rpx; 
    background: #FFFFFF;
    border-radius: 16rpx;
    // border: 1rpx solid #3D6BFA;
    
    .user-item-title {
      padding: 20rpx 30rpx ;
      border-bottom: 1rpx solid #F1F1F1;
      .title {
        color: #3D6BFA;
      }
      .nav {
        color: #C0C0C0;
      }
    }
    
    .user-item-card-icons {
      padding: 30rpx;
      color: #999999;
      font-size: 26rpx;
      
      .icon {
        width: 64rpx;
        height: 64rpx;
      }
    }
  }
</style>
