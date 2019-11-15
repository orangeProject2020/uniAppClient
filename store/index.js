import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import STATE from './states/index'
import ACTIONS from './actions/index'

const store = new Vuex.Store({
    state: STATE,
    mutations: {
    },
    actions: ACTIONS
})

export default store