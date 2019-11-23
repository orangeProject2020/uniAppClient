<template>
  <view class="page-user-index">
    
    <view class="bg-primary navbar navbar-fix" >
      <view class="status_bar"></view>
      <view class="navbar-content" >
        <view class="navbar-item" :style="{opacity: navbar.opacity}">
          <view class="navbar-avatar navbar-left">
              <image :src="userData.avatar" mode="scaleToFill" class="navbar-avatar"></image>
          </view>
          <view class="inline-block navbar-title">
            {{ userData.username }}
          </view>
        </view>
        <view class="navbar-item text-right">
          <view class="navbar-icon-right">
            <uni-icons type="email" size="30" color="#fff"></uni-icons>
            <uni-icons type="gear" size="30" color="#fff"></uni-icons>
          </view>
        </view>
      </view>
    </view>
    
    <view class="user-index-header bg-primary">
      <view class="user-index-header-content p-3 flex">
        <view class="flex-item">
          <view class="user-index-avatar inline-block">
            <image :src="userData.avatar" mode="scaleToFill" class="user-index-avatar"></image>
          </view>
           <view class="inline-block vertical-top" style="">
             <view class="text-white user-index-name">
               {{userData.username}}
             </view>
           </view>
        </view>
        <view class="text-right">
          
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import {uniIcons} from '@dcloudio/uni-ui';
  export default {
    components:{
      uniIcons
    },
    data() {
      return {
        navbar: {
          opacity: 0
        },
        userData: {
          avatar: '/static/icon/user_a.png',
          username: '186****9410'
        }
      }
    },
    onPageScroll(data) {
      let scrollTop = data.scrollTop
      if (scrollTop > 50) {
        let num = scrollTop - 50
        if (num <= 0) {
          this.navbar.opacity = 0
        } else {
          num = num > 50 ? 50 : num
          this.navbar.opacity = parseFloat((num / 50).toFixed(2))
        }
        
      }else {
        this.navbar.opacity = 0
      }
      // console.log(JSON.stringify(data))
    }
  }
</script>

<style lang="less">
  .page-user-index {
    min-height: 900px;
    
    .user-index-header {
      padding-top:var(--status-bar-height);
      .user-index-header-content {
        margin-top: 100rpx;
        .user-index-avatar {
          width: 120rpx;
          height: 120rpx;
          display: inline-block;
          background: #FFFFFF;
          border-radius: 120rpx;
        }
        
        .user-index-name {
          line-height: 60rpx;
          font-size: 32rpx;
          padding-left: 20rpx;
        }
      }
    }
  }
</style>
