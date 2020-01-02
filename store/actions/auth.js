import Request from './../request.js'

export default {
  
  async authTest(store) {
    let ret = await Request.post('/user/auth/test')
    return ret
  },
  
  async getVerifyCode(store, data) {
    let ret = await Request.post('/utils/sms/sendVerifyCode', data)
    return ret
  },
  
  async authLogin(store, data) {
    let ret = await Request.post('/user/auth/login', data)
    return ret
  },
  
  async authRegister(store, data) {
    let ret = await Request.post('/user/auth/register', data)
    return ret
  },
  
  async authForgetPassword(store, data) {
    let ret = await Request.post('/user/auth/forgetPassword', data)
    return ret
  }
}