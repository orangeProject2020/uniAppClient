<template>
  <view class="p-4">
    <view class="text-5xl mt-16">
      SIGN UP
    </view>
    <view class="bg-white p-4 rounded-lg mt-4">
      <view class="mb-4">
        <view class="text-gray-500 text-lg">
          Mobile
        </view>
        <view class="border-b p-2">
          <input type="text" v-model="formData.mobile" class="text-lg text-bold" required />
        </view>
      </view>
      
      <view class="mb-4">
        <view class="text-gray-500 text-lg">
          Verify Code
        </view>
        <view class="border-b p-2">
          <input type="text" v-model="formData.verify_code" class="text-lg text-bold" required />
        </view>
        <view class="text-indigo-700 text-base mt-2">
          点击发送验证码
        </view>
      </view>
      
      <view class="mb-4">
        <view class="text-gray-500 text-lg">
          Password
        </view>
        <view class="border-b p-2">
          <input type="text" v-model="formData.password" password="" class="text-lg text-bold" required />
        </view>
      </view>
      
      
      <view class="text-indigo-700 text-lg" @click="navBackLogin">
        <view class="">
          已有账号，返回登录
        </view>
      </view>

    </view>

    <view class="mt-8 text-center">
      <view class="p-2 text-gray-600 text-sm">
        REGISTER
      </view>
      <button type="default" class="inline-block btn-login" :loading="isLoading" :disabled="isDisabled" @click="onReg">
        PRESS ME
      </button>
    </view>

  </view>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: false,
        isDisabled: false,
        formData: {
          mobile: '',
          password: ''
        },
        passwordAgain:'',
        platform: '',
        device: ''
      }
    },

    methods: {
      async onReg() {
        let data = this.formData
        data.platform = this.platform
        data.device = this.device
        data.auth_type = 'app'
        data.user_type = 1

        if (!data.mobile) {
          uni.showToast({
            title: '请输入登录手机号码',
            icon: "none",
            duration: 1000
          });
          return
        }

        if (!data.password) {
          uni.showToast({
            title: '请输入登录密码',
            icon: "none",
            duration: 1000
          });
          return
        }
        
        this.isLoading = true
        this.isDisabled = true

        try {
          console.log('/onReg data', JSON.stringify(data, null, 2))
          let ret = await this.$store.dispatch('authRegister',data)
          console.log('/onReg ret', JSON.stringify(ret, null, 2))
          if (ret.code === 0) {
            let loginRetData = ret.data
            let token = loginRetData.token
            console.log('/onReg token:', token)
            uni.setStorageSync('user_auth_token', token)
            uni.navigateBack({
              delta: 2
            })
          } else {
            throw new Error(ret.message)
          }
        } catch (e) {
          //TODO handle the exception
          let errMsg = e.message || '登录失败，请稍后重试'
          uni.showToast({
            title: errMsg ,
            icon: "none",
            duration: 1000
          });
          
        }
        
        setTimeout(()=>{
          this.isLoading = false
          this.isDisabled = false
        },1000)

      },
      navBackLogin(){
        uni.navigateBack({
          delta: 1
        })
      }
    },
    onShow() {
      // #ifdef MP-WEIXIN
      uni.redirectTo({
        url: '/pages/auth/mini'
      })
      // #endif
      let getSystemInfo = uni.getSystemInfoSync()
      this.platform = getSystemInfo.platform
      this.device = getSystemInfo.model

    }
  }
</script>

<style>
  .btn-login {
    border-radius: 9999upx;
    border: none;
    background: #4c51bf !important;
    font-size: 24upx;
    color: #FFFFFF !important;
    padding-top: 20upx;
    padding-bottom: 20upx;
    padding-left: 40upx;
    padding-right: 40upx;
  }
</style>
