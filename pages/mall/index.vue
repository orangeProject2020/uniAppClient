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
      let createWV = (top) => {
        var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
        setTimeout(function() {
          wvIndex = currentWebview.children()[0]
          wvIndex.setStyle({
            top: top,
            bottom: 0
          })
           wvIndex.loadURL(this.url)
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
      
        
    }
  };
</script>
