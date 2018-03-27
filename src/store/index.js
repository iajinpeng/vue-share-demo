/**
 * Created by DELL on 2018/3/26.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './mutation-types'
import TableStore from './modules/table'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 0,
    },
    getters: {
        countText(state){
            return '当前计数:' + state.count
        }
    },
    actions: {
        addCount({ commit }){
            commit(types.ADD_COUNT)
        }
    },
    mutations: {
        [types.ADD_COUNT](state){
            return state.count ++
        }
    },
    modules: {
        TableStore,
    }
})