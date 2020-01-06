<template>
  <view class="page-user-index">

    <view class="bg-primary navbar navbar-fix">
      <view class="status_bar"></view>
      <view class="navbar-content">
        <view class="navbar-item flex-item " :style="{opacity: navbar.opacity}">
          <view class="navbar-avatar navbar-left">
            <image :src="userData.avatar" mode="scaleToFill" class="navbar-avatar"></image>
          </view>
          <view class="inline-block navbar-title" @click="goToInfoPage">
            {{ isLogin ? userData.username : '未登录' }}
          </view>
        </view>
        <view class="navbar-item flex-item text-right">
          <view class="navbar-icon-right">
            <uni-icons type="gear" size="30" color="#fff" class="icon" @click="goToInfoPage"></uni-icons>
            <uni-icons type="email" size="30" color="#fff" class="icon" @click="goToUrl('userMsg')"></uni-icons>
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
            <view class="text-white user-index-name" @click="goToInfoPage">
              {{ isLogin ? userData.username : '未登录' }}
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
          ￥{{(userAssets.balance / 100).toFixed(2)}}
        </view>
        <view class="assets-title">
          可提余额
        </view>
      </view>
      <view class="uni-flex-item">
        <view class="assets-num price">
          ￥{{(userAssets.profit / 100).toFixed(2)}}
        </view>
        <view class="assets-title">
          预计分红 <uni-icons type="help" size="15" color="#999"></uni-icons>
        </view>
      </view>
      <view class="uni-flex-item">
        <view class="assets-num">
          ￥{{(userAssets.withdraw / 100).toFixed(2)}}
        </view>
        <view class="assets-title">
          提现额度
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
            未付款 <text class="order-count" v-if="userOrders[0] > 0">{{userOrders[0] > 99 ? '99+' : userOrders[0]}}</text>
          </view>
        </view>

        <view class="item" @click="goToUrl('mallOrder1')">
          <view class="">
            <image src="/static/icon/order_1.png" mode="" class="icon"></image>
          </view>
          <view class="">
            待发货 <text class="order-count" v-if="userOrders[1] > 0">{{userOrders[1] > 99 ? '99+' : userOrders[1]}}</text>
          </view>
        </view>

        <view class="item" @click="goToUrl('mallOrder2')">
          <view class="">
            <image src="/static/icon/order_2.png" mode="" class="icon"></image>
          </view>
          <view class="">
            待收货 <text class="order-count" v-if="userOrders[2] > 0">{{userOrders[2] > 99 ? '99+' : userOrders[2]}}</text>
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
        <view class="item" @click="goToUrl('mallWithdrawApply')">
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
          <view class="">
            收益记录
          </view>
        </view>

        <view class="item" @click="goToUrl('mallWithdrawList')">
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
        <!-- <view class="item" @click="goToUrl('mallCollect')">
          <view class="">
            <image src="/static/icon/like.png" mode="" class="icon"></image>
          </view>
          <view class="">
            商品收藏
          </view>
        </view> -->

        <view class="item" @click="goToUrl('mallAddress')">
          <view class="">
            <image src="/static/icon/address.png" mode="" class="icon"></image>
          </view>
          <view class="">
            地址管理
          </view>

        </view>

        <!-- <view class="item">
          <view class="">
            <image src="/static/icon/comment.png" mode="" class="icon"></image>
          </view>
          <view class="" @click="goToUrl('orderComment')">
            评价
          </view>
        </view> -->

        <!-- <view class="item" @click="goToUrl('orderAfter')">
          <view class="">
            <image src="/static/icon/order_after.png" mode="" class="icon"></image>
          </view>
          <view class="">
            售后
          </view>
        </view> -->

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

        <!-- <view class="item">
          <view class="">
            <image src="/static/icon/invoice.png" mode="" class="icon"></image>
          </view>
          <view class="">
            发票开具
          </view>

        </view> -->

      </view>

    </view>

    <!-- <view class="p-4" v-if="isLogin">
      <view class="text-center text-blue" @click="onLogout">
        退出
      </view>
    </view> -->
  </view>
