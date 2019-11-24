import Request from './../request.js'

export default {
  
  async userInfoGet(store) {
    let ret = await Request.post('/user/data/infoApp')
    return ret
  },
  
  async userAssetsGet(store , data = {}) {
    let ret = await Request.post('/mall/user/infoAssets' , data)
    return ret
  }
}