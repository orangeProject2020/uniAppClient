<template>
  <view class="page-index">
    
    <view class="navbar navbar-fix bg-white" >
      <view class="status_bar"></view>
      <view class="navbar-content" >
        <view class="navbar-item brand">
          时不我待
        </view>
        <view class="navbar-item">
          <view class="search flex bg-light">
            <view class="">
              <uni-icons type="search" size="15"></uni-icons>
            </view>
            <view class="">
               <input type="text" value="" placeholder="搜索" class="input-search" @click="goToMallUrl('/list')"/>
            </view>
          </view>        
        </view>
        <view class="navbar-item text-right flex-item">
          <view class="navbar-icon-right">
            <uni-icons type="email" size="30" color="#333"></uni-icons>
          </view>
        </view>
      </view>
    </view>
    
    <swiper class="swiper-banner" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval"
      :duration="swiper.duration">
      <swiper-item v-for="item in indexData.banners" :key="item.id">
        <view class="swiper-item" @click="indexClickItem(item)">
          <view class="swiper-banner-img bg-light">
            <image :src="item.cover" :lazy-load="true" mode="" class="swiper-banner-img"></image>
          </view>
        </view>
      </swiper-item>
    </swiper>
    
    <uni-notice-bar scrollable="true" show-icon="true" single="true" text="消息通知xxxxxxxxxxxxxxxxxxxxxxx" show-close="true" style="padding: 20rpx 30rpx;"></uni-notice-bar>
    
    <view class="index-section">
      <view class="flex " style="border-top: 1rpx solid #EEEEEE;">
        <view class="flex flex-item flex-wrap index-section-cate-nav text-center">
          <view class="item" v-for="item in indexData.categorys" :key="item.id" @click="indexClickItem(item)">
            <view class="cover bg-light">
              <image :src="item.cover" :lazy-load="true" mode="" class="cover"></image>
            </view>
         
          </view>

        </view>
        <view class="flex-item text-center index-profit">
          <view class="icon">
            <image :src="moneyImg" :lazy-load="true" mode="" class="icon"></image>
          </view>
          <view class="countdowm" v-if="countdownData">
            <view class="title">
              分红倒计时
            </view>
            <uni-countdown color="#666666" background-color="" border-color="#" :show-day="false" :hour="countdownData.h" :minute="countdownData.m" :second="countdownData.s"></uni-countdown>
          </view>
        </view>
      </view>
      
    </view>
    
    
    <view class="index-section ">
       <view class="index-section-head flex">
         <view class="title flex-item">
           特惠套餐
         </view>
         <view class="more flex-item text-right" @click="goToMallUrl('/list?category=package')">
           更多 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
         </view>
       </view>
       
       <view class="index-section-content">
         <scroll-view class="index-section-content-box" scroll-x="true" scroll-left="0">
             <view class="item" v-for="item in indexData.packages" :key="item.id" @click="indexClickItem(item)">
               <view class="index-package-img bg-light">
                 <image :src="item.cover" :lazy-load="true" mode="" class="index-package-img "></image>
               </view>
             </view>

         </scroll-view>
       </view>
        
    </view>
    
    <view class="index-section">
      <view class="index-section-head flex">
        <view class="title flex-item">
          快乐男孩 / Happy Boys
        </view>
        <view class="more flex-item text-right" @click="goToMallUrl('/list?typeSub=1')">
          更多 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
        </view>
      </view>
      
      <view class="index-section-content">
        <view class="flex flex-wrap index-section-content-list">
          <view class="index-section-content-list-item" v-for="item in indexData.males" :key="item.id">
            <image :src="item.cover" mode="" class="cover"></image>
          </view>
          
        </view>
      </view>
    </view>
    
    <view class="index-section">
      <view class="index-section-head flex">
        <view class="title flex-item">
          糖果女孩 / Candy Girls
        </view>
        <view class="more flex-item text-right" @click="goToMallUrl('/list?typeSub=2')">
          更多 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
        </view>
      </view>
      
      <view class="index-section-content">
        <view class="flex flex-wrap index-section-content-list">
          <view class="index-section-content-list-item" v-for="item in indexData.females" :key="item.id">
            <image :src="item.cover" mode="" class="cover"></image>
          </view>
          
        </view>
      </view>
    </view>
    
    
    <view class="index-section ">
       <view class="index-section-head flex">
         <view class="title flex-item">
           为你推荐
         </view>
         <view class="more flex-item text-right" @click="goToMallUrl('/list?category=recommend')">
           更多 <uni-icons type="arrowright" size="12" color="#999"></uni-icons>
         </view>
       </view>
       
       <view class="index-section-content">
         <scroll-view class="index-section-content-box" scroll-x="true" scroll-left="0">
             <view class="item" v-for="item in indexData.recommends" :key="item.id" @click="indexClickItem(item)">
               <view class="index-package-img bg-light">
                 <image :src="item.cover" :lazy-load="true" mode="" class="index-package-img "></image>
               </view>
               <view class="title truncate">
                  {{item.title}}
               </view>
               <view class="desc truncate">
                 {{ item.desc}}
               </view>
             </view>
 
         </scroll-view>
       </view>
        
    </view>
    
    
  </view>
