const moment = require('moment')

export default {
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
