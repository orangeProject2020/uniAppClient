<script>
	export default {
		onLaunch: function() {
      console.log('App onLaunch')
		    uni.getSystemInfo({
		        success: function(e) {
                let StatusBar = e.statusBarHeight;
                console.log('StatusBar:', StatusBar)
                Vue.prototype.StatusBar = StatusBar
		            // #ifndef MP
		            Vue.prototype.StatusBar = e.statusBarHeight;
		            if (e.platform == 'android') {
		                Vue.prototype.CustomBar = e.statusBarHeight + 50;
		            } else {
		                Vue.prototype.CustomBar = e.statusBarHeight + 45;
		            };
		            // #endif
		            // #ifdef MP-WEIXIN
		            Vue.prototype.StatusBar = e.statusBarHeight;
		            let custom = wx.getMenuButtonBoundingClientRect();
		            Vue.prototype.Custom = custom;
		            Vue.prototype.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
		            // #endif       
		            // #ifdef MP-ALIPAY
		            Vue.prototype.StatusBar = e.statusBarHeight;
		            Vue.prototype.CustomBar = e.statusBarHeight + e.titleBarHeight;
		            // #endif
		        }
		    })
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    
	}
</script>

<style>
	/*每个页面公共css */
  @import "colorui/main.css";
  @import "colorui/icon.css";
  @import "common/app.css"; /* 你的项目css */
</style>
