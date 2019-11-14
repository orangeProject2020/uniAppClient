<template>
  <view class="">
    <view class="user-profile-title">
      <view class="text-center">
        <image src="../../static/icon/user_a.png" mode="" class="user-avatar"></image>
      </view>
      
    </view>
    
    <view class="user-func-list">
      <view class="uni-flex bg-white p-4 uni-border-bottom" @click="goToUrl('mallOrder')">
        <view class="uni-flex-item">
          订单管理
        </view>
        <view class="uni-flex-item text-right">
          >
        </view>
      </view>
      
      <view class="uni-flex bg-white p-4" @click="goToUrl('mallAddress')">
        <view class="uni-flex-item">
          地址管理
        </view>
        <view class="uni-flex-item text-right">
          >
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  var wvUserIndex;
  export default {
    data(){
      return {
        isLogin: false
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
    padding: 160upx 0;
    background-image: linear-gradient(to bottom right, #1989fa, #4c51bf);
    
    .user-avatar {
      width: 160upx;
      height: 160upx;
      border-radius: 160upx;
      border: 20upx #3c366b solid;
      background: #EEEEEE;
    }
  }
</style>
