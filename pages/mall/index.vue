<template>
  <view>
    <web-view :src="url"></web-view>
  </view>
</template>
<script>
  import config from '@/config/index.js'
  var wvIndex; //计划创建的webview
  
  export default {
    data() {
      return {
        url: config.urls.mallIndex
      }
    },
    onReady() {
      let token = uni.getStorageSync('user_auth_token') || ''
      let url = this.url + '&token=' + token
      console.log('url:', url)
      
      let createWV = (top) => {
        var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
        setTimeout(function() {
          wvIndex = currentWebview.children()[0]
          wvIndex.setStyle({
            top: top,
            bottom: 0
          })
           wvIndex.loadURL(url)
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
    
    onLoad() {
  
    },
    onShow() {
      let lastToken = this.$store.state.lastToken || ''
      console.log('/onShow lastToken:', lastToken)
      let currentToken = uni.getStorageSync('user_auth_token') || ''
      console.log('/onShow currentToken:', currentToken)
      if (lastToken != currentToken){
        this.$store.state.lastToken = currentToken
        let url = this.url + '&token=' + (currentToken || '0')
        console.log('/onShow url:', url)
        wvIndex.loadURL(url)
      }
    }
  };
</script>
