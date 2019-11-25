<template>
  <view class="page-settings">
    
    <view class="flex p-3 border-b">
      <view class="flex-item">
        <view class="user-avatar">
          <image :src="userData.avatar" mode="" class="user-avatar"></image>
        </view>
      </view>
      <view class="text-right">
        <text></text>
        <!-- <uni-icons type="arrowright"></uni-icons> -->
      </view>
    </view>
    
    <view class="flex p-3 border-b">
      <view class="flex-item">
        <view class="setting-title">
          手机号/用户名
        </view>
      </view>
      <view class="text-right">
        <text class="text-light">{{userData.username}}</text>
        <!-- <uni-icons type="arrowright"></uni-icons> -->
      </view>
    </view>
    
    <!-- <view class="flex p-3 border-b">
      <view class="flex-item">
        <view class="setting-title">
          修改密码
        </view>
      </view>
      <view class="text-right">
        <text></text>
        <uni-icons type="arrowright"></uni-icons>
      </view>
    </view> -->
    
    <view class="flex p-3 border-b" @click="open">
      <view class="flex-item">
        <view class="setting-title">
          绑定支付宝
        </view>
      </view>
      <view class="text-right">
        <text class="text-light">{{userData.alipay ? '已绑定' : '未绑定'}}</text>
        <uni-icons type="arrowright"></uni-icons>
      </view>
    </view>
    
    <view class="flex p-3 border-b">
      <view class="flex-item">
        <view class="setting-title">
          关于
        </view>
      </view>
      <view class="text-right">
        <text></text>
        <uni-icons type="arrowright"></uni-icons>
      </view>
    </view>
    
    <view class="flex p-3 border-b">
      <view class="flex-item">
        <view class="setting-title">
          用户协议
        </view>
      </view>
      <view class="text-right">
        <text></text>
        <uni-icons type="arrowright"></uni-icons>
      </view>
    </view>
    
    <view class="flex p-3 border-b">
      <view class="flex-item">
        <view class="setting-title">
          版本号
        </view>
      </view>
      <view class="text-right">
        <text class="text-light">{{version}}</text>
      </view>
    </view>
    
    <view class="flex p-3 border-b" @click="onLogout">
      <view class="flex-item">
        <view class="setting-title">
          退出
        </view>
      </view>
      <view class="text-right">
        <text></text>
        <uni-icons type="arrowright"></uni-icons>
      </view>
    </view>
    
    <uni-popup ref="popup" type="top">
      <view class="p-3 bg-white">
        <view class="border-b">
          <input type="text" v-model="userData.alipay" />
        </view>
        <view class="mt-4 text-light flex">
          
          <view class="flex-item">
            绑定支付宝用于提现
          </view>
          <button type="warn" @click="alipaySubmit" size="mini" :disabled="alipayBtnDisabled">确认</button>
        </view>
      </view>
      
      
    </uni-popup>
    
  </view>
</template>

<script>
  import {uniIcons,uniPopup} from '@dcloudio/uni-ui';
  export default {
    components:{
      uniIcons,
      uniPopup
    },
    data() {
      return {
        version: '1.0.0',
        alipayBtnDisabled: false
        // userData: {
        //   avatar: '/static/icon/user_a.png',
        //   username: '',
        //   alipay: ''
        // },
      }
    },
    computed:{
      userData() {
        return this.$store.state.userData
      }
    },
    methods:{
      onLogout(){
        uni.setStorageSync('user_auth_token', '')
        this.$store.commit('lastLoginSet', false)
        
        this.$store.commit('userInfoSet', {
          avatar: '/static/icon/user_a.png',
          username: '' ,
          alipay:''
        })
        this.$store.commit('userAesstsSet' , {
          balance: 0,
            profit: 0,
            withdraw: 0
        })
        
        uni.navigateBack({
          delta:-1
        })
        // uni.switchTab({
        //   url:'/pages/mall/index'
        // })
      },
      open(){
         this.$refs.popup.open()
      },
      async alipaySubmit(){
        this.alipayBtnDisabled = true
        try{
          let alipay = this.$store.state.userData.alipay
          console.log('alipay:' , alipay)
          let ret = await this.$store.dispatch('userInfoUpdate', {
            alipay:alipay 
          })
          if (ret.code == 0) {
            this.$store.commit('lastLoginSet', false)
            this.$store.state.userData.alipay = alipay
          } else {
            throw new Error(ret.message)
          }
        }catch(e){
          //TODO handle the exception
          uni.showToast({
            title: err.message,
            duration: 2000,
            success() {
              setTimeout(() => {
                uni.hideToast()
              }, 2000)
            }
          });
        }
        
        this.alipayBtnDisabled = true
        this.$refs.popup.close()
      }
    }
  }
</script>

<style>
  .user-avatar {
    width: 60rpx;
    height: 60rpx;
    border-radius: 60rpx;
  }
</style>
