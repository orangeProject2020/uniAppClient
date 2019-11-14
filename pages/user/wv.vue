<template>
  <view>
    <web-view></web-view>
  </view>
</template>
<script>
  import config from '@/config/index.js'
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
        }, 1000); //如果是页面初始化调用时，需要延时一下
      }

      // #ifdef APP-PLUS
      uni.getSystemInfo({
        success: (e) => {
          let StatusBar = e.statusBarHeight;
          console.log('StatusBar:', StatusBar)
          createWV(StatusBar)
        }
      })

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
