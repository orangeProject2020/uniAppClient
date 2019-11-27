<template>
  <view page="page-mall-index">
    <view class="navbar navbar-fix bg-primary" >
      <view class="status_bar"></view>
      <view class="navbar-content" >
        <view class="navbar-item brand">
          <text class="text-white">商城</text>
        </view>
        <view class="navbar-item">
          <view class="search flex bg-light">
            <view class="">
              <uni-icons type="search" size="15"></uni-icons>
            </view>
            <view class="">
               <input type="text" value="" placeholder="搜索" class="input-search"/>
            </view>
          </view>
        </view>
        <view class="navbar-item text-right flex-item">
          <view class="navbar-icon-right" @click="goCart">
            <view class="icon-img">
              <image src="/static/icon/cart-white.png" mode="" class="icon-img"></image>
            </view>
          </view>
        </view>
      </view>
    </view>
    
    <swiper class="swiper-banner" :indicator-dots="swiper.indicatorDots" :autoplay="swiper.autoplay" :interval="swiper.interval"
      :duration="swiper.duration">
      <swiper-item v-for="item in banners" :key="item.id">
        <view class="swiper-item" @click="bannerItemClick(item)">
          <view class="swiper-banner-img bg-light">
            <image :src="item.cover" :lazy-load="true" mode="" class="swiper-banner-img"></image>
          </view>
        </view>
      </swiper-item>
    </swiper>
    
    <view class="p-3">
      <view class="border-b">
      </view>
    </view>
    
    <view class="flex">
      <view class="category-navs" v-model="activeCategory">
        <template v-for="item in categorys" >
          <view class="category-navs-item truncate" :class="{active: (item.id === activeCategory) ? true : false}" :key="item.id" @click="activeCategoryChange(item)">
            {{item.title}}
          </view>
        </template>
        
      </view>
      <view class="flex flex-wrap goods-list">
        <view class="category-title">
          {{activeCategoryName}}
        </view>
        <view class="goods-item text-center" v-for="item in goodsList" :key="item.id" @click="goToDetail(item)">
          <view class="cover">
            <image :src="item.cover" :lazy-load="true" mode="" class="cover"></image>
          </view>
          <view class="title truncate">
            {{ item.title }}
          </view>
          <view class="price truncate">
            <money :num="item.price" class="price-sell"></money>
            <money :num="item.price" class="price-market"></money>
          </view>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import {uniIcons,uniNoticeBar,uniCountdown} from '@dcloudio/uni-ui';
  import money from '@/components/money.vue';
  import config from '@/store/config.js'
  export default {
    components:{
      uniIcons,
      uniNoticeBar,
      uniCountdown,
      money
    },
    data() {
      return {
        swiper: {
          indicatorDots: true,
          autoplay: true,
          interval: 2000,
          duration: 500
        },
        banners:[
          {id: 1,cover: ''},
          {id: 2,cover: ''}
        ],
        categorys : [
        ],
        activeCategory: 0,
        activeCategoryName: '',
        goodsList: []
      }
    },
    methods:{
      formartMoney(num) {
        return (num/ 100).toFixed(2)
      },
      goCart(){
        this.goToMallUrl('/cart')
      },
      bannerItemClick(){
        
      },
      goToDetail(item) {
        this.goToMallUrl('/goods/detail?id=' + item.id)
      },
      goToMallUrl(url) {
        url = encodeURIComponent(url)
        console.log('/goToMallUrl url:' , url)
        uni.navigateTo({
          url:'/pages/mall/wv?url=' + encodeURIComponent(url)
        })
      },
      async activeCategoryChange(item) {
        this.activeCategory = item.id
        this.activeCategoryName = item.title
        
        await this.getGoodsList()
      },
      async getGoodsList() {
        if (!this.activeCategory) {
          return
        }
        
        let list = uni.getStorageSync('mall_goods_list_' + this.activeCategory) || ''
        if (list.length <= 0) {
          let ret = await this.$store.dispatch('getGoodsList', {category_id: this.activeCategory, limit: 0, status : 1})
          console.log('/getGoodsList from api')
          list = uni.getStorageSync('mall_goods_list_' + this.activeCategory)
        } else {
          console.log('/getGoodsList from cache')
        }
        console.log('/getGoodsList goodsList:', list)
        this.goodsList = list ? JSON.parse(list) : []
        
      },
      async getCategorys() {
        let list = uni.getStorageSync('mall_categorys') || ''
        if (list.length <= 0){
          let ret = await this.$store.dispatch('getCategorys', {status: 1, limit: 0 , business_id: config.businessId})
          console.log('/getCategorys from api')
          list = uni.getStorageSync('mall_categorys')
        }else {
          console.log('/getCategorys from cache')
        }
        console.log('/getCategorys categorys:', list)
        this.categorys = list ? JSON.parse(list) : []
      }
    },
    async onLoad() {
      await this.getCategorys()
      this.activeCategoryChange(this.categorys[0])
      
    },
    async onShow() {
      let jumpData = uni.getStorageSync('index_jump_data') || ''
      if (jumpData){
        console.log('onShow jumpData' , jumpData)
        let jumpDataArr = jumpData.split('&')
        let jumpDataObj = {}
        jumpDataArr.forEach(item => {
          let itemData = item.split('=')
          if (itemData.length>=2){
            jumpDataObj[itemData[0]] = itemData[1]
          }
        })
        console.log('onShow jumpDataObj' , JSON.stringify(jumpDataObj))
        if (jumpDataObj.hasOwnProperty('category')){
          let activeCategory = jumpDataObj.category
          this.categorys.forEach(item => {
            // console.log('onShow item:' , item.id)
            if(item.id == activeCategory){
              console.log('onShow activeCategory' , item.id)
              this.activeCategoryChange(item)
            }
          })
          
        }
        
        uni.setStorageSync('index_jump_data', '')
      }
      
    },
    async onPullDownRefresh() {
      uni.stopPullDownRefresh()
      await this.$store.dispatch('getCategorys', {status: 1, limit: 0 , business_id: config.businessId})
      let list = uni.getStorageSync('mall_categorys')
      this.categorys = list ? JSON.parse(list) : []
      
      this.categorys.forEach(item => {
        uni.removeStorageSync('mall_goods_list_' + item.id)
      })
      this.activeCategoryChange(this.categorys[0])
    }
  }
