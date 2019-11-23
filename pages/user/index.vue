<template>
  <view class="page-user-index">
    
    <view class="bg-primary navbar navbar-fix" >
      <view class="status_bar"></view>
      <view class="navbar-content" >
        <view class="navbar-item flex-item " :style="{opacity: navbar.opacity}">
          <view class="navbar-avatar navbar-left">
              <image :src="userData.avatar" mode="scaleToFill" class="navbar-avatar"></image>
          </view>
          <view class="inline-block navbar-title">
            {{ userData.username }}
          </view>
        </view>
        <view class="navbar-item flex-item text-right">
          <view class="navbar-icon-right">
             <uni-icons type="gear" size="30" color="#fff" class="icon"></uni-icons>
            <uni-icons type="email" size="30" color="#fff" class="icon"></uni-icons>
          </view>
        </view>
      </view>
    </view>
    
    <view class="user-index-header bg-primary">
      <view class="user-index-header-content p-3 flex">
        <view class="flex-item">
          <view class="user-index-avatar inline-block">
            <image :src="userData.avatar" mode="scaleToFill" class="user-index-avatar"></image>
          </view>
           <view class="inline-block vertical-top" style="">
             <view class="text-white user-index-name">
               {{userData.username}}
             </view>
           </view>
        </view>
        <view class="text-right">
          <view class="user-qrcode-nav" @click="goToUrl('userInvite')">
             <image src="/static/icon/qrcode.png" mode="" class="user-qrcode-nav"></image>
          </view>
          
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
          预计分红 <uni-icons type="help" size="15" color="#999"></uni-icons>
        </view>
      </view>
      <view class="uni-flex-item">
        <view class="assets-num">
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
          所有 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
        </view>
      </view>
      <view class="uni-flex text-center user-item-card-icons">
        <view class="item" @click="goToUrl('mallOrder0')">
          <view class="">
            <image src="/static/icon/order_0.png" mode="" class="icon"></image>
          </view>
          <view class="">
            未付款
          </view>
        </view>
        
        <view class="item" @click="goToUrl('mallOrder1')">
          <view class="">
            <image src="/static/icon/order_1.png" mode="" class="icon"></image>
          </view>
          <view class="">
            待发货
          </view>
        </view>
        
        <view class="item" @click="goToUrl('mallOrder2')">
          <view class="">
            <image src="/static/icon/order_2.png" mode="" class="icon"></image>
          </view>
          <view class="">
            待收货
          </view>
        </view>
        
        <view class="item" @click="goToUrl('mallOrder3')">
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
        <view class="item">
          <view class="">
            <image src="/static/icon/profit_0.png" mode="" class="icon"></image>
          </view>
          <view class="">
            提现申请
          </view>
        </view>
        
        <view class="item" @click="goToUrl('mallProfit')">
          <view class="">
            <image src="/static/icon/profit_1.png" mode="" class="icon"></image>
          </view>
          <view class="" >
            收益记录
          </view>
        </view>
        
        <view class="item">
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
      
      <view class="uni-flex text-center user-item-card-icons flex-wrap">
        <view class="item" @click="goToUrl('mallCollect')">
          <view class="">
            <image src="/static/icon/like.png" mode="" class="icon"></image>
          </view>
          <view class="">
            商品收藏
          </view>
        </view>
        
        <view class="item" @click="goToUrl('mallAddress')">
          <view class="">
            <image src="/static/icon/address.png" mode="" class="icon"></image>
          </view>
          <view class="">
            地址管理
          </view>
          
        </view>
        
        <view class="item">
          <view class="">
            <image src="/static/icon/comment.png" mode="" class="icon"></image>
          </view>
          <view class="" @click="goToUrl('orderComment')">
            评价
          </view>
        </view>
        
        <view class="item" @click="goToUrl('orderAfter')">
          <view class="">
            <image src="/static/icon/order_after.png" mode="" class="icon"></image>
          </view>
          <view class="">
            售后
          </view>
          
        </view>
        
        <view class="item" @click="goToUrl('userInvite')">
          <view class="">
            <image src="/static/icon/share.png" mode="" class="icon"></image>
          </view>
          <view class="">
            分享APP
          </view>
          
        </view>
        
        <view class="item" @click="goToUrl('userInviteList')">
          <view class="">
            <image src="/static/icon/invite.png" mode="" class="icon"></image>
          </view>
          <view class="">
            我的推荐
          </view>
          
        </view>
        
        <view class="item">
         <view class="">
           <image src="/static/icon/invoice.png" mode="" class="icon"></image>
         </view>
         <view class="">
           发票开具
         </view>
          
        </view>
               
      </view>
      
    </view>
      
    <view class="p-4" v-if="isLogin">
      <view class="text-center text-blue" @click="onLogout">
        退出
      </view>
    </view>
  </view>
