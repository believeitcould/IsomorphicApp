let initialState = {
    page: 0,
    urls: [],
    current: 0,
}

const douban = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }
    switch(action.type) {
        case 'DOUBAN_SHOW_NEXT':
            return {
                ...state,
                current: state.current + 1
            }
        case 'FETCH_DOUBAN':
            return {
                ...state,
                page: state.page + 1,
                urls: state.urls.concat(action.payload)
            }
        default:
            return state
    }
}

export default douban