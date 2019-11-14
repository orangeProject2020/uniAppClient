<script>
	export default {
		onLaunch: function() {
      console.log('App onLaunch')
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
  @import "common/uni.css";
 @import "colorui/main.css";
  @import "colorui/icon.css";
  /* @import "./node_modules/tailwindcss/dist/tailwind.css"; */
  @import "common/app.css"; /* 你的项目css */
  
</style>
