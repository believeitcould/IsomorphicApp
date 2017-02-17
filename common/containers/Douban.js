import { connect } from 'react-redux'
import Douban from '../components/Douban'
import { fetchDouban } from '../actions'

const mapStateToProps = (state, ownProps) => ({
    page: state.douban.page,
    urls: state.douban.urls,
    current: state.douban.current,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    // getIndexData: () => {
    //     dispatch(getThenShow(ownProps.pageIndex, ownProps.tab))
    // }
    fetchData: () => dispatch(fetchDouban()),
    
    showNext: () => {
        dispatch({
            type:　'DOUBAN_SHOW_NEXT'
        })
    }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Douban)


