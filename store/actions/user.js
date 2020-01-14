import Request from './../request.js'

export default {
  
  async userInfoGet(store) {
    let ret = await Request.post('/user/data/infoApp')
    return ret
  },
  
  async userInfoUpdate(store, data) {
    let ret = await Request.post('/user/info/update', data)
    return ret
  },
  
  async userAssetsGet(store , data = {}) {
    let ret = await Request.post('/mall/user/infoAssets' , data)
    return ret
  },
  
  async userOrdersGet(store , data = {}) {
    let ret = await Request.post('/mall/user/infoOrders' , data)
    return ret
  },
  
  async getUserMsg(store, data = {}) {
    let ret = await Request.post('/user/message/listUser' , data)
    return ret
  },
  
  async getUserMsgCountNoRead(store, data= {}) {
    let ret = await Request.post('/user/message/noReadCount', data)
    return ret
  }
  
}