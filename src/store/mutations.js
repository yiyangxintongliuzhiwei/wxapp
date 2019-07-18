import * as types from './mutation-type'
export default {
    [types.RECIVE_LIST](state, listdata) {
        state.listTmp = listdata
        console.log(state.listTmp)
    }
}