</template>

<script>
  var wvUserIndex;
  import {
    uniIcons
  } from '@dcloudio/uni-ui';
  import config from '@/store/config.js';
  import utils from '@/store/utils.js';
  export default {
    components: {
      uniIcons
    },
    data() {
      return {
        isLogin: false,
        // lastLogin: false,
        user: false,
        navbar: {
          opacity: 0
        },
        // userData: {
        //   avatar: '/static/icon/user_a.png',
        //   username: ''
        // },
        // userAssets: {
        //   balance: 0,
        //   profit: 0,
        //   withdraw: 0
        // }
      }
    },
    computed: {
      userData() {
        return this.$store.state.userData
      },
      userAssets() {
        return this.$store.state.userAssets
      },
      userOrders() {
        return this.$store.state.userOrders
      },
      lastLogin() {
        return this.$store.state.lastLogin
      }
    },
    methods: {
      navToLogin() {
        if (!this.isLogin) {
          uni.navigateTo({
            url: '/pages/auth/login'
          })
        }
      },
      goToUrl(type) {
        // let token = uni.getStorageSync('user_auth_token')
        if (type == 'mallWithdrawApply'){
          this.$store.commit('lastLoginSet',  false)
        }
        
        if (!this.isLogin) {
          this.navToLogin()
          return true;
        }
        
        // 绑定支付宝
        if (type.indexOf('mallWithdraw') > -1 && !this.userData.alipay) {
          uni.showModal({
              title: '绑定支付宝',
              content: '提现操作需先绑定支付宝，去绑定？',
              success: function (res) {
                  if (res.confirm) {
                      console.log('用户点击确定');
                      uni.navigateTo({
                        url:'/pages/user/settings'
                      })
                  } else if (res.cancel) {
                      console.log('用户点击取消');
                  }
              }
          });
          return 
        }
        
        let mallLink= config.mallLinks[type] || ''
        console.log('/goToUrl mallLink:', mallLink)
        if (mallLink) {
          uni.navigateTo({
            url: '/pages/mall/wv?url=' + encodeURIComponent(mallLink)
          })
        }
        // uni.navigateTo({
        //   url: '/pages/user/wv?type=' + type
        // })
      },
      goToInfoPage() {
        if (!this.isLogin) {
          this.navToLogin()
          return true;
        }

        uni.navigateTo({
          url: '/pages/user/settings'
        })
      },
      onLogout() {
        uni.setStorageSync('user_auth_token', '')
        this.isLogin = false
        this.$store.commit('lastLoginSet', false)

        this.$store.commit('userInfoSet', {
          avatar: '/static/icon/user_a.png',
          username: ''
        })
        this.$store.commit('userAesstsSet', {
          balance: 0,
          profit: 0,
          withdraw: 0
        })
        // this.userData.username = ''
        // this.userAssets.balance = 0
        // this.userAssets.profit = 0
        // this.userAssets.withdraw = 0
        // uni.switchTab({
        //   url:'/pages/mall/index'
        // })
      },
      async getUserInfo() {
        try {
          let ret = await this.$store.dispatch('userInfoGet')
          console.log('/getUserInfo ret:', JSON.stringify(ret, null, 2))
          if (ret.code == 0) {
            // this.userData.username = ret.data.username || ret.data.mobile
            // if (ret.data.avatar){
            //   this.userData.avatar = ret.data.avatar
            // }
            let username = ret.data.username || ret.data.mobile
            let avatar = ret.data.avatar ? ret.data.avatar : '/static/icon/user_a.png'
            let alipay = ret.data.alipay || ''

            this.$store.commit('userInfoSet', {
              avatar: avatar,
              username: username,
              alipay: alipay
            })

            let userId = ret.data.uuid
            let assetsRet = await this.getUserAssets(userId)
            if (assetsRet.code !== 0) {
              throw new Error('获取用户信息出现错误，请稍后重试')
            }
            let ordersRet = await this.getUserOrders(userId)
            if (assetsRet.code !== 0) {
              // throw new Error('获取用户信息出现错误，请稍后重试')
            }
            
          } else {
            throw new Error('获取用户信息失败，请稍后重试')
          }
        } catch (err) {
          console.error('/getUserInfo err:', err.message)
          uni.setStorageSync('user_auth_token', '')
          this.isLogin = false
          uni.showToast({
            title: err.message,
            icon:'none',
            duration: 2000,
            success() {
              setTimeout(() => {
                uni.hideToast()
              }, 2000)
            }
          });
        }

      },
      async getUserAssets(userId) {
        let ret = await this.$store.dispatch('userAssetsGet', {
          user_id: userId
        })
        console.log('/getUserAssets ret:', JSON.stringify(ret, null, 2))
        if (ret.code == 0) {
          this.$store.commit('userAesstsSet', {
            balance: ret.data.balance,
            profit: ret.data.profit,
            withdraw: ret.data.withdraw
          })
        }
        return ret
      },
      async getUserOrders(userId) {
        let ret = await this.$store.dispatch('userOrdersGet', {
          user_id: userId
        })
        console.log('/getUserOrders ret:', JSON.stringify(ret, null, 2))
        if (ret.code == 0) {
          this.$store.commit('userOrdersSet', [
            ret.data[0],
            ret.data[1],
            ret.data[2]
          ])
        }
        return ret
      }
    },
    onLoad() {
      let token = uni.getStorageSync('user_auth_token')
      this.isLogin = token ? true : false
      // this.lastLogin = this.isLogin ? true : false
      this.$store.commit('lastLoginSet', this.isLogin ? true : false)

      if (this.isLogin) {
        this.getUserInfo()
      } 
    },
    onShow() {
      // uni.setStorageSync('user_auth_token', '')
      let token = uni.getStorageSync('user_auth_token')
      console.log('/onshow token:', token)
      this.isLogin = token ? true : false
      
      let forceRefresh = utils.forceRefresh()
      console.log('/onShow forceRefresh:', forceRefresh ? '1': '0')
      if (forceRefresh) {
        this.$store.commit('lastLoginSet', false)
      }

      if (!this.lastLogin && this.isLogin) {
        this.getUserInfo()
        // this.getUserOrders()
        // this.lastLogin = true
        this.$store.commit('lastLoginSet', true)
      }
      
      if (!this.isLogin){
        this.$store.commit('userInfoSet', {
          avatar: '/static/icon/user_a.png',
          username: '',
          alipay:''
        })
        this.$store.commit('userAesstsSet', {
          balance: 0,
          profit: 0,
          withdraw: 0
        })
        this.$store.commit('userOrdersSet', [0,0,0])
      }
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

      } else {
        this.navbar.opacity = 0
      }
      // console.log(JSON.stringify(data))
    },
    onPullDownRefresh() {

      if (this.isLogin) {
        this.getUserInfo()
        // this.getUserOrders()
      }

      setTimeout(() => {
        uni.stopPullDownRefresh()
      }, 1000)
    }
  }
</script>

<style lang="less">
  .page-user-index {

    background: #fafafa;
    padding-bottom: 400rpx;

    .user-index-header {
      padding-top: var(--status-bar-height);
      padding-bottom: 100rpx;
      margin-top: -2rpx;

      .user-index-header-content {
        margin-top: 100rpx;

        .user-index-avatar {
          width: 120rpx;
          height: 120rpx;
          display: inline-block;
          background: #fafafa;
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
      color: #C0C0C0;
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
      padding: 20rpx 30rpx;
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
  
  .order-count {
    color: #FFFFFF;
    background: #e53e3e;
    font-size: 10px;
    border-radius: 100%;
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
</style>
