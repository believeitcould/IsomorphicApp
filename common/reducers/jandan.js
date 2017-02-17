let initialState = {
    page: 0,
    urls: [],
    current: 0,
}

const jandan = (state = initialState, action) => {
    if (typeof state == 'undefined') {
        return []
    }
    switch(action.type) {
        case 'JANDAN_SHOW_NEXT':
            return {
                ...state,
                current: state.current + 1
            }
        case 'FETCH_JANDAN':
            return {
                ...state,
                page: state.page + 1,
                urls: state.urls.concat(action.payload)
            }
        default:
            return state
    }
}

export default jandan