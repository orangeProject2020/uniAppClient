import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import STATE from './states/index'
import ACTIONS from './actions/index'

const store = new Vuex.Store({
    state: STATE,
    mutations: {
      userInfoSet(state, data) {
        state.userData = data
      },
      userAesstsSet(state, data) {
        state.userAssets = data
      },
      userOrdersSet(state, data) {
        state.userOrders = data
      },
      lastLoginSet(state, data) {
        state.lastLogin = data
      }
    },
    actions: ACTIONS
})

export default store