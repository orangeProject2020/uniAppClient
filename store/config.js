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