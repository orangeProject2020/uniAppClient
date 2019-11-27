const isDev = (process.env.NODE_ENV === 'development') ? true : false
const devHost = 'http://127.0.0.1:10013'
const prodHost = 'http://mall.jianpiane.com'

const config = {
  apiDomain: isDev ? 'http://127.0.0.1:10000' : 'http://api.jianpiane.com',
  channelId: '886',
  signKey: 'qsopifkhjjgjgfossfngnjgdsknkjlkljs',
  businessId: 0,
  
  urls: {
    mallIndex: isDev ? (devHost + '/') : (prodHost + '/'),
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
    aboutExtLink: isDev ? (devHost + '/about?from=appTab') : (prodHost + '/about?from=appTab'),
    protocolExtLink:isDev ? (devHost + '/protocol?from=appTab') : (prodHost + '/protocol?from=appTab')
  },
  
  mallLinks: {
    
    mallOrder:  '/order/list',
    mallOrder0:  '/order/list?status=0',
    mallOrder1:  '/order/list?status=1',
    mallOrder2:  '/order/list?status=2',
    mallOrder3: '/order/list?status=3',
    mallAddress:  '/address/list',
    mallCollect: '/user/collet',
    orderAfter: '/order/after',
    orderComment: '/order/comment',
    mallProfit:  '/user/profit',
    mallWithdrawApply: '/user/withdraw',
    mallWithdrawList: '/user/withdraw',
    userInvite: '/user/invite',
    userInviteList: '/user/invite',
    aboutExtLink:  '/about',
    protocolExtLink:'/protocol'
  },
  
  moneyImg: isDev ? ('http://127.0.0.1:10021/uploads/app/money.gif') : ('http://img.jianpiane.com/uploads/app/money.gif') 
}


export default config