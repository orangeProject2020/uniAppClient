<template>
	<view :class="classVal" style="display: inline;">
		<text>{{icon}}{{ money }}</text>
	</view>
</template>

<script>
	export default {
    props:{
      num:{
        type: Number|String,
        default:0
      },
      class: {
        type: String,
        default:''
      },
      icon:{
        type: String,
        default:'￥'
      }
    },
		data() {
			return {
				money: '0',
        classVal: '',
        iconVal: '￥'
			};
		},
    methods:{
      formatNum(){
        this.money = (this.num / 100).toFixed(2)
      }
    },
    created() {
      this.formatNum()
      this.classVal = this.class
      this.iconVal = this.icon
    },
    watch:{
      num(newVal,oldVal){
        console.log('newVal' , newVal)
        this.formatNum()
      }
    }
	}
</script>

<style>

</style>
