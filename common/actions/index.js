import 'whatwg-fetch'
import 'babel-polyfill'

export const app = (topicId) => (dispatch, getState) => {
    
    dispatch({
        type: 'SHOW_PROGRESS'
    })
}

export const jandanShowNext = (dispatch, getState) => {
    dispatch({
        type: 'SHOW_PROGRESS'
    })
}

export const fetchDouban = () => async (dispatch, getState) => {
   let page = getState().douban.page + 1
   let res = await fetch('http://localhost:3000/api/douban/' + page)
   let json = await res.json()
   dispatch({
       type: 'FETCH_DOUBAN',
       payload: json.imgUrls
   })
}

export const fetchJandan = () => async (dispatch, getState) => {
   let page = getState().jandan.page + 1
   let res = await fetch('http://localhost:3000/api/jandan/' + page)
   let json = await res.json()
   dispatch({
       type: 'FETCH_JANDAN',
       payload: json.imgUrls
   })
}