import Request from './../request.js'

export default {
  
  async authTest(store) {
    let ret = await Request.post('/user/auth/test')
    return ret
  },
  
  async authLogin(store, data) {
    let ret = await Request.post('/user/auth/login')
    return ret
  },
}