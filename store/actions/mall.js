import Request from './../request.js'

export default {
  
  async getGoodsList(store, data) {
    let ret = await Request.post('/mall/goods/list' , data)
    if (ret.code === 0){
      let rows = (ret.data.rows && ret.data.rows.length) ? JSON.stringify(ret.data.rows) : ''
      uni.setStorageSync('mall_goods_list_' + data.category_id, rows)
    }
    return ret
  },
  
  async getCategorys(store, data) {
    let ret = await Request.post('/mall/goods/categorys' , data)
    if (ret.code === 0){
      let rows = (ret.data.rows && ret.data.rows.length) ? JSON.stringify(ret.data.rows) : ''
      uni.setStorageSync('mall_categorys', rows)
    }
    return ret
  }
}