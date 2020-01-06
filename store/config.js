const isDev = (process.env.NODE_ENV === 'development') ? true : false
const devHost = 'http://127.0.0.1:10013'
const prodHost = 'http://mall.sunonenight.com'

const config = {
  apiDomain: isDev ? 'http://127.0.0.1:10000' : 'http://api.sunonenight.com',
  channelId: '886',
  signKey: 'qsopifkhjjgjgfossfngnjgdsknkjlkljs',
  businessId: 0,
  
  urls: {
    mallIndex: isDev ? (devHost + '/') : (prodHost + '/'),
  },
  
  mallLinks: {
    mallCartIndex: '/cart',
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
    mallWithdrawApply: '/user/withdrawApply',
    mallWithdrawList: '/user/withdraw',
    userInvite: '/user/invite',
    userInviteList: '/user/invite',
    aboutExtLink:  '/about',
    protocolExtLink:'/protocol',
    userMsg: '/user/msg'
  },
  
  moneyImg: isDev ? ('http://127.0.0.1:10021/uploads/app/money.gif') : ('http://img.sunonenight.com/uploads/app/money.gif') 
}


export default config