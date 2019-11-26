<template>
  <view>
    <web-view></web-view>
  </view>
</template>
<script>
  var wxExtLink; //计划创建的webview
  
  export default {
    data() {
      return {
        url: ''
      }
    },
    onReady() {},

    onLoad(opt) {
      console.log('/onLoad:' , opt.url)
      
      let url = decodeURIComponent(opt.url)
      console.log('/onLoad url' , url)
      uni.showLoading({
        title: 'loading...',
        mask: true
      })
      let createWV = (url) => {
        var currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
        setTimeout(function() {
          wxExtLink = currentWebview.children()[0]
          console.log('/createWV url:', url)
          wxExtLink.loadURL(url)
          uni.hideLoading()
        }, 1000); //如果是页面初始化调用时，需要延时一下
      }
      
      createWV(url)

    },
    onShow() {
      console.log('/onShow')
    }
  };
</script>