</script>

<style lang="less">
  
  .swiper-banner {
    height: 200rpx ;
    margin-top: var(--status-bar-height);
    padding-top: 100rpx;
    .swiper-item {
      // padding: 30rpx;
      
      .swiper-banner-img {
        // border-radius: 16rpx;
        width: 750rpx;
        height: 200rpx;
      }
    }
  }
  
  .category-navs {
    width: 180rpx;
    border-right: 1rpx solid #EEEEEE;
    
    .category-navs-item {
      line-height: 40rpx;
      font-size: 14px;
      color: #666666;
      padding: 30rpx;
      border-top: 1rpx solid #EEEEEE;
    }
    
    .category-navs-item.active {
      color: #3D6BFA;
      font-size: 15px;
      // border-bottom: 4rpx solid #3D6BFA;
      border-right: 4rpx solid #3D6BFA;
    }
  }
  .goods-list {
    width: 540rpx;
    padding: 0 30rpx 30rpx;
    
    .category-title {
      width: 540rpx;
      text-align: center;
      font-size: 15px;
      color: #333333;
      border-bottom: 1rpx solid #EEEEEE;
      line-height: 100rpx;
    }
  }
  .goods-item {
    width: 140rpx;
    padding: 30rpx 20rpx;
    .cover {
      width: 120rpx;
      height: 120rpx;
      border-radius: 8rpx;
      background: #EEEEEE;
      display: inline-block;
    }
    
    .title {
      color: #666666;
      font-size: 13px;
    }
    
    .price {
      color: #e53e3e;
      font-size: 12px;
    }
    .price-sell {
      margin-right: 20rpx;
    }
    .price-market {
      color: #CCCCCC;
      text-decoration: line-through;
      
    }
  }
</style>