</template>

<script>
  import {uniIcons,uniNoticeBar,uniCountdown} from '@dcloudio/uni-ui';
  import config from '@/store/config.js';
	import utils from '@/store/utils.js';
  export default {
    components:{
      uniIcons,
      uniNoticeBar,
      uniCountdown
    },
    data() {
      return {
        navbar: {
          opacity:1
        },
        swiper: {
          indicatorDots: true,
          autoplay: true,
          interval: 2000,
          duration: 500
        },
        indexData:{
          banners:[],
          categorys:[],
          packages:[],
          recommends:[],
          males:[],
          females:[]
        },
        moneyImg: config.moneyImg,
        countdownData: null
      }
    },
    computed:{
      
    },
    methods:{
      async getIndexData(type = 'banners') {
        let datas = uni.getStorageSync('index_data_' + type)
        if (!datas || datas.length <= 0) {
          console.log('/getIndexData ' , type, ' from api')
          await this.$store.dispatch('indexDataGet', {type: type})
          datas = uni.getStorageSync('index_data_' + type)
        } else {
          console.log('/getIndexData ' , type, ' from storage')
        }
        this.indexData[type] = datas ? JSON.parse(datas) : []
      },
      indexClickItem(item) {
        let type = item.type
        console.log('/indexClickItem type:' , type , item.link)
        if (type == 'url') {
          uni.navigateTo({
            url: '/pages/extLink?url=' + encodeURIComponent(item.link)
          })
        } else if (type == 'page') {
          
          uni.navigateTo({
            url:'/pages' + item.link,
            success() {
              console.log('/go to page success:' , item.link)
            },
            fail() {
              console.log('/go to page fail:' , item.link)
              let linkData = item.link.split('?')
              console.log('/go to page tab:' , linkData[0], linkData[1])
              uni.setStorageSync('index_jump_data', linkData[1])
              uni.switchTab({
                url:'/pages' + linkData[0]
              })
            }
          })
        } else if (type == 'pageMall') {
          
          uni.navigateTo({
            url:'/pages/mall/wv?url=' + encodeURIComponent(item.link)
          })
        }
      },
      async getCountDown() {
        // let countdownRet = await this.$store.dispatch('countdownGet')
        // if (countdownRet.code === 0) {
        //   let countdownData = countdownRet.data
        //   console.log('/onLoad countdownData:', JSON.stringify(countdownData))
        //   this.countdownData = countdownData
        // }
				let currentTimestamp = Date.now() + this.$store.state.timestampVal
				console.log('/getCountDown currentTimestamp:',currentTimestamp)
				let today = utils.dateFormat(null, 'YYYY-MM-DD')
				console.log('/getCountDown today:',today)
				let todayEnd = utils.getTimestamp(today + 'T23:59:59Z')
				console.log('/getCountDown todayEnd:',todayEnd)
				let second = todayEnd - parseInt(currentTimestamp / 1000)
				console.log('/getCountDown second:',second)
				let h = parseInt(second / 3600)
				let m = parseInt((second - h * 3600) / 60)
				let s = second - h * 3600 - m * 60
				
				this.countdownData = {
					h:h - 8,
					m:m,
					s:s
				}
				console.log('/getCountDown countdownData:',this.countdownData)
        
      },
      goToMallUrl(url) {
        url = encodeURIComponent(url)
        console.log('/goToMallUrl url:' , url)
        uni.navigateTo({
          url:'/pages/mall/wv?url=' + encodeURIComponent(url)
        })
      },
      
    },
    async onLoad() {
      // this.getBanners()
      // this.getCategorys()
      this.getIndexData('banners')
      this.getIndexData('categorys')
      this.getIndexData('packages')
      this.getIndexData('recommends')
      this.getIndexData('males')
      this.getIndexData('females')

    },
		onShow() {
			this.getCountDown()
		},
    onPullDownRefresh() {
      let p1 = this.$store.dispatch('indexDataGet', {type: 'banners'}).then(() => {
        this.getIndexData('banners')
      })
      let p2 = this.$store.dispatch('indexDataGet', {type: 'categorys'}).then(() => {
        this.getIndexData('categorys')
      })
      let p3 = this.$store.dispatch('indexDataGet', {type: 'packages'}).then(() => {
        this.getIndexData('packages')
      })
      let p4 = this.$store.dispatch('indexDataGet', {type: 'recommends'}).then(() => {
        this.getIndexData('recommends')
      })
      let p5 = this.$store.dispatch('indexDataGet', {type: 'males'}).then(() => {
        this.getIndexData('males')
      })
      let p6 = this.$store.dispatch('indexDataGet', {type: 'females'}).then(() => {
        this.getIndexData('females')
      })
      
      Promise.all([p1,p2,p3,p4,p5,p6]).then(() => {
        uni.stopPullDownRefresh()
      })
      
      this.getCountDown()
    }
  }
