
import config from './config.js';
const apiDomain= config.apiDomain
const channelId = config.channelId
const signKey = config.signKey
import md5 from 'js-md5';
import uuidv4 from 'uuid/v4';

class Request {

  async post(url, data = {}, query = {}) {

    let token = uni.getStorageSync('user_auth_token') || '';
    if (token) {
      url += '?token=' + token
    }
    let header = {}
    header.uuid = uuidv4()
    header.timestamp = Date.now()
    // header.channel_id = channelId
    header['Content-Type'] = 'application/json'
    console.log('request apiDomain' , apiDomain)
    data.channel_id = channelId
    
    let sign = this.signData(data, header).toLowerCase()
    console.log('request sign', sign)
    data.sign = sign
    return new Promise((r, j) => {
      uni.request({
        url: apiDomain + url, //仅为示例，并非真实接口地址。
        method: 'POST',
        dataType: 'json',
        data: data,
        header: header,
        success: (res) => {
          // console.log('request response ', JSON.stringify(res.data));
          r(res.data)
          let ret = res.data
           console.log('request response code:', ret.code);
           console.log('request response message:', ret.message);
          // this.text = 'request success';
          if(ret.code == -100){
            uni.showToast({
              icon:'none',
              title: '登录信息已过期，请重新登录',
              duration: 1500,
              success() {
              	uni.navigateTo({
              		url:'/pages/auth/login'
              	})
              }
            });
            
          }else if (ret.code == -101){
            uni.showToast({
              icon:'none',
              title: '网络异常，请稍后再试！',
              duration: 2000
            });
            r({
              code: -1,
              message: '网络异常，请稍后再试！'
            })
          }
        },
        fail: () => {
          uni.showToast({
            icon:'none',
            title: '网络异常，请稍后再试！',
            duration: 2000
          });
          r({
            code: -1,
            message: '网络异常，请稍后再试！'
          })
        }
      });
    })
  }

  signData(data, header) {
    // console.log('obj:', JSON.stringify(obj))
    data.timestamp = header.timestamp
    data.key = signKey
    
    let signStrArr = []
    Object.keys(data).sort().forEach(key => {
      if (key != 'sign' && typeof key !== 'array' && typeof key !== 'object') {
        signStrArr.push(`${key}=${data[key]}`)
      }
    })
    let signStr = signStrArr.join('&')
    console.log('request signStr', signStr)
    let signMd5 = md5(signStr)
    console.log('request signMd5',signMd5)
    return signMd5
  }
  
  async upload(path){
    
    return new Promise((r,j) => {
      uni.uploadFile({
          url: apiDomain + '/upload', //仅为示例，非真实的接口地址
          filePath: path,
          name: 'file',
          dataType: 'json',
          formData: {},
          success: (uploadFileRes) => {
              console.log('uploadFileRes' , uploadFileRes.data);
              let ret = JSON.parse(uploadFileRes.data)
              if(ret.code == 0){
                r(ret.data.url)
              }else {
                console.log('uploadFileRes err msg' , ret.message)
                j(null)
              }
              // r(uploadFileRes.data)
          },
          fail: (err) => {
            console.log(err)
          	j(null)
          }
      });
    })
    
  }
}

export default new Request