import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../common/reducers'
import routes from '../common/routes'

const initialState = window.__PRELOADED_STATE__

// const store = createStore(reducer)
const store = createStore(reducer, initialState, applyMiddleware(thunk))

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory} routes={routes} />
	</Provider>), document.getElementById('root'))

