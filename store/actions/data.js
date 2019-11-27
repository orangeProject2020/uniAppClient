import Request from './../request.js'

export default {
  
	async indexTimestampGet(store) {
		let ret = await Request.get('/timestamp')
		return ret
	},
	
  async indexDataGet(store , data) {
    let ret = await Request.post('/utils/app/indexData', {type: data.type})
    if (ret.code === 0){
      uni.setStorageSync('index_data_' + data.type, JSON.stringify(ret.data))
    }
    return ret
  },
  
  async countdownGet(store) {
    let ret = await Request.post('/utils/app/countdown')
    return ret
  }
}