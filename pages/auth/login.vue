<template>
</template>

<script>
  export default {
    onShow() {
      // #ifdef MP-WEIXIN
      uni.redirectTo({
        url:'/pages/auth/mini'
      })
      // #endif
    }
  }
</script>

<style>
</style>
