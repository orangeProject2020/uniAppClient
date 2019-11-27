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
          版本号
        </view>
      </view>
      <view class="text-right">
        <text class="text-light">{{version}}</text>
      </view>
    </view>

    <view class="flex p-3 border-b" @click="checkUpdate">
      <view class="flex-item">
        <view class="setting-title">
          检查更新
        </view>
      </view>
      <view class="text-right">
        <uni-icons type="arrowright"></uni-icons>
      </view>
    </view>

    <view class="flex p-3 border-b" @click="goToExtLink(protocol)">
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
    
    <view class="flex p-3 border-b" @click="goToExtLink(aboutLink)">
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
  import {
    uniIcons,
    uniPopup
  } from '@dcloudio/uni-ui';
  import request from '@/store/request.js';
  import config from '@/store/config.js';
  export default {
    components: {
      uniIcons,
      uniPopup
    },
    data() {
      return {
        version: plus.runtime.version,
        alipayBtnDisabled: false,
        // userData: {
        //   avatar: '/static/icon/user_a.png',
        //   username: '',
        //   alipay: ''
        // },
        aboutLink: config.mallLinks.aboutExtLink,
        protocol: config.mallLinks.protocolExtLink
      }
    },
    computed: {
      userData() {
        return this.$store.state.userData
      }
    },
    methods: {
      onLogout() {
        uni.setStorageSync('user_auth_token', '')
        this.$store.commit('lastLoginSet', false)

        this.$store.commit('userInfoSet', {
          avatar: '/static/icon/user_a.png',
          username: '',
          alipay: ''
        })
        this.$store.commit('userAesstsSet', {
          balance: 0,
          profit: 0,
          withdraw: 0
        })

        uni.navigateBack({
          delta: -1
        })
        // uni.switchTab({
        //   url:'/pages/mall/index'
        // })
      },
      open() {
        this.$refs.popup.open()
      },
      goToExtLink(url){
        console.log('goToExtLink:',url)
        uni.navigateTo({
          url: '/pages/mall/wv?url=' + encodeURIComponent(url)
        })
      },
      async checkUpdate() {
        // 检查更新
        let version = plus.runtime.version
        let platform = plus.os.name.toLowerCase()

        try {
          let updateRet = await request.post('/utils/app/update', {
            version: version,
            platform: platform
          })
          console.log('updateRet:', JSON.stringify(updateRet))
          if (updateRet.code === 0) {
            // 升级
            console.log('update')
            if (updateRet.data.status === 1) {
              let content = updateRet.data.note || ''
              uni.showModal({
                title: '更新提示',
                content: '更新提示:' + content,
                success: function(res) {
                  if (res.confirm) {
                    // console.log('用户点击确定');
                    uni.navigateTo({
                      url: '/pages/extLink?url=' + encodeURIComponent(updateRet.data.url)
                    })
                  } else if (res.cancel) {
                    // console.log('用户点击取消');
                  }
                }
              });
            } else {
              throw new Error('已是最新版本')
            }

          } else {
            throw new Error(updateRet.message)
          }
        } catch (err) {
          // console.error(err);
          uni.showToast({
            icon: 'none',
            title: err.message
          })
        }
      },

      async alipaySubmit() {
        this.alipayBtnDisabled = true
        try {
          let alipay = this.$store.state.userData.alipay
          console.log('alipay:', alipay)
          let ret = await this.$store.dispatch('userInfoUpdate', {
            alipay: alipay
          })
          if (ret.code == 0) {
            this.$store.commit('lastLoginSet', false)
            this.$store.state.userData.alipay = alipay
          } else {
            throw new Error(ret.message)
          }
        } catch (e) {
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
