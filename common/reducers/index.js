import { combineReducers } from 'redux'
import jandan from './jandan'
import douban from './douban'
const reducer = combineReducers({
    jandan,
    douban
})

export default reducer