</script>

<style lang="less">
  
  .page-index {
    padding-bottom: 200rpx;
  }

  
  .swiper-banner {
    height: 450rpx ;
    margin-top: var(--status-bar-height);
    padding-top: 100rpx;
    .swiper-item {
      padding: 30rpx;
      
      .swiper-banner-img {
        border-radius: 16rpx;
        width: 690rpx;
        height: 360rpx;
      }
    }
  }
  
  .index-section {
    margin-bottom: 30rpx;
    
    .index-section-head {
      padding: 20rpx 30rpx;
      line-height: 30rpx;
      border-bottom: 1rpx solid #EEEEEE;
      margin-bottom: 20rpx;
      .title {
        color: #333333;
        font-weight: 400;
        font-size: 14px;
      }
      .more {
        color: #999999;
        font-size: 12px;
      }
    }
    
    .index-section-content {
      padding-left: 30rpx;
      
      .index-section-content-box {
          // width: 720rpx;
          // height: 210rpx;
          white-space: nowrap;
          width: 100%;
          .item {
            width: 320rpx;
            // height: 180rpx;
            margin-right: 30rpx;
            margin-bottom: 30rpx;
            display: inline-block;
            vertical-align: top;
            
            .title {
              font-size: 13px;
              color: #666666;
            }
            .desc {
              font-size: 12px;
              color: #ccc;
            }
          }
      }
    }
    
    .index-section-content-list-item {
      width: 220rpx;
      margin-right: 15rpx;
      margin-bottom: 15rpx;

      .cover {
        width: 220rpx;
        height: 200rpx;
        background: #EEEEEE;
      }
    }
    
    .index-package-img {
      width: 320rpx;
      height: 180rpx;
      border-radius: 16rpx;
    }
  }
  
  .index-section-cate-nav {
    padding: 30rpx;
    border-right: 1rpx solid #EEEEEE;
    .item {
      width: 50%;
      margin-bottom: 20rpx;
      
      .cover {
        border-radius: 8rpx;
        width: 140rpx;
        height: 140rpx;
        display: inline-block;
      }
      .title {
        color: #666666;
        fonr-size:13px;
      }
    }
  }
  
  .index-profit {
    padding-top:30rpx;
    .icon {
      width: 100px;
      display: inline-block;
      height: 100px;
    }
    
    .countdowm {
      margin-top: 20rpx;
      .title {
        color: #666666;
        font-size: 13px;
      }
    }
    
  }
</style>