</template>

<script>
  var wvUserIndex;
  import {uniIcons} from '@dcloudio/uni-ui';
  
  export default {
    components:{
      uniIcons
    },
    data(){
      return {
        isLogin: false,
        user: false,
        navbar: {
          opacity: 0
        },
        userData: {
          avatar: '/static/icon/user_a.png',
          username: '186****9410'
        }
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
    },
    onPageScroll(data) {
      let scrollTop = data.scrollTop
      if (scrollTop > 50) {
        let num = scrollTop - 50
        if (num <= 0) {
          this.navbar.opacity = 0
        } else {
          num = num > 50 ? 50 : num
          this.navbar.opacity = parseFloat((num / 50).toFixed(2))
        }
        
      }else {
        this.navbar.opacity = 0
      }
      // console.log(JSON.stringify(data))
    },
    onPullDownRefresh() {
      
      setTimeout(() => {
        uni.stopPullDownRefresh()
      },1000)
    }
  }
</script>

<style lang="less">
  .page-user-index {
  
    background: #fafafa;
    padding-bottom: 400rpx;
    
    .user-index-header {
      padding-top:var(--status-bar-height);
      padding-bottom: 100rpx;
      .user-index-header-content {
        margin-top: 100rpx;
        .user-index-avatar {
          width: 120rpx;
          height: 120rpx;
          display: inline-block;
          background: #FFFFFF;
          border-radius: 120rpx;
        }
        
        .user-index-name {
          line-height: 60rpx;
          font-size: 16px;
          padding-left: 20rpx;
        }
      }
    }
  }
  
  .user-assets-box {
    margin-left: 30rpx;
    margin-right: 30rpx;
    padding: 30rpx 0;
    background: #FFFFFF;
    border-radius: 16rpx;
    position: relative;
    top: -100rpx;
    
    .assets-num {
      font-size: 14px;
      font-weight: bold;
      
    }
    .assets-num.price {
      color: #e53e3e;
    }
    
    .assets-title {
      font-size: 12px;
      color:#C0C0C0 ;
      margin: 12rpx 24rpx;
      padding-top: 12rpx;
      border-top: 1rpx solid #F1F1F1;
    }
  }
  
  .user-item-card {
    margin: 0 30rpx 30rpx; 
    background: #FFFFFF;
    border-radius: 16rpx;
    // border: 1rpx solid #3D6BFA;
    
    .user-item-title {
      padding: 20rpx 30rpx ;
      border-bottom: 1rpx solid #F1F1F1;
      .title {
        color: #333333;
        font-size: 14px;
      }
      .nav {
        color: #666666;
      }
    }
    
    .user-item-card-icons {
      // padding: 30rpx;
      padding-bottom: 30rpx;
      // color: #999999;
      // font-size: 11px;
      .item {
        width: 25%;
        margin-top: 30rpx;
        font-size: 12px;
        color: #666666;
      }

      .icon {
        width: 64rpx;
        height: 64rpx;
      }
    }
 
  }
  
  .user-qrcode-nav {
    width: 60rpx;
    height: 60rpx;
    display: inline-block;
  }
</style>
