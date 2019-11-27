<template>
  <view>
    <web-view></web-view>
  </view>
  </view>
</template>
<script>
  import config from '@/store/config.js';

  export default {
    data() {
      return {
        url: '',
        mallIndexUrl: config.urls.mallIndex,
        wv: null
      }
    },
    methods: {
      createWV(top, url) {
    //     let currentWebview = this.$mp.page.$getAppWebview() //获取当前页面的webview对象
    //     console.log('/createWV currentWebview', currentWebview)
				// if (!wvIndex) {
				// 	setTimeout(() => {
				// 	  wvIndex = currentWebview.children()[0]
				// 	  wvIndex.setStyle({
				// 	    top: top,
				// 	    bottom: 0
				// 	  })
				// 	  console.log('/createWV wvIndex', wvIndex)
				// 	  wvIndex.loadURL(url)
				// 	  // 
				// 	}, 500); //如果是页面初始化调用时，需要延时一下
				// }else {
				// 	wvIndex.loadURL(url)
				// }

      },
    },
    
    onReady() {
      let currentWebview = this.$mp.page.$getAppWebview()
      let e = uni.getSystemInfoSync()
      let statusBar = e.statusBarHeight;
      console.log('/onReady currentWebview:' , currentWebview)
      if (!this.wv) {
        setTimeout(() => {
          this.wv = currentWebview.children()[0]
          this.wv.setStyle({top: statusBar, bottom:0})
          this.wv.loadURL(this.url)
        }, 500)
      }
      
      this.wv.loadURL(this.url)
    },

    async onLoad(opt) {
      // let url = decodeURIComponent(opt.url)
      console.log('/onLoad url:', opt.url)
      let url = opt.url
      let token = uni.getStorageSync('user_auth_token') || ''
      this.url = this.mallIndexUrl + '?token=' + (token || '0') + '&jump=' + url
      console.log('/onLoad url:', this.url)
      
      // let lastToken = this.$store.state.lastToken || ''
      // console.log('/onLoad lastToken:', lastToken)
      // let currentToken = uni.getStorageSync('user_auth_token') || ''
      // console.log('/onLoad currentToken:', currentToken)
      // if (lastToken == currentToken) {
      //   uni.showLoading({
      //     title: 'loading...',
      //     mask: true
      //   })
      //   // this.$store.state.lastToken = currentToken
      //   let url = this.url + '&token=' + (currentToken || '0')
      //   console.log('/onLoad url:', url)
      //   // let mallUrl = this.$store.state.mallUrl || ''
      //   // console.log('/onLoad mallUrl:', mallUrl)
      //   // if (mallUrl) {
      //   //   url += 'jump=' + encodeURIComponent(mallUrl)
      //   // }
      //   // console.log('/onLoad url:', url)
      //   // console.log('/onLoad wvIndex:', wvIndex)
      //   let e = uni.getSystemInfoSync()
      //   let statusBar = e.statusBarHeight;
      //   console.log('/onLoad statusBar:', statusBar)
      //   this.createWV(statusBar, url)
      //   setTimeout(() => {
      //     uni.hideLoading()
      //   }, 1500)
      // }

    },
    async onShow() {
    }
  };
</script>

<style>

</style>
