<template>
  <view>
    <web-view></web-view>
  </view>
</template>
<script>
  import config from '@/store/config.js';
  var wvCart; //计划创建的webview
  
  export default {
    data() {
      return {
        url: config.urls.mallCartIndex
      }
    },
    onReady() {
      let createWV = (top) => {
        var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
        setTimeout(()=> {
          wvCart = currentWebview.children()[0]
          wvCart.setStyle({
            top: top,
            bottom: 0
          })
          wvCart.loadURL(this.url)
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
      // wvCart.reload()
      if (wvCart) {
        console.log('cart reload')
        wvCart.loadURL(this.url + '&t=' + Date.now())
      }
    }
  };
</script>
