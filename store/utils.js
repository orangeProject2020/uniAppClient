const moment = require('moment')

export default {
  forceRefresh() {
    let forceRefreshTimestamp = uni.getStorageSync('last_force_refresh') || 0
    let nowTime = Date.now()
    if (!forceRefreshTimestamp) {
      uni.setStorageSync('last_force_refresh', nowTime.toString())
      return true
    } else {
      if (nowTime - parseInt(forceRefreshTimestamp) > 10 * 60 * 1000) {
        uni.setStorageSync('last_force_refresh', nowTime.toString())
        return true
      } else {
        return false
      }
    }
  },
	getTimestamp(timeStr) {
		let date = new Date(timeStr)
		console.log('/getTimestamp date:', date)
		return parseInt(date.getTime() / 1000)
	},
	dateFormat(timestamp, format) {
		format = format || 'YYYY-MM-DD HH:mm'
		let date = null
		if (!timestamp) {
			date = new Date()
		} else {
			date = new Date(timestamp * 1000)
		}
		return moment(date).format(format)
	}
}
