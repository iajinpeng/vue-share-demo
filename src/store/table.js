/**
 * Created by jinpeng on 2018/3/27.
 */
import * as types from './mutation-types'
export default {
    state: {
        data: [
            {
                name: 'John Brown',
                age: 18,
                address: 'New York No. 1 Lake Park'
            },
            {
                name: 'Jim Green',
                age: 24,
                address: 'London No. 1 Lake Park'
            },
            {
                name: 'Joe Black',
                age: 30,
                address: 'Sydney No. 1 Lake Park'
            },
            {
                name: 'Jon Snow',
                age: 26,
                address: 'Ottawa No. 2 Lake Park'
            }
        ]
    },
    getters: {
        tableData(state){
            return state.data
        }
    },
    actions: {
        delRow({commit}, name){
            commit(types.DEL_ROW, name)
        },
        addRow({commit}, row){
            commit(types.ADD_ROW, row)
        }
    },
    mutations: {
        [types.DEL_ROW](state, name){
            state.data = state.data.filter(item => item.name !== name)
        },
        [types.ADD_ROW](state, row){
            state.data.push(row)
        }
    }
}