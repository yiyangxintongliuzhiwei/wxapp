import * as types from './mutation-type'
import listdata from '../data/data.js'
export default {
    getlist({commit}) {
        // console.log('actions')
        commit(types.RECIVE_LIST, listdata)
    }
}
