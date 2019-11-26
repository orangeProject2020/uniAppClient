<template>
  <view>
    <web-view></web-view>
  </view>
</template>
<script>
  import config from '@/store/config.js';
  var wvUser; //计划创建的webview

  export default {
    data() {
      return {
        type: '',
        url: ''
      }
    },
    onReady() {
      console.log('/onReady')
      this.url = config.urls[this.type]
      console.log('/onReady url:', this.url)
      let token = uni.getStorageSync('user_auth_token') || ''
      this.url += '&token=' + token
      console.log('/onReady url:', this.url)
      let url = this.url
      uni.showLoading({
        title:'loading...',
        mask:true
      })
      let createWV = (top) => {
        
        var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
        setTimeout(function() {
          wvUser = currentWebview.children()[0]
          // wvUser.setStyle({
          //   top: top,
          //   bottom: 0
          // })
          console.log('/createWV url:', url)
          wvUser.loadURL(url)
          uni.hideLoading()
        }, 1000); //如果是页面初始化调用时，需要延时一下
      }

      // #ifdef APP-PLUS
      let e = uni.getSystemInfoSync()
      let statusBar = e.statusBarHeight;
      console.log('/onReady statusBar:', statusBar)
      createWV(statusBar)
      // #endif
    },

    onLoad(opt) {
      console.log('/onLoad')
      let type = opt.type
      this.type = type
      console.log('/onLoad type:', this.type)
    },
    onShow() {
      console.log('/onShow')

      // 
    }
  };
</script>
