<script>
  import request from '@/store/request.js';
  
	export default {
		async onLaunch() {
      console.log('App onLaunch')
      
      // 检查更新
      let version = plus.runtime.version 
      let platform = plus.os.name.toLowerCase()
      
      try {
         let updateRet = await request.post('/utils/app/update', {version: version, platform: platform})
         console.log('updateRet:' , JSON.stringify(updateRet))
         if (updateRet.code === 0 && updateRet.data.status === 1){
           // 升级
           console.log('update')
           let content = updateRet.data.note || ''
           uni.showModal({
               title: '更新提示',
               content: '更新提示:' + content,
               success: function (res) {
                   if (res.confirm) {
                       // console.log('用户点击确定');
                       uni.navigateTo({
                         url:'/pages/extLink?url=' + encodeURIComponent(updateRet.data.url)
                       })
                   } else if (res.cancel) {
                       // console.log('用户点击取消');
                   }
               }
           });
         }
      } catch (err) {
        console.error(err);
      }
      
      
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
    
	}
</script>

<style lang="less">
	/*每个页面公共css */
  @import "common/uni.css";
 /* @import "colorui/main.css"; */
  /* @import "colorui/icon.css"; */
  /* @import "./node_modules/tailwindcss/dist/tailwind.css"; */
  /* @import "common/app.css"; /* 你的项目css */ 
  @import "common/app.less";
  
</style>
