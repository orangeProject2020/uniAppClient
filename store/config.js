const isDev = (process.env.NODE_ENV === 'development') ? true : false
const devHost = 'http://127.0.0.1:10013'
const prodHost = 'http://mall.jianpiane.com'

const config = {
  apiDomain: isDev ? 'http://127.0.0.1:10000' : 'http://api.jianpiane.com',
  channelId: '886',
  signKey: 'qsopifkhjjgjgfossfngnjgdsknkjlkljs',
  
  urls: {
    mallIndex: isDev ? (devHost + '/?from=appTab') : (prodHost + '/?from=appTab'),
    mallCartIndex: isDev ? (devHost + '/cart?from=appTab') : (prodHost + '/cart?from=appTab'),
    mallOrder:  isDev ? (devHost + '/order/list?from=appTab') : (prodHost + '/order/list?from=appTab'),
    mallOrder0:  isDev ? (devHost + '/order/list?status=0&from=appTab') : (prodHost + '/order/list?status=0&from=appTab'),
    mallOrder1:  isDev ? (devHost + '/order/list?status=1&from=appTab') : (prodHost + '/order/list?status=1&from=appTab'),
    mallOrder2:  isDev ? (devHost + '/order/list?status=2&from=appTab') : (prodHost + '/order/list?status=2&from=appTab'),
    mallOrder3:  isDev ? (devHost + '/order/list?status=3&from=appTab') : (prodHost + '/order/list?status=3&from=appTab'),
    mallAddress: isDev ? (devHost + '/address/list?from=appTab') : (prodHost + '/address/list?from=appTab'),
		mallCollect: isDev ? (devHost + '/user/collet?from=appTab') : (prodHost + '/user/collet?from=appTab'),
		orderAfter: isDev ? (devHost + '/order/after?from=appTab') : (prodHost + '/order/after?from=appTab'),
		orderComment: isDev ? (devHost + '/order/comment?from=appTab') : (prodHost + '/order/comment?from=appTab'),
		mallProfit: isDev ? (devHost + '/user/profit?from=appTab') : (prodHost + '/user/profit?from=appTab'),
    mallWithdrawApply: isDev ? (devHost + '/user/withdraw?from=appTab&status=0') : (prodHost + '/user/withdraw?from=appTab&status=0'),
    mallWithdrawList: isDev ? (devHost + '/user/withdraw?from=appTab&status=1') : (prodHost + '/user/withdraw?from=appTab&status=1'),
    userInvite: isDev ? (devHost + '/user/invite?from=appTab') : (prodHost + '/user/invite?from=appTab'),
    userInviteList: isDev ? (devHost + '/user/invite?from=appTab&active=logs') : (prodHost + '/user/invite?from=appTab&active=logs'),
  }
}


export default config