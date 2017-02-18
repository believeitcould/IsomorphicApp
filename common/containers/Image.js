import { connect } from 'react-redux'
import App from '../components/App'
import { fetchJandan } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    page: state.jandan.page,
    urls: state.jandan.urls,
    current: state.jandan.current,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchData: () => dispatch(fetchJandan()),

    showNext: () => {
        dispatch({
            type:　'JANDAN_SHOW_NEXT'
        })
    }
})

const AppCon = connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

export default AppCon
