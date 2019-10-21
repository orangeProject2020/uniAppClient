import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import STATE from './states'
import ACTIONS from './actions'

const store = new Vuex.Store({
    state: STATE,
    mutations: {
    },
    actions: ACTIONS
})

export default store