const isDev = (process.env.NODE_ENV === 'development') ? true : false
const devHost = 'http://127.0.0.1:10013'
const prodHost = 'http://127.0.0.1:10013'

const config = {
  apiDomain: isDev ? 'http://127.0.0.1:10000' : 'http://127.0.0.1:10000',
  channelId: '886',
  signKey: 'qsopifkhjjgjgfossfngnjgdsknkjlkljs',
  
  urls: {
    mallIndex: isDev ? (devHost + '/?from=appTab') : (prodHost + '/?from=appTab'),
    mallCartIndex: isDev ? (devHost + '/cart?from=appTab') : (prodHost + '/cart?from=appTab'),
    mallOrder:  isDev ? (devHost + '/order/list?from=appTab') : (prodHost + '/order/list?from=appTab'),
    mallAddress: isDev ? (devHost + '/user/address?from=appTab') : (prodHost + '/user/address?from=appTab'),
		mallCollect: isDev ? (devHost + '/user/collet?from=appTab') : (prodHost + '/user/collet?from=appTab'),
		orderAfter: isDev ? (devHost + '/order/after?from=appTab') : (prodHost + '/order/after?from=appTab'),
		orderComment: isDev ? (devHost + '/order/comment?from=appTab') : (prodHost + '/order/comment?from=appTab'),
		mallProfit: isDev ? (devHost + '/profit/list?from=appTab') : (prodHost + '/profit/list?from=appTab'),
  }
}


export default config